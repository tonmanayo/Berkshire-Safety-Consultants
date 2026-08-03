import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ds/Button";
import { Tag } from "@/components/ds/Tag";

export const metadata = {
  title:
    "ISO 9001 vs ISO 45001 — which does my business actually need? · Berkshire Safety Consultants",
  description:
    "A straight-talking guide to ISO 9001 and ISO 45001 for SMEs — what each standard covers, when you need it, and how it affects your tender shortlisting.",
};

export default function Iso9001VsIso45001Page() {
  return (
    <>
      <section style={{ position: "relative", overflow: "hidden", background: "var(--navy-900)" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/blog-iso-9001-vs-45001.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.32,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(14,3,60,0.75) 0%, rgba(8,2,31,0.96) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            padding: "80px 24px 64px",
          }}
        >
          <Link
            href="/blog"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 26,
            }}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} />
            Back to blog
          </Link>
          <Tag variant="lime" size="sm">
            Featured
          </Tag>
          <h1
            style={{
              margin: "18px 0 20px",
              fontWeight: 800,
              fontStyle: "italic",
              textTransform: "uppercase",
              fontSize: "clamp(28px, 4.4vw, 46px)",
              lineHeight: 1.1,
              color: "var(--white)",
            }}
          >
            ISO 9001 vs ISO 45001.{" "}
            <span style={{ color: "var(--lime-500)" }}>Which does my business actually need?</span>
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 13.5,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            <span style={{ fontWeight: 700, color: "var(--lime-500)" }}>
              Berkshire Safety Consultants
            </span>
            <span>·</span>
            <span>May 19</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)", color: "var(--ink)" }}>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "64px 24px 32px",
            fontSize: 16,
            lineHeight: 1.75,
            color: "var(--gray-700)",
          }}
        >
          <p>
            If you&apos;ve ever sat down to fill in a tender response, applied for a public sector
            contract, or had a larger client ask for your &ldquo;management system
            documentation,&rdquo; you&apos;ve probably bumped into ISO 9001 and ISO 45001.
          </p>
          <p>
            And if you&apos;re like most SME owners, you&apos;ve probably also Googled some version
            of:{" "}
            <em>
              do I actually need this, or is it one of those things consultants invent to sell me
              services?
            </em>
          </p>
          <p>Fair question. Here&apos;s a straight answer.</p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            The 30-second version
          </h2>
          <ul
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              <strong>ISO 9001</strong> is about how you run your business: quality, consistency,
              doing what you say you&apos;ll do.
            </li>
            <li>
              <strong>ISO 45001</strong> is about how you keep people safe at work: staff,
              contractors, visitors, the public.
            </li>
            <li>
              They&apos;re separate certifications, audited separately, and you can hold one without
              the other.
            </li>
            <li>
              Most SMEs don&apos;t legally need either. But if you tender for work, want to win
              bigger contracts, or operate in a higher-risk industry, one or both will start
              mattering very quickly.
            </li>
          </ul>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            What ISO 9001 actually is
          </h2>
          <p>
            ISO 9001 is the international standard for quality management systems. In plain English:
            it&apos;s a framework for proving that your business has documented, repeatable
            processes for delivering whatever it is you sell — and that you actually follow them.
          </p>
          <p>
            When a client asks if you&apos;re ISO 9001 certified, what they&apos;re really asking
            is: do you have documented procedures for how you do the work? Do you measure whether
            those procedures are working? When something goes wrong, do you have a system for fixing
            it and stopping it happening again? Can you prove all of the above to an external
            auditor?
          </p>
          <p>
            It&apos;s not about being good at your job. Plenty of brilliant tradespeople and
            consultants aren&apos;t ISO 9001 certified. It&apos;s about being able to prove, on
            paper, that the way you work is consistent, measured and improvable.
          </p>
          <p>
            <strong>Who tends to need it:</strong> manufacturers and engineering firms, anyone
            supplying the public sector or NHS, construction firms tendering above a certain
            contract value, and service businesses where clients want assurance you won&apos;t drop
            the ball.
          </p>
          <p>
            <strong>Who probably doesn&apos;t need it:</strong> sole traders and very small B2C
            businesses, and pre-revenue businesses where the cost outweighs the contract value it
            unlocks.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            What ISO 45001 actually is
          </h2>
          <p>
            ISO 45001 is the international standard for occupational health and safety management
            systems. It replaced the older OHSAS 18001 in 2018 and is now the recognised global
            benchmark.
          </p>
          <p>
            What it says you need to demonstrate: you&apos;ve identified the H&amp;S risks across
            your operations properly, not on a back-of-an-envelope; you have documented controls in
            place; your workers are involved in the process, not just informed; you measure, monitor
            and review performance; and when incidents happen, you investigate, learn, and adjust.
          </p>
          <p>
            The thing that catches a lot of SME owners off guard: ISO 45001 isn&apos;t only about
            the obvious physical hazards. It also covers psychological safety, fatigue, contractor
            management, and whether your H&amp;S culture survives when the boss isn&apos;t in the
            room.
          </p>
          <p>
            <strong>Who tends to need it:</strong> construction, manufacturing, logistics,
            healthcare, and any industry with notable physical risk; anyone tendering for public
            sector, infrastructure, housing or NHS work; businesses with employees on multiple
            sites.
          </p>
          <p>
            <strong>Who probably doesn&apos;t need it yet:</strong> office-only businesses with low
            operational risk, or very small teams where a properly executed risk assessment process
            is genuinely sufficient.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            So which one do you need?
          </h2>
          <p>Honest answer: it depends on where your tenders are coming from.</p>
          <p>
            <strong>Low-risk service business, referral or repeat clients?</strong> You probably
            don&apos;t need either — a solid set of risk assessments, a method statement template,
            and decent insurance covers you.
          </p>
          <p>
            <strong>Tendering for mid-sized private sector contracts?</strong> ISO 9001 starts
            mattering — procurement teams use it as a shortlisting filter.
          </p>
          <p>
            <strong>
              Tendering for public sector, NHS, housing association or infrastructure work?
            </strong>{" "}
            Both standards start showing up in PQQs. ISO 9001 is increasingly a baseline; ISO 45001
            alongside SSIP membership (CHAS, SafeContractor, Constructionline) is what gets you onto
            framework agreements.
          </p>
          <p>
            <strong>Higher-risk industry?</strong> ISO 45001 becomes effectively expected. Your
            clients will ask, your insurers will care, and the Building Safety Act has raised
            expectations around how you demonstrate safety management.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            The tender shortlisting reality
          </h2>
          <p>
            When a procurement team is reviewing 30 tender responses, they&apos;re not reading every
            page — they&apos;re filtering. If you don&apos;t tick the accreditation boxes, you
            don&apos;t get to the section where they read your proposal. That&apos;s the actual
            commercial value of ISO certification for an SME: not the audit, not the process
            improvement — the fact that holding it means you make it past the first cut.
          </p>
          <p>
            We hold both ISO 9001 and ISO 45001 at BSC, alongside SSIP, which is why we tend to
            pre-qualify on shortlists without a second pass.
          </p>
          <h2
            style={{
              margin: "40px 0 14px",
              fontSize: 21,
              fontWeight: 800,
              color: "var(--navy-900)",
            }}
          >
            What to do next
          </h2>
          <ol
            style={{
              margin: "0 0 20px",
              paddingLeft: 22,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <li>
              Look at your last 12 months of tender losses. Were any blocked by missing
              accreditations? That&apos;s your answer.
            </li>
            <li>
              If yes, ISO 45001 is usually the higher-leverage starting point for higher-risk
              businesses; ISO 9001 for service-led ones.
            </li>
            <li>
              Before you spend anything on a certification body, get a gap analysis done.
              There&apos;s no point paying for an audit you&apos;re guaranteed to fail.
            </li>
          </ol>
          <p>
            If you&apos;re not sure where you sit on the spectrum, that&apos;s the kind of thing we
            have free 20-minute calls about. No pitch, just an honest read on whether ISO
            certification is worth your time at this stage of your business.
          </p>
        </div>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 84px" }}>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            iconRight={<ArrowRight style={{ width: 18, height: 18 }} />}
          >
            Book a call
          </Button>
        </div>
      </section>
    </>
  );
}
