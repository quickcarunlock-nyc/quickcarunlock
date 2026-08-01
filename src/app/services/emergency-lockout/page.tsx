import { Metadata } from 'next';
import Link from 'next/link';
import {
  Unlock, ShieldCheck, Zap, AlertTriangle, CheckCircle2, Clock,
  Phone, ArrowRight, Star, XCircle, Search, HelpCircle, Car, MapPin
} from 'lucide-react';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Emergency Car Lockout Service NYC | Fast 15-Min Response',
  description: 'Locked out of your vehicle in NYC? Quick Car Unlock NYC provides rapid, damage-free emergency car lockout services across all five boroughs 24/7.',
};

export default function EmergencyLockoutPage() {
  const faqs = [
    { q: "What if my car has a dead battery? Can you still unlock it?", a: "Yes. Many modern cars use electronic locks that fail when the battery is dead. We use a combination of physical manipulation and emergency power-jumping to safely gain entry without damaging the electronics." },
    { q: "Is it really 100% scratch-free?", a: "Correct. We never use metal-on-metal tools. Our air wedges are soft polymer and our reach tools are heat-shrunk in protective rubber to ensure your paint and trim are never touched." },
    { q: "What proof do I need to show the technician?", a: "For your safety and ours, we require a valid ID and proof of vehicle ownership (Registration or Insurance) before we can legally open any vehicle." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Emergency Car Lockout NYC",
    "description": "24/7 professional car unlocking service in NYC with 15-minute response time. Damage-free entry for all vehicle makes and models.",
    "provider": {
      "@type": "Locksmith",
      "name": "QuickCarUnlock NYC",
      "telephone": "+13478017119"
    },
    "areaServed": "New York City",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lockout Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Door Unlock" }, "price": "55.00", "priceCurrency": "USD" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trunk Unlocking" }, "price": "65.00", "priceCurrency": "USD" }
      ]
    }
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
    <div className="service-detail-page min-h-screen">
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-orange)] blur-[100px] rounded-full z-0 opacity-50"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-[var(--action-orange)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Zap size={16} /> Rapid Emergency Response
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fast, Damage-Free <br />
            <span className="text-orange-gradient">Vehicle Entry</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
            Finding yourself locked out of your car in New York City can be a frustrating and stressful experience. Quick Car Unlock NYC gets you back inside, fast.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            Our certified automotive security specialists are available 24/7, ready to respond to your call and get you back on the road in 15 minutes or less across all five boroughs.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Quick Car Unlock NYC for Emergency Lockouts?</h2>
            <p className="text-xl text-[var(--text-secondary)]">We prioritize your safety and your vehicle's integrity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unrivaled Speed & Availability</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>15-Minute Response Goal:</strong> Advanced GPS dispatch routes the closest tech.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>24/7 Emergency Service:</strong> Available day and night, every day of the year.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>City-Wide Coverage:</strong> Always patrolling NYC to be nearby when needed.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} className="text-[var(--safety-green)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Damage-Free Expertise</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Non-Destructive Entry:</strong> No scratches, dents, or damage to finish.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Specialized Tools:</strong> State-of-the-art tools for precision entry.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Certified Professionals:</strong> Highly trained automotive security specialists.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertTriangle size={32} className="text-[var(--action-orange)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent & Fair Pricing</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>Upfront Quotes:</strong> Clear, exact price on-site before work begins.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>No Hidden Fees:</strong> No surprises.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>Competitive Rates:</strong> Cost-effective alternative to dealerships.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Science of Damage-Free Entry (Kept from original for UI excellence) */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Science of Damage-Free Entry</h2>
            <p className="text-xl text-[var(--text-secondary)]">We don't use coat hangers. We use precision engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <Search size={40} className="text-[#3B82F6] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lishi Picking Technology</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">For high-security vehicles, we utilize Lishi decoders to "read" internal pins and pick locks exactly as the key would, leaving zero traces of entry.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <ShieldCheck size={40} className="text-[var(--safety-green)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Non-Marring Air Wedges</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">Our soft-shell air wedges create a microscopic gap in the door frame without bending metal or scratching paint, maintaining seal integrity.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <Unlock size={40} className="text-[var(--action-orange)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Long-Reach Precision</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">We use polymer-coated reach tools to manipulate internal buttons. The coating ensures interior leather and trim remain completely untouched.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Don't Get Scammed */}
      <section className="py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <div className="card border-2 border-red-500/50 bg-red-500/5 p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle size={48} className="text-red-500 shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Avoid The "Drill-and-Replace" Scam</h2>
            </div>
            <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-8">
              Many uncertified locksmiths will arrive and immediately claim that your lock is "too advanced" or "broken," insisting that they must drill out the lock cylinder. This is almost always a scam designed to charge you hundreds extra for a new lock.
            </p>
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
              <CheckCircle2 size={32} className="text-[var(--safety-green)] shrink-0 mt-1" />
              <p className="text-[var(--text-secondary)] text-xl m-0"><strong>Our Policy:</strong> We have a 99% success rate in non-destructive entry. We never drill unless there is a pre-existing mechanical lock failure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Scenarios */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div>
              <h2 className="text-4xl font-bold mb-10">Our Emergency Lockout Process</h2>
              <div className="space-y-10">
                {[
                  { step: "1", title: "Call Us 24/7", text: "Contact our emergency hotline at (347) 801-7119. Our dispatchers gather location & details." },
                  { step: "2", title: "Rapid Dispatch", text: "The closest certified technician is immediately dispatched to your GPS coordinates." },
                  { step: "3", title: "On-Site Arrival", text: "Our technician arrives, typically within 15 minutes, equipped with all necessary tools." },
                  { step: "4", title: "Damage-Free Entry", text: "Using specialized techniques, your vehicle is opened safely and efficiently." },
                  { step: "5", title: "Problem Solved", text: "You regain access, and we ensure everything is in order before we leave." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-[var(--action-orange)] text-white flex justify-center items-center font-bold text-2xl shrink-0 shadow-lg shadow-orange-500/30">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-[var(--slate-light)] leading-relaxed text-lg">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-10">Common Lockout Scenarios</h2>
              <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-12 shadow-2xl rounded-3xl">
                <ul className="space-y-6">
                  <li className="flex items-center gap-5 text-[var(--slate-light)] text-xl"><CheckCircle2 size={28} className="text-[#3B82F6]" /> Keys locked inside the car or trunk.</li>
                  <li className="flex items-center gap-5 text-[var(--slate-light)] text-xl"><CheckCircle2 size={28} className="text-[#3B82F6]" /> Lost or stolen car keys (we provide on-site replacement).</li>
                  <li className="flex items-center gap-5 text-[var(--slate-light)] text-xl"><CheckCircle2 size={28} className="text-[#3B82F6]" /> Broken or jammed lock mechanisms.</li>
                  <li className="flex items-center gap-5 text-[var(--slate-light)] text-xl"><CheckCircle2 size={28} className="text-[#3B82F6]" /> Faulty key fobs preventing entry.</li>
                  <li className="flex items-center gap-5 text-[var(--slate-light)] text-xl bg-red-500/10 p-4 rounded-xl border border-red-500/30"><CheckCircle2 size={28} className="text-red-500" /> <strong className="text-red-400">Child or pet accidentally locked inside.</strong></li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-8">Serving All NYC Boroughs</h2>
              <div className="flex flex-wrap gap-4">
                {['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'].map(borough => (
                  <div key={borough} className="px-6 py-4 bg-white/5 border border-white/10 rounded-full flex items-center gap-3 font-medium text-lg">
                    <MapPin size={20} className="text-[var(--safety-green)]" /> {borough}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Emergency Lockout FAQ</h2>
          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div key={i} className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl hover:bg-[rgba(30,41,59,0.9)] transition-colors rounded-3xl">
                <h4 className="text-2xl font-bold mb-5 flex items-start gap-5">
                  <HelpCircle size={32} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                  <span className="leading-snug">{item.q}</span>
                </h4>
                <p className="text-[var(--slate-light)] leading-relaxed ml-12 m-0 text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center border-t border-orange-500/50">
        <div className="container max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#0F172A]">Locked Out Right Now?</h2>
          <p className="mb-14 text-2xl font-medium opacity-90 leading-relaxed max-w-4xl mx-auto">
            Don't panic. Our NYC dispatchers will route the nearest technician to your coordinates. 
            Trust the experts who prioritize your safety and your vehicle's integrity.
          </p>
          <a href="tel:3478017119" className="btn btn-pulse bg-[#0F172A] text-white hover:bg-black text-3xl py-6 px-16 inline-flex items-center gap-5 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
            <Phone size={36} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
