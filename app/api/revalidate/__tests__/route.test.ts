import { describe, it, expect, vi, beforeEach } from "vitest";

const revalidateTag = vi.fn();
vi.mock("next/cache", () => ({ revalidateTag: (...args: unknown[]) => revalidateTag(...args) }));

const parseBody = vi.fn();
vi.mock("next-sanity/webhook", () => ({ parseBody: (...args: unknown[]) => parseBody(...args) }));

describe("POST /api/revalidate", () => {
  beforeEach(() => {
    revalidateTag.mockClear();
    parseBody.mockReset();
  });

  it("rejects an invalid signature with 401", async () => {
    parseBody.mockResolvedValue({ isValidSignature: false, body: null });
    const { POST } = await import("../route");
    const res = await POST(
      new Request("http://localhost/api/revalidate", { method: "POST" }) as never,
    );
    expect(res.status).toBe(401);
    expect(revalidateTag).not.toHaveBeenCalled();
  });

  it("revalidates the post tag on a valid signature", async () => {
    parseBody.mockResolvedValue({ isValidSignature: true, body: { _type: "post" } });
    const { POST } = await import("../route");
    const res = await POST(
      new Request("http://localhost/api/revalidate", { method: "POST" }) as never,
    );
    expect(res.status).toBe(200);
    expect(revalidateTag).toHaveBeenCalledWith("post", "max");
  });
});
