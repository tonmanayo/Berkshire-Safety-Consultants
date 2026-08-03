import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Berkshire Safety Consultants",
  description:
    "Privacy Policy for Berkshire Safety Consultants Ltd. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
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
            <Shield style={{ width: 16, height: 16 }} />
            Legal
          </span>
          <h1
            style={{
              margin: "0 0 14px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(34px, 5vw, 54px)",
              lineHeight: 1.04,
              color: "var(--white)",
            }}
          >
            Privacy <span style={{ color: "var(--lime-500)" }}>policy</span>
          </h1>
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            Berkshire Safety Consultants Ltd
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
            This Privacy Policy applies between you, the User of this Website, and Berkshire Safety
            Consultants Ltd, the owner and provider of this Website. Berkshire Safety Consultants
            Ltd takes the privacy of your information very seriously. This Privacy Policy applies to
            our use of any and all Data collected by us or provided by you in relation to your use
            of the Website.
          </p>
          <p>Please read this Privacy Policy carefully.</p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            1. Definitions and interpretation
          </h2>
          <p>
            <strong>Data:</strong> all information that you submit to Berkshire Safety Consultants
            Ltd via the Website.
            <br />
            <strong>Cookies:</strong> small text files placed on your device by the Website.
            <br />
            <strong>Data Protection Laws:</strong> UK GDPR and related legislation.
            <br />
            <strong>GDPR:</strong> the UK General Data Protection Regulation.
            <br />
            <strong>Berkshire Safety Consultants Ltd:</strong> 71–75 Shelton Street, Covent Garden,
            London WC2H 9JQ.
            <br />
            <strong>User:</strong> any third party using the Website not employed by or contracted
            by Berkshire Safety Consultants Ltd.
            <br />
            <strong>Website:</strong> berkshiresafetyconsultants.com and its subdomains.
          </p>
          <p>
            Interpretation: the singular includes the plural and vice versa; references to clauses
            include this Privacy Policy; a reference to a person includes companies and
            organisations; &ldquo;including&rdquo; means &ldquo;without limitation&rdquo;; section
            headings do not affect interpretation.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            2. Scope of this privacy policy
          </h2>
          <p>
            This Privacy Policy applies only to the actions of Berkshire Safety Consultants Ltd and
            Users regarding this Website. It does not extend to other websites accessible via this
            Website. Berkshire Safety Consultants Ltd is the Data Controller for the purposes of
            Data Protection Laws.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            3. Data collected
          </h2>
          <p>
            We may collect: name, job title, profession, and contact information (email, phone
            number).
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            4. How we collect data
          </h2>
          <p>
            Data is collected in two ways: data given by you directly, and data collected
            automatically via Website usage.
          </p>
          <p>
            Data provided by you includes enquiries via Website, email, telephone, post or
            otherwise, and use of our services. Automatically collected data includes IP address,
            times/dates/frequencies of Website visits, user behaviour and interactions, and cookies.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            5. Our use of data
          </h2>
          <p>
            We may use your Data for internal record keeping, improving our products and services,
            email marketing (where permitted), market research, and customising Website content.
          </p>
          <p>
            <strong>Marketing:</strong> soft opt-in may apply where permitted; explicit consent is
            required for all other marketing; consent can be withdrawn at any time.
          </p>
          <p>
            <strong>Advertising:</strong> we may display adverts for Berkshire Safety Consultants
            Ltd on third-party websites. You may disable related cookies.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            6. Who we share data with
          </h2>
          <p>
            Data may be shared with employees, agents, professional advisors, and third-party
            service providers (e.g. IT, hosting). Sharing is only done in line with this Privacy
            Policy.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            7. Keeping data secure
          </h2>
          <p>
            We use technical and organisational measures such as password-protected account access,
            secure servers, and breach response measures. Suspected misuse should be reported to{" "}
            <a href="mailto:steve@berkshiresafetyconsultants.com">
              steve@berkshiresafetyconsultants.com
            </a>
            .
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            8. Data retention
          </h2>
          <p>
            We retain Data only as long as necessary unless a longer legal retention period applies.
            Backup copies may persist for legal or regulatory purposes.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            9. Your rights
          </h2>
          <p>
            You have the right to access your Data, correct inaccurate Data, request erasure,
            restrict processing, data portability, and object to processing. Requests should be made
            via{" "}
            <a href="mailto:info@berkshiresafetyconsultants.com">
              info@berkshiresafetyconsultants.com
            </a>
            . You may complain to the ICO at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener">
              ico.org.uk
            </a>
            .
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            10. Links to other websites
          </h2>
          <p>We are not responsible for privacy practices of external websites linked from ours.</p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            11. Business ownership and control changes
          </h2>
          <p>
            If the business is transferred in full or part, Data relevant to the transferred part
            may be passed to the new owner under the terms of this Privacy Policy.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            12. Cookies
          </h2>
          <p>
            Cookies may be placed on your device to improve Website experience. Types of cookies:
            strictly necessary, functionality, and targeting/advertising. You may adjust cookie
            settings via your browser at any time.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            13. General
          </h2>
          <p>
            You may not transfer your rights under this Policy. We may transfer ours where your
            rights are unaffected. Invalid provisions are deleted without affecting the remainder.
            This Policy is governed by the law of England &amp; Wales.
          </p>

          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            14. Changes to this privacy policy
          </h2>
          <p>
            Berkshire Safety Consultants Ltd may update this Policy as required. Updates will be
            posted on the Website. Contact:{" "}
            <a href="mailto:steve@berkshiresafetyconsultants.com">
              steve@berkshiresafetyconsultants.com
            </a>
            .
          </p>

          <h2
            style={{
              margin: "48px 0 14px",
              fontSize: 22,
              fontWeight: 800,
              color: "var(--navy-900)",
              paddingTop: 20,
              borderTop: "1px solid var(--mist)",
            }}
          >
            Cookie schedule
          </h2>
          <p>
            <strong>Strictly necessary cookies:</strong> session cookies used to maintain sessions.
            <br />
            <strong>Functionality cookies:</strong> analytics cookies used to analyse traffic
            patterns.
            <br />
            <strong>Targeting cookies:</strong> cookies enabling display of relevant adverts on our
            Website and other websites.
          </p>
        </div>
      </section>
    </>
  );
}
