import { Metadata } from 'next';
import Link from 'next/link';
import { KeyRound, Wrench, CarFront } from 'lucide-react';
import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { alternatesFor } from '@/lib/i18n';
import { startingPricesEs } from '@/lib/business';
import { Hero, Section, PriceList, BoroughChips, FinalCta, Faq } from '@/components/es/Blocks';

const title = 'Servicios de Cerrajería de Autos en NYC | Quick Car Unlock';
const description = 'Servicios de cerrajería móvil para carros en Nueva York: apertura de carros, llaves nuevas, programación de fobs y reparación de encendido, 24 horas, en los cinco condados.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/services', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/servicios' },
};

const cards = [
  { href: '/es/abrir-carro-nyc', icon: CarFront, title: 'Apertura de carro de emergencia', text: 'Para cuando las llaves quedaron dentro del carro, dentro del baúl o no las encuentra. Abrimos la puerta sin dañar el carro, en la mayoría de los casos.' },
  { href: '/es/servicios/duplicado-de-llaves-de-carro', icon: KeyRound, title: 'Llaves nuevas y programación de llaves', text: 'Cortamos y programamos llaves con chip, llaves con control remoto y fobs inteligentes, según la marca, el modelo y el año.' },
  { href: '/es/servicios/reparacion-de-encendido', icon: Wrench, title: 'Reparación de encendido', text: 'Diagnosticamos y reparamos el cilindro cuando la llave no gira, está atorada o se rompió dentro.' },
];

const faqs = [
  { q: '¿Qué servicio necesito si me quedé fuera del carro?', a: 'La [apertura de carro de emergencia](/es/abrir-carro-nyc). Si además perdió la llave, pregunte también por una [llave nueva](/es/servicios/duplicado-de-llaves-de-carro).' },
  { q: '¿Trabajan las 24 horas?', a: 'Sí. El despacho está abierto todo el día y toda la noche. Llame y pida el tiempo estimado.' },
  { q: '¿Cómo sé cuánto va a costar?', a: 'Pida el precio total por teléfono antes de que envíen a nadie. Use también el [estimador de precios](/es/estimador-de-precios) para una idea aproximada.' },
];

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://www.quickcarunlock.com/es/servicios' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Servicios' }]}
        title={<>Servicios de Cerrajería para su <span className="text-orange-gradient">Carro en NYC</span></>}
        lead={['Aperturas, llaves nuevas y reparación de encendido, con un técnico que va hasta donde está su vehículo, las 24 horas.']}
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(c => (
            <Link key={c.href} href={c.href} className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition-transform block">
              <c.icon size={36} className="text-[var(--action-orange)] mb-4" />
              <h2 className="text-xl font-bold mb-2">{c.title}</h2>
              <p className="text-[var(--text-secondary)] m-0">{c.text}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="Precios desde" alt><PriceList prices={startingPricesEs} /></Section>
      <Section title="Zonas donde trabajamos"><BoroughChips /></Section>
      <Faq items={faqs} />
      <FinalCta />
      <ContextNote paragraphs={[
        'Antes de llamar, lea la guía de [qué hacer si dejó las llaves dentro del carro](/es/guias/deje-las-llaves-dentro-del-carro) o de [cuánto cuesta abrir un carro](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).',
        '[Pida una cotización](/es/cotizacion), calcule un precio con el [estimador](/es/estimador-de-precios) o conozca [quiénes somos](/es/nosotros).',
      ]} />
      <RelatedLinks current="/es/servicios" lang="es" />
    </div>
  );
}
