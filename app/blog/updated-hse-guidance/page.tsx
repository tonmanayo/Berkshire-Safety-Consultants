import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  title: "Updated HSE guidance on reporting workplace injuries · Berkshire Safety Consultants",
  description:
    "The HSE has updated its RIDDOR guidance — here's what it means for employers and what you need to report.",
};

export default function UpdatedHseGuidancePage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-hse-guidance.png')",
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
            Updated HSE guidance on{" "}
            <span style={{ color: "var(--lime-500)" }}>reporting workplace injuries</span>
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
            <span>Jun 13, 2024</span>
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
            The Health and Safety Executive (HSE) has updated its guidance and online reporting
            forms to help businesses in England, Scotland, and Wales understand when and how to
            report workplace injuries, incidents, or dangerous occurrences under the Reporting of
            Injuries, Diseases and Dangerous Occurrences Regulations (RIDDOR). Different rules apply
            in Northern Ireland.
          </p>
          <p>
            RIDDOR affects both employers and companies that hire self-employed contractors. The new
            HSE guidance on RIDDOR doesn&apos;t change any legal requirements, but offers more
            advice on when a report is necessary and who is responsible for reporting.
          </p>
          <p>
            The guidance explains what counts as a &ldquo;work-related&rdquo; accident, clarifies
            when an occupational disease is not reportable, and provides clearer instructions on
            reporting incidents where an employee is absent for over seven days due to an injury.
          </p>
          <p>
            The employer or the person in charge of the premises must report injuries or incidents
            affecting employees or self-employed workers. Specified workplace injuries, occupational
            diseases, deaths, gas incidents, and dangerous occurrences must also be reported by law.
          </p>
          <p>
            If you&apos;re not sure whether an incident on your site needs reporting, that&apos;s
            exactly the kind of grey area we help clients navigate — get in touch and we&apos;ll
            talk it through.
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
