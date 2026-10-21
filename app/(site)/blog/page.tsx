import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { Tag } from "@/components/ds/Tag";
import { blogCollectionLd } from "./posts";

export const metadata = {
  alternates: { canonical: "/blog" },
  title: "Blog — Berkshire Safety Consultants",
  description:
    "Practical H&S guidance — Building Safety Act compliance, Principal Designer duties, fire risk assessment, and simple solutions for SMEs.",
};

const POSTS = [
  {
    slug: "why-dusty-sites",
    image: "/assets/blog-dusty-sites.png",
    title: "Why “Dusty” Sites are a Commercial Liability",
    excerpt:
      "In 2026, a dusty site is a major regulatory red flag. Beyond the health risks of Respirable Crystalline Silica, poor dust management triggers HSE “Stop Work” notices and costly FFI charges.",
    date: "Mar 13",
    read: "2 min read",
  },
  {
    slug: "new-fire-safety-laws",
    image: "/assets/blog-fire-safety-laws.png",
    title: "New Fire Safety Laws 2026: Is Your Evacuation Strategy Legal?",
    excerpt:
      "With the Fire Safety (Residential Evacuation Plans) Regulations 2025, “Responsible Persons” face new non-negotiable duties. Here’s what to do before the 2026 deadline.",
    date: "Mar 3",
    read: "2 min read",
  },
  {
    slug: "winter-site-safety",
    image: "/assets/blog-winter-site-safety.png",
    title: "A Strategic Guide to Winter Site Safety in 2026",
    excerpt:
      "As temperatures drop, site risks like black ice and low visibility rise. Understanding the mechanics of a slip, trip, or fall is the first step in preventing a major RIDDOR report.",
    date: "Jan 15",
    read: "2 min read",
  },
  {
    slug: "toolbox-talks",
    image: "/assets/blog-toolbox-talks.png",
    title: "Toolbox Talks",
    excerpt:
      "These short, informal meetings are more than a tick-box exercise — they’re fundamental to building a strong safety culture and mitigating risks specific to the day’s tasks.",
    date: "May 29, 2025",
    read: "2 min read",
  },
  {
    slug: "world-day-for-safety",
    image: "/assets/blog-world-day-safety.png",
    title: "World Day for Safety and Health at Work",
    excerpt:
      "Let’s build safer workplaces together. Our commitment to expert guidance and practical solutions, and how we can help you prioritise safety.",
    date: "Apr 28, 2025",
    read: "2 min read",
  },
  {
    slug: "cultivating-compassion",
    image: "/assets/blog-cultivating-compassion.png",
    title: "Cultivating Compassion and Reducing Stress in Your Workplace",
    excerpt:
      "April marks Stress Awareness Month — a crucial time to reflect on the impact of stress at work. This year’s theme, #LeadWithLove, resonates deeply with us.",
    date: "Apr 14, 2025",
    read: "2 min read",
  },
  {
    slug: "prioritising-mental-health",
    image: "/assets/blog-mental-health-managers-guide.png",
    title: "Prioritising Mental Health: A Manager’s Guide",
    excerpt:
      "Key strategies for managers to prioritise and support mental health within their teams, building a healthier and more resilient workplace.",
    date: "Jan 29, 2025",
    read: "2 min read",
  },
  {
    slug: "fire-safety-101",
    image: "/assets/blog-fire-safety-101.png",
    title: "Fire Safety 101 for Homes",
    excerpt:
      "While a false alarm is always a relief, it serves as a powerful reminder of the importance of fire safety at home — and the simple steps that protect your family.",
    date: "Jul 24, 2024",
    read: "2 min read",
  },
  {
    slug: "updated-hse-guidance",
    image: "/assets/blog-hse-guidance.png",
    title: "Updated HSE Guidance on Reporting Workplace Injuries",
    excerpt:
      "The new HSE guidance on RIDDOR doesn’t change legal requirements but offers more advice on when a report is necessary and who is responsible.",
    date: "Jun 13, 2024",
    read: "2 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogCollectionLd()) }}
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
          <Link
            href="/blog/iso-9001-vs-iso-45001"
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
                  src="/assets/blog-iso-9001-vs-45001.png"
                  alt="ISO 9001 vs ISO 45001"
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
                  ISO 9001 vs ISO 45001 — which does my business actually need?
                </h2>
                <p
                  style={{
                    margin: "0 0 18px",
                    fontSize: 15.5,
                    lineHeight: 1.65,
                    color: "var(--gray-700)",
                  }}
                >
                  They sound similar, but cover very different things — and most SMEs only need one
                  (if any). A straight-talking guide to which standard actually matters, when it
                  starts to bite, and why it&apos;s really about getting past tender shortlisting.
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
                  <span>May 19</span>
                  <span>·</span>
                  <span>5 min read</span>
                </div>
              </div>
            </article>
          </Link>
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
            {POSTS.map((post) => (
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
                      src={post.image}
                      alt={post.title}
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
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.read}</span>
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
