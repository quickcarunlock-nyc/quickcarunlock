import { Metadata } from 'next';
import ContextNote from '@/components/ContextNote';
import Link from 'next/link';
import { business } from '@/lib/business';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  CheckCircle2, ArrowRight, MessageSquare, Car, Radio
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Quick Car Unlock NYC | 24/7 Emergency Auto Locksmith Support',
  description: 'Need immediate assistance? Contact Quick Car Unlock NYC for 24/7 mobile auto locksmith services across all five boroughs. Call for a live ETA.',
};

export default function ContactPage() {
  return (
    <div className="contact-page min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-orange)] blur-[100px] rounded-full z-0"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Need Immediate Assistance? <br />
            <span className="text-orange-gradient">Call Us Now!</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
            When you're facing a car lockout, lost keys, or ignition problems in New York City, every second counts. Quick Car Unlock NYC is here to provide rapid, reliable, and professional assistance 24 hours a day, 7 days a week.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Our local dispatch team is always ready to send the closest available technician to your location across Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Direct Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Direct Dispatch Lines</h2>
              
              <div className="card p-6 mb-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[rgba(30,41,59,0.9)] transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="bg-[var(--action-orange)] p-4 rounded-xl text-[var(--bg-primary)] shrink-0 shadow-lg shadow-orange-500/20">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Emergency Dispatch Hotline</h3>
                    <a href="tel:3478017119" className="text-3xl font-bold block mb-2 hover:text-[var(--action-orange)] transition-colors">(347) 801-7119</a>
                    <p className="text-[var(--slate-light)]">For immediate emergency service, the fastest way to reach us is by phone.</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 mb-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[rgba(30,41,59,0.9)] transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#3B82F6] p-4 rounded-xl text-white shrink-0 shadow-lg shadow-blue-500/20">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">General Inquiries</h3>
                    <a href="mailto:info@quickcarunlock.com" className="text-xl font-semibold block mb-2 hover:text-[#3B82F6] transition-colors">info@quickcarunlock.com</a>
                    <p className="text-[var(--slate-light)]">For non-urgent questions. We aim to respond within 24 hours.</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[rgba(30,41,59,0.9)] transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="bg-[var(--safety-green)] p-4 rounded-xl text-[var(--bg-primary)] shrink-0 shadow-lg shadow-green-500/20">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Service Areas</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      Our mobile units proudly serve all five boroughs: <strong>Manhattan, Brooklyn, Queens, The Bronx, and Staten Island.</strong> No matter where you are in NYC, we're just a call away.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] relative overflow-hidden shadow-2xl">
              <div className="absolute top-[-10%] right-[-10%] w-2/5 h-2/5 bg-[var(--glow-blue)] blur-[80px] opacity-30 pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold mb-6 relative z-10">Other Ways to Connect</h2>
              <p className="text-[var(--text-secondary)] mb-10 leading-relaxed text-lg relative z-10">
                While phone calls are best for urgent situations, we offer several ways to get in touch for inquiries, custom quotes, or general information.
              </p>
              
              <div className="flex flex-col gap-5 mb-12 relative z-10">
                <Link href="/request-a-quote" className="btn btn-primary w-full flex justify-center py-4 text-lg font-semibold shadow-lg shadow-orange-500/20">
                  Request a Custom Quote Online
                </Link>
                <Link href="/services" className="btn btn-secondary w-full flex justify-center py-4 text-lg font-semibold">
                  Browse All Services
                </Link>
              </div>

              <div className="pt-8 border-t border-[var(--border-color)] relative z-10">
                <h3 className="text-xl font-bold mb-6">Why Quick Car Unlock NYC is Your Trusted Partner</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[var(--slate-light)] bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 size={22} className="text-[var(--safety-green)] shrink-0 mt-0.5" /> 
                    <span><strong>24/7 Availability:</strong> We're always open, ready to assist you day or night.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--slate-light)] bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 size={22} className="text-[var(--safety-green)] shrink-0 mt-0.5" /> 
                    <span><strong>Live ETA:</strong> Call and the dispatcher tells you when to expect a technician.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--slate-light)] bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 size={22} className="text-[var(--safety-green)] shrink-0 mt-0.5" /> 
                    <span><strong>Transparent Pricing:</strong> No hidden fees, exact quote provided on-site.</span>
                  </li>
                  <li className="flex items-start gap-3 text-[var(--slate-light)] bg-white/5 p-3 rounded-lg">
                    <CheckCircle2 size={22} className="text-[var(--safety-green)] shrink-0 mt-0.5" /> 
                    <span><strong>Damage-Free Service:</strong> We prioritize the safety and integrity of your vehicle.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-[#0B1120] border-y border-[var(--border-color)]">
        <div className="container">
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-70">
            {business.licenseNumber && (
              <div className="flex items-center gap-3 text-white font-medium"><CheckCircle2 size={20} className="text-[var(--action-orange)]" /> Licensed (NYC license {business.licenseNumber})</div>
            )}
            {business.insured && (
              <div className="flex items-center gap-3 text-white font-medium"><CheckCircle2 size={20} className="text-[var(--action-orange)]" /> Insured</div>
            )}
            <div className="flex items-center gap-3 text-white font-medium"><CheckCircle2 size={20} className="text-[var(--action-orange)]" /> 24/7 Available</div>
          </div>
        </div>
      </section>


      <ContextNote paragraphs={["Want a price before you call? Use the [price estimator](/price-estimator) or [request a quote](/request-a-quote). Browse our [services](/services) or read [what to do when you are locked out](/guides/locked-keys-in-car-what-to-do).", "We serve [Manhattan](/locations/manhattan), [Brooklyn](/locations/brooklyn), [Queens](/locations/queens), [the Bronx](/locations/bronx) and [Staten Island](/locations/staten-island). Learn [about us](/about) and see [all service areas](/locations). By contacting us you agree to our [Terms of Service](/terms) and [Privacy Policy](/privacy)."]} />
    </div>
  );
}
