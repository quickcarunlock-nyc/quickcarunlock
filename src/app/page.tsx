import PriceEstimator from "@/components/PriceEstimator";
import LiveDispatch from "@/components/LiveDispatch";
import MapWrapper from "@/components/MapWrapper";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Clock, Navigation, Zap, Phone, Star, CheckCircle, Award, KeyRound, Wrench, CarFront, HelpCircle, MapPin, ArrowRight } from "lucide-react";
import Schema from "@/components/Schema";

export default function Home() {
  const faqs = [
    { q: "Will unlocking my car cause any damage?", a: "Absolutely not. We use specialized, non-destructive tools like professional air wedges and long-reach tools to bypass the lock without scratching paint or damaging weather stripping." },
    { q: "Do you need the original key to make a replacement?", a: "No. Our mobile vans are equipped with key cutting machines and programming software that allow us to generate a brand new transponder key from scratch using your vehicle's VIN and lock code." },
    { q: "What proof of ownership do I need?", a: "To legally perform a lockout or key replacement service, we require a valid driver's license and the vehicle registration or insurance card matching your name." },
    { q: "How fast can you arrive in NYC traffic?", a: "Because our fleet is dispersed across all 5 boroughs with a centralized dispatch, our average arrival time is 15-20 minutes, regardless of heavy local traffic." },
  ];

  const neighborhoods = [
    "Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"
  ];

  const locksmithSchema = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "name": "QuickCarUnlock NYC",
    "image": "https://www.quickcarunlock.com/quick-car-unlock-van.webp",
    "@id": "https://www.quickcarunlock.com",
    "url": "https://www.quickcarunlock.com",
    "telephone": "+13478017119",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mobile Service",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Manhattan" },
      { "@type": "City", "name": "Brooklyn" },
      { "@type": "City", "name": "Queens" },
      { "@type": "City", "name": "The Bronx" },
      { "@type": "City", "name": "Staten Island" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="home-page min-h-screen">
      <Schema data={locksmithSchema} />
      <Schema data={faqSchema} />
      
      {/* Hyper-Conversion Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-2/5 h-2/5 bg-[var(--glow-orange)] blur-[100px] rounded-full -z-10"></div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <LiveDispatch />

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Locked Out in NYC? Get Back on the Road in <br />
              <span className="text-orange-gradient">15 Minutes or Less.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 leading-relaxed max-w-3xl mx-auto">
              <strong>Quick Car Unlock NYC</strong> is New York City's highest-rated emergency auto locksmith service, dedicated to providing rapid, damage-free vehicle entry, mobile key replacement, and ignition repair across all five boroughs. When you're locked out, every minute counts.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <a href="tel:3478017119" className="btn btn-primary btn-pulse w-full max-w-md flex justify-center items-center gap-3 py-4 text-xl">
                <Phone size={24} /> (347) 801-7119
              </a>
              <p className="text-sm text-[var(--slate-light)] flex items-center gap-2">
                <CheckCircle size={16} className="text-[var(--safety-green)]" /> Transparent pricing starting at $55. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[rgba(15,23,42,0.8)] border-y border-[var(--border-color)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Quick Car Unlock NYC?</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">We understand the unique challenges of vehicle emergencies in a bustling city.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-[var(--glow-orange)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock size={32} className="text-[var(--action-orange)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unmatched Speed & Reliability</h3>
              <p className="text-[var(--text-secondary)] mb-4"><strong>15-Minute Response Goal:</strong> Our advanced GPS dispatch system bypasses traffic to ensure the fastest possible arrival.</p>
              <p className="text-[var(--text-secondary)] text-sm">24/7 Emergency Service across all 5 boroughs.</p>
            </div>

            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-[var(--glow-blue)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={32} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Expert & Damage-Free</h3>
              <p className="text-[var(--text-secondary)] mb-4"><strong>Certified Specialists:</strong> Highly trained in complex vehicle electronics and transponder systems.</p>
              <p className="text-[var(--text-secondary)] text-sm">Damage-Free Guarantee with non-destructive entry methods.</p>
            </div>

            <div className="card card-hover p-8 text-center group">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={32} className="text-[var(--safety-green)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
              <p className="text-[var(--text-secondary)] mb-4"><strong>No Hidden Fees:</strong> Exact price quoted on-site before any work begins, starting from $55.</p>
              <p className="text-[var(--text-secondary)] text-sm">Affordable solutions significantly less than dealership costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Comprehensive Auto Locksmith Services in NYC</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">Whether you've locked your keys inside, lost your only fob, or are struggling with a faulty ignition, Quick Car Unlock NYC has the solution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover p-8">
              <CarFront size={40} className="text-[var(--action-orange)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Emergency Car Lockout</h3>
              <p className="text-[var(--text-secondary)] mb-6">Fast, non-destructive entry for keys locked in the car, trunk, or lost keys.</p>
              <Link href="/services/emergency-lockout" className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors">
                Learn More <Zap size={16} />
              </Link>
            </div>
            
            <div className="card card-hover p-8">
              <KeyRound size={40} className="text-[#3B82F6] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Transponder Key Replacement & Programming</h3>
              <p className="text-[var(--text-secondary)] mb-6">On-site cutting and programming for all types of car keys, smart fobs, and transponder keys, even if you've lost your only set.</p>
              <Link href="/services/key-replacement" className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors">
                Learn More <Zap size={16} />
              </Link>
            </div>
            
            <div className="card card-hover p-8">
              <Wrench size={40} className="text-[var(--safety-green)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ignition Cylinder Repair & Replacement</h3>
              <p className="text-[var(--text-secondary)] mb-6">Expert diagnosis and repair for keys that won't turn, steering wheels that are locked, or other ignition-related issues.</p>
              <Link href="/services/ignition-repair" className="text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-300 transition-colors">
                Learn More <Zap size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Map & Estimator */}
      <section id="estimator" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--glow-orange)] blur-[120px] rounded-full -z-10"></div>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative z-10">
               <PriceEstimator />
            </div>
            <div className="pt-8">
              <div className="inline-block px-4 py-2 bg-green-500/10 text-[var(--safety-green)] rounded-md font-semibold tracking-wider uppercase text-sm mb-6">
                Serving All Five Boroughs
              </div>
              <h2 className="text-4xl font-bold mb-6">Real-Time Dispatching Across NYC</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                Our dispatch system ensures the closest technician is routed to you, wherever you are in NYC. We proudly serve Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. We instantly route our mobile locksmith units directly to your GPS coordinates.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-2xl shadow-black/50">
                <div className="absolute top-0 inset-x-0 p-4 bg-[rgba(15,23,42,0.8)] backdrop-blur-md z-10 flex justify-between items-center border-b border-[var(--border-color)]">
                  <span className="font-semibold text-sm">Nearby Technicians</span>
                  <span className="flex items-center gap-2 text-xs text-[var(--safety-green)] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[var(--safety-green)] animate-pulse"></span> System Active
                  </span>
                </div>
                <div className="h-[400px]">
                   <MapWrapper />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Fleet Snapshot */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Mobile Dealership Alternatives</h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              Our mobile fleet consists of high-end service vans equipped with state-of-the-art tools and technology, identical to a manufacturer's service center, ensuring we can handle 99% of vehicles on the road today.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              By bringing the shop to your breakdown location, we save you hundreds of dollars in towing fees and days of waiting time.
            </p>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-[var(--safety-green)]" /> Precision Laser Key Cutting</li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-[var(--safety-green)]" /> On-Board Transponder Programming</li>
              <li className="flex items-center gap-3"><CheckCircle size={20} className="text-[var(--safety-green)]" /> Real-time OEM Security Database Access</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video group">
            <Image src="/quick-car-unlock-van.webp" alt="QuickCarUnlock NYC Service Van" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-16 bg-[var(--bg-primary)] overflow-hidden">
        <div className="container text-center">
          <p className="text-[var(--slate-light)] text-sm uppercase tracking-widest mb-10">Vehicles We Service</p>
          <div className="flex flex-wrap justify-center gap-12 items-center">
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
              <div key={i} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src={`/brands/${brand.slug}.svg`} 
                  alt={`${brand.name} Locksmith`}
                  width="40" 
                  height="40"
                  className="drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                />
                <span className="text-xs text-[var(--slate-light)] font-medium">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle size={48} className="text-[var(--action-orange)] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="card p-8">
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-[rgba(15,23,42,0.8)] border-t border-[var(--border-color)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--glow-blue)] blur-[150px] rounded-full -z-10 opacity-30"></div>
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get an Instant Estimate or Request Service Now</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 leading-relaxed">
            Use our convenient online price estimator for an initial quote, or for immediate emergency service, call us directly. Our New York-based dispatchers are ready to assist you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse flex items-center gap-2 py-4 px-8 text-lg">
              <Phone size={20} /> Call Now: (347) 801-7119
            </a>
            <Link href="/request-a-quote" className="btn btn-secondary flex items-center gap-2 py-4 px-8 text-lg">
              Request a Custom Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Neighborhood Cloud */}
      <section className="py-16 bg-[#0B1120] border-t border-[var(--border-color)]">
        <div className="container text-center">
          <MapPin size={32} className="text-[var(--action-orange)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-8">Serving All Five Boroughs of New York City</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {neighborhoods.map((n, i) => (
              <Link href={`/locations/${n.toLowerCase().replace(/ /g, '-')}`} key={i} className="text-[var(--slate-light)] text-sm bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md transition-colors border border-white/5">
                {n} Locksmith
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="mobile-sticky-cta md:hidden fixed bottom-0 inset-x-0 bg-[var(--bg-primary)] p-4 border-t border-[var(--border-color)] z-50 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <a href="tel:3478017119" className="btn btn-primary btn-pulse w-full py-3 flex justify-center items-center gap-2 font-bold">
          <Phone size={18} />
          Emergency: (347) 801-7119
        </a>
      </div>
    </div>
  );
}
