import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { links } from "@/lib/links";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://key4spain.com/investment-spain",
  },
  title: "Property Investment Perspective in Spain | Key4Spain",
  description:
    "Key4Spain helps international clients evaluate Spanish property opportunities with practical investment perspective, area context, risk awareness, and coordinated local referrals before major decisions.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com/investment-spain",
    title: "Property Investment Perspective in Spain | Key4Spain",
    description:
      "Key4Spain helps international clients evaluate Spanish property opportunities with practical investment perspective, area context, risk awareness, and coordinated local referrals before major decisions.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Property Investment Perspective in Spain — Key4Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title: "Property Investment Perspective in Spain | Key4Spain",
    description:
      "Key4Spain helps international clients evaluate Spanish property opportunities with practical investment perspective, area context, risk awareness, and coordinated local referrals before major decisions.",
    images: ["/hero-spain.jpg"],
  },
};

const pageSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://key4spain.com/investment-spain#webpage",
      url: "https://key4spain.com/investment-spain",
      name: "Property Investment Perspective in Spain",
      description:
        "Key4Spain helps international clients evaluate Spanish property opportunities with practical investment perspective, area context, risk awareness, and coordinated local referrals before major decisions.",
      isPartOf: { "@id": "https://key4spain.com/#website" },
      about: { "@id": "https://key4spain.com/#service-investment-perspective" },
      provider: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/investment-spain#service",
      name: "Property Investment Perspective in Spain",
      serviceType: "Investment Perspective",
      url: "https://key4spain.com/investment-spain",
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
        "Practical investment-oriented perspective for clients evaluating Spanish real estate opportunities, area selection, risk factors, local market context, and long-term planning.",
    },
  ],
};

const investmentCoverage = [
  {
    title: "Area and location context",
    description:
      "Understanding which areas align with the intended use case — lifestyle fit, access, local dynamics, and the questions that matter before a search begins.",
  },
  {
    title: "Property use-case alignment",
    description:
      "Clarifying whether a property type, location, or structure is suited to the intended purpose — primary residence, long-term hold, or mixed use.",
  },
  {
    title: "Risk factors and constraint mapping",
    description:
      "Identifying the categories of risk, legal checks, and practical constraints that require professional review before any commitment is made.",
  },
  {
    title: "Rental and resale questions to verify",
    description:
      "Framing the right questions around rental regulation, occupancy context, and resale considerations — not as data claims, but as matters requiring professional input.",
  },
  {
    title: "Renovation and management considerations",
    description:
      "Practical context around renovation complexity, local management arrangements, and the operational questions that affect long-term ownership.",
  },
  {
    title: "Professional referral coordination",
    description:
      "Where regulated input is required — legal, tax, mortgage, valuation — Key4Spain coordinates introductions to independent licensed professionals.",
  },
];

const clientTypes = [
  "International buyers comparing Spanish regions without enough local context",
  "Investors considering second homes or mixed-use property in Spain",
  "Entrepreneurs exploring Spain as a long-term base",
  "Clients evaluating long-term property ownership across one or more regions",
  "Clients who need a clearer pre-purchase framework before engaging licensed professionals",
  "Clients who want the right professional inputs coordinated before making major decisions",
];

const scopeItems = [
  "Key4Spain does not provide financial, investment, legal, tax, mortgage, valuation, or regulated professional advice.",
  "Key4Spain does not guarantee returns, rental income, occupancy, capital appreciation, resale value, financing, tax outcome, legal outcome, property availability, or purchase completion.",
  "Key4Spain does not replace lawyers, tax advisors, mortgage brokers, valuation professionals, real estate agents, property managers, financial advisors, insurance providers, or official authorities.",
  "Regulated matters are handled by independent licensed professionals or official institutions — not Key4Spain.",
  "No investment outcome, yield, or financial result is guaranteed or implied by any part of this service.",
];

const processSteps = [
  {
    n: "1",
    title: "Complete the Investor Brief",
    desc: "Share your target areas, intended property use, timeline, budget range if you choose, risk concerns, and the type of opportunity you are exploring.",
  },
  {
    n: "2",
    title: "Key4Spain reviews your brief",
    desc: "Your brief is reviewed and assessed. A structured response is prepared based on your specific situation and goals.",
  },
  {
    n: "3",
    title: "You receive a structured next step",
    desc: "The next step may be a clarification question, a planning call, property advisory coordination, or an introduction to independent professionals.",
  },
  {
    n: "4",
    title: "Licensed professionals where needed",
    desc: "Where regulated matters arise — legal, tax, mortgage, valuation — appropriate independent professionals are introduced.",
  },
];

const exploreLinks = [
  {
    href: "/property-advisory",
    label: "Property Advisory",
    desc: "Structured buyer-side advisory and search coordination for international clients.",
  },
  {
    href: "/relocation-spain",
    label: "Relocation Support",
    desc: "Coordinated relocation support for families, professionals, and entrepreneurs.",
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

export default function InvestmentSpainPage() {
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
                Investment Perspective
              </span>
            </div>
            <h1
              className="font-serif font-normal text-white-text leading-[1.06] mb-6 max-w-[800px]"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
            >
              Investment perspective for international clients exploring Spanish real estate.
            </h1>
            <p
              className="text-muted leading-relaxed mb-10 max-w-[560px]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.0625rem)" }}
            >
              Key4Spain helps international clients approach Spanish property opportunities
              with more structure, context, and risk awareness. Designed for clients who want
              to understand area fit, investment logic, practical constraints, and the right
              professional inputs before making major decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={links.investorBrief}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Start with an Investor Brief
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

        {/* Why investment decisions need context */}
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
                    Why context matters
                  </span>
                </div>
                <h2
                  className="font-serif font-normal leading-tight mb-7"
                  style={{
                    color: "#07111F",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  }}
                >
                  Investment decisions require more than listings.
                </h2>
                <div className="space-y-5">
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    International clients often compare Spanish areas based on listings,
                    price per square metre, or general reputation — without the local
                    context needed to evaluate risk, ownership costs, regulatory
                    constraints, or long-term fit.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Listings do not explain renovation complexity, rental regulation,
                    liquidity considerations, legal checks, or the practical questions
                    that determine whether an opportunity makes sense. Investment
                    perspective means asking better questions before committing.
                  </p>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "rgba(7,17,31,0.65)" }}
                  >
                    Key4Spain provides practical investment-oriented perspective and
                    coordination. It does not provide financial, tax, legal, mortgage,
                    valuation, or regulated investment advice. Where specialist input is
                    required, Key4Spain coordinates introductions to independent licensed
                    professionals.
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
                  "Practical investment perspective — not regulated financial advice",
                  "Area and location context before search begins",
                  "Risk factors and constraint identification",
                  "Questions to verify before committing to any opportunity",
                  "Coordination with independent licensed professionals where needed",
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

        {/* What investment perspective can cover */}
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
                What investment perspective can include.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investmentCoverage.map((item) => (
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
              The scope of investment perspective support depends on the client&apos;s
              situation and brief. Not all elements apply to every engagement. No
              investment outcome, yield, or financial result is guaranteed or implied.
              Where licensed professional services are required, Key4Spain coordinates
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
                  International clients evaluating Spanish property opportunities.
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
                    Key4Spain supports investment-oriented property exploration across
                    Spain, with current emphasis on Valencia and Barcelona, and expanding
                    coordination across Madrid and selected Spanish coastal regions.
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
                    The Investor Brief asks about your target areas, intended property
                    use, timeline, budget range if you choose to share it, risk concerns,
                    and the type of opportunity you are considering.
                  </p>
                  <p className="text-base md:text-lg">
                    Key4Spain reviews the brief and responds with a structured next step —
                    which may be a direct reply, a clarification question, a planning call,
                    property advisory coordination, or an introduction to independent
                    licensed professionals.
                  </p>
                  <p className="text-base md:text-lg">
                    No investment outcome is guaranteed. The brief is the starting point,
                    not a commitment to any result.
                  </p>
                </div>
                <a
                  href={links.investorBrief}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gold tracking-wide group mt-10"
                  style={{
                    borderBottom: "1px solid rgba(200,164,93,0.38)",
                    paddingBottom: "3px",
                  }}
                >
                  Start with an Investor Brief
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
                  Ready to approach Spanish property with more context and clarity?
                </h2>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Start with the Investor Brief. Share your target areas, intended use,
                  timeline, and any risk concerns. Key4Spain will review your brief and
                  respond with a structured next step.
                </p>
                <p
                  className="text-xs tracking-wide mb-10"
                  style={{ color: "rgba(168,176,186,0.42)" }}
                >
                  Consultations and client coordination are available by appointment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={links.investorBrief}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
                  >
                    Start with an Investor Brief
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
