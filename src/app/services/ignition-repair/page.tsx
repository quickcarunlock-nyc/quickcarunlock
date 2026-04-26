import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Wrench, ShieldCheck, Zap, WrenchIcon, CheckCircle2, Clock, 
  Phone, ArrowRight, Star, XCircle, Hammer, HelpCircle, Key
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ignition Repair & Replacement NYC | Mobile Services',
  description: 'Key stuck in ignition or won\'t turn? We provide mobile ignition cylinder repair and replacement across all 5 NYC boroughs. Fast, on-site service.',
};

export default function IgnitionRepairPage() {
  return (
    <div className="service-detail-page">
      
      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--glow-green)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--safety-green)', color: 'var(--safety-green)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Wrench size={16} /> Specialized Mechanical Repair
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            On-Site <span className="text-orange-gradient">Ignition Repair</span> & Replacement
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Key stuck, won't turn, or steering wheel locked? We diagnose and rebuild ignition assemblies directly at your vehicle's location. A true mobile mechanic for your car's startup system.
          </p>
        </div>
      </section>

      {/* Mechanical Expertise */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Precision Mechanical Troubleshooting</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We solve complex ignition failures that most locksmiths won't touch.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card card-hover">
              <Key size={32} color="var(--safety-green)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>Cylinder Re-Pinning</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>When ignition wafers wear down, the key stops turning. We don't just replace the whole unit—we can often re-pin your existing cylinder to match your original key, saving you from having two different keys.</p>
            </div>
            <div className="card card-hover">
              <Hammer size={32} color="#3B82F6" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>Broken Key Extraction</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>If your key snapped off inside the ignition, don't try to fish it out. We use microscopic extraction hooks to remove the blade without damaging the delicate internal wafers.</p>
            </div>
            <div className="card card-hover">
              <Zap size={32} color="var(--action-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>Steering Column Lockout</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.7' }}>Modern steering column locks are electronically controlled. We can diagnose and reset steering wheel lock modules and security interlocks on the spot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mechanic Alternative */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ border: '2px solid var(--safety-green)', background: 'rgba(16, 185, 129, 0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <Clock size={32} color="var(--safety-green)" />
              <h2 style={{ fontSize: '1.8rem', color: '#0F172A', margin: 0 }}>Avoid The 48-Hour Mechanic Wait</h2>
            </div>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Most mechanics will tell you that a broken ignition requires a 2-day wait for parts and a tow to the shop. We carry standard ignition assemblies for Honda, Ford, Toyota, and Chevy in our vans, meaning we can usually solve your "mechanical" problem the same day.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: '#475569', fontWeight: 500 }}>Immediate Diagnosis</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: '#475569', fontWeight: 500 }}>On-Site Rebuilding</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: '#475569', fontWeight: 500 }}>Key Sync Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Ignition Service Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#0F172A', marginBottom: '1rem' }}>Broken Key Extraction</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Safe removal of snapped blades.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$95+</div>
            </div>
            <div className="card" style={{ textAlign: 'center', border: '2px solid var(--safety-green)' }}>
              <h3 style={{ color: '#0F172A', marginBottom: '1rem' }}>Ignition Cylinder Repair</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Re-pinning or cleaning the assembly.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$165+</div>
            </div>
            <div className="card" style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#0F172A', marginBottom: '1rem' }}>Full Unit Replacement</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Brand new ignition switch + cylinder.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)' }}>$225+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Expertise */}
      <section style={{ padding: '4rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--slate-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2rem', fontSize: '0.8rem' }}>Specializing In Ignition Systems For</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {['toyota', 'honda', 'ford', 'chevrolet', 'nissan', 'jeep', 'hyundai'].map((slug) => (
              <img key={slug} src={`/brands/${slug}.svg`} alt={slug} width="35" height="35" style={{ filter: 'grayscale(1) opacity(0.4)' }} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '3rem' }}>Ignition Repair FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "My key turns but the car won't start. Is it the ignition?", a: "Not necessarily. If the key turns but the engine doesn't crank, it could be the electrical ignition switch or a battery/starter issue. We can test the voltage at the switch to confirm if it's the lock cylinder or an electrical failure." },
              { q: "If you replace the ignition, will I need two separate keys?", a: "Ideally, no. Our goal is to re-pin the new ignition to match your door locks. If the system is too damaged for that, we can provide a new ignition and key, and then cut you a hybrid key that works for both." },
              { q: "Why is my steering wheel locked and the key won't budge?", a: "This is often a mechanical bind. Try turning the wheel hard to the left and right while gently jiggling the key. If that doesn't work, the steering lock pin is likely jammed, and we will need to disassemble it for you." }
            ].map((item, i) => (
              <div key={i} className="card">
                <h4 style={{ color: '#0F172A', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <HelpCircle size={20} color="var(--action-orange)" /> {item.q}
                </h4>
                <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, var(--safety-green), #059669)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Key Stuck or Won't Turn?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Get your ignition diagnosed and repaired right where you're parked.</p>
          <a href="tel:3478017119" className="btn" style={{ background: 'white', color: '#059669', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={24} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
