import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const URL = "https://www.truckmarketing.com.au";
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${URL}/sitemap.xml`,
  }
}