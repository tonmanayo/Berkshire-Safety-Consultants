/*
 * The global 404, for URLs matching no route at all.
 *
 * The app has two root layouts — (site) and (studio) — so there is no single
 * layout to compose a 404 from. Next's documented answer is
 * `global-not-found.tsx` plus `experimental.globalNotFound`: it bypasses
 * rendering and returns this document as-is, so it must supply its own
 * <html>, <head> and design-system styles.
 *
 * This previously lived in `app/not-found.tsx` returning a full document,
 * which is the wrong convention — Next wrapped it in its own root layout and
 * the served HTML nested two documents, so every 404 hit a hydration
 * mismatch and re-rendered on the client.
 */
import type { CSSProperties } from "react";
import Link from "next/link";
import { NotFoundContent } from "@/components/NotFoundContent";
import { Logo } from "@/components/ds/Logo";

// Minimal fallback nav. Cannot reuse SiteHeader (client component that needs
// layout context); styling mirrors it: navy bar, hazard stripe, 1200px row.
const NAV_LINK: CSSProperties = {
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 600,
  letterSpacing: "0.02em",
  color: "rgba(255,255,255,0.9)",
};

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
      <body
        style={{
          margin: 0,
          background: "var(--paper)",
          color: "var(--ink)",
          fontFamily: "var(--font-primary)",
        }}
      >
        <header
          style={{
            background: "rgba(14,3,60,0.92)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div className="bsc-hazard-stripes" style={{ height: "5px" }} />
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px 24px",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Logo tone="onDark" size="sm" />
            </Link>
            <nav aria-label="Main navigation" style={{ display: "flex", gap: "24px" }}>
              <Link href="/services" style={NAV_LINK}>
                Services
              </Link>
              <Link href="/about" style={NAV_LINK}>
                About us
              </Link>
              <Link href="/contact" style={NAV_LINK}>
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <NotFoundContent />
      </body>
    </html>
  );
}
