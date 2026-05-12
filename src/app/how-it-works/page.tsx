import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/how-it-works",
  },
  title:
    "How Key4Spain Works | Spain Advisory Process for International Clients",
  description:
    "See Key4Spain's structured advisory process for international clients entering Spain — from intake brief and profile review to local coordination and licensed professional referrals where needed.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/how-it-works",
    title:
      "How Key4Spain Works | Spain Advisory Process for International Clients",
    description:
      "See Key4Spain's structured advisory process for international clients entering Spain — from intake brief and profile review to local coordination and licensed professional referrals where needed.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "How Key4Spain Works — Advisory Process in Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title:
      "How Key4Spain Works | Spain Advisory Process for International Clients",
    description:
      "See Key4Spain's structured advisory process for international clients entering Spain — from intake brief and profile review to local coordination and licensed professional referrals where needed.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/how-it-works#webpage",
      url: "https://key4spain.com/how-it-works",
      name: "How Key4Spain Works",
      description:
        "See Key4Spain's structured advisory process for international clients entering Spain — from intake brief and profile review to local coordination and licensed professional referrals where needed.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/#professionalservice" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://key4spain.com/how-it-works#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://key4spain.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "How It Works",
          item: "https://key4spain.com/how-it-works",
        },
      ],
    },
  ],
};

const processSteps = [
  {
    n: "1",
    title: "Tell us your Spain goal",
    desc: "Whether you are buying property, planning a relocation, exploring investment, navigating Spanish administration, or simply not sure where to start — describe what you are trying to achieve.",
  },
  {
    n: "2",
    title: "Complete the matched brief",
    desc: "You receive a structured intake form matched to your situation: Buyer Brief, Investor Brief, Relocation Brief, Documentation Brief, or General Inquiry. The brief takes a few minutes.",
  },
  {
    n: "3",
    title: "Key4Spain reviews your profile",
    desc: "Your brief is reviewed for goals, location interest, timeline, budget context if shared, family or relocation complexity, and next-step fit. No automated responses.",
  },
  {
    n: "4",
    title: "You receive the correct next step",
    desc: "The response may include a direct reply, a clarification question, a planning or coordination call, or a referral direction — depending on your brief and situation.",
  },
  {
    n: "5",
    title: "Coordination begins",
    desc: "Key4Spain may help coordinate property search structure, area context, visit preparation, relocation planning, documentation preparation, or introductions to trusted local contacts.",
  },
  {
    n: "6",
    title: "Licensed professionals where needed",
    desc: "Legal, tax, immigration, mortgage, valuation, notary, school admission, insurance, and other regulated matters are referred to independent licensed professionals or official institutions.",
  },
];

const coordinationPrinciples = [
  "Intake before introductions or visits",
  "Context before viewings or searches",
  "Scope before referrals or commitments",
  "Coordination before expensive decisions",
  "Licensed professionals where required",
];

const whyBriefPoints = [
  "Prevents wasted visits and mismatched property searches",
  "Reduces unclear location and budget expectations before coordination begins",
  "Clarifies when and what regulated professional support is required",
  "Gives both parties a clear starting point before introductions are made",
  "Keeps the process structured in a context where fragmented advice is common",
];

const briefs = [
  {
    number: "01",
    title: "Buyer & Property Brief",
    description:
      "For clients exploring property purchase, area selection, visit preparation, or buyer-side advisory in Spain.",
    cta: "Start Buyer Brief",
    href: links.buyerBrief,
    highlight: true,
  },
  {
    number: "02",
    title: "Investor Brief",
    description:
      "For clients evaluating Spanish property opportunities with a practical, risk-aware investment perspective.",
    cta: "Start Investor Brief",
    href: links.investorBrief,
    highlight: false,
  },
  {
    number: "03",
    title: "Relocation Brief",
    description:
      "For families, professionals, entrepreneurs, and international clients planning a move to Spain.",
    cta: "Start Relocation Brief",
    href: links.relocationBrief,
    highlight: false,
  },
  {
    number: "04",
    title: "Documentation & Admin Brief",
    description:
      "For clients who need help organising questions, appointments, documents, and professional introductions around Spanish administration.",
    cta: "Start Documentation Brief",
    href: links.documentationBrief,
    highlight: false,
  },
  {
    number: "05",
    title: "General Inquiry",
    description:
      "For clients who are not sure which brief applies yet. Share your Spain goals and the right starting point will be identified.",
    cta: "Send General Inquiry",
    href: links.generalInquiry,
    highlight: false,
  },
] as const;

const scopeItems = [
  "Key4Spain does not provide legal, immigration, tax, mortgage, financial, school admission, medical, or regulated professional advice.",
  "Key4Spain does not guarantee property availability, purchase completion, negotiation outcome, visa approval, residence approval, school admission, financing, investment returns, relocation result, or local service availability.",
  "Key4Spain does not replace official authorities, lawyers, tax advisors, immigration specialists, real estate agents, notaries, mortgage brokers, valuation professionals, insurance providers, schools, or administrative offices.",
  "Regulated matters are handled by independent licensed professionals or official institutions, not Key4Spain.",
];

const exploreLinks = [
  {
    href: "/property-advisory",
    label: "Property Advisory in Spain",
    desc: "Buyer-side property advisory for international clients entering the Spanish market.",
  },
  {
    href: "/relocation-spain",
    label: "Relocation Support in Spain",
    desc: "Structured relocation coordination for families, professionals, and entrepreneurs.",
  },
  {
    href: "/#about",
    label: "About Key4Spain",
    desc: "Independent advisory and what that means in practice.",
  },
  {
    href: "/#ecosystem",
    label: "The Key4Spain Ecosystem",
    desc: "How Key4Spain coordinates with licensed professionals.",
  },
];

export default function HowItWorksPage() {
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
                How It Works
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              A structured process from first contact to local coordination in Spain.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              International clients entering Spain often face unfamiliar systems,
              fragmented information, language barriers, and too many disconnected service
              providers. Key4Spain uses a structured intake-first process to reduce noise,
              clarify the next step, and coordinate support without replacing regulated
              professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#briefs"
                className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Choose your brief
              </Link>
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

        {/* Why process matters */}
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
                    Why process matters
                  </span>
                </div>
                <h2
                  className="font-serif font-normal leading-tight mb-7"
                  style={{
                    color: "#07111F",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  Structure before introductions, not after.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    International clients often begin with scattered property listings,
                    social media advice, unvetted referrals, or pressure to commit before
                    the basics are clear. The result is wasted visits, mismatched searches,
                    and decisions made before the right professionals are involved.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Key4Spain begins with structured intake before any introduction, visit,
                    or coordination so that goals, constraints, timeline, and risk areas
                    are understood first. This reduces noise and keeps the process moving
                    in the right direction.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    The process does not guarantee any property outcome, visa approval,
                    residence result, school admission, financing, or investment return.
                    It provides structured coordination and, where required, introductions
                    to independent licensed professionals.
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
                  Coordination principles
                </p>
                {coordinationPrinciples.map((item, i, arr) => (
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

        {/* The six-step process */}
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
                  The process
                </span>
              </div>
              <h2
                className="font-serif font-normal text-cream leading-tight max-w-xl"
                style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
              >
                Six steps from first contact to local coordination.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.n}
                  className="group flex flex-col gap-5 p-8 md:p-9 bg-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderLeft: "4px solid #C8A45D",
                    boxShadow:
                      "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
                  }}
                >
                  <span
                    className="font-serif font-normal leading-none select-none"
                    style={{ fontSize: "5rem", color: "rgba(200,164,93,0.30)" }}
                  >
                    {step.n}
                  </span>
                  <h3
                    className="text-[15px] font-semibold leading-snug"
                    style={{ color: "#07111F" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.58)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="text-xs text-muted/40 mt-10 max-w-2xl leading-relaxed pt-8"
              style={{ borderTop: "1px solid rgba(200,164,93,0.08)" }}
            >
              The process is advisory and coordination-focused. It does not guarantee
              property availability, purchase completion, visa approval, residence
              approval, school admission, financing, investment returns, or any
              professional outcome.
            </p>
          </div>
        </section>

        {/* Why start with a brief? */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
                  <span
                    className="text-[10px] uppercase tracking-[0.40em] font-medium"
                    style={{ color: "#C8A45D" }}
                  >
                    Brief-first approach
                  </span>
                </div>
                <h2
                  className="font-serif font-normal leading-tight mb-7"
                  style={{
                    color: "#07111F",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  Why start with a brief?
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    A brief is a short structured intake form. It takes a few minutes and
                    gives Key4Spain the context needed to understand your situation before
                    responding with a structured next step.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Starting with a brief rather than an unstructured call or message
                    allows for a more organised, focused response — and ensures that the
                    coordination or referral direction is matched to your actual goals and
                    constraints, not a general assumption.
                  </p>
                </div>
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
                  className="text-[10px] uppercase tracking-[0.30em] font-medium mb-6"
                  style={{ color: "rgba(200,164,93,0.75)" }}
                >
                  What the brief approach achieves
                </p>
                <ul className="space-y-0">
                  {whyBriefPoints.map((item, i, arr) => (
                    <li
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
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Which brief is right for you? */}
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
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                  Choose your brief
                </span>
              </div>
              <h2
                className="font-serif font-normal text-cream leading-tight max-w-xl"
                style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
              >
                Which brief matches your Spain goal?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {briefs.map((brief) => (
                <div
                  key={brief.number}
                  className="group bg-white transition-all duration-300 hover:-translate-y-0.5"
                  style={
                    brief.highlight
                      ? {
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.25rem",
                          padding: "clamp(2rem, 3vw, 2.25rem)",
                          borderTop: "4px solid #C8A45D",
                          boxShadow:
                            "0 2px 4px rgba(7,17,31,0.06), 0 8px 32px rgba(7,17,31,0.18), 0 32px 72px rgba(7,17,31,0.22), 0 1px 0 rgba(200,164,93,0.20)",
                        }
                      : {
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.25rem",
                          padding: "clamp(2rem, 3vw, 2.25rem)",
                          borderLeft: "4px solid rgba(200,164,93,0.35)",
                          boxShadow:
                            "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
                        }
                  }
                >
                  <div className="flex items-start justify-between">
                    <span
                      className="text-[10px] font-mono tracking-[0.25em]"
                      style={{ color: "rgba(200,164,93,0.70)" }}
                    >
                      {brief.number}
                    </span>
                    {brief.highlight && (
                      <span
                        className="text-[9px] tracking-[0.18em] uppercase"
                        style={{
                          color: "rgba(200,164,93,0.85)",
                          border: "1px solid rgba(200,164,93,0.40)",
                          padding: "4px 10px",
                        }}
                      >
                        Most requested
                      </span>
                    )}
                  </div>
                  <h3
                    className="font-serif text-xl font-normal leading-snug"
                    style={{ color: "#07111F" }}
                  >
                    {brief.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "rgba(7,17,31,0.58)" }}
                  >
                    {brief.description}
                  </p>
                  <a
                    href={brief.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-[13px] py-3.5 px-6 tracking-wide transition-colors duration-200 mt-2 font-semibold"
                    style={
                      brief.highlight
                        ? { background: "#07111F", color: "#F8F8F6" }
                        : { color: "#07111F", border: "1px solid rgba(7,17,31,0.20)" }
                    }
                  >
                    {brief.cta}
                  </a>
                </div>
              ))}
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
                  Ready to start with the right brief?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Choose the brief that matches your Spain goal. It takes a few minutes
                  and gives Key4Spain the context needed to respond with a structured
                  next step.
                </p>
                <p
                  className="text-xs tracking-wide mb-10"
                  style={{ color: "rgba(168,176,186,0.42)" }}
                >
                  Consultations and client coordination are available by appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#briefs"
                    className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
                  >
                    Choose your brief
                  </Link>
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
