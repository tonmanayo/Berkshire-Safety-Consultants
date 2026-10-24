import { createClient, type SanityClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

export const client: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      // Before API version 2025-02-19, next-sanity/sanity's default
      // perspective is "raw", which returns draft documents (and, for a
      // document that has an unpublished draft, the `drafts.` copy sorts
      // ahead of the published one in `*[...][0]`). `apiVersion` above is
      // pinned deliberately and is not being bumped, so the default can't
      // be relied on — set the perspective explicitly so only published
      // content is ever served to visitors.
      // See node_modules/@sanity/client/dist/index.d.ts (perspective default
      // changes at v2025-02-19).
      perspective: "published",
      // Next's own fetch cache + tag-based revalidation (see
      // lib/sanity/queries.ts fetchOpts and the webhook that calls
      // revalidateTag("post")) already does the caching we need. Sanity's
      // API CDN (useCdn: true) adds a second cache in front of it with no
      // TTL of its own: if Next revalidates before the API CDN has purged,
      // Next would cache that stale response indefinitely, with no future
      // trigger to clear it. Going straight to the live API avoids that.
      useCdn: false,
    })
  : null;
