"use client";

import { useState } from 'react';

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
        setSubmitStatus({ success: true, message: "Your request has been sent! We reply within 5 minutes." });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({ success: false, message: result.message || "Something went wrong. Please try calling us." });
      }
    } catch (error) {
      setSubmitStatus({ success: false, message: "Network error. Please try again or call us." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '1rem' }}>Request a Service Quote</h1>
      <p className="text-slate-gray text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        Fill out the form below with your vehicle details. You can upload an image of your key or lock to help us provide an accurate quote faster.
      </p>
      
      <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
        {submitStatus && (
          <div style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: '4px',
            backgroundColor: submitStatus.success ? '#d1fae5' : '#fee2e2',
            color: submitStatus.success ? '#065f46' : '#991b1b',
            border: `1px solid ${submitStatus.success ? '#34d399' : '#f87171'}`
          }}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '1rem' }} />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '1rem' }} />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="location">Location (Borough or Zip Code)</label>
            <input type="text" id="location" name="location" required style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '1rem' }} />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="vehicle">Vehicle Make & Model</label>
            <input type="text" id="vehicle" name="vehicle" required placeholder="e.g. 2018 Honda Accord" style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '1rem' }} />
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="issue">Describe the Issue</label>
            <textarea id="issue" name="issue" required rows={3} placeholder="Keys locked inside? Lost keys?" style={{ padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '1rem', fontFamily: 'inherit' }}></textarea>
          </div>

          <div className="form-group" style={{ margin: 0 }}>
            <label htmlFor="image">Upload Photo (Optional)</label>
            <input type="file" id="image" name="image" accept="image/*" style={{ padding: '0.5rem 0' }} />
            <small className="text-slate-gray" style={{ marginTop: '0.25rem' }}>Upload a photo of your key or lock mechanism.</small>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ marginTop: '1rem', width: '100%' }}>
            {isSubmitting ? 'Sending Request...' : 'Submit Request'}
          </button>
          
          <p className="text-center text-slate-gray" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
            We reply within 5 minutes. For immediate emergencies, please <a href="tel:3478017119" style={{ color: 'var(--action-orange)', textDecoration: 'underline' }}>call us</a>.
          </p>
        </form>
      </div>
    </div>
  );
}
