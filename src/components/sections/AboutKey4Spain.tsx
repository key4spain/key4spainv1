const serviceAreas = [
  "Spain",
  "Valencia",
  "Barcelona",
  "Madrid",
  "Selected Spanish coastal regions",
];

const languages = ["English", "Spanish", "Serbian"];

export default function AboutKey4Spain() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#06101E", borderTop: "1px solid rgba(200,164,93,0.12)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 10% 50%, rgba(200,164,93,0.06) 0%, transparent 58%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — entity text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
                About Key4Spain
              </span>
            </div>
            <h2
              className="font-serif font-normal text-cream leading-tight mb-8"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
            >
              Independent advisory and coordination for international clients in Spain.
            </h2>
            <div className="space-y-5">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Key4Spain is an independent buyer-side advisory and relocation coordination
                brand for international clients entering Spain. We help clients structure
                their property search, relocation planning, investment perspective, and
                local coordination process with a clear intake brief before introductions,
                visits, or next steps.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Key4Spain focuses on Spain, with current emphasis on Valencia, Barcelona,
                Madrid, and selected coastal regions. The service is designed for
                international buyers, families, investors, entrepreneurs, and relocation
                clients who need organised guidance before making property, relocation, or
                administrative decisions.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Where licensed professional support is required, Key4Spain coordinates
                with appropriate independent professionals such as lawyers, tax advisors,
                immigration specialists, real estate agents, architects, mortgage brokers,
                insurance providers, and local administrative contacts. Key4Spain does not
                replace regulated professional advice.
              </p>
              <p
                className="text-sm leading-relaxed pt-2"
                style={{ color: "rgba(168,176,186,0.52)" }}
              >
                Key4Spain is part of the broader Key4SpainGroup ecosystem. Consultations
                and client coordination are available by appointment.
              </p>
            </div>
          </div>

          {/* Right — service area + languages data cards */}
          <div className="flex flex-col gap-6 lg:pt-[68px]">

            {/* Service area */}
            <div
              className="p-8 md:p-10"
              style={{
                background: "#040C18",
                border: "1px solid rgba(200,164,93,0.20)",
                borderLeft: "4px solid rgba(200,164,93,0.55)",
                boxShadow:
                  "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.30em] font-medium mb-5"
                style={{ color: "rgba(200,164,93,0.70)" }}
              >
                Service Area
              </p>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div
              className="p-8 md:p-10"
              style={{
                background: "#040C18",
                border: "1px solid rgba(200,164,93,0.20)",
                borderLeft: "4px solid rgba(200,164,93,0.55)",
                boxShadow:
                  "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.30em] font-medium mb-5"
                style={{ color: "rgba(200,164,93,0.70)" }}
              >
                Languages
              </p>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    {lang}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
