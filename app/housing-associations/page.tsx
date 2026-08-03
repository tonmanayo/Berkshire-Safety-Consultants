import { Button } from "@/components/ds/Button";
import { Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Housing Associations — Berkshire Safety Consultants",
  description:
    "Comprehensive health and safety support for housing associations. Fire risk assessments, Building Safety Act guidance, tenant and staff wellbeing, and repairs & maintenance safety.",
};

export default function HousingAssociationsPage() {
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 24px 84px",
          }}
        >
          <div style={{ maxWidth: 720 }}>
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
              <Building2 style={{ width: 16, height: 16 }} />
              Your partner in social housing
            </span>
            <h1
              style={{
                margin: "0 0 22px",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: 1.03,
                color: "var(--white)",
              }}
            >
              Housing <span style={{ color: "var(--lime-500)" }}>Associations</span>
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: "60ch",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.84)",
              }}
            >
              Your primary duty is to provide safe, compliant, comfortable homes for residents,
              alongside the wellbeing of your staff. This comes with a unique set of complex
              responsibilities, constantly evolving with new legislation like the Building Safety
              Act.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px 24px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-on-light)",
              marginBottom: 12,
            }}
          >
            Addressing your core challenges
          </span>
          <h2
            style={{
              margin: "0 auto",
              maxWidth: 680,
              fontSize: 30,
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.12,
              color: "var(--navy-900)",
            }}
          >
            Four areas where we make the{" "}
            <span style={{ color: "var(--accent-on-light)" }}>biggest difference</span>
          </h2>
        </div>
      </section>

      {/* CHALLENGE BLOCKS */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "32px 24px 84px",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <article
            style={{
              display: "grid",
              gridTemplateColumns: "88px 1fr",
              gap: 8,
              alignItems: "start",
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              padding: "34px 36px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--lime-500)",
                lineHeight: 0.9,
              }}
            >
              01
            </div>
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Fire Safety Compliance
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                We provide comprehensive fire risk assessments and strategic guidance tailored to
                multi-occupancy dwellings. Our approach helps you identify and mitigate fire
                hazards, develop robust emergency plans, and ensure your properties meet all
                regulatory requirements, safeguarding your residents.
              </p>
            </div>
          </article>

          <article
            style={{
              display: "grid",
              gridTemplateColumns: "88px 1fr",
              gap: 8,
              alignItems: "start",
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              padding: "34px 36px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--lime-500)",
                lineHeight: 0.9,
              }}
            >
              02
            </div>
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Building Safety Act Support
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                The Building Safety Act introduces significant new duties for housing associations.
                We offer expert support to help you understand and implement these changes, ensuring
                you establish the &ldquo;Golden Thread&rdquo; of information and meet your
                obligations as an Accountable Person.
              </p>
            </div>
          </article>

          <article
            style={{
              display: "grid",
              gridTemplateColumns: "88px 1fr",
              gap: 8,
              alignItems: "start",
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              padding: "34px 36px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--lime-500)",
                lineHeight: 0.9,
              }}
            >
              03
            </div>
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Tenant &amp; Staff Wellbeing
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                The safety and wellbeing of your tenants and staff are at the heart of your
                operations. We help create safer living and working environments through
                comprehensive risk assessments, bespoke training programmes, and effective health
                and safety policies that protect everyone involved.
              </p>
            </div>
          </article>

          <article
            style={{
              display: "grid",
              gridTemplateColumns: "88px 1fr",
              gap: 8,
              alignItems: "start",
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              padding: "34px 36px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                fontSize: 46,
                fontWeight: 800,
                fontStyle: "italic",
                color: "var(--lime-500)",
                lineHeight: 0.9,
              }}
            >
              04
            </div>
            <div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Repairs &amp; Maintenance
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                Managing the health and safety risks associated with property repairs and
                maintenance, including contractor oversight, is a significant challenge. We help you
                develop robust systems for contractor vetting, site inspections, and risk
                assessments for all works.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* AUTHOR + CTA (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.06,
              color: "var(--white)",
            }}
          >
            Get a quote for your <span style={{ color: "var(--lime-500)" }}>upcoming project</span>
          </h2>
          <p style={{ margin: "0 0 30px", fontSize: 15, color: "rgba(255,255,255,0.62)" }}>
            Written by Stephen Dorrell &mdash; Founder &amp; Principal Consultant, Berkshire Safety
            Consultants
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
