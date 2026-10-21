/**
 * verify-baseline.ts
 *
 * Compares the current build's blog pages against the frozen baselines in
 * test/fixtures/blog-baseline/, using a content-level contract rather than
 * whole-file byte identity. Whole-file identity is the wrong bar whenever a
 * change legitimately alters Next.js's internal RSC/bundling bookkeeping
 * (build ID, chunk hashes, reference IDs, preload tags, duplicated
 * not-found serialization, etc.) without changing anything a visitor,
 * search engine, or social-share scraper would ever observe.
 *
 * What this script checks, for every slug in test/fixtures/blog-baseline:
 *
 *   (A) Article body — the <div> whose `style` attribute contains both
 *       `max-width:760px` and `line-height:1.75` (the post's prose
 *       container) must have identical innerHTML, modulo whitespace
 *       collapsing, to the baseline's.
 *   (B) Head metadata — every <meta> and <link> tag under <head> (excluding
 *       Next's own `/_next/static/chunks/...` stylesheet/preload links,
 *       which are chunk-hash build artifacts, explicitly out of scope —
 *       see below), each rendered as a canonical `<tag attr="val" ...>`
 *       string with attributes sorted, collected as a set and compared to
 *       the baseline's set. Both sides have any `/opengraph-image-<hash>`
 *       route-group suffix normalized back to `/opengraph-image` first,
 *       since that path change is a sanctioned, deliberate delta (see
 *       task-4 report, round 3).
 *   (C) Structured data — every `<script type="application/ld+json">`
 *       block, JSON.parsed, deep-compared to the baseline's, after
 *       normalizing each BlogPosting's `image` and `headline` (see below).
 *
 * Explicitly OUT of scope (known, accepted deltas from splitting the app
 * into (site)/(studio) route groups): build ID, chunk filenames/hashes,
 * RSC reference-ID numbering, the extra shared preload <script>, and the
 * doubled not-found fallback serialization. None of these affect A, B, or C.
 *
 * Also out of scope (Task 12, the Sanity cutover):
 *   - `image`: the hand-written articles' BlogPosting `image` pointed at a
 *     local `/assets/blog-*.png` file; the Sanity-backed articles point at
 *     the equivalent hero image served from Sanity's CDN (cdn.sanity.io)
 *     instead. Same sanctioned, content-identical delta already called out
 *     in test/fidelity.test.ts ("hero images served from Sanity's CDN"),
 *     just also visible inside structured data.
 *   - `headline`: before this migration, a post's <h1> text and its
 *     BlogPosting headline/index-card title came from two independently
 *     hand-maintained strings (the page's own JSX vs `BLOG_POSTS` in
 *     app/(site)/blog/posts.ts) that had drifted apart — not just casing
 *     ("Toolbox Talks" vs "Toolbox talks") but, for 3 of the 10 posts,
 *     wording/punctuation (e.g. "New Fire Safety Laws 2026: Is Your
 *     Evacuation Strategy Legal?" vs the <h1>'s "New fire safety laws 2026:
 *     is your resident evacuation strategy legal?"). Sanity's `title` was
 *     migrated from the <h1> (see scripts/migrate-posts.ts) and is now the
 *     single source of truth for both, per Task 12's brief ("the index's
 *     card titles are currently Title Case ... After cutover the Sanity
 *     `title` is canonical"). So the headline is expected to change,
 *     sometimes by more than case, and that is sanctioned.
 *
 * Both fields' values are normalized to a constant placeholder before
 * comparison so these two expected deltas can't mask a real regression
 * (e.g. either field going missing, or a post picking up the wrong value).
 *
 * Requires a prior `npm run build` (reads from .next/server/app/blog/).
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse, type HTMLElement } from "node-html-parser";
import { findArticleBody, collapseWhitespace } from "../lib/blog/compare-html";

const BUILD_DIR = join(".next", "server", "app", "blog");
const BASELINE_DIR = join("test", "fixtures", "blog-baseline");

// The opengraph-image route lives inside the (site) route group, so Next
// appends a deterministic disambiguation suffix (see
// node_modules/next/dist/lib/metadata/get-metadata-route.js,
// getMetadataRouteSuffix). That URL change is sanctioned; normalize it away
// before comparing so an unrelated regression isn't masked by it either.
function normalizeOpengraphSuffix(s: string): string {
  return s.replace(/\/opengraph-image-[a-z0-9]+/g, "/opengraph-image");
}

function canonicalTag(el: HTMLElement): string {
  const attrs = el.attributes;
  const sortedKeys = Object.keys(attrs).sort();
  const attrString = sortedKeys.map((k) => `${k}="${attrs[k]}"`).join(" ");
  return `<${el.tagName.toLowerCase()}${attrString ? " " + attrString : ""}>`;
}

// Next's own bundler-emitted <link> tags for JS/CSS chunks carry build-time
// content hashes that are known to vary between builds for reasons unrelated
// to page content (see task-4 report, rounds 1-3). These are build
// bookkeeping, not page metadata, so they're excluded from the comparison.
function isBundlerChunkLink(el: HTMLElement): boolean {
  return Object.values(el.attributes).some((value) => value.includes("/_next/static/chunks/"));
}

function headMetaAndLinkTags(root: HTMLElement): string[] {
  const head = root.querySelector("head");
  if (!head) return [];
  return head
    .querySelectorAll("meta, link")
    .filter((el) => !isBundlerChunkLink(el))
    .map((el) => normalizeOpengraphSuffix(canonicalTag(el)));
}

// Sanctioned Task-12 deltas inside structured data, normalized to a constant
// placeholder before comparing (see module docstring for why each is safe):
//   - `image`: local /assets path -> Sanity CDN URL.
//   - `headline`: the page's own <h1> is now the single source of truth,
//     superseding the separately hand-maintained (and, for 3/10 posts,
//     drifted) BLOG_POSTS title.
const SANCTIONED_LD_FIELDS: Record<string, string> = {
  image: "HERO_IMAGE",
  headline: "ARTICLE_HEADLINE",
};

function normalizeSanctionedFields(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(normalizeSanctionedFields);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      const placeholder = SANCTIONED_LD_FIELDS[key];
      out[key] =
        placeholder && typeof val === "string" ? placeholder : normalizeSanctionedFields(val);
    }
    return out;
  }
  return value;
}

function structuredData(root: HTMLElement): unknown[] {
  return root
    .querySelectorAll('script[type="application/ld+json"]')
    .map((el) => normalizeSanctionedFields(JSON.parse(el.textContent)));
}

type CheckResult = { label: string; pass: boolean; detail?: string };

function diffPreview(current: string, baseline: string): string {
  let i = 0;
  const len = Math.min(current.length, baseline.length);
  while (i < len && current[i] === baseline[i]) i++;
  const window = 60;
  return [
    `first difference at character ${i}:`,
    `  current:  ...${current.slice(Math.max(0, i - window), i + window)}...`,
    `  baseline: ...${baseline.slice(Math.max(0, i - window), i + window)}...`,
  ].join("\n");
}

function setDiff(current: string[], baseline: string[]): string {
  const currentSet = new Set(current);
  const baselineSet = new Set(baseline);
  const onlyCurrent = [...currentSet].filter((t) => !baselineSet.has(t));
  const onlyBaseline = [...baselineSet].filter((t) => !currentSet.has(t));
  return [
    onlyCurrent.length ? `only in current build:\n  ${onlyCurrent.join("\n  ")}` : null,
    onlyBaseline.length ? `only in baseline:\n  ${onlyBaseline.join("\n  ")}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function verifySlug(slug: string): CheckResult[] {
  const currentPath = join(BUILD_DIR, `${slug}.html`);
  const baselinePath = join(BASELINE_DIR, `${slug}.html`);

  if (!existsSync(currentPath)) {
    return [
      {
        label: "build output exists",
        pass: false,
        detail: `${currentPath} not found — run "npm run build" first`,
      },
    ];
  }

  const currentRoot = parse(readFileSync(currentPath, "utf8"));
  const baselineRoot = parse(readFileSync(baselinePath, "utf8"));
  const checks: CheckResult[] = [];

  // (A) Article body
  const currentBody = findArticleBody(currentRoot);
  const baselineBody = findArticleBody(baselineRoot);
  if (!currentBody || !baselineBody) {
    checks.push({
      label: "A: article body found",
      pass: false,
      detail: `current found=${Boolean(currentBody)}, baseline found=${Boolean(baselineBody)}`,
    });
  } else {
    const currentHtml = collapseWhitespace(currentBody.innerHTML);
    const baselineHtml = collapseWhitespace(baselineBody.innerHTML);
    const pass = currentHtml === baselineHtml;
    checks.push({
      label: "A: article body identical",
      pass,
      detail: pass ? undefined : diffPreview(currentHtml, baselineHtml),
    });
  }

  // (B) Head metadata
  const currentTags = headMetaAndLinkTags(currentRoot).sort();
  const baselineTags = headMetaAndLinkTags(baselineRoot).sort();
  const bPass = JSON.stringify(currentTags) === JSON.stringify(baselineTags);
  checks.push({
    label: "B: head meta/link tags identical",
    pass: bPass,
    detail: bPass ? undefined : setDiff(currentTags, baselineTags),
  });

  // (C) Structured data
  try {
    const currentLd = structuredData(currentRoot);
    const baselineLd = structuredData(baselineRoot);
    const cPass = JSON.stringify(currentLd) === JSON.stringify(baselineLd);
    checks.push({
      label: "C: structured data identical",
      pass: cPass,
      detail: cPass
        ? undefined
        : `current:\n${JSON.stringify(currentLd, null, 2)}\nbaseline:\n${JSON.stringify(baselineLd, null, 2)}`,
    });
  } catch (err) {
    checks.push({
      label: "C: structured data parses as JSON",
      pass: false,
      detail: String(err),
    });
  }

  return checks;
}

function main() {
  if (!existsSync(BASELINE_DIR)) {
    console.error(`Baseline directory not found: ${BASELINE_DIR}`);
    process.exit(1);
  }

  const slugs = readdirSync(BASELINE_DIR)
    .filter((f) => f.endsWith(".html"))
    .map((f) => f.replace(/\.html$/, ""))
    .sort();

  let allPass = true;
  for (const slug of slugs) {
    const checks = verifySlug(slug);
    const slugPass = checks.every((c) => c.pass);
    allPass &&= slugPass;
    console.log(`${slugPass ? "PASS" : "FAIL"}: ${slug}`);
    for (const check of checks) {
      if (!check.pass) {
        console.log(`  ✗ ${check.label}`);
        if (check.detail) {
          console.log(
            check.detail
              .split("\n")
              .map((line) => `      ${line}`)
              .join("\n"),
          );
        }
      }
    }
  }

  console.log("");
  if (allPass) {
    console.log(
      `verify:baseline — PASS (${slugs.length}/${slugs.length} slugs: article body, head metadata, structured data all match)`,
    );
    process.exit(0);
  }
  console.log("verify:baseline — FAIL (see differences above)");
  process.exit(1);
}

main();
