import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Auto Locksmith Services | QuickCarUnlock NYC',
  description: 'Explore our complete range of mobile auto locksmith services in NYC. We specialize in emergency car lockouts, key replacement, and ignition repair.',
};

export default function ServicesPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '1rem' }}>Our Auto Locksmith Services</h1>
      <p className="text-slate-gray text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        We provide professional, fast, and mobile automotive locksmith services across all five New York City boroughs.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Service 1 */}
        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Emergency Car Lockout</h2>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
            Locked your keys in the car or trunk? Our technicians use specialized, damage-free entry tools to unlock your vehicle in minutes. We respond 24/7 to emergencies.
          </p>
          <Link href="/services/emergency-lockout" className="btn btn-secondary w-100 text-center">Learn More</Link>
        </div>

        {/* Service 2 */}
        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Key Replacement</h2>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
            Lost your only set of car keys? We cut and program new transponder keys and smart fobs on the spot. Skip the dealership towing fees and wait times.
          </p>
          <Link href="/services/key-replacement" className="btn btn-secondary w-100 text-center">Learn More</Link>
        </div>

        {/* Service 3 */}
        <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Ignition Repair</h2>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem', flexGrow: 1 }}>
            Key stuck in the ignition or steering wheel locked? We diagnose, repair, and replace broken ignition cylinders directly at your location.
          </p>
          <Link href="/services/ignition-repair" className="btn btn-secondary w-100 text-center">Learn More</Link>
        </div>

      </div>

      <div className="cta-section text-center" style={{ marginTop: '4rem', padding: '3rem 1rem', backgroundColor: 'var(--trust-blue)', color: 'white', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready for Immediate Assistance?</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Our dispatchers route the nearest technician to your location.</p>
        <a href="tel:3478017119" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>Call (347) 801-7119</a>
      </div>
    </div>
  );
}
