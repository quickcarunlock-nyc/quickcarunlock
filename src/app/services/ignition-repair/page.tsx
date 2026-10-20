import { Metadata } from 'next';
import { alternatesFor } from '@/lib/i18n';
import ContextNote from '@/components/ContextNote';
import Link from 'next/link';
import RelatedLinks from '@/components/RelatedLinks';
import { 
  Wrench, ShieldCheck, Zap, Key, Hammer, CheckCircle2, Clock, 
  Phone, ArrowRight, XCircle, HelpCircle, MapPin, Settings
} from 'lucide-react';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
  alternates: alternatesFor('/services/ignition-repair', 'en'),
  title: 'Ignition Repair & Replacement NYC | Mobile Auto Locksmith',
  description: 'Key stuck in ignition or won\'t turn? Quick Car Unlock NYC provides mobile ignition cylinder repair and replacement across all 5 boroughs. Fast, on-site service.',
};

export default function IgnitionRepairPage() {
  const faqs = [
    { q: "My key turns but the car won't start. Is it the ignition?", a: "Not necessarily. If the key turns but the engine doesn't crank, it could be the electrical ignition switch or a battery/starter issue. We can test the voltage at the switch to confirm if it's the lock cylinder or an electrical failure." },
    { q: "If you replace the ignition, will I need two separate keys?", a: "Ideally, no. Our goal is to re-pin the new ignition to match your door locks. If the system is too damaged for that, we can provide a new ignition and key, and then cut you a hybrid key that works for both." },
    { q: "Why is my steering wheel locked and the key won't budge?", a: "This is often a mechanical bind. Try turning the wheel hard to the left and right while gently jiggling the key. If that doesn't work, the steering lock pin is likely jammed, and we will need to disassemble it for you." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ignition Repair & Replacement NYC",
    "description": "Mobile ignition cylinder repair, broken key extraction, and full ignition unit replacement in NYC. 24/7 on-site service for all vehicle makes.",
    "provider": {
      "@type": "Locksmith",
      "name": "Quick Car Unlock",
      "telephone": "+13478017119"
    },
    "areaServed": "New York City",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ignition Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Broken Key Extraction" }, "price": "95.00", "priceCurrency": "USD" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ignition Cylinder Repair" }, "price": "165.00", "priceCurrency": "USD" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Unit Replacement" }, "price": "225.00", "priceCurrency": "USD" }
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
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-green)] blur-[100px] rounded-full z-0 opacity-40"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-[var(--safety-green)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Wrench size={16} /> Expert Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            On-Site <span className="text-orange-gradient">Ignition Repair</span> <br /> & Replacement
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
            Key won't turn? Steering wheel locked? Quick Car Unlock NYC provides expert ignition services across all five boroughs.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            Our automotive locksmiths are equipped with the advanced tools and knowledge to diagnose and fix your ignition problems on-site, getting you back on the road quickly and safely.
          </p>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Trust Quick Car Unlock NYC for Ignition Services?</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Don't let ignition troubles keep you grounded.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings size={32} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Specialized Expertise</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>Beyond General Locksmithing:</strong> In-depth training in vehicle electrical systems.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>Comprehensive Diagnostics:</strong> Accurately diagnose the root cause.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>All Makes and Models:</strong> Servicing domestic cars to high-end imports.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} className="text-[var(--safety-green)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Convenient On-Site Service</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Mobile Workshop:</strong> We bring tools and parts directly to your location.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Avoid Towing Costs:</strong> Save the expense of towing to a dealership.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Rapid Response:</strong> Efficient dispatch minimizes your downtime.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} className="text-[var(--action-orange)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent & Quality</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>Upfront Quoting:</strong> Clear, exact price quote on-site before work begins.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>Durable Repairs:</strong> High-quality parts and industry standard repairs.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>No Hidden Fees:</strong> Complete transparency.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Mechanic Alternative */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <div className="card border-2 border-[var(--safety-green)] bg-green-500/5 p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Clock size={48} className="text-[var(--safety-green)] shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Avoid The 48-Hour Mechanic Wait</h2>
            </div>
            <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-8">
              Most mechanics will tell you that a broken ignition requires a 2-day wait for parts and a tow to the shop. We carry standard ignition assemblies in our vans, meaning we can usually solve your mechanical problem the same day.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">Immediate Diagnosis</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">On-Site Rebuilding</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">Key Sync Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Common Problems */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div>
              <h2 className="text-4xl font-bold mb-10">Our Ignition Repair Process</h2>
              <div className="space-y-10">
                {[
                  { step: "1", title: "Call for Assistance", text: "Contact us at (347) 801-7119. Describe your ignition issue, and we'll dispatch a technician." },
                  { step: "2", title: "On-Site Diagnosis", text: "Our technician will arrive and perform a thorough diagnosis of your ignition system." },
                  { step: "3", title: "Expert Repair/Replacement", text: "We will repair faulty components or replace the ignition cylinder if necessary." },
                  { step: "4", title: "Testing & Verification", text: "We ensure your new or repaired ignition system functions perfectly before leaving." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-[var(--safety-green)] text-white flex justify-center items-center font-bold text-2xl shrink-0 shadow-lg shadow-green-500/30">
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
              <h2 className="text-4xl font-bold mb-10">Common Ignition Problems We Solve</h2>
              <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-12 shadow-2xl rounded-3xl">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Key size={28} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Key Won't Turn</strong> Often caused by a worn key, a damaged ignition cylinder, or a locked steering wheel mechanism.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Zap size={28} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Key Stuck in Ignition</strong> A common issue that can prevent you from turning off your car or removing the key.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <ShieldCheck size={28} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Steering Wheel Locked</strong> When the steering wheel locks and prevents the key from turning.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Wrench size={28} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Car Won't Start</strong> If the engine cranks but doesn't start, the ignition system could be the culprit.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Hammer size={28} className="text-[var(--action-orange)] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Broken Key in Ignition</strong> We can carefully extract broken key fragments and repair/replace the cylinder.</span>
                  </li>
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

      {/* Pricing Breakdown */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Ignition Service Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center shadow-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Broken Key Extraction</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Safe removal of snapped blades.</p>
              <div className="text-4xl font-bold text-[var(--action-orange)]">$95+</div>
            </div>
            <div className="card p-8 bg-[var(--bg-primary)] border-2 border-[var(--safety-green)] text-center shadow-xl rounded-2xl transform scale-105 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--safety-green)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase">Popular</div>
              <h3 className="text-2xl font-bold mb-3">Ignition Cylinder Repair</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Re-pinning or cleaning the assembly.</p>
              <div className="text-5xl font-bold text-[var(--action-orange)] mb-2">$165+</div>
            </div>
            <div className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center shadow-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Full Unit Replacement</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Brand new ignition switch + cylinder.</p>
              <div className="text-4xl font-bold text-[var(--action-orange)]">$225+</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Ignition Repair FAQ</h2>
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
      <section className="py-24 bg-gradient-to-br from-[var(--safety-green)] to-[#059669] text-white text-center">
        <div className="container max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Key Stuck or Won't Turn?</h2>
          <p className="mb-14 text-2xl font-medium opacity-90 leading-relaxed max-w-4xl mx-auto">
            Get your ignition diagnosed and repaired right where you're parked. 
            Don't compromise on expertise or convenience.
          </p>
          <a href="tel:3478017119" className="btn btn-pulse bg-white text-[#059669] hover:bg-gray-100 text-3xl py-6 px-16 inline-flex items-center gap-5 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
            <Phone size={36} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>
      <ContextNote paragraphs={["A worn key can damage an ignition cylinder, and a damaged cylinder can strand you. If the key itself is the problem, see [car key replacement](/services/key-replacement). If you cannot get into the car at all, see [emergency car lockout service](/services/emergency-lockout).", "Read [what a car lockout or key job costs in NYC](/guides/how-much-does-it-cost-to-unlock-a-car-nyc), or get a ballpark with the [price estimator](/price-estimator).", "We serve [Manhattan](/locations/manhattan), [Brooklyn](/locations/brooklyn), [Queens](/locations/queens), [the Bronx](/locations/bronx) and [Staten Island](/locations/staten-island). See [all service areas](/locations) or learn [about us](/about)."]} />


      <RelatedLinks current="/services/ignition-repair" />
    </div>
  );
}
