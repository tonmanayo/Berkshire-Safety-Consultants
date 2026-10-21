import Link from "next/link";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { ArrowRight, Link as LinkIcon, Check } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/e-learning" },
  title: "Staff E-Learning Packages — Berkshire Safety Consultants",
  description:
    "Three role-specific e-learning packages from the iHASCO course library. Accredited online health and safety training for New Office Staff, Housing Officers, and Maintenance Operatives.",
};

export default function ELearningPage() {
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
            opacity: 0.26,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.72) 0%, rgba(8,2,31,0.95) 100%)",
          }}
        />
        <div className="bsc-hazard-stripes" style={{ height: 5, position: "relative" }} />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "88px 24px 84px",
          }}
        >
          <div style={{ maxWidth: 740 }}>
            <Tag variant="lime" size="sm">
              Powered by iHASCO
            </Tag>
            <h1
              style={{
                margin: "20px 0 22px",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.6vw, 64px)",
                lineHeight: 1.04,
                color: "var(--white)",
              }}
            >
              Staff <span style={{ color: "var(--lime-500)" }}>e-learning</span> packages
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: "62ch",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.84)",
              }}
            >
              We&apos;ve curated three role-specific e-learning packages from the iHASCO course
              library,&nbsp; one of the UK&apos;s leading providers of accredited online health and
              safety training. Each package covers the courses your staff need, based on their role
              and the regulatory landscape they work in.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1100,
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
            The three packages
          </span>
          <h2
            style={{
              margin: "0 auto 16px",
              maxWidth: 680,
              fontSize: 30,
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.12,
              color: "var(--navy-900)",
            }}
          >
            Built around what each{" "}
            <span style={{ color: "var(--accent-on-light)" }}>role actually needs</span>
          </h2>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "66ch",
              fontSize: 16.5,
              lineHeight: 1.65,
              color: "var(--gray-700)",
            }}
          >
            Every package includes adding your own policies and procedures free of charge.
            Completion certificates are held on record and count as documentary evidence for ISO
            45001 Clause 7.2 (Competence), SSIP pre-qualification and Awaab&apos;s Law compliance
            trails.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="cards"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "32px 24px 84px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 22,
          }}
        >
          {/* New Office Staff */}
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ background: "var(--navy-900)", padding: "24px 22px 18px" }}>
              <h3
                style={{ margin: "0 0 6px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                New Office Staff
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Core induction &amp; compliance for office-based employees
              </p>
            </div>
            <div
              style={{
                padding: "16px 22px",
                borderBottom: "1px solid var(--mist)",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--navy-900)" }}>
                14 courses
              </span>
              <span style={{ fontSize: 13, color: "var(--gray-700)" }}>
                £299 <span style={{ textDecoration: "line-through", opacity: 0.6 }}>std</span> ·{" "}
                <strong style={{ color: "var(--accent-on-light)" }}>£260 intro</strong> /user
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                flex: 1,
              }}
            >
              {[
                "Accident Reporting",
                "Bullying & Harassment – Employees",
                "Cyber Security",
                "Display Screen Equipment (DSE)",
                "Equality, Diversity & Inclusion",
                "Essential Health & Safety",
                "Fire Awareness",
                "GDPR (UK)",
                "H&S for Homeworkers",
                "Lone Worker Safety",
                "Manual Handling",
                "Mental Health Awareness",
                "Slips, Trips & Falls",
                "Stress Awareness",
              ].map((course, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 13.5,
                    color: "var(--gray-700)",
                  }}
                >
                  <Check
                    style={{
                      width: 14,
                      height: 14,
                      color: "var(--accent-on-light)",
                      flex: "none",
                      marginTop: 2,
                    }}
                  />
                  {course}
                </li>
              ))}
            </ul>
            <div
              style={{
                padding: "14px 22px 20px",
                fontSize: 12.5,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--accent-on-light)",
              }}
            >
              + Policies &amp; procedures included free of charge
            </div>
          </div>

          {/* Housing Officers */}
          <div
            style={{
              background: "var(--paper)",
              border: "2px solid var(--lime-500)",
              borderRadius: 18,
              display: "flex",
              flexDirection: "column",
              boxShadow: "var(--shadow-sm)",
              position: "relative",
              marginTop: 13,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -13,
                left: "50%",
                transform: "translateX(-50%)",
                background: "var(--lime-500)",
                color: "var(--navy-900)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: 12,
                whiteSpace: "nowrap",
                zIndex: 1,
              }}
            >
              Awaab&apos;s Law ready
            </div>
            <div
              style={{
                background: "var(--navy-900)",
                padding: "24px 22px 18px",
                borderRadius: "16px 16px 0 0",
              }}
            >
              <h3
                style={{ margin: "0 0 6px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Housing Officers
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Client-facing, property and safeguarding-relevant training
              </p>
            </div>
            <div
              style={{
                padding: "16px 22px",
                borderBottom: "1px solid var(--mist)",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--navy-900)" }}>
                14 courses
              </span>
              <span style={{ fontSize: 13, color: "var(--gray-700)" }}>
                £322 <span style={{ textDecoration: "line-through", opacity: 0.6 }}>std</span> ·{" "}
                <strong style={{ color: "var(--accent-on-light)" }}>£280 intro</strong> /user
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                flex: 1,
              }}
            >
              {[
                "Accident Reporting",
                "Awaab's Law – Phase 1",
                "Bullying & Harassment – Employees",
                "Domestic Abuse Awareness",
                "Equality, Diversity & Inclusion",
                "Essential Health & Safety",
                "Fire Awareness",
                "GDPR (UK)",
                "Handling Aggressive Behaviour",
                "Lone Worker Safety",
                "Mental Health Awareness",
                "Safeguarding Adults (Level 2)",
                "Safeguarding Children (Level 2)",
                "Stress Awareness",
              ].map((course, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 13.5,
                    color: "var(--gray-700)",
                  }}
                >
                  <Check
                    style={{
                      width: 14,
                      height: 14,
                      color: "var(--accent-on-light)",
                      flex: "none",
                      marginTop: 2,
                    }}
                  />
                  {course}
                </li>
              ))}
            </ul>
            <div
              style={{
                padding: "14px 22px 20px",
                fontSize: 12.5,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--accent-on-light)",
                borderRadius: "0 0 16px 16px",
              }}
            >
              + Policies &amp; procedures included free of charge
            </div>
          </div>

          {/* Maintenance Operatives */}
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div style={{ background: "var(--navy-900)", padding: "24px 22px 18px" }}>
              <h3
                style={{ margin: "0 0 6px", fontSize: 19, fontWeight: 700, color: "var(--white)" }}
              >
                Maintenance Operatives
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Hands-on, site-relevant safety training
              </p>
            </div>
            <div
              style={{
                padding: "16px 22px",
                borderBottom: "1px solid var(--mist)",
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--navy-900)" }}>
                18 courses
              </span>
              <span style={{ fontSize: 13, color: "var(--gray-700)" }}>
                £414 <span style={{ textDecoration: "line-through", opacity: 0.6 }}>std</span> ·{" "}
                <strong style={{ color: "var(--accent-on-light)" }}>£360 intro</strong> /user
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: "18px 22px",
                display: "flex",
                flexDirection: "column",
                gap: 9,
                flex: 1,
              }}
            >
              {[
                "Abrasive Wheels Safety",
                "Accident Reporting",
                "Asbestos Awareness",
                "COSHH",
                "Dust Awareness",
                "Electrical Safety",
                "Essential Health & Safety",
                "Fire Awareness",
                "Hand Arm Vibration",
                "Ladder Safety",
                "Lone Worker Safety",
                "Manual Handling",
                "Noise Awareness",
                "PPE",
                "PUWER (Power Tools / Work Equipment)",
                "Risk Assessment",
                "Slips, Trips & Falls",
                "Working at Height",
              ].map((course, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "flex-start",
                    fontSize: 13.5,
                    color: "var(--gray-700)",
                  }}
                >
                  <Check
                    style={{
                      width: 14,
                      height: 14,
                      color: "var(--accent-on-light)",
                      flex: "none",
                      marginTop: 2,
                    }}
                  />
                  {course}
                </li>
              ))}
            </ul>
            <div
              style={{
                padding: "14px 22px 20px",
                fontSize: 12.5,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--accent-on-light)",
              }}
            >
              + Policies &amp; procedures included free of charge
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 84px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--gray-700)",
              fontStyle: "italic",
            }}
          >
            All courses are provided by iHASCO and are accredited by IOSH, RoSPA or IIRSM depending
            on subject. Awaab&apos;s Law Phase 1 is currently text-based format.
          </p>
        </div>
      </section>

      {/* WHY THESE PACKAGES */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 24px" }}>
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
            Why these packages
          </span>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(26px,3.4vw,34px)",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Not a generic <span style={{ color: "var(--lime-500)" }}>catalogue subscription</span>
          </h2>
          <p
            style={{
              margin: "0 0 40px",
              maxWidth: "70ch",
              fontSize: 16.5,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Buying individual courses costs more, takes longer to administer and leaves gaps. These
            packages are designed around what each role group genuinely needs.
          </p>

          <div data-r="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              {
                title: "Accredited & audit-ready",
                body: "Accredited by IOSH, RoSPA and IIRSM, certificates carry professional weight at audit and for pre-qualification submissions.",
              },
              {
                title: "Awaab's Law ready",
                body: "The Housing Officers package includes Awaab's Law Phase 1 as standard, supporting compliance with the new damp and mould obligations.",
              },
              {
                title: "SSIP & Constructionline evidence",
                body: "iHASCO certificates map directly to the competence questions in CHAS, Constructionline and SafeContractor applications.",
              },
              {
                title: "ISO 45001 Clause 7.2",
                body: "Completion records count as documentary evidence of staff competence for your management system and surveillance audits.",
              },
              {
                title: "Policies included free",
                body: "BSC-authored templates aligned to ISO 9001:2015 and ISO 45001:2018, included at no extra cost.",
              },
              {
                title: "One managed relationship",
                body: "BSC administers the packages, tracks completion and monitors renewal dates. No separate LMS contract required.",
              },
            ].map(({ title, body }, i) => (
              <div
                key={i}
                style={{
                  background: "var(--navy-800)",
                  border: "1px solid var(--border-on-dark)",
                  borderRadius: 14,
                  padding: "24px 26px",
                }}
              >
                <h4
                  style={{
                    margin: "0 0 8px",
                    fontSize: 15.5,
                    fontWeight: 700,
                    color: "var(--white)",
                  }}
                >
                  {title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSURE CROSS-SELL */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "64px 24px" }}>
          <div
            style={{
              background: "rgba(14,3,60,0.04)",
              border: "1px solid var(--mist)",
              borderRadius: 18,
              padding: "32px 36px",
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <LinkIcon
              style={{ width: 28, height: 28, color: "var(--accent-on-light)", flex: "none" }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--gray-700)",
                flex: 1,
                minWidth: 240,
              }}
            >
              These packages can be embedded within a{" "}
              <Link href="/assure" style={{ color: "var(--accent-on-light)", fontWeight: 700 }}>
                BSC Assure
              </Link>{" "}
              managed compliance subscription, with completion records held alongside your CAPA
              actions, risk assessments and audit trail in a single platform.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Get a tailored quote for <span style={{ color: "var(--lime-500)" }}>your team</span>
          </h2>
          <p style={{ margin: "0 0 30px", fontSize: 16, color: "rgba(255,255,255,0.7)" }}>
            Tell us your team size and roles, and we&apos;ll put together a package recommendation
            and quote.
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
