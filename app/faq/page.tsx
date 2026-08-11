import { Button } from "@/components/ds/Button";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ArrowRight, HelpCircle } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ — Berkshire Safety Consultants",
  description:
    "Frequently asked questions about Berkshire Safety Consultants. Expert health and safety consultancy for businesses across Berkshire and the UK.",
};

export default function FaqPage() {
  return (
    <>
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
            maxWidth: 1000,
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
            <HelpCircle style={{ width: 16, height: 16 }} />
            FAQ
          </span>
          <h1
            style={{
              margin: "0 0 18px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(38px, 5.5vw, 60px)",
              lineHeight: 1.04,
              color: "var(--white)",
            }}
          >
            Frequently asked <span style={{ color: "var(--lime-500)" }}>questions</span>
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
            Expert health and safety consultancy for businesses across Berkshire and the UK. Browse
            our most frequently asked questions below, or contact us for tailored advice.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "72px 24px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-on-light)",
              marginBottom: 20,
            }}
          >
            General
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(26px, 3.6vw, 38px)",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.08,
              color: "var(--white)",
            }}
          >
            Still have a <span style={{ color: "var(--lime-500)" }}>question?</span>
          </h2>
          <p
            style={{
              margin: "0 auto 30px",
              maxWidth: "50ch",
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Get in touch and we&apos;ll give you tailored advice for your situation.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              Contact us <ArrowRight style={{ width: 18, height: 18 }} />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
}
