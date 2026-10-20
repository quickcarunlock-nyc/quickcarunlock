import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, BookOpen } from 'lucide-react';
import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { guidesEs as guides } from '@/lib/guidesEs';
import { alternatesFor } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Guías para conductores en NYC: carro cerrado y llaves | Quick Car Unlock',
  description:
    'Guías prácticas para conductores de NYC: qué hacer si se quedó fuera del carro, si la policía o los bomberos ayudan, cuánto cuesta abrir un carro y qué hacer si pierde una llave.',
  alternates: alternatesFor('/guides', 'es'),
  openGraph: { locale: 'es_US', title: 'Guías para conductores en NYC: carro cerrado y llaves', description: 'Ayuda práctica para carros cerrados, llaves perdidas y costos de apertura en NYC.', url: '/es/guias' },
};

export default function GuidesIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://www.quickcarunlock.com/es/guias' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumbSchema} />
      <section className="pt-32 pb-12 border-b border-[var(--border-color)]">
        <div className="container max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen size={16} /> Guías
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guías para conductores en NYC: carro cerrado y llaves</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Respuestas claras a las preguntas que la gente se hace cuando se queda fuera del carro o pierde una llave. Si necesita ayuda ahora mismo, llame al{' '}
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
                  <Link href={`/es/guias/${g.slug}`} className="hover:text-[var(--action-orange)]">{g.title}</Link>
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed m-0">{g.summary}</p>
              </li>
            ))}
          </ul>
          <div className="text-center mt-12">
            <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-4 px-8 text-xl">
              <Phone size={22} /> Llame al (347) 801-7119
            </a>
          </div>
        </div>
      </section>
      <ContextNote
        heading="¿Necesita un técnico y no un artículo?"
        paragraphs={[
          'Vea nuestros servicios: [apertura de carro de emergencia](/es/abrir-carro-nyc), [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro) y [reparación de encendido](/es/servicios/reparacion-de-encendido). Calcule un precio aproximado con el [estimador de precios](/es/estimador-de-precios).',
          'Trabajamos en [Manhattan](/es/zonas/manhattan), [Brooklyn](/es/zonas/brooklyn), [Queens](/es/zonas/queens), [el Bronx](/es/zonas/bronx) y [Staten Island](/es/zonas/staten-island). Vea [todas las zonas de servicio](/es/zonas) o conozca [quiénes somos](/es/nosotros).',
        ]}
      />
      <RelatedLinks current="/es/guias" lang="es" />
    </div>
  );
}
