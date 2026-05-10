"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { links, contact } from "@/lib/links";

const navLinks = [
  { label: "How We Help", href: "#services" },
  { label: "For Investors", href: "#investor" },
  { label: "Discovery Tour", href: "#discovery" },
  { label: "Channels", href: "#channels" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(7,17,31,0.98)",
        borderBottom: "1px solid rgba(200,164,93,0.20)",
        boxShadow: "0 2px 40px rgba(0,0,0,0.60)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/brand/key4spain-logo-color.svg"
            alt="Key4Spain"
            width={200}
            height={48}
            className="h-[42px] w-auto hidden lg:block"
            priority
          />
          <Image
            src="/brand/key4spain-logo-color.svg"
            alt="Key4Spain"
            width={160}
            height={38}
            className="h-[34px] w-auto lg:hidden"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] text-muted/70 hover:text-cream transition-colors duration-200 tracking-wide whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={links.phone}
            className="text-[13px] text-muted/45 hover:text-gold transition-colors duration-200 font-mono whitespace-nowrap"
          >
            {contact.phoneDisplay}
          </a>
          <a
            href={links.buyerBrief}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-[13px] bg-gold text-navy font-bold tracking-[0.06em] hover:bg-gold-soft transition-colors duration-200 whitespace-nowrap shadow-gold-glow-sm"
          >
            Buyer Brief
          </a>
        </div>

        {/* Mobile row */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={links.buyerBrief}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-gold text-navy font-bold px-4 py-2 tracking-wide shadow-gold-glow-sm"
          >
            Buyer Brief
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="text-muted/60 hover:text-cream transition-colors p-1"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="17" y1="5" x2="5" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="4" y1="15" x2="18" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden flex flex-col"
          style={{
            background: "#040D1C",
            borderTop: "1px solid rgba(200,164,93,0.16)",
          }}
        >
          {/* Nav links */}
          <nav className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-muted/80 hover:text-cream transition-colors tracking-wide"
                style={{ borderBottom: "1px solid rgba(200,164,93,0.06)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA links */}
          <div
            className="px-6 py-5 flex flex-col gap-3"
            style={{ borderTop: "1px solid rgba(200,164,93,0.10)" }}
          >
            <a
              href={links.buyerBrief}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 text-center text-sm font-bold tracking-[0.06em] bg-gold text-navy shadow-gold-glow-sm"
            >
              Buyer &amp; Property Brief
            </a>
            <a
              href={links.investorBrief}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 text-center text-sm tracking-[0.04em] text-gold"
              style={{ border: "1px solid rgba(200,164,93,0.30)" }}
            >
              Investor Brief
            </a>
            <a
              href={links.relocationBrief}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="w-full py-3.5 text-center text-sm tracking-[0.04em] text-gold"
              style={{ border: "1px solid rgba(200,164,93,0.30)" }}
            >
              Relocation Brief
            </a>
          </div>

          {/* Contact */}
          <div
            className="px-6 py-5 flex flex-col gap-3"
            style={{ borderTop: "1px solid rgba(200,164,93,0.10)" }}
          >
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted/55 hover:text-cream transition-colors">
              <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
              WhatsApp
            </a>
            <a href={links.phone} className="flex items-center gap-3 text-sm text-muted/40 font-mono hover:text-muted transition-colors">
              <span className="w-1 h-1 rounded-full bg-gold/20 shrink-0" />
              {contact.phoneDisplay}
            </a>
            <a
              href={links.generalInquiry}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-sm text-muted/55 hover:text-cream transition-colors"
            >
              <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
              General Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
