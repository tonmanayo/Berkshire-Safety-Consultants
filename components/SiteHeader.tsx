"use client";

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Store, Compass, HeartPulse, ChevronDown, Menu, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/ds/Logo";
import { Button } from "@/components/ds/Button";
import { NAV, SERVICES } from "@/lib/nav";
import styles from "./SiteHeader.module.css";

// Map lucide icon name strings → components
const ICON_MAP: Record<string, LucideIcon> = {
  "building-2": Building2,
  store: Store,
  compass: Compass,
  "heart-pulse": HeartPulse,
};

// Derive a NAV/SERVICES key from the current pathname
function keyFromPathname(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/housing-associations")) return "housing";
  if (pathname.startsWith("/small-businesses")) return "small-business";
  if (pathname.startsWith("/principal-designer-services")) return "pds";
  if (pathname.startsWith("/first-aid-fire-marshal-training")) return "training";
  return "";
}

// Inline style helpers
const NAV_LINK_BASE: CSSProperties = {
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: 600,
  letterSpacing: "0.02em",
};

const DROPDOWN_ITEM_BASE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 14px",
  borderRadius: "9px",
  textDecoration: "none",
  color: "var(--white)",
  fontSize: "14px",
  fontWeight: 600,
};

export interface SiteHeaderProps {
  active?: string;
}

export function SiteHeader({ active }: SiteHeaderProps) {
  const pathname = usePathname();
  const current = active ?? keyFromPathname(pathname);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape — empty deps: unconditional setMobileOpen(false) is a no-op when already closed
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, []);

  function linkColor(key: string): string {
    return current === key ? "var(--lime-500)" : "rgba(255,255,255,0.9)";
  }

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(14,3,60,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          fontFamily: "var(--font-primary)",
        }}
      >
        {/* Hazard stripe top bar */}
        <div className="bsc-hazard-stripes" style={{ height: "5px" }} />

        {/* Inner row */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Logo tone="onDark" size="sm" />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className={styles.desktopNav}>
            {/* Home */}
            <Link href="/" style={{ ...NAV_LINK_BASE, color: linkColor("home") }}>
              Home
            </Link>

            {/* Services with dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
              }}
            >
              <Link
                href="/services"
                style={{
                  ...NAV_LINK_BASE,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: linkColor("services"),
                }}
              >
                Services <ChevronDown style={{ width: "16px", height: "16px" }} />
              </Link>

              {servicesOpen && (
                <div
                  role="menu"
                  style={{
                    position: "absolute",
                    top: "calc(100% + 14px)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    minWidth: "300px",
                    background: "var(--navy-800)",
                    border: "1px solid var(--border-on-dark)",
                    borderRadius: "14px",
                    padding: "10px",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  {SERVICES.map((svc) => {
                    const Icon = ICON_MAP[svc.icon];
                    return (
                      <Link
                        key={svc.key}
                        href={svc.href}
                        role="menuitem"
                        style={DROPDOWN_ITEM_BASE}
                      >
                        {Icon && (
                          <Icon
                            style={{
                              width: "18px",
                              height: "18px",
                              color: "var(--lime-500)",
                            }}
                          />
                        )}
                        {svc.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* About us */}
            <Link href="/about" style={{ ...NAV_LINK_BASE, color: linkColor("about") }}>
              About us
            </Link>

            {/* Blog */}
            <Link href="/blog" style={{ ...NAV_LINK_BASE, color: linkColor("blog") }}>
              Blog
            </Link>
          </nav>

          {/* Contact button (desktop) — hidden at ≤900px via desktopCta class */}
          <Button href="/contact" variant="primary" size="sm" className={styles.desktopCta}>
            Contact
          </Button>

          {/* Mobile burger button — hidden at desktop via CSS module; visible on small screens */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "var(--white)",
              padding: "4px",
            }}
            className={styles.burger}
          >
            <Menu style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div
          aria-modal="true"
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 70,
            background: "rgba(14,3,60,0.98)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            overflowY: "auto",
          }}
        >
          {/* Close button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "32px",
            }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--white)",
                padding: "4px",
              }}
            >
              <X style={{ width: "24px", height: "24px" }} />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav
            aria-label="Mobile navigation"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  ...NAV_LINK_BASE,
                  fontSize: "18px",
                  padding: "12px 0",
                  color: linkColor(item.key),
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Services sub-list in mobile */}
            <div
              style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}
            >
              {SERVICES.map((svc) => {
                const Icon = ICON_MAP[svc.icon];
                return (
                  <Link
                    key={svc.key}
                    href={svc.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      ...DROPDOWN_ITEM_BASE,
                      fontSize: "15px",
                      color: linkColor(svc.key),
                    }}
                  >
                    {Icon && (
                      <Icon
                        style={{
                          width: "18px",
                          height: "18px",
                          color: "var(--lime-500)",
                        }}
                      />
                    )}
                    {svc.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Contact button in mobile */}
          <div style={{ marginTop: "32px" }}>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              fullWidth
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
