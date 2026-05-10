import Image from "next/image";
import Link from "next/link";
import { links, contact } from "@/lib/links";

const socialLinks = [
  { label: "Instagram", href: links.instagram },
  { label: "Facebook", href: links.facebook },
  { label: "LinkedIn", href: links.linkedin },
  { label: "YouTube", href: links.youtube },
  { label: "TikTok", href: links.tiktok },
];

const briefLinks = [
  { label: "Buyer & Property Brief", href: links.buyerBrief },
  { label: "Investor Brief", href: links.investorBrief },
  { label: "Relocation Brief", href: links.relocationBrief },
  { label: "Documentation Brief", href: links.documentationBrief },
  { label: "General Inquiry", href: links.generalInquiry },
];

export default function Footer() {
  return (
    <footer style={{ background: "#030810" }}>
      {/* Gold gradient accent line */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(200,164,93,0.65) 25%, rgba(200,164,93,0.65) 75%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/brand/key4spain-logo-color.svg"
              alt="Key4Spain"
              width={200}
              height={48}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(168,176,186,0.65)" }}>
              Independent buyer-side advisory, property search support and trusted local coordination for international clients entering Spain.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(168,176,186,0.35)" }}>
              {contact.currentFocus}<br />
              Expanding: {contact.nearTermExpansion}
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.30em] text-gold font-medium mb-5 pb-3"
              style={{ borderBottom: "1px solid rgba(200,164,93,0.14)" }}
            >
              Contact
            </p>
            <ul className="space-y-3.5 text-sm">
              {[
                { href: links.email, label: contact.emailDisplay, external: false },
                { href: links.phone, label: contact.phoneDisplay, external: false },
                { href: links.whatsapp, label: "WhatsApp", external: true },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-200 hover:text-cream"
                    style={{ color: "rgba(168,176,186,0.62)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.30em] text-gold font-medium mb-5 pb-3"
              style={{ borderBottom: "1px solid rgba(200,164,93,0.14)" }}
            >
              Follow
            </p>
            <ul className="space-y-3.5 text-sm">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-cream"
                    style={{ color: "rgba(168,176,186,0.62)" }}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Advisory Briefs */}
          <div>
            <p
              className="text-[10px] uppercase tracking-[0.30em] text-gold font-medium mb-5 pb-3"
              style={{ borderBottom: "1px solid rgba(200,164,93,0.14)" }}
            >
              Advisory Briefs
            </p>
            <ul className="space-y-3.5 text-sm">
              {briefLinks.map((b) => (
                <li key={b.label}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200 hover:text-cream"
                    style={{ color: "rgba(168,176,186,0.62)" }}
                  >
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + bottom bar */}
        <div style={{ borderTop: "1px solid rgba(200,164,93,0.10)", paddingTop: "32px" }} className="space-y-4">
          <p className="text-xs leading-relaxed max-w-4xl" style={{ color: "rgba(168,176,186,0.42)" }}>
            Key4Spain provides buyer-side advisory, property search support, relocation-property coordination and trusted local guidance for international clients entering Spain. Legal, tax, mortgage, immigration, valuation and other regulated matters are handled only by licensed professionals within their proper scope. Outcomes, approvals, investment returns, property availability, timelines and institutional decisions cannot be guaranteed.
          </p>
          <p className="text-xs leading-relaxed max-w-4xl" style={{ color: "rgba(168,176,186,0.42)" }}>
            Key4Spain is part of the Key4SpainGroup ecosystem. Legal-administrative coordination may be handled through Keys2Spain and licensed professionals.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
            <p className="text-xs" style={{ color: "rgba(168,176,186,0.28)" }}>
              © {new Date().getFullYear()} Key4Spain. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link
                href={links.privacy}
                className="transition-colors duration-200 hover:text-muted/70"
                style={{ color: "rgba(168,176,186,0.28)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href={links.terms}
                className="transition-colors duration-200 hover:text-muted/70"
                style={{ color: "rgba(168,176,186,0.28)" }}
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
