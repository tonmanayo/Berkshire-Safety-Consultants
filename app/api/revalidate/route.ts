import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      console.error(
        "[revalidate] SANITY_REVALIDATE_SECRET is not set; every webhook request will be rejected. Set it in the Netlify environment and in the Sanity webhook's Secret field.",
      );
    }

    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    revalidateTag("post", "max");
    return NextResponse.json({ revalidated: true, type: body?._type });
  } catch (err) {
    console.error("[revalidate] error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
