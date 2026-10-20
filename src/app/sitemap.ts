import { MetadataRoute } from 'next'

const baseUrl = 'https://www.quickcarunlock.com'

// Real "last modified" dates. Update the date when a page's content materially changes.
// (Using new Date() on every build tells Google every page changed every time, which it learns to ignore.)
const pages: { path: string; lastModified: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '', lastModified: '2026-10-20', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', lastModified: '2026-10-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/emergency-lockout', lastModified: '2026-10-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/key-replacement', lastModified: '2026-10-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services/ignition-repair', lastModified: '2026-10-20', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/locations', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/manhattan', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/brooklyn', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/queens', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/bronx', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/staten-island', lastModified: '2026-10-20', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/guides/will-police-unlock-my-car', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guides/how-much-does-it-cost-to-unlock-a-car-nyc', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guides/locked-keys-in-car-what-to-do', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guides/keys-locked-in-trunk', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guides/lost-car-key-no-spare', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/es/abrir-carro-nyc', lastModified: '2026-10-20', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/price-estimator', lastModified: '2026-08-01', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/request-a-quote', lastModified: '2026-08-01', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', lastModified: '2026-10-20', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', lastModified: '2026-08-01', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy', lastModified: '2026-08-01', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', lastModified: '2026-08-01', priority: 0.2, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(p => ({
    url: `${baseUrl}${p.path}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
