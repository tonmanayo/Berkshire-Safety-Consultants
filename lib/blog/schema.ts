import type { PostListItem } from "@/lib/sanity/queries";

export const SITE_URL = "https://www.berkshiresafetyconsultants.com";

type LdInput = PostListItem & { image: string; seoDescription?: string };

/** `publishedAt` is a full ISO 8601 datetime; schema.org BlogPosting dates are
 *  date-only, matching what the original hand-written articles emitted. */
function toLdDate(iso: string): string {
  return iso.slice(0, 10);
}

export function blogPostingLd(post: LdInput) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    // Deliberately the excerpt, not post.seoDescription: this mirrors the
    // original blogPostingLd(slug), which always used the index's excerpt
    // text here regardless of a page's own, more SEO-tuned meta description.
    // The seoDescription override is for generateMetadata's <meta
    // name="description"> only.
    description: post.excerpt,
    image: post.image,
    datePublished: toLdDate(post.publishedAt),
    inLanguage: "en-GB",
    author: { "@id": `${SITE_URL}/#org` },
    publisher: { "@id": `${SITE_URL}/#org` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function blogCollectionLd(posts: LdInput[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Berkshire Safety Consultants — Blog",
    url: `${SITE_URL}/blog`,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#org` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/${post.slug}#article`,
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image,
      datePublished: toLdDate(post.publishedAt),
    })),
  };
}
