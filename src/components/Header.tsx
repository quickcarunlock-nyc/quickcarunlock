"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { ui, isSpanishPath, counterpartPath } from "@/lib/i18n";
import Image from "next/image";
import { Phone, Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname() || '/';
  const es = isSpanishPath(pathname);
  const t = es ? ui.es : ui.en;
  const other = counterpartPath(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-content">
          <Link href={t.home} className="logo" onClick={closeMenu}>
            <Image src="/car-unlock.webp" alt="QuickCarUnlock Logo" width={64} height={64} style={{ objectFit: 'contain' }} />
            <span className="logo-text">QuickCar<span className="highlight">Unlock</span></span>
          </Link>

          <nav className="nav-links desktop-only">
            {t.nav.map(([href, label]) => (
              <Link key={href} href={href} className="nav-link">{label}</Link>
            ))}
            {other && (
              <Link href={other} className="nav-link" hrefLang={es ? "en" : "es"} lang={es ? "en" : "es"} aria-label={t.switchAria} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Globe size={16} /> {t.switchLabel}
              </Link>
            )}
          </nav>

          <div className="header-actions">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse header-phone-btn">
              <Phone size={18} />
              <span className="phone-text">(347) 801-7119</span>
            </a>

            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav">
            {t.nav.map(([href, label], i) => (
              <Link key={href} href={href} className="mobile-nav-link" onClick={closeMenu}>
                {label} {i === 0 && <Zap size={18} />}
              </Link>
            ))}
            {other && (
              <Link href={other} className="mobile-nav-link" onClick={closeMenu} hrefLang={es ? "en" : "es"} lang={es ? "en" : "es"} aria-label={t.switchAria}>
                {t.switchLabel} <Globe size={18} />
              </Link>
            )}

            <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
              <a href="tel:3478017119" className="btn btn-primary w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }} onClick={closeMenu}>
                <Phone size={20} />(347) 801-7119
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
