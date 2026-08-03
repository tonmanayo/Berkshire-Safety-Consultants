"use client";

import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, CSSProperties> = {
  sm: { padding: "8px 16px", fontSize: "var(--text-sm)", gap: "6px" },
  md: { padding: "12px 24px", fontSize: "var(--text-md)", gap: "8px" },
  lg: { padding: "16px 32px", fontSize: "var(--text-lg)", gap: "10px" },
};

const VARIANTS: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--lime-500)",
    color: "var(--navy-900)",
    border: "2px solid var(--lime-500)",
  },
  secondary: {
    background: "transparent",
    color: "var(--lime-600)",
    border: "2px solid var(--lime-500)",
  },
  dark: {
    background: "var(--navy-900)",
    color: "var(--white)",
    border: "2px solid var(--navy-900)",
  },
  ghost: { background: "transparent", color: "var(--navy-900)", border: "2px solid transparent" },
};

const HOVER_BG: Record<Variant, string> = {
  primary: "var(--lime-600)",
  secondary: "rgba(207,224,86,0.12)",
  dark: "var(--navy-700)",
  ghost: "var(--mist)",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  onClick,
  children,
  style = {},
}: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: SIZES[size].gap,
    fontFamily: "var(--font-primary)",
    fontWeight: "var(--fw-bold)" as unknown as number,
    lineHeight: 1,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderRadius: "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)",
    padding: SIZES[size].padding,
    fontSize: SIZES[size].fontSize,
    ...VARIANTS[variant],
    ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = HOVER_BG[variant];
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = String(VARIANTS[variant].background);
      }}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
