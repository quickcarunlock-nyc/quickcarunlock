import { Metadata } from 'next';
import ContextNote from '@/components/ContextNote';
import RelatedLinks from '@/components/RelatedLinks';
import Schema from '@/components/Schema';
import { alternatesFor } from '@/lib/i18n';
import { business, trustLineEs } from '@/lib/business';
import { Hero, Section, Checklist, BoroughChips, FinalCta } from '@/components/es/Blocks';

const title = 'Quiénes Somos | Cerrajero Móvil de Autos en NYC | Quick Car Unlock';
const description = 'Quick Car Unlock es un servicio de cerrajería móvil para carros en Nueva York: aperturas, llaves y reparación de encendido, 24 horas, hasta donde está su vehículo.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/about', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/nosotros' },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.quickcarunlock.com/es' },
      { '@type': 'ListItem', position: 2, name: 'Nosotros', item: 'https://www.quickcarunlock.com/es/nosotros' },
    ],
  };
  return (
    <div className="min-h-screen" lang="es">
      <Schema data={breadcrumb} />
      <Hero
        crumbs={[{ label: 'Nosotros' }]}
        title={<>Para que Quedarse Fuera del Carro <span className="text-orange-gradient">no Arruine su Día</span></>}
        lead={[
          'Quick Car Unlock es un servicio de cerrajería móvil para carros en la ciudad de Nueva York. Nuestra meta es sencilla: que cuando se quede fuera de su carro, pierda una llave o no pueda encender, tenga a quién llamar, una respuesta clara y un técnico que vaya hasta usted.',
        ]}
      />
      <Section title="Cómo trabajamos">
        <Checklist items={[
          '**No tenemos un local donde atender:** los técnicos trabajan en unidades móviles y van hasta donde está su vehículo, las 24 horas.'.replace(/\*\*/g, ''),
          'Al llamar, el despachador le da un **tiempo estimado antes de enviar a nadie**.'.replace(/\*\*/g, ''),
          'Le decimos **el precio antes de empezar** y no trabajamos sin su aprobación.'.replace(/\*\*/g, ''),
          'Confirmamos que el carro es suyo antes de abrirlo o de hacer una llave nueva: pedimos identificación con foto y la registración o el seguro a su nombre.',
          'Priorizamos los métodos que no dañan el carro.',
          `${trustLineEs}.`,
        ]} />
      </Section>
      <Section title="Lo que hacemos" alt>
        <Checklist items={[
          'Abrimos carros cerrados: [apertura de carro de emergencia](/es/abrir-carro-nyc).',
          'Cortamos y programamos llaves: [llaves nuevas y programación de llaves](/es/servicios/duplicado-de-llaves-de-carro).',
          'Reparamos el encendido cuando la llave no gira: [reparación de encendido](/es/servicios/reparacion-de-encendido).',
        ]} />
      </Section>
      <Section title="Dónde trabajamos"><BoroughChips /></Section>
      <FinalCta title="Cuando nos necesite, llame" />
      <ContextNote paragraphs={[
        'Antes de llamar, puede leer [cuánto cuesta abrir un carro en NYC](/es/guias/cuanto-cuesta-abrir-un-carro-nyc) o [qué hacer si dejó las llaves dentro del carro](/es/guias/deje-las-llaves-dentro-del-carro). Vea todos los [servicios](/es/servicios) o las [zonas de servicio](/es/zonas).',
        `Para una cotización, use el [formulario](/es/cotizacion) o el [estimador de precios](/es/estimador-de-precios). Teléfono: ${business.phoneDisplay}. Más datos en [contacto](/es/contacto).`,
      ]} />
      <RelatedLinks current="/es/nosotros" lang="es" />
    </div>
  );
}
