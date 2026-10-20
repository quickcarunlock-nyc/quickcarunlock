import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, DollarSign } from 'lucide-react';
import PriceEstimatorEs from '@/components/es/PriceEstimatorEs';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import Schema from '@/components/Schema';
import { alternatesFor } from '@/lib/i18n';
import { Hero, Section, Checklist, FinalCta } from '@/components/es/Blocks';

const title = 'Estimador de Precios: Abrir Carro y Llaves en NYC | Quick Car Unlock';
const description = 'Calcule un precio aproximado para abrir su carro, hacer una llave nueva o reparar el encendido en Nueva York. El precio exacto se le dice antes de empezar el trabajo.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/price-estimator', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/estimador-de-precios' },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Estimador de precios', item: 'https://www.quickcarunlock.com/es/estimador-de-precios' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Estimador de precios' }]}
        badge={<><DollarSign size={16} /> Precios claros</>}
        title={<>Estimador de Precios para <span className="text-orange-gradient">Abrir su Carro</span></>}
        lead={[
          'Calcule un precio aproximado para abrir su carro, hacer una llave o reparar el encendido. Es un punto de partida: el precio exacto se le dice antes de empezar cualquier trabajo.',
        ]}
      />
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <PriceEstimatorEs />
          <div>
            <h2 className="text-3xl font-bold mb-5">Qué cambia el precio final</h2>
            <Checklist items={[
              'El vehículo: marca, modelo y año. Algunos tienen cerraduras de más seguridad.',
              'El servicio: abrir el carro, hacer una llave o reparar el encendido son trabajos distintos.',
              'El tipo de llave: de metal, con chip, con control remoto o fob inteligente.',
              'La complejidad: por ejemplo, una llave rota dentro del encendido.',
              'La hora y el lugar: las llamadas de madrugada o en días feriados pueden cobrarse distinto.',
            ]} />
            <div className="card p-6 mt-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><ShieldCheck className="text-[var(--safety-green)]" /> Nuestro compromiso</h3>
              <p className="text-[var(--text-secondary)] m-0">Le decimos el precio antes de empezar y no empezamos el trabajo sin su aprobación. Lea la <Link href="/es/guias/cuanto-cuesta-abrir-un-carro-nyc" className="underline">guía de cuánto cuesta abrir un carro</Link>.</p>
            </div>
          </div>
        </div>
      </Section>
      <FinalCta title="¿Listo para pedir el servicio?" />
      <ContextNote paragraphs={[
        'Compare los servicios: [apertura de carro de emergencia](/es/abrir-carro-nyc), [llaves nuevas](/es/servicios/duplicado-de-llaves-de-carro) y [reparación de encendido](/es/servicios/reparacion-de-encendido). Si necesita un precio más exacto, [pida una cotización](/es/cotizacion).',
        'Vea también las [zonas donde trabajamos](/es/zonas) y las [guías para conductores](/es/guias).',
      ]} />
      <RelatedLinks current="/es/estimador-de-precios" lang="es" />
    </div>
  );
}
