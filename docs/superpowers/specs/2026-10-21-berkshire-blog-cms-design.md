# Berkshire Safety Consultants — Blog CMS (embedded Sanity Studio)

**Date:** 2026-10-21
**Status:** Approved design, ready for implementation planning

## Goal

Let Berkshire Safety Consultants author blog posts themselves in an embedded Sanity
Studio at `/studio`, and serve all posts from Sanity through a dynamic
`/blog/[slug]` route that reproduces the current design. The 10 existing
hand-coded TSX posts are migrated into Sanity, with a diff-based gate proving the
conversion before the old files are deleted.

This ports the approach already running on the Dr Marie Meechan site: a dedicated
Sanity project, public-read `production` dataset, embedded Studio, webhook-driven
tag revalidation, and a write token used only locally for migration.

## Scope

**In scope:** blog posts only.

**Out of scope:** services, FAQ, e-learning and other marketing copy stay as code.
Their layouts are bespoke and resist generic rich text; moving them buys nothing
today.

## Source analysis

Every one of the 10 existing posts was analysed before fixing the schema. The
findings below are what the schema is shaped around.

### Uniform across all 10

- **Body vocabulary is tiny:** `p`, `h2`, `ul`/`ol` + `li`, `strong`, `em`. There
  are no nested lists, no paragraphs inside `li`, no inline links in prose, no
  images, no blockquotes and no tables.
- **Body styling is identical:** the body container
  (`maxWidth: 760, margin: "0 auto", padding: "64px 24px 32px", fontSize: 16,
lineHeight: 1.75, color: "var(--gray-700)"`) is byte-identical in all 10 files,
  as are all 22 `h2` elements and all 11 lists. Paragraphs carry no styling.
- **Metadata shape is identical:** `alternates.canonical`, `title`, `description`.
- **Hero markup is identical** apart from the featured tag and title size below.
- `updated-hse-guidance` is paragraphs only — the simplest case; it still fits.

A Portable Text renderer that emits these fixed inline styles reproduces every
existing body exactly.

### Variations the schema must carry

- **CTA varies in label and destination.** 7 posts point at `/contact`
  ("Get in touch" ×4, "Contact us" ×2, "Book a call", "Book a winter site audit"),
  `fire-safety-101` points at `/first-aid-fire-marshal-training`
  ("Fire marshal training"), and `prioritising-mental-health` points at
  `/e-learning` ("Explore e-learning packages"). Pointing an article at the
  service it discusses is an editorial feature, so it becomes authored fields.
- **Two description texts, not one.** Found during planning: today's card text
  and today's `<meta name="description">` differ on 9 of the 10 posts, so the
  schema carries both (`excerpt` and `seoDescription`), mirroring the Meechan
  letter schema. Collapsing them to one field would silently rewrite either
  every card or every meta description.
- **Featured flag.** Only `iso-9001-vs-iso-45001` carries the lime "Featured" tag,
  which also shifts the `h1` margin to `18px 0 20px`. Both the index and the
  article read it.
- **Title highlight.** Every title has one lime-highlighted phrase, positioned
  anywhere in the title (start, middle or end).

### Inconsistencies being normalised (decided)

- **Hero title size** splits 5/5 between `clamp(28px, 4.4vw, 46px)` and
  `clamp(26px, 4vw, 42px)` and does not track title length — the 44- and
  60-character titles use the larger size while the 39- and 45-character ones use
  the smaller. This is drift. **All posts normalise to the larger clamp.**
- **Date format** splits by year: pre-2026 posts show `Apr 14, 2025`, 2026 posts
  show `May 19` with no year. The implied "omit the current year" rule would
  silently rewrite four bylines in 2027. **All dates show the year.**
- **Read time** is `2 min read` on nine posts and `5 min read` on one, which looks
  guessed rather than measured. **Read time is computed** from the body
  (words ÷ 200, minimum 1).

## Data model

One `post` document type:

| Field            | Type                             | Notes                                                                        |
| ---------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| `title`          | string, required                 | Full plain title. Drives SEO, index cards and JSON-LD                        |
| `highlight`      | string                           | Phrase within the title rendered lime. No match → plain title                |
| `slug`           | slug, required                   | Sourced from title. The 10 existing slugs are preserved exactly              |
| `heroImage`      | image (hotspot) + required `alt` | Existing `/public/assets/blog-*.png` uploaded to Sanity's CDN                |
| `excerpt`        | text, required                   | Index card copy and structured-data description                              |
| `seoDescription` | text                             | The `<meta name="description">`. Falls back to `excerpt` when blank          |
| `publishedAt`    | datetime, required               | Ordering and the displayed date                                              |
| `featured`       | boolean                          | Drives the lime "Featured" tag                                               |
| `ctaLabel`       | string                           | Defaults to "Get in touch" when blank                                        |
| `ctaHref`        | string                           | Defaults to `/contact` when blank                                            |
| `body`           | Portable Text, required          | Blocks: `normal`, `h2`. Lists: bullet, number. Marks: `strong`, `em`, `link` |

`link` is included in the mark set even though no current post uses one — it costs
nothing and an editor will reach for it.

Read time is derived, not stored. The hero gradient, back-link and byline layout
stay in the template.

## Migration and the fidelity gate

The converter consumes the **rendered DOM**, not the TSX source: build the site as
it stands, fetch each `/blog/<slug>`, extract the article container and convert to
Portable Text. The input is then exactly what ships today, and JSX quirks
(`&apos;`, `&ldquo;`, `{" "}` spacers, `strong` inside `li`) resolve themselves.

Hero images are uploaded to Sanity from `public/assets/` by the same script.

The gate:

1. Snapshot the rendered HTML of all 10 posts before migration.
2. Convert → Portable Text → render through the new `/blog/[slug]` template.
3. Normalise whitespace and diff the **full rendered page**, hero included. **Target:
   identical output for all 10 (after collapsing the whitespace JSX formatting
   introduces), except the four deltas below.**

Accepted differences, and nothing else: computed read time, normalised title size,
always-show-year dates, and hero images served from Sanity's CDN rather than
`/public`.

The diff runs as a committed test so it keeps protecting the template afterwards.
**If a post will not convert cleanly, stop and investigate — the old TSX files are
not deleted until the diff is green.**

## Architecture

`app/` splits into `(site)` and `(studio)` route groups. The current root layout
loads `responsive.css`, `SiteHeader`, `SiteFooter` and `CookieConsent`, all of
which would break the Studio UI, so `(studio)/layout.tsx` is bare. Route groups do
not change URLs.

New code:

- `lib/sanity/client.ts` — returns empty results when env vars are missing, so CI
  and builds stay green without secrets.
- `lib/sanity/queries.ts`, `lib/sanity/image.ts`, `lib/sanity/post-to-view.ts`
- `components/PortablePostBody.tsx` — the fixed-inline-style renderer.
- `app/(site)/blog/[slug]/page.tsx` — `generateStaticParams` + `generateMetadata`.
- `app/api/revalidate/route.ts` — verifies the webhook signature, then
  `revalidateTag("post", "max")`.
- `sanity/schemas/post.ts`, `sanity.config.ts` (basePath `/studio`),
  `app/(studio)/studio/[[...tool]]/page.tsx`
- `scripts/migrate-posts.ts` and the fidelity harness.

Dependencies to add: `next-sanity`, `sanity`, `@portabletext/react`,
`@portabletext/types`, `@sanity/image-url`, `styled-components` (Studio peer
dependency, confined to `/studio`), `tsx` (migration script).

### Existing code the CMS pulls in

- **`app/sitemap.ts`** hardcodes all 10 blog URLs. It becomes async and reads slugs
  from Sanity, otherwise new posts are never indexed.
- **`app/blog/posts.ts`** is the JSON-LD source for both the index and every
  article, covered by `components/__tests__/schema.test.ts`. `BLOG_POSTS` is
  removed; `blogPostingLd` and `blogCollectionLd` become functions over fetched
  data, and the existing tests are rewritten against that.
- **`app/(site)/blog/page.tsx`** (today `app/blog/page.tsx`) fetches from Sanity
  instead of importing `BLOG_POSTS`. Note it currently holds a _second_
  hardcoded `POSTS` array plus a hardcoded featured article — a third source of
  truth that the migration removes. Its card titles are Title Case while the
  articles are sentence case; after cutover the Sanity `title` is canonical, so
  index cards and JSON-LD headlines adopt the article's sentence case. This is
  an accepted, visible change on `/blog`.

## Testing

- Unit tests for the HTML → Portable Text converter.
- Unit tests for `PortablePostBody` covering every block, list and mark type.
- Rewritten `schema.test.ts` against fetched data.
- The fidelity diff harness over all 10 posts.
- `npm run lint`, `npm run typecheck`, `npm test` stay green; `styled-components`
  must not leak outside `/studio`.

## Rollout

The existing pages stay live throughout:

1. Schema, Studio and client — no content yet. Site still serves the 10 TSX pages.
2. Migrate content and hero images into Sanity.
3. Build the dynamic route at a temporary path; run the fidelity diff.
4. **Gate** — diff clean apart from the four accepted differences.
5. Swap the route in; delete the 10 TSX files and `posts.ts`; update sitemap and
   JSON-LD.
6. Webhook, CORS and Netlify env.

## Manual steps (require a Sanity login)

- Create the Sanity project and `production` dataset; put the project ID in
  `.env.local` and Netlify.
- Invite Berkshire's editor as an Editor.
- Add CORS origins for `http://localhost:3000` and the production domain, with
  credentials allowed.
- Create the webhook: `POST https://www.berkshiresafetyconsultants.com/api/revalidate`, filter
  `_type == "post"`, on create/update/delete, sharing `SANITY_REVALIDATE_SECRET`.
- Set Netlify env: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
  `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_REVALIDATE_SECRET`.
  `SANITY_WRITE_TOKEN` stays local-only, for migration.

## Risks and tradeoffs

- **Build-time dependency on Sanity.** After step 5 the blog needs the dataset at
  build time; if it is unreachable or empty, `/blog` renders empty rather than
  falling back. This is the same bargain the Meechan site already makes.
- **Public-read dataset.** Published content is world-readable by design; drafts
  are not. No secrets belong in the dataset.
- **Studio bundle weight.** The `sanity` package is large but confined to
  `/studio`, which is not linked from the site and is excluded from the sitemap.
- **Next.js version.** This project is on Next 16.2.12 with breaking changes from
  older conventions. Per `AGENTS.md`, read the relevant guide in
  `node_modules/next/dist/docs/` before writing route, caching or metadata code.

## Success criteria

- Berkshire can log in at `/studio`, write a post, publish, and see it live within
  ~10 seconds without a rebuild.
- All 10 migrated posts render identically — after whitespace normalisation —
  apart from the four accepted differences, at their existing URLs.
- Sitemap and JSON-LD cover Sanity-authored posts automatically.
- Lint, typecheck and tests pass; no `styled-components` outside `/studio`.
