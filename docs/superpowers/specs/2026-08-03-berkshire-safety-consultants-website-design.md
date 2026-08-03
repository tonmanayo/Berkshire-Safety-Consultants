# Berkshire Safety Consultants Website — Design

**Date:** 2026-08-03
**Status:** Approved (Phase 1 in scope)

## Goal

Faithfully port the finished Berkshire Safety Consultants (BSC) design into a Next.js site,
hosted on Netlify, on a stack that cleanly supports two later features:

1. A client-authored blog (Sanity).
2. A contact form that emails the client.

Same stack, process, and phasing as the Dr Marie Meechan build. The website must look **exactly**
as designed — fidelity is the primary constraint.

## Stack (carried over from the Dr Marie Meechan project)

| Concern   | Choice                                                                                                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework | Next.js 16 + TypeScript, App Router, Turbopack, React Compiler                                                                                                                               |
| Hosting   | Netlify (free tier), auto-deploy from GitHub, existing domain                                                                                                                                |
| Styling   | The design's token CSS (`_ds/.../tokens/*.css`) kept verbatim as global CSS; inline styles transcribed to JSX `style` objects; CSS Modules for any new component-scoped styles. No Tailwind. |
| Icons     | `lucide-react` (the design uses Lucide via `data-lucide`)                                                                                                                                    |
| Blog      | Sanity (free tier) — visual editor; dynamic `/blog/[slug]`; publish → on-demand revalidation _(Phase 2)_                                                                                     |
| Email     | Netlify Forms — contact form emails the client, zero backend _(Phase 3)_                                                                                                                     |

Built test-first via subagent-driven development, with the same quality gates and CI as before.

## Source design

Located at `~/Downloads/Berkshire Safety Consultants Redesign (2)/`. This is a **"dc-runtime"
React export**, not static HTML:

- `support.js` — a generated runtime that parses `<x-dc>` documents using `window.React`/`window.ReactDOM` at load time. **Not shipped** — we port to idiomatic Next.js instead.
- 27 `.dc.html` templates using custom tags: `<x-import component-from-global-scope="...">` (design-system components), `<sc-if>` (conditionals), `<image-slot>` (image placeholders), `{{ }}` expressions, and `on*` handlers.
- `_ds/berkshire-safety-consultants-design-syst-<id>/` — the design system:
  - `tokens/{colors,fonts,typography,spacing,motifs}.css` — plain CSS custom properties (`--navy-900`, `--lime-500`, `--paper`, `--ink`, `--font-primary`, etc.).
  - `styles.css` — small shared stylesheet.
  - `_ds_bundle.js` — the React implementations of the design-system components (reference only).
- `assets/` — images (hero, badges, blog images, partner logos, wordmarks).
- `uploads/` — source collateral (brand PDFs, docx, original images); `.image-slots.state.json` maps `<image-slot>` placeholders to chosen images.
- `image-slot.js` — the image-slot runtime (reference only).

### Theme

The entire live site is the **light theme**: every content page uses `background:var(--paper)`
with `color:var(--ink)` and pulls in the shared `SiteHeader`/`SiteFooter`. `Homepage Light.dc.html`
is the canonical homepage. The stray dark `Homepage.dc.html` (inlined header, absolute production
URLs) is an earlier variant and is **ignored**.

## Reactive surface (small)

Across all pages: 4 shared design-system components, 11 `sc-if` conditionals, ~2 loops, 27
image-slots, ~57 `{{ }}` expressions, ~11 `on*` handlers. Interactivity is essentially the header
services dropdown + mobile menu. Everything else is presentational.

## Architecture (Phase 1 — faithful port)

- **Design tokens** copied verbatim into `public/` (e.g. `public/ds/tokens/*.css` + `styles.css`)
  and loaded via `<link>` in the root layout — preserves every `var(--token)` reference and all
  relative font URLs, zero visual drift.
- **The 4 shared components** rebuilt as React components matching their variants/props:
  - `Button` (referenced ~43× — variants `primary`/`secondary`, sizes `sm`/`lg`)
  - `Tag` (~18×)
  - `Logo` (~4× — `tone` on-dark/on-light, `size`)
  - `SectionHeading` (~3×)
    These are the backbone of fidelity; exact props/variants derived from `_ds_bundle.js`.
- **`SiteHeader` / `SiteFooter`** → shared layout components. The services dropdown (hover-open)
  and mobile menu become a small **client component** (the only real interactivity).
- **Page bodies** transcribed into `app/**/page.tsx`: inline `style="a:b"` → `style={{ a: "b" }}`
  objects (camelCase); `<image-slot>` resolved to the real file in `assets/` (using
  `.image-slots.state.json` as the mapping source); `<sc-if>`/`{{ }}` become plain JSX/props;
  `class`→`className`. Internal links (`*.dc.html` and absolute `berkshiresafetyconsultants.com/...`)
  rewritten to Next routes.
- **Icons**: `data-lucide="name"` → `lucide-react` `<Name />` components.
- Assets copied into `public/assets/`; used via plain `<img>`/CSS `url()` (no `next/image`, to avoid
  layout shift from the design), consistent with the previous project.
- The contact form keeps its designed success-state UI; it does **not** email yet in Phase 1.

### Data flow (Phase 1)

Fully static. No runtime data fetching. Pages render at build time and serve as static assets.

## Site structure — 24 routes

**Pages (14):** `/` (Homepage Light), `/about`, `/services`, `/housing-associations`,
`/small-businesses`, `/principal-designer-services`, `/first-aid-fire-marshal-training`, `/assure`,
`/e-learning`, `/faq`, `/contact`, `/blog` (index), `/privacy-policy`, `/accessibility-statement`.

**Blog posts (10):** `/blog/<slug>` — Cultivating Compassion, Fire Safety 101, ISO 9001 vs ISO
45001, New Fire Safety Laws, Prioritising Mental Health, Toolbox Talks, Updated HSE Guidance, Why
Dusty Sites, Winter Site Safety, World Day for Safety. Ported as static routes in Phase 1; migrated
into Sanity in Phase 2.

The Services dropdown lists the 4 sub-service pages (Housing Associations, Small Businesses,
Principal Designer Services, First Aid & Fire Marshal Training).

## Tooling & quality gates (Phase 1)

Identical to the Dr Marie Meechan project:

- **TypeScript** strict; `tsc --noEmit` typecheck script.
- **ESLint** (flat config) + **Prettier**; `lint` / `format` / `format:check` scripts.
- **Husky + lint-staged** pre-commit hook; the design token CSS in `public/` excluded from
  formatting so it stays byte-identical.
- **npm scripts**: `dev`, `build`, `start`, `lint`, `typecheck`, `format:check`, `test`.
- **GitHub Actions CI** (`.github/workflows/ci.yml`) on push + PR: install → typecheck → lint →
  format:check → test → build. Netlify deploys from `main` after CI passes; deploy previews on PRs.

## Error handling

- Contact form: client-side validation + graceful success/failure UI (email wiring in Phase 3).
- A `not-found.tsx` 404 page styled to match the design (light theme, shared header/footer).

## Testing

Test-first per the project's TDD practice. Phase 1 covers:

- The 4 design-system components (variant/prop rendering).
- Interactive bits: services dropdown open/close, mobile menu toggle.
- A build smoke check (CI `next build`).
- **Fidelity check:** compare each ported route against the rendered design (the `.dc.html` opened
  via its runtime, or the design's own preview) to catch visual drift.

## Phasing

1. **Phase 1 — Live site (this deliverable):** 4 DS components + shared header/footer, all 14 pages
   - 10 blog posts ported faithfully, tooling + CI, deploy to Netlify on the domain. Contact form
     shows the designed success state (no email yet). Milestone: the site is live, exactly as designed,
     with a green CI pipeline.
2. **Phase 2 — Blog:** Sanity schema for BSC posts (title, slug, category, hero image, excerpt,
   body as Portable Text, publishedAt, SEO), dynamic `/blog/[slug]` + Sanity-driven `/blog` index,
   migrate the 10 posts, publish → revalidate webhook. Embedded Studio at `/studio`.
3. **Phase 3 — Contact email:** wire the contact form to Netlify Forms with email notifications to
   the client; keep the existing success UI.

## Decisions & assumptions

- **E-Learning and Assure are informational/marketing pages only** — no payments, logins, gated
  content, or enrolment. Any real functionality is explicitly out of scope and would be a separate
  project.
- **Light theme is the site**; the dark `Homepage.dc.html` variant is ignored.
- Domain is already owned; DNS will point to Netlify at go-live.
- Blog posts migrated into Sanity (Phase 2) so the client edits/adds posts in a visual editor.
- Phase 1 is the first deliverable; Phases 2–3 are follow-on work with their own plans.

## Out of scope

- E-Learning / Assure transactional features (payments, accounts, gated content, enrolment).
- Tailwind / styled-components.
- Shipping the dc-runtime (`support.js` / `image-slot.js` / `_ds_bundle.js`) — we port to React.
- Any redesign — the design is fixed.
