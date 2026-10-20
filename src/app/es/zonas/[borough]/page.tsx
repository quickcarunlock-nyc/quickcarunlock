import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, CheckCircle2, HelpCircle, Zap, Clock, ListChecks, Users, Route, ArrowRight } from 'lucide-react';
import Schema from '@/components/Schema';
import RelatedLinks from '@/components/RelatedLinks';
import { boroughsEs as boroughs, boroughByIdEs as boroughById } from '@/lib/boroughsEs';
import { alternatesFor } from '@/lib/i18n';
import RichText, { plain } from '@/components/RichText';
import { business, trustLineEs as trustLine, startingPricesEs } from '@/lib/business';

// Only these five slugs exist; anything else returns a real 404
export const dynamicParams = false;

// Pre-define the static routes for Cloudflare Pages
export function generateStaticParams() {
  return boroughs.map(b => ({ borough: b.id }));
}

type Props = {
  params: Promise<{ borough: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough } = await params;
  const data = boroughById[borough];
  if (!data) return { title: 'Zona no encontrada' };

  const title = `Abrir carro en ${data.name}, NYC | Quick Car Unlock`;
  return {
    title,
    description: data.metaDescription,
    alternates: alternatesFor(`/locations/${data.id}`, 'es'),
    openGraph: {
      type: 'website',
      locale: 'es_US',
      title,
      description: data.metaDescription,
      url: `/es/zonas/${data.id}`,
    },
    twitter: { card: 'summary_large_image', title, description: data.metaDescription },
  };
}

const prices = startingPricesEs;

export default async function BoroughPage({ params }: Props) {
  const { borough } = await params;
  const data = boroughById[borough];
  if (!data) notFound();

  const url = `https://www.quickcarunlock.com/es/zonas/${data.id}`;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Apertura de carros en ${data.name}`,
    inLanguage: 'es',
    serviceType: 'Cerrajería automotriz móvil',
    url,
    provider: { '@type': 'Locksmith', name: 'Quick Car Unlock', telephone: '+13478017119', url: 'https://www.quickcarunlock.com' },
    areaServed: { '@type': 'AdministrativeArea', name: `${data.name}, New York City` },
    availableChannel: { '@type': 'ServiceChannel', servicePhone: '+13478017119' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(f.a) },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Zonas', item: 'https://www.quickcarunlock.com/es/zonas' },
      { '@type': 'ListItem', position: 3, name: data.name, item: url },
    ],
  };

  return (
    <div className="location-detail-page min-h-screen" lang="es">
      <Schema data={serviceSchema} />
      <Schema data={faqSchema} />
      <Schema data={breadcrumbSchema} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--bg-primary)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute top-[-10%] right-[-10%] w-1/2 h-1/2 bg-[var(--glow-blue)] blur-[100px] rounded-full z-0 opacity-40"></div>
        <div className="container relative z-10 text-center max-w-4xl mx-auto">
          <nav aria-label="Ruta de navegación" className="text-sm text-[var(--slate-light)] mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link> / <Link href="/es/zonas" className="hover:text-white">Todas las zonas</Link> / {data.name}
          </nav>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-[var(--safety-green)] px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <MapPin size={16} /> Servicio móvil en {data.name} &middot; 24/7
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Abrir carro en <span className="text-orange-gradient">{data.name}</span>
          </h1>
          {data.intro.map((para, i) => (
            <p key={i} className="text-lg text-[var(--text-secondary)] mb-5 leading-relaxed max-w-3xl mx-auto">{para}</p>
          ))}
          {trustLine && <p className="text-sm text-[var(--slate-light)] mb-2">{trustLine}</p>}
          <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-4 px-8 text-xl mt-4">
            <Phone size={22} /> Llame al (347) 801-7119
          </a>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-20 border-b border-[var(--border-color)]">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-10 flex items-center gap-4"><Users size={36} className="text-[var(--action-orange)]" /> A quién ayudamos en {data.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.audiences.map((a, i) => (
              <div key={i} className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
                <h3 className="text-2xl font-bold mb-3">{a.title}</h3>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed m-0"><RichText text={a.text} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations + price list */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8">Situaciones comunes en {data.label}</h2>
              <div className="space-y-8">
                {data.situations.map((s, i) => (
                  <div key={i}>
                    <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed m-0"><RichText text={s.text} /></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-10 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl rounded-3xl">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 border-b border-[var(--border-color)] pb-6">
                <Zap size={32} className="text-[var(--action-orange)]" /> Precios desde en {data.name}
              </h2>
              <div className="space-y-6">
                {prices.map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-[var(--border-color)] last:border-0">
                    <span className="text-[var(--text-secondary)] text-lg font-medium">{item.service}</span>
                    <span className="text-2xl font-bold text-[var(--action-orange)]">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--slate-light)] mt-8 italic opacity-80">
                Precios estimados de partida. El precio exacto depende de su vehículo y de su ubicación, y se le dice antes de empezar cualquier trabajo. ¿Dudas sobre el precio? Lea nuestra <Link href="/es/guias/cuanto-cuesta-abrir-un-carro-nyc" className="underline">guía de cuánto cuesta abrir un carro en NYC</Link>.
              </p>
              <a href="tel:3478017119" className="btn btn-pulse w-full text-center mt-8 text-xl py-5 rounded-xl font-bold">Llame para un precio exacto</a>
              <p className="text-sm mt-4 text-center m-0">
                <Link href="/es/estimador-de-precios" className="text-blue-400 hover:text-blue-300">Pruebe el estimador de precios en línea</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to make the call go faster */}
      <section className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-3 flex items-center gap-4"><ListChecks size={36} className="text-[var(--action-orange)]" /> Antes de llamar desde {data.label}</h2>
          <p className="text-[var(--slate-light)] text-lg mb-8"><Clock size={16} className="inline mr-2" />Unos cuantos datos hacen más exacto el tiempo estimado y más rápida la visita.</p>
          <ul className="space-y-4">
            {data.access.map((a, i) => (
              <li key={i} className="flex gap-4 text-[var(--text-secondary)] text-lg leading-relaxed">
                <CheckCircle2 size={24} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><RichText text={a} /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Getting around */}
      <section className="py-20 border-b border-[var(--border-color)]">
        <div className="container max-w-5xl">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-4"><Route size={36} className="text-[var(--action-orange)]" /> Calles y tráfico que afectan su tiempo estimado en {data.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.gettingAround.map((g, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-2">{g.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed m-0"><RichText text={g.text} /></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods + FAQ */}
      <section className="py-24">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-10">Preguntas frecuentes: {data.name}</h2>
              <div className="space-y-6">
                {data.faqs.map((f, i) => (
                  <div key={i} className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
                    <h3 className="text-xl font-bold mb-4 flex items-start gap-4">
                      <HelpCircle size={24} className="text-[var(--action-orange)] shrink-0 mt-1" />
                      <span className="leading-snug">{f.q}</span>
                    </h3>
                    <p className="text-[var(--slate-light)] leading-relaxed ml-10 m-0"><RichText text={f.a} /></p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-10">Zonas que cubrimos en {data.label}</h2>
              <ul className="space-y-4 list-none p-0">
                {data.neighborhoods.map((hood, i) => (
                  <li key={i} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold m-0 flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[var(--safety-green)] shrink-0" /> {hood.name}
                    </h3>
                    <p className="text-[var(--slate-light)] m-0 mt-1 ml-8">{hood.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighboring boroughs */}
      <section className="py-16 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Zonas de servicio cercanas</h2>
          <ul className="space-y-3 list-none p-0">
            {data.nearby.map(n => (
              <li key={n.id} className="flex gap-3 text-[var(--text-secondary)] text-lg leading-relaxed">
                <ArrowRight size={20} className="text-[var(--action-orange)] shrink-0 mt-1" /> <span><RichText text={n.text} /></span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0F172A]">¿Se quedó fuera de su carro en {data.label}?</h2>
          <p className="mb-10 text-xl font-medium opacity-90 leading-relaxed">
            Llame y el despachador le da un tiempo estimado y un precio antes de enviar a nadie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:3478017119" className="btn btn-pulse bg-[#0F172A] text-white hover:bg-black text-2xl py-5 px-12 inline-flex items-center justify-center gap-4 rounded-full font-bold">
              <Phone size={28} /> (347) 801-7119
            </a>
            <Link href="/es/cotizacion" className="btn bg-transparent border-4 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-2xl py-5 px-12 inline-flex items-center justify-center rounded-full font-bold">
              Pedir una cotización
            </Link>
          </div>
        </div>
      </section>

      <RelatedLinks current={`/es/zonas/${data.id}`} lang="es" />
    </div>
  );
}
