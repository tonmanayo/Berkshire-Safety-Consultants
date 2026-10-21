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
