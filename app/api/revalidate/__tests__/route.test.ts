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

  it("warns when SANITY_REVALIDATE_SECRET is unset but still rejects with 401", async () => {
    const originalSecret = process.env.SANITY_REVALIDATE_SECRET;
    const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    try {
      delete process.env.SANITY_REVALIDATE_SECRET;
      parseBody.mockResolvedValue({ isValidSignature: null, body: null });
      const { POST } = await import("../route");
      const res = await POST(
        new Request("http://localhost/api/revalidate", { method: "POST" }) as never,
      );
      expect(res.status).toBe(401);
      expect(revalidateTag).not.toHaveBeenCalled();
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining("SANITY_REVALIDATE_SECRET is not set"),
      );
    } finally {
      if (originalSecret !== undefined) {
        process.env.SANITY_REVALIDATE_SECRET = originalSecret;
      }
      consoleErrorSpy.mockRestore();
    }
  });
});
