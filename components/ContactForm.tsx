"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/Button";
import { CheckCircle2, Send } from "lucide-react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;
    setError(false);
    setSubmitting(true);
    try {
      // POST to the site root so Netlify Forms captures the entry (per Netlify docs).
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          firstName,
          lastName,
          email,
          message,
          subscribe: subscribe ? "yes" : "no",
        }).toString(),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--gray-700)",
    marginBottom: 8,
  };

  if (submitted) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: "var(--white)",
          border: "1.5px solid var(--lime-500)",
          borderRadius: 14,
          padding: "22px 24px",
        }}
      >
        <CheckCircle2
          style={{ width: 28, height: 28, color: "var(--accent-on-light)", flex: "none" }}
        />
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "var(--navy-900)" }}>
            Thanks — message sent!
          </div>
          <div style={{ fontSize: 14, color: "var(--gray-700)" }}>
            We&apos;ll get back to you as soon as we can.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div data-r="split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="firstName">
            First name *
          </label>
          <input
            id="firstName"
            name="firstName"
            className={styles.field}
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lastName">
            Last name *
          </label>
          <input
            id="lastName"
            name="lastName"
            className={styles.field}
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          className={styles.field}
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.field}
          style={{ resize: "vertical" }}
          rows={5}
          placeholder="Tell us a little about your project or question…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 11,
          fontSize: 14.5,
          color: "var(--gray-700)",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          name="subscribe"
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          style={{ width: 18, height: 18, accentColor: "var(--lime-600)", flex: "none" }}
        />
        Yes, subscribe me to your newsletter.
      </label>
      <div style={{ display: "inline-block" }}>
        <Button type="submit" variant="primary" size="lg" disabled={submitting}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            {submitting ? "Sending…" : "Submit"} <Send style={{ width: 17, height: 17 }} />
          </span>
        </Button>
      </div>
      {error && (
        <p style={{ margin: 0, fontSize: 14, color: "var(--danger)" }}>
          Sorry — something went wrong sending your message. Please try again, or email us directly
          at{" "}
          <a href="mailto:info@berkshiresafetyconsultants.com" style={{ color: "var(--danger)" }}>
            info@berkshiresafetyconsultants.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
