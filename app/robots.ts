import type { MetadataRoute } from "next";

const BASE_URL = "https://www.berkshiresafetyconsultants.com";

// Allow all crawlers (including AI assistants) across the whole site. The
// sitemap and canonical host are advertised here.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
