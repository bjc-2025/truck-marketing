import { MetadataRoute } from 'next'
import { getBlogSitemapEntries } from '@/lib/blog'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const URL = "https://truckmarketing.com.au";
  const blogEntries = getBlogSitemapEntries()
  
  // Service pages
  const servicePages = [
    'trucking-seo',
    'logistics-lead-generation',
    'website-development',
    'ppc-for-haulage',
    'analytics-reporting',
    'content-capture',
    'social-media-management',
    'email-marketing',
    'digital-reputation-management'
  ].map(slug => ({
    url: `${URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));
  
  // Case study pages
  const caseStudyPages = [
    'twincity-truck-centre',
    'killen-trucking-co',
    'dawsons-haulage',
    'Scholz-Bulk-Haulage',
    'Kearney-Transport'
  ].map(slug => ({
    url: `${URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
  
  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...servicePages,
    ...caseStudyPages,
    ...blogEntries.map(entry => ({
      url: `${URL}${entry.url}`,
      lastModified: entry.lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    }))
  ]
}