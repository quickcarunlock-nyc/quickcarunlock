import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        {/* Sticky Header */}
        <header className="site-header">
          <div className="container header-content">
            <div className="logo">QuickCarUnlock NYC</div>
            <a href="tel:3478017119" className="btn btn-primary">Call (347) 801-7119</a>
          </div>
        </header>

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container">
            <p>QuickCarUnlock NYC - 24/7 Emergency Auto Locksmith</p>
            <p>Contact: <a href="tel:3478017119">(347) 801-7119</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
