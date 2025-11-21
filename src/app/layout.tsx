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
  title: "1. Bekkelaget Speidergruppe",
  description: "Naturopplevelser, mestring og fellesskap i Ekeberg, Bekkelaget og Nordstrand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className="${barlow.variable} antialiased flex flex-col min-h-screen bg-background text-foreground font-sans"
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
