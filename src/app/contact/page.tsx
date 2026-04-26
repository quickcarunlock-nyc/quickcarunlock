import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact QuickCarUnlock NYC | 24/7 Emergency Service',
  description: 'Contact QuickCarUnlock NYC for 24/7 mobile auto locksmith services. We serve Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '1rem' }}>Contact Us</h1>
      <p className="text-slate-gray text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        We operate a 24/7 mobile service across all five boroughs of New York City. We dispatch technicians directly to your location.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Contact Details Card */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 className="text-trust-blue" style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>24/7 Emergency Dispatch</h3>
            <a href="tel:3478017119" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--action-orange)' }}>(347) 801-7119</a>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Operating Hours</h3>
            <p className="text-slate-gray">Open 24 Hours a Day, 7 Days a Week. We work on all major holidays.</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Service Area</h3>
            <p className="text-slate-gray">Mobile Service Only. We cover Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.</p>
            <p className="text-safety-green" style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>✓ We Come To You</p>
          </div>
        </div>

        {/* Action Card */}
        <div className="card" style={{ padding: '2rem', backgroundColor: 'var(--background-light)', border: 'none' }}>
          <h2 className="text-trust-blue" style={{ marginBottom: '1.5rem' }}>How Can We Help?</h2>
          
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem' }}>
            If you are currently locked out of your car or stranded with a broken key, please call us immediately for the fastest response.
          </p>
          <a href="tel:3478017119" className="btn btn-primary w-100 text-center" style={{ marginBottom: '1rem' }}>Call for Immediate Help</a>
          
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
            Need a key replacement or ignition repair and want to check pricing first? Use our online tools.
          </p>
          <Link href="/price-estimator" className="btn btn-secondary w-100 text-center" style={{ marginBottom: '1rem' }}>Price Estimator</Link>
          <Link href="/request-a-quote" className="btn btn-secondary w-100 text-center">Request a Custom Quote</Link>
        </div>

      </div>
    </div>
  );
}
