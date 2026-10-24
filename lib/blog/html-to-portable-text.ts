import { parse, type HTMLElement, type Node } from "node-html-parser";
import type { PortableTextBlock } from "@portabletext/types";

type Span = { _type: "span"; _key: string; text: string; marks: string[] };

let counter = 0;
const key = () => `k${(counter += 1).toString(36)}`;

// Top-level block tags the article bodies use, and the inline tags allowed
// inside a block's text. Anything else — <img>, <a>, <blockquote>, <table>,
// <figure>, <pre>, or any future surprise — is unsupported and throws (see
// unsupportedTagError below) instead of being silently dropped or recursed
// into. This is deliberately a closed whitelist, not a denylist.
//
// `<a>` is intentionally not supported: this converter exists for a one-time
// migration of the 10 existing articles, and none of their bodies contain a
// link (verified against every baseline fixture). If a link ever does show
// up — in these articles or new ones run through this function later — the
// whitelist below throws loudly rather than quietly losing it.
const TOP_LEVEL_TAGS = new Set(["p", "h2", "ul", "ol"]);
const INLINE_TAGS = new Set(["strong", "em", "b", "i", "br"]);

// Named entities actually present in the frozen article HTML. Numeric
// entities (&#NNN; / &#xHH;) are decoded generically via String.fromCodePoint
// below, so they don't need an entry here. Any other named entity is
// unmapped and throws (see decode) rather than leaking literal "&foo;" text
// into Sanity.
const NAMED_ENTITIES: Record<string, string> = {
  // U+0027 per the HTML spec (not a curly quote).
  apos: "'",
  rsquo: "’",
  lsquo: "‘",
  ldquo: "“",
  rdquo: "”",
  amp: "&",
  nbsp: " ",
  mdash: "—",
  ndash: "–",
  lt: "<",
  gt: ">",
  quot: '"',
};

const ENTITY_RE = /&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/g;

function decode(text: string): string {
  return text.replace(ENTITY_RE, (full, body: string) => {
    if (body[0] === "#") {
      const codePoint =
        body[1] === "x" || body[1] === "X"
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
      return String.fromCodePoint(codePoint);
    }
    const decoded = NAMED_ENTITIES[body];
    if (decoded === undefined) {
      throw new Error(
        `htmlToPortableText: unmapped HTML entity "${full}" — add it to NAMED_ENTITIES deliberately rather than guessing.`,
      );
    }
    return decoded;
  });
}

function clean(text: string): string {
  return decode(text).replace(/\s+/g, " ");
}

/** First 80 chars of an element's text, for locating an error in the source. */
function context(el: HTMLElement): string {
  const parent = el.parentNode as HTMLElement | null;
  return (parent?.text ?? el.text ?? "").replace(/\s+/g, " ").trim().slice(0, 80);
}

function unsupportedTagError(tag: string, el: HTMLElement): Error {
  return new Error(
    `htmlToPortableText: unsupported tag <${tag}> — not in the allowed vocabulary ` +
      `(p, h2, ul, ol, li, strong, em, b, i, br). Near: "${context(el)}..."`,
  );
}

/**
 * A non-whitespace top-level text node — one not wrapped in any of
 * TOP_LEVEL_TAGS — found directly in the article body. This is the one
 * remaining silent-drop path after the whitelist hardening above; it must
 * throw naming the offending content rather than quietly losing it.
 * Whitespace-only text nodes (the formatting indentation between sibling
 * block tags) are not an error — the caller skips those before reaching
 * this.
 */
function unsupportedTopLevelTextError(node: Node): Error {
  const text = clean(node.rawText ?? "").trim();
  return new Error(
    `htmlToPortableText: unsupported top-level text content, not inside a ` +
      `<p>, <h2>, <ul>, or <ol>: "${text.slice(0, 80)}"`,
  );
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
    if (!INLINE_TAGS.has(tag)) throw unsupportedTagError(tag, el);
    if (tag === "strong" || tag === "b") spans.push(...spansOf(el, [...marks, "strong"]));
    else if (tag === "em" || tag === "i") spans.push(...spansOf(el, [...marks, "em"]));
    else if (tag === "br") spans.push({ _type: "span", _key: key(), text: " ", marks: [...marks] });
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
 * Anything outside that whitelist throws rather than being silently dropped.
 */
export function htmlToPortableText(html: string): PortableTextBlock[] {
  const root = parse(html);
  const blocks: PortableTextBlock[] = [];

  for (const node of root.childNodes) {
    const el = node as HTMLElement;
    const tag = el.tagName?.toLowerCase();
    if (!tag) {
      if (!(node.rawText ?? "").trim()) continue;
      throw unsupportedTopLevelTextError(node);
    }

    if (!TOP_LEVEL_TAGS.has(tag)) throw unsupportedTagError(tag, el);

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
