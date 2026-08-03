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
          overflowX: "hidden",
        }}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
