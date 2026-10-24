import type { MetadataRoute } from "next";
import { getPostSlugsOrThrow } from "@/lib/sanity/queries";

const BASE_URL = "https://www.berkshiresafetyconsultants.com";

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Every public static route on the site. Keep in sync when pages are added or
// removed. Blog post entries are appended dynamically from Sanity below.
const ENTRIES: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/housing-associations", changeFrequency: "monthly", priority: 0.9 },
  { path: "/small-businesses", changeFrequency: "monthly", priority: 0.9 },
  { path: "/principal-designer-services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/first-aid-fire-marshal-training", changeFrequency: "monthly", priority: 0.8 },
  { path: "/e-learning", changeFrequency: "monthly", priority: 0.8 },
  { path: "/assure", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility-statement", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const staticEntries = ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  // Throws in a configured build if Sanity returns zero posts, rather than
  // silently dropping all blog URLs from the sitemap — see getPostSlugsOrThrow.
  const slugs = await getPostSlugsOrThrow();
  const blogEntries = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...blogEntries];
}
