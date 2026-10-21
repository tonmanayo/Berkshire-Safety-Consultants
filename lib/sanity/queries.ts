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

const listQuery = groq`*[_type == "post"] | order(publishedAt desc){ ${LIST_FIELDS} }`;
const slugsQuery = groq`*[_type == "post" && defined(slug.current)].slug.current`;
const bySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  ${LIST_FIELDS}, seoDescription, ctaLabel, ctaHref, body
}`;

// Every query degrades to empty rather than failing the build when Sanity is
// unconfigured or unreachable.
export async function getPosts(): Promise<PostListItem[]> {
  if (!client) return [];
  try {
    return await client.fetch<PostListItem[]>(listQuery, {}, fetchOpts);
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!client) return [];
  try {
    return await client.fetch<string[]>(slugsQuery, {}, fetchOpts);
  } catch {
    return [];
  }
}

/**
 * Like getPostSlugs(), but asymmetric about what an empty result means —
 * for use at build time (generateStaticParams, the sitemap), where silently
 * shipping zero posts is a regression, not a valid state:
 *
 *   - Unconfigured build (`client` is null, e.g. CI running without
 *     Sanity secrets): degrade to [] quietly, same as getPostSlugs(). A
 *     blog with no articles is the correct, expected output here.
 *   - Configured build (`client` is set) returning zero slugs — whether
 *     from a genuine outage, misconfiguration, or an emptied dataset:
 *     throw. Otherwise this would silently 404 every live article URL and
 *     drop them all from the sitemap, with a green, unremarkable build. A
 *     failed deploy is recoverable in minutes; a silently empty blog is
 *     not, so refuse to build rather than ship it.
 */
export async function getPostSlugsOrThrow(): Promise<string[]> {
  const slugs = await getPostSlugs();
  if (client && slugs.length === 0) {
    throw new Error(
      "no posts returned from Sanity; refusing to build a blog with zero articles " +
        "(set NEXT_PUBLIC_SANITY_PROJECT_ID empty to build without the CMS)",
    );
  }
  return slugs;
}

export async function getPost(slug: string): Promise<PostDoc | null> {
  if (!client) return null;
  try {
    return await client.fetch<PostDoc | null>(bySlugQuery, { slug }, fetchOpts);
  } catch {
    return null;
  }
}
