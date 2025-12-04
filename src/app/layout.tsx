import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-din",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1. Bekkelaget Speidergruppe | Alltid beredt siden 1915",
  description:
    "Bli med på eventyr i skog og mark! 1. Bekkelaget Speidergruppe tilbyr naturopplevelser, mestring og fellesskap for barn og unge i Ekeberg, Bekkelaget og Nordstrand.",
  icons: {
    icon: "/logo-speiderne.png",
  },
  openGraph: {
    title: "1. Bekkelaget Speidergruppe",
    description:
      "Alltid beredt siden 1915. Naturopplevelser og fellesskap for barn og unge i Oslo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <body
        className={`${barlow.variable} antialiased flex flex-col min-h-screen bg-background text-foreground font-sans overflow-x-hidden`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
