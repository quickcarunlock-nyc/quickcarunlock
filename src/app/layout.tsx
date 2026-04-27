import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Phone, MapPin, ShieldCheck, Mail } from "lucide-react";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.quickcarunlock.com'),
  alternates: {
    canonical: './',
  },
  title: "Car Unlock Service NYC | 24/7 Emergency Locksmith | QuickCarUnlock",
  description: "QuickCarUnlock.com offers 24/7 emergency car unlock service in NYC. Fast, reliable, and affordable auto locksmiths for all vehicle types. Get a free quote!",
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

        {/* Premium Dark Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <Link href="/" className="logo mb-3" style={{ fontSize: '1.5rem' }}>
                  <Image src="/car-unlock.webp" alt="QuickCarUnlock Logo" width={64} height={64} style={{ objectFit: 'contain' }} />
                  QuickCar<span className="highlight">Unlock</span>
                </Link>
                <p style={{ color: 'var(--slate-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                  New York City's fastest and most reliable mobile auto locksmith network. We operate 24/7 with a centralized dispatch system.
                </p>
                <a href="tel:3478017119" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  <Phone size={20} className="highlight" /> (347) 801-7119
                </a>
              </div>
              
              <div className="footer-col">
                <h4>Our Services</h4>
                <Link href="/services/emergency-lockout" className="footer-link">Emergency Car Lockout</Link>
                <Link href="/services/key-replacement" className="footer-link">Transponder Key Replacement</Link>
                <Link href="/services/ignition-repair" className="footer-link">Ignition Cylinder Repair</Link>
                <Link href="/request-a-quote" className="footer-link">Request a Custom Quote</Link>
              </div>

              <div className="footer-col">
                <h4>Service Areas</h4>
                <Link href="/locations/manhattan" className="footer-link">Manhattan</Link>
                <Link href="/locations/brooklyn" className="footer-link">Brooklyn</Link>
                <Link href="/locations/queens" className="footer-link">Queens</Link>
                <Link href="/locations/bronx" className="footer-link">The Bronx</Link>
                <Link href="/locations/staten-island" className="footer-link">Staten Island</Link>
              </div>

              <div className="footer-col">
                <h4>Trust & Safety</h4>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem', color: 'var(--slate-light)' }}>
                  <ShieldCheck size={24} color="var(--safety-green)" />
                  <p>Fully Certified & Insured Technicians</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem', color: 'var(--slate-light)' }}>
                  <MapPin size={24} color="var(--action-orange)" />
                  <p>Centralized GPS Dispatching</p>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} QuickCarUnlock NYC. All Rights Reserved.</p>
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px', justifyContent: 'center' }}>
                <Link href="/privacy" style={{ color: 'var(--slate-light)', fontSize: '0.85rem' }}>Privacy Policy</Link>
                <Link href="/terms" style={{ color: 'var(--slate-light)', fontSize: '0.85rem' }}>Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
