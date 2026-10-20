import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.quickcarunlock.com'),
  alternates: {
    canonical: './',
  },
  title: "Car Unlock Service NYC | 24/7 Emergency Locksmith | QuickCarUnlock",
  description: "24/7 mobile car unlock service in NYC. Lockouts, key replacement and ignition repair in all five boroughs. Call for a live ETA and a quote before work starts.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'QuickCarUnlock',
    title: 'Car Unlock Service NYC | 24/7 Emergency Locksmith',
    description: 'Damage-free car unlocking, key replacement and ignition repair, 24/7 across all five NYC boroughs. Call for a live ETA.',
    images: [
      {
        url: '/quick-car-unlock-van.webp',
        width: 1200,
        height: 630,
        alt: 'Quick Car Unlock service van',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quick Car Unlock | 24/7 Car Unlock Service in NYC',
    description: 'Locked out of your car in NYC? Mobile car locksmith, 24/7 in all 5 boroughs. Call for a live ETA.',
    images: ['/quick-car-unlock-van.webp'],
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
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
      </head>
      <body className={inter.className}>
        <Header />

        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
