export const dynamic = 'force-dynamic';
import { MetadataRoute } from 'next';
import { getPublishedBlogs } from '@/lib/blogService';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    '/blogs',
  ];

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-09-14'),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const surgeryPages = analSurgeries.map((slug) => ({
    url: `${baseUrl}/anal-surgery/${slug}`,
    lastModified: new Date('2026-09-14'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamically fetch all published blog posts from Firebase
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const publishedBlogs = await getPublishedBlogs();
    blogPages = publishedBlogs.map((post) => ({
      url: `${baseUrl}/blogs/${encodeURIComponent(post.slug)}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Failed to generate sitemap for dynamic blogs:', error);
  }

  return [...staticPages, ...surgeryPages, ...blogPages];
}
