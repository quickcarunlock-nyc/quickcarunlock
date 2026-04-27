import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Unlock, ShieldCheck, Zap, AlertTriangle, CheckCircle2, Clock, 
  Phone, ArrowRight, Star, XCircle, Search, HelpCircle, Car
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Emergency Car Lockout Service NYC | 15-Min Response',
  description: 'Locked out of your vehicle in NYC? Our mobile units provide damage-free entry for all car makes and models 24/7. 15-minute average arrival time.',
};

export default function EmergencyLockoutPage() {
  return (
    <div className="service-detail-page">
      
      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--glow-orange)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249, 115, 22, 0.1)', border: '1px solid var(--action-orange)', color: 'var(--action-orange)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Zap size={16} /> Rapid Emergency Response
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            NYC's Fastest <span className="text-orange-gradient">Car Unlocking</span> Service
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Don't panic. Our mobile units are patrolling your borough right now, equipped with specialized tools to get you back inside your vehicle without a single scratch.
          </p>
        </div>
      </section>

      {/* The Science of Damage-Free Entry */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Science of Damage-Free Entry</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We don't use coat hangers. We use precision engineering.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card card-hover">
              <Search size={32} color="#3B82F6" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Lishi Picking Technology</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>For high-security vehicles, we utilize Lishi decoders. This allows us to "read" the internal pins of your lock and pick it open exactly as the key would, leaving zero traces of entry.</p>
            </div>
            <div className="card card-hover">
              <ShieldCheck size={32} color="var(--safety-green)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Non-Marring Air Wedges</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>Our soft-shell air wedges create a microscopic gap in the door frame without bending the metal or scratching the paint, maintaining the structural integrity of your vehicle seals.</p>
            </div>
            <div className="card card-hover">
              <Unlock size={32} color="var(--action-orange)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Long-Reach Precision</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>We use polymer-coated reach tools to manipulate internal buttons or pull handles. The coating ensures that your interior leather and trim remain completely untouched.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Get Scammed */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ border: '2px solid #EF4444', background: 'rgba(239, 68, 68, 0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <AlertTriangle size={32} color="#EF4444" />
              <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Avoid The "Drill-and-Replace" Scam</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Many uncertified locksmiths will arrive and immediately claim that your lock is "too advanced" or "broken," insisting that they must drill out the lock cylinder. This is almost always a scam designed to charge you hundreds extra for a new lock.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="var(--safety-green)" style={{ flexShrink: 0 }} />
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}><strong>Our Policy:</strong> We have a 99% success rate in non-destructive entry. We never drill unless there is a pre-existing mechanical lock failure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing & Brands */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>Transparent Emergency Rates</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: "Standard Door Unlock", price: "$55+" },
                { label: "Trunk Unlocking", price: "$65+" },
                { label: "High-Security / Luxury Models", price: "$85+" },
                { label: "Key Extraction (Broken in Lock)", price: "$95+" }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</span>
                  <span style={{ color: 'var(--action-orange)', fontWeight: 'bold' }}>{item.price}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--slate-light)', fontSize: '0.9rem' }}>
              <ShieldCheck size={18} color="var(--safety-green)" /> Fully Insured Against Damage
            </div>
          </div>
          
          <div className="card" style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Supporting All Major Brands</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {['toyota', 'honda', 'ford', 'bmw', 'mercedes', 'audi', 'nissan', 'chevrolet', 'jeep'].map((slug) => (
                <div key={slug} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img src={`/brands/${slug}.svg`} alt={slug} width="40" height="40" style={{ filter: 'grayscale(1) opacity(0.5)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '4rem' }}>Your Road to Recovery</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: "1", title: "Instant Dispatch", text: "Call us and get a binding quote. We dispatch the closest mobile unit immediately." },
              { step: "2", title: "15-Min Arrival", text: "Our tech arrives in a fully equipped van. We verify your ownership for security." },
              { step: "3", title: "Expert Unlock", text: "We perform a damage-free entry using precision tools. Usually takes < 5 mins." },
              { step: "4", title: "Back on the Road", text: "Pay via card or cash and get back to your day. 100% scratch-free guarantee." }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--action-orange)', color: 'var(--bg-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 1.5rem auto', fontSize: '1.5rem', fontWeight: 'bold' }}>{item.step}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '3rem' }}>Emergency Lockout FAQ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "What if my car has a dead battery? Can you still unlock it?", a: "Yes. Many modern cars use electronic locks that fail when the battery is dead. We use a combination of physical manipulation and emergency power-jumping to safely gain entry without damaging the electronics." },
              { q: "Is it really 100% scratch-free?", a: "Correct. We never use metal-on-metal tools. Our air wedges are soft polymer and our reach tools are heat-shrunk in protective rubber to ensure your paint and trim are never touched." },
              { q: "What proof do I need to show the technician?", a: "For your safety and ours, we require a valid ID and proof of vehicle ownership (Registration or Insurance) before we can legally open any vehicle." }
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
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, var(--action-orange), #FF8C00)', color: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0F172A' }}>Locked Out Right Now?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Our NYC dispatchers will route the nearest technician to your coordinates.</p>
          <a href="tel:3478017119" className="btn btn-pulse" style={{ background: '#0F172A', color: 'var(--text-primary)', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={24} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
