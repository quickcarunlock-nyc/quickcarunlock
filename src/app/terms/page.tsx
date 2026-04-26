import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | QuickCarUnlock NYC',
  description: 'Read the terms and conditions for using QuickCarUnlock mobile auto locksmith services in New York City.',
};

export default function TermsPage() {
  return (
    <div className="container" style={{ padding: '6rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms of Service</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--action-orange)' }}>1. Service Agreement</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          By accessing this website and requesting services from QuickCarUnlock, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--action-orange)' }}>2. Dispatch Model & Estimates</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          QuickCarUnlock operates as a centralized dispatch network of certified mobile technicians. All price estimates provided over the phone or via the website are "starting at" estimates. A final, binding quote will be provided by the technician on-site after assessing the vehicle and lock complexity.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--action-orange)' }}>3. Cancellation Policy</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Once a technician has been dispatched to your location, a cancellation fee may apply if the service is cancelled while the unit is in transit. This fee covers the fuel and time costs for our mobile technicians.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--action-orange)' }}>4. Limitation of Liability</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          While our technicians use specialized, damage-free entry tools, QuickCarUnlock and its partners are not liable for pre-existing mechanical failures of the vehicle's locking system or incidental wear and tear during emergency entry procedures.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--action-orange)' }}>5. Governing Law</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          These terms and conditions are governed by and construed in accordance with the laws of the State of New York and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
        </p>
      </section>

      <p style={{ marginTop: '4rem', color: 'var(--slate-light)', fontSize: '0.9rem' }}>
        Last updated: April 2026
      </p>
    </div>
  );
}
