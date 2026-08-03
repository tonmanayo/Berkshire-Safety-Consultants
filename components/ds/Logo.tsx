import type { CSSProperties } from "react";

type Tone = "onDark" | "onLight" | "lime" | "mono";
type Size = "sm" | "md" | "lg";

const SCALE: Record<Size, number> = { sm: 14, md: 20, lg: 30 };

const TONES: Record<Tone, { text: string; accent: string }> = {
  onDark: { text: "var(--white)", accent: "var(--lime-500)" },
  onLight: { text: "var(--navy-900)", accent: "var(--navy-900)" },
  lime: { text: "var(--lime-500)", accent: "var(--lime-500)" },
  mono: { text: "currentColor", accent: "currentColor" },
};

export function Logo({
  tone = "onDark",
  size = "md",
  rule = true,
  style = {},
}: {
  tone?: Tone;
  size?: Size;
  rule?: boolean;
  style?: CSSProperties;
}) {
  const scale = SCALE[size];
  const t = TONES[tone] ?? TONES.onDark;
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-bold)" as unknown as number,
        textTransform: "uppercase",
        lineHeight: 1.04,
        letterSpacing: "0.01em",
        color: t.text,
        fontSize: scale,
        ...style,
      }}
    >
      <span>Berkshire</span>
      <span>Safety</span>
      <span>Consultants</span>
      {rule && (
        <span
          aria-hidden="true"
          style={{
            marginTop: scale * 0.3,
            width: scale * 8,
            maxWidth: "100%",
            height: Math.max(2, scale * 0.16),
            background: t.accent,
            borderRadius: "var(--radius-pill)",
          }}
        />
      )}
    </div>
  );
}
