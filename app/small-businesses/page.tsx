import { Button } from "@/components/ds/Button";
import { Store, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Small & Medium Businesses — Berkshire Safety Consultants",
  description:
    "Straightforward, cost-effective health and safety solutions for small and medium businesses. General H&S assessments, CHAS accreditation support, workplace risk management, and H&S & HR integration.",
};

export default function SmallBusinessesPage() {
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
              <Store style={{ width: 16, height: 16 }} />
              Practical health &amp; safety
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
              Small &amp; medium <span style={{ color: "var(--lime-500)" }}>businesses</span>
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
              Running a small business is demanding, and health and safety shouldn&apos;t add to the
              burden. We offer straightforward, cost-effective solutions designed to give you peace
              of mind and ensure compliance, without the jargon.
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
            How we help
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
            Compliance made{" "}
            <span style={{ color: "var(--accent-on-light)" }}>simple &amp; affordable</span>
          </h2>
        </div>
      </section>

      {/* KEY SERVICE BLOCKS */}
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
                General H&amp;S Assessments
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                We carry out general health &amp; safety assessments and build documented management
                systems that fit your business. Giving you a clear, defensible record of compliance
                without the paperwork overload.
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
                CHAS Accreditation Support
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                Expert, hands-on support for achieving CHAS accreditation, helping you get past
                tender shortlisting and win the work, with documentation prepared and submitted
                correctly first time.
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
                Workplace Risk Management
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                Practical workplace risk management and legal compliance advice tailored to your
                size and industry, so you know exactly what&apos;s required and what isn&apos;t,
                with no scaremongering.
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
                H&amp;S &amp; HR Integration
              </h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--gray-700)" }}>
                We integrate health &amp; safety with your HR compliance requirements, so your
                policies, training records, and people processes all line up, one joined-up system
                rather than scattered documents.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA (navy) */}
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
              margin: "0 0 14px",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.06,
              color: "var(--white)",
            }}
          >
            Peace of mind, <span style={{ color: "var(--lime-500)" }}>without the burden</span>
          </h2>
          <p
            style={{
              margin: "0 auto 30px",
              maxWidth: "54ch",
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Let&apos;s have a quick, jargon-free chat about what your business actually needs.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              Get in touch <ArrowRight style={{ width: 18, height: 18 }} />
            </span>
          </Button>
        </div>
      </section>
    </>
  );
}
