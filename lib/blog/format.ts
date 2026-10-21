import type { PortableTextBlock } from "@portabletext/types";

const WORDS_PER_MINUTE = 200;

/** Read time from already-flattened text (what the list query returns). */
export function readTimeFromText(text: string): string {
  const words = (text ?? "").trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

/** Read time derived from the body — the old hand-typed values were guesses. */
export function readTimeFromBody(body: PortableTextBlock[]): string {
  return readTimeFromText(
    (body ?? [])
      .filter((b) => b?._type === "block")
      .flatMap((b) =>
        ((b as PortableTextBlock).children ?? []).map((c) => (c as { text?: string }).text ?? ""),
      )
      .join(" "),
  );
}

/**
 * "Apr 14, 2025" — the year is always shown so a post never changes
 * appearance as the calendar moves on.
 */
export function formatPostDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}

/** Splits a title around its lime-highlighted phrase. */
export function splitTitleHighlight(
  title: string,
  highlight?: string,
): { before: string; match: string; after: string } {
  if (!highlight) return { before: title, match: "", after: "" };
  const at = title.indexOf(highlight);
  if (at === -1) return { before: title, match: "", after: "" };
  return {
    before: title.slice(0, at),
    match: highlight,
    after: title.slice(at + highlight.length),
  };
}
