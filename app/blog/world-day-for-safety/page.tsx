import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { blogPostingLd } from "../posts";

export const metadata = {
  alternates: { canonical: "/blog/world-day-for-safety" },
  title: "World Day for Safety and Health at Work · Berkshire Safety Consultants",
  description:
    "On World Day for Safety and Health at Work, we reaffirm our commitment to creating safer workplaces — our approach and how we can help your business.",
};

export default function WorldDayForSafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingLd("world-day-for-safety")),
        }}
      />
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-world-day-safety.png')",
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
          <h1
            style={{
              margin: "0 0 20px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(26px, 4vw, 42px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            World Day for{" "}
            <span style={{ color: "var(--lime-500)" }}>Safety and Health at Work</span>
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
            <span>Apr 28, 2025</span>
            <span>·</span>
            <span>2 min read</span>
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
          <p>
            Every year on 28th April, the world unites to recognise the importance of safety and
            health in the workplace. World Day for Safety and Health at Work is a powerful reminder
            of the collective responsibility we share in creating environments where everyone can
            thrive without fear of injury or illness. At Berkshire Safety Consultants, this day
            resonates deeply with our core values and mission. We believe that safety isn&apos;t
            just a regulatory requirement; it&apos;s a fundamental human right.
          </p>
          <p>
            For us, safety and health extend far beyond compliance checklists and risk assessments.
            It&apos;s about fostering a proactive culture where every individual feels valued,
            protected, and empowered. We&apos;re dedicated to providing comprehensive solutions that
            go beyond the surface, addressing the root causes of workplace hazards and promoting a
            holistic approach to well-being.
          </p>
          <ul
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              <strong>Proactive prevention:</strong> we champion a preventative approach,
              emphasising the importance of identifying and mitigating risks before they lead to
              incidents.
            </li>
            <li>
              <strong>Empowering education:</strong> through our e-learning courses and toolbox
              talks, we equip employees with the knowledge and skills they need to stay safe.
            </li>
            <li>
              <strong>Tailored solutions:</strong> we understand that every workplace is unique, so
              we offer customised consulting services designed to meet your specific needs.
            </li>
            <li>
              <strong>Building partnerships:</strong> we believe in collaboration and work closely
              with our clients to develop long-term safety strategies.
            </li>
          </ul>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Why safety and health matters for everyone
          </h2>
          <p>
            <strong>For employees:</strong> a safe workplace fosters a sense of security and
            well-being, leading to increased job satisfaction and productivity. It protects against
            preventable injuries and illnesses, and creates a culture of mutual respect and care.
          </p>
          <p>
            <strong>For employers:</strong> prioritising safety reduces workplace accidents,
            minimising costly downtime and legal liabilities. It enhances your company&apos;s
            reputation, boosts employee morale and productivity, and ensures legal compliance.
          </p>
          <p>
            On World Day for Safety and Health at Work, we reaffirm our commitment to creating safer
            workplaces across the UK. We pledge to continue providing expert guidance, innovative
            solutions, and unwavering support to our clients — every day, not just on 28th April. At
            Berkshire Safety Consultants, we&apos;re proud to be your partners in building a safer
            future.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
