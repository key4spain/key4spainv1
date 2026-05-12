import { links } from "@/lib/links";

export default function PropertySupport() {
  return (
    <section
      id="property"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#06101E", borderTop: "1px solid rgba(200,164,93,0.12)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 55% 70% at 100% 40%, rgba(200,164,93,0.09) 0%, transparent 58%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 40% 60% at 0% 80%, rgba(200,164,93,0.04) 0%, transparent 55%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">Property Advisory</span>
            </div>
            <h2
              className="font-serif font-normal text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
            >
              A calmer way to buy property in Spain.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-10">
              Not just listings. Structure, context and trusted local support before making expensive decisions.
            </p>
            <a
              href={links.buyerBrief}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-gold tracking-wide group"
              style={{ borderBottom: "1px solid rgba(200,164,93,0.38)", paddingBottom: "3px" }}
            >
              Start with a Buyer Brief
              <span className="text-gold/50 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>

          <div
            className="p-10 md:p-12"
            style={{
              background: "#040C18",
              border: "1px solid rgba(200,164,93,0.22)",
              borderLeft: "4px solid rgba(200,164,93,0.60)",
              boxShadow: "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
            }}
          >
            {[
              "Area and market context before shortlisting",
              "Property search with local coordination",
              "Structured review before decisions",
              "Licensed professional referrals where needed",
            ].map((item, i, arr) => (
              <div
                key={item}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(200,164,93,0.08)" : "none" }}
              >
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <p className="text-sm text-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
