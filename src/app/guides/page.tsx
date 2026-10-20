import { Metadata } from 'next';
import { alternatesFor } from '@/lib/i18n';
import Link from 'next/link';
import { Phone, BookOpen } from 'lucide-react';
import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  alternates: alternatesFor('/guides', 'en'),
  title: 'Car Lockout & Key Guides for NYC Drivers | Quick Car Unlock',
  description:
    'Practical guides for NYC drivers: what to do when locked out, whether police or fire will help, what a car unlock costs, and your options after losing a key.',
  openGraph: { title: 'Car Lockout & Key Guides for NYC Drivers', description: 'Practical help for lockouts, lost keys and car unlock costs in NYC.', url: '/guides' },
};

export default function GuidesIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.quickcarunlock.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.quickcarunlock.com/guides' },
    ],
  };
  return (
    <div className="min-h-screen">
      <Schema data={breadcrumbSchema} />
      <section className="pt-32 pb-12 border-b border-[var(--border-color)]">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen size={16} /> Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Lockout and Key Guides for NYC Drivers</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Plain answers to the questions people ask when they are locked out or lose a key. If you need help right now, call{' '}
            <a href="tel:3478017119" className="text-[var(--action-orange)] font-bold">(347) 801-7119</a>.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-4xl">
          <ul className="space-y-6 list-none p-0">
            {guides.map(g => (
              <li key={g.slug} className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
                <h2 className="text-2xl font-bold mb-3">
                  <Link href={`/guides/${g.slug}`} className="hover:text-[var(--action-orange)]">{g.title}</Link>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed m-0">{g.summary}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-4 px-8 text-xl">
              <Phone size={22} /> Call (347) 801-7119
            </a>
          </div>
        </div>
      </section>
      <ContextNote
        heading="Need a technician, not an article?"
        paragraphs={[
          'See our services: [emergency car lockout](/services/emergency-lockout), [car key replacement](/services/key-replacement) and [ignition repair](/services/ignition-repair). Get a ballpark with the [price estimator](/price-estimator).',
          'We work in [Manhattan](/locations/manhattan), [Brooklyn](/locations/brooklyn), [Queens](/locations/queens), [the Bronx](/locations/bronx) and [Staten Island](/locations/staten-island). See [all service areas](/locations) or learn [about us](/about). ¿Necesita ayuda en español? Vea [abrir carro en NYC](/es/abrir-carro-nyc).',
        ]}
      />
      <RelatedLinks />
    </div>
  );
}
