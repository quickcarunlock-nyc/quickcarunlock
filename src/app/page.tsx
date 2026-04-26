import PriceEstimator from "@/components/PriceEstimator";
import LiveDispatch from "@/components/LiveDispatch";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, Navigation, Zap, Phone, Star, CheckCircle, Award, KeyRound, Wrench, CarFront, HelpCircle, MapPin } from "lucide-react";

export default function Home() {
  const faqs = [
    { q: "Will unlocking my car cause any damage?", a: "Absolutely not. We use specialized, non-destructive tools like professional air wedges and long-reach tools to bypass the lock without scratching paint or damaging weather stripping." },
    { q: "Do you need the original key to make a replacement?", a: "No. Our mobile vans are equipped with key cutting machines and programming software that allow us to generate a brand new transponder key from scratch using your vehicle's VIN and lock code." },
    { q: "What proof of ownership do I need?", a: "To legally perform a lockout or key replacement service, we require a valid driver's license and the vehicle registration or insurance card matching your name." },
    { q: "How fast can you arrive in NYC traffic?", a: "Because our fleet is dispersed across all 5 boroughs with a centralized dispatch, our average arrival time is 15-20 minutes, regardless of heavy local traffic." },
  ];

  const neighborhoods = [
    "Financial District", "Midtown Manhattan", "Upper East Side", "Williamsburg", 
    "Park Slope", "Bedford-Stuyvesant", "Astoria", "Flushing", "Long Island City", 
    "Riverdale", "South Bronx", "Staten Island (All)"
  ];

  const brands = ["Toyota", "Honda", "Ford", "BMW", "Mercedes-Benz", "Lexus", "Audi", "Nissan", "Chevrolet", "Jeep"];

  return (
    <div className="home-page">
      {/* Hyper-Conversion Hero Section */}
      <section style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '6rem 0 4rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--glow-blue)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'var(--glow-orange)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1 }}></div>

        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <LiveDispatch />

            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1rem', letterSpacing: '-1px', lineHeight: 1.1 }}>
              Locked Out? We'll Arrive In <br />
              <span className="text-orange-gradient">15 Minutes Or Less.</span>
            </h1>
            
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
              New York City's highest-rated emergency auto locksmith. Fast, damage-free entry, mobile key replacement, and completely transparent pricing starting at just $55.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <a href="tel:3478017119" className="btn btn-primary btn-pulse" style={{ fontSize: '1.4rem', padding: '20px 40px', width: '100%', maxWidth: '400px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
                <Phone size={24} /> Call: (347) 801-7119
              </a>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)' }}>
                <CheckCircle size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px', color: 'var(--safety-green)' }} /> No hidden fees. Exact price quoted upon arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantees Bar */}
      <section style={{ background: 'rgba(15, 23, 42, 0.8)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
            <div><Clock size={36} color="var(--action-orange)" style={{ margin: '0 auto 0.5rem auto' }} /><h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Fast Arrival Time</h4><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Centralized NYC dispatch</p></div>
            <div><Award size={36} color="#3B82F6" style={{ margin: '0 auto 0.5rem auto' }} /><h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Certified Technicians</h4><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Fully licensed and insured</p></div>
            <div><ShieldCheck size={36} color="var(--safety-green)" style={{ margin: '0 auto 0.5rem auto' }} /><h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Damage-Free Guarantee</h4><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>100% safe vehicle entry</p></div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Comprehensive Auto Locksmith Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We solve everything from locked doors to completely broken ignitions directly on the street.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card card-hover">
              <CarFront size={40} color="var(--action-orange)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '1rem' }}>Emergency Lockouts</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Keys locked in the trunk or cabin? We use non-destructive entry methods to get you back inside safely within minutes.</p>
              <Link href="/services/emergency-lockout" style={{ color: '#2C51C1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Learn More <Zap size={16} /></Link>
            </div>
            <div className="card card-hover">
              <KeyRound size={40} color="#3B82F6" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '1rem' }}>Key Replacement</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Lost your only set? We cut and program brand new transponder keys and smart fobs directly at your vehicle's location.</p>
              <Link href="/services/key-replacement" style={{ color: '#2C51C1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Learn More <Zap size={16} /></Link>
            </div>
            <div className="card card-hover">
              <Wrench size={40} color="var(--safety-green)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '1rem' }}>Ignition Repair</h3>
              <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Key won't turn? Steering wheel locked? We disassemble and repair or replace faulty ignition cylinders on the spot.</p>
              <Link href="/services/ignition-repair" style={{ color: '#2C51C1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Learn More <Zap size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Map & Estimator */}
      <section id="estimator" className="container" style={{ padding: '6rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          <div style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'var(--glow-orange)', filter: 'blur(120px)', borderRadius: '50%', zIndex: -1 }}></div>
             <PriceEstimator />
          </div>
          <div>
            <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--safety-green)', borderRadius: '4px', marginBottom: '1rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}>NYC Coverage Map</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Real-Time Dispatching</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We don't make you wait. Our system actively tracks our mobile locksmith units across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We instantly route the closest technician directly to your GPS coordinates.
            </p>
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '12px 20px', background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(10px)', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Nearby Technicians</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--safety-green)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--safety-green)', animation: 'pulse 2s infinite' }}></span> System Active
                </span>
              </div>
              <MapWrapper />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Fleet Snapshot */}
      <section style={{ padding: '6rem 1rem', background: '#0B1120', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Mobile Dealership Alternatives</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We aren't just guys with slim jims. Our mobile fleet consists of high-end service vans equipped with the exact same diagnostic tools and laser cutting machines used by major car dealerships. 
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              By bringing the shop to your breakdown location, we save you hundreds of dollars in towing fees and days of waiting time.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-primary)', fontWeight: 500 }}>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="var(--safety-green)" /> Precision Laser Key Cutting</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="var(--safety-green)" /> On-Board Transponder Programming</li>
              <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={18} color="var(--safety-green)" /> Specialized Ignition Repair Tools</li>
            </ul>
          </div>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', aspectRatio: '16/9' }}>
            <Image src="/locksmith-van.png" alt="QuickCarUnlock NYC Service Van" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section style={{ padding: '4rem 1rem', overflow: 'hidden', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--slate-light)', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3rem' }}>Vehicles We Service</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
            {[
              { name: "Toyota", slug: "toyota" },
              { name: "Honda", slug: "honda" },
              { name: "Ford", slug: "ford" },
              { name: "BMW", slug: "bmw" },
              { name: "Mercedes", slug: "mercedes" },
              { name: "Audi", slug: "audi" },
              { name: "Nissan", slug: "nissan" },
              { name: "Chevrolet", slug: "chevrolet" },
              { name: "Jeep", slug: "jeep" },
              { name: "Hyundai", slug: "hyundai" }
            ].map((brand, i) => (
              <div key={i} className="brand-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <img 
                  src={`/brands/${brand.slug}.svg`} 
                  alt={`${brand.name} Locksmith`}
                  width="50" 
                  height="50"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                />
                <span style={{ fontSize: '0.8rem', color: 'var(--slate-light)', fontWeight: 500 }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 1rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <HelpCircle size={40} color="var(--action-orange)" style={{ margin: '0 auto 1rem auto' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section style={{ padding: '5rem 1rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}><h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Trusted by New Yorkers</h2><p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>See what your neighbors are saying about our rapid response.</p></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="card">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /></div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7' }}>Locked my keys in my Honda in Williamsburg at 2 AM. The dispatcher was super polite, and a technician showed up in exactly 12 minutes. Got my car open with zero scratches.</p>
              <div style={{ fontWeight: 600, color: '#0F172A' }}>— Michael T., Brooklyn</div>
            </div>
            <div className="card">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /></div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7' }}>Lost my only fob while shopping in Manhattan. Dealership wanted to tow it and charge me $500. QuickCarUnlock came out, cut a new key, and programmed it right there on the street for half the price.</p>
              <div style={{ fontWeight: 600, color: '#0F172A' }}>— Sarah J., Manhattan</div>
            </div>
            <div className="card">
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1rem' }}><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /><Star size={18} fill="#FFC107" color="#FFC107" /></div>
              <p style={{ color: '#475569', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.7' }}>My ignition cylinder jammed completely. I was stranded in Queens. They sent out a mobile unit with all the parts. He rebuilt the ignition in under an hour. Absolute lifesavers.</p>
              <div style={{ fontWeight: 600, color: '#0F172A' }}>— David R., Queens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Neighborhood Cloud */}
      <section style={{ padding: '4rem 1rem', background: '#0B1120' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <MapPin size={30} color="var(--action-orange)" style={{ margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Local NYC Service Areas</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', maxWidth: '900px', margin: '0 auto' }}>
            {neighborhoods.map((n, i) => (
              <span key={i} style={{ color: 'var(--slate-light)', fontSize: '0.9rem', background: 'rgba(255,255,255,0.03)', padding: '6px 12px', borderRadius: '4px' }}>
                {n} Locksmith
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="mobile-sticky-cta">
        <a href="tel:3478017119" className="btn btn-primary btn-pulse" style={{ width: '100%', fontSize: '1.2rem', padding: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <Phone size={20} />
          Emergency: (347) 801-7119
        </a>
      </div>
    </div>
  );
}
