"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/Button";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "var(--font-primary)",
    fontSize: 15,
    color: "var(--ink)",
    background: "var(--white)",
    border: "1.5px solid var(--mist)",
    borderRadius: 12,
    padding: "13px 15px",
    outline: "none",
    boxSizing: "border-box",
  };

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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={labelStyle} htmlFor="firstName">
            First name *
          </label>
          <input
            id="firstName"
            style={inputStyle}
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--lime-500)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--mist)";
            }}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lastName">
            Last name *
          </label>
          <input
            id="lastName"
            style={inputStyle}
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--lime-500)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "var(--mist)";
            }}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          style={inputStyle}
          type="email"
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--lime-500)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--mist)";
          }}
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          style={{ ...inputStyle, resize: "vertical" }}
          rows={5}
          placeholder="Tell us a little about your project or question…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--lime-500)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--mist)";
          }}
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
          checked={subscribe}
          onChange={(e) => setSubscribe(e.target.checked)}
          style={{ width: 18, height: 18, accentColor: "var(--lime-600)", flex: "none" }}
        />
        Yes, subscribe me to your newsletter.
      </label>
      <div style={{ display: "inline-block" }}>
        <Button type="submit" variant="primary" size="lg">
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            Submit <Send style={{ width: 17, height: 17 }} />
          </span>
        </Button>
      </div>
    </form>
  );
}
