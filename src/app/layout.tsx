import type { Metadata } from "next";
import { Source_Sans_3, Manrope } from "next/font/google";
import { AnalyticsConsentScript, CookieBanner, Footer, Header } from "@/components";
import { siteDetails } from '@/data';
import { Providers } from "./provider";
import "../styles/globals.css";


const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl || 'https://novexpower.com'),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        <AnalyticsConsentScript analyticsId={siteDetails.googleAnalyticsId || ""} />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
