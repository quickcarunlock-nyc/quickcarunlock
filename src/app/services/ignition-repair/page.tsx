import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Ignition Repair NYC | Stuck Key & Cylinder Replacement',
  description: 'Key won\'t turn in the ignition? We provide mobile car ignition repair and cylinder replacement across NYC. Fast service to get your car starting again.',
};

export default function IgnitionRepairPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '2rem' }}>Car Ignition Repair Service</h1>
      
      <div className="content-section" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        
        <h3 className="text-trust-blue" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Ignition Cylinder Repair in New York City</h3>
        
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Diagnosing a Stuck Key or Locked Steering Wheel**</h4>
        <p style={{ marginBottom: '1rem' }}>A car key that refuses to turn creates a very frustrating situation. You might experience a completely **stuck key** inside the ignition slot. Sometimes the key slides in easily but the engine simply will not start. The steering wheel often locks up completely alongside the ignition issue. You cannot drive or even move the vehicle safely.</p>
        <p style={{ marginBottom: '1rem' }}>Many drivers assume the car battery died when the **key won't turn**. They attempt to jumpstart the vehicle without success. The real problem usually lies within the mechanical components of the ignition itself. The internal wafers wear down over years of continuous daily use. Dirt and debris also accumulate inside the narrow cylinder slot.</p>
        <p style={{ marginBottom: '1rem' }}>Forcing the key with excessive pressure causes catastrophic damage. The metal blade will snap off inside the locking mechanism. This turns a simple repair into a much more complicated extraction process. You must call a professional locksmith to assess the situation properly. We diagnose the exact mechanical failure before attempting any physical repairs.</p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Professional Cylinder Replacement and Repair**</h4>
        <p style={{ marginBottom: '1rem' }}>Our technicians disassemble the steering column carefully to access the broken components. We remove the faulty **ignition switch** without damaging the surrounding dashboard plastic. Specialized tools allow us to extract the core cylinder safely. We inspect the internal pins and springs for visible damage. This careful inspection determines the best path forward for your vehicle.</p>
        <p style={{ marginBottom: '1rem' }}>We often rebuild the existing lock if the damage remains minimal. The technician replaces the worn internal wafers with brand new brass pieces. This restores the original smooth turning motion immediately. Rebuilding saves money and lets you keep your original car keys. The repaired mechanism functions exactly like a brand new factory part.</p>
        <p style={{ marginBottom: '1rem' }}>Severe internal damage requires a complete **cylinder replacement** to guarantee reliability. We install a high-quality aftermarket or original equipment manufacturer part. The technician codes the new cylinder to match your existing keys. You avoid the hassle of carrying two different keys for the door and ignition. The entire replacement process finishes in under an hour.</p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Mobile Service Unlocks Your Stranded Vehicle**</h4>
        <p style={{ marginBottom: '1rem' }}>An ignition failure leaves your car completely immobilized on the street. You cannot drive it to a mechanic shop for a proper diagnosis. Hiring a tow truck adds unnecessary expenses to your repair bill. A mobile auto locksmith solves this entire problem directly on site. We bring the repair shop straight to your parking spot.</p>
        <p style={{ marginBottom: '1rem' }}>We dispatch a fully equipped service van to your specific NYC location. The technician arrives with a comprehensive inventory of replacement switches and rebuilding kits. We handle all makes and models from standard sedans to heavy-duty trucks. You get professional service right where your vehicle broke down. This eliminates the stress of arranging complex transportation.</p>
        <p style={{ marginBottom: '1rem' }}>You receive a transparent price estimate before any mechanical work begins. We explain the difference between a simple rebuild and a full replacement. You make an informed decision based on our expert recommendation. We fix the underlying problem and get your engine running again. You drive away safely without visiting a traditional auto repair shop.</p>

        <div className="cta-section text-center" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--background-light)', borderRadius: '8px' }}>
          <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Car Won't Start? Key Stuck?</h3>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem' }}>We provide mobile ignition repair everywhere in NYC.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:3478017119" className="btn btn-primary">Call (347) 801-7119</a>
            <Link href="/price-estimator" className="btn btn-secondary">Get an Estimate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
