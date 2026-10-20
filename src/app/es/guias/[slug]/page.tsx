import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Schema from '@/components/Schema';
import RelatedLinks from '@/components/RelatedLinks';
import RichText, { plain } from '@/components/RichText';
import { guidesEs as guides, guideBySlugEs as guideBySlug } from '@/lib/guidesEs';
import { enToEs, alternatesFor } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug[slug];
  if (!g) return { title: 'Guía no encontrada' };
  return {
    title: `${g.metaTitle} | Quick Car Unlock`,
    description: g.metaDescription,
    alternates: alternatesFor(Object.keys(enToEs).find(k => enToEs[k] === `/es/guias/${g.slug}`)!, 'es'),
    openGraph: { type: 'article', locale: 'es_US', title: g.metaTitle, description: g.metaDescription, url: `/es/guias/${g.slug}`, publishedTime: g.datePublished, modifiedTime: g.dateModified },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = guideBySlug[slug];
  if (!g) notFound();
  const url = `https://www.quickcarunlock.com/es/guias/${g.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'es',
    headline: g.title,
    description: g.metaDescription,
    datePublished: g.datePublished,
    dateModified: g.dateModified,
    mainEntityOfPage: url,
    author: { '@type': 'Organization', name: 'Quick Car Unlock' },
    publisher: { '@type': 'Organization', name: 'Quick Car Unlock', url: 'https://www.quickcarunlock.com' },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://www.quickcarunlock.com/es/guias' },
      { '@type': 'ListItem', position: 3, name: g.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen" lang="es">
      <Schema data={articleSchema} />
      <Schema data={faqSchema} />
      <Schema data={breadcrumbSchema} />

      <article className="pt-32 pb-16">
        <div className="container max-w-3xl">
          <nav aria-label="Ruta de navegación" className="text-sm text-[var(--slate-light)] mb-6">
            <Link href="/es" className="hover:text-white">Inicio</Link> / <Link href="/es/guias" className="hover:text-white">Guías</Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{g.title}</h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-4"><RichText text={g.summary} /></p>
          <p className="text-sm text-[var(--slate-light)] mb-10">Actualizado el {new Date(g.dateModified + 'T12:00:00').toLocaleDateString('es-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          {g.sections.map((s, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-3xl font-bold mb-4">{s.heading}</h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4"><RichText text={p} /></p>
              ))}
              {s.list && (s.ordered ? (
                <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)] text-lg leading-relaxed">
                  {s.list.map((li, k) => <li key={k}><RichText text={li} /></li>)}
                </ol>
              ) : (
                <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] text-lg leading-relaxed">
                  {s.list.map((li, k) => <li key={k}><RichText text={li} /></li>)}
                </ul>
              ))}
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {g.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="text-xl font-bold mb-2">{f.q}</h3>
                  <p className="text-[var(--text-secondary)] text-lg leading-relaxed m-0"><RichText text={f.a} /></p>
                </div>
              ))}
            </div>
          </section>

          <section className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl mb-10">
            <h2 className="text-2xl font-bold mb-3">¿Necesita ayuda ahora?</h2>
            <p className="text-[var(--text-secondary)] mb-5">Llame y el despachador le da un tiempo estimado y un precio antes de enviar a nadie.</p>
            <a href="tel:3478017119" className="btn btn-primary btn-pulse inline-flex items-center gap-3 py-3 px-6 text-lg">
              <Phone size={20} /> (347) 801-7119
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Relacionado</h2>
            <ul className="space-y-2">
              {g.related.map(r => (
                <li key={r.href}><Link href={r.href} className="text-blue-400 hover:text-blue-300">{r.label}</Link></li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <RelatedLinks current={`/es/guias/${g.slug}`} lang="es" />
    </div>
  );
}
