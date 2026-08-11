import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  alternates: { canonical: "/blog/prioritising-mental-health" },
  title: "Prioritising mental health: a manager's guide · Berkshire Safety Consultants",
  description:
    "Key strategies for managers to prioritise and support mental health within their teams, building a healthier and more resilient workplace.",
};

export default function PriorisingMentalHealthPage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-mental-health-managers-guide.png')",
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
              fontSize: "clamp(26px, 4vw, 42px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            Prioritising mental health:{" "}
            <span style={{ color: "var(--lime-500)" }}>a manager&apos;s guide</span>
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
            <span>Jan 29, 2025</span>
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
            Mental health is a critical aspect of employee wellbeing, and managers play a vital role
            in fostering a supportive and healthy work environment. Prioritising mental health is
            not just the right thing to do — it&apos;s also good business. By creating a supportive
            and inclusive work environment, managers can significantly improve employee wellbeing,
            reduce absenteeism, and boost productivity.
          </p>
          <p>
            Here are key strategies for managers to prioritise mental health within their teams,
            drawing connections to relevant e-learning courses we offer at Berkshire Safety
            Consultants.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Regular check-ins
          </h2>
          <p>
            Implement regular one-on-one meetings with team members to foster open communication.
            These check-ins should go beyond performance reviews and provide a safe space for
            employees to discuss their workloads, challenges, and any concerns they may have.{" "}
            <em>
              Related e-learning: effective communication, active listening, and building strong
              relationships.
            </em>
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Promote openness
          </h2>
          <p>
            Encourage open discussions about mental health within the team. Normalise conversations
            around stress, anxiety, and other mental health challenges.{" "}
            <em>Related e-learning: health and wellbeing, lifestyle management, and nutrition.</em>
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Practical support
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
              <strong>Offer flexible working arrangements</strong> where possible, to accommodate
              individual needs and preferences.
            </li>
            <li>
              <strong>Provide access to resources</strong> — make employees aware of employee
              assistance programmes (EAPs), mental health first aiders, and counselling services.
            </li>
            <li>
              <strong>Model healthy behaviours</strong> yourself, such as taking breaks, setting
              boundaries, and prioritising self-care.
            </li>
            <li>
              <strong>Openly discuss your own mental health</strong>, if comfortable, to encourage
              open dialogue within the team.
            </li>
          </ul>
          <p>
            Prioritising mental health is not just the right thing to do; it&apos;s also good
            business. By creating a supportive and inclusive work environment, managers can
            significantly improve employee wellbeing, reduce absenteeism, and boost productivity.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/e-learning"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Explore e-learning packages
          </Button>
        </div>
      </section>
    </>
  );
}
