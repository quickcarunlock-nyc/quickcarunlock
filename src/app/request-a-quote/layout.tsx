import type { Metadata } from 'next';
import { alternatesFor } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Request a Custom Quote | Auto Locksmith NYC | Quick Car Unlock',
  description: 'Request a personalized quote for car key replacement, fob programming or ignition repair in NYC. For an emergency, call for a live ETA.',
  alternates: alternatesFor('/request-a-quote', 'en'),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
