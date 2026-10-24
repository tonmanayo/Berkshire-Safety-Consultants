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
