"use client";

import { OPEN_COOKIE_SETTINGS } from "./CookieConsent";

/** Footer link that reopens the cookie-consent banner so a choice can be changed. */
export function CookieSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS))}
      style={{
        background: "none",
        border: 0,
        padding: 0,
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "13px",
        color: "rgba(255,255,255,0.6)",
      }}
    >
      Cookie preferences
    </button>
  );
}
