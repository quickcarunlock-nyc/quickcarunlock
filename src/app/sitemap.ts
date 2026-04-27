import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.quickcarunlock.com'
  
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/locations',
    '/price-estimator',
    '/privacy',
    '/request-a-quote',
    '/services',
    '/services/emergency-lockout',
    '/services/ignition-repair',
    '/services/key-replacement',
    '/terms',
  ]
  
  const boroughs = [
    'manhattan',
    'brooklyn',
    'queens',
    'bronx',
    'staten-island',
  ]
  
  const staticEntries = staticRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  const boroughEntries = boroughs.map(borough => ({
    url: `${baseUrl}/locations/${borough}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticEntries, ...boroughEntries]
}
