import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("queries with no Sanity env", () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  });
  afterEach(() => {
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "eyos1dte";
  });

  it("degrades to empty instead of throwing", async () => {
    const { getPosts, getPostSlugs, getPost } = await import("../queries");
    expect(await getPosts()).toEqual([]);
    expect(await getPostSlugs()).toEqual([]);
    expect(await getPost("anything")).toBeNull();
  });
});

describe("queries with network error", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "eyos1dte";
    vi.resetModules();
    vi.doMock("../client", () => ({
      client: { fetch: vi.fn().mockRejectedValue(new Error("network down")) },
    }));
  });
  afterEach(() => {
    vi.unmock("../client");
  });

  it("getPosts catches fetch error and returns empty array", async () => {
    const { getPosts } = await import("../queries");
    const result = await getPosts();
    expect(result).toEqual([]);
  });

  it("getPostSlugs catches fetch error and returns empty array", async () => {
    const { getPostSlugs } = await import("../queries");
    const result = await getPostSlugs();
    expect(result).toEqual([]);
  });

  it("getPost catches fetch error and returns null", async () => {
    const { getPost } = await import("../queries");
    const result = await getPost("any-slug");
    expect(result).toBeNull();
  });
});
