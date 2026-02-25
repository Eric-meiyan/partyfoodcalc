import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://partyfoodcalc.com'),
  title: "Party Food Calculator — How Much Food Do You Need? | PartyFoodCalc",
  description: "Calculate exactly how much food you need for your party. Free party food calculator for chicken wings, pizza, BBQ, tacos, burgers, and more. Never run out or waste food again!",
  keywords: "party food calculator, food calculator, party planning, how much food per person, party portions, BBQ calculator, pizza calculator, chicken wings calculator",
  authors: [{ name: "PartyFoodCalc" }],
  openGraph: {
    title: "Party Food Calculator — How Much Food Do You Need?",
    description: "Calculate exactly how much food you need for your party. Free calculators for wings, pizza, BBQ, and more!",
    url: "https://partyfoodcalc.com",
    siteName: "PartyFoodCalc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Party Food Calculator"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Food Calculator — How Much Food Do You Need?",
    description: "Calculate exactly how much food you need for your party. Free calculators for wings, pizza, BBQ, and more!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Placeholder */}
        {/* TODO: Add GA4 tracking code here */}
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PartyFoodCalc",
              "url": "https://partyfoodcalc.com",
              "description": "Free party food calculators to help you plan the perfect amount of food for any event",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://partyfoodcalc.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
