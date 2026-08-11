import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  alternates: { canonical: "/blog/new-fire-safety-laws" },
  title:
    "New fire safety laws 2026: is your resident evacuation strategy legal? · Berkshire Safety Consultants",
  description:
    "The Fire Safety (Residential Evacuation Plans) Regulations 2025 create new duties for Responsible Persons from 6 April 2026 — here's what you need to do now.",
};

export default function NewFireSafetyLawsPage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-fire-safety-laws.png')",
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
            New fire safety laws 2026:{" "}
            <span style={{ color: "var(--lime-500)" }}>
              is your resident evacuation strategy legal?
            </span>
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
            <span>Mar 3</span>
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
            In the UK residential sector, compliance is often seen as a series of boxes to be
            ticked. But from <strong>6 April 2026</strong>, the &ldquo;Responsible Person&rdquo;
            (RP) for multi-occupied buildings faces a much more personal challenge.
          </p>
          <p>
            The introduction of the{" "}
            <strong>Fire Safety (Residential Evacuation Plans) (England) Regulations 2025</strong>{" "}
            marks the end of generic fire safety. For the first time, the law requires you to look
            beyond the bricks and mortar and focus on the specific needs of the people living inside
            them.
          </p>
          <p>
            Historically, evacuation plans for residential blocks have been building-wide — often
            relying on a &ldquo;Stay Put&rdquo; policy. Under the new regulations, RPs must now
            proactively identify residents who would struggle to evacuate without help due to
            mobility, cognitive, or sensory impairments.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Key points for the new fire safety laws 2026
          </h2>
          <p>
            If your building is <strong>18 metres (or 7 storeys)</strong> or higher — or over{" "}
            <strong>11 metres</strong> with a simultaneous evacuation strategy — you have three new
            non-negotiable duties:
          </p>
          <ol
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              <strong>Identify vulnerable residents:</strong> you must use &ldquo;reasonable
              endeavours&rdquo; to find out who needs help.
            </li>
            <li>
              <strong>Offer Person-Centred Fire Risk Assessments (PCFRAs):</strong> you are legally
              required to offer a tailored assessment to any &ldquo;relevant resident.&rdquo;
            </li>
            <li>
              <strong>Agree a PEEP:</strong> where needs are identified, you must create a Personal
              Emergency Evacuation Plan and a written statement of action.
            </li>
          </ol>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Why &ldquo;wait and see&rdquo; is a risk
          </h2>
          <p>
            For property developers, landlords, and facilities managers, this isn&apos;t just a
            safety issue — it&apos;s a massive data and logistical hurdle.
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
              If a fire occurs and you haven&apos;t documented your attempt to identify vulnerable
              residents, your liability is total.
            </li>
            <li>
              Scrambling to assess hundreds of residents in March 2026 will lead to poor data and
              high costs.
            </li>
            <li>
              <strong>Building Safety Regulator (BSR) scrutiny:</strong> for higher-risk buildings,
              these plans will be a key part of your Safety Case.
            </li>
          </ul>
          <p>
            At BSC, we don&apos;t just quote the law; we provide the boots-on-the-ground support to
            meet it. We help you move from &ldquo;we think our residents are safe&rdquo; to
            &ldquo;we have the data to prove it.&rdquo;
          </p>
          <p>
            Safety shouldn&apos;t be a headache, but it must be practical. The 2026 deadline might
            feel distant, but the work of auditing a residential portfolio starts now.
          </p>
          <p>
            <strong>
              Is your portfolio ready for the shift to person-centred safety? Let&apos;s get a plan
              in place.
            </strong>
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
