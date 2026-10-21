import { describe, it, expect } from "vitest";
import { FAQS, faqPageLd } from "@/app/(site)/faq/faqs";
import { blogPostingLd, blogCollectionLd, SITE_URL } from "@/lib/blog/schema";

describe("faqPageLd", () => {
  it("produces a FAQPage with one Question per FAQ entry", () => {
    const ld = faqPageLd();
    expect(ld["@type"]).toBe("FAQPage");
    expect(ld.mainEntity).toHaveLength(FAQS.length);
    expect(ld.mainEntity[0]).toMatchObject({
      "@type": "Question",
      name: FAQS[0].q,
      acceptedAnswer: { "@type": "Answer", text: FAQS[0].a },
    });
  });
});

const fixture = [
  {
    slug: "toolbox-talks",
    title: "Toolbox talks",
    heroImage: {} as never,
    alt: "Toolbox talks",
    excerpt: "Short, informal talks that build safety culture.",
    publishedAt: "2025-05-29T09:00:00Z",
    bodyText: "word ".repeat(400),
    image: "https://cdn.sanity.io/images/eyos1dte/production/abc-1200x800.png",
  },
  {
    slug: "fire-safety-101",
    title: "Fire safety 101 for homes",
    heroImage: {} as never,
    alt: "Fire safety 101",
    excerpt: "Simple steps that protect your family.",
    publishedAt: "2024-07-24T09:00:00Z",
    bodyText: "word ".repeat(200),
    image: "https://cdn.sanity.io/images/eyos1dte/production/def-1200x800.png",
  },
];

describe("blogPostingLd", () => {
  it("builds the complete BlogPosting object, field for field", () => {
    const ld = blogPostingLd(fixture[0]);
    // Full object equality, not spot checks: a dropped @id, inLanguage,
    // author, publisher or isPartOf must fail this test, since neither
    // verify:baseline (no fixture for arbitrary new posts) nor a partial
    // assertion here would otherwise catch it.
    expect(ld).toEqual({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}/blog/toolbox-talks#article`,
      mainEntityOfPage: `${SITE_URL}/blog/toolbox-talks`,
      headline: "Toolbox talks",
      description: "Short, informal talks that build safety culture.",
      image: "https://cdn.sanity.io/images/eyos1dte/production/abc-1200x800.png",
      // publishedAt is a full ISO datetime; the LD date is date-only,
      // matching what the original hand-written articles emitted.
      datePublished: "2025-05-29",
      inLanguage: "en-GB",
      author: { "@id": `${SITE_URL}/#org` },
      publisher: { "@id": `${SITE_URL}/#org` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
    });
  });

  it("always uses the excerpt, ignoring any seoDescription (that override is for page <meta> only)", () => {
    const ld = blogPostingLd({ ...fixture[0], seoDescription: "Custom meta copy" });
    expect(ld.description).toBe(fixture[0].excerpt);
  });
});

describe("blogCollectionLd", () => {
  it("builds the complete Blog collection, field for field, for every post", () => {
    const ld = blogCollectionLd(fixture);
    // Full object equality, including every field of every blogPost[] entry
    // — a dropped @id, image or datePublished on any entry must fail this.
    expect(ld).toEqual({
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "Berkshire Safety Consultants — Blog",
      url: `${SITE_URL}/blog`,
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#org` },
      blogPost: [
        {
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/toolbox-talks#article`,
          headline: "Toolbox talks",
          description: "Short, informal talks that build safety culture.",
          url: `${SITE_URL}/blog/toolbox-talks`,
          image: "https://cdn.sanity.io/images/eyos1dte/production/abc-1200x800.png",
          datePublished: "2025-05-29",
        },
        {
          "@type": "BlogPosting",
          "@id": `${SITE_URL}/blog/fire-safety-101#article`,
          headline: "Fire safety 101 for homes",
          description: "Simple steps that protect your family.",
          url: `${SITE_URL}/blog/fire-safety-101`,
          image: "https://cdn.sanity.io/images/eyos1dte/production/def-1200x800.png",
          datePublished: "2024-07-24",
        },
      ],
    });
  });
});
