import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
    title: `Car Unlock Service in ${data.name}, NYC | Auto Locksmith`,
    description: `Need a car unlocked in ${data.name}? Our mobile auto locksmiths provide fast, damage-free entry, key replacement, and ignition repair across ${data.name}.`,
  };
}

const boroughData = {
  'manhattan': {
    name: 'Manhattan',
    intro: 'Navigating the congested streets and tight parking spaces of Manhattan requires a specialized approach. Whether you left your keys inside the car near Times Square or lost your fob in the Financial District, you need immediate help. Finding a reliable auto locksmith amidst the heavy traffic presents a major challenge for stranded drivers. Our centralized dispatch system cuts through the delays to reach your exact avenue quickly.',
    body: 'We station multiple mobile locksmith units strategically throughout Manhattan to guarantee rapid response times. The assigned technician uses advanced GPS routing to avoid major gridlock and street closures. We carry specialized extraction tools designed specifically for high-end luxury vehicles commonly found in the city. You receive a precise ETA so you never stand waiting nervously on a busy sidewalk. We resolve the lockout safely while you watch.',
    conclusion: 'Do not trust your vehicle security to an unverified contractor operating out of a personal car. We dispatch fully certified technicians equipped with professional diagnostic tablets and cutting machines. Our clear pricing structure protects you from the hidden fees often charged in Manhattan emergencies. Call our dedicated dispatch line right now for immediate dispatch to your exact parking spot. We get you back behind the wheel safely.',
    neighborhoods: ['Financial District', 'Midtown', 'Upper East Side', 'Upper West Side', 'Harlem', 'Washington Heights'],
  },
  'brooklyn': {
    name: 'Brooklyn',
    intro: 'A car lockout disrupts your busy schedule whether you live in a residential neighborhood or a bustling commercial district in Brooklyn. Finding your keys locked in the trunk after shopping in Williamsburg or Flatbush creates instant frustration. Many drivers attempt dangerous DIY methods that cause expensive damage to the door frame. You need a trusted mobile locksmith who understands the diverse parking situations across this expansive borough.',
    body: 'Our centralized dispatch system continuously monitors technician locations across all Brooklyn neighborhoods. We assign the closest available unit the moment you call our emergency line. The technician arrives directly at your driveway or street parking spot fully equipped to handle any vehicle make. We specialize in damage-free entry techniques using professional air wedges and specialized long-reach tools. Your car remains completely scratch-free during the entire unlocking process.',
    conclusion: 'You save significant time and money by choosing a dedicated mobile service over an expensive dealership tow. We offer comprehensive solutions including transponder key programming and ignition cylinder replacements right on the street. Our technicians carry hundreds of blank keys to match your specific vehicle model perfectly. Stop worrying about your stranded vehicle and contact our 24/7 Brooklyn dispatch team. We resolve your automotive emergency immediately.',
    neighborhoods: ['Williamsburg', 'Flatbush', 'Park Slope', 'Bedford-Stuyvesant', 'Coney Island', 'Bushwick'],
  },
  'queens': {
    name: 'Queens',
    intro: 'Losing your car keys at LaGuardia or JFK airport creates a massive travel nightmare for anyone in Queens. An accidental lockout outside a restaurant in Astoria or a home in Flushing demands a fast resolution. The sheer geographic size of this borough makes finding a fast local service incredibly difficult. You need a mobile locksmith network with true comprehensive coverage across every single neighborhood.',
    body: 'We operate a highly efficient dispatch network designed specifically for the unique layout of Queens. Our system identifies the technician closest to your specific zip code instantly. The mobile unit arrives equipped with precision laser cutting machines to generate new keys on the spot. We program smart fobs and transponder chips for all modern domestic and imported vehicles. You skip the long wait times associated with traditional dealership orders.',
    conclusion: 'Your vehicle security requires the expertise of a certified automotive locksmith professional. We never use destructive entry methods that compromise your door locks or window seals. You receive a firm price estimate over the phone before we dispatch anyone to your location. Trust our experienced team to handle your lockout or key replacement safely. Call our emergency dispatch line now for the fastest service in Queens.',
    neighborhoods: ['Astoria', 'Flushing', 'Jamaica', 'Long Island City', 'Forest Hills', 'Bayside'],
  },
  'bronx': {
    name: 'The Bronx',
    intro: 'A broken ignition key or a sudden car lockout anywhere in The Bronx requires immediate professional intervention. Getting stranded near Yankee Stadium or along the Grand Concourse leaves you feeling vulnerable and frustrated. You cannot afford to wait hours for a slow tow truck to arrive in heavy traffic. Our dedicated mobile locksmith service provides the rapid assistance you need directly at your specific breakdown location.',
    body: 'Our dispatchers monitor the major expressways and local streets to route our technicians efficiently across The Bronx. We respond to emergency calls 24/7 regardless of the weather conditions or time of day. The assigned specialist arrives in a fully marked service vehicle carrying advanced diagnostic equipment. We diagnose complex ignition switch failures and stuck steering wheels right where you parked. Our on-site repair capabilities save you expensive mechanic fees.',
    conclusion: 'We pride ourselves on delivering transparent pricing and honest assessments for every single service call. You know the exact cost for the required repair or unlocking service before we begin the work. Our technicians treat your vehicle with the utmost respect and care from start to finish. Do not let a lost key or lockout ruin your day. Contact our Bronx dispatch center immediately for reliable help.',
    neighborhoods: ['Riverdale', 'Fordham', 'South Bronx', 'Pelham Bay', 'Throgs Neck', 'Mott Haven'],
  },
  'staten-island': {
    name: 'Staten Island',
    intro: 'Experiencing an auto lockout in Staten Island requires a specialized local response due to the unique geography. Getting stuck at the St. George Ferry Terminal or in a suburban driveway disrupts your daily commute instantly. Many city-wide services neglect this borough entirely or quote absurdly long arrival times. We maintain dedicated mobile units stationed directly on the island to guarantee the fast service you deserve.',
    body: 'Our Staten Island technicians understand the local road networks and residential layouts perfectly. We dispatch the closest unit immediately upon receiving your emergency phone call. The specialist arrives fully prepared to perform damage-free entry or cut brand new transponder keys. We carry the necessary programming software for almost every modern vehicle on the road today. You receive dealership-level technical service without ever leaving your neighborhood.',
    conclusion: 'You deserve a dependable mobile locksmith who respects your time and your property. Our technicians maintain full certification and extensive training for advanced automotive security systems. We prioritize clear communication by providing accurate arrival estimates and transparent price quotes upfront. Call our dedicated dispatch number right now to resolve your car key emergency. We get you back on the road quickly and safely.',
    neighborhoods: ['St. George', 'Tottenville', 'New Springville', 'Great Kills', 'West New Brighton', 'Eltingville'],
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
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '2rem' }}>Car Unlock Service in {data.name}</h1>
      
      <div className="content-section" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--trust-blue)' }}>**{data.name} Auto Locksmith Solutions**</h4>
        <p style={{ marginBottom: '1.5rem' }}>{data.intro}</p>
        
        <p style={{ marginBottom: '1.5rem' }}>{data.body}</p>
        
        <p style={{ marginBottom: '2rem' }}>{data.conclusion}</p>

        <div className="card" style={{ padding: '2rem', marginBottom: '3rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h3 className="text-trust-blue" style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Popular Neighborhoods Served</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem', paddingLeft: '1.5rem', color: 'var(--slate-gray)' }}>
            {data.neighborhoods.map((hood, i) => (
              <li key={i} style={{ marginBottom: '0.5rem' }}>{hood}</li>
            ))}
          </ul>
        </div>

        <div className="cta-section text-center" style={{ padding: '2rem', backgroundColor: 'var(--trust-blue)', color: 'white', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Stranded in {data.name}?</h3>
          <p style={{ marginBottom: '1.5rem', color: '#e2e8f0' }}>Our closest technician is ready to be dispatched.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:3478017119" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Call (347) 801-7119</a>
            <Link href="/price-estimator" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white', fontSize: '1.1rem', padding: '1rem 2rem' }}>Get an Estimate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
