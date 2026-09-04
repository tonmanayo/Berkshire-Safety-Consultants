"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ds/Button";

// Google Analytics 4 measurement ID. This is a public, client-side identifier.
const GA_ID = "G-KYKRFJQFG5";
const COOKIE = "bsc_analytics_consent";
const ONE_YEAR = 60 * 60 * 24 * 365;

/** Event the footer link dispatches to reopen the banner. */
export const OPEN_COOKIE_SETTINGS = "bsc:open-cookie-settings";
/** Event dispatched when the stored choice changes, so the store re-reads. */
const CONSENT_CHANGED = "bsc:consent-changed";

type Choice = "granted" | "denied";
// "none" = decided nothing yet (client); "unknown" = not yet known (SSR/hydration).
type Snapshot = Choice | "none" | "unknown";

function readConsent(): Choice | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE}=(granted|denied)`));
  return match ? (match[1] as Choice) : null;
}

function writeConsent(choice: Choice) {
  document.cookie = `${COOKIE}=${choice}; max-age=${ONE_YEAR}; path=/; SameSite=Lax`;
}

// The stored choice is external client state — read it with useSyncExternalStore
// so there is no setState-in-effect and no hydration mismatch. During SSR and the
// hydration render the snapshot is "unknown", so the banner is never emitted
// server-side (no flash for returning visitors); after hydration the cookie is read.
function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_CHANGED, callback);
  return () => window.removeEventListener(CONSENT_CHANGED, callback);
}
function getSnapshot(): Snapshot {
  return readConsent() ?? "none";
}
function getServerSnapshot(): Snapshot {
  return "unknown";
}

/**
 * Cookie-consent banner + gated Google Analytics.
 *
 * Nothing from Google loads until the visitor explicitly accepts — the compliant
 * reading of UK PECR/GDPR (opt-in before analytics cookies are set). The choice is
 * remembered for a year and can be changed via the footer "Cookie preferences" link.
 */
export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const onReopen = () => setReopened(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, onReopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, onReopen);
  }, []);

  function choose(choice: Choice) {
    const hadAnalytics = typeof window !== "undefined" && "gtag" in window;
    writeConsent(choice);
    setReopened(false);
    window.dispatchEvent(new Event(CONSENT_CHANGED));
    if (choice === "denied" && hadAnalytics) window.location.reload();
  }

  const showBanner = consent === "none" || reopened;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 120,
            boxSizing: "border-box",
            background: "var(--navy-900)",
            borderTop: "2px solid var(--lime-500)",
            boxShadow: "0 -6px 28px rgba(0,0,0,0.35)",
            padding: "14px 18px calc(20px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                margin: 0,
                flex: 1,
                minWidth: "10rem",
                fontSize: 14,
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              We use analytics cookies to understand how this site is used and to improve it. It is
              your choice, and you can change it any time. See our{" "}
              <Link href="/privacy-policy" style={{ color: "var(--lime-500)" }}>
                Privacy Policy
              </Link>
              .
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button variant="secondary" size="sm" onClick={() => choose("denied")}>
                Decline
              </Button>
              <Button variant="primary" size="sm" onClick={() => choose("granted")}>
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
