import { type MetadataRoute } from 'next'

import { loadArticles, loadCaseStudies } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let baseUrl = 'https://pineflux.com'

  let [articles, caseStudies] = await Promise.all([
    loadArticles(),
    loadCaseStudies(),
  ])

  let staticRoutes = ['', '/about', '/process', '/work', '/blog', '/contact']

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...caseStudies.map((caseStudy) => ({
      url: `${baseUrl}${caseStudy.href}`,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}${article.href}`,
      lastModified: article.date,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
