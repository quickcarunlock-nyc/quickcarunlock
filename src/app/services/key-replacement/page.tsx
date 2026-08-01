import { Metadata } from 'next';
import Link from 'next/link';
import {
  KeyRound, ShieldCheck, Zap, Cpu, CheckCircle2, Clock,
  Phone, ArrowRight, Star, XCircle, Settings, HelpCircle, HardDrive, Key, MapPin
} from 'lucide-react';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
  title: 'Car Key Replacement NYC | Mobile Key Fob Programming',
  description: 'Lost your car keys? Quick Car Unlock NYC provides on-site key cutting and transponder programming across all 5 boroughs. Skip the dealership.',
};

export default function KeyReplacementPage() {
  const faqs = [
    { q: "Can you make a key if I have zero copies left?", a: "Yes. Using your vehicle's VIN (Vehicle Identification Number), we can retrieve the mechanical key code and security PIN from our global database to cut and program a brand new key from scratch." },
    { q: "Will the new key disable my old lost key?", a: "In most cases, yes. When we program the new key, we can perform a 'Reset' which wipes all previous keys from the car's memory, ensuring that if someone finds your old key, it will no longer start the car." },
    { q: "How long does it take on-site?", a: "Most keys and fobs take between 30 and 45 minutes to cut and program once the technician arrives at your location." }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Key Replacement NYC",
    "description": "On-site laser key cutting and transponder programming in NYC. Mobile service for lost keys, smart fobs, and remote programming at 50% less than dealership prices.",
    "provider": {
      "@type": "Locksmith",
      "name": "QuickCarUnlock NYC",
      "telephone": "+13478017119"
    },
    "areaServed": "New York City",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Key Replacement Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Metal Key" }, "price": "95.00", "priceCurrency": "USD" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transponder Chip Key" }, "price": "145.00", "priceCurrency": "USD" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smart Fob / Proximity" }, "price": "185.00", "priceCurrency": "USD" }
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
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0 opacity-40"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-[#3B82F6] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Cpu size={16} /> Dealership-Level Technology
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            On-Site <span className="text-orange-gradient">Key Replacement</span> <br /> & Fob Programming
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
            Lost your car keys? Need a spare? Quick Car Unlock NYC comes to you with dealership-level technology to cut, program, and sync new keys.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            Our certified automotive security specialists provide efficient, on-site solutions across all five boroughs, saving you time, money, and the hassle of a tow.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Quick Car Unlock NYC?</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Skip the dealership wait and get a new key today.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock size={32} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Convenient On-Site Solutions</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>Mobile Key Cutting:</strong> Our fully-equipped vans are mobile workshops.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>Rapid Response:</strong> Efficient dispatch ensures quick arrival.</li>
                <li className="flex gap-3"><span className="text-[#3B82F6] shrink-0 mt-1">•</span> <strong>Save Time & Money:</strong> Avoid high dealership costs and towing.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu size={32} className="text-[var(--safety-green)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modern Key Technology</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Transponder Specialists:</strong> Seamlessly sync with your immobilizer.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Smart Fobs:</strong> Programming for push-to-start vehicles.</li>
                <li className="flex gap-3"><span className="text-[var(--safety-green)] shrink-0 mt-1">•</span> <strong>Vast Coverage:</strong> Covering 99% of vehicles on the road.</li>
              </ul>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} className="text-[var(--action-orange)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparent & Quality</h3>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>Upfront Quotes:</strong> Clear price on-site before work begins.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>No Hidden Fees:</strong> Complete transparency.</li>
                <li className="flex gap-3"><span className="text-[var(--action-orange)] shrink-0 mt-1">•</span> <strong>High-Quality Keys:</strong> Parts that meet or exceed OEM standards.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Tech Behind the Key (Kept from original) */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mobile Computing & Precision Cutting</h2>
            <p className="text-xl text-[var(--text-secondary)]">We utilize the exact same diagnostic stack as the major manufacturers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <Settings size={40} className="text-[#3B82F6] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Laser CNC Cutting</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">Our mobile units are equipped with automated, laser-guided CNC machines. We can cut high-security "sidewinder" keys to factory specifications with 0.01mm precision.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <HardDrive size={40} className="text-[var(--safety-green)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">EEPROM & ECU Sync</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">Lost all keys? We can pull your car's security data directly from the ECU or EEPROM chip and synchronize new transponders without needing an existing copy.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <Cpu size={40} className="text-[var(--action-orange)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Smart Fob Programming</h3>
              <p className="text-[var(--slate-light)] leading-relaxed">We program proximity "push-to-start" fobs for luxury and domestic brands. Our software handles everything from basic remotes to advanced rolling-code security systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dealership Alternative */}
      <section className="py-24 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <div className="card border-2 border-[#3B82F6] bg-blue-500/5 p-8 md:p-12 rounded-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Zap size={48} className="text-[#3B82F6] shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Stop The Dealership Tow</h2>
            </div>
            <p className="text-[var(--text-secondary)] text-xl leading-relaxed mb-8">
              Losing a modern car key at the dealership usually means a 3-day wait, an expensive tow, and a $500+ invoice. We eliminate the friction by driving to you and completing the job in 45 minutes for up to 50% less cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">No Towing Needed</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">Same-Day Solution</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0" />
                <span className="text-lg font-medium">OEM & Aftermarket</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Key Types */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <div>
              <h2 className="text-4xl font-bold mb-10">Our Car Key Replacement Process</h2>
              <div className="space-y-10">
                {[
                  { step: "1", title: "Call for Service", text: "Contact us at (347) 801-7119. Provide your vehicle's make, model, year, and key type." },
                  { step: "2", title: "On-Site Arrival", text: "Our technician will arrive at your location, typically within our rapid response window." },
                  { step: "3", title: "Key Cutting & Programming", text: "We cut a new blade and program the chip/fob to your ECU using our mobile equipment." },
                  { step: "4", title: "Testing & Verification", text: "We test the new key to ensure it starts your car and operates all functions correctly." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-full bg-[#3B82F6] text-white flex justify-center items-center font-bold text-2xl shrink-0 shadow-lg shadow-blue-500/30">
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
              <h2 className="text-4xl font-bold mb-10">Types of Car Keys We Replace</h2>
              <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-12 shadow-2xl rounded-3xl">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <KeyRound size={28} className="text-[#3B82F6] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Standard Car Keys</strong> Traditional metal keys for older vehicles.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Zap size={28} className="text-[#3B82F6] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Transponder Keys</strong> Keys with an embedded chip communicating with your immobilizer.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <Cpu size={28} className="text-[#3B82F6] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Remote Head Keys</strong> Keys with integrated remote control functions.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <CheckCircle2 size={28} className="text-[#3B82F6] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Smart Keys / Key Fobs</strong> Keyless entry and push-to-start fobs.</span>
                  </li>
                  <li className="flex items-start gap-4 text-[var(--slate-light)] text-lg">
                    <CheckCircle2 size={28} className="text-[#3B82F6] shrink-0 mt-1" /> 
                    <span><strong className="text-white block mb-1">Proximity Keys</strong> Keys that allow you to start the car with the key in your pocket.</span>
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
          <h2 className="text-4xl font-bold text-center mb-16">Key Replacement Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center shadow-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Standard Metal Key</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Non-chip keys for older vehicles.</p>
              <div className="text-4xl font-bold text-[var(--action-orange)]">$95+</div>
            </div>
            <div className="card p-8 bg-[var(--bg-primary)] border-2 border-[var(--action-orange)] text-center shadow-xl rounded-2xl transform scale-105 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--action-orange)] text-white px-4 py-1 rounded-full text-sm font-bold uppercase">Popular</div>
              <h3 className="text-2xl font-bold mb-3">Transponder Chip Key</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Standard keys with engine-sync security.</p>
              <div className="text-5xl font-bold text-[var(--action-orange)] mb-2">$145+</div>
            </div>
            <div className="card p-8 bg-[var(--bg-primary)] border border-[var(--border-color)] text-center shadow-lg rounded-2xl">
              <h3 className="text-2xl font-bold mb-3">Smart Fob / Proximity</h3>
              <p className="text-[var(--text-secondary)] mb-6 text-lg">Push-to-start & keyless entry systems.</p>
              <div className="text-4xl font-bold text-[var(--action-orange)]">$185+</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Key Replacement FAQ</h2>
          <div className="space-y-8">
            {faqs.map((item, i) => (
              <div key={i} className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl hover:bg-[rgba(30,41,59,0.9)] transition-colors rounded-3xl">
                <h4 className="text-2xl font-bold mb-5 flex items-start gap-5">
                  <HelpCircle size={32} className="text-[#3B82F6] shrink-0 mt-1" /> 
                  <span className="leading-snug">{item.q}</span>
                </h4>
                <p className="text-[var(--slate-light)] leading-relaxed ml-12 m-0 text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white text-center">
        <div className="container max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Need a New Key Today?</h2>
          <p className="mb-14 text-2xl font-medium opacity-90 leading-relaxed max-w-4xl mx-auto">
            Get dealership service at your doorstep for a fraction of the cost. 
            Our NYC dispatchers are ready to help.
          </p>
          <a href="tel:3478017119" className="btn btn-pulse bg-white text-[#1D4ED8] hover:bg-gray-100 text-3xl py-6 px-16 inline-flex items-center gap-5 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
            <Phone size={36} /> Dispatch: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
