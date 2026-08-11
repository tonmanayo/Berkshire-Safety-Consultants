import { ContactForm } from "@/components/ContactForm";
import { MessageCircle, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us — Berkshire Safety Consultants",
  description:
    "Request a quote, book a free consultation, or ask a question. Berkshire Safety Consultants — Maidenhead, Berkshire. We'll give you a straight answer.",
};

export default function ContactPage() {
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
            <MessageCircle style={{ width: 16, height: 16 }} />
            Contact us
          </span>
          <h1
            style={{
              margin: "0 0 18px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(38px, 5.5vw, 62px)",
              lineHeight: 1.04,
              color: "var(--white)",
            }}
          >
            Ready to build a <span style={{ color: "var(--lime-500)" }}>safer future?</span>
          </h1>
          <p
            style={{
              margin: "0 auto",
              maxWidth: "56ch",
              fontSize: "clamp(17px, 2vw, 20px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.86)",
            }}
          >
            Request a quote, book a free consultation, or just ask a question. We&apos;ll give you a
            straight answer.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          data-r="split"
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "80px 24px",
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          {/* FORM */}
          <div
            style={{
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 22,
              padding: 40,
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h2
              style={{
                margin: "0 0 6px",
                fontSize: 24,
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "var(--navy-900)",
              }}
            >
              How can we help?
            </h2>
            <p style={{ margin: "0 0 28px", fontSize: 15, color: "var(--gray-500)" }}>
              Fill in the form and we&apos;ll be in touch shortly.
            </p>
            <ContactForm />
          </div>

          {/* DETAILS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                background: "var(--navy-900)",
                borderRadius: 18,
                padding: 30,
                color: "var(--white)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--lime-500)",
                  marginBottom: 18,
                }}
              >
                Head Office
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginBottom: 18 }}>
                <MapPin
                  style={{
                    width: 20,
                    height: 20,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>Maidenhead, Berkshire</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    Working with clients UK-wide
                  </div>
                </div>
              </div>
              <a
                href="tel:+447856580182"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 13,
                  marginBottom: 18,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Phone
                  style={{
                    width: 20,
                    height: 20,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--white)" }}>
                    +44 78565 80182
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    Mon–Fri, 9am–5pm
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@berkshiresafetyconsultants.com"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 13,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Mail
                  style={{
                    width: 20,
                    height: 20,
                    color: "var(--lime-500)",
                    flex: "none",
                    marginTop: 2,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 600,
                      color: "var(--white)",
                      wordBreak: "break-all",
                    }}
                  >
                    info@berkshiresafetyconsultants.com
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    We aim to reply within one working day
                  </div>
                </div>
              </a>
            </div>

            <div
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: "26px 30px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 10,
                }}
              >
                <ShieldCheck style={{ width: 20, height: 20, color: "var(--accent-on-light)" }} />
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--navy-900)" }}>
                  Accredited &amp; trusted
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--gray-700)" }}>
                ISO 45001 &amp; ISO 9001 certified, SSIP approved, and a competent CDM 2015
                Principal Designer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
