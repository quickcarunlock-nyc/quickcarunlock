import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { plain } from '@/components/RichText';
import { Hero, Section, Checklist, Steps, Faq, PriceList, BoroughChips, FinalCta } from './Blocks';

export type ServiceEs = {
  path: string; // /es/...
  name: string;
  h1: React.ReactNode;
  badge: React.ReactNode;
  lead: string[];
  whatTitle: string;
  what: string[];
  stepsTitle: string;
  steps: { title: string; text: string }[];
  readyTitle: string;
  ready: string[];
  extraTitle?: string;
  extra?: string[];
  prices: { service: string; price: string }[];
  faqs: { q: string; a: string }[];
  note: string[];
};

export default function ServiceTemplate({ s }: { s: ServiceEs }) {
  const url = `https://www.quickcarunlock.com${s.path}`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    inLanguage: 'es',
    url,
    serviceType: 'Cerrajería automotriz móvil',
    provider: { '@type': 'Locksmith', name: 'Quick Car Unlock', telephone: '+13478017119', url: 'https://www.quickcarunlock.com' },
    areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'El Bronx', 'Staten Island'].map(n => ({ '@type': 'AdministrativeArea', name: `${n}, New York City` })),
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: s.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://www.quickcarunlock.com/es/servicios' },
      { '@type': 'ListItem', position: 3, name: s.name, item: url },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />
      <Schema data={breadcrumbSchema} />
      <Hero crumbs={[{ href: '/es/servicios', label: 'Servicios' }, { label: s.name }]} badge={s.badge} title={s.h1} lead={s.lead} />
      <Section title={s.whatTitle}><Checklist items={s.what} /></Section>
      <Section title={s.stepsTitle} alt><Steps items={s.steps} /></Section>
      <Section title={s.readyTitle}><Checklist items={s.ready} /></Section>
      {s.extra && <Section title={s.extraTitle} alt><Checklist items={s.extra} /></Section>}
      <Section title="Precios desde"><PriceList prices={s.prices} /></Section>
      <Section title="Zonas donde trabajamos" alt><BoroughChips /></Section>
      <Faq items={s.faqs} />
      <FinalCta />
      <ContextNote heading="Más información" paragraphs={s.note} />
      <RelatedLinks current={s.path} lang="es" />
    </div>
  );
}
