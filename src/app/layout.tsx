import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Phone, MapPin, Key, ShieldCheck, Mail } from "lucide-react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Unlock Service NYC | 24/7 Emergency Locksmith | QuickCarUnlock",
  description: "QuickCarUnlock.com offers 24/7 emergency car unlock service in NYC. Fast, reliable, and affordable auto locksmiths for all vehicle types. Get a free quote!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Glassmorphism Sticky Header */}
        <header className="site-header">
          <div className="container header-content">
            <Link href="/" className="logo">
              <Key size={28} className="highlight" />
              QuickCar<span className="highlight">Unlock</span>
            </Link>
            
            <nav className="nav-links">
              <Link href="/services" className="nav-link">Services</Link>
              <Link href="/locations" className="nav-link">Locations</Link>
              <Link href="/price-estimator" className="nav-link">Price Estimator</Link>
              <Link href="/about" className="nav-link">About</Link>
            </nav>

            <div className="header-cta">
              <a href="tel:3478017119" className="btn btn-primary btn-pulse" style={{ display: 'flex', gap: '8px' }}>
                <Phone size={18} />
                <span>(347) 801-7119</span>
              </a>
            </div>
          </div>
        </header>

        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>

        {/* Premium Dark Footer */}
        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <Link href="/" className="logo mb-3" style={{ fontSize: '1.5rem' }}>
                  <Key size={24} className="highlight" />
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
              <p>&copy; {new Date().getFullYear()} QuickCarUnlock NYC. All Rights Reserved. Service Area Business.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
