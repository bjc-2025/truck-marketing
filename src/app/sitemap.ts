// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getBlogSitemapEntries } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = "https://www.truckmarketing.com.au";

  // These are your static pages that rarely change.
  // Using new Date() is acceptable, but a fixed date can also be used.
  const staticPages: MetadataRoute.Sitemap = [
    { url: URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${URL}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${URL}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Dynamically generate URLs for all your service pages
  const servicePages: MetadataRoute.Sitemap = [
    'trucking-seo', 'logistics-lead-generation', 'website-development',
    'ppc-for-haulage', 'analytics-reporting', 'content-capture',
    'social-media-management', 'email-marketing', 'digital-reputation-management'
  ].map(slug => ({
    url: `${URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  // Dynamically generate URLs for all your case study pages
  const caseStudyPages: MetadataRoute.Sitemap = [
    'twincity-truck-centre', 'killen-trucking-co', 'dawsons-haulage',
    'Scholz-Bulk-Haulage', 'Kearney-Transport'
  ].map(slug => ({
    url: `${URL}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // Get the blog post entries. The `getBlogSitemapEntries` function now
  // returns the data in the perfect format, including a valid Date object.
  const blogPostPages = getBlogSitemapEntries().map(entry => ({
    url: `${URL}${entry.url}`,
    lastModified: entry.lastModified, // This is now a valid Date object.
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  // Combine all pages into a single sitemap array
  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...blogPostPages,
  ];
}