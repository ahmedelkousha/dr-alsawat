import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dralsawat.com';

  const analSurgeries = [
    'pilonidal-sinus',
    'anal-fissure',
    'anal-fistula',
    'hemorrhoids',
  ];

  const routes = [
    '',
    '/about',
    '/appointments',
    '/contact',
    '/colon-surgery',
    '/rectal-surgery',
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const dynamicPages = analSurgeries.map((slug) => ({
    url: `${baseUrl}/anal-surgery/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...dynamicPages];
}
