import { Metadata } from 'next';
import Link from 'next/link';
import MapWrapper from '@/components/MapWrapper';
import { 
  MapPin, Navigation, Clock, Zap, ShieldCheck, Phone, Route, Radio, Car, Target, CheckCircle2 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NYC Auto Locksmith Service Areas | QuickCarUnlock NYC',
  description: 'Fast, centralized dispatch auto locksmith serving all 5 NYC Boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. 15-minute response times.',
};

export default function LocationsHubPage() {
  const boroughs = [
    { 
      id: 'manhattan', 
      name: 'Manhattan', 
      time: '15-20 Min',
      desc: 'From the Financial District to Harlem, we cover every Manhattan neighborhood.',
      neighborhoods: ['Financial District', 'Tribeca', 'SoHo', 'Chelsea', 'Midtown', 'Upper East Side', 'Upper West Side', 'Harlem', 'Washington Heights', 'Inwood']
    },
    { 
      id: 'brooklyn', 
      name: 'Brooklyn', 
      time: '15-25 Min',
      desc: 'Servicing Williamsburg, Park Slope, Bay Ridge, Coney Island, and beyond.',
      neighborhoods: ['Williamsburg', 'Greenpoint', 'DUMBO', 'Downtown Brooklyn', 'Park Slope', 'Bedford-Stuyvesant', 'Crown Heights', 'Flatbush', 'Bay Ridge', 'Coney Island']
    },
    { 
      id: 'queens', 
      name: 'Queens', 
      time: '20-30 Min',
      desc: 'Rapid response throughout Astoria, Long Island City, Flushing, Jamaica, and Rockaway Beach.',
      neighborhoods: ['Astoria', 'Long Island City', 'Sunnyside', 'Jackson Heights', 'Flushing', 'Jamaica', 'Forest Hills', 'Bayside', 'Rockaway Beach']
    },
    { 
      id: 'bronx', 
      name: 'The Bronx', 
      time: '15-25 Min',
      desc: 'Covering Morris Park, Riverdale, Fordham, Mott Haven, and all Bronx communities.',
      neighborhoods: ['South Bronx', 'Riverdale', 'Fordham', 'Pelham Bay', 'Throgs Neck', 'Co-op City', 'Woodlawn', 'Kingsbridge']
    },
    { 
      id: 'staten-island', 
      name: 'Staten Island', 
      time: '20-30 Min',
      desc: 'Reliable service in St. George, New Springville, Tottenville, New Dorp, and across the island.',
      neighborhoods: ['St. George', 'Tompkinsville', 'Tottenville', 'Great Kills', 'New Dorp', 'West New Brighton', 'Stapleton', 'Eltingville']
    },
  ];

  return (
    <div className="locations-page min-h-screen">
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2/5 h-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-[var(--safety-green)] text-[var(--safety-green)] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--safety-green)] shadow-[0_0_10px_var(--safety-green)] animate-pulse"></span>
            City-Wide Fleet Currently Active
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            New York City's Largest <br /><span className="text-orange-gradient">Mobile Dispatch Network</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
            We don't operate out of a single storefront. Our certified technicians are stationed in fully-equipped mobile workshops across all 5 boroughs, ensuring rapid response times no matter where you are stranded.
          </p>
          <p className="text-lg text-[var(--slate-light)] mb-8 leading-relaxed max-w-3xl mx-auto">
            Quick Car Unlock NYC is proud to be New York City's largest and most efficient mobile dispatch network for emergency auto locksmith services. We guarantee rapid response times—often within <strong>15 minutes or less</strong>—directly to your GPS coordinates.
          </p>
        </div>
      </section>

      {/* The Centralized Dispatch Explainer */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Our City-Wide Dispatch System Works</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Our commitment to speed and efficiency is built into our operational DNA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-primary)] border-t-4 border-t-[#3B82F6] hover:-translate-y-2 transition-transform shadow-xl text-center">
              <Radio size={48} className="text-[#3B82F6] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">1. Live GPS Tracking</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Our centralized dispatch system continuously tracks the exact GPS coordinates of every Quick Car Unlock mobile unit actively patrolling all five boroughs.
              </p>
            </div>
            
            <div className="card p-8 bg-[var(--bg-primary)] border-t-4 border-t-[var(--action-orange)] hover:-translate-y-2 transition-transform shadow-xl text-center">
              <Target size={48} className="text-[var(--action-orange)] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">2. Proximity Routing</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                When you call, our intelligent software instantly identifies the technician nearest to your location. It calculates the optimal route, factoring in real-time traffic conditions.
              </p>
            </div>

            <div className="card p-8 bg-[var(--bg-primary)] border-t-4 border-t-[var(--safety-green)] hover:-translate-y-2 transition-transform shadow-xl text-center">
              <Zap size={48} className="text-[var(--safety-green)] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">3. Immediate Dispatch</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Once the closest technician is identified, the job details are beamed directly to their onboard tablet. This seamless communication allows them to route directly to your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Map Integration & Arrival Times */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 left-0 right-0 px-5 py-3 bg-[rgba(15,23,42,0.8)] backdrop-blur-md z-10 flex justify-between items-center border-b border-[var(--border-color)]">
                <span className="font-semibold text-sm text-[var(--text-primary)]">Live Fleet Positioning</span>
              </div>
              <MapWrapper />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Average Arrival Times</h2>
              <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-10">
                We set realistic expectations based on current NYC traffic patterns. Because our vans are already on the road, we consistently beat industry average response times.
              </p>
              
              <div className="space-y-4">
                {boroughs.map((b, i) => (
                  <div key={i} className="flex justify-between items-center p-5 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <span className="text-xl font-bold text-[var(--text-primary)]">{b.name}</span>
                    <div className="flex items-center gap-2 text-[var(--action-orange)] font-bold text-lg">
                      <Clock size={20} /> {b.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Borough & Neighborhood Mega Menus */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-7xl">
          <div className="text-center mb-16">
            <MapPin size={48} className="text-[var(--action-orange)] mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Serving Every Corner of NYC</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Our extensive network means we're always local to you. Select your borough below to learn more about our specialized services in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boroughs.map((b) => (
              <div key={b.id} className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col hover:-translate-y-2 transition-transform shadow-xl rounded-2xl group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold m-0">{b.name}</h3>
                  <Link href={`/locations/${b.id}`} className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[var(--action-orange)] transition-colors">
                    View Details
                  </Link>
                </div>
                
                <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed flex-grow">{b.desc}</p>
                
                <div className="mt-auto pt-6 border-t border-[var(--border-color)]">
                  <p className="text-xs uppercase tracking-wider text-slate-400 mb-4 font-bold">Popular Neighborhoods Served:</p>
                  <div className="flex flex-wrap gap-2">
                    {b.neighborhoods.map((n, i) => (
                      <span key={i} className="text-xs bg-white/5 text-[var(--slate-light)] px-3 py-1.5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
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
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-4xl text-center">
          <Route size={56} className="text-[var(--safety-green)] mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-8">Why Local Matters: The Quick Car Unlock Difference</h2>
          <ul className="text-left text-xl text-[var(--text-secondary)] leading-relaxed space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            <li className="flex gap-4 items-start"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>NYC-Native Dispatchers:</strong> Our dispatchers understand the city's unique landmarks and traffic nuances.</span></li>
            <li className="flex gap-4 items-start"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Specialized Local Fleet:</strong> Equipped to navigate NYC's urban environment, including tight streets and garages.</span></li>
            <li className="flex gap-4 items-start"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Rapid Local Response:</strong> Designed to minimize your wait time and get you back to your day quickly.</span></li>
            <li className="flex gap-4 items-start"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Trusted Local Experts:</strong> We are part of the community, committed to honest and professional service.</span></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center">
        <div className="container max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#0F172A]">Stranded Right Now?</h2>
          <p className="mb-14 text-2xl font-medium opacity-90 leading-relaxed max-w-4xl mx-auto">
            Don't search endlessly for a locksmith near me; Quick Car Unlock NYC is already there. Call our 24/7 dispatch line for immediate mobile assistance.
          </p>
          <a href="tel:3478017119" className="btn btn-pulse bg-[#0F172A] text-white hover:bg-black text-3xl py-6 px-16 inline-flex items-center gap-5 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
            <Phone size={36} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
