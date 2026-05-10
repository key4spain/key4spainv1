import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

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
    title: "Key4Spain | Property, Relocation & Investment Advisory in Spain",
    description:
      "Independent buyer-side advisory, property search support and trusted local coordination for international clients entering Spain.",
    images: ["/hero-spain.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="bg-navy text-muted font-sans antialiased">{children}</body>
    </html>
  );
}
