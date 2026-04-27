import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, Zap, Star, Phone, CheckCircle2, AlertTriangle, Building2, HelpCircle } from 'lucide-react';

// Pre-define the static routes for Cloudflare Pages
export function generateStaticParams() {
  return [
    { borough: 'manhattan' },
    { borough: 'brooklyn' },
    { borough: 'queens' },
    { borough: 'bronx' },
    { borough: 'staten-island' },
  ];
}

type Props = {
  params: Promise<{ borough: string }>;
};

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const boroughId = resolvedParams.borough;
  const data = boroughData[boroughId as keyof typeof boroughData];
  
  if (!data) return { title: 'Location Not Found' };

  return {
    title: `24/7 Car Unlock Service in ${data.name}, NYC | Auto Locksmith`,
    description: `Need a car unlocked in ${data.name}? Our mobile auto locksmiths provide 15-minute response times for lockouts, key replacement, and ignition repair across ${data.name}.`,
  };
}

const boroughData = {
  'manhattan': {
    name: 'Manhattan',
    advantage: 'Our Manhattan units utilize a high-maneuverability fleet specifically chosen for the narrow streets and heavy gridlock of Midtown and the Financial District. By utilizing the West Side Highway and FDR Drive, we bypass major blockages to reach you faster.',
    scenarios: 'Whether you are stuck in a parking garage near Hudson Yards, locked out after a show in the Theater District, or lost your fob in Central Park, we can reach you.',
    faqs: [
      { q: "Can your vans fit into tight Manhattan parking structures?", a: "Yes. We operate a fleet of compact, fully-equipped service units designed to enter low-clearance Manhattan parking garages that traditional tow trucks cannot access." },
      { q: "How do you find me if I'm stranded on a busy avenue with no parking?", a: "Our dispatchers use live GPS pings. We can meet you at your vehicle's exact coordinates, and our mobile units are authorized to perform rapid on-site service even in high-traffic zones." },
      { q: "Do you have the specialized tools for luxury brands like Audi or BMW?", a: "Absolutely. Manhattan has a high density of European luxury vehicles. We carry specialized Lishi picks and diagnostic tablets specifically for high-security German and Italian makes." },
      { q: "Can you replace a lost key fob for a push-to-start vehicle on-site?", a: "Yes. We carry hundreds of smart fobs in stock and can program them directly to your car's ECU right on the street, avoiding a dealership tow." }
    ],
    landmarks: ['Times Square', 'Financial District', 'Hudson Yards', 'Central Park', 'Grand Central'],
    reviews: [
      { name: "David L.", area: "Chelsea", text: "Locked my keys in my BMW near the High Line. Tech arrived in 15 mins and used a specialized tool. Zero damage." },
      { name: "Sarah K.", area: "Upper East Side", text: "Lost my fob while shopping. They cut and programmed a new Audi key right on the street for half the dealer price." }
    ],
    neighborhoods: ['Financial District', 'Midtown', 'Upper East Side', 'Upper West Side', 'Harlem', 'Washington Heights', 'Chelsea', 'Tribeca'],
  },
  'brooklyn': {
    name: 'Brooklyn',
    advantage: 'Our Brooklyn dispatch center is located near the junction of the BQE and Belt Parkway, allowing our technicians to surge into residential neighborhoods from Greenpoint to Bay Ridge in record time.',
    scenarios: 'Commonly dispatched for late-night lockouts near Williamsburg nightlife, commuters at the Barclays Center, and residential key replacements in Park Slope.',
    faqs: [
      { q: "I'm stranded late at night near a venue in Williamsburg. Are you available?", a: "Yes. We maintain a heavy presence in North Brooklyn during late-night hours specifically to assist nightlife-goers and hospitality workers." },
      { q: "Can you reach me if I'm parked on a narrow residential street?", a: "Of course. Our technicians are experts at navigating Brooklyn's unique parking situations, including narrow one-way streets and alternate-side parking zones." },
      { q: "Do you serve deep residential areas like Canarsie or East New York?", a: "Yes. Our Brooklyn coverage is 100% comprehensive. We have dedicated mobile units that exclusively patrol the residential heart of Brooklyn 24/7." },
      { q: "What if my car is an older model with manual locks?", a: "We service every generation of vehicle. Our techs carry specialized tools to safely unlock older manual systems without damaging your door seals or lock rods." }
    ],
    landmarks: ['Barclays Center', 'Brooklyn Bridge Park', 'Prospect Park', 'Coney Island', 'Williamsburg'],
    reviews: [
      { name: "Michael R.", area: "Williamsburg", text: "Stranded at 3 AM. QuickCarUnlock was the only one who actually picked up. Fast, professional service." },
      { name: "Jessica M.", area: "Bay Ridge", text: "Ignition jammed in my driveway. They rebuilt the cylinder right there. Saved me a massive tow bill." }
    ],
    neighborhoods: ['Williamsburg', 'Flatbush', 'Park Slope', 'Bedford-Stuyvesant', 'Coney Island', 'Bushwick', 'Bay Ridge', 'Greenpoint'],
  },
  'queens': {
    name: 'Queens',
    advantage: 'Queens is the largest borough by area, so we station units along the Long Island Expressway and Grand Central Parkway to maintain a 20-minute average response time from Astoria to Jamaica.',
    scenarios: 'Specializing in emergency key replacements at JFK and LaGuardia airports and rapid lockout relief for diners in the busy Astoria restaurant corridors.',
    faqs: [
      { q: "Can you provide service at JFK or LaGuardia airport parking lots?", a: "Absolutely. We are authorized to provide mobile locksmith services at all major NYC airport parking facilities. We can meet you at your terminal or long-term lot." },
      { q: "Do you charge more for services performed at the airport?", a: "No. Our pricing is standardized across the entire borough of Queens. There are no 'airport convenience fees' or hidden travel surcharges." },
      { q: "My car has a transponder key. Can you make it today?", a: "Yes. While dealerships often take days to order these, we carry the blank chips in our vans and can cut and program them on-site in under an hour." },
      { q: "Are you available for early morning lockouts near Astoria?", a: "Yes. We operate 24 hours a day. Whether it's a 5 AM shift start or a late dinner, our Queens units are always on patrol." }
    ],
    landmarks: ['JFK Airport', 'LaGuardia Airport', 'Citi Field', 'Flushing Meadows', 'Rockaway Beach'],
    reviews: [
      { name: "Kevin H.", area: "Astoria", text: "Locked out outside a restaurant. Tech was there before I finished my coffee. Amazing speed." },
      { name: "Linda P.", area: "Flushing", text: "Lost my keys on a flight. They met me at JFK long-term parking and made a new key on the spot. Lifesavers." }
    ],
    neighborhoods: ['Astoria', 'Flushing', 'Jamaica', 'Long Island City', 'Forest Hills', 'Bayside', 'Jackson Heights', 'Sunnyside'],
  },
  'bronx': {
    name: 'The Bronx',
    advantage: 'Our Bronx technicians are experts at navigating the Cross Bronx and Major Deegan Expressways. We maintain a heavy presence near the Grand Concourse to ensure we are always minutes away.',
    scenarios: 'Regularly assisting fans at Yankee Stadium, commuters near the Hub, and residents throughout the North Bronx with ignition repairs and emergency entries.',
    faqs: [
      { q: "I'm stranded near Yankee Stadium after a game. Can you reach me?", a: "Yes. Our techs know the local back-routes to bypass stadium traffic and reach your parking spot even during peak event exit times." },
      { q: "Do you provide a written receipt for insurance reimbursement?", a: "Yes. We provide full digital and paper receipts that you can submit to your insurance or roadside assistance provider for reimbursement." },
      { q: "My key broke off inside the door lock. Can you extract it?", a: "Yes. We use precision extraction tools to remove broken blades without damaging the lock cylinder, often saving you from needing a full lock replacement." },
      { q: "Are your Bronx technicians background-checked?", a: "Every technician is fully vetted, background-checked, and highly trained. Your safety and security are our top priorities." }
    ],
    landmarks: ['Yankee Stadium', 'Bronx Zoo', 'Grand Concourse', 'Pelham Bay Park', 'City Island'],
    reviews: [
      { name: "Robert J.", area: "Riverdale", text: "Key snapped in the door. They extracted it and made a new one in 30 minutes. Very impressed." },
      { name: "Maria S.", area: "South Bronx", text: "Fastest locksmith in the Bronx. No hidden fees, the price they quoted was the price I paid." }
    ],
    neighborhoods: ['Riverdale', 'Fordham', 'South Bronx', 'Pelham Bay', 'Throgs Neck', 'Mott Haven', 'Kingsbridge', 'Woodlawn'],
  },
  'staten-island': {
    name: 'Staten Island',
    advantage: 'Unlike city-wide services that get stuck at the Verrazzano, we maintain dedicated technicians who live and work exclusively on Staten Island. We are your true local response.',
    scenarios: 'Providing fast relief at the St. George Ferry Terminal, the Staten Island Mall, and residential driveways from Tottenville to New Dorp.',
    faqs: [
      { q: "Are your technicians actually located on Staten Island?", a: "Yes. We have dedicated mobile units that are stationed exclusively on Staten Island. This allows us to avoid bridge traffic and reach you in minutes." },
      { q: "Can you help if my car is stranded at the St. George Ferry Terminal?", a: "Yes, we frequently assist commuters at the ferry terminal and nearby commuter lots. We can reach you fast before your next connection." },
      { q: "Do you charge extra for the bridge toll to Staten Island?", a: "No. Our Staten Island units are already on the island. There are zero additional toll fees or 'off-island' travel surcharges for our services here." },
      { q: "Can you program smart keys for newer vehicles locally?", a: "Yes. Our vans carry the same advanced diagnostic computers as the dealership, allowing us to program smart fobs right in your driveway." }
    ],
    landmarks: ['St. George Ferry', 'Verrazzano Bridge', 'Staten Island Mall', 'Conference House Park', 'Snug Harbor'],
    reviews: [
      { name: "Anthony V.", area: "Tottenville", text: "Real local guys. They were at my house in 10 minutes. Don't call the big city companies, call these guys." },
      { name: "Nicole B.", area: "Great Kills", text: "Lost my keys at the mall. They handled the transponder programming perfectly for my Jeep. Highly recommend." }
    ],
    neighborhoods: ['St. George', 'Tottenville', 'New Springville', 'Great Kills', 'West New Brighton', 'Eltingville', 'New Dorp', 'Stapleton'],
  }
};

export default async function BoroughPage({ params }: Props) {
  const resolvedParams = await params;
  const boroughId = resolvedParams.borough;
  const data = boroughData[boroughId as keyof typeof boroughData];

  if (!data) {
    notFound();
  }

  return (
    <div className="location-detail-page">
      {/* Local Hero Section */}
      <section style={{ padding: '6rem 1rem 4rem 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '50%', height: '50%', background: 'var(--glow-blue)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--safety-green)', color: 'var(--safety-green)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <MapPin size={16} /> Local {data.name} Dispatch Active
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            24/7 Car Unlocking in <span className="text-orange-gradient">{data.name}</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            New York City's fastest mobile locksmith response for {data.name} residents and commuters.
          </p>
        </div>
      </section>

      {/* Local Advantage & Landmarks */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The {data.name} Advantage</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {data.advantage}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {data.scenarios}
              </p>
              
              <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Building2 size={20} color="var(--action-orange)" /> Serving Near Landmarks:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {data.landmarks.map((mark, i) => (
                    <span key={i} style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--slate-light)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.9rem' }}>{mark}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={24} color="var(--action-orange)" /> {data.name} Price List
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { service: "Emergency Car Unlock", price: "$55+" },
                  { service: "Key Replacement", price: "$120+" },
                  { service: "Ignition Repair", price: "$150+" },
                  { service: "Fob Programming", price: "$145+" }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{item.service}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{item.price}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '1.5rem', fontStyle: 'italic' }}>
                *All prices are starting estimates for {data.name} residents. Final quote provided on-site.
              </p>
              <a href="tel:3478017119" className="btn btn-primary w-100 text-center" style={{ marginTop: '1.5rem', display: 'block' }}>Call For Exact Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ & Neighborhood Grid */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{data.name} Local FAQ</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.faqs.map((f, i) => (
                  <div key={i} className="card" style={{ padding: '1.5rem' }}>
                    <h4 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem' }}>
                      <HelpCircle size={18} color="var(--action-orange)" /> {f.q}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.9rem' }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Neighborhoods We Serve</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {data.neighborhoods.map((hood, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--safety-green)" /> {hood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Social Proof */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.3rem', textAlign: 'center', marginBottom: '3.5rem' }}>Real {data.name} Customer Reviews</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {data.reviews.map((rev, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFC107" color="#FFC107" />)}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7' }}>{rev.text}</p>
                <div style={{ fontWeight: 600 }}>— {rev.name}, {rev.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Final CTA */}
      <section style={{ padding: '5rem 1rem', background: 'linear-gradient(135deg, var(--action-orange), #FF8C00)', color: '#0F172A', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#0F172A' }}>Stranded in {data.name}?</h2>
          <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', fontWeight: 500, opacity: 0.9 }}>Our closest {data.name} unit is available for immediate dispatch.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:3478017119" className="btn btn-pulse" style={{ background: '#0F172A', color: 'var(--text-primary)', fontSize: '1.4rem', padding: '1.2rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={24} /> Dispatch: (347) 801-7119
            </a>
            <Link href="/price-estimator" className="btn" style={{ background: 'transparent', border: '2px solid #0F172A', color: '#0F172A', fontSize: '1.4rem', padding: '1.2rem 3rem' }}>
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
