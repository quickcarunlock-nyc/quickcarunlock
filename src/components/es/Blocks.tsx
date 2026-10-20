import Link from 'next/link';
import { Phone, CheckCircle2, HelpCircle, MapPin, ArrowRight } from 'lucide-react';
import RichText from '@/components/RichText';
import { business } from '@/lib/business';

export const tel = `tel:${business.phoneTel}`;

export function Crumbs({ trail }: { trail: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Ruta de navegación" className="text-sm text-[var(--slate-light)] mb-6">
      <Link href="/es" className="hover:text-white">Inicio</Link>
      {trail.map((t, i) => (
        <span key={i}> / {t.href ? <Link href={t.href} className="hover:text-white">{t.label}</Link> : t.label}</span>
      ))}
    </nav>
  );
}

export function CallButton({ label = 'Llamar al', className = '' }: { label?: string; className?: string }) {
  return (
    <a href={tel} className={`btn btn-primary btn-pulse inline-flex items-center gap-3 py-4 px-8 text-xl ${className}`}>
      <Phone size={22} /> {label} {business.phoneDisplay}
    </a>
  );
}

/** Honest language promise: only claims Spanish phone service once the client has confirmed it. */
export function SpanishSupportNote() {
  return (
    <p className="text-sm text-[var(--slate-light)] mt-4 m-0">
      {business.spanishSupport
        ? 'Atendemos en español. Llame y pida atención en español.'
        : 'Si prefiere hablar en español, dígalo al llamar y el despachador le confirmará si hay alguien disponible en ese momento.'}
    </p>
  );
}

export function Hero({ crumbs, badge, title, lead, children }: {
  crumbs?: { href?: string; label: string }[];
  badge?: React.ReactNode;
  title: React.ReactNode;
  lead: string[];
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-32 pb-14 border-b border-[var(--border-color)]">
      <div className="container max-w-4xl text-center">
        {crumbs && <Crumbs trail={crumbs} />}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-[var(--safety-green)] px-5 py-2 rounded-full text-sm font-semibold mb-6">{badge}</div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
        {lead.map((p, i) => (
          <p key={i} className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4"><RichText text={p} /></p>
        ))}
        <div className="mt-6">{children ?? <CallButton />}</div>
        <SpanishSupportNote />
      </div>
    </section>
  );
}

export function Section({ title, children, alt = false }: { title?: string; children: React.ReactNode; alt?: boolean }) {
  return (
    <section className={`py-14 ${alt ? 'bg-[var(--bg-secondary)] border-y border-[var(--border-color)]' : ''}`}>
      <div className="container max-w-4xl">
        {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 list-none p-0 text-lg text-[var(--text-secondary)] leading-relaxed">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3"><CheckCircle2 size={22} className="text-[var(--safety-green)] shrink-0 mt-1" /> <span><RichText text={t} /></span></li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="space-y-5 list-none p-0">
      {items.map((s, i) => (
        <li key={i} className="flex gap-5">
          <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--action-orange)] text-[#0F172A] font-bold flex items-center justify-center">{i + 1}</span>
          <div>
            <h3 className="text-xl font-bold mb-1">{s.title}</h3>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed m-0"><RichText text={s.text} /></p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items, title = 'Preguntas frecuentes' }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <Section title={title}>
      <div className="space-y-6">
        {items.map((f, i) => (
          <div key={i} className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
            <h3 className="text-xl font-bold mb-3 flex items-start gap-3"><HelpCircle size={22} className="text-[var(--action-orange)] shrink-0 mt-1" /> <span>{f.q}</span></h3>
            <p className="text-[var(--slate-light)] text-lg leading-relaxed m-0 ml-9"><RichText text={f.a} /></p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function PriceList({ prices }: { prices: { service: string; price: string }[] }) {
  return (
    <div className="card p-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
      <div className="space-y-4">
        {prices.map((p, i) => (
          <div key={i} className="flex justify-between items-center pb-3 border-b border-[var(--border-color)] last:border-0">
            <span className="text-lg text-[var(--text-secondary)]">{p.service}</span>
            <span className="text-2xl font-bold text-[var(--action-orange)]">{p.price}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-[var(--slate-light)] mt-6 mb-0 italic">
        Precios estimados de partida. El precio exacto depende del vehículo y de la ubicación, y se le dice antes de empezar cualquier trabajo.
      </p>
    </div>
  );
}

export const boroughLinks = [
  ['/es/zonas/manhattan', 'Manhattan'],
  ['/es/zonas/brooklyn', 'Brooklyn'],
  ['/es/zonas/queens', 'Queens'],
  ['/es/zonas/bronx', 'El Bronx'],
  ['/es/zonas/staten-island', 'Staten Island'],
] as const;

export function BoroughChips() {
  return (
    <div className="flex flex-wrap gap-3">
      {boroughLinks.map(([href, label]) => (
        <Link key={href} href={href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10">
          <MapPin size={16} className="text-[var(--action-orange)]" /> {label}
        </Link>
      ))}
    </div>
  );
}

export function FinalCta({ title = '¿Necesita ayuda ahora?', text = 'Llame y el despachador le da un tiempo estimado y un precio antes de enviar a nadie.' }: { title?: string; text?: string }) {
  return (
    <section className="py-16 bg-gradient-to-br from-[var(--action-orange)] to-orange-600 text-[#0F172A] text-center">
      <div className="container max-w-3xl">
        <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">{title}</h2>
        <p className="mb-8 text-xl font-medium opacity-90">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={tel} className="btn btn-pulse bg-[#0F172A] text-white hover:bg-black text-2xl py-4 px-10 inline-flex items-center justify-center gap-3 rounded-full font-bold">
            <Phone size={26} /> {business.phoneDisplay}
          </a>
          <Link href="/es/cotizacion" className="btn bg-transparent border-4 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white text-xl py-4 px-10 inline-flex items-center justify-center rounded-full font-bold">
            Pedir una cotización <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
