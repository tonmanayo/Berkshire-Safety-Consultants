import type { MetadataRoute } from "next";

const BASE_URL = "https://www.berkshiresafetyconsultants.com";

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

// Every public route on the site. Keep in sync when pages are added or removed.
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
  { path: "/blog/new-fire-safety-laws", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/why-dusty-sites", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/winter-site-safety", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/iso-9001-vs-iso-45001", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/updated-hse-guidance", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/toolbox-talks", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/prioritising-mental-health", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/cultivating-compassion", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/world-day-for-safety", changeFrequency: "yearly", priority: 0.5 },
  { path: "/blog/fire-safety-101", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/accessibility-statement", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
