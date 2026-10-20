import { Metadata } from 'next';
import ContextNote from '@/components/ContextNote';
import Link from 'next/link';
import {
  ShieldCheck, Zap, Cpu, CheckCircle2, Clock,
  Phone, ArrowRight, Star, Heart, MapPin, Wrench, Navigation, Radio
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Quick Car Unlock NYC | Your Trusted Automotive Security Specialists',
  description: 'Quick Car Unlock is a mobile auto locksmith service for New York City: car lockouts, key replacement and ignition repair, dispatched 24/7 to wherever your vehicle is.',
};

export default function AboutPage() {
  return (
    <div className="about-page min-h-screen">

      {/* Premium Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <Heart size={16} /> Our Mission
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Eliminating the Anxiety of Being <br className="hidden md:block" />
            <span className="text-orange-gradient">Stranded in NYC</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
            Quick Car Unlock NYC was founded on a singular, critical realization: New York City needed more than just general locksmiths. It demanded a specialized, technology-driven rescue network designed specifically for the complexities of modern vehicles and the urgency of urban emergencies.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Our mission is simple yet profound: to eliminate the anxiety and frustration of being stranded due to car lock issues, providing swift, reliable, and damage-free solutions across all five boroughs.
          </p>
        </div>
      </section>

      {/* Technical DNA Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Technical DNA: Mobile Dealership-Level Expertise</h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
                We are a team of dedicated automotive security specialists, not just locksmiths. This distinction is crucial. While a traditional locksmith might encounter challenges with advanced vehicle security systems, high-security door locks, or complex transponder frequencies, our team lives and breathes vehicle electronics.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
                At Quick Car Unlock NYC, our expertise is rooted in a deep understanding of automotive security systems. We pride ourselves on a technical DNA that mirrors a manufacturer's service center, brought directly to your location.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <CheckCircle2 size={24} className="text-[var(--safety-green)]" /> EEPROM Mastering
                </div>
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <CheckCircle2 size={24} className="text-[var(--safety-green)]" /> ECU Synchronization
                </div>
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <CheckCircle2 size={24} className="text-[var(--safety-green)]" /> Lishi Decoding
                </div>
                <div className="flex items-center gap-3 text-[var(--text-primary)] font-medium bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                  <CheckCircle2 size={24} className="text-[var(--safety-green)]" /> OBD2 Protocols
                </div>
              </div>
            </div>
            <div className="card bg-[var(--bg-secondary)] p-10 rounded-2xl border border-[var(--border-color)] shadow-2xl">
              <Cpu size={56} className="text-[var(--action-orange)] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Mobile Dealership Stack</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Every mobile unit in our fleet is a fully-equipped workshop, carrying a technical stack identical to what you'd find at a dealership. This includes:
              </p>
              <ul className="space-y-4 text-[var(--slate-light)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                  <span><strong>Automated CNC Laser Key Cutting:</strong> For precise duplication and creation of high-security keys.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                  <span><strong>High-Frequency RF Spectrum Analyzers:</strong> To diagnose and program remote key fobs accurately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                  <span><strong>Real-Time OEM Security Database Access:</strong> Immediate access to manufacturer-specific codes and procedures.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Dispatch Advantage */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Quick Car Unlock Advantage</h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">Speed, Ethics, and Local Expertise combined to give you peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card card-hover">
              <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Navigation size={40} className="text-[#3B82F6]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Rapid Dispatch & Response</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                We don't operate from a single storefront; our technicians work from mobile workshops and come to you, 24/7. When you call, the dispatcher gives you an <strong>ETA before anyone is sent</strong>.
              </p>
            </div>
            
            <div className="text-center p-8 card card-hover">
              <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={40} className="text-[var(--safety-green)]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Unwavering Ethics</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong>No Bait-and-Switch:</strong> The price we quote on-site is the final price. <strong>Damage-Free First:</strong> We exhaust all non-destructive methods to unlock your vehicle safely before any alternative.
              </p>
            </div>
            
            <div className="text-center p-8 card card-hover">
              <div className="w-20 h-20 mx-auto bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <MapPin size={40} className="text-[var(--action-orange)]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">NYC Through and Through</h4>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Our dispatchers and technicians are New Yorkers. When you tell us you're near the "Vannie" or stuck on the "FDR," we know exactly what that means. Local knowledge ensures absolute efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-24 bg-[#0B1120]">
        <div className="container max-w-5xl text-center">
          <h2 className="text-4xl font-bold mb-8">Our Promise to You</h2>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-16 max-w-3xl mx-auto">
            At Quick Car Unlock NYC, we are more than just a service; we are your reliable partner in automotive emergencies. We are committed to providing:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="card p-8 bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/10 transition-colors">
              <Star className="text-[var(--action-orange)] mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-3">Professionalism</h4>
              <p className="text-[var(--text-secondary)] text-lg">Trained, courteous technicians.</p>
            </div>
            <div className="card p-8 bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/10 transition-colors">
              <Clock className="text-[#3B82F6] mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-3">Efficiency</h4>
              <p className="text-[var(--text-secondary)] text-lg">Rapid response times and quick, effective solutions.</p>
            </div>
            <div className="card p-8 bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/10 transition-colors">
              <ShieldCheck className="text-[var(--safety-green)] mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-3">Integrity</h4>
              <p className="text-[var(--text-secondary)] text-lg">Transparent pricing and completely damage-free service.</p>
            </div>
            <div className="card p-8 bg-white/5 border border-white/10 flex flex-col items-start hover:bg-white/10 transition-colors">
              <Navigation className="text-[#A855F7] mb-4" size={40} />
              <h4 className="text-2xl font-bold mb-3">Accessibility</h4>
              <p className="text-[var(--text-secondary)] text-lg">24/7 availability across all five New York City boroughs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center relative overflow-hidden border-t border-[var(--border-color)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--glow-orange)] blur-[150px] rounded-full -z-10 opacity-30"></div>
        <div className="container relative z-10 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the Difference.</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-12 leading-relaxed">
            Experience the difference of a truly specialized and locally-focused auto locksmith service. When you need us, we're here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse flex items-center gap-3 py-4 px-10 text-xl">
              <Phone size={24} /> (347) 801-7119
            </a>
            <Link href="/services" className="btn btn-secondary flex items-center gap-2 py-4 px-10 text-lg">
              View Our Services
            </Link>
          </div>
        </div>
      </section>


      <ContextNote paragraphs={["See what we do: [emergency car lockout](/services/emergency-lockout), [car key replacement](/services/key-replacement) and [ignition repair](/services/ignition-repair). Learn [what a car unlock costs](/guides/how-much-does-it-cost-to-unlock-a-car-nyc) before you call.", "We work in [Manhattan](/locations/manhattan), [Brooklyn](/locations/brooklyn), [Queens](/locations/queens), [the Bronx](/locations/bronx) and [Staten Island](/locations/staten-island). Questions? [Contact us](/contact)."]} />
    </div>
  );
}
