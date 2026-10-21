import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("sanity client configuration", () => {
  beforeEach(() => {
    vi.resetModules();
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "eyos1dte";
  });
  afterEach(() => {
    vi.doUnmock("next-sanity");
    vi.resetModules();
  });

  it(
    'is constructed with perspective: "published" — at the pinned apiVersion ' +
      '(2024-10-01) the client default is "raw", which would also return ' +
      "unpublished drafts to visitors",
    async () => {
      const createClient = vi.fn().mockReturnValue({ fetch: vi.fn() });
      vi.doMock("next-sanity", () => ({ createClient }));

      await import("../client");

      expect(createClient).toHaveBeenCalledWith(
        expect.objectContaining({ perspective: "published" }),
      );
    },
  );

  it("is constructed with useCdn: false, so staleness relies only on Next's own tag-based revalidation", async () => {
    const createClient = vi.fn().mockReturnValue({ fetch: vi.fn() });
    vi.doMock("next-sanity", () => ({ createClient }));

    await import("../client");

    expect(createClient).toHaveBeenCalledWith(expect.objectContaining({ useCdn: false }));
  });
});
