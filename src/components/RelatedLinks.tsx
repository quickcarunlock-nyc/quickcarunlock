import Link from 'next/link';

type Props = {
  /** path of the page rendering this block, so it never links to itself */
  current?: string;
};

const services = [
  { href: '/services/emergency-lockout', label: 'Emergency car lockout service', note: 'Keys locked inside, in the trunk, or lost' },
  { href: '/services/key-replacement', label: 'Car key replacement and fob programming', note: 'Transponder keys and smart fobs made on-site' },
  { href: '/services/ignition-repair', label: 'Ignition cylinder repair', note: 'Key won’t turn or steering wheel locked' },
];

const areas = [
  { href: '/locations/manhattan', label: 'Car unlock service in Manhattan' },
  { href: '/locations/brooklyn', label: 'Car unlock service in Brooklyn' },
  { href: '/locations/queens', label: 'Car unlock service in Queens' },
  { href: '/locations/bronx', label: 'Car unlock service in the Bronx' },
  { href: '/locations/staten-island', label: 'Car unlock service in Staten Island' },
];

const guides = [
  { href: '/guides/will-police-unlock-my-car', label: 'Will the police or fire department unlock my car?' },
  { href: '/guides/how-much-does-it-cost-to-unlock-a-car-nyc', label: 'How much does it cost to unlock a car in NYC?' },
  { href: '/guides/locked-keys-in-car-what-to-do', label: 'Locked keys in your car: what to do right now' },
];

export default function RelatedLinks({ current }: Props) {
  const not = (h: string) => h !== current;
  return (
    <section className="py-16 bg-[#0B1120] border-t border-[var(--border-color)]" aria-label="Related pages">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Our services</h2>
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
            <h2 className="text-xl font-bold mb-4">Where we work</h2>
            <ul className="space-y-3">
              {areas.filter(a => not(a.href)).map(a => (
                <li key={a.href}>
                  <Link href={a.href} className="text-blue-400 hover:text-blue-300">{a.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Helpful guides</h2>
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
