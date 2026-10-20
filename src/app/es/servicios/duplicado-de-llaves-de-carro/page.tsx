import { Metadata } from 'next';
import { KeyRound } from 'lucide-react';
import ServiceTemplate, { ServiceEs } from '@/components/es/ServiceTemplate';
import { alternatesFor } from '@/lib/i18n';
import { business } from '@/lib/business';

const title = 'Llaves de Carro en NYC | Duplicado y Programación de Llaves';
const description =
  '¿Perdió la llave de su carro? Hacemos llaves con chip y fobs inteligentes en el lugar, en los cinco condados de Nueva York, sin remolcar el carro. Llame para un precio.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/services/key-replacement', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/servicios/duplicado-de-llaves-de-carro' },
};

const p = Object.fromEntries(business.startingPrices.map(x => [x.service, x.price]));

const s: ServiceEs = {
  path: '/es/servicios/duplicado-de-llaves-de-carro',
  name: 'Duplicado y programación de llaves de carro',
  badge: <><KeyRound size={16} /> Llaves hechas donde está su carro</>,
  h1: <>Llaves de Carro en NYC: <span className="text-orange-gradient">Duplicado y Programación</span></>,
  lead: [
    '¿Perdió la llave de su carro, se le rompió o necesita una copia? Quick Car Unlock va hasta donde está su vehículo para cortar y programar llaves con chip, llaves con control remoto y fobs inteligentes, según la marca, el modelo y el año.',
    'Si quedó fuera del carro además de no tener llave, vea la [apertura de carro de emergencia](/es/abrir-carro-nyc). Si la llave entra pero no gira, puede ser el [encendido](/es/servicios/reparacion-de-encendido).',
  ],
  whatTitle: 'Tipos de llave que reponemos',
  what: [
    '**Llaves de metal** de carros más viejos, sin chip.',
    '**Llaves con chip (transponder)**, que se comunican con el inmovilizador del carro.',
    '**Llaves con control remoto**, con los botones integrados en la cabeza de la llave.',
    '**Fobs inteligentes y llaves de proximidad** para carros de botón de encendido (push-to-start).',
    '**Copias de repuesto**: tener una segunda llave sale más barato que reponer la única después de perderla.',
  ].map(t => t.replace(/\*\*/g, '')),
  stepsTitle: 'Cómo funciona',
  steps: [
    { title: 'Usted llama', text: `Llame al ${business.phoneDisplay} y dé el año, la marca y el modelo de su carro, y qué tipo de llave tiene.` },
    { title: 'El despachador le da el tiempo estimado y el precio', text: 'Le decimos si la llave se puede hacer en el lugar para su vehículo, cuánto tardaría en llegar el técnico y cuánto costaría, antes de enviar a nadie.' },
    { title: 'El técnico confirma que el carro es suyo', text: 'Antes de hacer una llave nueva, el técnico le pide una identificación con foto y la registración o el seguro a su nombre.' },
    { title: 'Se corta, se programa y se prueba', text: 'Se corta la llave, se programa el chip o el fob con el carro y se prueba que abra, cierre y encienda el motor.' },
  ],
  readyTitle: 'Qué necesita tener listo',
  ready: [
    'Una identificación con foto.',
    'La registración o la tarjeta del seguro a su nombre.',
    'El año, la marca y el modelo del carro. El VIN ayuda: está en la registración y se ve a través del parabrisas, del lado del conductor.',
    'Si tiene alguna llave que todavía funcione, tráigala; copiar es más sencillo que crear una llave desde cero.',
  ],
  extraTitle: 'Móvil o agencia: cómo comparar',
  extra: [
    'Un servicio móvil va hasta su carro, así que no hay que remolcarlo. Para muchos vehículos la llave se hace en el lugar.',
    'La agencia (dealer) puede ser la mejor opción para algunos modelos, pero normalmente hay que llevar el carro y a veces esperar a que pidan la llave.',
    'Compare el costo total y el tiempo, no solo el precio de la llave. Pida el precio completo por teléfono antes de decidir.',
  ],
  prices: [
    { service: 'Llave nueva', price: p['Key replacement'] ?? '' },
    { service: 'Programación de fob', price: p['Fob programming'] ?? '' },
  ].filter(x => x.price),
  faqs: [
    {
      q: '¿Pueden hacer una llave si no tengo ninguna copia?',
      a: 'Para muchos vehículos, sí. Una llave se puede generar a partir del VIN o del código de la cerradura, después de confirmar que el carro es suyo. Depende de la marca, el modelo y el año; llame con sus datos para confirmarlo. Vea también [qué hacer si perdió su única llave](/es/guias/perdi-la-llave-del-carro).',
    },
    {
      q: '¿La llave nueva deja sin efecto la que perdí?',
      a: 'En muchos vehículos se puede borrar de la memoria del carro la llave perdida al programar la nueva, para que ya no arranque el motor. Pregunte al despachador si aplica a su carro.',
    },
    {
      q: '¿Cuánto tarda?',
      a: 'Depende del tipo de llave y del vehículo. El técnico le dice cuánto esperar antes de empezar, y el despachador le da el tiempo estimado de llegada en la llamada.',
    },
    {
      q: '¿Cuánto cuesta una llave nueva?',
      a: 'Las llaves nuevas empiezan desde ' + (p['Key replacement'] ?? '') + ' y la programación de fobs desde ' + (p['Fob programming'] ?? '') + '. El precio exacto depende del vehículo y del tipo de llave, y se le dice antes de empezar. Vea la [guía de precios](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).',
    },
    {
      q: '¿Qué hago si mi carro es de botón (push-to-start)?',
      a: 'Los fobs inteligentes muchas veces se pueden programar en el lugar, según la marca, el modelo y el año. Llame con los datos de su carro para recibir una respuesta clara.',
    },
  ],
  note: [
    '¿Dejó las llaves dentro del carro en vez de perderlas? Vea la guía de [llaves dentro del carro](/es/guias/deje-las-llaves-dentro-del-carro) o de [llaves dentro del baúl](/es/guias/llaves-dentro-del-baul).',
    'Calcule un precio aproximado con el [estimador de precios](/es/estimador-de-precios) o [pida una cotización](/es/cotizacion). Trabajamos en [Manhattan](/es/zonas/manhattan), [Brooklyn](/es/zonas/brooklyn), [Queens](/es/zonas/queens), [el Bronx](/es/zonas/bronx) y [Staten Island](/es/zonas/staten-island).',
  ],
};

export default function Page() {
  return <ServiceTemplate s={s} />;
}
