import type { MetadataRoute } from 'next'

const locales = ['az', 'en', 'ru']
const baseUrl = 'https://rafconsultingaz.com'

const staticPages = ['', '/services', '/about', '/contact', '/blog']

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: page === '' ? 1.0 : 0.8,
      })
    }
  }

  return entries
}
