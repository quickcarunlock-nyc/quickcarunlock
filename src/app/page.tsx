import PriceEstimator from "@/components/PriceEstimator";
import MapWrapper from "@/components/MapWrapper";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-trust-blue text-clean-white" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Fast & Reliable Car Unlock Service in NYC</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#e2e8f0' }}>24/7 Emergency Auto Locksmith. We dispatch the closest technician immediately.</p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:3478017119" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              Call Now: (347) 801-7119
            </a>
            <a href="#quote" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white', fontSize: '1.25rem', padding: '1rem 2rem' }}>
              Request a Quote
            </a>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: '#10B981', fontWeight: 'bold' }}>
            <span>✓ Licensed & Insured</span>
            <span>✓ 24/7 Available</span>
            <span>✓ NYC-Wide Coverage</span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container" style={{ padding: '4rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          
          {/* Left Column: Information & Map */}
          <div>
            <h2 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Centralized Dispatch for Fast Response</h2>
            <p className="text-slate-gray" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              We operate a centralized dispatch system across the entire New York City. Whether you are in Manhattan, Brooklyn, Queens, The Bronx, or Staten Island, we instantly dispatch the closest available technician to your location. This ensures you get back on the road as quickly as possible.
            </p>
            
            <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Our Technicians Are Nearby</h3>
            <p className="text-slate-gray" style={{ marginBottom: '1rem' }}>Check our map to see our active service areas and average technician proximity.</p>
            <MapWrapper />
          </div>

          {/* Right Column: Price Estimator */}
          <div id="quote">
            <PriceEstimator />
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-light" style={{ padding: '4rem 1rem' }}>
        <div className="container text-center">
          <h2 className="text-trust-blue" style={{ marginBottom: '3rem' }}>How It Works (3 Simple Steps)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', color: 'var(--action-orange)', marginBottom: '1rem' }}>1</div>
              <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Call or Get an Estimate</h3>
              <p className="text-slate-gray">Contact us at (347) 801-7119 or use our interactive estimator.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', color: 'var(--action-orange)', marginBottom: '1rem' }}>2</div>
              <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Technician Dispatched</h3>
              <p className="text-slate-gray">We immediately route the closest available NYC technician to you.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', color: 'var(--action-orange)', marginBottom: '1rem' }}>3</div>
              <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>You're Back on the Road</h3>
              <p className="text-slate-gray">Our professional locksmiths unlock your car safely and efficiently.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
