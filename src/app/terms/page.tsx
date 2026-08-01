import { Metadata } from 'next';
import { Scale, FileText, AlertCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | QuickCarUnlock NYC',
  description: 'Terms and conditions governing the use of Quick Car Unlock NYC website and auto locksmith services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      {/* Header */}
      <section className="container max-w-4xl text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-orange-500/10 rounded-full mb-6 text-[var(--action-orange)] border border-orange-500/20">
          <Scale size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-[var(--text-secondary)]">Agreement Between User and Quick Car Unlock NYC</p>
      </section>

      {/* Content */}
      <section className="container max-w-4xl">
        <div className="card p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl rounded-3xl text-[var(--slate-light)] leading-relaxed space-y-10">
          
          <div>
            <p className="text-lg">
              Welcome to quickcarunlock.com. The quickcarunlock.com website (the "Site") is comprised of various web pages operated by Quick Car Unlock NYC. quickcarunlock.com is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of quickcarunlock.com constitutes your agreement to all such Terms.
            </p>
            <p className="text-lg mt-4">
              Quick Car Unlock NYC provides emergency automotive locksmith services, including car unlocking, key replacement, and ignition repair, primarily within the five boroughs of New York City.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
               <FileText className="text-[#3B82F6]" /> 1. Privacy
            </h2>
            <p>
              Your use of quickcarunlock.com is subject to Quick Car Unlock NYC's Privacy Policy. Please review our Privacy Policy, which also governs the Site and informs users of our data collection practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3">2. Electronic Communications</h2>
            <p>
              Visiting quickcarunlock.com or sending emails to Quick Car Unlock NYC constitutes electronic communications. You consent to receive electronic communications and you agree that all agreements, notices, disclosures and other communications that we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communications be in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3">3. Cancellation/Refund Policy</h2>
            <p>
              Our services are typically rendered on-site and payment is collected upon completion of the service. Due to the emergency nature of our services, cancellations are generally handled on a case-by-case basis. If you need to cancel a dispatched service, please contact us immediately at (347) 801-7119. Depending on the technician's proximity and work already performed, a service fee may apply. Refunds for services rendered are at the sole discretion of Quick Car Unlock NYC.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3">4. No Unlawful or Prohibited Use/Intellectual Property</h2>
            <p>
              You are granted a non-exclusive, non-transferable, revocable license to access and use quickcarunlock.com strictly in accordance with these terms of use. As a condition of your use of the Site, you warrant to Quick Car Unlock NYC that you will not use the Site for any purpose that is unlawful or prohibited by these Terms.
            </p>
            <p className="mt-4">
              All content included as part of the Service, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the Site, is the property of Quick Car Unlock NYC or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
              <AlertCircle className="text-red-500" /> 5. Liability Disclaimer
            </h2>
            <p className="uppercase text-sm tracking-wider text-[var(--text-secondary)] bg-white/5 p-6 rounded-xl border border-white/10">
              THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN... QUICK CAR UNLOCK NYC AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3">6. Arbitration</h2>
            <p>
              In the event the parties are not able to resolve any dispute between them arising out of or concerning these Terms and Conditions, then such dispute shall be resolved only by final and binding arbitration pursuant to the Federal Arbitration Act, conducted by a single neutral arbitrator and administered by the American Arbitration Association, or a similar arbitration service selected by the parties, in a location mutually agreed upon by the parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
              <HelpCircle className="text-[var(--safety-green)]" /> 7. Contact Us
            </h2>
            <p>Quick Car Unlock NYC welcomes your questions or comments regarding the Terms:</p>
            <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
              <p>Email: <strong>info@quickcarunlock.com</strong></p>
              <p>Phone: <strong>(347) 801-7119</strong></p>
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--border-color)] text-sm text-[var(--slate-light)] opacity-70">
            <p>Effective as of August 1, 2026</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
