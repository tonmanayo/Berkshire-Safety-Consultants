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

export async function getPost(slug: string): Promise<PostDoc | null> {
  if (!client) return null;
  try {
    return await client.fetch<PostDoc | null>(bySlugQuery, { slug }, fetchOpts);
  } catch {
    return null;
  }
}
