"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What is Berkshire Safety Consultants?",
    a: "We are a UK-based health and safety consultancy headquartered in Maidenhead, Berkshire. We provide expert, practical safety solutions for housing associations, small businesses, and construction projects, helping organisations stay compliant and keep their people safe.",
  },
  {
    q: "What areas do you cover?",
    a: "Whilst we are based in Berkshire, we work with clients across the UK. Please get in touch to discuss your location and requirements.",
  },
  {
    q: "What services do you offer?",
    a: "We offer a range of health and safety services including consultancy for housing associations, support for small and medium businesses, Principal Designer services under the CDM Regulations 2015, and online e-learning training courses in partnership with iHasco.",
  },
  {
    q: "What is a Principal Designer and do I need one?",
    a: "Under the CDM Regulations 2015 and the Building Safety Act, a Principal Designer is legally required on most construction projects involving more than one contractor. They coordinate health and safety during the pre-construction phase. We can act as your Principal Designer to ensure full compliance.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. We understand that health and safety can feel overwhelming for small business owners. We offer straightforward, cost-effective solutions tailored to your size and industry, giving you peace of mind without adding to your workload.",
  },
  {
    q: "What online training courses do you offer?",
    a: "In partnership with iHasco, we offer access to over 160 approved online workplace training courses in more than 43 languages, covering everything from fire safety to manual handling and mental health awareness,  ideal for achieving compliance quickly and cost-effectively.",
  },
  {
    q: "Are you qualified and accredited?",
    a: "Yes. We hold ISO 9001 and ISO 45001 accreditations and are an SSIP-approved supplier. Our team includes NEBOSH-qualified professionals with TechIOSH status, so you can trust that we meet high standards of quality, health and safety, and professional competence.",
  },
  {
    q: "How do I get a quote?",
    a: "Simply visit our Contact page or call us on +44 78565 80182 and we'll be happy to discuss your needs and provide a tailored quote for your project.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We have particular expertise in housing associations, construction, and small to medium-sized businesses. However, our consultants have experience across a wide range of sectors. Feel free to get in touch to discuss your specific industry.",
  },
  {
    q: "Why choose Berkshire Safety Consultants over a larger firm?",
    a: "We offer the expertise of a large consultancy with the personal, attentive service of a specialist firm. Every client receives tailored advice rather than a one-size-fits-all approach, and we pride ourselves on building long-term relationships built on trust and results.",
  },
];

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
            {isOpen && (
              <div
                style={{
                  padding: "0 26px 24px",
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: "var(--gray-700)",
                }}
              >
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
