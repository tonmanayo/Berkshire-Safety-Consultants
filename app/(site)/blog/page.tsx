import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Tag } from "@/components/ds/Tag";
import { getPostsOrThrow } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";
import { formatPostDate, readTimeFromText } from "@/lib/blog/format";
import { blogCollectionLd } from "@/lib/blog/schema";

export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — Berkshire Safety Consultants",
  description:
    "Practical H&S guidance — Building Safety Act compliance, Principal Designer duties, fire risk assessment, and simple solutions for SMEs.",
};

export default async function BlogPage() {
  const posts = await getPostsOrThrow();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p !== featured);
  const ld = posts.map((p) => ({ ...p, image: urlForImage(p.heroImage) }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionLd(ld)) }}
      />
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/construction-silhouette-bw.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.72) 0%, rgba(8,2,31,0.95) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "88px 24px 76px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lime-500)",
              marginBottom: 20,
            }}
          >
            <Newspaper style={{ width: 16, height: 16 }} />
            Insights &amp; guidance
          </span>
          <h1
            style={{
              margin: "0 0 18px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(38px, 5.5vw, 62px)",
              lineHeight: 1.04,
              color: "var(--white)",
            }}
          >
            The <span style={{ color: "var(--lime-500)" }}>blog</span>
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "62ch",
              fontSize: "clamp(16px, 1.9vw, 19px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            Practical H&amp;S guidance - Building Safety Act compliance, Principal Designer duties,
            fire risk assessment, and simple solutions for SMEs.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 24px 0" }}>
          {/* By design: if no post is marked featured, this section renders
              nothing. The old hand-written page always had a hardcoded
              featured article; that guarantee no longer holds now that it's
              editorial (the `featured` flag on a Sanity post). */}
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <article
                data-r="split"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: 0,
                  background: "var(--paper)",
                  border: "1px solid var(--mist)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: 340 }}>
                  <Image
                    src={urlForImage(featured.heroImage)}
                    alt={featured.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    padding: 40,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Tag variant="lime" size="sm">
                    Featured
                  </Tag>
                  <h2
                    style={{
                      margin: "16px 0 12px",
                      fontSize: 27,
                      fontWeight: 800,
                      lineHeight: 1.18,
                      color: "var(--navy-900)",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      margin: "0 0 18px",
                      fontSize: 15.5,
                      lineHeight: 1.65,
                      color: "var(--gray-700)",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 13,
                      color: "var(--gray-500)",
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "var(--accent-on-light)" }}>
                      Berkshire Safety Consultants
                    </span>
                    <span>·</span>
                    <span>{formatPostDate(featured.publishedAt)}</span>
                    <span>·</span>
                    <span>{readTimeFromText(featured.bodyText)}</span>
                  </div>
                </div>
              </article>
            </Link>
          ) : null}
        </div>
      </section>

      {/* GRID */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 84px" }}>
          <div
            data-r="cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "var(--paper)",
                    border: "1px solid var(--mist)",
                    borderRadius: 18,
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: 190 }}>
                    <Image
                      src={urlForImage(post.heroImage)}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "24px 26px 26px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                    }}
                  >
                    <h3
                      style={{
                        margin: "0 0 10px",
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: "var(--navy-900)",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 18px",
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "var(--gray-700)",
                        flex: 1,
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: 12.5,
                        color: "var(--gray-500)",
                      }}
                    >
                      <span>{formatPostDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{readTimeFromText(post.bodyText)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
