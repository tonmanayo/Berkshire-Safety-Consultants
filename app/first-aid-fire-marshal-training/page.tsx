import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";
import {
  HeartPulse,
  Stethoscope,
  RefreshCw,
  Flame,
  MapPin,
  BadgeCheck,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "First Aid & Fire Marshal Training — Berkshire Safety Consultants",
  description:
    "Accredited First Aid at Work and Fire Marshal training delivered on-site. Delivered in partnership with British Red Cross Training across Berkshire and beyond.",
};

export default function FirstAidFireMarshalTrainingPage() {
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
            <img
              src="/assets/logo-red-cross-partnership.jpg"
              alt="In partnership with British Red Cross"
              style={{ height: 48, width: "auto", borderRadius: 8, marginBottom: 20 }}
            />
            <h1
              style={{
                margin: "0 0 22px",
                fontWeight: 800,
                fontStyle: "italic",
                textTransform: "uppercase",
                fontSize: "clamp(38px, 5.5vw, 62px)",
                lineHeight: 1.04,
                color: "var(--white)",
              }}
            >
              First aid &amp;{" "}
              <span style={{ color: "var(--lime-500)" }}>Fire Marshal training</span>
            </h1>
            <p
              style={{
                margin: "0 0 16px",
                maxWidth: "64ch",
                fontSize: "clamp(17px, 2vw, 20px)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.86)",
              }}
            >
              Every workplace should have confident, capable first aiders. We&apos;ve partnered with
              British Red Cross Training to deliver accredited First Aid at Work and Fire Marshal
              courses across Berkshire and beyond.
            </p>
            <p
              style={{
                margin: "0 0 32px",
                maxWidth: "64ch",
                fontSize: 16.5,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              The British Red Cross has delivered First Aid at Work training for over 40 years and
              is trusted by more than half of the UK&apos;s top 20 construction companies. When you
              train with us, you can be confident of a name you can trust.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                Book your training <ArrowRight style={{ width: 18, height: 18 }} />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* COURSES (light) */}
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
              Our courses
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
              Accredited training,{" "}
              <span style={{ color: "var(--accent-on-light)" }}>delivered on-site</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: "34px 36px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "var(--lime-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <HeartPulse style={{ width: 24, height: 24, color: "var(--navy-900)" }} />
                </div>
                <Tag variant="lime" size="sm">
                  1 Day
                </Tag>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Emergency First Aid at Work
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--gray-700)" }}>
                The ideal starting point for most workplaces. A one-day course giving your team the
                knowledge and confidence to respond effectively to a wide range of first aid
                emergencies, from CPR to managing injuries until professional help arrives.
              </p>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: "34px 36px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "var(--lime-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <Stethoscope style={{ width: 24, height: 24, color: "var(--navy-900)" }} />
                </div>
                <Tag variant="lime" size="sm">
                  3 Days
                </Tag>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                First Aid at Work
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--gray-700)" }}>
                For workplaces that require a more comprehensive qualification. This three-day
                course enables learners to recognise and respond to a broader range of injuries and
                medical conditions, meeting the full HSE requirements for First Aid at Work
                certificate holders.
              </p>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: "34px 36px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "var(--lime-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <RefreshCw style={{ width: 24, height: 24, color: "var(--navy-900)" }} />
                </div>
                <Tag variant="outline" size="sm">
                  Refresher
                </Tag>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                First Aid at Work Requalification
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--gray-700)" }}>
                For those who already hold the 3-day First Aid at Work qualification, certificates
                must be renewed every three years. Our requalification course is the
                straightforward, efficient way to refresh your skills, update your knowledge, and
                stay confident and compliant.
              </p>
            </article>

            <article
              style={{
                background: "var(--paper)",
                border: "1px solid var(--mist)",
                borderRadius: 18,
                padding: "34px 36px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: "var(--lime-500)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                >
                  <Flame style={{ width: 24, height: 24, color: "var(--navy-900)" }} />
                </div>
                <Tag variant="lime" size="sm">
                  Half Day
                </Tag>
              </div>
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 21,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                }}
              >
                Fire Marshal
              </h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--gray-700)" }}>
                This half-day course covers how fire starts and spreads, how to assess fire risks in
                your workplace, and how to manage those risks effectively, keeping your team and
                your building safe.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHY TRAIN (navy) */}
      <section style={{ background: "var(--navy-900)", color: "var(--white)" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "84px 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Why train with{" "}
            <span style={{ color: "var(--lime-500)" }}>Berkshire Safety Consultants?</span>
          </h2>
          <p
            style={{
              margin: "0 auto 36px",
              maxWidth: "62ch",
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            We handle everything, from booking to delivery, so you don&apos;t have to. Our
            partnership with British Red Cross Training means your team receives nationally
            recognised, fully accredited qualifications, backed by one of the most trusted names in
            first aid.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                border: "1.5px solid var(--border-on-dark)",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <MapPin style={{ width: 16, height: 16, color: "var(--lime-500)" }} />
              On-site at your premises
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                border: "1.5px solid var(--border-on-dark)",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <BadgeCheck style={{ width: 16, height: 16, color: "var(--lime-500)" }} />
              Red Cross-accredited certification
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                border: "1.5px solid var(--border-on-dark)",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <CalendarCheck style={{ width: 16, height: 16, color: "var(--lime-500)" }} />
              We handle all the booking
            </span>
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
                  fontSize: "clamp(26px, 3.6vw, 40px)",
                  fontWeight: 800,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  lineHeight: 1.05,
                  color: "var(--navy-900)",
                }}
              >
                Ready to get your team trained?
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
                Get in touch today and we&apos;ll put together a package that works for your
                business.
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
