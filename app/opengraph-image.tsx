import { ImageResponse } from "next/og";

// Default social share card for the whole site. Next adds og:image and
// twitter:image tags pointing at this generated 1200x630 PNG.
export const alt = "Berkshire Safety Consultants — Health & Safety Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "96px",
        background: "#0e033c",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: 8,
          color: "#cfe056",
          marginBottom: 32,
        }}
      >
        HEALTH &amp; SAFETY CONSULTANCY
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: 28,
        }}
      >
        Berkshire Safety Consultants
      </div>
      <div
        style={{ display: "flex", fontSize: 34, color: "rgba(255,255,255,0.85)", maxWidth: 920 }}
      >
        Practical advice that protects your people, not just box-ticking.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 56,
          height: 8,
          width: 160,
          background: "#cfe056",
          borderRadius: 4,
        }}
      />
    </div>,
    { ...size },
  );
}
