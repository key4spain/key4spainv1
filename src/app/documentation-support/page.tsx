import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/documentation-support",
  },
  title: "Documentation Support in Spain | Administrative Coordination | Key4Spain",
  description:
    "Key4Spain helps international clients organize Spanish documentation questions, administrative preparation, appointments, and referrals to licensed professionals or official institutions where required.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/documentation-support",
    title: "Documentation Support in Spain | Administrative Coordination | Key4Spain",
    description:
      "Key4Spain helps international clients organize Spanish documentation questions, administrative preparation, appointments, and referrals to licensed professionals or official institutions where required.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Documentation Support in Spain — Key4Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title: "Documentation Support in Spain | Administrative Coordination | Key4Spain",
    description:
      "Key4Spain helps international clients organize Spanish documentation questions, administrative preparation, appointments, and referrals to licensed professionals or official institutions where required.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/documentation-support#webpage",
      url: "https://key4spain.com/documentation-support",
      name: "Documentation Support in Spain",
      description:
        "Key4Spain helps international clients organize Spanish documentation questions, administrative preparation, appointments, and referrals to licensed professionals or official institutions where required.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/#service-documentation-coordination" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/documentation-support#service",
      name: "Documentation Support in Spain",
      serviceType: "Documentation and Administrative Coordination",
      url: "https://key4spain.com/documentation-support",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      description:
        "Support in organizing required information, intake documents, appointments, and introductions to independent licensed professionals or official institutions where needed.",
    },
  ],
};

const coordinationCoverage = [
  {
    title: "Document and question organization",
    description:
      "Helping clients identify which documents they have, what may be missing, and what questions need professional or official confirmation before moving forward.",
  },
  {
    title: "Appointment and next-step preparation",
    description:
      "Practical preparation for what to expect from administrative appointments and how to approach next steps in an organized way.",
  },
  {
    title: "NIE and residency question routing",
    description:
      "Clarifying which questions belong to which professional or official institution — NIE, residency, and related matters are routed to the appropriate licensed or official party.",
  },
  {
    title: "Property purchase documentation context",
    description:
      "Contextual preparation for the documentation aspects of a Spanish property process, coordinated alongside legal and notarial professionals where required.",
  },
  {
    title: "Banking, insurance, utilities, and local services",
    description:
      "Preparation support and local coordination for banking setup, insurance questions, utilities, and practical local service arrangements.",
  },
  {
    title: "Professional and official institution referrals",
    description:
      "Where regulated or official input is required, Key4Spain coordinates introductions to independent licensed professionals or appropriate official institutions.",
  },
];

const clientTypes = [
  "International buyers preparing for a Spanish property purchase process",
  "Families relocating to Spain who have multiple administrative questions",
  "Non-residents trying to understand which questions to ask and who to ask them to",
  "Entrepreneurs and remote workers coordinating local setup in Spain",
  "Clients with multiple overlapping administrative needs and no clear sequence",
  "Clients who need help identifying when and where professional support is required",
];

const scopeItems = [
  "Key4Spain does not provide legal, immigration, tax, notarial, banking, insurance, medical, school admission, financial, or regulated professional advice.",
  "Key4Spain does not file visa, residence, tax, legal, banking, insurance, or government applications.",
  "Key4Spain does not guarantee NIE issuance, residency approval, visa approval, appointment availability, bank account opening, school admission, insurance approval, property completion, or any administrative outcome.",
  "Key4Spain does not replace lawyers, tax advisors, immigration specialists, notaries, banks, insurers, schools, medical providers, administrative offices, official authorities, or other regulated professionals.",
  "Regulated and official matters are handled by independent licensed professionals, service providers, or official institutions — not Key4Spain.",
];

const processSteps = [
  {
    n: "1",
    title: "Complete the Documentation Brief",
    desc: "Share your situation, target area, timeline, documentation questions, any appointments already attempted, and areas of uncertainty.",
  },
  {
    n: "2",
    title: "Key4Spain reviews your brief",
    desc: "Your brief is reviewed and assessed. A structured response is prepared based on the scope and nature of your administrative questions.",
  },
  {
    n: "3",
    title: "You receive a structured next step",
    desc: "The next step may be a clarification question, a planning reply, coordination support, or a referral to an independent professional or official institution.",
  },
  {
    n: "4",
    title: "Licensed professionals and institutions where needed",
    desc: "Where regulated or official matters arise — legal, immigration, tax, notarial, banking — appropriate independent professionals or institutions are introduced.",
  },
];

const exploreLinks = [
  {
    href: "/relocation-spain",
    label: "Relocation Support",
    desc: "Coordinated relocation support for families, professionals, and entrepreneurs.",
  },
  {
    href: "/property-advisory",
    label: "Property Advisory",
    desc: "Structured buyer-side advisory and search coordination for international clients.",
  },
  {
    href: "/investment-spain",
    label: "Investment Perspective",
    desc: "Practical investment-oriented context for clients evaluating Spanish property.",
  },
  {
    href: "/how-it-works",
    label: "How Key4Spain Works",
    desc: "The step-by-step process from brief to coordination.",
  },
];

export default function DocumentationSupportPage() {
  return (
    <>
      <Header />
      <JsonLd schema={pageSchema} />
      <main>

        {/* Hero */}
        <section
          className="relative pt-[68px] overflow-hidden"
          style={{ background: "#030810" }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 75% 70% at 100% 0%, rgba(200,164,93,0.18) 0%, transparent 55%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 0% 100%, rgba(200,164,93,0.06) 0%, transparent 50%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                Documentation Support
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Documentation and administrative coordination for international clients in Spain.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              Spanish administration can feel fragmented for international clients,
              especially when property, relocation, residency questions, banking,
              insurance, schools, and local services are connected. Key4Spain helps
              clients organize their questions, documents, appointments, and referral
              needs before they move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={links.documentationBrief}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Start with a Documentation Brief
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-[15px] text-sm tracking-[0.06em] transition-colors duration-200 text-center text-gold hover:bg-gold/[0.08]"
                style={{ border: "1px solid rgba(200,164,93,0.55)" }}
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Why documentation needs structure */}
        <section
          className="relative py-24 md:py-32"
          style={{
            background:
              "linear-gradient(160deg, #F6F0E6 0%, #EEE6D4 60%, #E8DFC8 100%)",
            borderTop: "1px solid rgba(7,17,31,0.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(200,164,93,0.09) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
                  <span
                    className="text-[10px] uppercase tracking-[0.40em] font-medium"
                    style={{ color: "#C8A45D" }}
                  >
                    Why structure matters
                  </span>
                </div>
                <h2
                  className="font-serif font-normal leading-tight mb-7"
                  style={{
                    color: "#07111F",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  Administration in Spain requires more than a checklist.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    International clients often do not know which documentation questions
                    belong to which professional or institution. Property purchase,
                    relocation, residency questions, banking, utilities, insurance,
                    schools, and local services each have their own requirements — and
                    they frequently overlap.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    A structured brief helps clarify what is already known, what may be
                    missing, and what needs to be verified by a licensed professional or
                    official institution before any next step is taken. Attempting the
                    wrong step first can create delays and unnecessary complications.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Key4Spain provides administrative coordination and preparation
                    support. Legal, immigration, tax, notarial, banking, insurance,
                    medical, school admission, and other regulated or official matters
                    are handled by independent licensed professionals, service providers,
                    or official institutions where required.
                  </p>
                </div>
              </div>
              <div
                className="p-8 md:p-10"
                style={{
                  background: "white",
                  borderLeft: "4px solid #C8A45D",
                  boxShadow:
                    "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-[0.30em] font-medium mb-6"
                  style={{ color: "rgba(200,164,93,0.75)" }}
                >
                  What this service provides
                </p>
                {[
                  "Administrative coordination — not legal or immigration advice",
                  "Document and question organization before next steps",
                  "Clarity on which questions go to which professional or institution",
                  "Appointment preparation and administrative context",
                  "Referrals to independent licensed professionals where required",
                ].map((item, i, arr) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 py-4"
                    style={{
                      borderBottom:
                        i < arr.length - 1
                          ? "1px solid rgba(7,17,31,0.07)"
                          : "none",
                    }}
                  >
                    <span
                      className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#C8A45D" }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(7,17,31,0.65)" }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What documentation coordination can cover */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: "#06101E",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 70% at 100% 40%, rgba(200,164,93,0.09) 0%, transparent 58%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                  What it covers
                </span>
              </div>
              <h2
                className="font-serif font-normal text-cream leading-tight max-w-xl"
                style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
              >
                What documentation coordination can include.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinationCoverage.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 p-8 md:p-9"
                  style={{
                    background: "#040C18",
                    border: "1px solid rgba(200,164,93,0.18)",
                    borderLeft: "4px solid rgba(200,164,93,0.55)",
                    boxShadow:
                      "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <h3 className="text-[15px] text-cream font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-xs text-muted/40 mt-10 max-w-2xl leading-relaxed pt-8"
              style={{ borderTop: "1px solid rgba(200,164,93,0.08)" }}
            >
              The scope of coordination support depends on the client&apos;s situation
              and brief. Not all elements apply to every engagement. Regulated and
              official matters are always handled by the appropriate independent
              licensed professionals or official institutions — not Key4Spain.
            </p>
          </div>
        </section>

        {/* Who this is for + Geographic focus */}
        <section
          className="relative py-24 md:py-32"
          style={{
            background:
              "linear-gradient(160deg, #EDE4D2 0%, #E4D9C4 60%, #DECFB8 100%)",
            borderTop: "1px solid rgba(7,17,31,0.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 65% 50% at 50% 110%, rgba(200,164,93,0.08) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
                  <span
                    className="text-[10px] uppercase tracking-[0.40em] font-medium"
                    style={{ color: "#C8A45D" }}
                  >
                    Who this is for
                  </span>
                </div>
                <h2
                  className="font-serif font-normal leading-tight mb-8"
                  style={{
                    color: "#07111F",
                    fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)",
                  }}
                >
                  International clients navigating Spanish administration.
                </h2>
                <ul className="space-y-3">
                  {clientTypes.map((type) => (
                    <li key={type} className="flex items-start gap-4">
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#C8A45D" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(7,17,31,0.65)" }}
                      >
                        {type}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-6 lg:pt-[68px]">
                <div
                  className="p-8 md:p-10"
                  style={{
                    background: "white",
                    borderLeft: "4px solid #C8A45D",
                    boxShadow:
                      "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.30em] font-medium mb-5"
                    style={{ color: "rgba(200,164,93,0.75)" }}
                  >
                    Geographic focus
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Key4Spain supports documentation and administrative coordination for
                    international clients entering Spain, with current emphasis on
                    Valencia and Barcelona, and expanding coordination across Madrid and
                    selected Spanish coastal regions.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Valencia",
                      "Barcelona",
                      "Madrid",
                      "Selected Spanish coastal regions",
                    ].map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "rgba(7,17,31,0.65)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#C8A45D" }}
                        />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="p-8 md:p-10"
                  style={{
                    background: "white",
                    borderLeft: "4px solid rgba(200,164,93,0.40)",
                    boxShadow:
                      "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18)",
                  }}
                >
                  <p
                    className="text-[10px] uppercase tracking-[0.30em] font-medium mb-5"
                    style={{ color: "rgba(200,164,93,0.75)" }}
                  >
                    Languages
                  </p>
                  <ul className="space-y-3">
                    {["English", "Spanish", "Serbian"].map((lang) => (
                      <li
                        key={lang}
                        className="flex items-center gap-3 text-sm"
                        style={{ color: "rgba(7,17,31,0.65)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "#C8A45D" }}
                        />
                        {lang}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it starts */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: "#06101E",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 65% at 0% 50%, rgba(200,164,93,0.07) 0%, transparent 58%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-gold" />
                  <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                    How it starts
                  </span>
                </div>
                <h2
                  className="font-serif font-normal text-cream leading-tight mb-7"
                  style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
                >
                  It starts with a brief, not a call.
                </h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p className="text-base md:text-lg">
                    The Documentation &amp; Admin Brief asks about your situation, target
                    area, timeline, documentation questions, any appointments already
                    attempted, and areas of uncertainty.
                  </p>
                  <p className="text-base md:text-lg">
                    Key4Spain reviews the brief and responds with a structured next step —
                    which may be a clarification question, a planning reply, coordination
                    support, or a referral to an independent professional or official
                    institution.
                  </p>
                  <p className="text-base md:text-lg">
                    No administrative outcome is guaranteed. The brief is the starting
                    point, not a commitment to any result.
                  </p>
                </div>
                <a
                  href={links.documentationBrief}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gold tracking-wide group mt-10"
                  style={{
                    borderBottom: "1px solid rgba(200,164,93,0.38)",
                    paddingBottom: "3px",
                  }}
                >
                  Start with a Documentation Brief
                  <span className="text-gold/50 group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
              <div className="flex flex-col gap-4 lg:pt-[68px]">
                {processSteps.map((step) => (
                  <div
                    key={step.n}
                    className="flex items-start gap-5 p-6"
                    style={{
                      background: "#040C18",
                      border: "1px solid rgba(200,164,93,0.14)",
                    }}
                  >
                    <span
                      className="font-serif font-normal text-4xl leading-none shrink-0 select-none"
                      style={{ color: "rgba(200,164,93,0.25)" }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <p className="text-[13px] text-cream font-semibold mb-2">
                        {step.title}
                      </p>
                      <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Key4Spain does not do */}
        <section
          className="relative py-24 md:py-32"
          style={{
            background:
              "linear-gradient(160deg, #F6F0E6 0%, #EEE6D4 60%, #E8DFC8 100%)",
            borderTop: "1px solid rgba(7,17,31,0.12)",
          }}
        >
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
                <span
                  className="text-[10px] uppercase tracking-[0.40em] font-medium"
                  style={{ color: "#C8A45D" }}
                >
                  Advisory scope
                </span>
              </div>
              <h2
                className="font-serif font-normal leading-tight mb-4"
                style={{
                  color: "#07111F",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                }}
              >
                What Key4Spain does not do.
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "rgba(7,17,31,0.55)" }}
              >
                Understanding scope clearly is part of a trusted advisory relationship.
              </p>
              <div
                className="p-8 md:p-10"
                style={{
                  background: "white",
                  borderLeft: "4px solid rgba(200,164,93,0.40)",
                  boxShadow:
                    "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18)",
                }}
              >
                <ul className="space-y-0">
                  {scopeItems.map((item, i, arr) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-5"
                      style={{
                        borderBottom:
                          i < arr.length - 1
                            ? "1px solid rgba(7,17,31,0.06)"
                            : "none",
                      }}
                    >
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "rgba(200,164,93,0.55)" }}
                      />
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(7,17,31,0.62)" }}
                      >
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: "#030810",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 65% at 50% 110%, rgba(200,164,93,0.10) 0%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 45% 60% at 100% 0%, rgba(200,164,93,0.07) 0%, transparent 55%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-gold" />
                  <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                    Get started
                  </span>
                </div>
                <h2
                  className="font-serif font-normal text-cream leading-tight mb-6"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                >
                  Ready to organize your Spain documentation questions?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Start with the Documentation &amp; Admin Brief. Share your situation,
                  documentation questions, and timeline. Key4Spain will review your brief
                  and respond with a structured next step.
                </p>
                <p
                  className="text-xs tracking-wide mb-10"
                  style={{ color: "rgba(168,176,186,0.42)" }}
                >
                  Consultations and client coordination are available by appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={links.documentationBrief}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
                  >
                    Start with a Documentation Brief
                  </a>
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[15px] text-sm tracking-[0.06em] text-gold hover:bg-gold/[0.08] transition-colors duration-200 text-center"
                    style={{ border: "1px solid rgba(200,164,93,0.50)" }}
                  >
                    Contact on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:pt-8">
                <p
                  className="text-[10px] uppercase tracking-[0.35em] font-medium mb-3 pb-4"
                  style={{
                    color: "rgba(200,164,93,0.65)",
                    borderBottom: "1px solid rgba(200,164,93,0.10)",
                  }}
                >
                  Explore further
                </p>
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col gap-1 px-6 py-5 border border-gold/[0.14] bg-navy/40 hover:border-gold/40 hover:bg-gold/[0.05] transition-colors duration-200"
                  >
                    <p className="text-sm text-cream font-medium group-hover:text-white-text transition-colors">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted/55">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
