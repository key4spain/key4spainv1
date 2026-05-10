export default function SpainDiscoveryTour() {
  return (
    <section
      id="discovery"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#06101E", borderTop: "1px solid rgba(200,164,93,0.12)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 55% 65% at 95% 15%, rgba(200,164,93,0.09) 0%, transparent 55%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 40% 50% at 0% 75%, rgba(200,164,93,0.04) 0%, transparent 52%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">Spain Discovery Tour</span>
            </div>
            <h2
              className="font-serif font-normal text-cream leading-tight mb-8"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
            >
              Discovering Spain, region by region.
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p className="text-base md:text-lg">
                From September, Key4Spain begins a long-term Spain discovery journey across the country.
              </p>
              <p className="text-base md:text-lg">
                Our team will travel through Spanish regions, cities, coastal areas, villages, natural landscapes and lifestyle locations to document what it actually feels like to live, buy, relocate and invest in different parts of Spain.
              </p>
              <p className="text-base md:text-lg">
                The goal is to help international clients explore Spain with more clarity before they decide where to buy, relocate or invest.
              </p>
              <p className="text-base md:text-lg">
                This content will be shared across Key4Spain channels as a free public resource.
              </p>
            </div>
          </div>

          <div
            className="p-8 md:p-10"
            style={{
              background: "#040C18",
              border: "1px solid rgba(200,164,93,0.20)",
              borderLeft: "4px solid rgba(200,164,93,0.55)",
              boxShadow: "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.35em] font-medium mb-7"
              style={{ color: "rgba(200,164,93,0.65)" }}
            >
              Regions in scope
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                "Andalusia",
                "Catalonia",
                "Valencia",
                "Madrid",
                "Basque Country",
                "Galicia",
                "Murcia",
                "Balearic Islands",
                "Canary Islands",
              ].map((region) => (
                <span
                  key={region}
                  className="text-xs px-4 py-2.5 text-muted/55 tracking-wide hover:text-muted transition-colors duration-200"
                  style={{ border: "1px solid rgba(200,164,93,0.18)" }}
                >
                  {region}
                </span>
              ))}
            </div>
            <p
              className="text-xs text-muted/35 tracking-wide leading-relaxed pt-5"
              style={{ borderTop: "1px solid rgba(200,164,93,0.08)" }}
            >
              Regions listed are indicative. Coverage will expand over time as the tour progresses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
