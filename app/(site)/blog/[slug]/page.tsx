import { notFound } from "next/navigation";
import { getPost, getPostSlugsOrThrow } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { BlogPostArticle } from "@/components/BlogPostArticle";
import { blogPostingLd } from "@/lib/blog/schema";

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
