import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CarFront, KeyRound, Wrench, AlertTriangle, BatteryWarning, Unlock, 
  Clock, DollarSign, Building2, Cpu, ShieldCheck, Tag, CheckCircle2, XCircle, Phone, ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NYC Auto Locksmith Services | QuickCarUnlock',
  description: 'Complete mobile automotive locksmith services in NYC. Expert car unlocking, transponder key replacement, fob programming, and ignition repair.',
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      
      {/* Premium Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '0', right: '0', width: '50%', height: '100%', background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Complete <span className="text-orange-gradient">Automotive Security</span> Solutions.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            From simple lockouts to complex dealership-level key programming, our mobile units bring the entire locksmith shop directly to your location anywhere in New York City.
          </p>
        </div>
      </section>

      {/* 1. What's Your Emergency? (Symptom-based diagnostic) */}
      <section style={{ padding: '4rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What's Your Emergency?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Identify your symptom below to see how we fix it.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            <div className="card card-hover" style={{ borderTop: '4px solid #3B82F6' }}>
              <AlertTriangle size={32} color="#3B82F6" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>I can see my keys inside, but the doors are locked.</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>We use specialized air wedges and long-reach tools to bypass the lock mechanism without scratching your paint.</p>
              <Link href="/services/emergency-lockout" style={{ color: '#60A5FA', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Emergency Lockout <ArrowRight size={16} /></Link>
            </div>

            <div className="card card-hover" style={{ borderTop: '4px solid var(--action-orange)' }}>
              <BatteryWarning size={32} color="var(--action-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>I have the key, but the buttons stopped working.</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Usually a dead battery or desynchronized fob. We can replace the battery or re-sync the smart fob to your car's computer.</p>
              <Link href="/services/key-replacement" style={{ color: '#60A5FA', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Fob Programming <ArrowRight size={16} /></Link>
            </div>

            <div className="card card-hover" style={{ borderTop: '4px solid var(--safety-green)' }}>
              <Unlock size={32} color="var(--safety-green)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>My key spins, but the engine won't crank.</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>This indicates a broken ignition cylinder or a failed transponder chip. We diagnose and rebuild ignitions on the spot.</p>
              <Link href="/services/ignition-repair" style={{ color: '#60A5FA', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Ignition Repair <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Overview */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Our Core Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="card">
              <CarFront size={40} color="var(--action-orange)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Emergency Lockouts</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Rapid, damage-free vehicle entry. Whether your keys are left on the seat, locked in the trunk, or lost completely, our technicians can get you back inside your vehicle safely in minutes. We service all makes and models, including high-security European vehicles.
              </p>
              <Link href="/services/emergency-lockout" className="btn btn-primary w-100 text-center" style={{ display: 'block' }}>View Lockout Service</Link>
            </div>
            <div className="card">
              <KeyRound size={40} color="#3B82F6" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Key Replacement</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                Lost your only key? We carry hundreds of OEM and aftermarket blanks. We can laser-cut and program new transponder keys, smart proximity fobs, and remote head keys directly at your vehicle's location, saving you the cost of a dealership tow.
              </p>
              <Link href="/services/key-replacement" className="btn btn-primary w-100 text-center" style={{ display: 'block' }}>View Key Services</Link>
            </div>
            <div className="card">
              <Wrench size={40} color="var(--safety-green)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Ignition Repair</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                If your steering wheel is locked, your key won't turn, or the key broke off inside the chamber, we can help. Our techs can safely extract broken blades, rebuild jammed ignition cylinders, or replace the entire ignition assembly on site.
              </p>
              <Link href="/services/ignition-repair" className="btn btn-primary w-100 text-center" style={{ display: 'block' }}>View Ignition Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Long-Tail Minor Services */}
      <section style={{ padding: '4rem 1rem', background: '#0B1120', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Specialized Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {[
              "Broken Key Extraction", 
              "Trunk Lockout Specialization", 
              "High-Security Laser Key Cutting", 
              "Push-to-Start Fob Reprogramming", 
              "Door Lock Cylinder Rekeying", 
              "Motorcycle Key Generation",
              "Commercial Fleet Servicing",
              "ECU & Immobilizer Reset"
            ].map((service, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={18} color="var(--safety-green)" />
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dealership vs Mobile Locksmith Comparison */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Us Over The Dealership?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Losing a modern car key usually means a massive headache at the dealership. We offer a better way.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            {/* Dealership Side */}
            <div style={{ background: 'var(--bg-secondary)', padding: '3rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <Building2 size={28} color="#94A3B8" />
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: '#94A3B8' }}>The Dealership</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><XCircle size={20} color="#EF4444" style={{ flexShrink: 0 }} /> Requires you to pay for a tow truck to bring your car to them.</li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><XCircle size={20} color="#EF4444" style={{ flexShrink: 0 }} /> Often requires a 2 to 5 day wait for parts to be ordered.</li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><XCircle size={20} color="#EF4444" style={{ flexShrink: 0 }} /> You pay highly inflated OEM markup prices on hardware.</li>
                <li style={{ display: 'flex', gap: '12px' }}><XCircle size={20} color="#EF4444" style={{ flexShrink: 0 }} /> Closed on weekends, nights, and holidays.</li>
              </ul>
            </div>

            {/* QuickCarUnlock Side */}
            <div style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(15, 23, 42, 0.9))', padding: '3rem 2rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--action-orange)' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem' }}>
                <ShieldCheck size={28} color="var(--action-orange)" />
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>QuickCarUnlock NYC</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-primary)' }}>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><CheckCircle2 size={20} color="var(--safety-green)" style={{ flexShrink: 0 }} /> We dispatch a mobile workshop directly to your vehicle's location.</li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><CheckCircle2 size={20} color="var(--safety-green)" style={{ flexShrink: 0 }} /> Keys cut and programmed on the spot in under 45 minutes.</li>
                <li style={{ marginBottom: '1.5rem', display: 'flex', gap: '12px' }}><CheckCircle2 size={20} color="var(--safety-green)" style={{ flexShrink: 0 }} /> Up to 50% cheaper than dealership pricing.</li>
                <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 size={20} color="var(--safety-green)" style={{ flexShrink: 0 }} /> Available 24 hours a day, 7 days a week, 365 days a year.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transparent Pricing */}
      <section style={{ padding: '6rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Transparent Starting Prices</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>No hidden fees. We provide an exact, binding quote upon arrival before any work begins.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ textAlign: 'center' }}>
              <Unlock size={32} color="var(--text-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Car Lockout</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Fast, damage-free door unlocking.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)', marginBottom: '1rem' }}>$55+</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>*Depends on vehicle security system</p>
            </div>

            <div className="card" style={{ textAlign: 'center', transform: 'scale(1.05)', border: '2px solid var(--action-orange)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--action-orange)', color: 'var(--bg-primary)', padding: '4px 16px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Most Common</div>
              <KeyRound size={32} color="var(--text-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Key Replacement</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Standard or transponder key generation.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)', marginBottom: '1rem' }}>$120+</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>*Depends on key type & chip programming</p>
            </div>

            <div className="card" style={{ textAlign: 'center' }}>
              <Cpu size={32} color="var(--text-primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Smart Fob / Push Start</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Proximity fobs and ECU programming.</p>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--action-orange)', marginBottom: '1rem' }}>$165+</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>*Depends on OEM part availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technology Stack (E-E-A-T) */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Equipped With Dealership-Level Technology</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
            We heavily invest in our mobile capabilities. Our vans are fully equipped with automated, laser-guided CNC key cutting machines, meaning we can cut high-security sidewinder keys with microscopic precision. We also utilize advanced OBD2 programmers to securely sync new transponder chips directly to your vehicle's engine control unit.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '4rem 1rem', background: 'linear-gradient(135deg, var(--action-orange), #FF8C00)', color: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0F172A' }}>Ready for Immediate Assistance?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Our NYC dispatchers will route the nearest technician to your location.</p>
          <a href="tel:3478017119" className="btn" style={{ background: '#0F172A', color: 'var(--text-primary)', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={24} /> Call Now: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
