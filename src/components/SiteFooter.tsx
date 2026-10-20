"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { business, trustLine, trustLineEs } from "@/lib/business";
import { isSpanishPath } from "@/lib/i18n";

export default function SiteFooter() {
  const es = isSpanishPath(usePathname());
  const year = new Date().getFullYear();

  const L = es
    ? {
        home: "/es",
        blurb: "Cerrajería móvil para carros en la ciudad de Nueva York. Aperturas, llaves nuevas y reparación de encendido, 24/7, directo a su vehículo.",
        services: "Nuestros servicios",
        svc: [
          ["/es/abrir-carro-nyc", "Abrir carro (emergencia)"],
          ["/es/servicios/duplicado-de-llaves-de-carro", "Duplicado de llaves"],
          ["/es/servicios/reparacion-de-encendido", "Reparación de encendido"],
          ["/es/cotizacion", "Pedir una cotización"],
          ["/es/guias", "Guías para conductores"],
          ["/es/estimador-de-precios", "Estimador de precios"],
        ],
        areas: "Zonas de servicio",
        zonaBase: "/es/zonas",
        bronx: "El Bronx",
        trust: "Confianza y seguridad",
        trustText: trustLineEs,
        dispatch: "Despacho central por GPS",
        rights: "Todos los derechos reservados.",
        privacy: "Política de privacidad (inglés)",
        terms: "Términos de servicio (inglés)",
        switchTo: ["/", "English"],
      }
    : {
        home: "/",
        blurb: "Mobile auto locksmith service for New York City. Lockouts, key replacement and ignition repair, 24/7, dispatched to your vehicle.",
        services: "Our Services",
        svc: [
          ["/services/emergency-lockout", "Emergency Car Lockout"],
          ["/services/key-replacement", "Transponder Key Replacement"],
          ["/services/ignition-repair", "Ignition Cylinder Repair"],
          ["/request-a-quote", "Request a Custom Quote"],
          ["/guides", "Car Lockout Guides"],
          ["/price-estimator", "Price Estimator"],
          ["/es/abrir-carro-nyc", "Abrir carro en NYC (Español)"],
        ],
        areas: "Service Areas",
        zonaBase: "/locations",
        bronx: "The Bronx",
        trust: "Trust & Safety",
        trustText: trustLine,
        dispatch: "Centralized GPS Dispatching",
        rights: "All Rights Reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        switchTo: null as null | string[],
      };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href={L.home} className="logo mb-3" style={{ fontSize: "1.5rem" }}>
              <Image src="/car-unlock.webp" alt="QuickCarUnlock Logo" width={64} height={64} style={{ objectFit: "contain" }} />
              QuickCar<span className="highlight">Unlock</span>
            </Link>
            <p style={{ color: "var(--slate-light)", marginBottom: "1.5rem", lineHeight: "1.8" }}>{L.blurb}</p>
            <a href={`tel:${business.phoneTel}`} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)", fontSize: "1.2rem", fontWeight: "bold" }}>
              <Phone size={20} className="highlight" /> {business.phoneDisplay}
            </a>
          </div>

          <div className="footer-col">
            <h4>{L.services}</h4>
            {L.svc.map(([href, label]) => (
              <Link key={href} href={href} className="footer-link">{label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>{L.areas}</h4>
            <Link href={`${L.zonaBase}/manhattan`} className="footer-link">Manhattan</Link>
            <Link href={`${L.zonaBase}/brooklyn`} className="footer-link">Brooklyn</Link>
            <Link href={`${L.zonaBase}/queens`} className="footer-link">Queens</Link>
            <Link href={`${L.zonaBase}/bronx`} className="footer-link">{L.bronx}</Link>
            <Link href={`${L.zonaBase}/staten-island`} className="footer-link">Staten Island</Link>
          </div>

          <div className="footer-col">
            <h4>{L.trust}</h4>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1rem", color: "var(--slate-light)" }}>
              <ShieldCheck size={24} color="var(--safety-green)" />
              <p>{L.trustText}</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "1rem", color: "var(--slate-light)" }}>
              <MapPin size={24} color="var(--action-orange)" />
              <p>{L.dispatch}</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Quick Car Unlock NYC. {L.rights}</p>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px", justifyContent: "center" }}>
            <Link href="/privacy" style={{ color: "var(--slate-light)", fontSize: "0.85rem" }}>{L.privacy}</Link>
            <Link href="/terms" style={{ color: "var(--slate-light)", fontSize: "0.85rem" }}>{L.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
