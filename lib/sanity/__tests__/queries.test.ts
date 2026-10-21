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

  it("getPostSlugsOrThrow also degrades to empty when unconfigured — an unconfigured build is a deliberately valid, quiet state", async () => {
    const { getPostSlugsOrThrow } = await import("../queries");
    expect(await getPostSlugsOrThrow()).toEqual([]);
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

  it("getPostSlugsOrThrow throws instead of silently returning empty — a configured build hitting Sanity errors must fail loudly, not ship a zero-article blog", async () => {
    const { getPostSlugsOrThrow } = await import("../queries");
    await expect(getPostSlugsOrThrow()).rejects.toThrow(/refusing to build a blog with zero/);
  });
});

describe("queries with a configured client returning zero posts (not an error, just an empty dataset)", () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID = "eyos1dte";
    vi.resetModules();
    vi.doMock("../client", () => ({
      client: { fetch: vi.fn().mockResolvedValue([]) },
    }));
  });
  afterEach(() => {
    vi.unmock("../client");
  });

  it("getPostSlugs still returns empty (no error to catch)", async () => {
    const { getPostSlugs } = await import("../queries");
    expect(await getPostSlugs()).toEqual([]);
  });

  it("getPostSlugsOrThrow throws even though nothing errored, because the build is configured", async () => {
    const { getPostSlugsOrThrow } = await import("../queries");
    await expect(getPostSlugsOrThrow()).rejects.toThrow(/refusing to build a blog with zero/);
  });
});
