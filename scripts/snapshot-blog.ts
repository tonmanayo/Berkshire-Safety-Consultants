import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { BLOG_POSTS } from "../app/(site)/blog/posts";

const BUILD_DIR = ".next/server/app/blog";
const OUT_DIR = "test/fixtures/blog-baseline";
const META_OUT = "test/fixtures/blog-meta.json";

// Derive slugs from the prerendered HTML files
const htmlFiles = readdirSync(BUILD_DIR).filter((f) => f.endsWith(".html"));
const slugs = htmlFiles.map((f) => f.replace(/\.html$/, "")).sort();

// Verify exactly 10 slugs
if (slugs.length !== 10) {
  throw new Error(
    `Expected 10 blog post slugs, but found ${slugs.length}. Files: ${htmlFiles.join(", ")}`,
  );
}

// Create the baseline directory
mkdirSync(OUT_DIR, { recursive: true });

// Copy each HTML file to the baseline directory
for (const slug of slugs) {
  const html = readFileSync(join(BUILD_DIR, `${slug}.html`), "utf8");
  writeFileSync(join(OUT_DIR, `${slug}.html`), html);
  console.log(`snapshot: ${slug} (${html.length} bytes)`);
}

// Build metadata from BLOG_POSTS
const metadata = slugs
  .map((slug) => {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) {
      throw new Error(`Slug "${slug}" found in build output but not in BLOG_POSTS`);
    }
    return {
      slug: post.slug,
      title: post.title,
      description: post.description,
      datePublished: post.datePublished,
    };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

// Write metadata fixture
writeFileSync(META_OUT, JSON.stringify(metadata, null, 2) + "\n");
console.log(`metadata: ${META_OUT} (${metadata.length} entries)`);

console.log(`done — ${slugs.length} baselines`);
