import { Metadata } from 'next';
import Link from 'next/link';
import { KeyRound, Wrench, CarFront, Clock, ShieldCheck, DollarSign, BookOpen } from 'lucide-react';
import Schema from '@/components/Schema';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import { plain } from '@/components/RichText';
import { alternatesFor } from '@/lib/i18n';
import { business, trustLineEs } from '@/lib/business';
import { Hero, Section, Faq, BoroughChips, FinalCta, Steps } from '@/components/es/Blocks';

const title = 'Cerrajero de Autos en Nueva York | Abrir Carro 24 Horas';
const description =
  'Cerrajería móvil para carros en Nueva York, 24 horas: abrimos su carro, hacemos llaves y reparamos el encendido en los cinco condados. Llame para un tiempo estimado y el precio.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/', 'es'),
  openGraph: { type: 'website', locale: 'es_US', title, description, url: '/es' },
};

const pr = Object.fromEntries(business.startingPrices.map(x => [x.service, x.price]));

const faqs = [
  { q: '¿Pueden abrir mi carro sin dañarlo?', a: 'Normalmente sí. Usamos herramientas profesionales que no rayan la pintura ni dañan la cerradura, y el técnico le explica lo que va a hacer antes de empezar. Vea el [servicio de apertura de emergencia](/es/abrir-carro-nyc).' },
  { q: '¿Cuánto tardan en llegar?', a: 'Depende de dónde esté, del tráfico y de la demanda. El despachador le da un tiempo estimado en la llamada, antes de enviar a nadie. Vea [las zonas donde trabajamos](/es/zonas).' },
  { q: '¿Cuánto cuesta?', a: `Abrir un carro empieza desde ${pr['Emergency car unlock']}, las llaves nuevas desde ${pr['Key replacement']} y la reparación de encendido desde ${pr['Ignition repair']}. El precio exacto se le dice antes de empezar. Lea [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).` },
  { q: '¿Qué necesito para que abran o me hagan una llave?', a: 'Una identificación con foto y la registración o la tarjeta del seguro del carro a su nombre. Confirmamos que el carro es suyo antes de abrirlo o de hacer una llave.' },
  { q: '¿Pueden hacer una llave si perdí la única que tenía?', a: 'Para muchos vehículos, sí, según la marca, el modelo y el año. Vea [llaves nuevas para carros](/es/servicios/duplicado-de-llaves-de-carro) y la guía de [llave perdida](/es/guias/perdi-la-llave-del-carro).' },
];

const services = [
  { href: '/es/abrir-carro-nyc', icon: CarFront, title: 'Abrir carro de emergencia', text: 'Llaves dentro del carro, dentro del baúl o carro cerrado. Sin dañar la puerta ni la pintura.' },
  { href: '/es/servicios/duplicado-de-llaves-de-carro', icon: KeyRound, title: 'Llaves nuevas y programación', text: 'Llaves con chip, con control remoto y fobs inteligentes, hechos donde está su carro.' },
  { href: '/es/servicios/reparacion-de-encendido', icon: Wrench, title: 'Reparación de encendido', text: 'La llave no gira, está atorada o se rompió en el encendido.' },
];

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: 'Quick Car Unlock',
    url: 'https://www.quickcarunlock.com/es',
    telephone: business.phoneE164,
    inLanguage: 'es',
    areaServed: ['Manhattan', 'Brooklyn', 'Queens', 'El Bronx', 'Staten Island'].map(n => ({ '@type': 'AdministrativeArea', name: `${n}, New York City` })),
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={schema} />
      <Schema data={faqSchema} />
      <Hero
        badge={<><Clock size={16} /> Despacho abierto las 24 horas</>}
        title={<>Cerrajero de Autos en Nueva York: <span className="text-orange-gradient">Abrimos su Carro, Hacemos su Llave</span></>}
        lead={[
          'Quick Car Unlock envía un cerrajero móvil hasta donde está su carro en Manhattan, Brooklyn, Queens, el Bronx y Staten Island: llaves dentro del carro, llaves perdidas y encendidos que no giran.',
          'Llame y el despachador le da un tiempo estimado y un precio antes de enviar a nadie.',
        ]}
      />

      <Section title="Nuestros servicios">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(s => (
            <Link key={s.href} href={s.href} className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl hover:-translate-y-1 transition-transform block">
              <s.icon size={36} className="text-[var(--action-orange)] mb-4" />
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-[var(--text-secondary)] m-0">{s.text}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-lg"><Link href="/es/servicios" className="text-blue-400 hover:text-blue-300">Ver todos los servicios</Link></p>
      </Section>

      <Section title="Cómo funciona" alt>
        <Steps items={[
          { title: 'Usted llama', text: `Llame al ${business.phoneDisplay} y diga dónde está y cuál es su carro: año, marca y modelo.` },
          { title: 'Tiempo estimado y precio, antes de enviar a nadie', text: 'El despachador le da el tiempo estimado de llegada y el precio. Usted decide si sigue adelante.' },
          { title: 'El técnico llega, confirma que el carro es suyo y trabaja', text: 'Le pedimos una identificación con foto y la registración o el seguro a su nombre. Luego abrimos el carro o hacemos la llave.' },
        ]} />
      </Section>

      <Section title="Por qué llamar a Quick Car Unlock">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0">
          <li className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl"><Clock className="text-[var(--action-orange)] mb-3" /><h3 className="text-xl font-bold mb-2">24 horas, los siete días</h3><p className="m-0 text-[var(--text-secondary)]">El despacho está abierto todo el día y toda la noche en los cinco condados.</p></li>
          <li className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl"><DollarSign className="text-[var(--action-orange)] mb-3" /><h3 className="text-xl font-bold mb-2">Precio antes de empezar</h3><p className="m-0 text-[var(--text-secondary)]">Le decimos el precio total por teléfono. Vea nuestra <Link href="/es/guias/cuanto-cuesta-abrir-un-carro-nyc" className="underline">guía de precios</Link>.</p></li>
          <li className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl"><ShieldCheck className="text-[var(--action-orange)] mb-3" /><h3 className="text-xl font-bold mb-2">Técnicos asegurados</h3><p className="m-0 text-[var(--text-secondary)]">{trustLineEs}. Herramientas que no dañan el carro.</p></li>
        </ul>
      </Section>

      <Section title="Zonas donde trabajamos" alt>
        <p className="text-lg text-[var(--text-secondary)] mb-5">Vaya a la página de su condado para ver los barrios que cubrimos, los datos que ayudan a que el tiempo estimado sea más exacto y las preguntas más comunes de esa zona.</p>
        <BoroughChips />
        <p className="mt-6 text-lg"><Link href="/es/zonas" className="text-blue-400 hover:text-blue-300">Ver todas las zonas de servicio</Link></p>
      </Section>

      <Section title="Guías para conductores">
        <ul className="space-y-3 list-none p-0 text-lg">
          {[
            ['/es/guias/deje-las-llaves-dentro-del-carro', 'Dejé las llaves dentro del carro: qué hacer ahora mismo'],
            ['/es/guias/la-policia-abre-carros-gratis', '¿La policía o los bomberos abren mi carro?'],
            ['/es/guias/cuanto-cuesta-abrir-un-carro-nyc', '¿Cuánto cuesta abrir un carro en NYC?'],
            ['/es/guias/llaves-dentro-del-baul', 'Llaves dentro del baúl: cómo volver a entrar'],
            ['/es/guias/perdi-la-llave-del-carro', 'Perdí la única llave del carro: sus opciones'],
          ].map(([href, label]) => (
            <li key={href} className="flex gap-3"><BookOpen size={20} className="text-[var(--action-orange)] shrink-0 mt-1" /><Link href={href} className="text-blue-400 hover:text-blue-300">{label}</Link></li>
          ))}
        </ul>
      </Section>

      <Faq items={faqs} />
      <FinalCta />
      <ContextNote
        heading="Más información"
        paragraphs={[
          'Calcule un precio aproximado con el [estimador de precios](/es/estimador-de-precios) o [pida una cotización](/es/cotizacion). Conozca [quiénes somos](/es/nosotros) o vea cómo [contactarnos](/es/contacto).',
          'Si prefiere el sitio en inglés, vea la [página principal en inglés](/).',
        ]}
      />
      <RelatedLinks current="/es" lang="es" />
    </div>
  );
}
