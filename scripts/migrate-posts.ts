/**
 * migrate-posts.ts
 *
 * One-time migration of the 10 frozen baseline blog articles
 * (test/fixtures/blog-baseline/*.html) into Sanity `post` documents, with
 * uploaded hero images and a Portable Text body produced by
 * `htmlToPortableText`.
 *
 * Deliberately does NOT import `BLOG_POSTS` from `app/(site)/blog/posts.ts`
 * — that file is removed by a later task in this migration, which would
 * make this script unrunnable afterwards. Instead it reads the committed
 * fixture `test/fixtures/blog-meta.json` for `excerpt` (its `description`)
 * and `publishedAt` (its `datePublished`). Everything else (title,
 * highlight, featured, CTA label/href, hero image path, SEO description)
 * is scraped from the baseline HTML itself.
 *
 * Run with `npm run migrate:posts`, which loads `.env.local` for the
 * Sanity project id, dataset, and write token. Always does a dry pass
 * (building and printing all 10 documents) before writing anything; pass
 * `--write` to actually perform the Sanity writes.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "next-sanity";
import { parse, type HTMLElement } from "node-html-parser";
import { htmlToPortableText } from "../lib/blog/html-to-portable-text";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const TOKEN = process.env.SANITY_WRITE_TOKEN;
if (!PROJECT_ID || !TOKEN) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN in .env.local");
}

const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01",
  token: TOKEN,
  useCdn: false,
});

const BASELINE_DIR = "test/fixtures/blog-baseline";
const META_PATH = "test/fixtures/blog-meta.json";

type BlogMeta = { slug: string; title: string; description: string; datePublished: string };

type MigratedDoc = {
  _id: string;
  _type: "post";
  title: string;
  highlight?: string;
  slug: { _type: "slug"; current: string };
  heroPath: string;
  excerpt: string;
  seoDescription?: string;
  publishedAt: string;
  featured: boolean;
  ctaLabel: string;
  ctaHref: string;
  body: ReturnType<typeof htmlToPortableText>;
};

const blogMeta: BlogMeta[] = JSON.parse(readFileSync(META_PATH, "utf8"));

/**
 * Locates the CTA inside its own container: the div whose `style` attribute
 * is exactly `max-width:760px;margin:0 auto;padding:0 24px 84px`. Throws by
 * slug if that container is missing or doesn't contain exactly one `<a>` —
 * the brief's original "last non-/blog link on the page" selector would
 * grab a footer link on these full-page baselines (21 `<a>` tags per page),
 * so it is not used.
 */
function findCta(root: HTMLElement, slug: string): { href: string; label: string } {
  const containers = root
    .querySelectorAll("div")
    .filter((d) => d.getAttribute("style") === "max-width:760px;margin:0 auto;padding:0 24px 84px");
  if (containers.length !== 1) {
    throw new Error(`${slug}: expected exactly one CTA container, found ${containers.length}`);
  }
  const anchors = containers[0].querySelectorAll("a");
  if (anchors.length !== 1) {
    throw new Error(
      `${slug}: expected exactly one <a> in the CTA container, found ${anchors.length}`,
    );
  }
  const href = anchors[0].getAttribute("href");
  if (!href) throw new Error(`${slug}: CTA <a> has no href`);
  const label = anchors[0].textContent.replace(/\s+/g, " ").trim();
  if (!label) throw new Error(`${slug}: CTA <a> has no text`);
  return { href, label };
}

/** Hero image path from the background-image declaration. Handles the
 * `&#x27;` HTML-entity-encoded apostrophes used as the url() quoting in the
 * baseline markup, in addition to literal quotes. */
function findHeroPath(html: string, slug: string): string {
  const match = html.match(/background-image:\s*url\((?:&#x27;|&#39;|['"])?(\/assets\/[^'"&)]+)/);
  if (!match) throw new Error(`${slug}: no hero image found`);
  return match[1];
}

function buildDoc(slug: string): MigratedDoc {
  const html = readFileSync(join(BASELINE_DIR, `${slug}.html`), "utf8");
  const root = parse(html);
  const meta = blogMeta.find((m) => m.slug === slug);
  if (!meta) throw new Error(`no blog-meta.json entry for ${slug}`);

  // Title and its highlighted phrase.
  const h1 = root.querySelector("h1");
  if (!h1) throw new Error(`${slug}: no <h1> found`);
  const title = h1.textContent.replace(/\s+/g, " ").trim();
  const highlight = h1.querySelector("span")?.textContent.replace(/\s+/g, " ").trim() ?? "";

  // Body container: the only div carrying max-width:760px and line-height:1.75.
  const bodyEl = root.querySelectorAll("div").find((d) => {
    const style = d.getAttribute("style") ?? "";
    return style.includes("max-width:760px") && style.includes("line-height:1.75");
  });
  if (!bodyEl) throw new Error(`${slug}: could not locate body container`);
  const body = htmlToPortableText(bodyEl.innerHTML);
  if (body.length === 0) throw new Error(`${slug}: empty body`);

  const { href: ctaHref, label: ctaLabel } = findCta(root, slug);

  const heroPath = findHeroPath(html, slug);

  // The lime "Featured" tag only appears on the featured post.
  const featured = html.includes(">Featured<");

  const seoDescription =
    root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";

  return {
    _id: `post-${slug}`,
    _type: "post",
    title,
    ...(highlight ? { highlight } : {}),
    slug: { _type: "slug", current: slug },
    heroPath,
    excerpt: meta.description,
    ...(seoDescription && seoDescription !== meta.description ? { seoDescription } : {}),
    publishedAt: `${meta.datePublished}T09:00:00Z`,
    featured,
    ctaLabel,
    ctaHref,
    body,
  };
}

function printDryPassTable(docs: MigratedDoc[]): void {
  const rows = docs.map((d) => ({
    slug: d.slug.current,
    title: d.title,
    highlight: d.highlight ?? "",
    featured: d.featured,
    ctaLabel: d.ctaLabel,
    ctaHref: d.ctaHref,
    blocks: d.body.length,
    excerptLen: d.excerpt.length,
  }));
  console.table(rows);

  const featuredSlugs = docs.filter((d) => d.featured).map((d) => d.slug.current);
  console.log(`featured: ${featuredSlugs.join(", ") || "(none)"}`);
}

async function main(): Promise<void> {
  const slugs = readdirSync(BASELINE_DIR)
    .map((f) => f.replace(/\.html$/, ""))
    .sort();

  const docs = slugs.map(buildDoc);

  console.log(`\nDry pass — ${docs.length} documents built from baseline HTML:\n`);
  printDryPassTable(docs);

  // Sanity-check the fixed expectations from the task brief before writing
  // anything. These are assertions, not configuration — if any of these
  // fire, something about the scrape logic or the source HTML has drifted
  // and a human needs to look, not silently proceed.
  const bySlug = new Map(docs.map((d) => [d.slug.current, d]));
  const expectCta: Record<string, string> = {
    "fire-safety-101": "/first-aid-fire-marshal-training",
    "prioritising-mental-health": "/e-learning",
  };
  for (const [slug, expected] of Object.entries(expectCta)) {
    const actual = bySlug.get(slug)?.ctaHref;
    if (actual !== expected) {
      throw new Error(`BLOCKED: expected ${slug} ctaHref ${expected}, got ${actual}`);
    }
  }
  for (const doc of docs) {
    if (!Object.keys(expectCta).includes(doc.slug.current) && doc.ctaHref !== "/contact") {
      throw new Error(`BLOCKED: expected ${doc.slug.current} ctaHref /contact, got ${doc.ctaHref}`);
    }
  }
  const featuredCount = docs.filter((d) => d.featured).length;
  if (featuredCount !== 1 || !bySlug.get("iso-9001-vs-iso-45001")?.featured) {
    throw new Error(
      `BLOCKED: expected exactly one featured post (iso-9001-vs-iso-45001), got ${featuredCount} featured`,
    );
  }

  console.log("\nDry-pass checks passed.");

  if (!process.argv.includes("--write")) {
    console.log("\nDry run only (pass --write to perform the Sanity write). Exiting.");
    return;
  }

  console.log(`\nWriting to Sanity dataset "${DATASET}"...\n`);

  for (const doc of docs) {
    const { heroPath, ...rest } = doc;
    const asset = await client.assets.upload("image", readFileSync(join("public", heroPath)), {
      filename: heroPath.split("/").pop(),
    });

    await client.createOrReplace({
      ...rest,
      heroImage: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
        alt: doc.title,
      },
    });

    console.log(
      `migrated: ${doc.slug.current} (${doc.body.length} blocks, featured=${doc.featured}, cta=${doc.ctaHref})`,
    );
  }

  console.log("done");
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
