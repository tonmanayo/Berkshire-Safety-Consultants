import { notFound } from "next/navigation";
import { getPost, getPostSlugs } from "@/lib/sanity/queries";
import { BlogPostArticle } from "@/components/BlogPostArticle";

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export default async function BlogPreviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  return <BlogPostArticle post={post} />;
}
