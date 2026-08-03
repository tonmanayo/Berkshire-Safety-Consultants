import { Button } from "@/components/ds/Button";

export const metadata = { title: "Page not found — Berkshire Safety Consultants" };

export default function NotFound() {
  return (
    <section style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "120px 24px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <span
          style={{
            fontSize: "var(--text-xs)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-wider)",
            color: "var(--accent-on-light)",
          }}
        >
          Page not found
        </span>
        <h1
          style={{
            margin: 0,
            fontWeight: 800,
            fontStyle: "italic",
            textTransform: "uppercase",
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.05,
            color: "var(--navy-900)",
          }}
        >
          This page isn&rsquo;t here
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "var(--text-lg)",
            color: "var(--gray-700)",
            maxWidth: "34rem",
          }}
        >
          The page you were looking for may have moved. Let&rsquo;s get you back on solid ground.
        </p>
        <Button href="/" variant="primary" size="lg">
          Back to home
        </Button>
      </div>
    </section>
  );
}
