import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import Schema from '@/components/Schema';
import RichText, { plain } from '@/components/RichText';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { alternatesFor } from '@/lib/i18n';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Abrir Carro en Nueva York | Cerrajero de Autos 24 Horas | Quick Car Unlock',
  description:
    '¿Se le quedaron las llaves dentro del carro en Nueva York? Cerrajero móvil de autos, 24 horas, en los cinco condados. Llame para saber el tiempo de llegada y el precio antes de empezar.',
  alternates: alternatesFor('/services/emergency-lockout', 'es'),
  openGraph: {
    title: 'Abrir Carro en Nueva York | Cerrajero de Autos 24 Horas',
    description: 'Cerrajero móvil de autos en los cinco condados de Nueva York, 24 horas.',
    url: '/es/abrir-carro-nyc',
    locale: 'es_US',
  },
};

const faqs = [
  {
    q: '¿Pueden abrir mi carro sin dañarlo?',
    a: 'En la mayoría de los casos sí. Usamos herramientas profesionales que no rayan la pintura ni dañan la cerradura. El técnico le explica lo que va a hacer antes de empezar.',
  },
  {
    q: '¿Cuánto cuesta abrir un carro?',
    a: 'Abrir un carro empieza desde $55. El precio exacto depende del vehículo, el trabajo y la ubicación, y se le dice antes de empezar.',
  },
  {
    q: '¿Qué necesito para que abran mi carro?',
    a: 'Una identificación con foto y la registración o la tarjeta del seguro del carro a su nombre.',
  },
  {
    q: '¿Pueden hacer una llave nueva si perdí la única que tenía?',
    a: 'Para muchos vehículos, sí. Depende de la marca, el modelo y el año. Llame con esos datos y le decimos qué se puede hacer en el lugar.',
  },
  {
    q: '¿Atienden en español?',
    a: business.spanishSupport
      ? 'Sí. Llame al (347) 801-7119 y pida atención en español.'
      : 'Llame al (347) 801-7119 y pida atención en español. El despachador le confirmará si hay alguien disponible en ese momento.',
  },
  {
    q: '¿Qué hago si dejé las llaves dentro del baúl?',
    a: 'Normalmente un técnico puede abrir una puerta y usar el seguro interior del baúl. Vea la guía de [llaves dentro del baúl](/es/guias/llaves-dentro-del-baul).',
  },
];

export default function SpanishPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicio de apertura de carros en Nueva York',
    inLanguage: 'es',
    serviceType: 'Cerrajero móvil de autos',
    provider: { '@type': 'Locksmith', name: 'Quick Car Unlock', telephone: '+13478017119', url: 'https://www.quickcarunlock.com' },
    areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'El Bronx', 'Staten Island'].map(n => ({ '@type': 'AdministrativeArea', name: `${n}, New York City` })),
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };

  return (
    <div className="min-h-screen" lang="es">
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />

      <section className="pt-32 pb-12 border-b border-[var(--border-color)]">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Abrir Carro en Nueva York: <span className="text-orange-gradient">Cerrajero Móvil 24 Horas</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
            ¿Se le quedaron las llaves dentro del carro? Quick Car Unlock envía un cerrajero móvil hasta donde está su vehículo en Manhattan, Brooklyn, Queens, el Bronx y Staten Island.
          </p>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            Llame y el despachador le da el tiempo estimado de llegada y el precio antes de enviar a nadie.
          </p>
          <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-4 px-8 text-xl">
            <Phone size={22} /> Llamar al (347) 801-7119
          </a>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Qué hacemos</h2>
          <ul className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed list-none p-0">
            <li className="flex gap-3"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Abrir el carro</strong> cuando las llaves quedaron adentro o dentro del baúl, sin dañar la puerta ni la pintura. <Link href="/es/guias/deje-las-llaves-dentro-del-carro" className="text-blue-400 hover:text-blue-300">Qué hacer si dejó las llaves adentro</Link>.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Hacer una llave nueva</strong> o programar un control (fob) si perdió la llave. <Link href="/es/servicios/duplicado-de-llaves-de-carro" className="text-blue-400 hover:text-blue-300">Ver llaves y fobs</Link>.</span></li>
            <li className="flex gap-3"><CheckCircle2 className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><strong>Reparar el interruptor de encendido</strong> cuando la llave no gira. <Link href="/es/servicios/reparacion-de-encendido" className="text-blue-400 hover:text-blue-300">Ver reparación de encendido</Link>.</span></li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tenga esto listo cuando llame</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-[var(--text-secondary)] leading-relaxed">
            <li>Su ubicación exacta: dirección o calle más cercana, y de qué lado de la calle está el carro.</li>
            <li>El año, la marca y el modelo del vehículo.</li>
            <li>Si la llave es de metal, con chip (transponder) o un control de encendido por botón.</li>
            <li>Una identificación con foto y la registración o el seguro del carro a su nombre.</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">¿Hay alguien en peligro dentro del carro?</h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Si hay un niño, una persona o una mascota atrapados dentro, llame al 911 de inmediato. Esa es una emergencia y no debe esperar a un cerrajero.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-2">{f.q}</h3>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed m-0"><RichText text={f.a} /></p>
              </div>
            ))}
          </div>

          <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl mt-12 text-center">
            <h2 className="text-2xl font-bold mb-3">Necesita ayuda ahora</h2>
            <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-3 px-6 text-lg">
              <Phone size={20} /> (347) 801-7119
            </a>
          </div>
        </div>
      </section>
      <ContextNote
        heading="Zonas de servicio y guías"
        paragraphs={[
          'Atendemos [Manhattan](/es/zonas/manhattan), [Brooklyn](/es/zonas/brooklyn), [Queens](/es/zonas/queens), [el Bronx](/es/zonas/bronx) y [Staten Island](/es/zonas/staten-island). Vea [todas las zonas](/es/zonas).',
          'Guías: [qué hacer si dejó las llaves en el carro](/es/guias/deje-las-llaves-dentro-del-carro), [cuánto cuesta abrir un carro](/es/guias/cuanto-cuesta-abrir-un-carro-nyc), [si la policía abre el carro](/es/guias/la-policia-abre-carros-gratis) y [todas las guías](/es/guias). También puede [pedir una cotización](/es/cotizacion) o usar el [estimador de precios](/es/estimador-de-precios).',
        ]}
      />
      <RelatedLinks current="/es/abrir-carro-nyc" lang="es" />
    </div>
  );
}
