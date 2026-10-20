import { Metadata } from 'next';
import { Wrench } from 'lucide-react';
import ServiceTemplate, { ServiceEs } from '@/components/es/ServiceTemplate';
import { alternatesFor } from '@/lib/i18n';
import { business } from '@/lib/business';

const title = 'Reparación de Encendido de Carro en NYC | Llave que No Gira';
const description =
  '¿La llave no gira, está atorada o se rompió en el encendido? Reparación de cilindro de encendido en el lugar, en los cinco condados de Nueva York. Llame para un precio antes de empezar.';

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesFor('/services/ignition-repair', 'es'),
  openGraph: { locale: 'es_US', title, description, url: '/es/servicios/reparacion-de-encendido' },
};

const p = Object.fromEntries(business.startingPrices.map(x => [x.service, x.price]));

const s: ServiceEs = {
  path: '/es/servicios/reparacion-de-encendido',
  name: 'Reparación de encendido',
  badge: <><Wrench size={16} /> Diagnóstico donde está estacionado</>,
  h1: <>Reparación de Encendido de Carro: <span className="text-orange-gradient">la Llave No Gira</span></>,
  lead: [
    '¿La llave no gira, se quedó atorada en el encendido o se rompió adentro? ¿El volante está bloqueado? Quick Car Unlock va hasta su carro para diagnosticar el problema y, cuando es posible, repararlo en el lugar.',
    'Si además no puede entrar al carro, empiece por la [apertura de emergencia](/es/abrir-carro-nyc). Si la llave está desgastada o perdida, vea [llaves nuevas](/es/servicios/duplicado-de-llaves-de-carro).',
  ],
  whatTitle: 'Problemas de encendido que atendemos',
  what: [
    'La llave no gira: puede ser una llave desgastada, un cilindro dañado o el mecanismo del volante bloqueado.',
    'La llave está atorada en el encendido y no sale.',
    'La llave se rompió dentro del encendido: se pueden extraer los pedazos y revisar el cilindro.',
    'El volante está bloqueado y la llave no se mueve.',
    'El motor da vueltas pero no arranca: el problema puede estar en el encendido, en la batería o en el motor de arranque, y hay que diagnosticarlo.',
  ],
  stepsTitle: 'Cómo funciona',
  steps: [
    { title: 'Usted llama', text: `Llame al ${business.phoneDisplay} y describa qué pasa con la llave y con el encendido.` },
    { title: 'Diagnóstico en el lugar', text: 'El técnico revisa la llave, el cilindro y el mecanismo del volante para ver si es un problema del cilindro, de la llave o eléctrico.' },
    { title: 'Precio antes de reparar', text: 'Le explicamos qué hay que hacer y cuánto cuesta antes de empezar. Usted decide si sigue adelante.' },
    { title: 'Reparación y prueba', text: 'Se repara o se reemplaza lo que haga falta y se prueba que la llave gire, que el volante se libere y que el carro arranque.' },
  ],
  readyTitle: 'Qué tener listo cuando llame',
  ready: [
    'El año, la marca y el modelo de su carro.',
    'Qué está pasando exactamente: la llave no entra, no gira, se rompió o el volante está bloqueado.',
    'Una identificación con foto y la registración o el seguro a su nombre.',
    'Si se rompió la llave, guarde los pedazos.',
  ],
  extraTitle: 'Antes de llamar, pruebe esto (sin forzar)',
  extra: [
    'Si el volante está bloqueado, gírelo con suavidad hacia un lado y hacia el otro mientras mueve la llave despacio. No use fuerza: puede romper la llave.',
    'Revise que el carro esté en estacionamiento (P) o, si es de cambios manuales, en neutral.',
    'No eche lubricantes ni aceite en el cilindro sin consultar; pueden empeorar el problema.',
  ],
  prices: [
    { service: 'Reparación de encendido', price: p['Ignition repair'] ?? '' },
  ].filter(x => x.price),
  faqs: [
    {
      q: 'La llave gira pero el carro no arranca. ¿Es el encendido?',
      a: 'No necesariamente. Si la llave gira pero el motor no da vueltas, puede ser el interruptor eléctrico del encendido, la batería o el motor de arranque. Un diagnóstico en el lugar ayuda a confirmar si es el cilindro o una falla eléctrica.',
    },
    {
      q: 'Si cambian el encendido, ¿voy a necesitar dos llaves distintas?',
      a: 'Lo ideal es que no. Según el vehículo, el cilindro nuevo se puede ajustar para que funcione con la misma llave de las puertas. El técnico le explica las opciones antes de empezar.',
    },
    {
      q: '¿Por qué mi volante está bloqueado y la llave no se mueve?',
      a: 'Suele ser un bloqueo mecánico. Pruebe girar el volante con suavidad hacia ambos lados mientras mueve la llave despacio. Si no funciona, el pasador de bloqueo puede estar atorado y hace falta que un técnico lo revise.',
    },
    {
      q: '¿Cuánto cuesta reparar el encendido?',
      a: 'La reparación de encendido empieza desde ' + (p['Ignition repair'] ?? '') + '. El precio exacto depende del vehículo y de lo que haya que hacer, y se le dice antes de empezar. Vea la [guía de precios](/es/guias/cuanto-cuesta-abrir-un-carro-nyc).',
    },
  ],
  note: [
    '¿Perdió la llave o necesita una copia? Vea las [llaves nuevas y la programación de llaves](/es/servicios/duplicado-de-llaves-de-carro) y la guía de [llave perdida](/es/guias/perdi-la-llave-del-carro).',
    'Calcule un precio aproximado con el [estimador de precios](/es/estimador-de-precios) o [pida una cotización](/es/cotizacion). Atendemos [Manhattan](/es/zonas/manhattan), [Brooklyn](/es/zonas/brooklyn), [Queens](/es/zonas/queens), [el Bronx](/es/zonas/bronx) y [Staten Island](/es/zonas/staten-island).',
  ],
};

export default function Page() {
  return <ServiceTemplate s={s} />;
}
