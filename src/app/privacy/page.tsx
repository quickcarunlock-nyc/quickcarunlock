import { Metadata } from 'next';
import { Shield, ShieldAlert, Lock, Eye, FileText, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | QuickCarUnlock NYC',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information when using our emergency auto locksmith services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24">
      {/* Header */}
      <section className="container max-w-4xl text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6 text-[var(--safety-green)] border border-green-500/20">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-[var(--text-secondary)]">Your Privacy Matters to Us</p>
      </section>

      {/* Content */}
      <section className="container max-w-4xl">
        <div className="card p-8 md:p-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl rounded-3xl text-[var(--slate-light)] leading-relaxed space-y-10">
          
          <div>
            <p className="text-lg">
              At Quick Car Unlock NYC, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website (quickcarunlock.com), use our services, or interact with us. We operate in compliance with applicable data protection laws and strive for transparency in our data practices.
            </p>
            <p className="text-lg mt-4">
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-3">
              <Eye className="text-[#3B82F6]" /> 1. Information We Collect
            </h2>
            <p className="mb-4">We collect various types of information to provide and improve our services to you:</p>
            
            <h3 className="text-xl font-bold text-white mb-3 mt-6">1.1. Personal Information You Provide Voluntarily</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Request Service or a Quote:</strong> Name, phone number, email address, vehicle make/model/year, VIN (optional), precise location for service, and details of your car issue.</li>
              <li><strong>Contact Us:</strong> Your name, email address, phone number, and the content of your message.</li>
              <li><strong>Subscribe to Newsletters/Updates:</strong> Your email address.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-3 mt-6">1.2. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring URLs, search queries, and interactions with our website features.</li>
              <li><strong>Geolocation Data:</strong> Approximate location derived from your IP address or, with your consent, more precise location data from your mobile device to facilitate dispatch services.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-3">
              <FileText className="text-[var(--safety-green)]" /> 2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Provide Services:</strong> To dispatch technicians, process service requests, provide quotes, and complete auto locksmith services.</li>
              <li><strong>Communication:</strong> To respond to your inquiries, send service updates, confirmations, and marketing communications (with your consent).</li>
              <li><strong>Improve Services:</strong> To analyze website usage, identify trends, and enhance our website functionality.</li>
              <li><strong>Security & Fraud Prevention:</strong> To protect our services and users from fraudulent activities.</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and enforce our agreements.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-3">
              <Share2 className="text-[var(--action-orange)]" /> 3. How We Share Your Information
            </h2>
            <p className="mb-4">We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who perform services on our behalf, such as payment processing, website hosting, analytics, and marketing assistance.</li>
              <li><strong>Technicians & Dispatch:</strong> Your name, location, vehicle details, and contact information are shared with our certified technicians and dispatch team to facilitate service delivery.</li>
              <li><strong>Legal Requirements:</strong> When required by law, such as in response to a subpoena, court order, or other legal process.</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your explicit consent to do so.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-3">
              <Lock className="text-purple-500" /> 4. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-[var(--border-color)] pb-3">
              <ShieldAlert className="text-red-500" /> 5. Your Choices and Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access & Correction:</strong> You can request access to the personal information we hold about you and ask for corrections.</li>
              <li><strong>Opt-Out of Marketing:</strong> You can opt-out of receiving marketing communications by following unsubscribe instructions.</li>
              <li><strong>Cookies:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-[var(--border-color)] text-sm text-[var(--slate-light)] opacity-70">
            <p>Last Updated: August 1, 2026</p>
            <p className="mt-2">If you have any questions, please contact us at info@quickcarunlock.com</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
