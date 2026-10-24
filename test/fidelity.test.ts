/**
 * The fidelity gate.
 *
 * OPT-IN, NOT PART OF THE DEFAULT RUN. Skipped unless RUN_FIDELITY=1 (use
 * `npm run test:fidelity`, after `npm run build`). This verifies a one-time
 * migration against HTML frozen before the migration, but the content it
 * compares is now live and editable in the Sanity Studio: any typo fix or
 * reworded sentence would fail it, turning CI red with no code at fault. It
 * is kept as the record of the migration and for on-demand re-checks.
 *
 * This was the go/no-go for deleting the original, hand-coded /blog/[slug]
 * pages (Task 12). It compares each migrated article, as rendered by the
 * Sanity-backed /blog/[slug] template (now the real route, post-cutover),
 * against the frozen baseline captured from the original page before
 * migration.
 *
 * What is compared, for all 10 slugs:
 *
 *   1. The article body container (the <div> whose style contains both
 *      `max-width:760px` and `line-height:1.75`) must be identical after
 *      normalising away two, and only two, known-harmless differences:
 *        - React hydration comment markers (`<!-- -->`), which the original
 *          hand-written JSX emits at inline-mark boundaries (e.g. around a
 *          `{" "}` spacer) but the Portable Text renderer does not.
 *        - Whitespace: the original JSX carries indentation/formatting
 *          whitespace between tags that the migrated markup doesn't
 *          reproduce byte-for-byte.
 *      These two normalisations were verified directly (see task-11 report)
 *      to make all 10 bodies identical, including iso-9001-vs-iso-45001;
 *      new-fire-safety-laws is the only slug that differs at raw-byte level,
 *      and only in whitespace. Nothing else is normalised: tags, attributes,
 *      URLs and text must match exactly.
 *
 *      The HTML-level check above has a known blind spot: collapsing
 *      `> <` to `><` removes ANY whitespace-only text node sitting directly
 *      between two tags, including a genuine word-space at an inline-mark
 *      boundary (e.g. `<strong>world</strong> <em>there</em>` and
 *      `<strong>world</strong><em>there</em>` both normalise to the same
 *      string, even though the first renders "world there" and the second
 *      "worldthere"). Inline-mark boundaries are exactly where this
 *      migration has already hit one whitespace problem, so this isn't
 *      hypothetical. To close that hole, the body's plain `textContent`
 *      (which has no tags for `> <` to match against) is compared
 *      independently, after collapsing whitespace to single spaces — see
 *      "body text content matches exactly" below. The two checks are
 *      deliberately kept separate rather than merged: the HTML check is
 *      still needed to catch dropped/changed tags, attributes and URLs
 *      that textContent alone can't see.
 *   2. The <h1> text content, including the lime-highlighted span's text.
 *   3. The CTA's label and href, found inside its own container (the <div>
 *      whose style is `max-width:760px;margin:0 auto;padding:0 24px 84px`)
 *      rather than by scanning the whole page, which carries ~20 unrelated
 *      links from the header and footer.
 *
 * Four differences are known, sanctioned, and deliberately NOT checked here:
 * computed read time, the h1's clamp() font-size (always
 * `clamp(28px, 4.4vw, 46px)` on the migrated template), dates always
 * carrying the year, and hero images served from Sanity's CDN. None of
 * those are touched by the three checks above, so no special-casing is
 * needed to exempt them.
 *
 * Requires a prior `npm run build` (reads from .next/server/app/blog/).
 */

import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";
import { findArticleBody, findCtaContainer, collapseWhitespace } from "../lib/blog/compare-html";

const BASELINE_DIR = join("test", "fixtures", "blog-baseline");
const BUILD_DIR = join(".next", "server", "app", "blog");

const slugs = readdirSync(BASELINE_DIR)
  .filter((f) => f.endsWith(".html"))
  .map((f) => f.replace(/\.html$/, ""))
  .sort();

/**
 * Strip React's hydration comment markers (`<!-- -->`, `<!--$-->`, etc).
 *
 * Loops until the string stops changing rather than replacing once: a single
 * pass over something like `<!--<!---->` removes the inner comment and leaves
 * a dangling `<!--` behind. That is CodeQL's js/incomplete-multi-character-
 * sanitization, and while the inputs here are our own build output and
 * committed fixtures — never user input, never rendered — a comparison helper
 * that can leave residue is worth making total rather than arguing about.
 */
function stripComments(s: string): string {
  let out = s;
  let previous: string;
  do {
    previous = out;
    out = out.replace(/<!--[\s\S]*?-->/g, "");
  } while (out !== previous);
  return out;
}

/**
 * The article body, normalised for the two sanctioned, justified differences
 * only: hydration comment markers and whitespace. The final `> <` -> `><`
 * pass removes purely structural whitespace left between sibling/nested tags
 * after collapsing (JSX indentation); it cannot eat a real word-space,
 * because a word-space always has text, not a tag, on at least one side.
 */
function normalisedBodyHtml(html: string): string {
  const root = parse(html);
  const body = findArticleBody(root);
  if (!body)
    throw new Error(
      "article body container not found (no div with max-width:760px + line-height:1.75)",
    );
  return collapseWhitespace(stripComments(body.innerHTML)).replace(/> </g, "><");
}

/**
 * The article body's plain text, whitespace collapsed to single spaces.
 * Independent safety net for normalisedBodyHtml's `> <` -> `><` collapse,
 * which can mask a real word-space at an inline-mark boundary (see the
 * module docstring). textContent has no tags, so there is nothing for that
 * collapse to match against — a missing word-space here simply glues two
 * words together, which this catches.
 */
function normalisedBodyText(html: string): string {
  const root = parse(html);
  const body = findArticleBody(root);
  if (!body)
    throw new Error(
      "article body container not found (no div with max-width:760px + line-height:1.75)",
    );
  return collapseWhitespace(body.textContent);
}

function heroText(html: string): { title: string; cta: string } {
  const root = parse(html);
  const h1 = root.querySelector("h1");
  if (!h1) throw new Error("h1 not found");

  const ctaContainer = findCtaContainer(root);
  if (!ctaContainer) {
    throw new Error(
      "CTA container not found (no div with style max-width:760px;margin:0 auto;padding:0 24px 84px)",
    );
  }
  const cta = ctaContainer.querySelector("a");
  if (!cta) throw new Error("CTA link not found inside CTA container");

  return {
    title: collapseWhitespace(h1.textContent),
    cta: `${cta.getAttribute("href")} ${collapseWhitespace(cta.textContent)}`,
  };
}

function builtPath(slug: string): string {
  return join(BUILD_DIR, `${slug}.html`);
}

function readBuilt(slug: string): string {
  const path = builtPath(slug);
  if (!existsSync(path)) {
    throw new Error(
      `missing built preview for "${slug}" (expected ${path}) — run \`npm run build\` first, then re-run this test`,
    );
  }
  return readFileSync(path, "utf8");
}

function readBaseline(slug: string): string {
  return readFileSync(join(BASELINE_DIR, `${slug}.html`), "utf8");
}

describe.skipIf(!process.env.RUN_FIDELITY)("migrated posts match their baseline", () => {
  it("has a baseline for all 10 posts", () => {
    expect(slugs).toHaveLength(10);
  });

  for (const slug of slugs) {
    it(`${slug}: body matches after comment/whitespace normalisation`, () => {
      const built = normalisedBodyHtml(readBuilt(slug));
      const baseline = normalisedBodyHtml(readBaseline(slug));
      expect(built).toBe(baseline);
    });

    it(`${slug}: body text content matches exactly`, () => {
      const built = normalisedBodyText(readBuilt(slug));
      const baseline = normalisedBodyText(readBaseline(slug));
      expect(built).toBe(baseline);
    });

    it(`${slug}: title and CTA survive`, () => {
      const built = heroText(readBuilt(slug));
      const baseline = heroText(readBaseline(slug));
      expect(built.title).toBe(baseline.title);
      expect(built.cta).toBe(baseline.cta);
    });
  }
});
