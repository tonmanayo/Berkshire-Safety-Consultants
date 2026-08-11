import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";

export const metadata = {
  alternates: { canonical: "/blog/toolbox-talks" },
  title: "Toolbox talks · Berkshire Safety Consultants",
  description:
    "Short, informal toolbox talks are fundamental to building a strong safety culture — how to run them effectively and why they matter.",
};

export default function ToolboxTalksPage() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-toolbox-talks.png')",
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
            Toolbox <span style={{ color: "var(--lime-500)" }}>talks</span>
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
            <span>May 29, 2025</span>
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
            Following the launch of our free Health &amp; Safety Resource Hub, we wanted to delve
            deeper into one of the most vital tools for promoting workplace safety: toolbox talks.
            These short, informal meetings are more than just a tick-box exercise; they&apos;re a
            fundamental element in building a strong safety culture.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Why are toolbox talks so important?
          </h2>
          <p>
            In today&apos;s fast-paced work environments, safety can sometimes take a backseat.
            However, the consequences of overlooking safety protocols can be severe. Toolbox talks
            serve as a crucial reminder of potential hazards and reinforce the importance of safe
            working practices.
          </p>
          <p>Here&apos;s why they matter:</p>
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
              They encourage open discussions about potential hazards specific to the day&apos;s
              tasks, allowing for immediate mitigation of risks and preventing accidents before they
              occur.
            </li>
            <li>
              Regular toolbox talks keep safety at the forefront of everyone&apos;s minds, and
              reiterate essential safety procedures.
            </li>
            <li>
              They foster a culture of open communication, where workers feel comfortable raising
              safety issues and asking questions.
            </li>
            <li>
              They offer an opportunity to clarify complex rules and ensure everyone understands
              their responsibilities.
            </li>
            <li>
              When employees feel their safety is a priority, it boosts morale and creates a
              positive work environment.
            </li>
            <li>
              Keeping records of toolbox talks demonstrates a commitment to safety and can be
              valuable in the event of an incident or inspection.
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
            Making toolbox talks effective
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
            <li>Short, focused talks are more engaging and easier to remember.</li>
            <li>Tailor the content to the specific tasks and hazards at hand.</li>
            <li>
              Create an open and interactive environment where everyone feels comfortable
              contributing.
            </li>
            <li>Visual aids, such as diagrams and photos, help reinforce key messages.</li>
            <li>Keep records of the topics covered, attendees, and any action items.</li>
          </ul>
          <p>
            Take the next step towards a safer workplace and make toolbox talks a cornerstone of
            your safety strategy.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
