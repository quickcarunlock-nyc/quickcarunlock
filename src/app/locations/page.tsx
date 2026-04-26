import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NYC Service Areas | QuickCarUnlock NYC',
  description: 'QuickCarUnlock provides centralized, fast-dispatch auto locksmith services across all 5 New York City boroughs: Manhattan, Brooklyn, Queens, Bronx, and Staten Island.',
};

export default function LocationsHubPage() {
  const boroughs = [
    { id: 'manhattan', name: 'Manhattan', desc: 'Fast emergency lockout service from the Financial District to Washington Heights.' },
    { id: 'brooklyn', name: 'Brooklyn', desc: 'Comprehensive auto locksmith coverage for all Brooklyn neighborhoods.' },
    { id: 'queens', name: 'Queens', desc: 'Mobile key replacement and unlocking from Astoria to Jamaica.' },
    { id: 'bronx', name: 'The Bronx', desc: 'Rapid response times across the entire Bronx borough.' },
    { id: 'staten-island', name: 'Staten Island', desc: 'Dedicated mobile locksmith units stationed throughout Staten Island.' },
  ];

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '1rem' }}>Our NYC Service Areas</h1>
      <p className="text-slate-gray text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        We utilize a centralized dispatch system to route the closest available technician directly to your location anywhere in New York City.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {boroughs.map((b) => (
          <div key={b.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <h2 className="text-action-orange" style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>{b.name}</h2>
            <p className="text-slate-gray" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>{b.desc}</p>
            <Link href={`/locations/${b.id}`} className="btn btn-secondary w-100 text-center">
              View {b.name} Services
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center" style={{ marginTop: '4rem' }}>
        <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Are you stranded right now?</h3>
        <p className="text-slate-gray" style={{ marginBottom: '1.5rem' }}>Call our 24/7 dispatch for immediate assistance regardless of your borough.</p>
        <a href="tel:3478017119" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>Call (347) 801-7119</a>
      </div>
    </div>
  );
}
