# SEO & Discovery — Berkshire Safety Consultants

Site: **https://www.berkshiresafetyconsultants.com** · Stack: Next.js (App Router) on Netlify.
Status: all items below are merged to `main` and live. One item (Google Analytics) is pending — see the end.

---

## 1. Crawl & discovery files

| File                              | Detail                                           |
| --------------------------------- | ------------------------------------------------ |
| `app/robots.ts` → `/robots.txt`   | Site crawlable (index/follow); links the sitemap |
| `app/sitemap.ts` → `/sitemap.xml` | **26 URLs** — every public page                  |
| `public/llms.txt`                 | Guidance file for AI crawlers / LLMs             |

## 2. Canonical URLs

Self-referencing `alternates.canonical` on **24 / 24 pages** (home, services, housing-associations, small-businesses, principal-designer-services, first-aid-fire-marshal-training, e-learning, assure, about, contact, faq, accessibility-statement, privacy-policy, blog index + 10 blog articles). `metadataBase` is set to the `www` host so every canonical resolves to one absolute URL.

## 3. Page metadata

Set site-wide in `app/layout.tsx` with per-page overrides:

- Unique `<title>` and meta `description` on every route
- `metadataBase: https://www.berkshiresafetyconsultants.com`
- `robots: { index: true, follow: true }`
- `applicationName`, `locale: en_GB`

## 4. Social share cards (Open Graph + Twitter)

- Open Graph tags: `type=website`, `siteName`, `locale`, `url`, `title`, `description`
- Twitter tags: `card=summary_large_image`, `title`, `description`
- Branded **1200×630** share image generated dynamically at `app/opengraph-image.tsx` (navy/lime palette)

## 5. Structured data (JSON-LD)

Site-wide `@graph` injected in `app/layout.tsx`:

- **`Organization` + `ProfessionalService`** (`#org`) — name "Berkshire Safety Consultants", `email` info@berkshiresafetyconsultants.com, `PostalAddress` (Maidenhead, Berkshire, GB), `areaServed` [Berkshire, United Kingdom], description referencing ISO 45001 / ISO 9001 accreditation
- **`WebSite`** (`#website`) — `inLanguage` en-GB

## 6. Rich-result schema (FAQ + Articles)

Data centralised as single sources of truth and reused for both the UI and the schema:

- **`FAQPage`** on **/faq** — 10 Q&As. FAQ data lives in `app/faq/faqs.ts` (shared by the accordion UI and the schema).
- **`BlogPosting`** on **all 10 blog articles**, each with headline, description, image (absolute URL), `datePublished` (ISO), author + publisher (the org). Post data lives in `app/blog/posts.ts`.
- **`Blog`** collection on the **/blog** index, listing all posts.

Blog articles + inferred publish dates (normalised to ISO from the on-page dates):

| Article                    | datePublished |
| -------------------------- | ------------- |
| iso-9001-vs-iso-45001      | 2026-05-19    |
| why-dusty-sites            | 2026-03-13    |
| new-fire-safety-laws       | 2026-03-03    |
| winter-site-safety         | 2026-01-15    |
| toolbox-talks              | 2025-05-29    |
| world-day-for-safety       | 2025-04-28    |
| cultivating-compassion     | 2025-04-14    |
| prioritising-mental-health | 2025-01-29    |
| fire-safety-101            | 2024-07-24    |
| updated-hse-guidance       | 2024-06-13    |

## 7. Performance / Core Web Vitals

Every image converted from raw `<img>` to **`next/image`** (auto WebP/AVIF, responsive `srcset`, lazy-load below the fold, no layout shift). `~29 images` across 6 templates:

- `app/page.tsx` (15 — cover photos, ISO badges, partner logos, 1 SVG served `unoptimized`)
- `app/about/page.tsx` (6 — story + team photos)
- `app/services/page.tsx` (4)
- `app/blog/page.tsx` (2 — featured + grid cards)
- `app/principal-designer-services/page.tsx` (1)
- `app/first-aid-fire-marshal-training/page.tsx` (1 — partner logo)

Cover photos use `fill` inside sized wrappers; logos/badges use intrinsic width/height.

## 8. Branding in tabs & results (favicon + app icons + manifest)

The site was shipping the default `create-next-app` favicon (which was in fact the _other_ client's favicon by mistake); replaced with a branded set:

- Removed the default `app/favicon.ico`
- `app/icon.tsx` — generates favicon + **192** + **512** px icons
- `app/apple-icon.tsx` — **180** px Apple touch icon
- `app/manifest.ts` → `/manifest.webmanifest` — name, short_name, description, `display: standalone`, `background_color` #0e033c, `theme_color` #0e033c, 192/512 icons
- Mark: lime **"BSC"** on navy

---

## 9. Google Analytics 4 (with cookie consent) — LIVE

Google Analytics 4 (`G-KYKRFJQFG5`) is live, gated behind an opt-in cookie-consent banner (`components/CookieConsent.tsx`). Nothing from Google loads until the visitor accepts — 0 requests/cookies before consent (UK PECR/GDPR). The choice is stored for a year; a "Cookie preferences" link in the footer lets visitors change it. Privacy policy §12 notes GA-with-consent.

**Still recommended (owner action):** lawyer review of the wording; in the GA4 admin, confirm Google Signals is off and set data retention.
