# Berkshire Blog CMS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the 10 hand-coded blog posts into an embedded Sanity Studio at `/studio`, served through a dynamic `/blog/[slug]`, without changing how any article looks.

**Architecture:** A `post` document type in a public-read Sanity dataset, rendered by a Portable Text component that emits the existing inline styles verbatim. Migration converts the _prerendered HTML_ of today's pages (not their JSX) into Portable Text, and a committed diff test gates the cutover: no hand-written page is deleted until its replacement matches the frozen baseline. `app/` splits into `(site)` and `(studio)` route groups so the Studio UI escapes the site's global CSS.

**Tech Stack:** Next.js 16.2.12 (App Router), React 19, TypeScript, Sanity v6 + next-sanity, @portabletext/react, node-html-parser, Vitest, Netlify.

**Spec:** `docs/superpowers/specs/2026-10-21-berkshire-blog-cms-design.md`

## Global Constraints

- **Next.js is 16.2.12 and differs from older conventions.** Per `AGENTS.md`, read the relevant guide in `node_modules/next/dist/docs/` before writing route, caching, or metadata code. `params` is a Promise in page and metadata props.
- **Sanity project `eyos1dte`, dataset `production`** (public read). Already created; CORS and `.env.local` are already configured. Do not create another project.
- **`SANITY_WRITE_TOKEN` is local-only.** It never goes to Netlify and never gets committed.
- **Fidelity rule:** rendered article output must match the committed baseline (after whitespace normalisation) except for four agreed deltas — computed read time, normalised title size (`clamp(28px, 4.4vw, 46px)` everywhere), always-show-year dates, and hero images served from Sanity's CDN.
- **`styled-components` must not leak outside `/studio`.** It is a Studio peer dependency only.
- **Existing slugs are immutable.** All 10 URLs must keep working.
- **Every task ends green:** `npm run lint`, `npm run typecheck`, `npm test` all pass before commit.

---

## File Structure

**Created:**

- `sanity/schemas/post.ts` — the `post` document type
- `sanity/schemas/index.ts` — schema barrel
- `sanity.config.ts` — Studio config, basePath `/studio`
- `app/(studio)/layout.tsx` — bare root layout for the Studio
- `app/(studio)/studio/[[...tool]]/page.tsx` — embedded Studio
- `lib/sanity/client.ts` — env-resilient client
- `lib/sanity/queries.ts` — typed GROQ fetchers
- `lib/sanity/image.ts` — image URL builder
- `lib/blog/format.ts` — read time, date format, title highlight split
- `lib/blog/schema.ts` — JSON-LD builders over fetched data
- `lib/blog/html-to-portable-text.ts` — migration converter
- `components/PortablePostBody.tsx` — Portable Text renderer
- `components/BlogPostArticle.tsx` — the article template (hero + body + CTA)
- `app/(site)/blog/[slug]/page.tsx` — dynamic article route
- `app/api/revalidate/route.ts` — webhook endpoint
- `scripts/snapshot-blog.ts` — captures baseline HTML
- `scripts/migrate-posts.ts` — uploads images, creates documents
- `test/fixtures/blog-baseline/*.html` — 10 committed baselines
- `lib/blog/__tests__/*.test.ts`, `components/__tests__/PortablePostBody.test.tsx`, `test/fidelity.test.ts`

**Moved:** `app/layout.tsx`, `app/blog/`, and every page directory into `app/(site)/`.

**Deleted at cutover:** the 10 `app/(site)/blog/<slug>/page.tsx` files and `app/blog/posts.ts`.

**Note on a spec deviation:** the spec listed `lib/sanity/post-to-view.ts`. Its job (read time, dates, title split) lives in `lib/blog/format.ts` instead, so view-formatting is testable without touching Sanity types. No behaviour differs.

---

### Task 1: Freeze the baseline

**Why first:** every later task is judged against today's output. Capture it before anything moves.

**Files:**

- Create: `scripts/snapshot-blog.ts`
- Create: `test/fixtures/blog-baseline/<slug>.html` (10 files)
- Modify: `package.json` (scripts)

**Interfaces:**

- Produces: `test/fixtures/blog-baseline/<slug>.html` — the full prerendered HTML of each article as it ships today.

- [ ] **Step 1: Verify the build prerenders articles**

```bash
npm run build && ls .next/server/app/blog/*.html | wc -l
```

Expected: `11` (10 articles + the index).

- [ ] **Step 2: Write the snapshot script**

Create `scripts/snapshot-blog.ts`:

```ts
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const BUILD_DIR = ".next/server/app/blog";
const OUT_DIR = "test/fixtures/blog-baseline";

const slugs = readdirSync("app/blog", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

mkdirSync(OUT_DIR, { recursive: true });

for (const slug of slugs) {
  const html = readFileSync(join(BUILD_DIR, `${slug}.html`), "utf8");
  writeFileSync(join(OUT_DIR, `${slug}.html`), html);
  console.log(`snapshot: ${slug} (${html.length} bytes)`);
}
console.log(`done — ${slugs.length} baselines`);
```

- [ ] **Step 3: Add the npm script**

In `package.json` `scripts`, add:

```json
"snapshot:blog": "tsx scripts/snapshot-blog.ts"
```

- [ ] **Step 4: Install tsx and run it**

```bash
npm install -D tsx
npm run build && npm run snapshot:blog
```

Expected: 10 `snapshot:` lines, then `done — 10 baselines`.

- [ ] **Step 5: Commit**

```bash
git add scripts/snapshot-blog.ts test/fixtures/blog-baseline package.json package-lock.json
git commit -m "test: freeze prerendered baselines for all 10 blog posts"
```

---

### Task 2: Install Sanity dependencies and document env

**Files:**

- Modify: `package.json`
- Create: `.env.example`
- Modify: `.gitignore`

**Interfaces:**

- Produces: `next-sanity`, `sanity`, `@portabletext/react`, `@portabletext/types`, `@sanity/image-url`, `styled-components`, `node-html-parser` available to later tasks.

- [ ] **Step 1: Install**

```bash
npm install next-sanity sanity @portabletext/react @portabletext/types @sanity/image-url styled-components
npm install -D node-html-parser
```

- [ ] **Step 2: Allow `.env.example` to be committed**

`.gitignore:34` is `.env*`, which would swallow the example file. Add immediately below it:

```
!.env.example
```

- [ ] **Step 3: Write `.env.example`**

```
# Sanity project (public values — safe to commit)
NEXT_PUBLIC_SANITY_PROJECT_ID=eyos1dte
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01

# Shared with the Sanity webhook. Set in Netlify too.
SANITY_REVALIDATE_SECRET=

# Local only — never set this in Netlify. Used by scripts/migrate-posts.ts.
SANITY_WRITE_TOKEN=
```

- [ ] **Step 4: Verify the tree is still green**

```bash
npm run lint && npm run typecheck && npm test
```

Expected: all pass. Adding dependencies changes no behaviour.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json .env.example .gitignore
git commit -m "build: add Sanity, Portable Text and migration dependencies"
```

---

### Task 3: The `post` schema and Studio config

**Files:**

- Create: `sanity/schemas/post.ts`, `sanity/schemas/index.ts`, `sanity.config.ts`

**Interfaces:**

- Produces: document type `post` with fields `title`, `highlight`, `slug`, `heroImage` (+`alt`), `excerpt`, `seoDescription`, `publishedAt`, `featured`, `ctaLabel`, `ctaHref`, `body`.

**Note on two description fields:** today's card text and today's `<meta name="description">` differ on 9 of 10 posts. `excerpt` is the card + JSON-LD text; `seoDescription` is the meta description and falls back to `excerpt` when blank. This mirrors the Meechan schema and preserves current behaviour exactly.

- [ ] **Step 1: Write `sanity/schemas/post.ts`**

```ts
import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "highlight",
      type: "string",
      description:
        "The phrase within the title shown in lime, e.g. “dusty” sites. Must appear in the title exactly; left blank, the title renders plain.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      rows: 3,
      description: "Shown on the blog index card and in structured data.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 2,
      description: "The meta description. Falls back to the excerpt when blank.",
    }),
    defineField({ name: "publishedAt", type: "datetime", validation: (r) => r.required() }),
    defineField({
      name: "featured",
      type: "boolean",
      description: "Shows the lime Featured tag and pins the post to the top of the index.",
      initialValue: false,
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
      description: 'Button text at the end of the article. Defaults to "Get in touch".',
    }),
    defineField({
      name: "ctaHref",
      title: "CTA link",
      type: "string",
      description: 'Where the button goes, e.g. /e-learning. Defaults to "/contact".',
    }),
    defineField({
      name: "body",
      type: "array",
      validation: (r) => r.required(),
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Section heading", value: "h2" },
          ],
          lists: [
            { title: "Bulleted", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (r) => r.required().uri({ allowRelative: true }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Published, newest",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "publishedAt", media: "heroImage" } },
});
```

- [ ] **Step 2: Write `sanity/schemas/index.ts`**

```ts
import { post } from "./post";

export const schemaTypes = [post];
```

- [ ] **Step 3: Write `sanity.config.ts`**

```ts
"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "default",
  title: "Berkshire Safety Consultants — Blog",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
```

- [ ] **Step 4: Typecheck**

```bash
npm run typecheck && npm run lint
```

Expected: pass. The config is not imported by any route yet.

- [ ] **Step 5: Commit**

```bash
git add sanity sanity.config.ts
git commit -m "feat: add Sanity post schema and Studio config"
```

---

### Task 4: Split into `(site)` and `(studio)` route groups

**Why:** the root layout loads `/ds/*.css`, `responsive.css`, header, footer and cookie banner. All of it would wreck the Studio UI. Route groups give the Studio its own bare root layout without changing a single URL.

**Files:**

- Move: `app/layout.tsx` → `app/(site)/layout.tsx`
- Move: every page directory (`about`, `blog`, `contact`, `services`, …) → `app/(site)/`
- Move: `app/not-found.tsx` → `app/(site)/not-found.tsx`
- Create: `app/(studio)/layout.tsx`, `app/(studio)/studio/[[...tool]]/page.tsx`
- Create: `app/not-found.tsx` (bare global 404), `components/NotFoundContent.tsx`
- Unmoved: `app/api/`, `app/icon.tsx`, `app/apple-icon.tsx`, `app/manifest.ts`, `app/opengraph-image.tsx`, `app/robots.ts`, `app/sitemap.ts` — metadata files sit outside both groups.

**Interfaces:**

- Produces: `/studio` renders the Studio; every existing URL is unchanged.

- [ ] **Step 1: Move the site into `(site)`**

```bash
mkdir -p "app/(site)"
git mv app/layout.tsx "app/(site)/layout.tsx"
git mv app/not-found.tsx "app/(site)/not-found.tsx"
git mv app/responsive.css "app/(site)/responsive.css"
for d in about accessibility-statement assure blog contact e-learning faq \
         first-aid-fire-marshal-training housing-associations \
         principal-designer-services privacy-policy services small-businesses; do
  git mv "app/$d" "app/(site)/$d"
done
git mv app/page.tsx "app/(site)/page.tsx"
```

- [ ] **Step 2: Extract the 404 body so both layouts can use it**

Create `components/NotFoundContent.tsx` containing the JSX currently returned by `app/(site)/not-found.tsx` (the whole `<section>` and its contents), exported as `export function NotFoundContent()`. Keep the `Button` import.

Then replace `app/(site)/not-found.tsx` with:

```tsx
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata = { title: "Page not found — Berkshire Safety Consultants" };

export default function SiteNotFound() {
  return <NotFoundContent />;
}
```

- [ ] **Step 3: Add the bare global 404**

A second root layout means unmatched URLs need a 404 that brings its own `<html>`. Create `app/not-found.tsx`:

```tsx
import { NotFoundContent } from "@/components/NotFoundContent";

const DS = "/ds";

export const metadata = { title: "Page not found — Berkshire Safety Consultants" };

export default function GlobalNotFound() {
  return (
    <html lang="en-GB">
      <head>
        <link rel="stylesheet" href={`${DS}/tokens/fonts.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/colors.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/typography.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/spacing.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/motifs.css`} />
        <link rel="stylesheet" href={`${DS}/styles.css`} />
      </head>
      <body style={{ margin: 0 }}>
        <NotFoundContent />
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Add the Studio layout**

Create `app/(studio)/layout.tsx`:

```tsx
export const metadata = {
  title: "Studio — Berkshire Safety Consultants",
  robots: { index: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 5: Add the Studio route**

Create `app/(studio)/studio/[[...tool]]/page.tsx`:

```tsx
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

- [ ] **Step 6: Keep `/studio` out of robots**

In `app/robots.ts`, change `disallow: "/api/"` to:

```ts
disallow: ["/api/", "/studio"],
```

- [ ] **Step 7: Verify nothing moved visibly**

```bash
npm run build
```

Expected: build succeeds; the route list includes `/studio/[[...tool]]` and every previous route at its old path.

```bash
for s in $(ls test/fixtures/blog-baseline | sed 's/.html//'); do
  diff -q ".next/server/app/blog/$s.html" "test/fixtures/blog-baseline/$s.html" >/dev/null \
    && echo "identical: $s" || echo "CHANGED: $s"
done
```

Expected: 10 `identical:` lines. Route groups must not change rendered output. **If anything shows `CHANGED`, stop** — something moved that shouldn't have.

- [ ] **Step 8: Check the Studio in a browser**

```bash
npm run dev
```

Open `http://localhost:3000/studio`, log in. Expected: the Studio loads with a "Blog post" document type, and shows **none** of the site's fonts, navy background, header or footer.

- [ ] **Step 9: Lint, typecheck, test, commit**

```bash
npm run lint && npm run typecheck && npm test
git add -A
git commit -m "refactor: split app into (site) and (studio) route groups"
```

---

### Task 5: Sanity client, queries and image helper

**Files:**

- Create: `lib/sanity/client.ts`, `lib/sanity/queries.ts`, `lib/sanity/image.ts`
- Test: `lib/sanity/__tests__/queries.test.ts`

**Interfaces:**

- Produces:
  - `client: SanityClient | null`
  - `type PostListItem = { slug, title, highlight?, heroImage, alt, excerpt, publishedAt, featured }`
  - `type PostDoc = PostListItem & { seoDescription?, ctaLabel?, ctaHref?, body: PortableTextBlock[] }`
  - `getPosts(): Promise<PostListItem[]>`, `getPostSlugs(): Promise<string[]>`, `getPost(slug): Promise<PostDoc | null>`
  - `urlForImage(source): string`

- [ ] **Step 1: Write the failing test**

Create `lib/sanity/__tests__/queries.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("queries with no Sanity env", () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  });
  afterEach(() => {
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "eyos1dte";
  });

  it("degrades to empty instead of throwing", async () => {
    const { getPosts, getPostSlugs, getPost } = await import("../queries");
    expect(await getPosts()).toEqual([]);
    expect(await getPostSlugs()).toEqual([]);
    expect(await getPost("anything")).toBeNull();
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

```bash
npx vitest run lib/sanity/__tests__/queries.test.ts
```

Expected: FAIL — cannot resolve `../queries`.

- [ ] **Step 3: Write `lib/sanity/client.ts`**

```ts
import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

export const client: SanityClient | null = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
```

- [ ] **Step 4: Write `lib/sanity/queries.ts`**

```ts
import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type PostListItem = {
  slug: string;
  title: string;
  highlight?: string;
  heroImage: SanityImageSource;
  alt: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  /** Body flattened to plain text by GROQ, so index cards can show read time
   *  without fetching the whole Portable Text structure. */
  bodyText: string;
};

export type PostDoc = PostListItem & {
  seoDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  body: PortableTextBlock[];
};

const fetchOpts = { next: { tags: ["post"] as string[] } };

const LIST_FIELDS = `"slug": slug.current, title, highlight, heroImage, "alt": heroImage.alt, excerpt, publishedAt, featured, "bodyText": pt::text(body)`;

const listQuery = groq`*[_type == "post"] | order(publishedAt desc){ ${LIST_FIELDS} }`;
const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;
const bySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${LIST_FIELDS}, seoDescription, ctaLabel, ctaHref, body
}`;

// Every query degrades to empty rather than failing the build when Sanity is
// unconfigured or unreachable.
export async function getPosts(): Promise<PostListItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<PostListItem[]>(listQuery, {}, fetchOpts);
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!client) return [];
  try {
    return await client.fetch<string[]>(slugsQuery, {}, fetchOpts);
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<PostDoc | null> {
  if (!client) return null;
  try {
    return await client.fetch<PostDoc | null>(bySlugQuery, { slug }, fetchOpts);
  } catch {
    return null;
  }
}
```

- [ ] **Step 5: Write `lib/sanity/image.ts`**

```ts
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const builder = client ? imageUrlBuilder(client) : null;

export function urlForImage(source: SanityImageSource | undefined): string {
  if (!builder || !source) return "";
  return builder.image(source).auto("format").fit("max").url();
}
```

- [ ] **Step 6: Run the test**

```bash
npx vitest run lib/sanity/__tests__/queries.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add lib/sanity
git commit -m "feat: add env-resilient Sanity client and post queries"
```

---

### Task 6: View formatting helpers

**Files:**

- Create: `lib/blog/format.ts`
- Test: `lib/blog/__tests__/format.test.ts`

**Interfaces:**

- Produces:
  - `readTimeFromText(text: string): string` → e.g. `"4 min read"`
  - `readTimeFromBody(body: PortableTextBlock[]): string` → same, from Portable Text
  - `formatPostDate(iso: string): string` → e.g. `"Apr 14, 2025"`
  - `splitTitleHighlight(title: string, highlight?: string): { before: string; match: string; after: string }`

- [ ] **Step 1: Write the failing test**

Create `lib/blog/__tests__/format.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { readTimeFromBody, readTimeFromText, formatPostDate, splitTitleHighlight } from "../format";

const block = (text: string) => ({
  _type: "block",
  _key: "k",
  style: "normal",
  children: [{ _type: "span", _key: "s", text, marks: [] }],
});

describe("readTimeFromBody", () => {
  it("rounds words over 200 to whole minutes", () => {
    expect(readTimeFromBody([block("word ".repeat(600).trim())] as never)).toBe("3 min read");
  });

  it("never returns less than one minute", () => {
    expect(readTimeFromBody([block("short")] as never)).toBe("1 min read");
  });

  it("ignores non-block members", () => {
    expect(readTimeFromBody([{ _type: "image", _key: "i" }] as never)).toBe("1 min read");
  });
});

describe("readTimeFromText", () => {
  it("counts words in flattened body text", () => {
    expect(readTimeFromText("word ".repeat(400).trim())).toBe("2 min read");
  });

  it("handles empty text", () => {
    expect(readTimeFromText("")).toBe("1 min read");
  });
});

describe("formatPostDate", () => {
  it("always includes the year", () => {
    expect(formatPostDate("2025-04-14T00:00:00Z")).toBe("Apr 14, 2025");
    expect(formatPostDate("2026-05-19T00:00:00Z")).toBe("May 19, 2026");
  });
});

describe("splitTitleHighlight", () => {
  it("splits around a mid-title phrase", () => {
    expect(splitTitleHighlight('Why "dusty" sites are a liability', '"dusty" sites')).toEqual({
      before: "Why ",
      match: '"dusty" sites',
      after: " are a liability",
    });
  });

  it("returns the plain title when the phrase is absent", () => {
    expect(splitTitleHighlight("Toolbox talks", "missing")).toEqual({
      before: "Toolbox talks",
      match: "",
      after: "",
    });
  });

  it("returns the plain title when no highlight is given", () => {
    expect(splitTitleHighlight("Toolbox talks")).toEqual({
      before: "Toolbox talks",
      match: "",
      after: "",
    });
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

```bash
npx vitest run lib/blog/__tests__/format.test.ts
```

Expected: FAIL — cannot resolve `../format`.

- [ ] **Step 3: Write `lib/blog/format.ts`**

```ts
import type { PortableTextBlock } from "@portabletext/types";

const WORDS_PER_MINUTE = 200;

/** Read time from already-flattened text (what the list query returns). */
export function readTimeFromText(text: string): string {
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

/** Read time derived from the body — the old hand-typed values were guesses. */
export function readTimeFromBody(body: PortableTextBlock[]): string {
  return readTimeFromText(
    (body ?? [])
      .filter((b) => b?._type === "block")
      .flatMap((b) =>
        ((b as PortableTextBlock).children ?? []).map((c) => (c as { text?: string }).text ?? ""),
      )
      .join(" "),
  );
}

/**
 * "Apr 14, 2025" — the year is always shown so a post never changes
 * appearance as the calendar moves on.
 */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** Splits a title around its lime-highlighted phrase. */
export function splitTitleHighlight(
  title: string,
  highlight?: string,
): { before: string; match: string; after: string } {
  if (!highlight) return { before: title, match: "", after: "" };
  const at = title.indexOf(highlight);
  if (at === -1) return { before: title, match: "", after: "" };
  return {
    before: title.slice(0, at),
    match: highlight,
    after: title.slice(at + highlight.length),
  };
}
```

- [ ] **Step 4: Run the test**

```bash
npx vitest run lib/blog/__tests__/format.test.ts
```

Expected: PASS (11 assertions).

- [ ] **Step 5: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add lib/blog
git commit -m "feat: add blog read-time, date and title-highlight helpers"
```

---

### Task 7: The Portable Text renderer

**Why the styles are inline:** every existing article carries these exact inline styles. Reproducing them is what makes the fidelity diff an equality check rather than a judgement call.

**Files:**

- Create: `components/PortablePostBody.tsx`
- Test: `components/__tests__/PortablePostBody.test.tsx`

**Interfaces:**

- Consumes: nothing from earlier tasks.
- Produces: `PortablePostBody({ value }: { value: PortableTextBlock[] })`

- [ ] **Step 1: Write the failing test**

Create `components/__tests__/PortablePostBody.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PortablePostBody } from "../PortablePostBody";

const doc = [
  {
    _type: "block",
    _key: "a",
    style: "normal",
    children: [{ _type: "span", _key: "a1", text: "Intro copy", marks: [] }],
  },
  {
    _type: "block",
    _key: "b",
    style: "h2",
    children: [{ _type: "span", _key: "b1", text: "A heading", marks: [] }],
  },
  {
    _type: "block",
    _key: "c",
    style: "normal",
    listItem: "bullet",
    level: 1,
    children: [{ _type: "span", _key: "c1", text: "Bold bit", marks: ["strong"] }],
  },
  {
    _type: "block",
    _key: "d",
    style: "normal",
    listItem: "number",
    level: 1,
    children: [{ _type: "span", _key: "d1", text: "Emphasised", marks: ["em"] }],
  },
] as never;

describe("PortablePostBody", () => {
  it("renders paragraphs, headings and both list types", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    expect(screen.getByText("Intro copy").tagName).toBe("P");
    expect(screen.getByText("A heading").tagName).toBe("H2");
    expect(container.querySelector("ul")).not.toBeNull();
    expect(container.querySelector("ol")).not.toBeNull();
  });

  it("renders strong and em marks", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    expect(container.querySelector("strong")?.textContent).toBe("Bold bit");
    expect(container.querySelector("em")?.textContent).toBe("Emphasised");
  });

  it("styles headings and lists exactly as the existing articles do", () => {
    const { container } = render(<PortablePostBody value={doc} />);
    const h2 = container.querySelector("h2")!;
    expect(h2).toHaveStyle({ fontSize: "21px", fontWeight: "800", margin: "40px 0px 14px" });
    const ul = container.querySelector("ul")!;
    expect(ul).toHaveStyle({
      paddingLeft: "22px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    });
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

```bash
npx vitest run components/__tests__/PortablePostBody.test.tsx
```

Expected: FAIL — cannot resolve `../PortablePostBody`.

- [ ] **Step 3: Write `components/PortablePostBody.tsx`**

```tsx
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// These values are copied from the hand-written articles and are what the
// fidelity diff asserts against. Change them only with the baseline.
const H2_STYLE = {
  margin: "40px 0 14px",
  fontSize: 21,
  fontWeight: 800,
  color: "var(--navy-900)",
} as const;

const LIST_STYLE = {
  margin: "0 0 20px",
  paddingLeft: 22,
  display: "flex",
  flexDirection: "column",
  gap: 10,
} as const;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 style={H2_STYLE}>{children}</h2>,
  },
  list: {
    bullet: ({ children }) => <ul style={LIST_STYLE}>{children}</ul>,
    number: ({ children }) => <ol style={LIST_STYLE}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => <Link href={(value as { href: string }).href}>{children}</Link>,
  },
};

export function PortablePostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
```

- [ ] **Step 4: Run the test**

```bash
npx vitest run components/__tests__/PortablePostBody.test.tsx
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add components/PortablePostBody.tsx components/__tests__/PortablePostBody.test.tsx
git commit -m "feat: add Portable Text renderer matching existing article styles"
```

---

### Task 8: HTML → Portable Text converter

**Files:**

- Create: `lib/blog/html-to-portable-text.ts`
- Test: `lib/blog/__tests__/html-to-portable-text.test.ts`

**Interfaces:**

- Produces: `htmlToPortableText(html: string): PortableTextBlock[]` — accepts the inner HTML of an article body container.

- [ ] **Step 1: Write the failing test**

Create `lib/blog/__tests__/html-to-portable-text.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { htmlToPortableText } from "../html-to-portable-text";

describe("htmlToPortableText", () => {
  it("converts paragraphs and headings", () => {
    const blocks = htmlToPortableText("<p>Hello there</p><h2>Why it matters</h2>");
    expect(blocks).toHaveLength(2);
    expect(blocks[0]).toMatchObject({ _type: "block", style: "normal" });
    expect(blocks[0].children[0]).toMatchObject({ text: "Hello there", marks: [] });
    expect(blocks[1]).toMatchObject({ style: "h2" });
  });

  it("converts bullet and numbered lists to one block per item", () => {
    const blocks = htmlToPortableText("<ul><li>One</li><li>Two</li></ul><ol><li>First</li></ol>");
    expect(blocks).toHaveLength(3);
    expect(blocks[0]).toMatchObject({ listItem: "bullet", level: 1, style: "normal" });
    expect(blocks[2]).toMatchObject({ listItem: "number", level: 1 });
  });

  it("preserves strong and em as marks on the right span", () => {
    const blocks = htmlToPortableText("<p>Plain <strong>bold</strong> and <em>italic</em></p>");
    const spans = blocks[0].children;
    expect(spans.map((s) => s.text)).toEqual(["Plain ", "bold", " and ", "italic"]);
    expect(spans[1].marks).toEqual(["strong"]);
    expect(spans[3].marks).toEqual(["em"]);
  });

  it("decodes HTML entities", () => {
    const blocks = htmlToPortableText("<p>it&apos;s &ldquo;quoted&rdquo; &amp; fine</p>");
    expect(blocks[0].children[0].text).toBe("it’s “quoted” & fine");
  });

  it("collapses whitespace introduced by source formatting", () => {
    const blocks = htmlToPortableText("<p>line one\n          line two</p>");
    expect(blocks[0].children[0].text).toBe("line one line two");
  });

  it("gives every block and span a unique key", () => {
    const blocks = htmlToPortableText("<p>a</p><p>b</p>");
    const keys = blocks.map((b) => b._key);
    expect(new Set(keys).size).toBe(2);
    expect(keys.every(Boolean)).toBe(true);
  });

  it("ignores empty paragraphs", () => {
    expect(htmlToPortableText("<p>   </p><p>real</p>")).toHaveLength(1);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

```bash
npx vitest run lib/blog/__tests__/html-to-portable-text.test.ts
```

Expected: FAIL — cannot resolve `../html-to-portable-text`.

- [ ] **Step 3: Write `lib/blog/html-to-portable-text.ts`**

```ts
import { parse, type HTMLElement, type Node } from "node-html-parser";
import type { PortableTextBlock } from "@portabletext/types";

type Span = { _type: "span"; _key: string; text: string; marks: string[] };

let counter = 0;
const key = () => `k${(counter += 1).toString(36)}`;

const ENTITIES: Record<string, string> = {
  "&apos;": "’",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&amp;": "&",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
};

function decode(text: string): string {
  return text.replace(/&[#a-zA-Z0-9]+;/g, (m) => ENTITIES[m] ?? m);
}

function clean(text: string): string {
  return decode(text).replace(/\s+/g, " ");
}

/** Walks inline nodes, carrying marks down to the spans they apply to. */
function spansOf(node: Node, marks: string[] = []): Span[] {
  const spans: Span[] = [];
  for (const child of node.childNodes) {
    const el = child as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (!tag) {
      const text = clean(child.rawText ?? "");
      if (text) spans.push({ _type: "span", _key: key(), text, marks: [...marks] });
      continue;
    }
    if (tag === "strong" || tag === "b") spans.push(...spansOf(el, [...marks, "strong"]));
    else if (tag === "em" || tag === "i") spans.push(...spansOf(el, [...marks, "em"]));
    else if (tag === "br") spans.push({ _type: "span", _key: key(), text: " ", marks: [...marks] });
    else spans.push(...spansOf(el, marks));
  }
  return spans;
}

function blockFrom(
  el: HTMLElement,
  style: string,
  listItem?: "bullet" | "number",
): PortableTextBlock | null {
  const children = spansOf(el);
  const text = children
    .map((s) => s.text)
    .join("")
    .trim();
  if (!text) return null;
  return {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    children,
    ...(listItem ? { listItem, level: 1 } : {}),
  } as unknown as PortableTextBlock;
}

/**
 * Converts the inner HTML of an article body into Portable Text. Handles the
 * complete vocabulary the existing posts use: p, h2, ul/ol/li, strong, em.
 */
export function htmlToPortableText(html: string): PortableTextBlock[] {
  const root = parse(html);
  const blocks: PortableTextBlock[] = [];

  for (const node of root.childNodes) {
    const el = node as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (!tag) continue;

    if (tag === "p") {
      const block = blockFrom(el, "normal");
      if (block) blocks.push(block);
    } else if (tag === "h2") {
      const block = blockFrom(el, "h2");
      if (block) blocks.push(block);
    } else if (tag === "ul" || tag === "ol") {
      const listItem = tag === "ul" ? "bullet" : "number";
      for (const li of el.querySelectorAll("li")) {
        const block = blockFrom(li, "normal", listItem);
        if (block) blocks.push(block);
      }
    }
  }

  return blocks;
}
```

- [ ] **Step 4: Run the test**

```bash
npx vitest run lib/blog/__tests__/html-to-portable-text.test.ts
```

Expected: PASS (all 7).

- [ ] **Step 5: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add lib/blog/html-to-portable-text.ts lib/blog/__tests__/html-to-portable-text.test.ts
git commit -m "feat: add HTML to Portable Text converter for blog migration"
```

---

### Task 9: Migrate the 10 posts into Sanity

**Files:**

- Create: `scripts/migrate-posts.ts`
- Modify: `package.json`

**Interfaces:**

- Consumes: `htmlToPortableText` (Task 8), the baselines in `test/fixtures/blog-baseline/` (Task 1).
- Produces: 10 published `post` documents in dataset `production`, each with an uploaded hero image.

**Reads from the baseline HTML:** title, highlight span, featured tag, CTA label and href, hero image path, meta description. **Reads from `app/(site)/blog/posts.ts`:** `datePublished` and `description` (the card excerpt), which are structured and more reliable than scraping.

- [ ] **Step 1: Write the migration script**

Create `scripts/migrate-posts.ts`:

```ts
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@sanity/client";
import { parse } from "node-html-parser";
import { htmlToPortableText } from "../lib/blog/html-to-portable-text";
import { BLOG_POSTS } from "../app/(site)/blog/posts";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const TOKEN = process.env.SANITY_WRITE_TOKEN;
if (!PROJECT_ID || !TOKEN) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN in .env.local");
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01",
  token: TOKEN,
  useCdn: false,
});

const BASELINE_DIR = "test/fixtures/blog-baseline";

for (const slug of readdirSync(BASELINE_DIR)
  .map((f) => f.replace(/\.html$/, ""))
  .sort()) {
  const html = readFileSync(join(BASELINE_DIR, `${slug}.html`), "utf8");
  const root = parse(html);
  const meta = BLOG_POSTS.find((p) => p.slug === slug);
  if (!meta) throw new Error(`no BLOG_POSTS entry for ${slug}`);

  // Title and its highlighted phrase.
  const h1 = root.querySelector("h1")!;
  const title = h1.textContent.replace(/\s+/g, " ").trim();
  const highlight = h1.querySelector("span")?.textContent.replace(/\s+/g, " ").trim() ?? "";

  // Body container: the only div carrying max-width:760px and line-height:1.75.
  const bodyEl = root.querySelectorAll("div").find((d) => {
    const style = d.getAttribute("style") ?? "";
    return style.includes("max-width:760px") && style.includes("line-height:1.75");
  });
  if (!bodyEl) throw new Error(`could not locate body container for ${slug}`);
  const body = htmlToPortableText(bodyEl.innerHTML);
  if (body.length === 0) throw new Error(`empty body for ${slug}`);

  // CTA: the trailing link styled as a button.
  const ctaEl = root
    .querySelectorAll("a")
    .reverse()
    .find((a) => {
      const href = a.getAttribute("href") ?? "";
      return href !== "/blog" && !href.startsWith("#");
    });
  const ctaHref = ctaEl?.getAttribute("href") ?? "/contact";
  const ctaLabel = ctaEl?.textContent.replace(/\s+/g, " ").trim() || "Get in touch";

  // Hero image path from the background-image declaration.
  const heroMatch = html.match(/background-image:\s*url\(['"]?(\/assets\/[^'")]+)['"]?\)/);
  if (!heroMatch) throw new Error(`no hero image found for ${slug}`);
  const heroPath = heroMatch[1];

  // The lime "Featured" tag only appears on the featured post.
  const featured = html.includes(">Featured<");
  const seoDescription =
    root.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";

  const asset = await client.assets.upload("image", readFileSync(join("public", heroPath)), {
    filename: heroPath.split("/").pop(),
  });

  await client.createOrReplace({
    _id: `post-${slug}`,
    _type: "post",
    title,
    ...(highlight ? { highlight } : {}),
    slug: { _type: "slug", current: slug },
    heroImage: { _type: "image", asset: { _type: "reference", _ref: asset._id }, alt: title },
    excerpt: meta.description,
    ...(seoDescription && seoDescription !== meta.description ? { seoDescription } : {}),
    publishedAt: `${meta.datePublished}T09:00:00Z`,
    featured,
    ctaLabel,
    ctaHref,
    body,
  });

  console.log(`migrated: ${slug} (${body.length} blocks, featured=${featured}, cta=${ctaHref})`);
}

console.log("done");
```

- [ ] **Step 2: Add the npm script**

In `package.json` `scripts`:

```json
"migrate:posts": "tsx --env-file=.env.local scripts/migrate-posts.ts"
```

- [ ] **Step 3: Run the migration**

```bash
npm run migrate:posts
```

Expected: 10 `migrated:` lines then `done`. Every line should show a plausible block count (20+ for `iso-9001-vs-iso-45001`, 8+ for `updated-hse-guidance`), `featured=true` **only** for `iso-9001-vs-iso-45001`, and `cta=/e-learning` for `prioritising-mental-health` and `/first-aid-fire-marshal-training` for `fire-safety-101`.

- [ ] **Step 4: Eyeball the result in the Studio**

```bash
npm run dev
```

Open `http://localhost:3000/studio`. Expected: 10 posts, each with a hero image, a populated body, and correct heading/list structure. **If a body is empty or mangled, stop and fix the converter** rather than editing by hand — the script must stay repeatable.

- [ ] **Step 5: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add scripts/migrate-posts.ts package.json
git commit -m "feat: migrate the 10 existing posts into Sanity"
```

---

### Task 10: The dynamic article route (at a temporary path)

**Why temporary:** `/blog/[slug]` cannot coexist with the 10 static directories. Building at `/blog-preview/[slug]` lets the diff run while the live pages stay untouched.

**Files:**

- Create: `components/BlogPostArticle.tsx`, `app/(site)/blog-preview/[slug]/page.tsx`

**Interfaces:**

- Consumes: `getPost`, `getPostSlugs` (Task 5), `urlForImage` (Task 5), `readTimeFromBody`, `formatPostDate`, `splitTitleHighlight` (Task 6), `PortablePostBody` (Task 7).
- Produces: `BlogPostArticle({ post }: { post: PostDoc })`

- [ ] **Step 1: Write `components/BlogPostArticle.tsx`**

Reproduce the existing article markup exactly, taking values from the document. Copy the hero wrapper, overlay, gradient, back-link and byline verbatim from `app/(site)/blog/toolbox-talks/page.tsx`, replacing only the content, and using `clamp(28px, 4.4vw, 46px)` for the `h1` in **all** cases:

```tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { PortablePostBody } from "@/components/PortablePostBody";
import { urlForImage } from "@/lib/sanity/image";
import { readTimeFromBody, formatPostDate, splitTitleHighlight } from "@/lib/blog/format";
import type { PostDoc } from "@/lib/sanity/queries";

export function BlogPostArticle({ post }: { post: PostDoc }) {
  const { before, match, after } = splitTitleHighlight(post.title, post.highlight);
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${urlForImage(post.heroImage)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.75) 0%, rgba(8,2,31,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px 24px 64px",
          }}
        >
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 26,
            }}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} />
            Back to blog
          </Link>
          {post.featured ? (
            <Tag variant="lime" size="sm">
              Featured
            </Tag>
          ) : null}
          <h1
            style={{
              margin: post.featured ? "18px 0 20px" : "0 0 20px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(28px, 4.4vw, 46px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            {before}
            {match ? <span style={{ color: "var(--lime-500)" }}>{match}</span> : null}
            {after}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--lime-500)" }}>
              Berkshire Safety Consultants
            </span>
            <span>·</span>
            <span>{formatPostDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{readTimeFromBody(post.body)}</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "64px 24px 32px",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--gray-700)",
          }}
        >
          <PortablePostBody value={post.body} />
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href={post.ctaHref ?? "/contact"}
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            {post.ctaLabel ?? "Get in touch"}
          </Button>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Write the preview route**

Create `app/(site)/blog-preview/[slug]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/sanity/queries";
import { BlogPostArticle } from "@/components/BlogPostArticle";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export default async function BlogPreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <BlogPostArticle post={post} />;
}
```

- [ ] **Step 3: Build and compare by eye**

```bash
npm run build && npm run dev
```

Open `http://localhost:3000/blog-preview/toolbox-talks` beside `http://localhost:3000/blog/toolbox-talks`. Expected: indistinguishable apart from the read time.

- [ ] **Step 4: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add components/BlogPostArticle.tsx "app/(site)/blog-preview"
git commit -m "feat: render blog posts from Sanity at a preview path"
```

---

### Task 11: The fidelity gate

**Files:**

- Create: `test/fidelity.test.ts`

**Interfaces:**

- Consumes: baselines (Task 1), the built preview pages (Task 10).

**This task is the go/no-go.** It compares each migrated article against its frozen baseline, allowing only the four agreed deltas.

- [ ] **Step 1: Write the comparison test**

Create `test/fidelity.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse } from "node-html-parser";

const BASELINE_DIR = "test/fixtures/blog-baseline";
const BUILD_DIR = ".next/server/app";

const slugs = readdirSync(BASELINE_DIR)
  .map((f) => f.replace(/\.html$/, ""))
  .sort();

/** The article body container — the part that must match byte for byte. */
function bodyHtml(html: string): string {
  const el = parse(html)
    .querySelectorAll("div")
    .find((d) => {
      const style = d.getAttribute("style") ?? "";
      return style.includes("max-width:760px") && style.includes("line-height:1.75");
    });
  if (!el) throw new Error("body container not found");
  return el.innerHTML.replace(/\s+/g, " ").replace(/> </g, "><").trim();
}

function heroText(html: string): { title: string; cta: string } {
  const root = parse(html);
  const h1 = root.querySelector("h1")!;
  const cta = root
    .querySelectorAll("a")
    .reverse()
    .find((a) => {
      const href = a.getAttribute("href") ?? "";
      return href !== "/blog" && !href.startsWith("#");
    });
  return {
    title: h1.textContent.replace(/\s+/g, " ").trim(),
    cta: `${cta?.getAttribute("href")} ${cta?.textContent.replace(/\s+/g, " ").trim()}`,
  };
}

describe("migrated posts match their baseline", () => {
  it("has a baseline for all 10 posts", () => {
    expect(slugs).toHaveLength(10);
  });

  for (const slug of slugs) {
    it(`${slug}: body matches after whitespace normalisation`, () => {
      const built = join(BUILD_DIR, "blog-preview", `${slug}.html`);
      if (!existsSync(built)) throw new Error(`run \`npm run build\` first — missing ${built}`);
      expect(bodyHtml(readFileSync(built, "utf8"))).toBe(
        bodyHtml(readFileSync(join(BASELINE_DIR, `${slug}.html`), "utf8")),
      );
    });

    it(`${slug}: title and CTA survive`, () => {
      const built = heroText(readFileSync(join(BUILD_DIR, "blog-preview", `${slug}.html`), "utf8"));
      const base = heroText(readFileSync(join(BASELINE_DIR, `${slug}.html`), "utf8"));
      expect(built.title).toBe(base.title);
      expect(built.cta).toBe(base.cta);
    });
  }
});
```

- [ ] **Step 2: Build, then run the gate**

```bash
npm run build && npx vitest run test/fidelity.test.ts
```

Expected: 21 passing assertions.

- [ ] **Step 3: If anything fails, fix the converter or renderer — not the baseline**

The baseline is the contract. Common causes: an entity missing from `ENTITIES`, whitespace from `{" "}` spacers, a mark nested in a way `spansOf` drops. Fix `lib/blog/html-to-portable-text.ts` or `components/PortablePostBody.tsx`, re-run `npm run migrate:posts`, rebuild and re-run.

**Do not proceed to Task 12 until this task is green.** If a difference is genuinely acceptable, write it into the test as an explicit, commented exception — never by loosening the comparison wholesale.

- [ ] **Step 4: Commit**

```bash
git add test/fidelity.test.ts
git commit -m "test: gate blog migration on byte-identical article bodies"
```

---

### Task 12: Cutover

**Files:**

- Move: `app/(site)/blog-preview/[slug]/page.tsx` → `app/(site)/blog/[slug]/page.tsx`
- Delete: the 10 `app/(site)/blog/<slug>/` directories, `app/(site)/blog/posts.ts`
- Modify: `app/(site)/blog/page.tsx`, `app/sitemap.ts`, `components/__tests__/schema.test.ts`
- Create: `lib/blog/schema.ts`

**Interfaces:**

- Produces: `blogPostingLd(post: PostListItem): object`, `blogCollectionLd(posts: PostListItem[]): object`, `SITE_URL: string` from `lib/blog/schema.ts`.

**Known accepted change:** the index currently hardcodes Title Case card titles ("Toolbox Talks") while the articles use sentence case ("Toolbox talks"). After cutover the Sanity `title` is canonical, so index cards and JSON-LD headlines adopt the article's sentence case. This also removes a genuine duplication — the index had its own `POSTS` array separate from `posts.ts`.

- [ ] **Step 1: Move the route onto the real path**

```bash
git mv "app/(site)/blog-preview/[slug]" "app/(site)/blog/[slug]"
rmdir "app/(site)/blog-preview"
```

- [ ] **Step 2: Add metadata and JSON-LD to the route**

Replace `app/(site)/blog/[slug]/page.tsx` with:

```tsx
import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { BlogPostArticle } from "@/components/BlogPostArticle";
import { blogPostingLd } from "@/lib/blog/schema";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    alternates: { canonical: `/blog/${slug}` },
    title: `${post.title} · Berkshire Safety Consultants`,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingLd({ ...post, image: urlForImage(post.heroImage) })),
        }}
      />
      <BlogPostArticle post={post} />
    </>
  );
}
```

- [ ] **Step 3: Write `lib/blog/schema.ts`**

Port `blogPostingLd` and `blogCollectionLd` from `app/(site)/blog/posts.ts`, changing them to take data instead of reading a module-level array:

```ts
import type { PostListItem } from "@/lib/sanity/queries";

export const SITE_URL = "https://www.berkshiresafetyconsultants.com";

type LdInput = PostListItem & { image: string; seoDescription?: string };

export function blogPostingLd(post: LdInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    inLanguage: "en-GB",
    author: { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function blogCollectionLd(posts: LdInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Berkshire Safety Consultants — Blog",
    url: `${SITE_URL}/blog`,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#org` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image,
      datePublished: post.publishedAt,
    })),
  };
}
```

- [ ] **Step 4: Rewrite the index to read from Sanity**

Keep every wrapper, style object and `data-r` attribute in `app/(site)/blog/page.tsx` exactly as it is — only the data source changes.

Replace the imports and delete the 95-line `POSTS` array:

```tsx
import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Tag } from "@/components/ds/Tag";
import { getPosts } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { formatPostDate, readTimeFromText } from "@/lib/blog/format";
import { blogCollectionLd } from "@/lib/blog/schema";
```

Make the component async and split featured from the rest:

```tsx
export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);
  const ld = posts.map((p) => ({ ...p, image: urlForImage(p.heroImage) }));
```

Then `JSON.stringify(blogCollectionLd())` becomes `JSON.stringify(blogCollectionLd(ld))`.

In the FEATURED section, wrap the existing `<article>` in `{featured ? (...) : null}` and replace its five hardcoded values — `href`, `Image src`/`alt`, `h2` text, `p` text, and the date/read spans:

```tsx
<Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
```

```tsx
<Image
  src={urlForImage(featured.heroImage)}
  alt={featured.alt}
  fill
  sizes="(max-width: 900px) 100vw, 55vw"
  style={{ objectFit: "cover" }}
/>
```

…`<h2 style={{ … }}>{featured.title}</h2>`, `<p style={{ … }}>{featured.excerpt}</p>`, and:

```tsx
<span>{formatPostDate(featured.publishedAt)}</span>
<span>·</span>
<span>{readTimeFromText(featured.bodyText)}</span>
```

In the GRID section change `{POSTS.map((post) => (` to `{rest.map((post) => (` and swap three fields:

```tsx
<Image
  src={urlForImage(post.heroImage)}
  alt={post.alt}
  fill
  sizes="(max-width: 900px) 100vw, 33vw"
  style={{ objectFit: "cover" }}
/>
```

```tsx
<span>{formatPostDate(post.publishedAt)}</span>
<span>·</span>
<span>{readTimeFromText(post.bodyText)}</span>
```

`post.title` and `post.excerpt` already match the new field names, so the `h3` and `p` need no change.

- [ ] **Step 5: Delete the old files**

```bash
git rm -r "app/(site)/blog/cultivating-compassion" "app/(site)/blog/fire-safety-101" \
  "app/(site)/blog/iso-9001-vs-iso-45001" "app/(site)/blog/new-fire-safety-laws" \
  "app/(site)/blog/prioritising-mental-health" "app/(site)/blog/toolbox-talks" \
  "app/(site)/blog/updated-hse-guidance" "app/(site)/blog/why-dusty-sites" \
  "app/(site)/blog/winter-site-safety" "app/(site)/blog/world-day-for-safety"
git rm "app/(site)/blog/posts.ts"
```

- [ ] **Step 6: Make the sitemap dynamic**

In `app/sitemap.ts`: remove the 10 hardcoded `/blog/<slug>` entries, make `sitemap()` `async`, and append:

```ts
const slugs = await getPostSlugs();
const blogEntries = slugs.map((slug) => ({
  url: `${BASE_URL}/blog/${slug}`,
  lastModified,
  changeFrequency: "yearly" as const,
  priority: 0.5,
}));
```

Return `[...staticEntries, ...blogEntries]`.

- [ ] **Step 7: Rewrite the schema test**

`components/__tests__/schema.test.ts` imports `BLOG_POSTS` from the deleted module, so it will fail to resolve. Replace its blog sections with:

```ts
import { describe, it, expect } from "vitest";
import { blogPostingLd, blogCollectionLd, SITE_URL } from "@/lib/blog/schema";

const fixture = [
  {
    slug: "toolbox-talks",
    title: "Toolbox talks",
    heroImage: {} as never,
    alt: "Toolbox talks",
    excerpt: "Short, informal talks that build safety culture.",
    publishedAt: "2025-05-29T09:00:00Z",
    bodyText: "word ".repeat(400),
    image: "https://cdn.sanity.io/images/eyos1dte/production/abc-1200x800.png",
  },
  {
    slug: "fire-safety-101",
    title: "Fire safety 101 for homes",
    heroImage: {} as never,
    alt: "Fire safety 101",
    excerpt: "Simple steps that protect your family.",
    publishedAt: "2024-07-24T09:00:00Z",
    bodyText: "word ".repeat(200),
    image: "https://cdn.sanity.io/images/eyos1dte/production/def-1200x800.png",
  },
];

describe("blogPostingLd", () => {
  it("builds a BlogPosting with an absolute URL and image", () => {
    const ld = blogPostingLd(fixture[0]);
    expect(ld["@type"]).toBe("BlogPosting");
    expect(ld.headline).toBe("Toolbox talks");
    expect(ld.mainEntityOfPage).toBe(`${SITE_URL}/blog/toolbox-talks`);
    expect(ld.datePublished).toBe("2025-05-29T09:00:00Z");
    expect(ld.image).toContain("cdn.sanity.io");
  });

  it("prefers the SEO description when present", () => {
    const ld = blogPostingLd({ ...fixture[0], seoDescription: "Custom meta copy" });
    expect(ld.description).toBe("Custom meta copy");
  });

  it("falls back to the excerpt", () => {
    expect(blogPostingLd(fixture[0]).description).toBe(fixture[0].excerpt);
  });
});

describe("blogCollectionLd", () => {
  it("lists every post", () => {
    const ld = blogCollectionLd(fixture);
    expect(ld["@type"]).toBe("Blog");
    expect(ld.blogPost).toHaveLength(2);
    expect(ld.blogPost[0].url).toBe(`${SITE_URL}/blog/toolbox-talks`);
  });
});
```

Leave any non-blog assertions in that file (organisation, website) untouched.

- [ ] **Step 8: Build and re-run the gate against the real path**

Update the two `join(BUILD_DIR, "blog-preview", ...)` paths in `test/fidelity.test.ts` to `join(BUILD_DIR, "blog", ...)`, then:

```bash
npm run build && npx vitest run test/fidelity.test.ts
```

Expected: still 21 passing. The URLs are now the real ones.

- [ ] **Step 9: Verify every old URL still works**

```bash
npm run build && for s in $(ls test/fixtures/blog-baseline | sed 's/.html//'); do
  test -f ".next/server/app/blog/$s.html" && echo "ok: $s" || echo "MISSING: $s"
done
```

Expected: 10 `ok:` lines, no `MISSING`.

- [ ] **Step 10: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add -A
git commit -m "feat: serve blog from Sanity and retire the hand-coded posts"
```

---

### Task 13: Webhook revalidation endpoint

**Files:**

- Create: `app/api/revalidate/route.ts`
- Test: `app/api/revalidate/__tests__/route.test.ts`

**Interfaces:**

- Produces: `POST /api/revalidate` → 401 on a bad signature, 200 + `revalidateTag("post")` on a good one.

- [ ] **Step 1: Write the failing test**

Create `app/api/revalidate/__tests__/route.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from "vitest";

const revalidateTag = vi.fn();
vi.mock("next/cache", () => ({ revalidateTag: (...args: unknown[]) => revalidateTag(...args) }));

const parseBody = vi.fn();
vi.mock("next-sanity/webhook", () => ({ parseBody: (...args: unknown[]) => parseBody(...args) }));

describe("POST /api/revalidate", () => {
  beforeEach(() => {
    revalidateTag.mockClear();
    parseBody.mockReset();
  });

  it("rejects an invalid signature with 401", async () => {
    parseBody.mockResolvedValue({ isValidSignature: false, body: null });
    const { POST } = await import("../route");
    const res = await POST(
      new Request("http://localhost/api/revalidate", { method: "POST" }) as never,
    );
    expect(res.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("revalidates the post tag on a valid signature", async () => {
    parseBody.mockResolvedValue({ isValidSignature: true, body: { _type: "post" } });
    const { POST } = await import("../route");
    const res = await POST(
      new Request("http://localhost/api/revalidate", { method: "POST" }) as never,
    );
    expect(res.status).toBe(200);
    expect(revalidateTag).toHaveBeenCalledWith("post", "max");
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

```bash
npx vitest run app/api/revalidate/__tests__/route.test.ts
```

Expected: FAIL — cannot resolve `../route`.

- [ ] **Step 3: Write the route**

```ts
import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    revalidateTag("post", "max");
    return NextResponse.json({ revalidated: true, type: body?._type });
  } catch (err) {
    console.error("[revalidate] error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
```

- [ ] **Step 4: Run the test**

```bash
npx vitest run app/api/revalidate/__tests__/route.test.ts
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
npm run lint && npm run typecheck && npm test
git add app/api/revalidate
git commit -m "feat: add Sanity webhook revalidation endpoint"
```

---

### Task 14: Deploy and verify end to end

**Files:** none — configuration and verification.

- [ ] **Step 1: Set the Netlify environment variables**

On the Berkshire site, for **all** deploy contexts:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=eyos1dte
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
SANITY_REVALIDATE_SECRET=<the value in .env.local>
```

Do **not** add `SANITY_WRITE_TOKEN`.

- [ ] **Step 2: Deploy the branch and check a preview**

Push the branch and open the deploy preview. Verify `/blog`, three article URLs, and `/studio` (which should prompt for a Sanity login).

- [ ] **Step 3: Create the Sanity webhook**

At sanity.io/manage → project `eyos1dte` → API → Webhooks:

- URL: `https://www.berkshiresafetyconsultants.com/api/revalidate`
- Dataset: `production`, trigger on create, update and delete
- Filter: `_type == "post"`
- HTTP method: POST
- Secret: the same `SANITY_REVALIDATE_SECRET`

- [ ] **Step 4: End-to-end publish test**

Edit a post's excerpt in the Studio, publish, and reload `/blog`. Expected: the change appears within ~10 seconds with no rebuild, and the Netlify function log shows a 200 from `/api/revalidate`.

- [ ] **Step 5: Confirm production CORS**

Load `/studio` on the production domain and log in. Expected: it authenticates. If it fails, the origin is missing from Sanity CORS (it was added for `https://www.berkshiresafetyconsultants.com` — check whether the site also serves the apex domain).

- [ ] **Step 6: Delete the migration token**

At sanity.io/manage → API → Tokens, delete "Local migration (delete after use)". Confirm the live site still works — it reads published content without a token.

- [ ] **Step 7: Final verification**

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

Expected: all green, including the fidelity gate.

- [ ] **Step 8: Merge**

Use the `superpowers:finishing-a-development-branch` skill to decide how to integrate `feat/blog-cms-embedded`.
