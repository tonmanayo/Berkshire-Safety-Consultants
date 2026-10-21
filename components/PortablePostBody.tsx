import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// These values are copied from the hand-written articles and are what the
// fidelity diff asserts against. Change them only with the baseline.
const H2_STYLE = {
  margin: "40px 0 14px",
  fontSize: 21,
  fontWeight: 800,
  color: "var(--navy-900)",
} as const;

const LIST_STYLE = {
  margin: "0 0 20px",
  paddingLeft: 22,
  display: "flex",
  flexDirection: "column",
  gap: 10,
} as const;

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 style={H2_STYLE}>{children}</h2>,
  },
  list: {
    bullet: ({ children }) => <ul style={LIST_STYLE}>{children}</ul>,
    number: ({ children }) => <ol style={LIST_STYLE}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => <Link href={(value as { href: string }).href}>{children}</Link>,
  },
};

export function PortablePostBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
