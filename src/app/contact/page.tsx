import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  CheckCircle2, ArrowRight, MessageSquare, Car, Radio
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact QuickCarUnlock NYC | 24/7 Mobile Dispatch',
  description: 'Need assistance? Contact QuickCarUnlock NYC for 24/7 mobile auto locksmith services across Manhattan, Brooklyn, Queens, Bronx, and Staten Island.',
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--glow-orange)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '850px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            How Can We <span className="text-orange-gradient">Help You</span> Today?
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            We operate a 100% mobile dispatch network. We don't have a storefront because we are always on the road, stationed in your neighborhood to reach you faster.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            
            {/* Direct Contact Info */}
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Direct Dispatch Lines</h2>
              
              <div className="card" style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--action-orange)', padding: '12px', borderRadius: '12px', color: 'var(--bg-primary)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>24/7 Emergency Hotlines</h3>
                    <a href="tel:3478017119" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>(347) 801-7119</a>
                    <p style={{ color: 'var(--slate-light)', fontSize: '0.9rem' }}>Instant connection to a live NYC dispatcher.</p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ background: '#3B82F6', padding: '12px', borderRadius: '12px', color: 'white' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Response Readiness</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}><strong>Monday - Sunday:</strong> Open 24 Hours</p>
                    <p style={{ color: 'var(--text-secondary)' }}><strong>Holidays:</strong> Open 24 Hours</p>
                  </div>
                </div>
              </div>

              <div className="card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--safety-green)', padding: '12px', borderRadius: '12px', color: 'var(--bg-primary)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Service Coverage</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We serve all 5 NYC boroughs. We are a mobile-only service; our technicians meet you at your vehicle's location.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card" style={{ padding: '3rem 2rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40%', height: '40%', background: 'var(--glow-blue)', filter: 'blur(80px)', opacity: 0.3 }}></div>
              
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Need a Fast Solution?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                Whether it's an emergency lockout or a scheduled key replacement, use the options below for the fastest assistance.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <Link href="/request-a-quote" className="btn btn-primary" style={{ textAlign: 'center', padding: '1.2rem' }}>
                  Request a Binding Quote
                </Link>
                <Link href="/locations" className="btn btn-secondary" style={{ textAlign: 'center', padding: '1.2rem' }}>
                  Find a Tech Near You
                </Link>
                <Link href="/services" className="btn btn-secondary" style={{ textAlign: 'center', padding: '1.2rem' }}>
                  Browse All Services
                </Link>
              </div>

              <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'var(--safety-green)' }}>
                  <ShieldCheck size={20} /> <span style={{ fontWeight: 600 }}>Verified Local Business</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-light)', lineHeight: '1.6' }}>
                  QuickCarUnlock NYC is a certified, insured automotive locksmith network. Your security is our absolute priority.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section style={{ padding: '4rem 1rem', background: '#0B1120', textAlign: 'center', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><CheckCircle2 size={18} /> Licensed</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><CheckCircle2 size={18} /> Insured</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><CheckCircle2 size={18} /> Background Checked</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white' }}><CheckCircle2 size={18} /> 24/7 Available</div>
          </div>
        </div>
      </section>

    </div>
  );
}
