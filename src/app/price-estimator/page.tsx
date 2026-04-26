import { Metadata } from 'next';
import PriceEstimator from '@/components/PriceEstimator';

export const metadata: Metadata = {
  title: 'Car Unlock Price Estimator | QuickCarUnlock NYC',
  description: 'Get an instant estimate for your car lockout, key replacement, or ignition repair service in NYC. Transparent pricing starting from $55.',
};

export default function PriceEstimatorPage() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="text-trust-blue text-center" style={{ marginBottom: '1rem' }}>Interactive Price Estimator</h1>
      <p className="text-slate-gray text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1.1rem' }}>
        Select your vehicle details and service needed to get an instant baseline estimate.
      </p>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <PriceEstimator />
      </div>
    </div>
  );
}
