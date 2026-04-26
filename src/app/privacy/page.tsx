import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | QuickCarUnlock NYC',
  description: 'Our commitment to protecting your privacy and personal data while providing mobile locksmith services.',
};

export default function PrivacyPage() {
  return (
    <div className="container" style={{ padding: '6rem 1rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--safety-green)' }}>1. Information We Collect</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          We collect information necessary to provide emergency dispatch services, including your phone number, the location of the vehicle, and the vehicle's make and model. We also collect basic browser data to improve site performance.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--safety-green)' }}>2. How We Use Your Information</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          Your data is used solely for the purpose of fulfilling your service request. This includes communicating with you about your technician's ETA and processing your payment for services rendered.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--safety-green)' }}>3. Information Sharing</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          We do not sell, trade, or rent your personal identification information to third parties. We only share information with our certified technicians and payment processors as required to complete your service.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--safety-green)' }}>4. Security</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <p style={{ marginTop: '4rem', color: 'var(--slate-light)', fontSize: '0.9rem' }}>
        Last updated: April 2026
      </p>
    </div>
  );
}
