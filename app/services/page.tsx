import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import { Layers, ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Our Services — Berkshire Safety Consultants",
  description:
    "Practical, tailored health and safety solutions for housing associations, small businesses, principal designer services, and first aid training across Berkshire.",
};

export default function ServicesPage() {
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
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.7) 0%, rgba(8,2,31,0.95) 100%)",
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
            <Layers style={{ width: 16, height: 16 }} />
            Our Services
          </span>
          <h1
            style={{
              margin: "0 0 22px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(40px, 6vw, 70px)",
              lineHeight: 1.02,
              color: "var(--white)",
            }}
          >
            Practical, tailored <span style={{ color: "var(--lime-500)" }}>safety solutions</span>
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "64ch",
              fontSize: "clamp(17px, 2vw, 21px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.84)",
            }}
          >
            We deliver tailored solutions that simplify the complexity of health and safety
            legislation. Our goal is to move you beyond compliance, actively contributing to a
            safer, more productive, and more resilient organisation.
          </p>
        </div>
      </section>

      {/* SERVICE 1: HOUSING (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 24px",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
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
            <img
              src="/assets/slots/svc-housing.webp"
              alt="Residential housing block"
              style={{
                display: "block",
                width: "100%",
                height: 330,
                borderRadius: 16,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Tag variant="lime" size="sm">
              Housing Associations
            </Tag>
            <h2
              style={{
                margin: "16px 0 14px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.08,
                color: "var(--navy-900)",
              }}
            >
              Health &amp; safety for{" "}
              <span style={{ color: "var(--accent-on-light)" }}>housing associations</span>
            </h2>
            <p
              style={{
                margin: "0 0 22px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "var(--gray-700)",
                maxWidth: "56ch",
              }}
            >
              UK housing associations and social landlords focused on large-scale compliance,
              resident safety, and managing complex maintenance risk. We are the leading specialist
              for the housing sector, providing support on critical regulatory demands.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 26px",
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
                Building Safety Act compliance strategy and support
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
                Comprehensive fire safety and risk assessments for residential properties
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
                Managing contractor safety and maintenance risks across your portfolio
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
                Tenant and staff wellbeing and safety frameworks
              </li>
            </ul>
            <Button href="/housing-associations" variant="primary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Read more <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICE 2: PRINCIPAL DESIGNER (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div style={{ order: 1 }}>
            <Tag variant="lime" size="sm">
              Principal Designer
            </Tag>
            <h2
              style={{
                margin: "16px 0 14px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.08,
                color: "var(--white)",
              }}
            >
              Principal Designer <span style={{ color: "var(--lime-500)" }}>services</span>
            </h2>
            <p
              style={{
                margin: "0 0 22px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "56ch",
              }}
            >
              For clients undertaking construction, refurbishment, or demolition projects,
              fulfilling the legal duties of the Principal Designer under CDM 2015 and the Building
              Safety Act.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 26px",
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
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Planning, managing and coordinating health &amp; safety during pre-construction
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Design risk elimination and mitigation (active prevention)
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Compiling pre-construction information and the final Health &amp; Safety File
              </li>
            </ul>
            <Button href="/principal-designer-services" variant="secondary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Read more <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
          <div
            style={{
              order: 2,
              border: "2.5px solid var(--lime-500)",
              borderRadius: 22,
              padding: 7,
              background: "var(--navy-800)",
            }}
          >
            <img
              src="/assets/slots/svc-pd.webp"
              alt="Crane / construction site"
              style={{
                display: "block",
                width: "100%",
                height: 330,
                borderRadius: 16,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* SERVICE 3: SMALL BUSINESSES (light) */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 24px",
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
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
            <img
              src="/assets/slots/svc-sme.webp"
              alt="Workshop / industrial tools"
              style={{
                display: "block",
                width: "100%",
                height: 330,
                borderRadius: 16,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Tag variant="lime" size="sm">
              Small &amp; Medium Businesses
            </Tag>
            <h2
              style={{
                margin: "16px 0 14px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.08,
                color: "var(--navy-900)",
              }}
            >
              Small &amp; <span style={{ color: "var(--accent-on-light)" }}>medium businesses</span>
            </h2>
            <p
              style={{
                margin: "0 0 22px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "var(--gray-700)",
                maxWidth: "56ch",
              }}
            >
              UK SMBs in sectors like construction, manufacturing, and property management.
              Empowering you with simple, cost-effective solutions to achieve compliance and peace
              of mind.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 26px",
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
                General H&amp;S assessments and documented management systems
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
                Expert support for achieving CHAS accreditation
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
                Workplace risk management and legal compliance advice
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
                Integration of H&amp;S with HR compliance requirements
              </li>
            </ul>
            <Button href="/small-businesses" variant="primary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Read more <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICE 4: FIRST AID (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <Tag variant="outline" size="sm">
              In partnership with British Red Cross
            </Tag>
            <h2
              style={{
                margin: "16px 0 14px",
                fontSize: 30,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                lineHeight: 1.08,
                color: "var(--white)",
              }}
            >
              First aid &amp;{" "}
              <span style={{ color: "var(--lime-500)" }}>Fire Marshal training</span>
            </h2>
            <p
              style={{
                margin: "0 0 22px",
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "56ch",
              }}
            >
              Accredited First Aid at Work or Fire Marshal training for your teams — delivered in
              partnership with British Red Cross Training, on-site at your premises across
              Berkshire.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 26px",
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
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                First Aid at Work (3-day)
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Emergency First Aid at Work (1-day)
              </li>
              <li
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  fontSize: 15.5,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Check
                  style={{
                    width: 18,
                    height: 18,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                Fire Marshal and Fire Warden training courses
              </li>
            </ul>
            <Button href="/first-aid-fire-marshal-training" variant="secondary" size="md">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Read more <ArrowRight style={{ width: 17, height: 17 }} />
              </span>
            </Button>
          </div>
          <div
            style={{
              border: "2.5px solid var(--lime-500)",
              borderRadius: 22,
              padding: 7,
              background: "var(--navy-800)",
            }}
          >
            <img
              src="/assets/slots/svc-firstaid.webp"
              alt="First aid / CPR training"
              style={{
                display: "block",
                width: "100%",
                height: 330,
                borderRadius: 16,
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
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
                Tell us what you&apos;re working on and we&apos;ll put together a clear, tailored
                quote.
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
