import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./responsive.css";

const SITE_URL = "https://www.berkshiresafetyconsultants.com";
const SITE_TITLE = "Berkshire Safety Consultants — Health & Safety Consultancy";
const SITE_DESCRIPTION =
  "Expert health & safety consultancy for housing associations and small businesses. Practical advice that protects your people, not just box-ticking. ISO 45001 & ISO 9001 accredited.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Berkshire Safety Consultants",
    locale: "en_GB",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
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
