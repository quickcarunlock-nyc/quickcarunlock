import { Metadata } from 'next';
import { FileText, Zap } from 'lucide-react';
import QuoteFormEs from '@/components/es/QuoteFormEs';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import Schema from '@/components/Schema';
import { alternatesFor } from '@/lib/i18n';
import { business } from '@/lib/business';
import { Hero, Section, Steps } from '@/components/es/Blocks';

const title = 'Pedir una Cotización: Llaves y Cerrajería de Autos en NYC';
const description = 'Pida una cotización para llaves nuevas, programación de fobs o reparación de encendido en Nueva York. Para una emergencia, llame y pida el tiempo estimado.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/request-a-quote', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/cotizacion' },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Cotización', item: 'https://www.quickcarunlock.com/es/cotizacion' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Cotización' }]}
        badge={<><FileText size={16} /> Estimado personalizado</>}
        title={<>Pida una <span className="text-orange-gradient">Cotización</span></>}
        lead={[
          'Para trabajos como una llave nueva para un modelo específico o una reparación de encendido, una cotización personalizada da un precio más exacto que el estimador.',
        ]}
      >
        <span />
      </Hero>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-5">Qué pasa después de enviar el formulario</h2>
            <Steps items={[
              { title: 'Revisamos sus datos', text: 'Mientras más detalles nos dé, más exacta será la cotización.' },
              { title: 'Preparamos el precio', text: 'Calculamos un estimado según su vehículo y el trabajo.' },
              { title: 'Nos comunicamos con usted', text: 'Le escribimos o le llamamos al teléfono o correo que nos dio.' },
            ]} />
            <div className="card p-6 mt-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl text-center">
              <Zap size={40} className="text-[var(--action-orange)] mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">¿Es una emergencia?</h3>
              <p className="text-[var(--text-secondary)] mb-3">No espere una cotización. Llame para despacho inmediato y un tiempo estimado.</p>
              <a href={`tel:${business.phoneTel}`} className="text-3xl font-bold text-[var(--action-orange)]">{business.phoneDisplay}</a>
            </div>
          </div>
          <div className="lg:col-span-3"><QuoteFormEs /></div>
        </div>
      </Section>
      <ContextNote paragraphs={[
        '¿Quiere una idea del precio primero? Use el [estimador de precios](/es/estimador-de-precios) y lea [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).',
        'Vea los servicios: [apertura de carro de emergencia](/es/abrir-carro-nyc), [llaves nuevas](/es/servicios/duplicado-de-llaves-de-carro) y [reparación de encendido](/es/servicios/reparacion-de-encendido). Para una emergencia, vaya a [contacto](/es/contacto) y llame. Conozca [quiénes somos](/es/nosotros). Al enviar una solicitud, usted acepta nuestros [Términos de servicio](/terms) y nuestra [Política de privacidad](/privacy) (en inglés).',
      ]} />
      <RelatedLinks current="/es/cotizacion" lang="es" />
    </div>
  );
}
