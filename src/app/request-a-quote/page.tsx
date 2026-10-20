"use client";

import { useState } from 'react';
import ContextNote from '@/components/ContextNote';
import { 
  Send, Car, MapPin, Phone, User, 
  MessageSquare, Camera, CheckCircle2, Zap, FileText
} from 'lucide-react';
import Link from 'next/link';

export default function RequestQuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({ success: true, message: "Request received! We'll review your details and get back to you promptly." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ success: false, message: result.message || "Submission failed. Please call our dispatch line directly." });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Connection error. Please call us for an immediate quote." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-quote-page min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0 opacity-40"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-[#3B82F6] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <FileText size={16} /> Personalized Estimate
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Request a <span className="text-orange-gradient">Custom Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
            Get a personalized estimate for your auto locksmith needs in New York City.
          </p>
          <p className="text-lg text-[var(--slate-light)] leading-relaxed max-w-3xl mx-auto">
            While our Price Estimator provides a general idea, a custom quote ensures accurate pricing for complex services like specific key replacements or advanced ignition repairs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start max-w-7xl mx-auto">
            
            {/* Left Info Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 leading-relaxed">
                Please fill out the form with as much detail as possible. The more information you provide, the better we can assess your situation and offer a precise estimate.
              </p>
              
              <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] mb-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6">What Happens After You Submit?</h3>
                <ul className="space-y-6 text-[var(--slate-light)]">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--action-orange)] text-white flex items-center justify-center text-sm font-bold mt-1">1</span>
                    <div>
                      <strong className="text-[var(--text-primary)] block text-lg mb-1">Review Your Details</strong>
                      An automotive security specialist will carefully examine the info.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--action-orange)] text-white flex items-center justify-center text-sm font-bold mt-1">2</span>
                    <div>
                      <strong className="text-[var(--text-primary)] block text-lg mb-1">Prepare Your Quote</strong>
                      We will formulate a personalized estimate.
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--action-orange)] text-white flex items-center justify-center text-sm font-bold mt-1">3</span>
                    <div>
                      <strong className="text-[var(--text-primary)] block text-lg mb-1">Contact You</strong>
                      We reach out via your preferred contact method.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center shadow-xl">
                <Zap size={48} className="text-[var(--action-orange)] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-3">In an Emergency?</h3>
                <p className="text-[var(--text-secondary)] mb-6 text-lg">Don't wait for a quote. Call us for immediate dispatch and a live ETA.</p>
                <a href="tel:3478017119" className="text-3xl font-bold text-[var(--action-orange)] hover:text-orange-400 transition-colors block">(347) 801-7119</a>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-3 card p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--glow-blue)] blur-[80px] opacity-20 pointer-events-none"></div>

              <h2 className="text-3xl font-bold mb-8 relative z-10">Custom Quote Form</h2>
              
              {submitStatus && (
                <div className={`p-5 mb-8 rounded-xl border flex items-center gap-3 relative z-10 ${
                  submitStatus.success 
                    ? 'bg-green-500/10 border-green-500/30 text-[var(--safety-green)]' 
                    : 'bg-red-500/10 border-red-500/30 text-red-500'
                }`}>
                  {submitStatus.success ? <CheckCircle2 size={24} className="shrink-0" /> : <Zap size={24} className="shrink-0" />}
                  <p className="font-medium m-0">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                      <User size={16} className="text-[var(--action-orange)]" /> Full Name
                    </label>
                    <input type="text" id="name" name="name" className="w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-white" required placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                      <Phone size={16} className="text-[var(--action-orange)]" /> Phone Number / Email
                    </label>
                    <input type="text" id="phone" name="phone" className="w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-white" required placeholder="(555) 000-0000 or email" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                      <MapPin size={16} className="text-[var(--action-orange)]" /> Location (Borough)
                    </label>
                    <select id="location" name="location" className="w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-[var(--text-primary)]" required>
                      <option value="">Select Borough</option>
                      <option value="manhattan">Manhattan</option>
                      <option value="brooklyn">Brooklyn</option>
                      <option value="queens">Queens</option>
                      <option value="bronx">The Bronx</option>
                      <option value="staten-island">Staten Island</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vehicle" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                      <Car size={16} className="text-[var(--action-orange)]" /> Vehicle Make & Year
                    </label>
                    <input type="text" id="vehicle" name="vehicle" className="w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-white" required placeholder="e.g. 2020 Honda Civic" />
                  </div>
                </div>

                <div>
                  <label htmlFor="issue" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                    <MessageSquare size={16} className="text-[var(--action-orange)]" /> Service Needed / Details
                  </label>
                  <textarea id="issue" name="issue" rows={4} className="w-full p-4 bg-[rgba(15,23,42,0.5)] border border-[var(--border-color)] rounded-xl focus:border-[var(--action-orange)] focus:ring-1 focus:ring-[var(--action-orange)] outline-none transition-all text-white" required placeholder="Describe the issue (e.g., need new smart key, ignition won't turn, emergency or scheduled)"></textarea>
                </div>

                <div>
                  <label htmlFor="image" className="flex items-center gap-2 text-[var(--text-primary)] mb-2 text-sm font-medium">
                    <Camera size={16} className="text-[var(--action-orange)]" /> Upload Key/Lock Photo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-[var(--border-color)] rounded-xl p-8 text-center bg-white/5 hover:bg-white/10 transition-colors">
                    <input type="file" id="image" name="image" accept="image/*" className="mx-auto cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--action-orange)] file:text-white hover:file:bg-orange-600 transition-colors" />
                    <p className="text-[var(--slate-light)] text-sm mt-4">Uploading a photo helps us identify the exact chip type for your key.</p>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-full py-4 text-lg font-bold flex justify-center items-center gap-3 shadow-lg shadow-orange-500/20 mt-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting Request...' : (
                    <>
                      <Send size={20} /> Request Custom Quote
                    </>
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>


      <ContextNote paragraphs={["Want a ballpark first? Try the [price estimator](/price-estimator) and read [how much it costs to unlock a car in NYC](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).", "See what we offer: [emergency car lockout](/services/emergency-lockout), [car key replacement](/services/key-replacement), [ignition repair](/services/ignition-repair). For an emergency, [contact us](/contact) and call. Learn [about us](/about). By submitting a request you agree to our [Terms of Service](/terms) and [Privacy Policy](/privacy)."]} />
    </div>
  );
}
