import { links } from "@/lib/links";

const briefs = [
  {
    number: "01",
    title: "Buyer & Property Brief",
    description:
      "For international buyers looking to purchase property in Spain. Share your goals, budget, and area preferences. We will structure the right search and coordination approach.",
    cta: "Start Buyer Brief",
    href: links.buyerBrief,
    highlight: true,
  },
  {
    number: "02",
    title: "Investor Brief",
    description:
      "For serious investors exploring Spanish property opportunities. Receive contextual guidance, area analysis and referrals to licensed professionals — with clear scope and no empty promises.",
    cta: "Start Investor Brief",
    href: links.investorBrief,
    highlight: false,
  },
  {
    number: "03",
    title: "Relocation Brief",
    description:
      "For families, professionals and entrepreneurs planning a move to Spain. Coordinated support across area research, property search, schools, documents and local services.",
    cta: "Start Relocation Brief",
    href: links.relocationBrief,
    highlight: false,
  },
  {
    number: "04",
    title: "Documentation & Admin Brief",
    description:
      "For clients who need guidance on NIE, Spanish documentation, residency administration and referrals to licensed immigration and legal professionals.",
    cta: "Start Documentation Brief",
    href: links.documentationBrief,
    highlight: false,
  },
  {
    number: "05",
    title: "General Inquiry",
    description:
      "Not sure which brief applies to your situation? Share your Spain goals and we will help identify the right starting point.",
    cta: "Send General Inquiry",
    href: links.generalInquiry,
    highlight: false,
  },
] as const;

export default function IntakeBriefs() {
  return (
    <section
      id="briefs"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg, #F6F0E6 0%, #EEE6D4 60%, #E8DFC8 100%)",
        borderTop: "1px solid rgba(7,17,31,0.12)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(200,164,93,0.09) 0%, transparent 60%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
            <span className="text-[10px] uppercase tracking-[0.40em] font-medium" style={{ color: "#C8A45D" }}>Start Here</span>
          </div>
          <h2
            className="font-serif font-normal leading-tight max-w-xl mb-4"
            style={{ color: "#07111F", fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Choose the brief that matches your Spain goal.
          </h2>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(7,17,31,0.55)" }}>
            Each brief is a short intake form. It takes a few minutes and helps us understand your situation before we respond with a structured next step.
          </p>
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
  );
}
