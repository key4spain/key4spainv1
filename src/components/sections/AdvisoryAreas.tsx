const areas = [
  {
    number: "01",
    title: "Property Advisory",
    description:
      "Structured guidance for international buyers navigating the Spanish property market with local context.",
  },
  {
    number: "02",
    title: "Relocation Support",
    description:
      "Practical coordination for families and professionals making Spain their home — from area research to local services.",
  },
  {
    number: "03",
    title: "Investment Perspective",
    description:
      "Contextual insight for serious investors exploring Spanish real estate with clear professional boundaries.",
  },
  {
    number: "04",
    title: "Trusted Local Coordination",
    description:
      "A reliable local presence that connects international clients to the right professionals and services.",
  },
];

export default function AdvisoryAreas() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg, #F6F0E6 0%, #EEE6D4 60%, #E8DFC8 100%)",
        borderTop: "1px solid rgba(7,17,31,0.12)",
      }}
    >
      {/* Warm atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(200,164,93,0.09) 0%, transparent 60%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
            <span className="text-[10px] uppercase tracking-[0.40em] font-medium" style={{ color: "#C8A45D" }}>Advisory Areas</span>
          </div>
          <h2
            className="font-serif font-normal leading-tight max-w-lg"
            style={{ color: "#07111F", fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
          >
            Four pillars of structured Spain advisory.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.number}
              className="group flex flex-col gap-6 p-8 md:p-9 bg-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderLeft: "4px solid #C8A45D",
                boxShadow: "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-[0.25em]" style={{ color: "rgba(200,164,93,0.75)" }}>{area.number}</span>
                <span
                  className="h-px transition-all duration-300 group-hover:w-8"
                  style={{ width: "24px", background: "rgba(200,164,93,0.30)" }}
                />
              </div>
              <h3 className="font-serif text-xl font-normal leading-snug" style={{ color: "#07111F" }}>
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(7,17,31,0.58)" }}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
