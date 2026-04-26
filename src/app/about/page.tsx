import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheck, Zap, Cpu, CheckCircle2, Clock, 
  Phone, ArrowRight, Star, Heart, MapPin, Wrench, Navigation, Radio
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About QuickCarUnlock NYC | Trusted Auto Locksmith Experts',
  description: 'NYC\'s most reliable mobile auto locksmith network. We combine advanced logistics with dealership-level technology to provide the fastest vehicle rescue in the five boroughs.',
};

export default function AboutPage() {
  return (
    <div className="about-page">
      
      {/* Premium Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--glow-blue)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', color: '#3B82F6', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Heart size={16} /> Our Mission
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            To Eliminate the Anxiety of being <span className="text-orange-gradient">Stranded in NYC</span>.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            QuickCarUnlock was founded on a simple realization: New York City doesn't need more "general" locksmiths—it needs a specialized, technology-driven rescue network designed specifically for the modern vehicle.
          </p>
        </div>
      </section>

      {/* Technical DNA Section */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>Our Technical DNA</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                We are not general locksmiths who also do cars. We are Automotive Security Specialists. While a traditional locksmith might struggle with high-security door locks or complex transponder frequencies, our team lives and breathes vehicle electronics.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                From Mercedes-Benz EIS modules to Ford proximity fobs and Tesla emergency entry, we maintain the software and hardware required to service 99% of vehicles on the road today.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--safety-green)" /> EEPROM Mastering
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--safety-green)" /> ECU Synchronization
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--safety-green)" /> Lishi Decoding
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-primary)', fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="var(--safety-green)" /> OBD2 Protocols
                </div>
              </div>
            </div>
            <div className="card" style={{ background: 'var(--bg-secondary)', padding: '2.5rem' }}>
              <Cpu size={48} color="var(--action-orange)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mobile Dealership Stack</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Every mobile unit in our fleet carries a technical stack identical to a manufacturer's service center. We bring the diagnostic power directly to your parking spot.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--slate-light)', fontSize: '0.9rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Automated CNC Laser Key Cutting</li>
                <li style={{ marginBottom: '0.5rem' }}>• High-Frequency RF Spectrum Analyzers</li>
                <li style={{ marginBottom: '0.5rem' }}>• Real-Time OEM Security Database Access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Dispatch Advantage */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Dispatch Advantage</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Why we arrive while others are still "checking the map."</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <Navigation size={40} color="#3B82F6" style={{ margin: '0 auto 1.5rem auto' }} />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Active Borough Patrolling</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>We don't sit in a shop waiting for your call. Our units are strategically patrolling NYC's busiest neighborhoods 24/7.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Radio size={40} color="var(--action-orange)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Centralized Logic</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Our dispatcher uses live GPS data to route the closest possible technician, bypassing traffic using local knowledge.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Clock size={40} color="var(--safety-green)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>15-Min Response Goal</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>Our entire operational model is optimized for speed. If we can't get to you fast, we'll tell you upfront.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Transparency */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ padding: '4rem 2rem', textAlign: 'center', border: '1px solid var(--border-color)' }}>
            <ShieldCheck size={50} color="var(--safety-green)" style={{ margin: '0 auto 1.5rem auto' }} />
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>Our Commitment to Ethics</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              The NYC locksmith industry is unfortunately plagued by bait-and-switch pricing and destructive entry techniques. QuickCarUnlock was built as an ethical alternative.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
              <div style={{ textAlign: 'left', maxWidth: '250px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No Bait-and-Switch</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)' }}>The price we quote on-site is the price you pay. No hidden "service fees."</p>
              </div>
              <div style={{ textAlign: 'left', maxWidth: '250px' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Damage-Free First</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)' }}>We exhaust all professional non-destructive entry methods before even discussing alternatives.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section style={{ padding: '5rem 1rem', background: '#0B1120' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>NYC Through and Through</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Our dispatchers aren't in a call center halfway across the country. They are New Yorkers. When you tell us you're stranded near the "Vannie" or stuck on the "FDR," we know exactly what that means.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--action-orange)', fontWeight: 600 }}>
                <MapPin size={20} /> Serving Manhattan, Brooklyn, Queens, Bronx, & SI.
              </div>
            </div>
            <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src="/locksmith-van.png" alt="QuickCarUnlock NYC Van" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', fontWeight: 'bold' }}>
                  <CheckCircle2 size={18} color="var(--safety-green)" /> 24/7 Local Presence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Experience the Difference.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            NYC's highest-rated mobile auto locksmith network is ready to assist you.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:3478017119" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={24} /> (347) 801-7119
            </a>
            <Link href="/services" className="btn btn-secondary" style={{ padding: '1.2rem 3rem', fontSize: '1.3rem' }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
