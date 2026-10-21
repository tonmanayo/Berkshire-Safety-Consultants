import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { Compass, Check, ArrowRight } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/principal-designer-services" },
  title: "Principal Designer Services — Berkshire Safety Consultants",
  description:
    "Expert Principal Designer services under CDM 2015 and the Building Safety Act. We plan, manage, monitor, and coordinate health and safety during the pre-construction phase.",
};

export default function PrincipalDesignerServicesPage() {
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
          <div style={{ maxWidth: 760 }}>
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
              <Compass style={{ width: 16, height: 16 }} />
              CDM &amp; Building Safety Act compliance
            </span>
            <h1
              style={{
                margin: "0 0 22px",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.5vw, 64px)",
                lineHeight: 1.04,
                color: "var(--white)",
              }}
            >
              Principal Designer <span style={{ color: "var(--lime-500)" }}>services</span>
            </h1>
            <p
              style={{
                margin: "0 0 16px",
                maxWidth: "62ch",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              For any construction, refurbishment, or demolition project in the UK, CDM 2015
              mandates the appointment of a competent Principal Designer.
            </p>
            <p
              style={{
                margin: 0,
                maxWidth: "62ch",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              We act as your dedicated Principal Designer, bringing specialist know-how to navigate
              these complex legal requirements, simplifying compliance, proactively managing risks,
              and safeguarding your project&apos;s integrity from concept to completion.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS A PD (light) */}
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
              What is a Principal Designer and{" "}
              <span style={{ color: "var(--accent-on-light)" }}>why do you need one?</span>
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
              With the introduction of the Building Safety Act, this role has become even more
              critical, ensuring safety is embedded from the earliest design stages. The Principal
              Designer is appointed by the Client on projects involving more than one contractor, to
              plan, manage, monitor, and coordinate health and safety during the pre-construction
              phase.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "18px 0 0",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "var(--ink)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--accent-on-light)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                A statutory duty under CDM 2015 and increasingly vital with the Building Safety Act
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "var(--ink)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--accent-on-light)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Eliminating risks at design stage is far more effective and cost-efficient than
                during construction
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "var(--ink)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--accent-on-light)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Ensures all designers cooperate and share information for a safer, better-organised
                build
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "var(--ink)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--accent-on-light)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Safeguards your legal position and reputation by demonstrating due diligence from
                the outset
              </li>
            </ul>
          </div>
          <div
            style={{
              border: "2.5px solid var(--lime-500)",
              borderRadius: 22,
              padding: 7,
              background: "var(--paper)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 380,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/slots/pd-hero.webp"
                alt="Crane / construction project"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS — 6 steps (navy) */}
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
              Our process
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
              From brief to{" "}
              <span style={{ color: "var(--lime-500)" }}>Health &amp; Safety File</span>
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                01
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Initial Review &amp; Planning
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                A thorough review of your project brief, existing designs, and pre-construction
                information, so we understand all foreseeable risks and legal obligations from day
                one.
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                02
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Design Risk Management
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We work with your design team to identify, eliminate, or reduce risks inherent in
                the design. Active prevention that protects your project before hazards reach site.
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                03
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Coordination &amp; Communication
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                Fair, honest guidance coordinating all health and safety aspects of the design
                &mdash; clear communication so everyone understands their duties and
                responsibilities.
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                04
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Information &amp; Guidance
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We help compile the pre-construction information pack and provide ongoing advice so
                you can confidently fulfil your client duties under CDM 2015 and the Building Safety
                Act.
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                05
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Project-Specific Approach
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                Every project is unique. Our service is adapted to the scale, complexity, and nature
                of your project, whether a minor refurbishment or a major new build.
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
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--lime-500)",
                  lineHeight: 0.9,
                  marginBottom: 14,
                }}
              >
                06
              </div>
              <h3
                style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Health &amp; Safety File
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.74)",
                }}
              >
                We oversee preparation and ongoing review of the Health &amp; Safety File - crucial
                for the future safe use, cleaning, and maintenance of the structure, long after
                completion.
              </p>
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
                Get a quote for your upcoming project
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
                Appointing the right Principal Designer early saves time, money, and risk later.
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
