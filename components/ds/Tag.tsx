import type { CSSProperties, ReactNode } from "react";

type Variant = "lime" | "outline" | "navy" | "soft";
type Size = "sm" | "md";

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "3px 10px", fontSize: "var(--text-2xs)" },
  md: { padding: "5px 14px", fontSize: "var(--text-xs)" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  lime: {
    background: "var(--lime-500)",
    color: "var(--navy-900)",
    border: "1.5px solid var(--lime-500)",
  },
  outline: {
    background: "transparent",
    color: "var(--lime-600)",
    border: "1.5px solid var(--lime-500)",
  },
  navy: {
    background: "var(--navy-800)",
    color: "var(--white)",
    border: "1.5px solid var(--navy-800)",
  },
  soft: { background: "var(--mist)", color: "var(--navy-900)", border: "1.5px solid var(--mist)" },
};

export function Tag({
  variant = "lime",
  size = "md",
  children,
  style = {},
}: {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-bold)" as unknown as number,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...SIZES[size],
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}
