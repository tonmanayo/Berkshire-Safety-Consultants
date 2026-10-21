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
