import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/relocation-spain",
  },
  title:
    "Relocation Support in Spain | Coordination for International Clients | Key4Spain",
  description:
    "Key4Spain helps families, professionals, entrepreneurs, and international clients relocate to Spain with structured coordination, area research, property search context, documentation planning, and trusted local referrals.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/relocation-spain",
    title:
      "Relocation Support in Spain | Coordination for International Clients | Key4Spain",
    description:
      "Key4Spain helps families, professionals, entrepreneurs, and international clients relocate to Spain with structured coordination, area research, property search context, documentation planning, and trusted local referrals.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Relocation Support in Spain — Key4Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title:
      "Relocation Support in Spain | Coordination for International Clients | Key4Spain",
    description:
      "Key4Spain helps families, professionals, entrepreneurs, and international clients relocate to Spain with structured coordination, area research, property search context, documentation planning, and trusted local referrals.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/relocation-spain#webpage",
      url: "https://key4spain.com/relocation-spain",
      name: "Relocation Support in Spain",
      description:
        "Key4Spain helps families, professionals, entrepreneurs, and international clients relocate to Spain with structured coordination, area research, property search context, documentation planning, and trusted local referrals.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/#service-relocation-support" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/relocation-spain#service",
      name: "Relocation Support in Spain",
      serviceType: "Relocation Support",
      url: "https://key4spain.com/relocation-spain",
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
        "Structured relocation coordination for individuals, families, entrepreneurs, and international clients moving to Spain, including intake briefs, local orientation, documentation planning, service provider coordination, and practical next steps.",
    },
  ],
};

const relocationCoverage = [
  {
    title: "Area research and lifestyle fit",
    description:
      "Understanding which areas of Spain match your lifestyle, family context, work situation, and long-term plans before committing to a neighbourhood or property.",
  },
  {
    title: "Housing and property search context",
    description:
      "Structured context around housing options aligned with your relocation needs — integrated with the property advisory process where relevant.",
  },
  {
    title: "Relocation timeline planning",
    description:
      "Mapping the sequence of key decisions and actions across your planned timeline — what needs to happen, and roughly in what order.",
  },
  {
    title: "Documentation and administrative preparation",
    description:
      "Orientation on what documentation is typically relevant for relocation to Spain — not legal advice or filing, but clarity on what to expect and plan for.",
  },
  {
    title: "School and family logistics coordination",
    description:
      "Context on school systems, family considerations, and local resources. Introductions to appropriate specialists are coordinated where regulated or official guidance is required.",
  },
  {
    title: "Local service introductions",
    description:
      "Introductions to trusted local contacts for practical needs — service providers and day-to-day logistics — where appropriate to the brief.",
  },
  {
    title: "Professional referrals where needed",
    description:
      "Introduction to independent licensed professionals — immigration specialists, lawyers, tax advisors, financial advisors — when regulated support is required.",
  },
];

const clientTypes = [
  "Families moving to Spain and navigating schools, housing, and logistics together",
  "Professionals relocating for lifestyle, remote work, or employment",
  "Entrepreneurs and self-employed individuals planning a move to Spain",
  "Retirees and semi-permanent residents seeking structured relocation support",
  "International clients combining property search with full relocation planning",
  "Clients who need a clearer sequence of decisions before committing to anything",
];

const scopeItems = [
  "Key4Spain does not provide immigration or legal advice.",
  "Key4Spain does not file visa, residence, tax, or legal applications on behalf of clients.",
  "Key4Spain does not guarantee visa approval, residence approval, school admission, housing availability, property availability, financing, or any specific relocation outcome.",
  "Key4Spain does not replace official authorities, schools, lawyers, tax advisors, immigration specialists, real estate agents, mortgage brokers, or insurance providers.",
  "Regulated matters — immigration, legal, tax, financial, school admission — are handled by independent licensed professionals or official institutions, not Key4Spain.",
  "Key4Spain does not guarantee that introductions to professionals will result in engagement or that any specific professional will be available.",
];

const processSteps = [
  {
    n: "1",
    title: "Complete the Relocation Brief",
    desc: "Share your destination interest, timeline, family situation if relevant, housing needs, school considerations, documentation questions, and any specific concerns.",
  },
  {
    n: "2",
    title: "Key4Spain reviews your brief",
    desc: "Your brief is reviewed and assessed. A structured response or next step is prepared based on your specific situation and priorities.",
  },
  {
    n: "3",
    title: "You receive a structured next step",
    desc: "A clear response outlining what the coordination process involves, what happens next, and how the relocation sequence is approached.",
  },
  {
    n: "4",
    title: "Licensed professionals where needed",
    desc: "Where regulated matters arise — immigration, legal, tax, school admission — appropriate independent licensed professionals or official channels are introduced.",
  },
];

const exploreLinks = [
  {
    href: "/property-advisory",
    label: "Property Advisory in Spain",
    desc: "Buyer-side property advisory for international clients entering the Spanish market.",
  },
  {
    href: "/#how-it-works",
    label: "How Key4Spain Works",
    desc: "The step-by-step process from brief to coordination.",
  },
  {
    href: "/#about",
    label: "About Key4Spain",
    desc: "Independent advisory and what that means in practice.",
  },
  {
    href: "/#briefs",
    label: "All Advisory Briefs",
    desc: "Buyer, investor, relocation, documentation, and general inquiry.",
  },
];

export default function RelocationSpainPage() {
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
                Relocation Support
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Relocation support for international clients moving to Spain.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              Relocating to Spain involves more than choosing a property. International
              clients often need to coordinate area research, housing, schools,
              documentation questions, local services, and trusted professional
              introductions in the right order. Key4Spain helps structure that process
              before expensive or irreversible decisions are made.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={links.relocationBrief}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Start with a Relocation Brief
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

        {/* Why relocation needs structure */}
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
                  Relocation is a sequence of connected decisions.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Most international clients approach Spain with an idea of where they
                    want to live, but no clear sequence for getting there. Housing,
                    documentation, schools, local services, and professional referrals are
                    all connected — getting the order wrong creates delays, additional
                    costs, and avoidable stress.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Key4Spain provides a structured coordination layer — helping clients
                    understand what they are dealing with, what needs to happen first, and
                    what professional support they actually need before spending time and
                    money in the wrong place.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Immigration, residency, legal, tax, school admission, mortgage,
                    insurance, and other regulated matters are handled by independent
                    licensed professionals or official institutions where required.
                    Key4Spain coordinates introductions and planning context — not
                    regulated advice.
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
                  Coordination scope
                </p>
                {[
                  "Coordination-first — not immigration or legal services",
                  "Structured sequence before expensive or irreversible decisions",
                  "Area research and housing context in the right order",
                  "Documentation planning, not filing or legal advice",
                  "Professional referrals where regulated support is required",
                  "Compliance-safe approach at every stage",
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

        {/* What relocation coordination can cover */}
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
                What relocation coordination can include.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relocationCoverage.map((item) => (
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
              The exact scope of relocation coordination depends on the client&apos;s
              situation and brief. Not all elements apply to every engagement. Where
              licensed professional services are required, Key4Spain coordinates
              appropriate introductions.
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
                  International clients moving to Spain.
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
                    Key4Spain supports international relocation planning for Spain, with
                    current emphasis on Valencia and Barcelona, and expanding coordination
                    across Madrid and selected Spanish coastal regions.
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
                    The Relocation Brief is a short intake form. It asks about your
                    destination interest, timeline, family situation if relevant, housing
                    needs, school considerations, documentation questions, and any specific
                    concerns.
                  </p>
                  <p className="text-base md:text-lg">
                    Key4Spain reviews the brief and responds with a structured next step
                    — which may be a direct reply, a clarification question, a planning
                    call, or a referral and introduction where appropriate.
                  </p>
                  <p className="text-base md:text-lg">
                    No outcome is guaranteed. The brief is the starting point, not a
                    commitment to any specific result.
                  </p>
                </div>
                <a
                  href={links.relocationBrief}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gold tracking-wide group mt-10"
                  style={{
                    borderBottom: "1px solid rgba(200,164,93,0.38)",
                    paddingBottom: "3px",
                  }}
                >
                  Start with a Relocation Brief
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
                Understanding scope clearly is part of a trusted coordination relationship.
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
                  Ready to approach your Spain relocation with a clearer plan?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Start with the Relocation Brief. Share your destination interest,
                  timeline, family situation, and any concerns. Key4Spain will review
                  your brief and respond with a structured next step.
                </p>
                <p
                  className="text-xs tracking-wide mb-10"
                  style={{ color: "rgba(168,176,186,0.42)" }}
                >
                  Consultations and client coordination are available by appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={links.relocationBrief}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
                  >
                    Start with a Relocation Brief
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
