"use client";

import { useState } from "react";
import { links } from "@/lib/links";

const activeChannels: { label: string; href: string }[] = [
  { label: "Website", href: links.domain },
  { label: "Email", href: links.email },
  { label: "WhatsApp", href: links.whatsapp },
  { label: "WhatsApp Channel", href: links.whatsappChannel },
  { label: "Discord", href: links.discord },
  { label: "Instagram", href: links.instagram },
  { label: "Facebook", href: links.facebook },
  { label: "LinkedIn", href: links.linkedin },
  { label: "YouTube", href: links.youtube },
  { label: "TikTok", href: links.tiktok },
  { label: "Threads", href: links.threads },
  { label: "X", href: links.x },
];

type LinkChannel = { kind: "link"; label: string; href: string };
type QrChannel = { kind: "qr"; label: string; src: string };
type IntlChannel = LinkChannel | QrChannel;

const intlChannels: IntlChannel[] = [
  { kind: "link", label: "Telegram", href: links.telegram },
  { kind: "link", label: "Viber", href: links.viber },
  { kind: "qr", label: "WeChat", src: links.wechatQr },
  { kind: "link", label: "Line", href: links.line },
  { kind: "qr", label: "Botim", src: links.botimQr },
];

type QrModal = "wechat" | "botim" | null;

function QrModalOverlay({ label, src, onClose }: { label: string; src: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(3,8,16,0.90)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-6 p-8 max-w-[300px] w-full"
        style={{
          background: "#040C18",
          border: "1px solid rgba(200,164,93,0.32)",
          borderTop: "3px solid rgba(200,164,93,0.70)",
          boxShadow: "0 0 0 1px rgba(200,164,93,0.08) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted/40 hover:text-cream transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="3" y1="3" x2="13" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="13" y1="3" x2="3" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
        <p className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">{label}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${label} QR code`}
          width={200}
          height={200}
          className="w-[200px] h-[200px] object-contain p-3"
          style={{ background: "white" }}
        />
        <p className="text-xs text-muted/50 tracking-wide text-center">
          Scan with {label} to connect
        </p>
      </div>
    </div>
  );
}

const CARD = {
  background: "#040C18",
  border: "1px solid rgba(200,164,93,0.20)",
  boxShadow: "0 0 0 1px rgba(200,164,93,0.06) inset, 0 4px 16px rgba(0,0,0,0.45), 0 20px 72px rgba(0,0,0,0.72)",
} as const;

const ROW_BASE: React.CSSProperties = {
  border: "1px solid rgba(200,164,93,0.14)",
  transition: "border-color 0.2s, background 0.2s",
};

export default function CommunicationChannels() {
  const [modal, setModal] = useState<QrModal>(null);

  return (
    <>
      {modal === "wechat" && (
        <QrModalOverlay label="WeChat" src={links.wechatQr} onClose={() => setModal(null)} />
      )}
      {modal === "botim" && (
        <QrModalOverlay label="Botim" src={links.botimQr} onClose={() => setModal(null)} />
      )}

      <section
        id="channels"
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "#06101E", borderTop: "1px solid rgba(200,164,93,0.12)" }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 60% 55% at 50% -5%, rgba(200,164,93,0.06) 0%, transparent 60%)",
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.40em] text-gold font-medium">Communication Channels</span>
            </div>
            <h2
              className="font-serif font-normal text-cream leading-tight max-w-xl mb-5"
              style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.65rem)" }}
            >
              Reach Key4Spain through your preferred channel.
            </h2>
            <p className="text-sm text-muted leading-relaxed max-w-xl">
              Key4Spain maintains an active presence across major digital channels and supports international clients through messaging platforms used globally.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active channels */}
            <div className="p-8 md:p-10" style={CARD}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <p className="text-[10px] uppercase tracking-[0.30em] text-gold/80 font-medium">Active Channels</p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {activeChannels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-cream hover:text-white-text transition-colors duration-200"
                    style={{
                      border: "1px solid rgba(200,164,93,0.20)",
                      background: "rgba(10,24,48,0.60)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.55)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.20)";
                      (e.currentTarget as HTMLElement).style.background = "rgba(10,24,48,0.60)";
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                    {ch.label}
                  </a>
                ))}
              </div>
            </div>

            {/* International & messaging */}
            <div className="p-8 md:p-10" style={CARD}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                <p className="text-[10px] uppercase tracking-[0.30em] text-muted/55 font-medium">International &amp; Messaging</p>
              </div>
              <div className="flex flex-col gap-2">
                {intlChannels.map((ch) =>
                  ch.kind === "link" ? (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-5 py-4"
                      style={ROW_BASE}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.42)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.14)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/55 shrink-0" />
                        <span className="text-[13px] text-cream">{ch.label}</span>
                      </span>
                      <span className="text-[10px] text-gold/40 group-hover:text-gold/72 transition-colors tracking-widest uppercase">
                        Open →
                      </span>
                    </a>
                  ) : (
                    <button
                      key={ch.label}
                      onClick={() => setModal(ch.label.toLowerCase() as QrModal)}
                      className="group flex items-center justify-between px-5 py-4 w-full text-left"
                      style={ROW_BASE}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.42)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(200,164,93,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,164,93,0.14)";
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                      }}
                    >
                      <span className="flex items-center gap-3.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/55 shrink-0" />
                        <span className="text-[13px] text-cream">{ch.label}</span>
                      </span>
                      <span className="text-[10px] text-gold/40 group-hover:text-gold/72 transition-colors tracking-widest uppercase">
                        QR Code →
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
