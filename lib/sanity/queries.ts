import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

export type PostListItem = {
  slug: string;
  title: string;
  highlight?: string;
  heroImage: SanityImageSource;
  alt: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  /** Body flattened to plain text by GROQ, so index cards can show read time
   *  without fetching the whole Portable Text structure. */
  bodyText: string;
};

export type PostDoc = PostListItem & {
  seoDescription?: string;
  ctaLabel?: string;
  ctaHref?: string;
  body: PortableTextBlock[];
};

const fetchOpts = { next: { tags: ["post"] as string[] } };

const LIST_FIELDS = `"slug": slug.current, title, highlight, heroImage, "alt": heroImage.alt, excerpt, publishedAt, featured, "bodyText": pt::text(body)`;

// Both list and slugs queries require a slug so they agree on what is
// renderable: a post without one would otherwise get a card linking to /blog/null.
const listQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){ ${LIST_FIELDS} }`;
const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;
const bySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${LIST_FIELDS}, seoDescription, ctaLabel, ctaHref, body
}`;

// The list/slug helpers degrade to empty rather than failing the build when
// Sanity is unconfigured or unreachable. The *OrThrow variants below are for
// build-time callers where that silence would ship a broken site. The raw
// fetchers throw, so the OrThrow variants can report the real cause.
async function fetchPosts(): Promise<PostListItem[]> {
  if (!client) return [];
  return client.fetch<PostListItem[]>(listQuery, {}, fetchOpts);
}

async function fetchSlugs(): Promise<string[]> {
  if (!client) return [];
  return client.fetch<string[]>(slugsQuery, {}, fetchOpts);
}

export async function getPosts(): Promise<PostListItem[]> {
  try {
    return await fetchPosts();
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    return await fetchSlugs();
  } catch {
    return [];
  }
}

/**
 * Shared guard for the *OrThrow helpers. Asymmetric about what empty means:
 *
 *   - Unconfigured build (`client` is null, e.g. CI running without Sanity
 *     secrets): degrade to [] quietly. A blog with no articles is the
 *     correct, expected output here.
 *   - Configured build returning zero results, or failing outright —
 *     whether from an outage, misconfiguration (401, bad dataset, DNS) or an
 *     emptied dataset: throw, naming the underlying cause when there was
 *     one. Otherwise this would silently ship a blog with no articles, with
 *     a green, unremarkable build. A failed deploy is recoverable in
 *     minutes; a silently empty blog is not.
 */
async function orThrow<T>(what: string, fetcher: () => Promise<T[]>): Promise<T[]> {
  let results: T[];
  try {
    results = await fetcher();
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    throw new Error(`failed to fetch ${what} from Sanity: ${reason}`, { cause: err });
  }
  if (client && results.length === 0) {
    throw new Error(
      `no ${what} returned from Sanity; refusing to build a blog with zero articles ` +
        "(set NEXT_PUBLIC_SANITY_PROJECT_ID empty to build without the CMS)",
    );
  }
  return results;
}

/** Guarded getPostSlugs() for generateStaticParams and the sitemap. */
export function getPostSlugsOrThrow(): Promise<string[]> {
  return orThrow("post slugs", fetchSlugs);
}

/**
 * Guarded getPosts() for the blog index. listQuery and slugsQuery are
 * separate requests, so the slugs guard alone cannot stop /blog prerendering
 * with no cards (and an empty blogPost[] in its JSON-LD) if only the list
 * request fails.
 */
export function getPostsOrThrow(): Promise<PostListItem[]> {
  return orThrow("posts", fetchPosts);
}

/**
 * null means "no such document" (the query ran and found nothing) and the
 * route turns that into a 404. A failed fetch is NOT that: it re-throws, so a
 * Sanity blip during revalidation fails the render and Next keeps serving
 * the last successfully generated page, instead of caching a 404 over a live
 * article. (Next ISR docs: "If an error is thrown while attempting to
 * revalidate data, the last successfully generated data will continue to be
 * served from the cache" — 01-app/02-guides/incremental-static-regeneration.md.)
 */
export async function getPost(slug: string): Promise<PostDoc | null> {
  if (!client) return null;
  return client.fetch<PostDoc | null>(bySlugQuery, { slug }, fetchOpts);
}
