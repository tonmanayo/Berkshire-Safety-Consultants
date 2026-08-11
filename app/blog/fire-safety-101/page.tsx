import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  alternates: { canonical: "/blog/fire-safety-101" },
  title: "Fire safety 101 for homes · Berkshire Safety Consultants",
  description:
    "Simple, practical fire safety steps for homes — reducing risks, installing the right detectors, and planning your escape route.",
};

export default function FireSafety101Page() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-fire-safety-101.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.75) 0%, rgba(8,2,31,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px 24px 64px",
          }}
        >
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 26,
            }}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} />
            Back to blog
          </Link>
          <h1
            style={{
              margin: "0 0 20px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(28px, 4.4vw, 46px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Fire safety 101 <span style={{ color: "var(--lime-500)" }}>for homes</span>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--lime-500)" }}>
              Berkshire Safety Consultants
            </span>
            <span>·</span>
            <span>Jul 24, 2024</span>
            <span>·</span>
            <span>2 min read</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "64px 24px 32px",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--gray-700)",
          }}
        >
          <p>
            Imagine a peaceful evening enjoying a film with the family, the aroma of freshly popped
            popcorn filling the air. Suddenly, the shrill cry of the smoke alarm pierces the calm.
            Is it a burnt kernel or something more serious? While a false alarm is always a relief,
            it serves as a powerful reminder of the importance of fire safety. Here at Berkshire
            Safety Consultants, we empower families to create a safe and secure home environment.
          </p>
          <p>
            Let&apos;s take control and prevent that popcorn incident from turning into a real
            disaster.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Reduce the risks
          </h2>
          <ul
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              Keep flammable liquids and materials, like petrol or paint thinners, far away from
              heat sources like cookers, heaters, and even pilot lights.
            </li>
            <li>
              Frayed wires and overloaded outlets are fire hazards. Regularly inspect your
              appliances and cords, and avoid plugging too many things into one outlet.
            </li>
            <li>
              Smoking materials are a leading cause of fires. Establish specific outdoor smoking
              areas and ensure cigarettes are properly extinguished in ashtrays before disposal.
            </li>
          </ul>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Detection matters
          </h2>
          <p>
            Install smoke detectors in every room, particularly bedrooms. Test them monthly with a
            quick press of the button, and remember to replace the batteries annually. For larger
            homes, consider interconnected smoke alarms — when one sounds, they all do, giving you
            time to evacuate.
          </p>
          <p>
            Carbon monoxide is an odourless gas that can be deadly. Install carbon monoxide
            detectors near fuel-burning appliances like boilers or fireplaces.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Have an escape plan
          </h2>
          <p>
            Think of your escape plan as a fire drill for your home — a well-rehearsed strategy for
            everyone to reach safety quickly. Plan multiple escape routes from every room, agree a
            meeting point outside, and practise it as a family so everyone knows exactly what to do
            if the alarm ever means business.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/first-aid-fire-marshal-training"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Fire marshal training
          </Button>
        </div>
      </section>
    </>
  );
}
