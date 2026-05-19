import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://key4spain.com"),
  alternates: {
    canonical: "https://key4spain.com",
  },
  icons: {
    icon: "/brand/key4spain-symbol.svg",
    shortcut: "/brand/key4spain-symbol.svg",
  },
  title: "Key4Spain | Property, Relocation & Investment Advisory in Spain",
  description:
    "Key4Spain helps international clients buy, relocate and invest in Spain with structured property advisory, relocation support and trusted local coordination.",
  openGraph: {
    type: "website",
    url: "https://key4spain.com",
    title: "Key4Spain | Property, Relocation & Investment Advisory in Spain",
    description:
      "Independent buyer-side advisory, property search support and trusted local coordination for international clients entering Spain.",
    siteName: "Key4Spain",
    locale: "en_US",
    images: [
      {
        url: "/hero-spain.jpg",
        width: 1200,
        height: 630,
        alt: "Key4Spain — Property Advisory in Spain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@key4spain",
    title: "Key4Spain | Property, Relocation & Investment Advisory in Spain",
    description:
      "Independent buyer-side advisory, property search support and trusted local coordination for international clients entering Spain.",
    images: ["/hero-spain.jpg"],
  },
};

const globalSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://key4spain.com/#organization",
      name: "Key4Spain",
      url: "https://key4spain.com",
      description:
        "Key4Spain helps international clients buy, relocate, and invest in Spain with structured property advisory, relocation support, and trusted local coordination.",
      email: "info@key4spain.com",
      telephone: "+34652222027",
      logo: "https://key4spain.com/brand/key4spain-logo-color.svg",
      sameAs: [
        "https://www.instagram.com/key4spain/",
        "https://www.facebook.com/profile.php?id=61560413923869",
        "https://www.linkedin.com/company/116234164/",
        "https://www.youtube.com/@Key4Spain",
        "https://www.tiktok.com/@key.4.spain",
        "https://www.threads.com/@key4spain?hl=en",
        "https://x.com/key4spain",
        "https://t.me/Key4Spain",
        "https://whatsapp.com/channel/0029Vb7tomu1dAvwiMuUyM3Q",
      ],
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      knowsLanguage: ["English", "Spanish", "Serbian"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@key4spain.com",
        telephone: "+34652222027",
        availableLanguage: ["English", "Spanish", "Serbian"],
        areaServed: "Spain",
      },
      hasOfferCatalog: { "@id": "https://key4spain.com/#service-catalog" },
    },
    {
      "@type": "WebSite",
      "@id": "https://key4spain.com/#website",
      name: "Key4Spain",
      url: "https://key4spain.com",
      publisher: { "@id": "https://key4spain.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://key4spain.com/#professionalservice",
      name: "Key4Spain",
      url: "https://key4spain.com",
      description:
        "Key4Spain helps international clients buy, relocate, and invest in Spain with structured property advisory, relocation support, and trusted local coordination.",
      email: "info@key4spain.com",
      telephone: "+34652222027",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      knowsLanguage: ["English", "Spanish", "Serbian"],
      serviceType: [
        "Property advisory",
        "Relocation support",
        "Investment perspective",
        "Documentation coordination",
        "Local professional coordination",
      ],
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://key4spain.com/#service-catalog",
      name: "Key4Spain Advisory Services",
      itemListElement: [
        { "@id": "https://key4spain.com/#service-property-advisory" },
        { "@id": "https://key4spain.com/#service-relocation-support" },
        { "@id": "https://key4spain.com/#service-investment-perspective" },
        { "@id": "https://key4spain.com/#service-documentation-coordination" },
        { "@id": "https://key4spain.com/#service-local-coordination" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/#service-property-advisory",
      name: "Property Advisory",
      description:
        "Buyer-side guidance for international clients exploring property opportunities in Spain, including search structure, area understanding, visit preparation, negotiation coordination, and introduction to relevant local professionals.",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      serviceType: "Property Advisory",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/#service-relocation-support",
      name: "Relocation Support",
      description:
        "Structured relocation coordination for individuals, families, entrepreneurs, and international clients moving to Spain, including intake briefs, local orientation, documentation planning, service provider coordination, and practical next steps.",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      serviceType: "Relocation Support",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/#service-investment-perspective",
      name: "Investment Perspective",
      description:
        "Practical investment-oriented perspective for clients evaluating Spanish real estate opportunities, area selection, risk factors, local market context, and long-term planning.",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      serviceType: "Investment Perspective",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/#service-documentation-coordination",
      name: "Documentation and Administrative Coordination",
      description:
        "Support in organising required information, intake documents, appointments, and introductions to independent licensed professionals where needed.",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      serviceType: "Documentation and Administrative Coordination",
    },
    {
      "@type": "Service",
      "@id": "https://key4spain.com/#service-local-coordination",
      name: "Trusted Local Coordination",
      description:
        "Coordination with local professionals and providers such as lawyers, tax advisors, immigration specialists, real estate agents, architects, mortgage brokers, insurance providers, and administrative contacts.",
      provider: { "@id": "https://key4spain.com/#organization" },
      areaServed: [
        "Spain",
        "Valencia",
        "Barcelona",
        "Madrid",
        "Selected Spanish coastal regions",
      ],
      availableLanguage: ["English", "Spanish", "Serbian"],
      serviceType: "Trusted Local Coordination",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="bg-navy text-muted font-sans antialiased">
        <JsonLd schema={globalSchema} />

  <Script
  id="metricool-tracking"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      function loadScript(a){
        var b=document.getElementsByTagName("head")[0],
        c=document.createElement("script");
        c.type="text/javascript";
        c.src="https://tracker.metricool.com/resources/be.js";
        c.onreadystatechange=a;
        c.onload=a;
        b.appendChild(c);
      }
      loadScript(function(){
        beTracker.t({hash:"5a08ce465d278a37230340ead8e1ed67"});
      });
    `,
  }}
/>

        {children}
      </body>
    </html>
  );
}
