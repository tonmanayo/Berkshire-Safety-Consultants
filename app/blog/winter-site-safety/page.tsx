import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { blogPostingLd } from "../posts";

export const metadata = {
  alternates: { canonical: "/blog/winter-site-safety" },
  title: "A strategic guide to winter site safety in 2026 · Berkshire Safety Consultants",
  description:
    "Ice, low light, and fatigue create a deadly trio on winter sites — a strategic guide to preventing slips, trips and falls under UK H&S law.",
};

export default function WinterSiteSafetyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingLd("winter-site-safety")),
        }}
      />
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-winter-site-safety.png')",
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
              fontSize: "clamp(28px, 4.4vw, 46px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            A strategic guide to{" "}
            <span style={{ color: "var(--lime-500)" }}>winter site safety</span> in 2026
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
            <span>Jan 15</span>
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
            As the UK construction industry returns to work this January, site managers are facing a
            familiar but deadly trio: ice, low light, and fatigue.
          </p>
          <p>
            According to the HSE, slips and trips remain the most common cause of major injuries in
            the workplace. In winter, these risks don&apos;t just increase — they evolve. At
            Berkshire Safety Consultants, we believe that &ldquo;compliance&rdquo; isn&apos;t just a
            legal hurdle; it is the foundation of a productive, profitable project.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            1. Slip, trip, or fall?
          </h2>
          <p>
            To prevent an accident, your team must first understand exactly what they are looking
            for. Our recent safety audits show that many workers still confuse these three distinct
            events:
          </p>
          <p>
            <strong>The slip:</strong> a traction failure. In winter, usually caused by
            &ldquo;contaminants&rdquo; like black ice on scaffolding, frost on wooden pallets, or
            wet mud tracked into site offices.
          </p>
          <p>
            <strong>The trip:</strong> a momentum failure. It happens when a foot strikes an
            obstacle — like a trailing cable or a protruding rebar — that might be hidden by
            early-evening shadows or a light dusting of snow.
          </p>
          <p>
            <strong>The fall:</strong> the impact. Whether it&apos;s a fall from a ladder due to icy
            rungs or a fall on the same level after an unrecoverable trip, this is where the most
            severe RIDDOR reports originate.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            2. The high cost of &ldquo;business as usual&rdquo;
          </h2>
          <p>
            Operating with a &ldquo;we&apos;ll grit it when it gets slippery&rdquo; mindset is a
            dangerous gamble. Under the Health and Safety at Work etc. Act 1974, the responsibility
            to mitigate these risks is clear. A single major injury on-site can lead to project
            delays and liquidated damages, increased insurance premiums, HSE &ldquo;Fee for
            Intervention&rdquo; (FFI) costs, and irreparable damage to your firm&apos;s reputation.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            3. Proactive winter site safety mitigation
          </h2>
          <p>
            <strong>Combatting &ldquo;the golden hour&rdquo; risks:</strong> in the UK, the most
            dangerous time on-site during January is 3:30pm to 5:00pm. As natural light fades,
            hazards become invisible. Ensure your lighting towers are positioned specifically to
            illuminate changes in elevation — unmarked steps and curbs are classic winter trip
            points.
          </p>
          <p>
            <strong>The &ldquo;three points of contact&rdquo; audit:</strong> icy rungs and frozen
            grab handles make entering vehicle cabs and climbing ladders a high-risk activity. We
            recommend a mandatory &ldquo;wipe down&rdquo; policy for all access points during the
            morning toolbox talk to ensure metal surfaces are dry and grip-ready.
          </p>
          <p>
            <strong>Footwear and PPE suitability:</strong> not all safety boots are created equal.
            In winter, the tread depth and material of the sole are critical for maintaining
            friction on wet or frozen surfaces. Ensure your PPE audit accounts for winter-specific
            requirements.
          </p>
          <p>
            Safety shouldn&apos;t be a headache. By outsourcing your consultancy to experts who
            understand the nuances of UK site conditions, you gain peace of mind and a more
            resilient workforce.
          </p>
          <p>
            <strong>Is your site truly winter-ready?</strong> Don&apos;t wait for a &ldquo;near
            miss&rdquo; to find out.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Book a winter site audit
          </Button>
        </div>
      </section>
    </>
  );
}
