import { Metadata } from 'next';
import Link from 'next/link';
import {
  KeyRound, ShieldCheck, Zap, Cpu, CheckCircle2, Clock,
  Phone, ArrowRight, Star, XCircle, Settings, HelpCircle, HardDrive
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Key Replacement NYC | Mobile Fob Programming',
  description: 'Lost your car keys? We provide on-site laser key cutting and transponder programming across NYC. Skip the dealership and save up to 50%.',
};

export default function KeyReplacementPage() {
  return (
    <div className="service-detail-page">

      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--glow-blue)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', color: '#3B82F6', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Cpu size={16} /> Dealership-Level Technology
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            On-Site <span className="text-orange-gradient">Key Replacement</span> & Fob Programming
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Lost your only key? We bring the dealership to you. Laser-cutting and high-security chip programming performed right at your vehicle's location.
          </p>
        </div>
      </section>

      {/* The Tech Behind the Key */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Mobile Computing & Precision Cutting</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We utilize the exact same diagnostic stack as the major manufacturers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card card-hover">
              <Settings size={32} color="#3B82F6" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Laser CNC Cutting</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>Our mobile units are equipped with automated, laser-guided CNC machines. We can cut high-security "sidewinder" keys to factory specifications with 0.01mm precision.</p>
            </div>
            <div className="card card-hover">
              <HardDrive size={32} color="var(--safety-green)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>EEPROM & ECU Sync</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>Lost all keys? We can pull your car's security data directly from the ECU or EEPROM chip and synchronize new transponders without needing an existing copy.</p>
            </div>
            <div className="card card-hover">
              <Cpu size={32} color="var(--action-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Smart Fob Programming</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>We program proximity "push-to-start" fobs for luxury and domestic brands. Our software handles everything from basic remotes to advanced rolling-code security systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dealership Alternative */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ border: '2px solid #3B82F6', background: 'rgba(59, 130, 246, 0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <Zap size={32} color="#3B82F6" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Stop The Dealership Tow</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Losing a modern car key at the dealership usually means a 3-day wait, an expensive tow, and a $500+ invoice. We eliminate the friction by driving to you and completing the job in 45 minutes for up to 50% less cost.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>No Towing Needed</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Same-Day Solution</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>OEM & Aftermarket fobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Key Replacement Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>Standard Metal Key</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Non-chip keys for older vehicles.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$95+</div>
            </div>
            <div className="card" style={{ textAlign: 'center', border: '2px solid var(--action-orange)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Transponder Chip Key</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Standard keys with engine-sync security.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$145+</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem' }}>Smart Fob / Proximity</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Push-to-start & keyless entry systems.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$185+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Trust */}
      <section style={{ padding: '4rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--slate-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2rem', fontSize: '0.8rem' }}>Programming Support For</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {['toyota', 'honda', 'ford', 'bmw', 'mercedes', 'audi', 'nissan', 'chevrolet', 'jeep', 'hyundai'].map((slug) => (
              <img key={slug} src={`/brands/${slug}.svg`} alt={slug} width="35" height="35" style={{ filter: 'grayscale(1) opacity(0.4)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '3rem' }}>Key Replacement FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "Can you make a key if I have zero copies left?", a: "Yes. Using your vehicle's VIN (Vehicle Identification Number), we can retrieve the mechanical key code and security PIN from our global database to cut and program a brand new key from scratch." },
              { q: "Will the new key disable my old lost key?", a: "In most cases, yes. When we program the new key, we can perform a 'Reset' which wipes all previous keys from the car's memory, ensuring that if someone finds your old key, it will no longer start the car." },
              { q: "How long does it take on-site?", a: "Most keys and fobs take between 30 and 45 minutes to cut and program once the technician arrives at your location." }
            ].map((item, i) => (
              <div key={i} className="card">
                <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={20} color="var(--action-orange)" /> {item.q}
                </h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Need a New Key Today?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Get dealership service at your doorstep for a fraction of the cost.</p>
          <a href="tel:3478017119" className="btn" style={{ background: 'white', color: '#1D4ED8', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={24} />(347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
