import { notFound } from "next/navigation";
import { getPost, getPostSlugsOrThrow } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { BlogPostArticle } from "@/components/BlogPostArticle";
import { blogPostingLd } from "@/lib/blog/schema";

// Known, deliberately unfixed: /blog/<unknown-slug> returns a 404 status whose
// body renders only after JS loads (the not-found UI streams in client-side).
// The obvious fix, `export const dynamicParams = false`, would make every slug
// not present at build time a hard static 404 — so a post published in the
// Studio would 404 until the next deploy, defeating instant publishing via
// on-demand revalidation. Rejected for that reason; leave dynamicParams at its
// default (true).

export async function generateStaticParams() {
  // Throws in a configured build if Sanity returns zero posts, rather than
  // silently shipping a blog with no articles — see getPostSlugsOrThrow.
  return (await getPostSlugsOrThrow()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    alternates: { canonical: `/blog/${slug}` },
    title: `${post.title} · Berkshire Safety Consultants`,
    description: post.seoDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingLd({ ...post, image: urlForImage(post.heroImage) })),
        }}
      />
      <BlogPostArticle post={post} />
    </>
  );
}
