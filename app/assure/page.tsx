import { Button } from "@/components/ds/Button";
import {
  ArrowRight,
  Building2,
  HardHat,
  Check,
  FileCheck,
  ClipboardCheck,
  TriangleAlert,
  RefreshCw,
  BarChart3,
  CalendarClock,
} from "lucide-react";

export const metadata = {
  title: "BSC Assure — Compliance Management Platform | Berkshire Safety Consultants",
  description:
    "BSC Assure is the all-in-one compliance management platform for housing associations and SME construction companies. ISO standards, CHAS, Constructionline, policies, and audits in a single system.",
};

export default function AssurePage() {
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
            opacity: 0.22,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.78) 0%, rgba(8,2,31,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 24px 80px",
          }}
        >
          <div style={{ maxWidth: 780 }}>
            <h1
              style={{
                margin: "0 0 22px",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(40px, 5.8vw, 68px)",
                lineHeight: 1.02,
                color: "var(--white)",
              }}
            >
              Compliance without <span style={{ color: "var(--lime-500)" }}>the chaos</span>
            </h1>
            <p
              style={{
                margin: "0 0 36px",
                maxWidth: "62ch",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.84)",
              }}
            >
              BSC Assure is the all-in-one compliance management platform built for housing
              associations and SME construction companies. Bringing your ISO standards, CHAS,
              Constructionline, policies, and audits into a single, stress-free system.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Book a free demo <ArrowRight style={{ width: 18, height: 18 }} />
              </span>
            </Button>

            <div
              style={{
                marginTop: 52,
                paddingTop: 32,
                borderTop: "1px solid var(--divider-on-dark)",
                display: "flex",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: 30,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  ISO
                </span>
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  9001 · 14001 · 45001
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: 30,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  CHAS
                </span>
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  &amp; Constructionline ready
                </span>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    fontSize: 30,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--lime-500)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  1 platform
                </span>
                <span
                  style={{
                    fontSize: 13,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  all your compliance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "84px 24px" }}>
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
            The problem
          </span>
          <h2
            style={{
              margin: "0 0 16px",
              fontSize: 30,
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "var(--navy-900)",
            }}
          >
            The compliance burden is real&nbsp;
            <span style={{ color: "var(--accent-on-light)" }}>and growing</span>
          </h2>
          <p
            style={{
              margin: "0 0 44px",
              maxWidth: "64ch",
              fontSize: 16.5,
              lineHeight: 1.65,
              color: "var(--gray-700)",
            }}
          >
            Regulatory pressure on housing providers and construction businesses has never been
            higher. Most organisations manage compliance across spreadsheets, inboxes, and shared
            drives. A fragile system that creates risk, not confidence.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderLeft: "3px solid var(--danger)",
                borderRadius: 12,
                padding: "24px 26px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Scattered documentation
              </h4>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Policies, risk assessments, and audit records spread across multiple systems make
                audit preparation a stressful scramble every time.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderLeft: "3px solid var(--danger)",
                borderRadius: 12,
                padding: "24px 26px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Missed renewal deadlines
              </h4>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                CHAS, Constructionline, and ISO surveillance dates buried in calendars or one
                person&apos;s memory, until something lapses.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderLeft: "3px solid var(--danger)",
                borderRadius: 12,
                padding: "24px 26px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                No visibility for leadership
              </h4>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Senior managers and boards are asked to sign off compliance they cannot actually
                see, creating governance risk and liability exposure.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderLeft: "3px solid var(--danger)",
                borderRadius: 12,
                padding: "24px 26px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Corrective actions falling through gaps
              </h4>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Issues raised in audits or incidents get logged, then lost. Without a tracked
                workflow, repeat findings and regulatory notices follow.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AUDIENCE (navy) */}
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
              Who it&apos;s for
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
                color: "var(--white)",
              }}
            >
              Built around your sector&apos;s{" "}
              <span style={{ color: "var(--lime-500)" }}>real challenges</span>
            </h2>
            <p
              style={{
                margin: "0 auto",
                maxWidth: "60ch",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              BSC Assure is purpose-positioned for two audiences with distinct compliance pressures
              and one platform that handles both.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderTop: "4px solid var(--lime-500)",
                borderRadius: 18,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  marginBottom: 6,
                }}
              >
                <Building2 style={{ width: 22, height: 22, color: "var(--lime-500)" }} />
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--white)" }}>
                  Housing associations
                </h3>
              </div>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: 13.5,
                  letterSpacing: "0.02em",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Registered providers &amp; social landlords
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 13,
                }}
              >
                {[
                  "Manage ISO 9001 quality and ISO 45001 health & safety obligations in one place, demonstrating continuous compliance to the Regulator of Social Housing",
                  "Centralise contractor compliance and supplier documentation. No more chasing CHAS certificates before works begin",
                  "Generate board-ready compliance reports at the click of a button, supporting your governance and audit committee obligations",
                  "Maintain a live document control register. Every policy, procedure, and risk assessment version-controlled and accessible",
                  "Track and close corrective actions from internal audits, resident complaints, and HSE notifications with full audit trail",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 11,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    <Check
                      style={{
                        width: 17,
                        height: 17,
                        color: "var(--lime-500)",
                        flex: "none",
                        marginTop: 2,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderTop: "4px solid var(--lime-500)",
                borderRadius: 18,
                padding: 34,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  marginBottom: 6,
                }}
              >
                <HardHat style={{ width: 22, height: 22, color: "var(--lime-500)" }} />
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "var(--white)" }}>
                  SME construction companies
                </h3>
              </div>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: 13.5,
                  letterSpacing: "0.02em",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                Contractors, subcontractors &amp; specialist trades
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 13,
                }}
              >
                {[
                  "Achieve and maintain CHAS, Constructionline, and SafeContractor accreditations without the annual administrative nightmare",
                  "Keep ISO 9001, 14001, and 45001 certifications current, consolidated into a single integrated management system",
                  "Win more tenders with instantly verifiable, up-to-date compliance documentation available on demand for clients",
                  "Manage site-level risk assessments, method statements, and COSHH records from a central, mobile-accessible platform",
                  "Protect your business from HSE enforcement and contract disputes with a complete, timestamped compliance record",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 11,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    <Check
                      style={{
                        width: 17,
                        height: 17,
                        color: "var(--lime-500)",
                        flex: "none",
                        marginTop: 2,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES (light) */}
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
              Platform features
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
              Everything compliance needs.{" "}
              <span style={{ color: "var(--accent-on-light)" }}>Nothing it doesn&apos;t.</span>
            </h2>
            <p
              style={{
                margin: "0 auto",
                maxWidth: "62ch",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "var(--gray-700)",
              }}
            >
              BSC Assure brings your entire compliance function into a single, intuitive system.
              Reducing admin, improving visibility, and making every audit straightforward.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <FileCheck style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Document control
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Version-controlled policies, procedures, and risk assessments. Reviewed on schedule,
                always current, always auditable.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <ClipboardCheck style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Audit management
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Plan, conduct, and track internal audits from scheduling to close-out. No more
                spreadsheet-managed audit programmes.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <TriangleAlert style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Risk assessment register
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Centralised risk register across your operations&nbsp; easily reviewed, updated, and
                signed off with a clear approval trail.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <RefreshCw style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Corrective action tracking
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Raise, assign, and close corrective and preventive actions with deadlines and owner
                accountability, nothing falls through the gaps.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <BarChart3 style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Real-time dashboards
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                At-a-glance compliance status for managers and boards - overdue items, upcoming
                renewals, and audit outcomes in one view.
              </p>
            </article>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--border-on-light)",
                borderRadius: 14,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  background: "var(--navy-900)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <CalendarClock style={{ width: 20, height: 20, color: "var(--lime-500)" }} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Compliance calendar
              </h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                Accreditation renewals, surveillance audits, and review deadlines tracked
                automatically, with alerts before things expire.
              </p>
            </article>
          </div>

          {/* STANDARDS STRIP */}
          <div
            style={{
              marginTop: 40,
              background: "var(--navy-900)",
              borderRadius: 18,
              padding: "32px 36px",
            }}
          >
            <h4
              style={{
                margin: "0 0 18px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--lime-500)",
              }}
            >
              Frameworks &amp; accreditations supported
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "ISO 9001",
                "ISO 14001",
                "ISO 45001",
                "CHAS",
                "Constructionline",
                "SafeContractor",
                "CDM 2015",
                "COSHH",
                "HSE compliance",
                "RSH requirements",
              ].map((label) => (
                <span
                  key={label}
                  style={{
                    background: "var(--navy-800)",
                    border: "1px solid var(--border-on-dark)",
                    color: "var(--white)",
                    fontSize: 13.5,
                    fontWeight: 600,
                    padding: "7px 16px",
                    borderRadius: 22,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "84px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
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
              Pricing
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
                color: "var(--white)",
              }}
            >
              Transparent, <span style={{ color: "var(--lime-500)" }}>scalable pricing</span>
            </h2>
            <p
              style={{
                margin: "0 auto",
                maxWidth: "64ch",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              BSC Assure is powered by the PICMS platform, giving you enterprise-grade compliance
              infrastructure at a price built for SMEs and housing associations. No hidden fees, no
              per-module surprises.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 22,
              alignItems: "start",
            }}
          >
            {/* Essentials */}
            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: "30px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 10,
                }}
              >
                Essentials
              </div>
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                £134
                <span
                  style={{
                    fontSize: 15,
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {" "}
                  /month
                </span>
              </div>
              <p
                style={{
                  margin: "14px 0 20px",
                  paddingBottom: 18,
                  borderBottom: "1px solid var(--border-on-dark)",
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                One ISO standard, up to 5 users. Ideal for smaller contractors or housing providers
                taking their first step towards structured compliance.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  "1 ISO standard (e.g. ISO 45001 or ISO 9001)",
                  "Document control & version history",
                  "Risk assessment register",
                  "Audit scheduling & tracking",
                  "Corrective action management",
                  "Compliance calendar & alerts",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "flex-start",
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <Check
                      style={{
                        width: 15,
                        height: 15,
                        color: "var(--lime-500)",
                        flex: "none",
                        marginTop: 3,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Professional */}
            <article
              style={{
                position: "relative",
                background: "var(--navy-800)",
                border: "2px solid var(--lime-500)",
                borderRadius: 18,
                padding: "30px 28px",
                boxShadow: "var(--shadow-lime, 0 12px 40px rgba(207,224,86,0.18))",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: -13,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--lime-500)",
                  color: "var(--navy-900)",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "5px 16px",
                  borderRadius: 14,
                  whiteSpace: "nowrap",
                }}
              >
                Most popular
              </span>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--lime-500)",
                  marginBottom: 10,
                }}
              >
                Professional
              </div>
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                £404
                <span
                  style={{
                    fontSize: 15,
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {" "}
                  /month
                </span>
              </div>
              <p
                style={{
                  margin: "14px 0 20px",
                  paddingBottom: 18,
                  borderBottom: "1px solid var(--border-on-dark)",
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Three ISO standards (9001 + 14001 + 45001), up to 15 users, AI-assisted evidence
                mapping and one sector industry pack. The right choice for most housing associations
                and growing construction SMEs.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  "ISO 9001, 14001 & 45001 integrated",
                  "CHAS & Constructionline pack included",
                  "Up to 15 users",
                  "AI-assisted gap analysis & evidence agents",
                  "Real-time compliance dashboards",
                  "Board-ready reporting",
                  "Priority support",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "flex-start",
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <Check
                      style={{
                        width: 15,
                        height: 15,
                        color: "var(--lime-500)",
                        flex: "none",
                        marginTop: 3,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            {/* Certification */}
            <article
              style={{
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                padding: "30px 28px",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.6)",
                  marginBottom: 10,
                }}
              >
                Certification
              </div>
              <div
                style={{
                  fontSize: 38,
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                £629
                <span
                  style={{
                    fontSize: 15,
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {" "}
                  /month
                </span>
              </div>
              <p
                style={{
                  margin: "14px 0 20px",
                  paddingBottom: 18,
                  borderBottom: "1px solid var(--border-on-dark)",
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Five ISO standards, up to 30 users, unlimited AI queries and two industry packs.
                Built for larger organisations with complex, multi-standard compliance estates.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                }}
              >
                {[
                  "Up to 5 ISO standards",
                  "Up to 30 users",
                  "Unlimited AI queries & insights",
                  "Two sector industry packs",
                  "Multi-site compliance management",
                  "Dedicated onboarding support",
                  "Customisable reporting suite",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "flex-start",
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    <Check
                      style={{
                        width: 15,
                        height: 15,
                        color: "var(--lime-500)",
                        flex: "none",
                        marginTop: 3,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div
            style={{
              marginTop: 24,
              background: "var(--navy-800)",
              border: "1px solid var(--border-on-dark)",
              borderLeft: "3px solid var(--lime-500)",
              borderRadius: 12,
              padding: "18px 22px",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            <strong style={{ color: "var(--white)" }}>Not sure which plan fits?</strong> Most
            housing associations and construction SMEs start on Professional - covering the full
            EHSQ triad (ISO 9001, 14001, 45001) alongside CHAS and Constructionline in one place.
            Enterprise pricing is also available for multi-site groups and larger registered
            providers. Contact BSC for a personalised recommendation.
          </div>
        </div>
      </section>

      {/* QUOTE + WHY BSC (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "84px 24px" }}>
          <div
            style={{
              position: "relative",
              background: "var(--navy-900)",
              borderRadius: 22,
              padding: "48px 48px 44px",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 6,
                left: 32,
                fontSize: 120,
                lineHeight: 1,
                fontWeight: 800,
                color: "rgba(207,224,86,0.16)",
              }}
            >
              &ldquo;
            </span>
            <blockquote
              style={{
                position: "relative",
                margin: "0 0 22px",
                fontSize: "clamp(19px, 2.4vw, 24px)",
                fontStyle: "italic",
                lineHeight: 1.55,
                color: "var(--white)",
              }}
            >
              BSC Assure transforms compliance from a source of stress into a source of confidence -
              giving housing associations and construction businesses the visibility, control, and
              audit-readiness they need to focus on what they actually do.
            </blockquote>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--lime-500)",
              }}
            >
              Berkshire Safety Consultants — BSC Assure launch statement
            </div>
          </div>

          <div
            style={{
              marginTop: 56,
              textAlign: "center",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
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
              Why BSC
            </span>
            <h2
              style={{
                margin: "0 0 16px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.12,
                color: "var(--navy-900)",
              }}
            >
              The practical compliance partner{" "}
              <span style={{ color: "var(--accent-on-light)" }}>for your sector</span>
            </h2>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.65, color: "var(--gray-700)" }}>
              Berkshire Safety Consultants brings hands-on regulatory expertise to every client. BSC
              Assure is not off-the-shelf software with a consultant bolted on,&nbsp; it is a
              compliance solution shaped by real audit experience in construction and housing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "var(--paper)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", width: "100%" }}>
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
                Ready to simplify your compliance?
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
                Book a no-obligation demonstration and see BSC Assure in action with your own
                frameworks and requirements.
              </p>
            </div>
            <Button href="/contact" variant="dark" size="lg">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Book a free demo <ArrowRight style={{ width: 18, height: 18 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
