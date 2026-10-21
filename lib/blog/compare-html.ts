/**
 * Shared landmarks for diffing rendered blog article HTML against a frozen
 * baseline.
 *
 * Both scripts/verify-baseline.ts (which diffs the original, hand-coded
 * /blog/[slug] pages against their frozen baseline) and test/fidelity.test.ts
 * (which diffs the Sanity-rendered /blog-preview/[slug] pages against the
 * same baseline) need to agree on exactly what counts as "the article body"
 * and "the call-to-action". Two subtly different definitions of either would
 * be a real hazard — a regression caught by one comparison but silently
 * missed by the other — so both consumers import these helpers rather than
 * each growing their own.
 */

import type { HTMLElement } from "node-html-parser";

/**
 * The article body container — the `<div>` whose `style` attribute carries
 * both `max-width:760px` and `line-height:1.75`. This is the prose block
 * rendered from the post's body content, independent of which template
 * (hand-coded JSX or the Sanity Portable Text renderer) produced it.
 *
 * The call-to-action container below the body also carries `max-width:760px`
 * in its style, but never `line-height:1.75`, so matching on both substrings
 * together is unambiguous — see findCtaContainer for that container.
 */
export function findArticleBody(root: HTMLElement): HTMLElement | null {
  for (const div of root.querySelectorAll("div")) {
    const style = div.getAttribute("style") ?? "";
    if (style.includes("max-width:760px") && style.includes("line-height:1.75")) {
      return div;
    }
  }
  return null;
}

/**
 * The CTA container — the `<div>` whose `style` attribute is
 * `max-width:760px;margin:0 auto;padding:0 24px 84px`. Every article page
 * has exactly one link inside this container; the rest of the page (header
 * nav, footer) contributes ~20 more links, so the CTA must be found via this
 * container rather than by scanning the whole page for "some link that isn't
 * the header/footer".
 */
export function findCtaContainer(root: HTMLElement): HTMLElement | null {
  for (const div of root.querySelectorAll("div")) {
    const style = div.getAttribute("style") ?? "";
    if (style.includes("max-width:760px;margin:0 auto;padding:0 24px 84px")) {
      return div;
    }
  }
  return null;
}

/** Collapse all runs of whitespace to a single space and trim the ends. */
export function collapseWhitespace(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}
