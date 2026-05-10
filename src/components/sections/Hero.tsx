import Image from "next/image";
import { links } from "@/lib/links";

const trustItems = [
  "Current focus: Valencia & Barcelona",
  "Near-term expansion: Madrid & selected coastal regions",
  "Buyer-side advisory",
  "Licensed professionals where needed",
];

export default function Hero() {
  return (
    <section
      className="relative pt-[68px] min-h-[100svh] flex items-center overflow-hidden"
      style={{ background: "#030810" }}
    >
      {/* Hero photo */}
      <Image
        src="/hero-spain.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Layered overlays — darken photo and add cinematic gold atmosphere */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Base dark veil */}
        <div className="absolute inset-0" style={{ background: "rgba(3,8,16,0.72)" }} />

        {/* Content-side darkness — left keeps text legible */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 65% 100% at -5% 50%, rgba(2,6,14,0.92) 0%, transparent 55%)",
        }} />

        {/* Gold atmospheric warmth — upper right */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 70% at 92% -10%, rgba(200,164,93,0.28) 0%, rgba(200,164,93,0.10) 38%, transparent 65%)",
        }} />

        {/* Bottom section fade to next section color */}
        <div className="absolute bottom-0 left-0 right-0 h-52" style={{
          background: "linear-gradient(to top, #07111F 0%, rgba(7,17,31,0.85) 50%, transparent 100%)",
        }} />

        {/* Top header fade */}
        <div className="absolute top-0 left-0 w-full h-32" style={{
          background: "linear-gradient(to bottom, rgba(2,6,14,0.65) 0%, transparent 100%)",
        }} />

        {/* Decorative vertical line */}
        <div className="absolute top-0 bottom-0 w-px hidden xl:block" style={{
          right: "16%",
          background: "linear-gradient(to bottom, transparent 10%, rgba(200,164,93,0.20) 30%, rgba(200,164,93,0.20) 72%, transparent 92%)",
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 w-full">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 mb-10"
          style={{
            border: "1px solid rgba(200,164,93,0.50)",
            background: "rgba(200,164,93,0.08)",
            padding: "11px 24px",
            backdropFilter: "blur(8px)",
          }}
        >
          <span className="w-1.5 h-1.5 bg-gold shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">
            Independent Property Advisory &nbsp;·&nbsp; Spain
          </span>
        </div>

        {/* Gold decorative rule */}
        <div className="flex items-center gap-4 mb-7">
          <span className="w-12 h-px bg-gold/60" />
          <span className="text-[9px] uppercase tracking-[0.40em] text-gold/55 font-medium">Key4Spain</span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif font-normal text-white-text leading-[1.04] mb-7 max-w-[860px]"
          style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)" }}
        >
          Property, relocation and investment advisory for international buyers in Spain.
        </h1>

        {/* Subheadline */}
        <p
          className="text-muted leading-relaxed mb-5 max-w-[520px]"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.0625rem)" }}
        >
          Key4Spain helps international buyers, families and investors approach Spain with structured property guidance, relocation support and trusted local coordination.
        </p>

        {/* Focus callout */}
        <p
          className="text-sm text-gold/65 mb-12 leading-relaxed max-w-[500px]"
          style={{
            paddingLeft: "20px",
            borderLeft: "2px solid rgba(200,164,93,0.50)",
          }}
        >
          Current focus: Valencia and Barcelona. Expanding through Madrid and selected Spanish coastal regions.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href={links.buyerBrief}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-9 py-[15px] bg-gold text-navy text-sm font-bold tracking-[0.08em] hover:bg-gold-soft transition-colors duration-200 text-center shadow-gold-glow"
          >
            Buyer &amp; Property Brief
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

        {/* Investor sub-link */}
        <a
          href={links.investorBrief}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm text-muted/45 hover:text-gold/75 transition-colors duration-200 mb-16"
        >
          <span className="w-6 h-px bg-gold/35" />
          Investor Brief
        </a>

        {/* Trust strip */}
        <div style={{ borderTop: "1px solid rgba(248,248,246,0.06)", paddingTop: "28px" }}>
          <div className="flex flex-wrap gap-x-9 gap-y-3">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2.5 text-[11px] text-muted/40 tracking-[0.04em]">
                <span className="w-1.5 h-1.5 bg-gold/45 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 right-8 hidden xl:flex flex-col items-end gap-3" style={{ opacity: 0.22 }}>
        <span className="text-[9px] uppercase tracking-[0.35em] text-gold" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <span className="w-px h-14 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
