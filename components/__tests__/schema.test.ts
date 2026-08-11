import { describe, it, expect } from "vitest";
import { FAQS, faqPageLd } from "@/app/faq/faqs";
import { BLOG_POSTS, blogPostingLd, blogCollectionLd, SITE_URL } from "@/app/blog/posts";

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

describe("blogPostingLd", () => {
  it("builds a BlogPosting with an ISO date and absolute image URL", () => {
    const ld = blogPostingLd("fire-safety-101");
    expect(ld).not.toBeNull();
    expect(ld!["@type"]).toBe("BlogPosting");
    expect(ld!.headline).toBe("Fire Safety 101 for Homes");
    expect(ld!.datePublished).toBe("2024-07-24");
    expect(ld!.image).toBe(`${SITE_URL}/assets/blog-fire-safety-101.png`);
    expect(ld!.mainEntityOfPage).toBe(`${SITE_URL}/blog/fire-safety-101`);
    expect(ld!.author).toEqual({ "@id": `${SITE_URL}/#org` });
  });

  it("returns null for an unknown slug", () => {
    expect(blogPostingLd("does-not-exist")).toBeNull();
  });

  it("gives every post a valid ISO 8601 datePublished", () => {
    for (const post of BLOG_POSTS) {
      expect(post.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("blogCollectionLd", () => {
  it("lists every article in the Blog collection", () => {
    const ld = blogCollectionLd();
    expect(ld["@type"]).toBe("Blog");
    expect(ld.blogPost).toHaveLength(BLOG_POSTS.length);
    expect(ld.blogPost[0]["@type"]).toBe("BlogPosting");
  });
});
