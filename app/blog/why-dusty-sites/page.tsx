import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  title: 'Why "dusty" sites are a commercial liability · Berkshire Safety Consultants',
  description:
    "Silica dust is the second biggest killer of construction workers after asbestos — and a dusty site in 2026 is a commercial and regulatory liability.",
};

export default function WhyDustySitesPage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-dusty-sites.png')",
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
            Why <span style={{ color: "var(--lime-500)" }}>&ldquo;dusty&rdquo; sites</span> are a
            commercial liability
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
            <span>Mar 13</span>
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
            In the UK construction and property sectors, we tend to measure risk by what we can see:
            a missing guardrail, an untidy walkway, or a poorly secured load. But the most
            significant long-term threat to your workforce and your business continuity is
            invisible.
          </p>
          <p>
            <strong>Respirable Crystalline Silica (RCS)</strong>, or silica dust, is the second
            biggest killer of construction workers after asbestos. However, as we move into 2026, it
            is no longer just a health concern — it is a major regulatory target. If your site is
            dusty, you aren&apos;t just risking health; you are risking an immediate HSE &ldquo;Stop
            Work&rdquo; notice and heavy &ldquo;Fee for Intervention&rdquo; (FFI) costs.
          </p>
          <p>
            Many site managers still rely on &ldquo;traditional&rdquo; cleaning methods to manage
            dust. But sweeping up dry concrete or stone dust with a broom is often worse than doing
            nothing at all. It simply kicks the smallest, most dangerous particles back into the air
            at head height, where they stay suspended for hours, invisible to the naked eye.
          </p>
          <p>
            To protect your margins and your reputation, you need to move from &ldquo;cleaning
            up&rdquo; to <strong>Source Term Suppression</strong> — preventing the dust from ever
            entering the atmosphere.
          </p>
          <p>
            One of the most common points of friction on UK sites involves Respiratory Protective
            Equipment (RPE). A common misconception is that simply providing an expensive mask is
            enough. It isn&apos;t. If your operatives are not clean-shaven, even the highest-quality
            FFP3 mask is effectively useless — a three-day beard creates a gap between the skin and
            the mask seal, allowing thousands of silica particles to bypass the filter.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            3 practical steps to a compliant site
          </h2>
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
              <strong>On-tool extraction:</strong> whenever possible, use &ldquo;M&rdquo; or
              &ldquo;H&rdquo; class vacuum extraction fixed directly to the power tool. Capture the
              dust at the source before it reaches the breathing zone.
            </li>
            <li>
              <strong>Water suppression:</strong> for outdoor cutting or grinding, use constant
              water suppression to keep dust &ldquo;heavy&rdquo; and grounded.
            </li>
            <li>
              <strong>Mandatory certification:</strong> ensure every worker has a valid Face-Fit
              certificate for their specific mask. If the mask doesn&apos;t fit, the worker
              isn&apos;t protected, and your site isn&apos;t compliant.
            </li>
          </ol>
          <p>
            A &ldquo;dusty site&rdquo; is no longer seen as just part of the job; it is seen as a
            sign of poor management. Professional oversight ensures you have the correct Method
            Statements in place and that your verification data is ready for inspection.
          </p>
          <p>
            Don&apos;t wait for an HSE inspection to find out why &ldquo;dusty&rdquo; sites are a
            commercial liability. Get in touch today for a no-obligation chat.
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
