import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import Schema from '@/components/Schema';
import { alternatesFor } from '@/lib/i18n';
import { business, trustLineEs } from '@/lib/business';
import { Hero, Section, Checklist, BoroughChips, SpanishSupportNote, CallButton } from '@/components/es/Blocks';

const title = 'Contacto: Cerrajero de Autos 24 Horas en NYC | Quick Car Unlock';
const description = 'Llame a Quick Car Unlock las 24 horas para abrir su carro, hacer una llave o reparar el encendido en los cinco condados de Nueva York. Pida un tiempo estimado.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/contact', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/contacto' },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://www.quickcarunlock.com/es/contacto' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Contacto' }]}
        title={<>¿Necesita Ayuda Ahora? <span className="text-orange-gradient">Llámenos</span></>}
        lead={[
          'Si se quedó fuera de su carro, perdió una llave o el encendido no gira, la forma más rápida de comunicarse es por teléfono. El despacho está abierto las 24 horas, los siete días.',
        ]}
      />
      <Section title="Cómo comunicarse">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
            <Phone size={32} className="text-[var(--action-orange)] mb-3" />
            <h3 className="text-xl font-bold mb-2">Despacho de emergencia</h3>
            <p className="text-[var(--text-secondary)] mb-3">Para servicio inmediato, llame por teléfono.</p>
            <CallButton />
            <SpanishSupportNote />
          </div>
          <div className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
            <Mail size={32} className="text-[var(--action-orange)] mb-3" />
            <h3 className="text-xl font-bold mb-2">Consultas generales</h3>
            <p className="text-[var(--text-secondary)] mb-3">Para preguntas que no son urgentes.</p>
            <a href="mailto:info@quickcarunlock.com" className="text-xl font-semibold hover:text-[#3B82F6]">info@quickcarunlock.com</a>
          </div>
          {business.whatsapp && (
            <div className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
              <MessageCircle size={32} className="text-[var(--action-orange)] mb-3" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-[var(--text-secondary)] mb-3">Escríbanos por WhatsApp.</p>
              <a href={`https://wa.me/${business.whatsapp}`} className="text-xl font-semibold hover:text-[#3B82F6]" rel="noopener noreferrer">Abrir WhatsApp</a>
            </div>
          )}
          <div className="card p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
            <MapPin size={32} className="text-[var(--action-orange)] mb-3" />
            <h3 className="text-xl font-bold mb-2">Dónde trabajamos</h3>
            <p className="text-[var(--text-secondary)] mb-3">Nuestras unidades móviles atienden los cinco condados.</p>
            <BoroughChips />
          </div>
        </div>
      </Section>
      <Section title="Antes de llamar" alt>
        <Checklist items={[
          'Su ubicación exacta: dirección o calle de esquina, y de qué lado de la calle está el carro.',
          'El año, la marca y el modelo del vehículo.',
          'Si la llave es de metal, con chip o de botón (push-to-start).',
          'Una identificación con foto y la registración o el seguro a su nombre.',
          'Si hay un niño, una persona o una mascota atrapados dentro, llame primero al 911.',
        ]} />
        {trustLineEs && <p className="mt-6 text-[var(--slate-light)]">{trustLineEs}.</p>}
        <p className="mt-4">¿No es urgente? <Link href="/es/cotizacion" className="text-blue-400 hover:text-blue-300">Pida una cotización en línea</Link>.</p>
      </Section>
      <ContextNote paragraphs={[
        '¿Quiere un precio antes de llamar? Use el [estimador de precios](/es/estimador-de-precios) o [pida una cotización](/es/cotizacion). Vea los [servicios](/es/servicios) o lea [qué hacer si se quedó fuera del carro](/es/guias/deje-las-llaves-dentro-del-carro).',
        'Atendemos [Manhattan](/es/zonas/manhattan), [Brooklyn](/es/zonas/brooklyn), [Queens](/es/zonas/queens), [el Bronx](/es/zonas/bronx) y [Staten Island](/es/zonas/staten-island). Conozca [quiénes somos](/es/nosotros).',
      ]} />
      <RelatedLinks current="/es/contacto" lang="es" />
    </div>
  );
}
