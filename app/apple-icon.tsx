import { ImageResponse } from "next/og";

// Apple touch icon (iOS applies its own rounded mask over this square).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e033c",
        color: "#cfe056",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 800,
        fontSize: 54,
        letterSpacing: -2,
        lineHeight: 1,
      }}
    >
      BSC
    </div>,
    { ...size },
  );
}
