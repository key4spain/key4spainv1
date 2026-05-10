export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#06101E", borderTop: "1px solid rgba(200,164,93,0.12)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 55% 55% at 50% 110%, rgba(200,164,93,0.06) 0%, transparent 55%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">Ecosystem</span>
          </div>
          <h2
            className="font-serif font-normal text-cream leading-tight mb-6"
            style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
          >
            Part of the Key4SpainGroup ecosystem.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Key4Spain is part of the Key4SpainGroup ecosystem. Legal-administrative coordination may be handled through Keys2Spain and licensed professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Key4Spain",
              role: "Advisory & Coordination",
              description: "Buyer-side property advisory, relocation support and investment perspective for international clients.",
              primary: true,
            },
            {
              name: "Keys2Spain",
              role: "Legal-Administrative",
              description: "NIE, documentation, residency and administrative coordination through licensed professionals.",
              primary: false,
            },
            {
              name: "Licensed Professionals",
              role: "Legal · Tax · Immigration",
              description: "Lawyers, notaries, tax advisors and immigration specialists engaged within their proper scope.",
              primary: false,
            },
          ].map((node) => (
            <div
              key={node.name}
              className="flex flex-col gap-4 p-8 md:p-9"
              style={{
                background: "#040C18",
                border: "1px solid rgba(200,164,93,0.20)",
                borderLeft: node.primary ? "4px solid rgba(200,164,93,0.65)" : "1px solid rgba(200,164,93,0.20)",
                boxShadow: "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
              }}
            >
              <p className="text-[15px] text-cream font-semibold tracking-wide">{node.name}</p>
              <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "rgba(200,164,93,0.65)" }}>{node.role}</p>
              <p className="text-sm text-muted leading-relaxed">{node.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
