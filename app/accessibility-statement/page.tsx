import { Accessibility } from "lucide-react";

export const metadata = {
  title: "Accessibility Statement — Berkshire Safety Consultants",
  description:
    "Accessibility statement for berkshiresafetyconsultants.com. Our commitment to making this website accessible to everyone, including people with disabilities.",
};

export default function AccessibilityStatementPage() {
  return (
    <>
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
            maxWidth: 1000,
            margin: "0 auto",
            padding: "88px 24px 68px",
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
            <Accessibility style={{ width: 16, height: 16 }} />
            Legal
          </span>
          <h1
            style={{
              margin: "0 0 14px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(30px, 4.6vw, 50px)",
              lineHeight: 1.04,
              color: "var(--white)",
            }}
          >
            Accessibility <span style={{ color: "var(--lime-500)" }}>statement</span>
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            Last updated 23 July 2026 — reviewed annually
          </p>
        </div>
      </section>

      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 820,
            margin: "0 auto",
            padding: "72px 24px 90px",
            fontSize: 15.5,
            lineHeight: 1.75,
            color: "var(--gray-700)",
          }}
        >
          <p>
            Berkshire Safety Consultants is committed to making our website (
            <a href="https://www.berkshiresafetyconsultants.com/" target="_blank" rel="noopener">
              berkshiresafetyconsultants.com
            </a>
            ) accessible to everyone, including people with disabilities. This commitment reflects
            our core value of Your Safety &amp; Care, ensuring a secure and usable experience for
            all visitors.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            What web accessibility is
          </h2>
          <p>
            An accessible website allows visitors with disabilities to browse with the same or a
            similar level of ease and enjoyment as other visitors. This is achieved by optimising
            the site&apos;s structure, design, and compatibility with assistive technologies.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Our approach to accessibility
          </h2>
          <p>
            We have designed and built this site with the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA in mind. As part of this effort, we have:
          </p>
          <ul
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <li>
              <strong>Language and structure</strong> — set the site&apos;s language to UK English
              and used clear, logical heading structures (H1, H2, H3) throughout to support screen
              reader navigation.
            </li>
            <li>
              <strong>Visual contrast</strong> — used colour combinations (dark navy #0e033c on
              white #ffffff) that meet WCAG AA contrast requirements for primary content. Where text
              appears on our highlight colour (#d0e156), we use the dark navy text colour to
              maintain sufficient contrast.
            </li>
            <li>
              <strong>Keyboard navigation</strong> — structured page content in a logical order to
              support keyboard-only navigation.
            </li>
            <li>
              <strong>Imagery</strong> — added descriptive alternative text to non-decorative images
              and visual elements so screen readers can convey their meaning.
            </li>
            <li>
              <strong>Code quality</strong> — used accessibility and code-quality tools during
              development to identify and fix issues and ensure clean, standards-compliant markup.
            </li>
          </ul>
          <p>
            We treat accessibility as an ongoing process rather than a one-off task, and we continue
            to test and improve the site over time.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Known limitations
          </h2>
          <p>
            Some pages on our site include content or functionality provided by third-party tools —
            for example, our contact form provider, social media embeds, or embedded e-learning
            content. We choose providers who share our commitment to accessibility, but we cannot
            guarantee full compliance for code and content that operates outside our direct control.
            Pages primarily affected include:
          </p>
          <ul
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <li>/contact</li>
            <li>Pages with embedded e-learning links (Resources/Insights)</li>
          </ul>
          <p>
            We will continue to work with our providers and monitor these areas as standards and
            tools evolve.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            Requests, issues and suggestions
          </h2>
          <p>
            We are continually working to improve the accessibility of our website. If you encounter
            an accessibility barrier, need an alternative format for any document, or have
            suggestions for improvement, please contact our accessibility coordinator:
          </p>
          <p
            style={{
              margin: "0 0 20px",
              padding: "20px 24px",
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 14,
            }}
          >
            <strong style={{ color: "var(--navy-900)" }}>Accessibility Coordinator:</strong> Ashton
            Mack
            <br />
            <strong style={{ color: "var(--navy-900)" }}>Email:</strong>{" "}
            <a href="mailto:accessibility@berkshiresafetyconsultants.com">
              accessibility@berkshiresafetyconsultants.com
            </a>
          </p>
          <p>
            We aim to respond to accessibility queries as quickly as possible and will do our best
            to provide the information or access you need in a suitable alternative format.
          </p>
        </div>
      </section>
    </>
  );
}
