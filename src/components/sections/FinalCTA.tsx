import { links, contact } from "@/lib/links";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#030810", borderTop: "1px solid rgba(200,164,93,0.12)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 70% 65% at 50% 110%, rgba(200,164,93,0.10) 0%, transparent 60%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 45% 60% at 100% 0%, rgba(200,164,93,0.07) 0%, transparent 55%)",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">Get in Touch</span>
            </div>
            <h2
              className="font-serif font-normal text-cream leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Ready to approach Spain with a clearer strategy?
            </h2>
            <p className="text-base text-muted leading-relaxed mb-12">
              Tell us your goal. We will review your situation and give you a structured next step — whether you are buying, relocating or exploring investment in Spain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={links.buyerBrief}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
              >
                Buyer &amp; Property Brief
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

          {/* Right — contact cards */}
          <div className="flex flex-col gap-3">
            <p
              className="text-[10px] uppercase tracking-[0.35em] font-medium mb-3 pb-4"
              style={{ color: "rgba(200,164,93,0.65)", borderBottom: "1px solid rgba(200,164,93,0.10)" }}
            >
              Direct Contact
            </p>

            {[
              {
                href: links.email,
                label: "Email",
                value: contact.emailDisplay,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                ),
                external: false,
              },
              {
                href: links.phone,
                label: "Phone / WhatsApp",
                value: contact.phoneDisplay,
                icon: (
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M5.5 2.5h5M3 3.5C3 2.67 3.67 2 4.5 2h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7C3.67 14 3 13.33 3 12.5v-9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="8" cy="11.5" r=".75" fill="currentColor" />
                  </svg>
                ),
                external: false,
              },
              {
                href: links.generalInquiry,
                label: "Not sure where to start?",
                value: "General Inquiry →",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
                external: true,
              },
            ].map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 px-6 py-5 border border-gold/[0.14] bg-navy/40 hover:border-gold/40 hover:bg-gold/[0.05] transition-colors duration-200"
              >
                <span className="text-gold/35 group-hover:text-gold/70 transition-colors shrink-0">
                  {card.icon}
                </span>
                <div>
                  <p className="text-[10px] text-muted/42 uppercase tracking-wider mb-0.5">{card.label}</p>
                  <p className="text-sm text-cream">{card.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
