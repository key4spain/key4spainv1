import { links } from "@/lib/links";

export default function RelocationSupport() {
  return (
    <section
      id="relocation"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(160deg, #EDE4D2 0%, #E4D9C4 60%, #DECFB8 100%)",
        borderTop: "1px solid rgba(7,17,31,0.12)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 65% 50% at 50% 110%, rgba(200,164,93,0.08) 0%, transparent 60%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Feature panel — left on desktop */}
          <div
            className="p-10 md:p-12 bg-white lg:order-first order-last"
            style={{
              borderLeft: "4px solid #C8A45D",
              boxShadow: "0 1px 2px rgba(7,17,31,0.04), 0 4px 16px rgba(7,17,31,0.10), 0 20px 56px rgba(7,17,31,0.18), 0 1px 0 rgba(200,164,93,0.12)",
            }}
          >
            {[
              "Area research and lifestyle fit",
              "School options and family considerations",
              "Document and administration guidance",
              "Local services and trusted contacts",
              "Property search integrated with relocation planning",
            ].map((item, i, arr) => (
              <div
                key={item}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(7,17,31,0.07)" : "none" }}
              >
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(7,17,31,0.65)" }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px" style={{ background: "#C8A45D" }} />
              <span className="text-[10px] uppercase tracking-[0.40em] font-medium" style={{ color: "#C8A45D" }}>Relocation Support</span>
            </div>
            <h2
              className="font-serif font-normal leading-tight mb-6"
              style={{ color: "#07111F", fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
            >
              Relocation with practical structure.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: "rgba(7,17,31,0.60)" }}>
              Moving to Spain is not only about finding a property. Families, professionals and entrepreneurs need clarity around areas, schools, lifestyle, documents, local services and reliable contacts.
            </p>
            <a
              href={links.relocationBrief}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-wide group"
              style={{ color: "#07111F", borderBottom: "1px solid rgba(7,17,31,0.30)", paddingBottom: "3px" }}
            >
              Start with a Relocation Brief
              <span className="group-hover:translate-x-1 transition-transform duration-200" style={{ color: "rgba(7,17,31,0.40)" }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
