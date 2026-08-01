import { Metadata } from 'next';
import PriceEstimator from '@/components/PriceEstimator';
import Link from 'next/link';
import { ShieldCheck, Info, Clock, CheckCircle2, Phone, ArrowRight, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Instant Price Estimator | Auto Locksmith | Quick Car Unlock NYC',
  description: 'Get an immediate estimate for your car lockout, key replacement, or ignition repair needs in NYC. Transparent pricing starting at $55.',
};

export default function PriceEstimatorPage() {
  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0 opacity-50"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-[var(--safety-green)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <DollarSign size={16} /> Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Instant <span className="text-orange-gradient">Price Estimator</span> for Auto Locksmith Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
            Get an immediate estimate for your car lockout, key replacement, or ignition needs.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            At Quick Car Unlock NYC, we believe in transparency and helping you understand potential costs upfront. While this tool provides a helpful starting point, please remember that the <strong>final, exact quote will always be provided on-site</strong> by our certified technician before any work begins.
          </p>
        </div>
      </section>

      {/* Estimator Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            
            {/* The Tool */}
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--glow-orange)] blur-[120px] rounded-full z-0 opacity-40"></div>
              <div className="relative z-10 bg-[var(--bg-secondary)] p-2 rounded-3xl border border-[var(--border-color)] shadow-2xl">
                <PriceEstimator />
              </div>
              <p className="text-center text-sm text-[var(--slate-light)] mt-4 flex justify-center items-center gap-2">
                <Info size={16} /> *Strictly an estimate. Actual price provided prior to work.
              </p>
            </div>

            {/* Explanation & Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">How Our Estimator Works</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                Our estimator takes into account general factors to give you a range. Simply select your vehicle type, confirm if you have tinted windows, and describe your situation.
              </p>

              <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-8 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#3B82F6]" size={24} /> Factors Influencing Your Final Price:
                </h3>
                <ul className="space-y-4 text-[var(--slate-light)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                    <span><strong>Vehicle Make, Model, and Year:</strong> Different vehicles have varying levels of security and key complexity.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                    <span><strong>Type of Service Required:</strong> Emergency lockout, key replacement, or ignition repair each have different labor costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                    <span><strong>Key Type:</strong> Standard keys, transponder keys, smart fobs, and high-security keys have different replacement costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                    <span><strong>Complexity of the Situation:</strong> Factors like a broken key in the ignition can affect the time required.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--action-orange)] mt-1 shrink-0">•</span> 
                    <span><strong>Time of Day/Night:</strong> After-hours or holiday calls may incur different rates.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Commitment to Transparency</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-color)]">
                  <CheckCircle2 className="text-[var(--safety-green)] mb-3" size={28} />
                  <h4 className="font-bold mb-2 text-lg">No Hidden Fees</h4>
                  <p className="text-sm text-[var(--slate-light)] leading-relaxed">The price quoted on-site is the final price you pay.</p>
                </div>
                <div className="bg-[var(--bg-secondary)] p-6 rounded-xl border border-[var(--border-color)]">
                  <CheckCircle2 className="text-[var(--safety-green)] mb-3" size={28} />
                  <h4 className="font-bold mb-2 text-lg">Approval First</h4>
                  <p className="text-sm text-[var(--slate-light)] leading-relaxed">We never begin work without your final approval.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center relative overflow-hidden border-t border-[var(--border-color)] bg-[#0B1120]">
        <div className="container relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Service? Contact Us!</h2>
          <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
            Whether you have your estimate or need immediate assistance, our team is ready to help. Call us 24/7 for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse flex items-center gap-3 py-4 px-10 text-xl">
              <Phone size={24} /> (347) 801-7119
            </a>
            <Link href="/request-a-quote" className="btn btn-secondary flex items-center gap-2 py-4 px-10 text-lg">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
