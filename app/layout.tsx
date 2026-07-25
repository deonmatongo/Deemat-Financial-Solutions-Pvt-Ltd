import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { COMPANY } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Elegant high-contrast serif used for the brand wordmark.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-wordmark",
  display: "swap",
});

const SITE_URL = "https://www.deemat.co.zw";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deemat.co.zw"),
  title: {
    default: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    template: `%s — ${COMPANY.name}`,
  },
  description:
    "Zimbabwe's trusted financial assistance partner. Deemat Financial Solutions provides fractional CFO services, financial advisory, business performance consulting, and governance support for businesses in Harare and across Zimbabwe.",
  keywords: [
    "financial assistance Zimbabwe",
    "financial advisory Zimbabwe",
    "financial help businesses Zimbabwe",
    "financial consulting Zimbabwe",
    "finance solutions Harare",
    "fractional CFO Zimbabwe",
    "CFO services Zimbabwe",
    "business finance consulting Zimbabwe",
    "financial management Zimbabwe",
    "business advisory Zimbabwe",
    "financial turnaround Zimbabwe",
    "corporate governance Zimbabwe",
    "IFRS reporting Zimbabwe",
    "business financial advisory Harare",
    "finance leadership Zimbabwe",
    "accounting advisory Zimbabwe",
    "CFO on demand Zimbabwe",
    "financial restructuring Zimbabwe",
    "finance consultant Harare",
    "Naboth Matongo",
    "Deemat Financial Solutions",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description:
      "Zimbabwe's trusted financial assistance partner — fractional CFO, financial advisory, governance, and business performance consulting based in Harare.",
    type: "website",
    locale: "en_ZW",
    siteName: COMPANY.name,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.legalName} — ${COMPANY.tagline}`,
    description:
      "Zimbabwe's trusted financial assistance partner — fractional CFO, financial advisory, governance, and business performance consulting based in Harare.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  other: {
    "geo.region": "ZW-H",
    "geo.placename": "Harare, Zimbabwe",
    "geo.position": "-17.8292;31.0522",
    ICBM: "-17.8292, 31.0522",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: COMPANY.legalName,
      alternateName: COMPANY.name,
      description:
        "Financial assistance, fractional CFO services, business advisory, and corporate governance consulting for businesses in Zimbabwe.",
      url: SITE_URL,
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Harare",
        addressCountry: "ZW",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -17.8292,
        longitude: 31.0522,
      },
      areaServed: {
        "@type": "Country",
        name: "Zimbabwe",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Financial Advisory Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fractional CFO Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Financial Advisory" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Governance" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Performance Consulting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IFRS Financial Reporting" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Finance Transformation" } },
        ],
      },
      founder: {
        "@type": "Person",
        name: "Naboth Matongo",
        jobTitle: "Managing Consultant",
        hasCredential: ["MBA", "ACMA", "CGMA", "ACG"],
      },
      knowsAbout: [
        "Financial management Zimbabwe",
        "Corporate governance Zimbabwe",
        "IFRS reporting",
        "Fractional CFO",
        "Business advisory Zimbabwe",
        "Financial assistance Zimbabwe",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY.name,
      description:
        "Financial assistance and advisory services for businesses in Zimbabwe.",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-burgundy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
