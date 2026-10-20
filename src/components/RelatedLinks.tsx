import Link from 'next/link';

type Props = {
  /** path of the page rendering this block, so it never links to itself */
  current?: string;
  lang?: 'en' | 'es';
};

const servicesEn = [
  { href: '/services/emergency-lockout', label: 'Emergency car lockout service', note: 'Keys locked inside, in the trunk, or lost' },
  { href: '/services/key-replacement', label: 'Car key replacement and fob programming', note: 'Transponder keys and smart fobs made on-site' },
  { href: '/services/ignition-repair', label: 'Ignition cylinder repair', note: 'Key won’t turn or steering wheel locked' },
];

const areasEn = [
  { href: '/locations/manhattan', label: 'Car unlock service in Manhattan' },
  { href: '/locations/brooklyn', label: 'Car unlock service in Brooklyn' },
  { href: '/locations/queens', label: 'Car unlock service in Queens' },
  { href: '/locations/bronx', label: 'Car unlock service in the Bronx' },
  { href: '/locations/staten-island', label: 'Car unlock service in Staten Island' },
];

const guidesEn = [
  { href: '/guides/will-police-unlock-my-car', label: 'Will the police or fire department unlock my car?' },
  { href: '/guides/how-much-does-it-cost-to-unlock-a-car-nyc', label: 'How much does it cost to unlock a car in NYC?' },
  { href: '/guides/locked-keys-in-car-what-to-do', label: 'Locked keys in your car: what to do right now' },
];

const servicesEs = [
  { href: '/es/abrir-carro-nyc', label: 'Apertura de carro de emergencia', note: 'Llaves dentro del carro, dentro del baúl o perdidas' },
  { href: '/es/servicios/duplicado-de-llaves-de-carro', label: 'Llaves nuevas y programación de llaves', note: 'Llaves con chip y fobs inteligentes hechos en el lugar' },
  { href: '/es/servicios/reparacion-de-encendido', label: 'Reparación de encendido', note: 'La llave no gira o el volante está bloqueado' },
];

const areasEs = [
  { href: '/es/zonas/manhattan', label: 'Apertura de carros en Manhattan' },
  { href: '/es/zonas/brooklyn', label: 'Apertura de carros en Brooklyn' },
  { href: '/es/zonas/queens', label: 'Apertura de carros en Queens' },
  { href: '/es/zonas/bronx', label: 'Apertura de carros en el Bronx' },
  { href: '/es/zonas/staten-island', label: 'Apertura de carros en Staten Island' },
];

const guidesEs = [
  { href: '/es/guias/la-policia-abre-carros-gratis', label: '¿La policía o los bomberos abren mi carro?' },
  { href: '/es/guias/cuanto-cuesta-abrir-un-carro-nyc', label: '¿Cuánto cuesta abrir un carro en NYC?' },
  { href: '/es/guias/deje-las-llaves-dentro-del-carro', label: 'Dejé las llaves dentro del carro: qué hacer ahora mismo' },
];

export default function RelatedLinks({ current, lang = 'en' }: Props) {
  const not = (h: string) => h !== current;
  const es = lang === 'es';
  const services = es ? servicesEs : servicesEn;
  const areas = es ? areasEs : areasEn;
  const guides = es ? guidesEs : guidesEn;
  const T = es
    ? { aria: 'Páginas relacionadas', s: 'Nuestros servicios', a: 'Dónde trabajamos', g: 'Guías útiles' }
    : { aria: 'Related pages', s: 'Our services', a: 'Where we work', g: 'Helpful guides' };
  return (
    <section className="py-16 bg-[#0B1120] border-t border-[var(--border-color)]" aria-label={T.aria}>
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">{T.s}</h2>
            <ul className="space-y-3">
              {services.filter(s => not(s.href)).map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-blue-400 hover:text-blue-300 font-semibold">{s.label}</Link>
                  <p className="text-sm text-[var(--slate-light)] m-0">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{T.a}</h2>
            <ul className="space-y-3">
              {areas.filter(a => not(a.href)).map(a => (
                <li key={a.href}>
                  <Link href={a.href} className="text-blue-400 hover:text-blue-300">{a.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{T.g}</h2>
            <ul className="space-y-3">
              {guides.filter(g => not(g.href)).map(g => (
                <li key={g.href}>
                  <Link href={g.href} className="text-blue-400 hover:text-blue-300">{g.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
