import type { CSSProperties } from "react";

type Tone = "onDark" | "onLight";
type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "onDark",
  italic = true,
  align = "left",
  style = {},
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  tone?: Tone;
  italic?: boolean;
  align?: Align;
  style?: CSSProperties;
}) {
  const titleColor = tone === "onDark" ? "var(--white)" : "var(--navy-900)";
  return (
    <div
      style={{
        textAlign: align,
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: "var(--space-3)",
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            fontFamily: "var(--font-primary)",
            fontSize: "var(--text-xs)",
            fontWeight: "var(--fw-bold)" as unknown as number,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            color: "var(--lime-500)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <span
        aria-hidden="true"
        style={{
          width: "3.5rem",
          height: 4,
          borderRadius: "var(--radius-pill)",
          background: "var(--lime-500)",
        }}
      />
      <h2
        style={{
          margin: 0,
          fontFamily: "var(--font-primary)",
          fontWeight: "var(--fw-extra)" as unknown as number,
          fontStyle: italic ? "italic" : "normal",
          textTransform: "uppercase",
          fontSize: "var(--text-3xl)",
          lineHeight: "var(--leading-tight)",
          color: titleColor,
        }}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span style={{ color: "var(--lime-500)" }}>{accent}</span>
          </>
        )}
      </h2>
    </div>
  );
}
