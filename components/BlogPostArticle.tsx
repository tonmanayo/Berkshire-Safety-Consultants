import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { PortablePostBody } from "@/components/PortablePostBody";
import { urlForImage } from "@/lib/sanity/image";
import { readTimeFromBody, formatPostDate, splitTitleHighlight } from "@/lib/blog/format";
import type { PostDoc } from "@/lib/sanity/queries";

export function BlogPostArticle({ post }: { post: PostDoc }) {
  const { before, match, after } = splitTitleHighlight(post.title, post.highlight);
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('${urlForImage(post.heroImage)}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.75) 0%, rgba(8,2,31,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px 24px 64px",
          }}
        >
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 26,
            }}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} />
            Back to blog
          </Link>
          {post.featured ? (
            <Tag variant="lime" size="sm">
              Featured
            </Tag>
          ) : null}
          <h1
            style={{
              margin: post.featured ? "18px 0 20px" : "0 0 20px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(28px, 4.4vw, 46px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            {before}
            {match ? <span style={{ color: "var(--lime-500)" }}>{match}</span> : null}
            {after}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--lime-500)" }}>
              Berkshire Safety Consultants
            </span>
            <span>·</span>
            <span>{formatPostDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{readTimeFromBody(post.body)}</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "64px 24px 32px",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--gray-700)",
          }}
        >
          <PortablePostBody value={post.body} />
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href={post.ctaHref ?? "/contact"}
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            {post.ctaLabel ?? "Get in touch"}
          </Button>
        </div>
      </section>
    </>
  );
}
