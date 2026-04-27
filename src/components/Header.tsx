"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Key, Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link href="/" className="logo" onClick={closeMenu}>
            <Key size={28} className="highlight" />
            <span className="logo-text">QuickCar<span className="highlight">Unlock</span></span>
          </Link>
          
          <nav className="nav-links desktop-only">
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/locations" className="nav-link">Locations</Link>
            <Link href="/request-a-quote" className="nav-link">Request a Quote</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
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
            <Link href="/services" className="mobile-nav-link" onClick={closeMenu}>
              Services <Zap size={18} />
            </Link>
            <Link href="/locations" className="mobile-nav-link" onClick={closeMenu}>
              Locations
            </Link>
            <Link href="/request-a-quote" className="mobile-nav-link" onClick={closeMenu}>
              Request a Quote
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={closeMenu}>
              Contact
            </Link>
            
            <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
               <a href="tel:3478017119" className="btn btn-primary w-100" style={{ gap: '10px' }} onClick={closeMenu}>
                <Phone size={20} /> Call Now: (347) 801-7119
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
