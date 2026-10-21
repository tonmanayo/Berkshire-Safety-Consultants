import { parse, type HTMLElement, type Node } from "node-html-parser";
import type { PortableTextBlock } from "@portabletext/types";

type Span = { _type: "span"; _key: string; text: string; marks: string[] };

let counter = 0;
const key = () => `k${(counter += 1).toString(36)}`;

const ENTITIES: Record<string, string> = {
  "&apos;": "’",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&amp;": "&",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
};

function decode(text: string): string {
  return text.replace(/&[#a-zA-Z0-9]+;/g, (m) => ENTITIES[m] ?? m);
}

function clean(text: string): string {
  return decode(text).replace(/\s+/g, " ");
}

/** Walks inline nodes, carrying marks down to the spans they apply to. */
function spansOf(node: Node, marks: string[] = []): Span[] {
  const spans: Span[] = [];
  for (const child of node.childNodes) {
    const el = child as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (!tag) {
      const text = clean(child.rawText ?? "");
      if (text) spans.push({ _type: "span", _key: key(), text, marks: [...marks] });
      continue;
    }
    if (tag === "strong" || tag === "b") spans.push(...spansOf(el, [...marks, "strong"]));
    else if (tag === "em" || tag === "i") spans.push(...spansOf(el, [...marks, "em"]));
    else if (tag === "br") spans.push({ _type: "span", _key: key(), text: " ", marks: [...marks] });
    else spans.push(...spansOf(el, marks));
  }
  return spans;
}

function blockFrom(
  el: HTMLElement,
  style: string,
  listItem?: "bullet" | "number",
): PortableTextBlock | null {
  const children = spansOf(el);
  const text = children
    .map((s) => s.text)
    .join("")
    .trim();
  if (!text) return null;
  return {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    children,
    ...(listItem ? { listItem, level: 1 } : {}),
  } as unknown as PortableTextBlock;
}

/**
 * Converts the inner HTML of an article body into Portable Text. Handles the
 * complete vocabulary the existing posts use: p, h2, ul/ol/li, strong, em.
 */
export function htmlToPortableText(html: string): PortableTextBlock[] {
  const root = parse(html);
  const blocks: PortableTextBlock[] = [];

  for (const node of root.childNodes) {
    const el = node as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (!tag) continue;

    if (tag === "p") {
      const block = blockFrom(el, "normal");
      if (block) blocks.push(block);
    } else if (tag === "h2") {
      const block = blockFrom(el, "h2");
      if (block) blocks.push(block);
    } else if (tag === "ul" || tag === "ol") {
      const listItem = tag === "ul" ? "bullet" : "number";
      for (const li of el.querySelectorAll("li")) {
        const block = blockFrom(li, "normal", listItem);
        if (block) blocks.push(block);
      }
    }
  }

  return blocks;
}
