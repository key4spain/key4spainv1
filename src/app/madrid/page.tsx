import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/madrid",
  },
  title: "Madrid Property Advisory & Relocation Support | Key4Spain",
  description:
    "Key4Spain helps international clients explore Madrid with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/madrid",
    title: "Madrid Property Advisory & Relocation Support | Key4Spain",
    description:
      "Key4Spain helps international clients explore Madrid with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Madrid Property Advisory & Relocation Support — Key4Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title: "Madrid Property Advisory & Relocation Support | Key4Spain",
    description:
      "Key4Spain helps international clients explore Madrid with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/madrid#webpage",
      url: "https://key4spain.com/madrid",
      name: "Madrid Property Advisory & Relocation Support",
      description:
        "Key4Spain helps international clients explore Madrid with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/madrid#service" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/madrid#service",
      name: "Property Advisory and Relocation Coordination in Madrid",
      serviceType: "Property Advisory and Relocation Coordination",
      url: "https://key4spain.com/madrid",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: ["Spain", "Madrid"],
      availableLanguage: ["English", "Spanish", "Serbian"],
      description:
        "Structured property advisory, relocation coordination, investment perspective, documentation preparation, and professional referral coordination for international clients exploring Madrid.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://key4spain.com/madrid#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://key4spain.com" },
        { "@type": "ListItem", position: 2, name: "Madrid", item: "https://key4spain.com/madrid" },
      ],
    },
  ],
};

const coordinationCards = [
  {
    title: "Property search structure and brief preparation",
    description:
      "Structured preparation before the property search begins — defining goals, intended use, timeline, and the questions that need answers before listings are reviewed or viewings are committed to.",
  },
  {
    title: "Area and lifestyle fit questions for Madrid",
    description:
      "Helping clients identify the practical questions about urban lifestyle, connectivity, and property configuration that determine whether Madrid fits their situation — before time and resources are committed.",
  },
  {
    title: "Relocation planning and sequencing support",
    description:
      "Coordinated support for the sequencing of relocation steps — property search, administrative preparation, professional referrals — structured so that early decisions do not create unnecessary constraints later.",
  },
  {
    title: "Administrative and documentation question routing",
    description:
      "Helping clients organise documentation questions, identify what preparation is needed, and route administrative matters to the appropriate licensed professionals or official institutions.",
  },
  {
    title: "Investment perspective and property use-case alignment",
    description:
      "Practical context around property use-case alignment, area selection factors, and the questions that require professional input before decisions are made. No financial advice or guaranteed outcomes.",
  },
  {
    title: "Professional referral coordination",
    description:
      "Where regulated matters arise — legal, tax, immigration, mortgage, notarial — Key4Spain coordinates introductions to independent licensed professionals. No regulated advice is provided directly.",
  },
];

const clientTypes = [
  "International clients beginning to explore Madrid who need structure before committing to viewings, relocation logistics, or administrative processes",
  "International buyers purchasing property in Madrid for the first time",
  "Families relocating to the area who need property, administrative, and local questions organised in advance",
  "Remote workers and entrepreneurs establishing a base in Spain's capital",
  "Investors evaluating property opportunities in Madrid with a structured approach",
  "Clients comparing Madrid with other Spanish cities and needing clear context before deciding",
  "Clients who need professional input coordinated before making major decisions",
];

const processSteps = [
  {
    n: "1",
    title: "Complete the Buyer Brief",
    desc: "Share your interest in Madrid, property goals, intended use, timeline, budget range if you choose, and any specific concerns or questions about the city.",
  },
  {
    n: "2",
    title: "Key4Spain reviews your brief",
    desc: "Your brief is reviewed and assessed. A structured response is prepared based on your situation and the specific questions you have about Madrid.",
  },
  {
    n: "3",
    title: "You receive a structured next step",
    desc: "The next step may be a clarification question, a planning reply, coordination support, or an introduction to independent licensed professionals.",
  },
  {
    n: "4",
    title: "Licensed professionals where needed",
    desc: "Where regulated matters arise — legal, tax, mortgage, immigration — appropriate independent professionals are introduced.",
  },
];

const scopeItems = [
  "Key4Spain does not make neighbourhood-level recommendations or district quality comparisons.",
  "Key4Spain does not provide legal, immigration, tax, notarial, mortgage, valuation, financial, or other regulated professional services.",
  "Key4Spain does not guarantee property availability, purchase completion, relocation outcomes, visa or residency outcomes, administrative outcomes, or any other specific result.",
  "Key4Spain does not act as a licensed real estate agent, lawyer, regulated financial advisor, or official institution.",
  "Key4Spain does not replace licensed professionals — it coordinates introductions to independent licensed professionals and official institutions where regulated input is needed.",
];

const serviceLinks = [
  {
    href: "/property-advisory",
    label: "Property Advisory",
    desc: "Structured buyer-side advisory and search coordination for international clients in Spain.",
  },
  {
    href: "/relocation-spain",
    label: "Relocation Support",
    desc: "Coordinated relocation support across area research, property search, schools, documents, and local services.",
  },
  {
    href: "/investment-spain",
    label: "Investment Perspective",
    desc: "Practical investment-oriented context for clients evaluating Spanish property opportunities.",
  },
  {
    href: "/documentation-support",
    label: "Documentation Support",
    desc: "Administrative coordination and preparation support for international clients navigating Spanish administration.",
  },
  {
    href: "/how-it-works",
    label: "How Key4Spain Works",
    desc: "The step-by-step process from brief to coordination.",
  },
  {
    href: "/#about",
    label: "About Key4Spain",
    desc: "Independent buyer-side advisory and what that means in practice.",
  },
];

const exploreLinks = [
  {
    href: "/valencia",
    label: "Valencia",
    desc: "Property advisory and relocation coordination for international clients exploring Valencia.",
  },
  {
    href: "/barcelona",
    label: "Barcelona",
    desc: "Property advisory and relocation coordination for international clients exploring Barcelona.",
  },
  {
    href: "/property-advisory",
    label: "Property Advisory",
    desc: "Structured buyer-side advisory and search coordination across Spain.",
  },
  {
    href: "/relocation-spain",
    label: "Relocation Support",
    desc: "Coordinated relocation support for families, professionals, and entrepreneurs.",
  },
];

export default function MadridPage() {
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
                Madrid
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Property advisory and relocation coordination for international clients exploring Madrid.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              Madrid is a high-information environment where international clients face a
              large volume of options, conflicting sources, and interconnected decisions.
              Key4Spain helps structure property advisory, relocation planning, and local
              coordination before visits become costly or commitments premature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={links.buyerBrief}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Start with a Buyer Brief
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

        {/* Why Madrid needs structure */}
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
                  Madrid rewards structured preparation — not reactive, unfocused search.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Madrid&apos;s urban scale gives international clients access to a wide
                    range of property types, configurations, and lifestyle contexts.
                    Without a clear framework, this range makes it harder — not easier —
                    to identify what actually fits before committing to viewings, legal
                    processes, or relocation logistics.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Clients considering Madrid are typically driven by urban infrastructure,
                    European connectivity, long-term capital city residency, and access to
                    professional and cultural environments — not coastal lifestyle or
                    seasonal use. These priorities require a different set of structured
                    questions before property search or relocation planning begins.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Property search, residency planning, administrative preparation, and
                    professional referral coordination are connected in Madrid just as in
                    other parts of Spain. Clients who sequence these separately often find
                    that early decisions create constraints later. Key4Spain helps structure
                    these questions together before decisions become difficult to reverse.
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
                  What structured exploration means
                </p>
                {[
                  "Search priorities defined before listings are reviewed",
                  "Area fit established before time is committed to viewings",
                  "Relocation and lifestyle questions organised in advance",
                  "Professional referrals identified at the right stage — not too early or too late",
                  "Coordination with independent licensed professionals where required",
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

        {/* What Key4Spain can help coordinate */}
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
                What Key4Spain can help coordinate in Madrid.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coordinationCards.map((item) => (
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
              official matters are handled by independent licensed professionals or
              official institutions — not Key4Spain.
            </p>
          </div>
        </section>

        {/* Who this is for */}
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
                  International clients exploring Madrid with serious intent.
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
                    Key4Spain supports property advisory and relocation coordination for
                    international clients exploring Madrid, with coordination across
                    Valencia, Barcelona, and selected Spanish coastal regions.
                  </p>
                  <ul className="space-y-3">
                    {["Madrid", "Valencia", "Barcelona", "Selected Spanish coastal regions"].map(
                      (area) => (
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
                      )
                    )}
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

        {/* How location planning starts */}
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
                  Location planning starts with a brief, not a call.
                </h2>
                <div className="space-y-5 text-muted leading-relaxed">
                  <p className="text-base md:text-lg">
                    The Buyer &amp; Property Brief asks about your interest in Madrid,
                    property goals, intended use, timeline, budget range if you choose
                    to share it, and any specific concerns or questions about the city
                    and what suits your situation.
                  </p>
                  <p className="text-base md:text-lg">
                    Key4Spain reviews the brief and responds with a structured next step —
                    which may be a direct reply, a clarification question, coordination
                    support, or an introduction to independent licensed professionals
                    where regulated input is needed.
                  </p>
                  <p className="text-base md:text-lg">
                    No outcome is guaranteed. The brief is the starting point, not a
                    commitment to any specific result.
                  </p>
                </div>
                <a
                  href={links.buyerBrief}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gold tracking-wide group mt-10"
                  style={{
                    borderBottom: "1px solid rgba(200,164,93,0.38)",
                    paddingBottom: "3px",
                  }}
                >
                  Start with a Buyer Brief
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

        {/* Services connected to Madrid */}
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
                  "radial-gradient(ellipse 65% 50% at 50% 110%, rgba(200,164,93,0.07) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
                <span
                  className="text-[10px] uppercase tracking-[0.40em] font-medium"
                  style={{ color: "#C8A45D" }}
                >
                  Services
                </span>
              </div>
              <h2
                className="font-serif font-normal leading-tight max-w-xl"
                style={{
                  color: "#07111F",
                  fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)",
                }}
              >
                Services connected to Madrid coordination.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-2 p-7 bg-white hover:-translate-y-0.5 transition-all duration-200"
                  style={{
                    borderLeft: "4px solid rgba(200,164,93,0.40)",
                    boxShadow:
                      "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.14)",
                  }}
                >
                  <p
                    className="text-[14px] font-semibold leading-snug group-hover:text-navy transition-colors"
                    style={{ color: "#07111F" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(7,17,31,0.55)" }}>
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What Key4Spain does not do */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: "#06101E",
            borderTop: "1px solid rgba(200,164,93,0.12)",
          }}
        >
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                  Advisory scope
                </span>
              </div>
              <h2
                className="font-serif font-normal text-cream leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
              >
                What Key4Spain does not do.
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "rgba(168,176,186,0.55)" }}
              >
                Understanding scope clearly is part of a trusted advisory relationship.
              </p>
              <div
                className="p-8 md:p-10"
                style={{
                  background: "#040C18",
                  border: "1px solid rgba(200,164,93,0.14)",
                  borderLeft: "4px solid rgba(200,164,93,0.35)",
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
                            ? "1px solid rgba(200,164,93,0.08)"
                            : "none",
                      }}
                    >
                      <span
                        className="mt-[6px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "rgba(200,164,93,0.45)" }}
                      />
                      <p className="text-sm leading-relaxed text-muted">
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
                  Ready to approach Madrid with a clearer plan?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Start with the Buyer &amp; Property Brief. Share your interest in
                  Madrid, your goals, and any concerns. Key4Spain will review your
                  brief and respond with a structured next step.
                </p>
                <p
                  className="text-xs tracking-wide mb-10"
                  style={{ color: "rgba(168,176,186,0.42)" }}
                >
                  Consultations and client coordination are available by appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={links.buyerBrief}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
                  >
                    Start with a Buyer Brief
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
