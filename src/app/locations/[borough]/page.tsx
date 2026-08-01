import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, ShieldCheck, Zap, Star, Phone, CheckCircle2, AlertTriangle, Building2, HelpCircle } from 'lucide-react';
import Schema from '@/components/Schema';

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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.quickcarunlock.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.quickcarunlock.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": `https://www.quickcarunlock.com/locations/${boroughId}`
      }
    ]
  };

  return (
    <div className="location-detail-page min-h-screen">
      <Schema data={faqSchema} />
      <Schema data={breadcrumbSchema} />
      
      {/* Local Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0 opacity-40"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-[var(--safety-green)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <MapPin size={16} /> Local {data.name} Dispatch Active
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            24/7 Car Unlocking in <span className="text-orange-gradient">{data.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
            New York City's fastest mobile locksmith response for {data.name} residents and commuters.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            Quick Car Unlock NYC provides rapid, reliable, and expert mobile auto locksmith services specifically tailored for {data.name}. We can reach you anywhere in {data.name} in <strong>15 minutes or less</strong>.
          </p>
        </div>
      </section>

      {/* Local Advantage & Landmarks */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8">The {data.name} Advantage</h2>
              <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-6">
                {data.advantage}
              </p>
              <p className="text-[var(--slate-light)] text-lg leading-relaxed mb-10">
                {data.scenarios}
              </p>
              
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10 shadow-xl">
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Building2 size={28} className="text-[var(--action-orange)]" /> Serving Near Landmarks:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {data.landmarks.map((mark, i) => (
                    <span key={i} className="bg-black/30 border border-white/10 text-[var(--slate-light)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--action-orange)] hover:text-white hover:border-[var(--action-orange)] transition-all cursor-default">
                      {mark}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl rounded-3xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4 border-b border-[var(--border-color)] pb-6">
                <Zap size={32} className="text-[var(--action-orange)]" /> {data.name} Price List
              </h3>
              <div className="space-y-6">
                {[
                  { service: "Emergency Car Unlock", price: "$55+" },
                  { service: "Key Replacement", price: "$120+" },
                  { service: "Ignition Repair", price: "$150+" },
                  { service: "Fob Programming", price: "$145+" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-[var(--border-color)] last:border-0">
                    <span className="text-[var(--text-secondary)] text-lg font-medium">{item.service}</span>
                    <span className="text-2xl font-bold text-[var(--action-orange)]">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--slate-light)] mt-8 font-style: italic opacity-80">
                *All prices are starting estimates for {data.name} residents. Final quote provided on-site before any work begins.
              </p>
              <a href="tel:3478017119" className="btn btn-pulse w-full text-center mt-8 text-xl py-5 rounded-xl font-bold">Call For Exact Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized FAQ & Neighborhood Grid */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-10">{data.name} Local FAQ</h2>
              <div className="space-y-6">
                {data.faqs.map((f, i) => (
                  <div key={i} className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] shadow-lg hover:bg-white/5 transition-colors rounded-2xl">
                    <h4 className="text-xl font-bold mb-4 flex items-start gap-4">
                      <HelpCircle size={24} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                      <span className="leading-snug">{f.q}</span>
                    </h4>
                    <p className="text-[var(--slate-light)] leading-relaxed ml-10 m-0">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-10">Neighborhoods We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.neighborhoods.map((hood, i) => (
                  <div key={i} className="flex items-center gap-4 text-[var(--text-secondary)] text-lg p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[var(--safety-green)] transition-colors group cursor-default">
                    <CheckCircle2 size={24} className="text-[var(--safety-green)] group-hover:scale-110 transition-transform" /> {hood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Social Proof */}
      <section className="py-24 bg-[#0B1120] border-b border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Real {data.name} Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.reviews.map((rev, i) => (
              <div key={i} className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl rounded-3xl relative">
                <div className="absolute -top-5 -left-5 text-6xl text-[var(--action-orange)] opacity-20 font-serif">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#FFC107] text-[#FFC107]" />)}
                </div>
                <p className="text-[var(--text-secondary)] text-xl font-style: italic mb-8 leading-relaxed">"{rev.text}"</p>
                <div className="font-bold text-lg text-white">— {rev.name}, <span className="text-[var(--safety-green)]">{rev.area}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center">
        <div className="container max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#0F172A]">Stranded in {data.name}?</h2>
          <p className="mb-14 text-2xl font-medium opacity-90 leading-relaxed max-w-4xl mx-auto">
            Our closest {data.name} unit is available for immediate dispatch. Don't wait hours for a tow truck.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:3478017119" className="btn btn-pulse bg-[#0F172A] text-white hover:bg-black text-2xl py-5 px-12 inline-flex items-center justify-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
              <Phone size={28} /> Dispatch: (347) 801-7119
            </a>
            <Link href="/price-estimator" className="btn bg-transparent border-4 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-2xl py-5 px-12 inline-flex items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
