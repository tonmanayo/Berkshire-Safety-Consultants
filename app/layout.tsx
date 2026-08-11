import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./responsive.css";

const SITE_URL = "https://www.berkshiresafetyconsultants.com";
const SITE_TITLE = "Berkshire Safety Consultants — Health & Safety Consultancy";
const SITE_DESCRIPTION =
  "Expert health & safety consultancy for housing associations and small businesses. Practical advice that protects your people, not just box-ticking. ISO 45001 & ISO 9001 accredited.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Berkshire Safety Consultants",
  robots: { index: true, follow: true },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Site-wide structured data (schema.org) for search engines and AI crawlers.
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#org`,
      name: "Berkshire Safety Consultants",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      email: "info@berkshiresafetyconsultants.com",
      areaServed: ["Berkshire", "United Kingdom"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Maidenhead",
        addressRegion: "Berkshire",
        addressCountry: "GB",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Berkshire Safety Consultants",
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
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
