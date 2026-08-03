import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  title:
    "Cultivating compassion and reducing stress in your workplace · Berkshire Safety Consultants",
  description:
    "April marks Stress Awareness Month — reflecting on the impact of stress in the workplace and practical ways to #LeadWithLove and build healthier work environments.",
};

export default function CultivatingCompassionPage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-cultivating-compassion.png')",
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
            Cultivating compassion and{" "}
            <span style={{ color: "var(--lime-500)" }}>reducing stress</span> in your workplace
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
            <span>Apr 14, 2025</span>
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
            April marks Stress Awareness Month — a crucial time to reflect on the impact of stress
            in our lives, particularly in the workplace. This year&apos;s theme, #LeadWithLove,
            resonates deeply with us at Berkshire Safety Consultants. It&apos;s a powerful reminder
            that kindness, empathy, and compassion aren&apos;t just soft skills — they&apos;re
            essential tools for building healthier, more resilient work environments.
          </p>
          <p>
            Stress is more than just a feeling of being overwhelmed. It&apos;s a significant health
            and safety risk that can lead to decreased productivity, increased absenteeism, and
            long-term health issues. As health and safety professionals, we recognise that
            addressing stress is not only a legal and ethical obligation but also a vital component
            of creating a thriving workplace.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            #LeadWithLove: practical applications for your business
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
              <strong>Active listening:</strong> create a culture where employees feel heard and
              valued. Encourage open dialogue and provide safe spaces for communication.
            </li>
            <li>
              <strong>Support systems:</strong> foster a sense of community by promoting mutual
              support and collaboration. Encourage team-building activities and peer support
              networks.
            </li>
            <li>
              <strong>Recognition and appreciation:</strong> acknowledge and celebrate the
              contributions of your employees — simple gestures go a long way.
            </li>
            <li>
              <strong>Risk assessments focusing on psychosocial hazards:</strong> ensure assessments
              cover the stress-inducing aspects of the workplace, not just physical hazards.
            </li>
            <li>
              <strong>Stress management training:</strong> provide comprehensive training for all
              employees on stress management techniques.
            </li>
            <li>
              <strong>Flexible working:</strong> where possible, offer flexible working
              arrangements.
            </li>
            <li>
              <strong>Clear communication channels:</strong> ensure staff know who to speak to when
              they have concerns.
            </li>
            <li>
              <strong>Manager training:</strong> ensure managers can recognise the signs of stress
              in their staff and know how to support them.
            </li>
          </ul>
          <p>
            At Berkshire Safety Consultants, we are committed to helping businesses create safe,
            healthy, and supportive work environments. We can assist with developing and
            implementing stress management policies, conducting comprehensive risk assessments,
            providing training and workshops on stress management, and offering guidance on creating
            a positive workplace culture.
          </p>
          <p>
            This Stress Awareness Month, let&apos;s embrace the #LeadWithLove ethos and prioritise
            compassion in our workplaces. By taking proactive steps to manage stress and foster a
            supportive environment, we can create a healthier, more productive, and fulfilling work
            experience for everyone.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
