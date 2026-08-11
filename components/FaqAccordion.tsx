"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/app/faq/faqs";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              background: "var(--paper)",
              border: "1px solid var(--mist)",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 20,
                padding: "22px 26px",
                cursor: "pointer",
                width: "100%",
                background: "none",
                border: "none",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "var(--navy-900)",
                  lineHeight: 1.35,
                }}
              >
                {item.q}
              </span>
              {isOpen ? (
                <Minus
                  style={{ width: 22, height: 22, color: "var(--accent-on-light)", flex: "none" }}
                />
              ) : (
                <Plus
                  style={{ width: 22, height: 22, color: "var(--accent-on-light)", flex: "none" }}
                />
              )}
            </button>
            <div
              id={`faq-answer-${i}`}
              hidden={!isOpen}
              style={{
                padding: "0 26px 24px",
                fontSize: 15.5,
                lineHeight: 1.7,
                color: "var(--gray-700)",
              }}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
