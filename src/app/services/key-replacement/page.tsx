import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Car Key Replacement NYC | Mobile Key Cutting & Programming',
  description: 'Lost your car keys? We offer mobile car key replacement, transponder key programming, and smart fob duplication across all of NYC. Fast and affordable.',
};

export default function KeyReplacementPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '2rem' }}>Car Key Replacement Service</h1>
      
      <div className="content-section" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        
        <h3 className="text-trust-blue" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Mobile Key Duplication in New York City</h3>
        
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Replacing Lost or Broken Car Keys**</h4>
        <p style={{ marginBottom: '1rem' }}>Losing your primary set of vehicle keys creates a major inconvenience. You might drop them in a busy street or misplace them at work. A broken key stuck inside the door lock requires immediate extraction. You need a fast solution to operate your vehicle again. Dealerships usually demand towing the car to their service center.</p>
        <p style={{ marginBottom: '1rem' }}>Towing your car across the city adds massive unexpected costs. The dealership process often takes several days to complete. You lose valuable time waiting for a replacement order to arrive from the manufacturer. A mobile locksmith provides a much faster alternative. We come directly to your location with all the necessary cutting equipment.</p>
        <p style={{ marginBottom: '1rem' }}>We **cut new keys** on the spot using your vehicle identification number. Our technicians carry specialized laser cutting machines in their service vans. They produce a perfect physical match for your specific door locks and ignition cylinder. You receive a fully functional key without leaving your driveway. This saves you hundreds of dollars in towing fees.</p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Transponder Key and Fob Programming**</h4>
        <p style={{ marginBottom: '1rem' }}>Modern vehicles rely heavily on complex electronic security systems. A standard metal key cannot start the engine alone. The car requires a programmed **transponder key** to communicate with the onboard computer. The immobilizer system verifies the embedded microchip before allowing ignition. You must program the new chip to match the exact vehicle code.</p>
        <p style={{ marginBottom: '1rem' }}>Our specialists handle advanced **fob programming** for all major automobile brands. We connect specialized diagnostic tablets to your vehicle computer port. This equipment syncs the new remote seamlessly with the internal security module. The process erases any lost keys from the system memory. This crucial step prevents anyone from stealing your car later.</p>
        <p style={{ marginBottom: '1rem' }}>We supply and program proximity remotes for push-to-start ignition systems. You get the exact same functionality as the original dealer remote. The buttons unlock doors and pop the trunk perfectly. We test every single feature before handing the new keys to you. You drive away with total confidence in your new security devices.</p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Affordable Mobile Key Solutions**</h4>
        <p style={{ marginBottom: '1rem' }}>Many drivers assume they must visit the dealership for key services. This misconception leads to unnecessary expenses and wasted time. Independent mobile locksmiths offer the exact same quality at a fraction of the price. We stock hundreds of different blank keys and smart fobs. Our inventory covers almost every make and model on the road.</p>
        <p style={{ marginBottom: '1rem' }}>We provide clear pricing over the phone based on your vehicle details. You tell us the year and model of your car. We quote a firm price for the cutting and programming service. You never face hidden fees or surprise charges upon arrival. Transparency builds trust with every single customer we serve.</p>
        <p style={{ marginBottom: '1rem' }}>Our central dispatch routes the nearest technician to your specific NYC location. You avoid the hassle of finding a local shop and arranging transportation. We handle the entire **key duplication** process right where you parked. This unmatched convenience makes mobile replacement the smartest choice. You regain complete control of your vehicle within hours.</p>

        <div className="cta-section text-center" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--background-light)', borderRadius: '8px' }}>
          <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Need a New Key Cut and Programmed?</h3>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem' }}>We come to you. Get an estimate now.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:3478017119" className="btn btn-primary">Call (347) 801-7119</a>
            <Link href="/price-estimator" className="btn btn-secondary">Get an Estimate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
