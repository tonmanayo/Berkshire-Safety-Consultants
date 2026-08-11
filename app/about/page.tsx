import { Button } from "@/components/ds/Button";
import { Users, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About Us — Berkshire Safety Consultants",
  description:
    "Meet the team behind Berkshire Safety Consultants. Our mission is to make health and safety straightforward, allowing you to focus on what matters most: your core business.",
};

export default function AboutPage() {
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
            maxWidth: 1100,
            margin: "0 auto",
            padding: "96px 24px 84px",
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
            <Users style={{ width: 16, height: 16 }} />
            About us
          </span>
          <h1
            style={{
              margin: "0 0 22px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.05,
              color: "var(--white)",
            }}
          >
            About Berkshire <span style={{ color: "var(--lime-500)" }}>Safety Consultants</span>
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "64ch",
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            Our mission is to make health and safety straightforward, allowing you to focus on what
            matters most: your core business.
          </p>
        </div>
      </section>

      {/* STORY (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 24px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-on-light)",
                marginBottom: 14,
              }}
            >
              Our story
            </span>
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.1,
                color: "var(--navy-900)",
              }}
            >
              Accessible, practical,{" "}
              <span style={{ color: "var(--accent-on-light)" }}>effective</span>
            </h2>
            <p
              style={{
                margin: "0 0 16px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "var(--gray-700)",
                maxWidth: "58ch",
              }}
            >
              Our journey began with a clear purpose: to make health and safety accessible,
              practical, and effective for businesses across Berkshire and surrounding areas. We saw
              the challenges organisations faced, from navigating complex legislation to ensuring
              the wellbeing of their people and recognised the need for a partner who could offer
              not just compliance, but true peace of mind.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "var(--gray-500)",
                maxWidth: "58ch",
              }}
            >
              Today, we are a dedicated team of UK-based health and safety experts, passionate about
              empowering businesses to create inherently safe and compliant working environments. A
              proactive approach to safety is the foundation of every successful operation,
              protecting your people, your assets, and your reputation.
            </p>
          </div>
          <div
            style={{
              border: "2.5px solid var(--lime-500)",
              borderRadius: 22,
              padding: 7,
              background: "var(--paper)",
            }}
          >
            <img
              src="/assets/slots/about-story.webp"
              alt="The team / office"
              style={{
                display: "block",
                width: "100%",
                height: 380,
                borderRadius: 16,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* VALUES — SAFETY (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--lime-500)",
                marginBottom: 12,
              }}
            >
              Our values
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
                color: "var(--white)",
              }}
            >
              The <span style={{ color: "var(--lime-500)" }}>SAFETY</span> we stand for
            </h2>
          </div>
          <div
            data-r="cards"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}
          >
            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  S
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Specialist Know-How
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                Deep expertise in health &amp; safety rules and best practices, ensuring you receive
                sound and correct advice.
              </p>
            </article>

            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  A
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Active Prevention
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We always strive to stop problems before they start, helping you avoid risks early
                on.
              </p>
            </article>

            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  F
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Fair &amp; Honest
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                Trustworthy, open, and reliable advice, so you can count on us for transparent
                guidance.
              </p>
            </article>

            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  E
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Empowering You
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We provide the tools, knowledge, and confidence you need to effectively manage your
                own safety.
              </p>
            </article>

            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  T
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Tailored Solutions
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We build plans that fit your exact needs and challenges, instead of offering a
                standard approach.
              </p>
            </article>

            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: 30,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                <span
                  style={{
                    fontSize: 44,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 0.8,
                  }}
                >
                  Y
                </span>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
                  Your Safety &amp; Care
                </h3>
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We are genuinely dedicated to protecting your people and fostering a secure place to
                work.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* TEAM (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
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
              Meet the team
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
              The people behind <span style={{ color: "var(--accent-on-light)" }}>your safety</span>
            </h2>
          </div>
          <div
            data-r="cards"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}
          >
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <img
                src="/assets/slots/team-stephen.webp"
                alt="Stephen Dorrell"
                style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-on-light)",
                    marginBottom: 6,
                  }}
                >
                  Founder &amp; Principal Consultant
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  Stephen Dorrell
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                  Over 13 years in the health and safety industry. Stephen founded the company to
                  give businesses the expertise they need to comply with regulations and keep their
                  employees safe — a certified safety professional with a deep understanding of the
                  issues facing businesses today.
                </p>
              </div>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <img
                src="/assets/slots/team-james.webp"
                alt="James Dorrell"
                style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-on-light)",
                    marginBottom: 6,
                  }}
                >
                  Civil Engineer &amp; Chartered Accountant
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  James Dorrell
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                  A blend of technical engineering insight and financial governance, helping clients
                  translate risk into practical controls, robust programmes, and defensible
                  compliance across construction, repairs, and multi-site operations.
                </p>
              </div>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <img
                src="/assets/slots/team-ashton.webp"
                alt="Ashton Mack"
                style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-on-light)",
                    marginBottom: 6,
                  }}
                >
                  Digital Strategy Lead
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  Ashton Mack
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                  Digital Strategy Lead and Marketing Specialist, translating complex compliance and
                  safety objectives into high-impact, data-driven digital strategies — managing the
                  full digital footprint so campaigns stay cohesive and brand-aligned.
                </p>
              </div>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <img
                src="/assets/slots/team-oliver.webp"
                alt="Oliver Dorrell"
                style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-on-light)",
                    marginBottom: 6,
                  }}
                >
                  Surveyor / Fire Risk Assessor
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  Oliver Dorrell
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                  Studying for his Building Surveyor qualifications and working alongside fire risk
                  professionals since 2020, with experience in construction as well as Fire Risk
                  Assessment work.
                </p>
              </div>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <img
                src="/assets/slots/team-karen.webp"
                alt="Karen Exley"
                style={{ display: "block", width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "24px 26px 28px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-on-light)",
                    marginBottom: 6,
                  }}
                >
                  Project Manager
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "var(--navy-900)",
                  }}
                >
                  Karen Exley
                </h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                  A skilled project manager with a background in occupational health and safety.
                  Karen works closely with clients to ensure projects are completed on time and
                  within budget — passionate about building safe, healthy workplace cultures.
                </p>
              </div>
            </article>

            <article
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                background: "var(--navy-900)",
                borderRadius: 18,
                padding: "34px 30px",
                color: "var(--white)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 12px",
                  fontSize: 22,
                  fontWeight: 800,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  lineHeight: 1.1,
                  color: "var(--white)",
                }}
              >
                Want to work <span style={{ color: "var(--lime-500)" }}>with us?</span>
              </h3>
              <p
                style={{
                  margin: "0 0 22px",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Whether you&apos;re a client or a safety professional, we&apos;d love to hear from
                you.
              </p>
              <Button href="/contact" variant="primary" size="md">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  Get in touch <ArrowRight style={{ width: 17, height: 17 }} />
                </span>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--paper)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <div
            style={{
              background: "var(--lime-500)",
              borderRadius: 28,
              padding: "56px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: "var(--navy-900)",
                }}
              >
                Get an estimate for your upcoming project
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 17,
                  lineHeight: 1.5,
                  color: "var(--navy-900)",
                  opacity: 0.82,
                }}
              >
                Let&apos;s talk about how we can make safety straightforward for you.
              </p>
            </div>
            <Button href="/contact" variant="dark" size="lg">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Contact us <ArrowRight style={{ width: 18, height: 18 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
