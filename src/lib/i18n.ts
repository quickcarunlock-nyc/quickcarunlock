/**
 * EN <-> ES route map. Every translated page must be listed here.
 * Used by: hreflang alternates, the language switcher, and the sitemap.
 */
export const SITE_URL = 'https://www.quickcarunlock.com';

export const enToEs: Record<string, string> = {
  '/': '/es',
  '/services': '/es/servicios',
  '/services/emergency-lockout': '/es/abrir-carro-nyc',
  '/services/key-replacement': '/es/servicios/duplicado-de-llaves-de-carro',
  '/services/ignition-repair': '/es/servicios/reparacion-de-encendido',
  '/locations': '/es/zonas',
  '/locations/manhattan': '/es/zonas/manhattan',
  '/locations/brooklyn': '/es/zonas/brooklyn',
  '/locations/queens': '/es/zonas/queens',
  '/locations/bronx': '/es/zonas/bronx',
  '/locations/staten-island': '/es/zonas/staten-island',
  '/guides': '/es/guias',
  '/guides/will-police-unlock-my-car': '/es/guias/la-policia-abre-carros-gratis',
  '/guides/how-much-does-it-cost-to-unlock-a-car-nyc': '/es/guias/cuanto-cuesta-abrir-un-carro-nyc',
  '/guides/locked-keys-in-car-what-to-do': '/es/guias/deje-las-llaves-dentro-del-carro',
  '/guides/keys-locked-in-trunk': '/es/guias/llaves-dentro-del-baul',
  '/guides/lost-car-key-no-spare': '/es/guias/perdi-la-llave-del-carro',
  '/price-estimator': '/es/estimador-de-precios',
  '/request-a-quote': '/es/cotizacion',
  '/about': '/es/nosotros',
  '/contact': '/es/contacto',
};

export const esToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToEs).map(([en, es]) => [es, en])
);

export function normalizePath(p: string): string {
  const clean = p.split('?')[0].split('#')[0];
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean;
}

export function isSpanishPath(pathname: string | null | undefined): boolean {
  const p = normalizePath(pathname || '/');
  return p === '/es' || p.startsWith('/es/');
}

/** Equivalent page in the other language, or null if the page is not translated. */
export function counterpartPath(pathname: string): string | null {
  const p = normalizePath(pathname);
  return isSpanishPath(p) ? esToEn[p] ?? null : enToEs[p] ?? null;
}

/** Next.js `alternates` (canonical + hreflang) for a page, given its ENGLISH path. */
export function alternatesFor(enPath: string, lang: 'en' | 'es') {
  const es = enToEs[enPath];
  const own = lang === 'es' ? es : enPath;
  return {
    canonical: own === '/' ? '/' : own,
    languages: {
      'en-US': enPath,
      'es-US': es,
      'x-default': enPath,
    },
  };
}

export const ui = {
  en: {
    nav: [
      ['/services', 'Services'],
      ['/locations', 'Locations'],
      ['/guides', 'Guides'],
      ['/request-a-quote', 'Request a Quote'],
      ['/about', 'About'],
      ['/contact', 'Contact'],
    ] as [string, string][],
    home: '/',
    switchLabel: 'Español',
    switchAria: 'Ver este sitio en español',
  },
  es: {
    nav: [
      ['/es/servicios', 'Servicios'],
      ['/es/zonas', 'Zonas'],
      ['/es/guias', 'Guías'],
      ['/es/cotizacion', 'Cotización'],
      ['/es/nosotros', 'Nosotros'],
      ['/es/contacto', 'Contacto'],
    ] as [string, string][],
    home: '/es',
    switchLabel: 'English',
    switchAria: 'View this site in English',
  },
};
