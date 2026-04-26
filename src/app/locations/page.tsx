import { Metadata } from 'next';
import Link from 'next/link';
import MapWrapper from '@/components/MapWrapper';
import { 
  MapPin, Navigation, Clock, Zap, ShieldCheck, Phone, Route, Radio, Car, Target 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NYC Auto Locksmith Service Areas | QuickCarUnlock',
  description: 'Fast, centralized dispatch auto locksmith serving all 5 NYC Boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. 15-minute response times.',
};

export default function LocationsHubPage() {
  const boroughs = [
    { 
      id: 'manhattan', 
      name: 'Manhattan', 
      time: '15-20 Min',
      desc: 'Navigating the grid from the Financial District to Washington Heights.',
      neighborhoods: ['Financial District', 'Tribeca', 'SoHo', 'Chelsea', 'Midtown', 'Upper East Side', 'Upper West Side', 'Harlem', 'Washington Heights', 'Inwood']
    },
    { 
      id: 'brooklyn', 
      name: 'Brooklyn', 
      time: '15-25 Min',
      desc: 'Complete coverage across Brooklyn via the BQE and local routes.',
      neighborhoods: ['Williamsburg', 'Greenpoint', 'DUMBO', 'Downtown Brooklyn', 'Park Slope', 'Bedford-Stuyvesant', 'Crown Heights', 'Flatbush', 'Bay Ridge', 'Coney Island']
    },
    { 
      id: 'queens', 
      name: 'Queens', 
      time: '20-30 Min',
      desc: 'Rapid dispatch along the LIE, Grand Central, and Queens Blvd.',
      neighborhoods: ['Astoria', 'Long Island City', 'Sunnyside', 'Jackson Heights', 'Flushing', 'Jamaica', 'Forest Hills', 'Bayside', 'Rockaway Beach']
    },
    { 
      id: 'bronx', 
      name: 'The Bronx', 
      time: '15-25 Min',
      desc: 'Quick access via the Cross Bronx and Major Deegan Expressways.',
      neighborhoods: ['South Bronx', 'Riverdale', 'Fordham', 'Pelham Bay', 'Throgs Neck', 'Co-op City', 'Woodlawn', 'Kingsbridge']
    },
    { 
      id: 'staten-island', 
      name: 'Staten Island', 
      time: '20-30 Min',
      desc: 'Dedicated units stationed locally to avoid bridge traffic.',
      neighborhoods: ['St. George', 'Tompkinsville', 'Tottenville', 'Great Kills', 'New Dorp', 'West New Brighton', 'Stapleton', 'Eltingville']
    },
  ];

  return (
    <div className="locations-page">
      
      {/* Premium Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '40%', height: '100%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '850px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--safety-green)', color: 'var(--safety-green)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--safety-green)', boxShadow: '0 0 10px var(--safety-green)', animation: 'pulse 2s infinite' }}></span>
            City-Wide Fleet Currently Active
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            New York City's Largest <br /><span className="text-orange-gradient">Mobile Dispatch Network</span>.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.6' }}>
            We don't operate out of a single storefront. Our certified technicians are stationed in fully-equipped mobile workshops across all 5 boroughs, ensuring rapid response times no matter where you are stranded.
          </p>
        </div>
      </section>

      {/* The Centralized Dispatch Explainer */}
      <section style={{ padding: '4rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How Our Dispatch System Works</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>We use advanced logistics to reach you faster than a traditional locksmith.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card card-hover" style={{ textAlign: 'center', borderTop: '4px solid #3B82F6' }}>
              <Radio size={40} color="#3B82F6" style={{ margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>1. Live GPS Tracking</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>Our centralized system tracks the exact GPS coordinates of every QuickCarUnlock mobile unit actively patrolling the five boroughs.</p>
            </div>
            
            <div className="card card-hover" style={{ textAlign: 'center', borderTop: '4px solid var(--action-orange)' }}>
              <Target size={40} color="var(--action-orange)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>2. Proximity Routing</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>When you call, our software instantly identifies the technician closest to your location, calculating real-time traffic and distance.</p>
            </div>

            <div className="card card-hover" style={{ textAlign: 'center', borderTop: '4px solid var(--safety-green)' }}>
              <Zap size={40} color="var(--safety-green)" style={{ margin: '0 auto 1.5rem auto' }} />
              <h3 style={{ fontSize: '1.3rem', color: '#0F172A', marginBottom: '1rem' }}>3. Immediate Dispatch</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6' }}>The job is beamed directly to the technician's onboard tablet, allowing them to route directly to your vehicle without delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Map Integration & Arrival Times */}
      <section style={{ padding: '6rem 1rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '12px 20px', background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(10px)', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Live Fleet Positioning</span>
            </div>
            <MapWrapper />
          </div>

          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Average Arrival Times</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              We set realistic expectations based on current NYC traffic patterns. Because our vans are already on the road, we consistently beat industry average response times.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {boroughs.map((b, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)' }}>{b.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--action-orange)', fontWeight: 700 }}>
                    <Clock size={18} /> {b.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Borough & Neighborhood Mega Menus */}
      <section style={{ padding: '6rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <MapPin size={40} color="var(--action-orange)" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Comprehensive NYC Coverage</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>Select your borough to view our specialized local services.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {boroughs.map((b) => (
              <div key={b.id} className="card card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.6rem', color: '#0F172A', margin: 0 }}>{b.name}</h3>
                  <Link href={`/locations/${b.id}`} style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>View Details</Link>
                </div>
                
                <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{b.desc}</p>
                
                <div style={{ marginTop: 'auto', borderTop: '1px solid #E2E8F0', paddingTop: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#94A3B8', marginBottom: '1rem', fontWeight: 600 }}>Popular Neighborhoods Served:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {b.neighborhoods.map((n, i) => (
                      <span key={i} style={{ fontSize: '0.8rem', background: '#F1F5F9', color: '#475569', padding: '4px 10px', borderRadius: '50px' }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Artery Expertise */}
      <section style={{ padding: '5rem 1rem', background: '#0B1120', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <Route size={40} color="var(--safety-green)" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>We Know The Streets</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Unlike out-of-state dispatch centers, our local technicians know how to navigate New York. From dodging traffic on the <strong>FDR Drive</strong> and <strong>BQE</strong>, to utilizing the <strong>Belt Parkway</strong>, <strong>Cross Bronx Expressway</strong>, and <strong>Long Island Expressway</strong>, we understand the local arteries. This local knowledge allows us to reach you significantly faster when every minute counts.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, var(--action-orange), #FF8C00)', color: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0F172A' }}>Stranded Right Now?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Call our 24/7 dispatch line for immediate mobile assistance.</p>
          <a href="tel:3478017119" className="btn btn-pulse" style={{ background: '#0F172A', color: 'var(--text-primary)', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={24} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
