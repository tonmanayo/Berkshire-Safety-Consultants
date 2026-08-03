# Berkshire Safety Consultants Website — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Port the finished BSC "dc-runtime" design export at `~/Downloads/Berkshire Safety Consultants Redesign (2)/` into a Next.js 16 app, pixel-faithful, deployed to Netlify, with linting/type-checking and a CI pipeline that fails if anything is broken.

**Architecture:** A faithful port to idiomatic Next.js — we do NOT ship the dc-runtime (`support.js`/`_ds_bundle.js`/`image-slot.js`). The design's token CSS is served verbatim from `public/ds/`; the 4 shared design-system components (`Button`, `Tag`, `Logo`, `SectionHeading`) are rebuilt as React components matching the bundle's exact styles; `SiteHeader`/`SiteFooter` become shared layout components (the services dropdown + mobile menu is the only real interactivity); each `.dc.html` page body is transcribed into `app/**/page.tsx` with inline styles → JSX `style` objects, `<image-slot src>` → `<img>`, and links rewritten to Next routes.

**Tech Stack:** Next.js 16 (App Router, Turbopack, React Compiler), TypeScript (strict), `lucide-react`, Vitest + React Testing Library, ESLint (flat config) + Prettier, Husky + lint-staged, GitHub Actions, Netlify.

## Global Constraints

- **Fidelity is the top priority** — class names, inline styles, copy, and structure are transcribed from the design exactly; no redesign.
- **Light theme only** — every page uses `background:var(--paper); color:var(--ink)`. Ignore the stray dark `Homepage.dc.html`.
- **Token CSS is verbatim** — the design's token files are copied byte-for-byte into `public/ds/` and MUST NOT be reformatted (excluded from Prettier).
- **No `next/image`** — use plain `<img>` (matches the design; avoids layout shift). The `@next/next/no-img-element` lint warnings are expected/acceptable — only ERRORS block.
- **Icons** — `data-lucide="name"` becomes a `lucide-react` component. Kebab-case Lucide names map to PascalCase imports (e.g. `shield-check` → `ShieldCheck`, `arrow-right` → `ArrowRight`, `chevron-down` → `ChevronDown`, `building-2` → `Building2`).
- **Contact form** — Phase 1 shows the designed success state only; no email (Phase 3).
- **Internal links** — rewrite both `*.dc.html` filenames and absolute `https://www.berkshiresafetyconsultants.com/...` URLs to internal Next routes per the route table.

---

## Source → route mapping

Design dir: `~/Downloads/Berkshire Safety Consultants Redesign (2)/` (referred to below as `$SRC`).

| Source `.dc.html`                     | Route                              | `page.tsx` path                                |
| ------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| `Homepage Light`                      | `/`                                | `app/page.tsx`                                 |
| `About`                               | `/about`                           | `app/about/page.tsx`                           |
| `Services`                            | `/services`                        | `app/services/page.tsx`                        |
| `Housing Associations`                | `/housing-associations`            | `app/housing-associations/page.tsx`            |
| `Small Businesses`                    | `/small-businesses`                | `app/small-businesses/page.tsx`                |
| `Principal Designer Services`         | `/principal-designer-services`     | `app/principal-designer-services/page.tsx`     |
| `First Aid and Fire Marshal Training` | `/first-aid-fire-marshal-training` | `app/first-aid-fire-marshal-training/page.tsx` |
| `Assure`                              | `/assure`                          | `app/assure/page.tsx`                          |
| `E-Learning`                          | `/e-learning`                      | `app/e-learning/page.tsx`                      |
| `FAQ`                                 | `/faq`                             | `app/faq/page.tsx`                             |
| `Contact`                             | `/contact`                         | `app/contact/page.tsx`                         |
| `Blog`                                | `/blog`                            | `app/blog/page.tsx`                            |
| `Privacy Policy`                      | `/privacy-policy`                  | `app/privacy-policy/page.tsx`                  |
| `Accessibility Statement`             | `/accessibility-statement`         | `app/accessibility-statement/page.tsx`         |
| `Blog - Cultivating Compassion`       | `/blog/cultivating-compassion`     | `app/blog/cultivating-compassion/page.tsx`     |
| `Blog - Fire Safety 101`              | `/blog/fire-safety-101`            | `app/blog/fire-safety-101/page.tsx`            |
| `Blog - ISO 9001 vs ISO 45001`        | `/blog/iso-9001-vs-iso-45001`      | `app/blog/iso-9001-vs-iso-45001/page.tsx`      |
| `Blog - New Fire Safety Laws`         | `/blog/new-fire-safety-laws`       | `app/blog/new-fire-safety-laws/page.tsx`       |
| `Blog - Prioritising Mental Health`   | `/blog/prioritising-mental-health` | `app/blog/prioritising-mental-health/page.tsx` |
| `Blog - Toolbox Talks`                | `/blog/toolbox-talks`              | `app/blog/toolbox-talks/page.tsx`              |
| `Blog - Updated HSE Guidance`         | `/blog/updated-hse-guidance`       | `app/blog/updated-hse-guidance/page.tsx`       |
| `Blog - Why Dusty Sites`              | `/blog/why-dusty-sites`            | `app/blog/why-dusty-sites/page.tsx`            |
| `Blog - Winter Site Safety`           | `/blog/winter-site-safety`         | `app/blog/winter-site-safety/page.tsx`         |
| `Blog - World Day for Safety`         | `/blog/world-day-for-safety`       | `app/blog/world-day-for-safety/page.tsx`       |

Ignore: `Homepage.dc.html` (dark stray), `SiteHeader.dc.html` / `SiteFooter.dc.html` (become components), `.image-slots.state.json`, `support.js`, `image-slot.js`, `_ds/.../_ds_bundle.js` (reference only), `uploads/`.

## File structure

```
app/
  layout.tsx                 # root: html/head (token CSS links), body, header, footer
  page.tsx                   # Homepage Light
  <route>/page.tsx           # the 13 other pages + 10 blog posts (see table)
  not-found.tsx
components/
  ds/Button.tsx  ds/Tag.tsx  ds/Logo.tsx  ds/SectionHeading.tsx   # rebuilt DS components
  SiteHeader.tsx             # client: nav + services dropdown + mobile menu
  SiteFooter.tsx             # server: static footer
  Icon.tsx                   # thin lucide-react re-export helper (optional)
  __tests__/*.test.tsx
lib/
  nav.ts                     # NAV + services submenu data (shared header/footer)
public/
  ds/tokens/*.css  ds/styles.css   # verbatim design tokens
  assets/*                         # verbatim design images
next.config.ts  tsconfig.json  eslint.config.mjs  .prettierrc  .prettierignore
vitest.config.ts  vitest.setup.tsx  netlify.toml  package.json
.husky/pre-commit  .github/workflows/ci.yml
```

---

## Task 1: Scaffold the Next.js app + Prettier + scripts

**Files:** creates `package.json`, `next.config.ts`, `tsconfig.json`, `app/*`, `.prettierrc`, `.prettierignore`. The repo currently contains only `.git/` and `docs/`.

- [ ] **Step 1: Scaffold into the current directory**

Run:

```bash
cd /Users/tonymack/dev/Berkshire-Safety-Consultants
npx --yes create-next-app@latest . --typescript --eslint --app --no-src-dir --no-tailwind --turbopack --import-alias "@/*" --use-npm --yes
```

If it refuses because the directory is non-empty, it should still proceed (`.git/`+`docs/` don't conflict). If it hard-fails, report BLOCKED with the exact error (do NOT delete `docs/`).

- [ ] **Step 2: Enable the React Compiler** — edit `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

export default nextConfig;
```

If the build asks for it: `npm install -D babel-plugin-react-compiler`.

- [ ] **Step 3: Confirm `tsconfig.json` has `"strict": true`** (create-next-app sets it; add if missing).

- [ ] **Step 4: Add Prettier** — `npm install -D prettier`; create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "printWidth": 100
}
```

Create `.prettierignore`:

```
.next
node_modules
public/ds
public/assets
package-lock.json
```

(`public/ds` + `public/assets` ignored so verbatim design files are never reformatted.)

- [ ] **Step 5: Set `package.json` scripts exactly to**:

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "eslint .",
  "typecheck": "tsc --noEmit",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "test": "vitest run"
}
```

(`test` references vitest, installed in Task 3 — do not run `npm test` yet.)

- [ ] **Step 6: Verify** — `npm run build` succeeds; `npm run typecheck && npm run lint && npm run format:check` pass (run `npm run format` once if format:check flags files).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js 16 app with TypeScript, React Compiler, Prettier"
```

---

## Task 2: Vitest + React Testing Library

**Files:** create `vitest.config.ts`, `vitest.setup.tsx`, `components/__tests__/smoke.test.tsx`.

**Interfaces:**

- Produces: a working `npm test` (Vitest, jsdom, `@` alias) that later component tasks rely on.

- [ ] **Step 1: Install** — `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event`

- [ ] **Step 2: `vitest.config.ts`**:

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.tsx"],
  },
  resolve: {
    alias: { "@": resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 3: `vitest.setup.tsx`**:

```tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({ children, ...props }: any) => {
    const { href, ...rest } = props;
    return (
      <a href={typeof href === "string" ? href : "#"} {...rest}>
        {children}
      </a>
    );
  },
}));
```

- [ ] **Step 4: `components/__tests__/smoke.test.tsx`**:

```tsx
import { render, screen } from "@testing-library/react";

function Hello() {
  return <p>hello</p>;
}

test("test harness renders components", () => {
  render(<Hello />);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
```

If tsc typechecks `vitest.config.ts` and errors on a vite/rolldown type conflict, add `"vitest.config.ts"` to `tsconfig.json` `exclude` and add `"types": ["vitest/globals"]` to `compilerOptions`.

- [ ] **Step 5: Run** `npm test` → 1 passing. Then `npm run typecheck && npm run lint && npm run format:check` pass.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "test: set up Vitest + React Testing Library"
```

---

## Task 3: Husky + lint-staged pre-commit hook

**Files:** create `.husky/pre-commit`; modify `package.json`.

- [ ] **Step 1: Install + init** — `npm install -D husky lint-staged` then `npx husky init`

- [ ] **Step 2: Add to `package.json`**:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,css,md}": ["prettier --write"]
}
```

- [ ] **Step 3: Replace `.husky/pre-commit` contents with exactly**:

```sh
npx lint-staged
```

(Remove any default `npm test` line.)

- [ ] **Step 4: Verify + commit** — `git add -A && git commit -m "chore: add Husky + lint-staged pre-commit hook"` runs lint-staged and succeeds.

---

## Task 4: GitHub Actions CI

**Files:** create `.github/workflows/ci.yml`.

- [ ] **Step 1: Create the workflow**:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run format:check
      - run: npm test
      - run: npm run build
```

- [ ] **Step 2: Verify locally** — `npm ci && npm run typecheck && npm run lint && npm run format:check && npm test && npm run build` all exit 0.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "ci: add GitHub Actions pipeline (typecheck, lint, format, test, build)"
```

---

## Task 5: Migrate design tokens + assets into `public/`

**Files:** create `public/ds/tokens/*.css`, `public/ds/styles.css`, `public/assets/*`.

- [ ] **Step 1: Copy tokens + styles verbatim**:

```bash
SRC="/Users/tonymack/Downloads/Berkshire Safety Consultants Redesign (2)"
DS="$SRC/_ds/berkshire-safety-consultants-design-syst-f819c261-eaec-4d63-a0b6-dae4fbb1cf0b"
mkdir -p public/ds/tokens
cp "$DS/tokens/"*.css public/ds/tokens/
cp "$DS/styles.css" public/ds/styles.css
```

- [ ] **Step 2: Copy image assets verbatim**:

```bash
cp -R "$SRC/assets" public/assets
```

- [ ] **Step 3: Verify key files exist**:

```bash
ls public/ds/tokens/colors.css public/ds/tokens/fonts.css public/ds/tokens/typography.css \
   public/ds/tokens/spacing.css public/ds/tokens/motifs.css public/ds/styles.css \
   public/assets/hero-worker-branded.png public/assets/bsc-wordmark-lime.png
```

All list (no "No such file").

- [ ] **Step 4: Confirm tokens are byte-identical** (fidelity):

```bash
diff "$DS/tokens/colors.css" public/ds/tokens/colors.css && echo "colors.css identical"
diff "$DS/styles.css" public/ds/styles.css && echo "styles.css identical"
```

Both show no differences.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: add design tokens and image assets to public/"
```

---

## Task 6: Root layout (global token CSS + shell)

**Files:** modify `app/layout.tsx`; delete `app/globals.css`, `app/page.module.css` if present.

**Interfaces:**

- Consumes: `@/components/SiteHeader`, `@/components/SiteFooter` (Tasks 12–13). Until those exist, the app won't build — do the build verification at the end of Task 13.
- Produces: the global HTML shell + token CSS every page renders inside.

- [ ] **Step 1: Remove scaffold styles** — `rm -f app/globals.css app/page.module.css` and ensure `app/layout.tsx` does not `import "./globals.css"` or use `next/font`.

- [ ] **Step 2: Replace `app/layout.tsx`**:

```tsx
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Berkshire Safety Consultants — Health & Safety Consultancy",
  description:
    "Expert health & safety consultancy for housing associations and small businesses. Practical advice that protects your people, not just box-ticking. ISO 45001 & ISO 9001 accredited.",
};

const DS = "/ds";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={`${DS}/tokens/fonts.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/colors.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/typography.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/spacing.css`} />
        <link rel="stylesheet" href={`${DS}/tokens/motifs.css`} />
        <link rel="stylesheet" href={`${DS}/styles.css`} />
      </head>
      <body
        style={{
          margin: 0,
          background: "var(--paper)",
          color: "var(--ink)",
          fontFamily: "var(--font-primary)",
        }}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Commit** (build verified in Task 13):

```bash
git add -A
git commit -m "feat: add root layout with design token stylesheets"
```

---

## Task 7: `Button` design-system component (TDD)

**Files:** create `components/ds/Button.tsx`, `components/__tests__/Button.test.tsx`.

**Interfaces:**

- Produces: `Button({ variant?, size?, fullWidth?, iconLeft?, iconRight?, disabled?, type?, onClick?, children, style? })` — `variant` ∈ `"primary"|"secondary"|"dark"|"ghost"` (default `"primary"`), `size` ∈ `"sm"|"md"|"lg"` (default `"md"`). Used by nearly every page + header.

- [ ] **Step 1: Failing test** `components/__tests__/Button.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ds/Button";

test("renders a primary button with uppercase label styling and lime background", () => {
  render(<Button>Contact</Button>);
  const btn = screen.getByRole("button", { name: "Contact" });
  expect(btn).toHaveStyle({ background: "var(--lime-500)" });
  expect(btn).toHaveStyle({ textTransform: "uppercase" });
});

test("secondary variant is transparent with a lime border", () => {
  render(<Button variant="secondary">Talk to us</Button>);
  const btn = screen.getByRole("button", { name: "Talk to us" });
  expect(btn).toHaveStyle({ background: "transparent" });
});
```

- [ ] **Step 2: Run** `npm test -- Button` → FAIL (module not found).

- [ ] **Step 3: Implement `components/ds/Button.tsx`** (transcribed from the DS bundle, exact styles):

```tsx
"use client";

import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "var(--text-sm)", gap: "6px" },
  md: { padding: "12px 24px", fontSize: "var(--text-md)", gap: "8px" },
  lg: { padding: "16px 32px", fontSize: "var(--text-lg)", gap: "10px" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--lime-500)",
    color: "var(--navy-900)",
    border: "2px solid var(--lime-500)",
  },
  secondary: {
    background: "transparent",
    color: "var(--lime-600)",
    border: "2px solid var(--lime-500)",
  },
  dark: {
    background: "var(--navy-900)",
    color: "var(--white)",
    border: "2px solid var(--navy-900)",
  },
  ghost: { background: "transparent", color: "var(--navy-900)", border: "2px solid transparent" },
};

const HOVER_BG: Record<Variant, string> = {
  primary: "var(--lime-600)",
  secondary: "rgba(207,224,86,0.12)",
  dark: "var(--navy-700)",
  ghost: "var(--mist)",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  children,
  style = {},
}: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES[size].gap,
    fontFamily: "var(--font-primary)",
    fontWeight: "var(--fw-bold)" as unknown as number,
    lineHeight: 1,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
    padding: SIZES[size].padding,
    fontSize: SIZES[size].fontSize,
    ...VARIANTS[variant],
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = HOVER_BG[variant];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = String(VARIANTS[variant].background);
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
```

- [ ] **Step 4: Run** `npm test -- Button` → PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ds/Button.tsx components/__tests__/Button.test.tsx
git commit -m "feat: add Button design-system component"
```

---

## Task 8: `Tag` design-system component (TDD)

**Files:** create `components/ds/Tag.tsx`, `components/__tests__/Tag.test.tsx`.

**Interfaces:**

- Produces: `Tag({ variant?, size?, children, style? })` — `variant` ∈ `"lime"|"outline"|"navy"|"soft"` (default `"lime"`), `size` ∈ `"sm"|"md"` (default `"md"`).

- [ ] **Step 1: Failing test** `components/__tests__/Tag.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { Tag } from "@/components/ds/Tag";

test("renders a lime tag by default", () => {
  render(<Tag>Fire Safety</Tag>);
  const tag = screen.getByText("Fire Safety");
  expect(tag).toHaveStyle({ background: "var(--lime-500)" });
  expect(tag).toHaveStyle({ textTransform: "uppercase" });
});
```

- [ ] **Step 2: Run** `npm test -- Tag` → FAIL.

- [ ] **Step 3: Implement `components/ds/Tag.tsx`**:

```tsx
import type { CSSProperties, ReactNode } from "react";

type Variant = "lime" | "outline" | "navy" | "soft";
type Size = "sm" | "md";

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "3px 10px", fontSize: "var(--text-2xs)" },
  md: { padding: "5px 14px", fontSize: "var(--text-xs)" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  lime: {
    background: "var(--lime-500)",
    color: "var(--navy-900)",
    border: "1.5px solid var(--lime-500)",
  },
  outline: {
    background: "transparent",
    color: "var(--lime-600)",
    border: "1.5px solid var(--lime-500)",
  },
  navy: {
    background: "var(--navy-800)",
    color: "var(--white)",
    border: "1.5px solid var(--navy-800)",
  },
  soft: { background: "var(--mist)", color: "var(--navy-900)", border: "1.5px solid var(--mist)" },
};

export function Tag({
  variant = "lime",
  size = "md",
  children,
  style = {},
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-bold)" as unknown as number,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...SIZES[size],
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 4: Run** `npm test -- Tag` → PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ds/Tag.tsx components/__tests__/Tag.test.tsx
git commit -m "feat: add Tag design-system component"
```

---

## Task 9: `Logo` design-system component (TDD)

**Files:** create `components/ds/Logo.tsx`, `components/__tests__/Logo.test.tsx`.

**Interfaces:**

- Produces: `Logo({ tone?, size?, rule?, style? })` — `tone` ∈ `"onDark"|"onLight"|"lime"|"mono"` (default `"onDark"`), `size` ∈ `"sm"|"md"|"lg"` (default `"md"`), `rule` default `true`. Three stacked words "Berkshire / Safety / Consultants" + accent rule.

- [ ] **Step 1: Failing test** `components/__tests__/Logo.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { Logo } from "@/components/ds/Logo";

test("renders the three-word wordmark", () => {
  render(<Logo tone="onLight" />);
  expect(screen.getByText("Berkshire")).toBeInTheDocument();
  expect(screen.getByText("Safety")).toBeInTheDocument();
  expect(screen.getByText("Consultants")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run** `npm test -- Logo` → FAIL.

- [ ] **Step 3: Implement `components/ds/Logo.tsx`**:

```tsx
import type { CSSProperties } from "react";

type Tone = "onDark" | "onLight" | "lime" | "mono";
type Size = "sm" | "md" | "lg";

const SCALE: Record<Size, number> = { sm: 14, md: 20, lg: 30 };

const TONES: Record<Tone, { text: string; accent: string }> = {
  onDark: { text: "var(--white)", accent: "var(--lime-500)" },
  onLight: { text: "var(--navy-900)", accent: "var(--navy-900)" },
  lime: { text: "var(--lime-500)", accent: "var(--lime-500)" },
  mono: { text: "currentColor", accent: "currentColor" },
};

export function Logo({
  tone = "onDark",
  size = "md",
  rule = true,
  style = {},
}: {
  tone?: Tone;
  size?: Size;
  rule?: boolean;
  style?: CSSProperties;
}) {
  const scale = SCALE[size];
  const t = TONES[tone] ?? TONES.onDark;
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-bold)" as unknown as number,
        textTransform: "uppercase",
        lineHeight: 1.04,
        letterSpacing: "0.01em",
        color: t.text,
        fontSize: scale,
        ...style,
      }}
    >
      <span>Berkshire</span>
      <span>Safety</span>
      <span>Consultants</span>
      {rule && (
        <span
          aria-hidden="true"
          style={{
            marginTop: scale * 0.3,
            width: scale * 8,
            maxWidth: "100%",
            height: Math.max(2, scale * 0.16),
            background: t.accent,
            borderRadius: "var(--radius-pill)",
          }}
        />
      )}
    </div>
  );
}
```

- [ ] **Step 4: Run** `npm test -- Logo` → PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ds/Logo.tsx components/__tests__/Logo.test.tsx
git commit -m "feat: add Logo design-system component"
```

---

## Task 10: `SectionHeading` design-system component (TDD)

**Files:** create `components/ds/SectionHeading.tsx`, `components/__tests__/SectionHeading.test.tsx`.

**Interfaces:**

- Produces: `SectionHeading({ eyebrow?, title, accent?, tone?, italic?, align?, style? })` — `tone` ∈ `"onDark"|"onLight"` (default `"onDark"`), `italic` default `true`, `align` default `"left"`. Renders eyebrow + lime rule + `<h2>` title with optional lime `accent` word.

- [ ] **Step 1: Failing test** `components/__tests__/SectionHeading.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { SectionHeading } from "@/components/ds/SectionHeading";

test("renders eyebrow and an h2 title with accent", () => {
  render(<SectionHeading eyebrow="What we do" title="Building" accent="trust" tone="onLight" />);
  expect(screen.getByText("What we do")).toBeInTheDocument();
  const h2 = screen.getByRole("heading", { level: 2 });
  expect(h2).toHaveTextContent("Building");
  expect(h2).toHaveTextContent("trust");
});
```

- [ ] **Step 2: Run** `npm test -- SectionHeading` → FAIL.

- [ ] **Step 3: Implement `components/ds/SectionHeading.tsx`**:

```tsx
import type { CSSProperties } from "react";

type Tone = "onDark" | "onLight";
type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "onDark",
  italic = true,
  align = "left",
  style = {},
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  tone?: Tone;
  italic?: boolean;
  align?: Align;
  style?: CSSProperties;
}) {
  const titleColor = tone === "onDark" ? "var(--white)" : "var(--navy-900)";
  return (
    <div
      style={{
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: "var(--space-3)",
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--fw-bold)" as unknown as number,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            color: "var(--lime-500)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <span
        aria-hidden="true"
        style={{
          width: "3.5rem",
          height: 4,
          borderRadius: "var(--radius-pill)",
          background: "var(--lime-500)",
        }}
      />
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-primary)",
          fontWeight: "var(--fw-extra)" as unknown as number,
          fontStyle: italic ? "italic" : "normal",
          textTransform: "uppercase",
          fontSize: "var(--text-3xl)",
          lineHeight: "var(--leading-tight)",
          color: titleColor,
        }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span style={{ color: "var(--lime-500)" }}>{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}
```

- [ ] **Step 4: Run** `npm test -- SectionHeading` → PASS.

- [ ] **Step 5: Commit**

```bash
git add components/ds/SectionHeading.tsx components/__tests__/SectionHeading.test.tsx
git commit -m "feat: add SectionHeading design-system component"
```

---

## Task 11: Shared NAV data + `lucide-react`

**Files:** create `lib/nav.ts`; install `lucide-react`.

**Interfaces:**

- Produces: `NAV` (primary links) and `SERVICES` (dropdown submenu) consumed by `SiteHeader`/`SiteFooter`.

- [ ] **Step 1: Install icons** — `npm install lucide-react`

- [ ] **Step 2: Create `lib/nav.ts`**:

```ts
export type NavItem = { href: string; label: string; key: string };
export type ServiceItem = NavItem & { icon: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home", key: "home" },
  { href: "/services", label: "Services", key: "services" },
  { href: "/about", label: "About us", key: "about" },
  { href: "/blog", label: "Blog", key: "blog" },
];

// Services dropdown (icons are lucide names)
export const SERVICES: ServiceItem[] = [
  {
    href: "/housing-associations",
    label: "Housing Associations",
    key: "housing",
    icon: "building-2",
  },
  { href: "/small-businesses", label: "Small Businesses", key: "small-business", icon: "store" },
  {
    href: "/principal-designer-services",
    label: "Principal Designer Services",
    key: "pds",
    icon: "compass",
  },
  {
    href: "/first-aid-fire-marshal-training",
    label: "First Aid & Fire Marshal Training",
    key: "training",
    icon: "heart-pulse",
  },
];
```

- [ ] **Step 3: Verify** `npm run typecheck` clean. Commit:

```bash
git add lib/nav.ts package.json package-lock.json
git commit -m "feat: add shared NAV data and lucide-react"
```

---

## Task 12: `SiteHeader` (services dropdown + mobile menu) (TDD)

**Files:** create `components/SiteHeader.tsx`, `components/__tests__/SiteHeader.test.tsx`.

**Interfaces:**

- Consumes: `NAV`, `SERVICES` from `@/lib/nav`; `Button`, `Logo` from `@/components/ds/*`; icons from `lucide-react`.
- Produces: `SiteHeader({ active? })` — sticky header; `active` matches a `NAV`/`SERVICES` key to highlight the current link. Services dropdown opens on hover/focus; a burger toggles a mobile menu.

Reference the design's `SiteHeader.dc.html` for exact structure/styles (sticky, hazard-stripe top bar, backdrop blur, lime hover, services submenu with lucide icons + Contact button). Transcribe styles verbatim; wire the two interactive bits with React state.

- [ ] **Step 1: Failing test** `components/__tests__/SiteHeader.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { SiteHeader } from "@/components/SiteHeader";

vi.mock("next/navigation", () => ({ usePathname: () => "/about" }));

test("renders primary nav links and a Contact button", () => {
  render(<SiteHeader />);
  expect(screen.getAllByRole("link", { name: "About us" })[0]).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /contact/i })).toBeInTheDocument();
});

test("mobile menu opens and closes", async () => {
  const user = userEvent.setup();
  render(<SiteHeader />);
  const openBtn = screen.getByRole("button", { name: "Open menu" });
  expect(openBtn).toHaveAttribute("aria-expanded", "false");
  await user.click(openBtn);
  expect(openBtn).toHaveAttribute("aria-expanded", "true");
  await user.click(screen.getByRole("button", { name: "Close menu" }));
  expect(openBtn).toHaveAttribute("aria-expanded", "false");
});
```

- [ ] **Step 2: Run** `npm test -- SiteHeader` → FAIL.

- [ ] **Step 3: Implement `components/SiteHeader.tsx`** as a `"use client"` component. Structure (transcribe exact inline styles from `SiteHeader.dc.html`):
  - `<header>` sticky, `background:rgba(14,3,60,0.82)`, `backdrop-filter:blur(12px)`, bottom border; a top `<div class="bsc-hazard-stripes" style="height:5px">`.
  - Inner container (`max-width:1200px`): `<Link href="/">` wrapping `<Logo tone="onDark" size="sm" />`; desktop `<nav>` with links from `NAV` (Home, Services w/ dropdown, About us, Blog) — the current one (`active`/pathname) coloured `var(--lime-500)`, others `rgba(255,255,255,0.9)`; a `<Link href="/contact">` wrapping `<Button variant="primary" size="sm">Contact</Button>`.
  - Services dropdown: a wrapper with `useState` `servicesOpen`, opened `onMouseEnter`/`onFocus`, closed `onMouseLeave`/`onBlur`; panel lists `SERVICES` with the matching `lucide-react` icon (map `icon` string → component; e.g. `building-2`→`Building2`, `store`→`Store`, `compass`→`Compass`, `heart-pulse`→`HeartPulse`), each a `<Link>` to its href.
  - Mobile: a burger `<button aria-label="Open menu" aria-expanded={open}>` (Lucide `Menu`) shown at narrow widths; an overlay menu with a `<button aria-label="Close menu">` (Lucide `X`), the nav links + services + Contact button; Escape closes; `document.body.style.overflow` locked while open. Follow the same mobile-menu pattern used successfully before (state-driven `is-open`, Escape handler, overflow lock).
  - Highlight logic: `const current = active ?? keyFromPathname(usePathname())`; compare against each item's `key`.

- [ ] **Step 4: Run** `npm test -- SiteHeader` → PASS (both tests).

- [ ] **Step 5: Commit**

```bash
git add components/SiteHeader.tsx components/__tests__/SiteHeader.test.tsx
git commit -m "feat: add SiteHeader with services dropdown and mobile menu"
```

---

## Task 13: `SiteFooter` (TDD) + first full build

**Files:** create `components/SiteFooter.tsx`, `components/__tests__/SiteFooter.test.tsx`.

**Interfaces:**

- Consumes: `NAV`/`SERVICES` from `@/lib/nav`; `Logo` from `@/components/ds/Logo`.
- Produces: `SiteFooter()` — server component; static footer transcribed from `SiteFooter.dc.html`.

- [ ] **Step 1: Failing test** `components/__tests__/SiteFooter.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { SiteFooter } from "@/components/SiteFooter";

test("renders footer with key links", () => {
  render(<SiteFooter />);
  expect(screen.getAllByRole("link", { name: /services/i }).length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run** `npm test -- SiteFooter` → FAIL.

- [ ] **Step 3: Implement `components/SiteFooter.tsx`** — transcribe `SiteFooter.dc.html` verbatim (light-theme footer: wordmark/`<Logo tone="onLight" />`, columns of links from `NAV`/`SERVICES`, contact details, accreditation badges from `public/assets/badge-*.png`, legal links to `/privacy-policy` and `/accessibility-statement`, copyright). Internal links via `next/link`; external/mailto/tel via plain `<a>`.

- [ ] **Step 4: Run** `npm test -- SiteFooter` → PASS.

- [ ] **Step 5: First full build** — now that layout + header + footer exist:

```bash
npm run build
```

Fix any import errors. The build will succeed with only the home route as the starter until Task 14; that's fine — confirm no module/type errors from layout/header/footer.

- [ ] **Step 6: Commit**

```bash
git add components/SiteFooter.tsx components/__tests__/SiteFooter.test.tsx
git commit -m "feat: add SiteFooter component"
```

---

## Page porting procedure (read before Tasks 14–19)

Each page task transcribes the **body** of a `.dc.html` file (everything inside the outer light-theme `<div style="background:var(--paper)...">`, excluding the `<dc-import name="SiteHeader">`/`SiteFooter` lines — those come from the layout) into the matching `page.tsx`. Apply consistently:

1. **JSX conversion:** `class`→`className`; `for`→`htmlFor`; self-close void tags; convert every inline `style="a:b; c:d"` → `style={{ a: "b", c: "d" }}` (camelCase keys; keep `var(--token)` and `clamp(...)` values as strings; unitless numbers may be numbers). Convert HTML entities (`&amp;`→`&`; `&ldquo;`/`&rdquo;`/`&mdash;` fine as text).
2. **Images:** `<image-slot ... src="assets/x.png" placeholder="Alt text" style="...">` → `<img src="/assets/x.png" alt="Alt text" style={{ ... }} />`. CSS `background-image:url('assets/x.png')` → `url('/assets/x.png')` (leading slash). Plain `<img>` only (no `next/image`).
3. **DS components:** `<x-import component-from-global-scope="...Button" variant="primary" size="lg">LABEL</x-import>` → `<Button variant="primary" size="lg">LABEL</Button>` (import from `@/components/ds/Button`). Same for `Tag`, `Logo`, `SectionHeading` (props map 1:1 to the component APIs from Tasks 7–10; `hint-size` is a design-tool hint — drop it).
4. **Icons:** `<i data-lucide="name" style="...">` → the `lucide-react` component (`name` kebab→PascalCase), passing `width`/`height`/`color` via `style` or props, e.g. `<ShieldCheck style={{ width: 16, height: 16 }} />`.
5. **Links:** internal `href="Something.dc.html"` and absolute `https://www.berkshiresafetyconsultants.com/<path>` → `<Link href="/route">` per the route table; keep `#anchors`, `mailto:`, `tel:`, external URLs as plain `<a>`.
6. **Reactive bits:** `<sc-if value="{{ x }}">…</sc-if>` and `{{ expr }}` — for static pages these resolve to plain JSX (render the content; there are no page-level dynamic states outside the header). `style-hover="..."` → either omit (acceptable for non-critical hovers) or replicate with an `onMouseEnter/Leave` handler in a tiny client wrapper if the hover is visually important (match the design; most are link colour changes).
7. **Metadata:** add `export const metadata = { title, description }` per page, copying the page's `<title>`/description intent (from the design's copy). No page-level metadata means the layout default applies.
8. **Verification:** after each page, `npm run build`, then `npm run dev`, open the route, and compare against the design (open the source `.dc.html` via its runtime, or the design preview) — layout, colour, type, spacing, images, icons. Fix drift before committing.

---

## Task 14: Home page (`/`) — worked example

**Files:** create `app/page.tsx` (replace the scaffold). Source: `$SRC/Homepage Light.dc.html`.

**Interfaces:**

- Consumes: `Button`, `Tag`, `SectionHeading` from `@/components/ds/*`; `lucide-react` icons.

- [ ] **Step 1: Implement `app/page.tsx`** following the porting procedure. Transcribe the full `Homepage Light` body: hero (eyebrow with `ShieldCheck`, the "Building trust" `<h1>` with lime accent word, lead paragraph, two `<Button>`s (primary "Explore services" + secondary "Talk to us"), the ISO/SSIP trust pills), then each subsequent section (services overview cards, who-we-help, accreditations, testimonial, CTA, etc.) exactly as designed. Use `<SectionHeading>` where the design uses the eyebrow+rule+title rhythm. Add:

```tsx
export const metadata = {
  title: "Berkshire Safety Consultants — Health & Safety Consultancy",
  description:
    "Expert health & safety consultancy for housing associations and small businesses. Practical advice that protects your people, not just box-ticking.",
};
```

- [ ] **Step 2: Build + visual verify** — `npm run build` then `npm run dev`, open `/`, compare to the design. Confirm header/footer wrap it, hero image loads (`/assets/hero-worker-branded.png`), fonts (Open Sans/Poppins) and lime/navy tokens render.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: port home page"
```

---

## Tasks 15–17: Content page ports

For each page: implement `page.tsx` from the listed source following the **Page porting procedure**, add `metadata`, run `npm run build` + visual-compare, then commit with the given message. Group as three review-sized tasks:

- [ ] **Task 15 — Core pages.** `About` → `app/about/page.tsx`; `Services` → `app/services/page.tsx`; `Contact` → `app/contact/page.tsx` (the contact form is transcribed with its designed fields + success-state markup, but does NOT submit/email in Phase 1 — wire `onSubmit` to `preventDefault` + show the designed success UI, same pattern as the previous project's `FormWithSuccess`). Commit: `feat: port about, services, contact pages`.
- [ ] **Task 16 — Service sub-pages.** `Housing Associations`, `Small Businesses`, `Principal Designer Services`, `First Aid and Fire Marshal Training` → their routes. Commit: `feat: port the four service sub-pages`.
- [ ] **Task 17 — Remaining pages.** `Assure` → `/assure`; `E-Learning` → `/e-learning`; `FAQ` → `/faq` (if it has an accordion, implement it as a small client component matching the design's open/close); `Privacy Policy` → `/privacy-policy`; `Accessibility Statement` → `/accessibility-statement`. Commit: `feat: port assure, e-learning, faq, privacy, accessibility pages`.

For each task, `npm run build` must pass and the routes render before committing.

---

## Task 18: Blog index (`/blog`)

**Files:** create `app/blog/page.tsx`. Source: `$SRC/Blog.dc.html`.

- [ ] **Step 1: Implement** following the porting procedure. Transcribe the blog hero + the post grid; each card links to its `/blog/<slug>` route (per the route table), with the card image `<img src="/assets/blog-*.png">`, category `<Tag>`, title, excerpt, and meta. The design uses a `{{ post }}` loop over a static list — render the cards explicitly (one per the 10 posts) using the real data from each post's source file, OR map over an inline array of the 10 posts defined at the top of the file. Add `metadata`.

- [ ] **Step 2: Build + verify** — `/blog` renders 10 cards linking to the right slugs.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: port blog index"
```

---

## Task 19: Blog posts (10 static routes)

**Files:** create `app/blog/<slug>/page.tsx` for each of the 10 posts (routes per the table).

> Ported as static pages in Phase 1; replaced by a dynamic `app/blog/[slug]/page.tsx` sourced from Sanity in Phase 2.

- [ ] **Step 1: Implement the 10 post pages** following the porting procedure. Each post source (`Blog - *.dc.html`) has the same shape: a navy hero (bg image `/assets/blog-*.png` at low opacity + gradient, "Back to blog" link → `/blog`, `<h1>` with lime accent span, meta line "Berkshire Safety Consultants · DATE · N min read"), then a white body section (`max-width:760px`) of `<p>`, `<h2>`, `<ul>` content — transcribe verbatim. Add `metadata` per post (title from the `<h1>`, description from the first paragraph/intent).

- [ ] **Step 2: Build + verify** — `npm run build`; open each `/blog/<slug>`; the "Back to blog" link resolves to `/blog`; content matches the source.

- [ ] **Step 3: Commit** (may split into 2 commits of 5 posts if a reviewer prefers):

```bash
git add app/blog
git commit -m "feat: port 10 blog posts as static pages"
```

---

## Task 20: Styled 404 page

**Files:** create `app/not-found.tsx`.

- [ ] **Step 1: Implement** a light-theme 404 using the design tokens and DS components (it renders inside the root layout, so header/footer wrap it):

```tsx
import Link from "next/link";
import { Button } from "@/components/ds/Button";

export const metadata = { title: "Page not found — Berkshire Safety Consultants" };

export default function NotFound() {
  return (
    <section style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            color: "var(--accent-on-light)",
          }}
        >
          Page not found
        </span>
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            fontStyle: "italic",
            textTransform: "uppercase",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "var(--navy-900)",
          }}
        >
          This page isn&rsquo;t here
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-lg)",
            color: "var(--gray-700)",
            maxWidth: "34rem",
          }}
        >
          The page you were looking for may have moved. Let&rsquo;s get you back on solid ground.
        </p>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button variant="primary" size="lg">
            Back to home
          </Button>
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Build + verify** — visit a nonexistent route; the styled 404 renders within header/footer.

- [ ] **Step 3: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add styled 404 page"
```

---

## Task 21: Netlify configuration

**Files:** create `netlify.toml`.

- [ ] **Step 1: Create `netlify.toml`**:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

- [ ] **Step 2: Commit**

```bash
git add netlify.toml
git commit -m "chore: add Netlify configuration"
```

(Connecting the repo in the Netlify dashboard + pointing DNS are manual go-live steps, handled with the user after merge.)

---

## Task 22: Final verification

- [ ] **Step 1: Full local gate**

```bash
npm run typecheck && npm run lint && npm run format:check && npm test && npm run build
```

All pass (lint shows only the expected `no-img-element` / `no-css-tags` warnings, 0 errors).

- [ ] **Step 2: Route check** — the build output lists all 24 routes (`/`, the 13 pages, `/blog`, the 10 `/blog/<slug>`, `/_not-found`).

- [ ] **Step 3: Fidelity pass** — with `npm run dev`, walk every route and compare against the design: header (incl. services dropdown + mobile menu), footer, the 4 DS components, hero images, icons, fonts, tokens, the contact form success state, and that no internal link 404s.

- [ ] **Step 4: Optional tag**

```bash
git tag phase-1-complete
```

---

## Known non-functional items (flag to client; out of Phase 1 scope)

- **Contact form** shows the designed success state but does **not** email yet (Phase 3, Netlify Forms).
- **Blog posts** are static in Phase 1; they become Sanity-authored in Phase 2 (dynamic `/blog/[slug]`).
- **E-Learning / Assure** are informational pages only (no payments/enrolment/gated content), per the spec.
- **Fonts** load from Google Fonts (per the design's `fonts.css` `@import`); no self-hosted font files.

---

## Spec coverage check

- Token CSS verbatim + global load → Tasks 5, 6. ✓
- 4 DS components rebuilt from the bundle → Tasks 7–10. ✓
- SiteHeader (dropdown + mobile menu) / SiteFooter → Tasks 12, 13. ✓
- All 14 pages + 10 blog posts ported → Tasks 14–19. ✓
- Icons via lucide-react → Task 11 + porting procedure. ✓
- Contact form success-state only → Task 15. ✓
- 404 styled to design → Task 20. ✓
- Tooling (strict TS, ESLint, Prettier, Husky) + CI → Tasks 1–4. ✓
- Netlify config → Task 21. ✓
- Fidelity checks → per-page steps + Task 22. ✓
- Light theme only; dark Homepage ignored → route table + Global Constraints. ✓

```

```
