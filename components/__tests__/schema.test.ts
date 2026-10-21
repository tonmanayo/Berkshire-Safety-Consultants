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
  it("builds a BlogPosting with an absolute URL, date-only datePublished, and image", () => {
    const ld = blogPostingLd(fixture[0]);
    expect(ld["@type"]).toBe("BlogPosting");
    expect(ld.headline).toBe("Toolbox talks");
    expect(ld.mainEntityOfPage).toBe(`${SITE_URL}/blog/toolbox-talks`);
    // publishedAt is a full ISO datetime; the LD date is date-only, matching
    // what the original hand-written articles emitted.
    expect(ld.datePublished).toBe("2025-05-29");
    expect(ld.image).toContain("cdn.sanity.io");
  });

  it("always uses the excerpt, ignoring any seoDescription (that override is for page <meta> only)", () => {
    const ld = blogPostingLd({ ...fixture[0], seoDescription: "Custom meta copy" });
    expect(ld.description).toBe(fixture[0].excerpt);
  });
});

describe("blogCollectionLd", () => {
  it("lists every post", () => {
    const ld = blogCollectionLd(fixture);
    expect(ld["@type"]).toBe("Blog");
    expect(ld.blogPost).toHaveLength(2);
    expect(ld.blogPost[0].url).toBe(`${SITE_URL}/blog/toolbox-talks`);
  });
});
