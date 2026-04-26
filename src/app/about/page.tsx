import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About QuickCarUnlock NYC | Trusted Auto Locksmiths',
  description: 'Learn about QuickCarUnlock NYC. We provide professional, certified mobile auto locksmith services across all 5 boroughs with a focus on speed and reliability.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '2rem' }}>About QuickCarUnlock NYC</h1>
      
      <div className="content-section" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        
        <h3 className="text-trust-blue" style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Locksmith Experience and Expertise</h3>
        
        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Certified Automotive Locksmith Professionals**</h4>
        <p style={{ marginBottom: '1rem' }}>Our team consists entirely of fully certified **automotive locksmiths** with years of practical experience. We handle everything from basic domestic sedans to highly complex European luxury vehicles. Each technician undergoes rigorous hands-on training for modern electronic locking systems. We never dispatch untrained contractors to handle your valuable property.</p>
        <p style={{ marginBottom: '1rem' }}>We equip every service vehicle with advanced diagnostic computers and precision key cutting machines. This professional hardware allows us to perform dealership-level programming directly on the street. We resolve the most complicated immobilizer issues without requiring a tow truck. Our technical expertise guarantees a safe and damage-free entry.</p>
        <p style={{ marginBottom: '1rem' }}>Our deep understanding of vehicle security protects your investment during every single service call. We study the internal wiring and structural components of individual car doors. This specific knowledge prevents accidental damage to side airbags or window regulators. You trust us to provide a flawless resolution to your emergency.</p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>**Centralized New York City Dispatch**</h4>
        <p style={{ marginBottom: '1rem' }}>We operate a sophisticated **centralized dispatch** system that covers all five New York City boroughs. We track the real-time locations of our entire mobile fleet constantly. When you call our emergency line, we identify the absolute closest available technician instantly. This completely eliminates unnecessary waiting times for stranded drivers.</p>
        <p style={{ marginBottom: '1rem' }}>Our localized approach means you get help fast whether you park in Manhattan or Staten Island. We understand the complex traffic patterns and neighborhood layouts across the city. The assigned locksmith knows the most efficient route to reach your exact GPS coordinates. We prioritize speed without compromising safety on the road.</p>
        <p style={{ marginBottom: '1rem' }}>This structured routing system allows us to maintain consistent and reliable service hours. We provide true 24/7 coverage regardless of weather conditions or holidays. You never face an automated voicemail when you experience a midnight car lockout. A live dispatcher answers your call and coordinates your rescue immediately.</p>

        <div className="cta-section text-center" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--background-light)', borderRadius: '8px' }}>
          <h3 className="text-trust-blue" style={{ marginBottom: '1rem' }}>Contact Our Team</h3>
          <p className="text-slate-gray" style={{ marginBottom: '1.5rem' }}>We are ready to assist you anywhere in NYC.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <a href="tel:3478017119" className="btn btn-primary">Call (347) 801-7119</a>
            <Link href="/contact" className="btn btn-secondary">Contact Information</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
