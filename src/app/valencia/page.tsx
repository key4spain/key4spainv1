import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/valencia",
  },
  title: "Valencia Property Advisory & Relocation Support | Key4Spain",
  description:
    "Key4Spain helps international clients explore Valencia with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/valencia",
    title: "Valencia Property Advisory & Relocation Support | Key4Spain",
    description:
      "Key4Spain helps international clients explore Valencia with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Valencia Property Advisory & Relocation Support — Key4Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title: "Valencia Property Advisory & Relocation Support | Key4Spain",
    description:
      "Key4Spain helps international clients explore Valencia with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/valencia#webpage",
      url: "https://key4spain.com/valencia",
      name: "Valencia Property Advisory & Relocation Support",
      description:
        "Key4Spain helps international clients explore Valencia with structured property advisory, relocation coordination, investment perspective, and trusted local referrals before major decisions.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/valencia#service" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/valencia#service",
      name: "Property Advisory and Relocation Coordination in Valencia",
      serviceType: "Property Advisory and Relocation Coordination",
      url: "https://key4spain.com/valencia",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: ["Spain", "Valencia"],
      availableLanguage: ["English", "Spanish", "Serbian"],
      description:
        "Structured property advisory, relocation coordination, investment perspective, documentation preparation, and professional referral coordination for international clients exploring Valencia.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://key4spain.com/valencia#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://key4spain.com" },
        { "@type": "ListItem", position: 2, name: "Valencia", item: "https://key4spain.com/valencia" },
      ],
    },
  ],
};

const coordinationCards = [
  {
    title: "Property search coordination",
    description:
      "Structured coordination with trusted local contacts to identify property opportunities aligned with the client's brief, goals, and intended use.",
  },
  {
    title: "Area and neighbourhood context",
    description:
      "Understanding the practical differences between areas — lifestyle fit, property mix, access, and local character — before committing time to the wrong part of the city.",
  },
  {
    title: "Relocation and local setup support",
    description:
      "Coordinated support for families, professionals, and entrepreneurs navigating the practical elements of establishing themselves in a new city.",
  },
  {
    title: "Investment perspective and risk context",
    description:
      "Practical investment-oriented context around area fit, use-case alignment, and the risk factors and questions that require professional input before decisions are made.",
  },
  {
    title: "Documentation and administrative preparation",
    description:
      "Helping clients organize their documentation questions, preparation steps, and referral needs before engaging with licensed professionals or official institutions.",
  },
  {
    title: "Professional referral coordination",
    description:
      "Where regulated or official matters arise — legal, tax, mortgage, immigration, notarial — Key4Spain coordinates introductions to independent licensed professionals.",
  },
];

const clientTypes = [
  "International buyers purchasing property in Valencia for the first time",
  "Families relocating to Valencia who need area, school, and lifestyle questions structured",
  "Remote workers and entrepreneurs establishing a base in the city",
  "Investors evaluating property opportunities in Valencia with a structured approach",
  "Clients comparing multiple Spanish cities and needing clear context for each before deciding",
  "Clients unsure whether Valencia fits their lifestyle and property priorities before committing",
  "Clients who need professional input coordinated before making major decisions",
];

const processSteps = [
  {
    n: "1",
    title: "Complete the Buyer Brief",
    desc: "Share your interest in Valencia, property goals, intended use, timeline, budget range if you choose, and any concerns or questions about the city.",
  },
  {
    n: "2",
    title: "Key4Spain reviews your brief",
    desc: "Your brief is reviewed and assessed. A structured response is prepared based on your situation and the specific questions you have about Valencia.",
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
  "Key4Spain does not provide legal, tax, immigration, mortgage, valuation, financial, school admission, medical, or regulated professional advice.",
  "Key4Spain is not a licensed real estate agency and does not list properties.",
  "Key4Spain does not guarantee property availability, purchase completion, rental income, capital appreciation, visa or residency outcome, financing, administrative outcome, or legal outcome.",
  "Key4Spain does not replace lawyers, real estate agents, notaries, tax advisors, mortgage brokers, immigration specialists, schools, medical providers, or official institutions.",
  "Regulated matters are handled by independent licensed professionals or official institutions — not Key4Spain.",
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
  {
    href: "/investment-spain",
    label: "Investment Perspective",
    desc: "Practical investment-oriented context for clients evaluating Spanish property.",
  },
];

export default function ValenciaPage() {
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
                Valencia
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Property advisory and relocation coordination for international clients exploring Valencia.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              Valencia attracts international clients who want a clearer, more structured
              way to evaluate property, relocation, lifestyle fit, and local coordination
              before making major decisions in Spain.
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

        {/* Why Valencia needs structure */}
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
                  Exploring Valencia without structure leads to the wrong questions.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    International clients exploring Valencia often arrive with a broad
                    set of questions about lifestyle, property type, area differences,
                    and local logistics — but no clear sequence for addressing them.
                    Without structure, the research phase extends, decisions get made
                    on incomplete information, and the wrong professionals are engaged
                    at the wrong time.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Valencia offers a wide range of area types, property contexts, and
                    lifestyle environments. What suits one client — in terms of location,
                    property format, proximity to services, and day-to-day practicality
                    — may be entirely wrong for another. Understanding area fit before
                    property search begins saves time and prevents misaligned
                    expectations at every subsequent stage.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Property, relocation, documentation, and lifestyle planning in
                    Valencia are interconnected. A family relocating needs different
                    questions answered than an investor evaluating long-term ownership,
                    or an entrepreneur establishing a base. Key4Spain helps clients
                    structure these questions in the right order — identifying which
                    steps need professional input and which can be coordinated first.
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
                  "Area fit established before property search begins",
                  "Lifestyle and relocation priorities clarified early",
                  "Right professional inputs identified at the right stage",
                  "Documentation and administrative preparation organized in advance",
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
                What Key4Spain can help coordinate in Valencia.
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
                  International clients exploring Valencia with serious intent.
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
                    international clients exploring Valencia, with expanding coordination
                    across Barcelona, Madrid, and selected Spanish coastal regions.
                  </p>
                  <ul className="space-y-3">
                    {["Valencia", "Barcelona", "Madrid", "Selected Spanish coastal regions"].map(
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
                    The Buyer &amp; Property Brief asks about your interest in Valencia,
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

        {/* Services connected to Valencia */}
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
                Services connected to Valencia coordination.
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
                      <p
                        className="text-sm leading-relaxed text-muted"
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
                  Ready to approach Valencia with a clearer plan?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Start with the Buyer &amp; Property Brief. Share your interest in
                  Valencia, your goals, and any concerns. Key4Spain will review your
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
