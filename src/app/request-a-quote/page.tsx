"use client";

import { useState } from 'react';
import { 
  Send, Car, MapPin, Phone, User, 
  MessageSquare, Camera, CheckCircle2, Zap 
} from 'lucide-react';

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
        setSubmitStatus({ success: true, message: "Request received! Check your phone—we'll text you a binding quote within 5 minutes." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ success: false, message: result.message || "Submission failed. Please call our 24/7 dispatch line directly." });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Connection error. Please call us for an immediate quote." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-quote-page">
      
      {/* Hero */}
      <section style={{ padding: 'clamp(4rem, 10vw, 6rem) 1rem clamp(2rem, 5vw, 4rem) 1rem', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'var(--glow-blue)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', color: '#3B82F6', padding: '6px 16px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <Zap size={16} /> Instant Pricing Response
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Get a <span className="text-orange-gradient">Binding Quote</span> in Minutes
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Fill out the form below. For the most accurate pricing on key replacements, please upload a photo of your current key or VIN.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: 'clamp(2rem, 8vw, 5rem) 1rem' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          
          <div className="card" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
            
            {submitStatus && (
              <div style={{
                padding: '1.25rem',
                marginBottom: '2rem',
                borderRadius: '12px',
                backgroundColor: submitStatus.success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: submitStatus.success ? 'var(--safety-green)' : '#EF4444',
                border: `1px solid ${submitStatus.success ? 'var(--safety-green)' : '#EF4444'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                {submitStatus.success ? <CheckCircle2 size={24} /> : <Zap size={24} />}
                <p style={{ margin: 0, fontWeight: 500 }}>{submitStatus.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="name" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    <User size={16} color="var(--action-orange)" /> Full Name
                  </label>
                  <input type="text" id="name" name="name" className="form-control" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    <Phone size={16} color="var(--action-orange)" /> Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" className="form-control" required placeholder="(555) 000-0000" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="form-group">
                  <label htmlFor="location" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    <MapPin size={16} color="var(--action-orange)" /> Your Current Borough
                  </label>
                  <select id="location" name="location" className="form-control" required style={{ width: '100%' }}>
                    <option value="">Select Borough</option>
                    <option value="manhattan">Manhattan</option>
                    <option value="brooklyn">Brooklyn</option>
                    <option value="queens">Queens</option>
                    <option value="bronx">The Bronx</option>
                    <option value="staten-island">Staten Island</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="vehicle" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                    <Car size={16} color="var(--action-orange)" /> Vehicle Make & Year
                  </label>
                  <input type="text" id="vehicle" name="vehicle" className="form-control" required placeholder="e.g. 2020 Honda Civic" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  <MessageSquare size={16} color="var(--action-orange)" /> Describe Your Emergency
                </label>
                <textarea id="issue" name="issue" className="form-control" required rows={4} placeholder="What's the situation? Keys lost, locked in car, or ignition jammed?"></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="image" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  <Camera size={16} color="var(--action-orange)" /> Upload Key/Lock Photo (Optional)
                </label>
                <div style={{ border: '2px dashed var(--border-color)', borderRadius: '8px', padding: 'clamp(1rem, 4vw, 2rem)', textAlign: 'center', background: 'rgba(255,255,255,0.01)' }}>
                  <input type="file" id="image" name="image" accept="image/*" style={{ margin: '0 auto', cursor: 'pointer' }} />
                  <p style={{ color: 'var(--slate-light)', fontSize: '0.85rem', marginTop: '1rem' }}>Uploading a photo helps us identify the exact chip type for your key.</p>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ padding: 'clamp(1rem, 4vw, 1.25rem)', fontSize: 'clamp(1rem, 4vw, 1.1rem)', marginTop: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                {isSubmitting ? 'Transmitting Request...' : (
                  <>
                    <Send size={20} /> Dispatch Quote Request
                  </>
                )}
              </button>

              <p style={{ textAlign: 'center', color: 'var(--slate-light)', fontSize: '0.85rem', marginTop: '1rem' }}>
                By submitting, you agree to receive a text message quote from our dispatch team.
              </p>
            </form>
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>In a High-Traffic Emergency?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>If you are parked unsafely or in a rush, don't wait for the form—call us directly.</p>
            <a href="tel:3478017119" style={{ fontSize: 'clamp(1.5rem, 8vw, 2.5rem)', fontWeight: 'bold', color: 'var(--action-orange)', wordBreak: 'break-word' }}>(347) 801-7119</a>
          </div>

        </div>
      </section>

    </div>
  );
}
