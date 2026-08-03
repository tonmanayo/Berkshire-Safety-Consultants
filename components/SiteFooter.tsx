import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--navy-950)",
        color: "var(--white)",
        borderTop: "1px solid var(--border-on-dark)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div style={{ height: "5px" }} className="bsc-hazard-stripes" />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 24px 36px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: "40px",
        }}
      >
        {/* Column 1: Logo + Contact */}
        <div>
          <Logo tone="onDark" size="md" />
          <div style={{ marginTop: "24px" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--lime-500)",
                marginBottom: "10px",
              }}
            >
              Head Office
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.82)",
                marginBottom: "8px",
              }}
            >
              <MapPin style={{ width: "16px", height: "16px", color: "var(--lime-500)" }} />
              Maidenhead, Berkshire
            </div>
            <a
              href="tel:+447856580182"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
                marginBottom: "8px",
              }}
            >
              <Phone style={{ width: "16px", height: "16px", color: "var(--lime-500)" }} />
              +44 78565 80182
            </a>
            <a
              href="mailto:info@berkshiresafetyconsultants.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "15px",
                color: "rgba(255,255,255,0.82)",
                textDecoration: "none",
              }}
            >
              <Mail style={{ width: "16px", height: "16px", color: "var(--lime-500)" }} />
              Send us an email
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lime-500)",
              marginBottom: "16px",
            }}
          >
            Navigation
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <Link
              href="/services"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Services
            </Link>
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              About us
            </Link>
            <Link
              href="/contact"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Column 3: Follow us */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lime-500)",
              marginBottom: "16px",
            }}
          >
            Follow us
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <a
              href="https://www.facebook.com/Berkshire1"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "16px", height: "16px", flex: "none" }}
              >
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/berkshire-safety-consultants/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                textDecoration: "none",
                fontSize: "15px",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ width: "16px", height: "16px", flex: "none" }}
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Column 4: Get started */}
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--lime-500)",
              marginBottom: "16px",
            }}
          >
            Get started
          </div>
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "14px",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Practical H&S advice, plainly explained. Let&apos;s have a chat.
          </p>
          <Button href="/contact" variant="primary" size="sm">
            Contact
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border-on-dark)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <Link
              href="/accessibility-statement"
              style={{
                textDecoration: "none",
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Accessibility Statement
            </Link>
            <Link
              href="/privacy-policy"
              style={{
                textDecoration: "none",
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              Privacy Policy
            </Link>
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
            &copy; 2023 &ndash; 2026 by Troika Digital
          </div>
        </div>
      </div>
    </footer>
  );
}
