// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getBlogSitemapEntries } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = "https://truckmarketing.com.au";

  // --- FIX APPLIED HERE ---
  // Instead of new Date(), we use a static, valid, recent date string.
  // This prevents issues if the build server's clock is incorrect.
  // You can update this date periodically when you make major site-wide changes.
  const staticPageLastModified = '2024-06-17'; 

  const staticPages: MetadataRoute.Sitemap = [
    { url: URL, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${URL}/about`, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/services`, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${URL}/case-studies`, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/blog`, lastModified: staticPageLastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${URL}/contact`, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${URL}/gallery`, lastModified: staticPageLastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${URL}/privacy`, lastModified: staticPageLastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${URL}/terms-of-service`, lastModified: staticPageLastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${URL}/cookie-policy`, lastModified: staticPageLastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    'trucking-seo', 'logistics-lead-generation', 'website-development',
    'ppc-for-haulage', 'analytics-reporting', 'content-capture',
    'social-media-management', 'email-marketing', 'digital-reputation-management'
  ].map(slug => ({
    url: `${URL}/services/${slug}`,
    lastModified: staticPageLastModified, // Using the safe, static date
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  const caseStudyPages: MetadataRoute.Sitemap = [
    'twincity-truck-centre', 'killen-trucking-co', 'dawsons-haulage',
    'Scholz-Bulk-Haulage', 'Kearney-Transport'
  ].map(slug => ({
    url: `${URL}/case-studies/${slug}`,
    lastModified: staticPageLastModified, // Using the safe, static date
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  
  // This part is already perfect and pulls real dates from your content. NO CHANGES NEEDED.
  const blogPostPages = getBlogSitemapEntries().map(entry => ({
    url: `${URL}${entry.url}`,
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  // Combine all pages into the final sitemap
  return [
    ...staticPages,
    ...servicePages,
    ...caseStudyPages,
    ...blogPostPages,
  ];
}