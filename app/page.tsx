import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { ShieldCheck, ArrowRight, Check, Compass, HardHat, ExternalLink } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/" },
  title: "Berkshire Safety Consultants — Health & Safety Consultancy",
  description:
    "Expert health & safety consultancy for housing associations and small businesses. Practical advice that protects your people, not just box-ticking.",
};

export default function HomePage() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <section id="top" style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/construction-silhouette-bw.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(14,3,60,0.62) 0%, rgba(14,3,60,0.8) 55%, rgba(8,2,31,0.97) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 24px 110px",
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
                marginBottom: 24,
              }}
            >
              <ShieldCheck style={{ width: 16, height: 16 }} />
              ISO 45001 Accredited · Berkshire &amp; Maidenhead
            </span>
            <h1
              style={{
                margin: "0 0 22px",
                fontFamily: "var(--font-primary)",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(48px, 7vw, 88px)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                color: "var(--white)",
              }}
            >
              Building <span style={{ color: "var(--lime-500)" }}>trust</span>
            </h1>
            <p
              style={{
                margin: "0 0 36px",
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.86)",
                maxWidth: 600,
              }}
            >
              Expert health &amp; safety consultancy for housing associations and small businesses.
              Practical advice that protects your people — not just box-ticking.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <Button href="/services" variant="primary" size="lg">
                <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                  Explore services <ArrowRight style={{ width: 18, height: 18 }} />
                </span>
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Talk to us
              </Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 48 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 16px",
                  border: "1.5px solid var(--border-on-dark)",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Check style={{ width: 15, height: 15, color: "var(--lime-500)" }} />
                ISO 45001
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 16px",
                  border: "1.5px solid var(--border-on-dark)",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Check style={{ width: 15, height: 15, color: "var(--lime-500)" }} />
                ISO 9001
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 16px",
                  border: "1.5px solid var(--border-on-dark)",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Check style={{ width: 15, height: 15, color: "var(--lime-500)" }} />
                SSIP Approved
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 16px",
                  border: "1.5px solid var(--border-on-dark)",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                <Check style={{ width: 15, height: 15, color: "var(--lime-500)" }} />
                CDM 2015 Principal Designer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== E-LEARNING (light) ====================== */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent-on-light)",
                }}
              >
                In partnership with iHasco
              </span>
              <span
                style={{
                  width: "3.5rem",
                  height: 4,
                  borderRadius: 999,
                  background: "var(--lime-500)",
                }}
              />
              <h2
                style={{
                  margin: 0,
                  fontWeight: 800,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  fontSize: 36,
                  lineHeight: 1.05,
                  color: "var(--navy-900)",
                }}
              >
                E-learning solutions for{" "}
                <span style={{ color: "var(--accent-on-light)" }}>every business</span>
              </h2>
            </div>
            <p
              style={{
                margin: "24px 0 28px",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--gray-700)",
                maxWidth: "54ch",
              }}
            >
              A comprehensive range of online workplace training courses. With over 160 approved
              courses in more than 43 languages, we help you effortlessly achieve compliance — and
              create a safer, happier workplace.
            </p>
            <div style={{ display: "flex", gap: 14, marginBottom: 32 }}>
              <div
                style={{
                  flex: 1,
                  maxWidth: 170,
                  border: "2.5px solid var(--lime-500)",
                  borderRadius: 18,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--accent-on-light)",
                    lineHeight: 1,
                  }}
                >
                  160+
                </div>
                <div
                  style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginTop: 6 }}
                >
                  Approved courses
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  maxWidth: 170,
                  border: "2.5px solid var(--lime-500)",
                  borderRadius: 18,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    fontStyle: "italic",
                    color: "var(--accent-on-light)",
                    lineHeight: 1,
                  }}
                >
                  43
                </div>
                <div
                  style={{ fontSize: 13, fontWeight: 600, color: "var(--gray-700)", marginTop: 6 }}
                >
                  Languages
                </div>
              </div>
            </div>
            <Button href="/contact" variant="primary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Get in touch <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
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
                src="/assets/slots/bsc-elearning.webp"
                alt="Online learning session photo"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== SERVICES (navy contrast band) ====================== */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 32,
              flexWrap: "wrap",
              marginBottom: 48,
            }}
          >
            <SectionHeading
              eyebrow="Our services"
              title="Solutions tailored to"
              accent="your every need"
              tone="onDark"
            />
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                color: "var(--lime-500)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Learn more <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>

          <div data-r="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 230 }}>
                <Image
                  src="/assets/slots/bsc-svc-housing.webp"
                  alt="Modern housing complex"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px 30px 30px" }}>
                <Tag variant="lime" size="sm">
                  Housing Associations
                </Tag>
                <h3
                  style={{
                    margin: "16px 0 12px",
                    fontSize: 23,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "var(--white)",
                  }}
                >
                  Health &amp; safety for housing associations
                </h3>
                <p
                  style={{
                    margin: "0 0 22px",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Tailored solutions for your specific challenges — fire safety compliance, repairs
                  and maintenance risks, and tenant wellbeing. We help you build robust safety
                  frameworks and protect your reputation.
                </p>
                <Link
                  href="/housing-associations"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    color: "var(--lime-500)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Read more <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </article>

            <article
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 230 }}>
                <Image
                  src="/assets/slots/bsc-svc-pd.webp"
                  alt="Team of engineers on site"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px 30px 30px" }}>
                <Tag variant="lime" size="sm">
                  Principal Designer
                </Tag>
                <h3
                  style={{
                    margin: "16px 0 12px",
                    fontSize: 23,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "var(--white)",
                  }}
                >
                  Principal Designer services
                </h3>
                <p
                  style={{
                    margin: "0 0 22px",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Under CDM 2015 and the Building Safety Act, appointing a competent Principal
                  Designer is a legal requirement for many projects. We coordinate health and safety
                  through the pre-construction phase.
                </p>
                <Link
                  href="/principal-designer-services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    color: "var(--lime-500)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Read more <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </article>

            <article
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 230 }}>
                <Image
                  src="/assets/slots/bsc-svc-sme.webp"
                  alt="Industrial tools / small workshop"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px 30px 30px" }}>
                <Tag variant="lime" size="sm">
                  Small &amp; Medium Businesses
                </Tag>
                <h3
                  style={{
                    margin: "16px 0 12px",
                    fontSize: 23,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "var(--white)",
                  }}
                >
                  Practical H&amp;S for small businesses
                </h3>
                <p
                  style={{
                    margin: "0 0 22px",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  Running a small business is demanding, and health and safety shouldn&apos;t add to
                  the burden. We offer straightforward, cost-effective solutions that give you peace
                  of mind and keep you compliant.
                </p>
                <Link
                  href="/small-businesses"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    color: "var(--lime-500)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Read more <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </article>

            <article
              style={{
                display: "flex",
                flexDirection: "column",
                background: "var(--navy-800)",
                border: "1px solid var(--border-on-dark)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: 230 }}>
                <Image
                  src="/assets/slots/bsc-svc-firstaid.webp"
                  alt="Emergency rescue / first aid scene"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "28px 30px 30px" }}>
                <Tag variant="outline" size="sm">
                  In partnership with British Red Cross
                </Tag>
                <h3
                  style={{
                    margin: "16px 0 12px",
                    fontSize: 23,
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "var(--white)",
                  }}
                >
                  First aid &amp; emergency training you can trust
                </h3>
                <p
                  style={{
                    margin: "0 0 22px",
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.78)",
                  }}
                >
                  British Red Cross Training has partnered with us to deliver high-quality First Aid
                  at Work and Fire Marshal courses — empowering your team with the skills and
                  confidence to help in a workplace emergency.
                </p>
                <Link
                  href="/first-aid-fire-marshal-training"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                    color: "var(--lime-500)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Read more <ArrowRight style={{ width: 16, height: 16 }} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ====================== QUALIFIED & CERTIFIED ====================== */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
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
              marginBottom: 14,
            }}
          >
            Qualified &amp; Certified
          </span>
          <h2
            style={{
              margin: "0 auto 14px",
              maxWidth: 760,
              fontSize: 30,
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.12,
              color: "var(--navy-900)",
            }}
          >
            Accreditations you can <span style={{ color: "var(--accent-on-light)" }}>rely on</span>
          </h2>
          <p
            style={{
              margin: "0 auto 44px",
              maxWidth: "62ch",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--gray-700)",
            }}
          >
            We pride ourselves on our qualifications and certifications, ensuring our team is
            equipped with the expertise to deliver exceptional service.
          </p>
          <div
            data-r="cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 22,
            }}
          >
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 14,
                padding: "30px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  height: 170,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/badge-iso-45001.png"
                  alt="ISO 45001:2018 Occupational Health & Safety Management"
                  width={175}
                  height={338}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "var(--navy-900)" }}>
                ISO 45001:2018
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-500)" }}>
                Occupational H&amp;S management
              </div>
            </div>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 14,
                padding: "30px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  height: 170,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/badge-iso-9001.png"
                  alt="ISO 9001:2015 Quality Management"
                  width={175}
                  height={338}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "var(--navy-900)" }}>
                ISO 9001
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-500)" }}>Quality management</div>
            </div>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 14,
                padding: "30px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  height: 170,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/assets/badge-ssip.png"
                  alt="SSIP Approved — Safety Schemes in Procurement"
                  width={916}
                  height={912}
                  style={{
                    maxHeight: "100%",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "var(--navy-900)" }}>
                SSIP Approved
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-500)" }}>
                Safety Schemes in Procurement
              </div>
            </div>
            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 14,
                padding: "30px 20px",
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  height: 170,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Compass style={{ width: 72, height: 72, color: "var(--accent-on-light)" }} />
              </div>
              <div style={{ fontSize: 17, fontWeight: 800, color: "var(--navy-900)" }}>
                CDM 2015
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-500)" }}>
                Principal Designer competent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== ABOUT (navy contrast band) ====================== */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "96px 24px",
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "2.5px solid var(--lime-500)",
              borderRadius: 22,
              padding: 7,
              background: "var(--navy-800)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 400,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/slots/bsc-about.webp"
                alt="Steve / the BSC team at work"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About"
              title="Berkshire Safety"
              accent="Consultants"
              tone="onDark"
            />
            <p
              style={{
                margin: "24px 0 18px",
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.84)",
                maxWidth: "56ch",
              }}
            >
              We believe safety is the foundation of every successful organisation. We&apos;re a
              dedicated UK-based health and safety consultancy, committed to empowering you with
              practical, tailored solutions that ensure compliance and protect your people.
            </p>
            <p
              style={{
                margin: "0 0 32px",
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "56ch",
              }}
            >
              In nearly every new client site visit, we find the same thing — good intentions let
              down by paperwork no one reads. We fix that. Practical H&amp;S that actually protects
              people, not just regulators.
            </p>
            <Button href="/about" variant="secondary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Learn more <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* ====================== CLIENTS (light) ====================== */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px",
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
              marginBottom: 14,
            }}
          >
            Our clients
          </span>
          <h2
            style={{
              margin: "0 auto 44px",
              maxWidth: 720,
              fontSize: 26,
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.18,
              color: "var(--navy-900)",
            }}
          >
            Trusted by housing associations &amp; SMEs across the{" "}
            <span style={{ color: "var(--accent-on-light)" }}>Thames Valley</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 18,
            }}
          >
            <a
              href="https://ehsl-uk.com/"
              style={{
                textDecoration: "none",
                padding: "18px 32px",
                border: "1px solid var(--mist)",
                borderRadius: 12,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo-ehsl.svg"
                alt="EHSL UK"
                width={100}
                height={33}
                unoptimized
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 190,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
            <a
              href="https://www.housingsolutions.co.uk/"
              style={{
                textDecoration: "none",
                padding: "18px 32px",
                border: "1px solid var(--mist)",
                borderRadius: 12,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo-housing-solutions.png"
                alt="Housing Solutions"
                width={332}
                height={142}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 190,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
            <a
              href="https://sojokitchen.com/"
              style={{
                textDecoration: "none",
                padding: "18px 32px",
                border: "1px solid var(--mist)",
                borderRadius: 12,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo-sojo.png"
                alt="Sojo Kitchen"
                width={750}
                height={750}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 190,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
            <a
              href="https://www.icsroofing.co.uk/"
              style={{
                textDecoration: "none",
                padding: "18px 32px",
                border: "1px solid var(--mist)",
                borderRadius: 12,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo-ics.png"
                alt="ICS Roofing"
                width={302}
                height={229}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 190,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
            <a
              href="https://hamandco.com/"
              style={{
                textDecoration: "none",
                padding: "18px 32px",
                border: "1px solid var(--mist)",
                borderRadius: 12,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/logo-ham.png"
                alt="HAM"
                width={1148}
                height={462}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 190,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* ====================== QUOTE CTA ====================== */}
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
                Tell us what you&apos;re working on. We&apos;ll give you a straight answer and a
                clear price — no waffle.
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

      {/* ====================== HARD HAT AWARENESS (light) ====================== */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "0.95fr 1.05fr",
            gap: 56,
            alignItems: "center",
          }}
        >
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
                height: 340,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/slots/bsc-hardhat.webp"
                alt="Construction site / hard hat"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-on-light)",
                marginBottom: 16,
              }}
            >
              <HardHat style={{ width: 16, height: 16 }} />
              Proudly supporting
            </span>
            <h2
              style={{
                margin: "0 0 18px",
                fontSize: 34,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.08,
                color: "var(--navy-900)",
              }}
            >
              Hard Hat <span style={{ color: "var(--accent-on-light)" }}>Awareness Week</span>
            </h2>
            <p
              style={{
                margin: "0 0 14px",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "var(--gray-700)",
                maxWidth: "54ch",
              }}
            >
              Brain injuries have devastating, life-long impacts on the individual and their entire
              family. That&apos;s why raising awareness of proper head safety is crucial.
            </p>
            <p
              style={{
                margin: "0 0 30px",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "var(--gray-500)",
                maxWidth: "54ch",
              }}
            >
              We encourage best practice around safety equipment, focusing on the critical steps
              needed to keep your teams safe.
            </p>
            <Button href="https://hardhatawarenessweek.com/" variant="secondary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Visit website <ExternalLink style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
