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
  title: {
    default: "1. Bekkelaget Speidergruppe | Fritidsaktivitet for barn i Oslo",
    template: "%s | 1. Bekkelaget Speidergruppe",
  },
  description:
    "Leter du etter fritidsaktiviteter for barn i Oslo? 1. Bekkelaget Speidergruppe tilbyr speiding, friluftsliv og fellesskap for barn fra 3. trinn. Trygge rammer, nye venner og minner for livet!",
  keywords: [
    "fritidsaktiviteter barn oslo",
    "aktiviteter for barn oslo",
    "hva skal barnet gjøre på fritiden",
    "fritidstilbud barn",
    "aktivitet barn 8 år",
    "aktivitet barn 9 år",
    "aktivitet barn 10 år",
    "aktivitet barn 11 år",
    "aktivitet barn 12 år",
    "fritidsaktivitet ungdom oslo",
    "uteaktiviteter barn oslo",
    "friluftsliv for barn",
    "naturen med barn",
    "lære barn friluftsliv",
    "barn venner oslo",
    "sosialt for barn",
    "trygge aktiviteter barn",
    "organisert fritid barn",
    "aktiviteter barn ekeberg",
    "aktiviteter barn bekkelaget",
    "aktiviteter barn nordstrand",
    "fritid barn nordstrand",
    "barneaktiviteter oslo sør",
    "ting å gjøre med barn oslo",
    "speider",
    "speiding",
    "speidergruppe oslo",
    "speider barn",
    "bli speider oslo",
    "speidergruppe bekkelaget",
    "speidergruppe ekeberg",
    "speidergruppe nordstrand",
    "norges speiderforbund oslo",
    "flokk speider",
    "tropp speider",
    "leir for barn",
    "sommerleir barn oslo",
    "telttur barn",
    "bål for barn",
    "orientering barn",
    "klatring barn oslo",
    "padling barn oslo",
    "overnatting ute barn",
    "selvstendighet barn",
    "mestring barn",
    "samarbeid barn",
    "ledelse ungdom",
    "ansvar barn",
    "naturopplevelser barn",
  ],
  authors: [{ name: "1. Bekkelaget Speidergruppe" }],
  creator: "1. Bekkelaget Speidergruppe",
  publisher: "1. Bekkelaget Speidergruppe",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://bekkelaget-speidergruppe.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "1. Bekkelaget Speidergruppe | Fritidsaktivitet for barn i Oslo",
    description:
      "Leter du etter fritidsaktiviteter for barn? Speiding gir barn nye venner, mestring og minner for livet! Prøv gratis i Ekeberg, Bekkelaget eller Nordstrand.",
    url: "https://bekkelaget-speidergruppe.vercel.app",
    siteName: "1. Bekkelaget Speidergruppe",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "1. Bekkelaget Speidergruppe - Fritidsaktivitet for barn i Oslo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1. Bekkelaget Speidergruppe | Fritidsaktivitet for barn i Oslo",
    description:
      "Leter du etter fritidsaktiviteter for barn? Speiding gir nye venner, mestring og minner for livet!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-speiderne.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.json",
  category: "organization",
  classification:
    "Speidergruppe, Fritidsaktivitet, Friluftsliv, Ungdomsorganisasjon",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "1. Bekkelaget Speidergruppe",
  alternateName: [
    "1. Bekkelaget",
    "Bekkelaget Speidergruppe",
    "Bekkelaget Speidere",
  ],
  url: "https://bekkelaget-speidergruppe.vercel.app",
  logo: "https://bekkelaget-speidergruppe.vercel.app/logo-speiderne.png",
  foundingDate: "1915-05-05",
  description:
    "Fritidsaktivitet og speidergruppe for barn og unge i Oslo. Vi tilbyr friluftsliv, fellesskap, leir og naturopplevelser i trygge rammer siden 1915.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ekebergveien 243",
    addressLocality: "Oslo",
    postalCode: "1166",
    addressCountry: "NO",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Oslo",
    },
    {
      "@type": "Place",
      name: "Ekeberg",
    },
    {
      "@type": "Place",
      name: "Bekkelaget",
    },
    {
      "@type": "Place",
      name: "Nordstrand",
    },
  ],
  memberOf: {
    "@type": "Organization",
    name: "Norges Speiderforbund",
    url: "https://speiding.no",
  },
  sameAs: ["https://www.facebook.com/groups/174321642900841/"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "oystlars64@gmail.com",
    contactType: "customer service",
    availableLanguage: ["Norwegian"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Speideravdelinger",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Flokk - Speiding for 3.-4. trinn",
          description:
            "Fritidsaktivitet for barn 8-10 år med lek, friluftsliv og enkle speiderferdigheter",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tropp - Speiding for 5.-10. trinn",
          description:
            "Fritidsaktivitet for barn og ungdom 10-16 år med patruljearbeid, leir og turer",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roverlag - Speiding for 16-25 år",
          description:
            "Fritidsaktivitet for unge voksne med turer, arrangementer og fellesskap",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
