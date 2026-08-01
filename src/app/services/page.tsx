import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CarFront, KeyRound, Wrench, AlertTriangle, BatteryWarning, Unlock, 
  Clock, DollarSign, Building2, Cpu, ShieldCheck, Tag, CheckCircle2, XCircle, Phone, ArrowRight, Settings, MapPin
} from 'lucide-react';
import Schema from '@/components/Schema';

export const metadata: Metadata = {
  title: 'NYC Auto Locksmith Services | Quick Car Unlock NYC',
  description: 'Comprehensive mobile automotive locksmith services in NYC. Expert car unlocking, transponder key replacement, fob programming, and ignition repair across all 5 boroughs.',
};

export default function ServicesPage() {
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
        "name": "Services",
        "item": "https://www.quickcarunlock.com/services"
      }
    ]
  };

  return (
    <div className="services-page min-h-screen">
      <Schema data={breadcrumbSchema} />
      
      {/* Premium Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle,rgba(249,115,22,0.1)_0%,transparent_70%)] z-0"></div>
        <div className="absolute top-[-20%] left-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[120px] rounded-full z-0 opacity-40"></div>
        
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-[var(--action-orange)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Settings size={16} /> Comprehensive Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for All <br className="hidden md:block" />
            <span className="text-orange-gradient">Vehicle Lock and Key Needs</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
            At Quick Car Unlock NYC, we specialize in providing a full spectrum of professional automotive locksmith services across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
            Whether you're locked out of your car, need a new key programmed, or are experiencing ignition problems, our mobile units bring dealership-level service directly to your location 24/7.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Auto Locksmith Services</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Rapid, reliable, and damage-free solutions.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CarFront size={32} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Emergency Car Lockout Service</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Locked your keys in the car or trunk? Lost them entirely? We use advanced, non-destructive entry techniques to unlock your vehicle quickly and safely.
              </p>
              <ul className="space-y-3 mb-8 text-[var(--slate-light)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> Fast 15-minute response</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> Damage-free entry</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> 24/7 availability</li>
              </ul>
              <Link href="/services/emergency-lockout" className="btn btn-primary w-full text-center py-4 text-lg font-bold flex justify-center shadow-lg shadow-orange-500/20">
                Learn More
              </Link>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--action-orange)] hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-orange-500/10 group relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-[var(--action-orange)]"></div>
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <KeyRound size={32} className="text-[var(--action-orange)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transponder Key Replacement & Programming</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                Our mobile units are equipped to cut, program, and synchronize new transponder keys and smart fobs for a vast range of vehicle makes and models.
              </p>
              <ul className="space-y-3 mb-8 text-[var(--slate-light)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--action-orange)]" /> On-site cutting & programming</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--action-orange)]" /> All vehicle types & smart fobs</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--action-orange)]" /> Fraction of dealership cost</li>
              </ul>
              <Link href="/services/key-replacement" className="btn w-full text-center py-4 text-lg font-bold flex justify-center bg-[var(--action-orange)] hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30">
                Learn More
              </Link>
            </div>

            <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench size={32} className="text-[var(--safety-green)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ignition Cylinder Repair & Replacement</h3>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                If your key won't turn, is stuck, or your steering wheel is locked, our specialists can diagnose and repair or replace faulty ignition cylinders on the spot.
              </p>
              <ul className="space-y-3 mb-8 text-[var(--slate-light)]">
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> Diagnostic & repair</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> Avoid costly tows</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[var(--safety-green)]" /> Comprehensive solutions</li>
              </ul>
              <Link href="/services/ignition-repair" className="btn btn-primary w-full text-center py-4 text-lg font-bold flex justify-center shadow-lg shadow-orange-500/20">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Quick Car Unlock NYC Stands Out */}
      <section className="py-24 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Quick Car Unlock NYC Stands Out</h2>
            <p className="text-xl text-[var(--text-secondary)]">The E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) difference.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <MapPin className="text-[var(--action-orange)] mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-3">NYC-Focused Expertise</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Our team understands the unique demands and traffic patterns of serving New York City drivers.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <Cpu className="text-[#3B82F6] mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-3">Advanced Technology</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Mobile units fully equipped with dealership-level diagnostic tools and laser cutters.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg">
              <ShieldCheck className="text-[var(--safety-green)] mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-3">Certified Professionals</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Highly trained and experienced automotive locksmiths dedicated to security.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg md:col-span-2 lg:col-span-1">
              <DollarSign className="text-green-400 mb-6" size={40} />
              <h4 className="text-2xl font-bold mb-3">Transparent Pricing</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">Clear, upfront quotes provided on-site with absolutely no hidden fees.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors shadow-lg lg:col-span-2 flex flex-col justify-center items-center text-center">
              <CheckCircle2 className="text-[#A855F7] mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-3">Customer Satisfaction</h4>
              <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed text-lg">Dedicated to providing a stress-free and effective service experience to get you back on the road safely and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership vs Mobile Locksmith Comparison */}
      <section className="py-24 bg-[var(--bg-primary)]">
        <div className="container max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us Over The Dealership?</h2>
            <p className="text-xl text-[var(--text-secondary)]">Losing a modern car key usually means a massive headache. We offer a better way.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-[var(--border-color)] shadow-2xl">
            {/* Dealership Side */}
            <div className="bg-[var(--bg-secondary)] p-12">
              <div className="flex items-center gap-4 mb-10">
                <Building2 size={40} className="text-[#94A3B8]" />
                <h3 className="text-3xl font-bold text-[#94A3B8]">The Dealership</h3>
              </div>
              <ul className="space-y-8 text-[var(--text-secondary)] text-lg">
                <li className="flex gap-4 items-start"><XCircle size={28} className="text-red-500 shrink-0 mt-1" /> <span className="leading-relaxed">Requires you to pay for a tow truck to bring your car to them.</span></li>
                <li className="flex gap-4 items-start"><XCircle size={28} className="text-red-500 shrink-0 mt-1" /> <span className="leading-relaxed">Often requires a 2 to 5 day wait for parts to be ordered.</span></li>
                <li className="flex gap-4 items-start"><XCircle size={28} className="text-red-500 shrink-0 mt-1" /> <span className="leading-relaxed">You pay highly inflated OEM markup prices on hardware.</span></li>
                <li className="flex gap-4 items-start"><XCircle size={28} className="text-red-500 shrink-0 mt-1" /> <span className="leading-relaxed">Closed on weekends, nights, and holidays.</span></li>
              </ul>
            </div>

            {/* QuickCarUnlock Side */}
            <div className="bg-gradient-to-br from-orange-500/10 to-[rgba(15,23,42,0.9)] p-12 relative border-l md:border-t-0 border-t border-[var(--border-color)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--action-orange)] hidden md:block"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--action-orange)] block md:hidden"></div>
              <div className="flex items-center gap-4 mb-10">
                <ShieldCheck size={40} className="text-[var(--action-orange)]" />
                <h3 className="text-3xl font-bold text-white">Quick Car Unlock NYC</h3>
              </div>
              <ul className="space-y-8 text-white text-lg">
                <li className="flex gap-4 items-start"><CheckCircle2 size={28} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span className="leading-relaxed">We dispatch a mobile workshop directly to your vehicle's location.</span></li>
                <li className="flex gap-4 items-start"><CheckCircle2 size={28} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span className="leading-relaxed">Keys cut and programmed on the spot in under 45 minutes.</span></li>
                <li className="flex gap-4 items-start"><CheckCircle2 size={28} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span className="leading-relaxed">Up to 50% cheaper than dealership pricing.</span></li>
                <li className="flex gap-4 items-start"><CheckCircle2 size={28} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span className="leading-relaxed">Available 24 hours a day, 7 days a week, 365 days a year.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center border-t border-orange-500/50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0F172A]">Ready for Immediate Assistance?</h2>
          <p className="mb-12 text-xl font-medium opacity-90 leading-relaxed max-w-3xl mx-auto">
            For reliable, fast, and professional auto locksmith services in New York City, trust Quick Car Unlock NYC. Our NYC dispatchers will route the nearest technician to your location.
          </p>
          <a href="tel:3478017119" className="btn bg-[#0F172A] text-white hover:bg-black text-2xl py-6 px-16 inline-flex items-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full font-bold">
            <Phone size={32} /> Call Now: (347) 801-7119
          </a>
        </div>
      </section>

    </div>
  );
}
