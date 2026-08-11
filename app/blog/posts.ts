// Canonical origin — keep in step with SITE_URL in app/layout.tsx.
export const SITE_URL = "https://www.berkshiresafetyconsultants.com";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** ISO 8601 (YYYY-MM-DD). Derived from the human dates shown on the blog index. */
  datePublished: string;
};

// Single source of truth for blog article metadata used by the /blog index and
// by each article's BlogPosting structured data. Ordered newest first.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "iso-9001-vs-iso-45001",
    title: "ISO 9001 vs ISO 45001 — which does my business actually need?",
    description:
      "They sound similar, but cover very different things — and most SMEs only need one (if any). A straight-talking guide to which standard actually matters, when it starts to bite, and why it’s really about getting past tender shortlisting.",
    image: "/assets/blog-iso-9001-vs-45001.png",
    datePublished: "2026-05-19",
  },
  {
    slug: "why-dusty-sites",
    title: "Why “Dusty” Sites are a Commercial Liability",
    description:
      "In 2026, a dusty site is a major regulatory red flag. Beyond the health risks of Respirable Crystalline Silica, poor dust management triggers HSE “Stop Work” notices and costly FFI charges.",
    image: "/assets/blog-dusty-sites.png",
    datePublished: "2026-03-13",
  },
  {
    slug: "new-fire-safety-laws",
    title: "New Fire Safety Laws 2026: Is Your Evacuation Strategy Legal?",
    description:
      "With the Fire Safety (Residential Evacuation Plans) Regulations 2025, “Responsible Persons” face new non-negotiable duties. Here’s what to do before the 2026 deadline.",
    image: "/assets/blog-fire-safety-laws.png",
    datePublished: "2026-03-03",
  },
  {
    slug: "winter-site-safety",
    title: "A Strategic Guide to Winter Site Safety in 2026",
    description:
      "As temperatures drop, site risks like black ice and low visibility rise. Understanding the mechanics of a slip, trip, or fall is the first step in preventing a major RIDDOR report.",
    image: "/assets/blog-winter-site-safety.png",
    datePublished: "2026-01-15",
  },
  {
    slug: "toolbox-talks",
    title: "Toolbox Talks",
    description:
      "These short, informal meetings are more than a tick-box exercise — they’re fundamental to building a strong safety culture and mitigating risks specific to the day’s tasks.",
    image: "/assets/blog-toolbox-talks.png",
    datePublished: "2025-05-29",
  },
  {
    slug: "world-day-for-safety",
    title: "World Day for Safety and Health at Work",
    description:
      "Let’s build safer workplaces together. Our commitment to expert guidance and practical solutions, and how we can help you prioritise safety.",
    image: "/assets/blog-world-day-safety.png",
    datePublished: "2025-04-28",
  },
  {
    slug: "cultivating-compassion",
    title: "Cultivating Compassion and Reducing Stress in Your Workplace",
    description:
      "April marks Stress Awareness Month — a crucial time to reflect on the impact of stress at work. This year’s theme, #LeadWithLove, resonates deeply with us.",
    image: "/assets/blog-cultivating-compassion.png",
    datePublished: "2025-04-14",
  },
  {
    slug: "prioritising-mental-health",
    title: "Prioritising Mental Health: A Manager’s Guide",
    description:
      "Key strategies for managers to prioritise and support mental health within their teams, building a healthier and more resilient workplace.",
    image: "/assets/blog-mental-health-managers-guide.png",
    datePublished: "2025-01-29",
  },
  {
    slug: "fire-safety-101",
    title: "Fire Safety 101 for Homes",
    description:
      "While a false alarm is always a relief, it serves as a powerful reminder of the importance of fire safety at home — and the simple steps that protect your family.",
    image: "/assets/blog-fire-safety-101.png",
    datePublished: "2024-07-24",
  },
  {
    slug: "updated-hse-guidance",
    title: "Updated HSE Guidance on Reporting Workplace Injuries",
    description:
      "The new HSE guidance on RIDDOR doesn’t change legal requirements but offers more advice on when a report is necessary and who is responsible.",
    image: "/assets/blog-hse-guidance.png",
    datePublished: "2024-06-13",
  },
];

export function blogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** Build a schema.org BlogPosting for a single article. */
export function blogPostingLd(slug: string) {
  const post = blogPostBySlug(slug);
  if (!post) return null;
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.datePublished,
    inLanguage: "en-GB",
    author: { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

/** Build a schema.org Blog collection for the /blog index. */
export function blogCollectionLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Berkshire Safety Consultants — Blog",
    url: `${SITE_URL}/blog`,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#org` },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.datePublished,
    })),
  };
}
