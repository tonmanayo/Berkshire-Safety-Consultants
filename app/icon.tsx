import { ImageResponse } from "next/og";

// Brand favicon/app-icon: bold lime "BSC" on the primary brand navy.
const BG = "#0e033c";
const FG = "#cfe056";

export function generateImageMetadata() {
  return [
    { id: "favicon", size: { width: 32, height: 32 }, contentType: "image/png" },
    { id: "192", size: { width: 192, height: 192 }, contentType: "image/png" },
    { id: "512", size: { width: 512, height: 512 }, contentType: "image/png" },
  ];
}

const SIZES: Record<string, number> = { favicon: 32, "192": 192, "512": 512 };

export default async function Icon({ id }: { id: Promise<string> }) {
  const iconId = await id;
  const dimension = SIZES[iconId] ?? 32;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: BG,
        color: FG,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 800,
        fontSize: Math.round(dimension * 0.3),
        letterSpacing: Math.round(dimension * -0.01),
        lineHeight: 1,
      }}
    >
      BSC
    </div>,
    { width: dimension, height: dimension },
  );
}
