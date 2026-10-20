import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { alternatesFor } from '@/lib/i18n';
import { boroughsEs } from '@/lib/boroughsEs';
import { Hero, Section, FinalCta } from '@/components/es/Blocks';

const title = 'Zonas de Servicio: Cerrajero de Autos en los 5 Condados de NYC';
const description = 'Cerrajero móvil para carros en Manhattan, Brooklyn, Queens, el Bronx y Staten Island. Llame las 24 horas para un tiempo estimado y un precio antes de empezar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/locations', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/zonas' },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Zonas', item: 'https://www.quickcarunlock.com/es/zonas' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Zonas' }]}
        title={<>Cerrajero Móvil para Carros <span className="text-orange-gradient">en los Cinco Condados</span></>}
        lead={[
          'No trabajamos desde un local fijo: nuestros técnicos van hasta donde está su carro en Nueva York. Llame y el despachador le da un tiempo estimado según su ubicación y el tráfico del momento.',
        ]}
      />
      <Section>
        <div className="space-y-6">
          {boroughsEs.map(b => (
            <div key={b.id} className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-3"><MapPin className="text-[var(--action-orange)]" /> <Link href={`/es/zonas/${b.id}`} className="hover:text-[var(--action-orange)]">Abrir carro en {b.name}</Link></h2>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-3">{b.intro[0]}</p>
              <p className="text-[var(--slate-light)] m-0"><strong>Barrios:</strong> {b.neighborhoods.slice(0, 6).map(n => n.name).join(', ')} y más. <Link href={`/es/zonas/${b.id}`} className="text-blue-400 hover:text-blue-300">Ver {b.label}</Link></p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
      <ContextNote paragraphs={[
        'Vea los [servicios](/es/servicios) que ofrecemos: [apertura de carro de emergencia](/es/abrir-carro-nyc), [llaves nuevas](/es/servicios/duplicado-de-llaves-de-carro) y [reparación de encendido](/es/servicios/reparacion-de-encendido).',
        'Lea [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc) o [pida una cotización](/es/cotizacion).',
      ]} />
      <RelatedLinks current="/es/zonas" lang="es" />
    </div>
  );
}
