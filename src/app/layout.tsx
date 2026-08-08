import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BigPlans.ca — Business Plans & Financial Models That Get Canadian Businesses Funded",
  description: "Institutional-grade business plans, 36-month pro forma financial models, and turnkey loan application packages built for BDC, CSBFL lenders, EDC, Farm Credit Canada, chartered banks, and private investors.",
  keywords: [
    "Canadian business plans",
    "BDC loan business plan",
    "CSBFL application packages",
    "Farm Credit Canada business plan",
    "Pro forma financial projections Canada",
    "EDC trade export documentation",
    "Commercial loan application writer Canada",
  ],
  authors: [{ name: "BigPlans.ca Advisory Team" }],
  metadataBase: new URL("https://bigplans.ca"),
  openGraph: {
    title: "BigPlans.ca — Institutional Business Plans & Lender Packages",
    description: "We write the documents that get Canadian businesses funded by BDC, CSBFL lenders, EDC, FCC, chartered banks, and private investors.",
    url: "https://bigplans.ca",
    siteName: "BigPlans.ca",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BigPlans.ca — Business Plans That Get Canadian Businesses Funded",
    description: "BDC-ready, CSBFL-compliant business plans and pro forma financial models delivered in 5-7 business days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo/bigplans-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "BigPlans.ca",
              "image": "https://bigplans.ca/logo/bigplans-logo.png",
              "description": "Institutional-grade commercial business plans and financial modeling for Canadian entrepreneurs.",
              "url": "https://bigplans.ca",
              "telephone": "1-800-555-0199",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "areaServed": "CA",
              "sameAs": [
                "https://www.linkedin.com/company/bigplans-ca"
              ]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-paper text-ink selection:bg-electric selection:text-white`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
