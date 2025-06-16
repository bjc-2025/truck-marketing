// app/services/[slug]/page.tsx
import React from 'react'
import Image from 'next/image'
import { Metadata, ResolvingMetadata, Viewport } from 'next'
// Assuming these are standard components or shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ArrowRight } from "lucide-react" // Only need specific icons used directly in this file
import { serviceData, ServiceSlug, ServiceFeature, ServiceInfo, ServiceFAQ } from '@/data/servicesData' // Import necessary types and data
import { notFound } from 'next/navigation'

// Import your section components
import SuccessStory from '@/components/sections/SuccessStory' // Example import
import { ContactCTA } from '@/components/sections/cta-section' // Example import
import KeyBenefits from '@/components/sections/key-benefits' // Assuming this component is used
import FeaturesGrid from '@/components/services/featuresGrid'; // Assuming this component is used and is a Client Component
import ProcessSectionComponent from '@/components/services/processSection'; // Assuming this component is used


// Type guard to validate slug
function isServiceSlug(slug: string): slug is ServiceSlug {
  return Object.keys(serviceData).includes(slug);
}

// Define props type for the page component (Server Component receives resolved params)
interface ServicePageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}


// Generate static params for all service pages
// This function enables Next.js to pre-render these pages at build time.
export async function generateStaticParams() {
  // Returns an array of objects, each object having a 'slug' property.
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }))
}

// Generate viewport configuration separately for better control
// This function is specifically for setting the <meta name="viewport"> tag.
export function generateViewport({ params: _paramsProp }: ServicePageProps): Viewport {
   // Access params if needed, but for a standard viewport, it's often static.
   // The underscore `_` indicates the parameter is intentionally unused.
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Prevents aggressive zooming out, allows zooming in
  }
}

// Generate metadata for the page with comprehensive SEO
// This function sets various <meta> and <link> tags in the document <head>.
export async function generateMetadata(
  { params }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  // Validate slug and get service data
  if (!isServiceSlug(slug)) {
    return {
      title: 'Service Not Found | TruckMarketing',
      description: 'The requested service page does not exist.',
      robots: 'noindex, nofollow', // Prevent indexing of invalid URLs
    }
  }
const service = serviceData[slug as ServiceSlug];
  const canonicalUrl = `https://www.truckmarketing.com.au/services/${slug}`; // Construct canonical URL

  // Get parent metadata (useful for inheriting default settings like site name, default OG images)
  const previousImages = (await parent).openGraph?.images || [];
  const previousKeywords = (await parent).keywords || [];

  return {
    // Standard Metadata
    title: `${service.title} | TruckMarketing - Trucking Industry Marketing Experts`,
    // Truncate description for best practice (around 150-160 characters)
    description: `${service.subtitle}. ${service.description}`.substring(0, 160),
    keywords: [
      ...previousKeywords, // Inherit keywords from parent layout/route
      service.title.toLowerCase(), // Add service title
      'trucking marketing',
      'transport marketing',
      'logistics marketing',
      'trucking seo', // Example general keywords
      'transport advertising',
      // Safely add service-specific keywords if you've added a 'keywords' property to ServiceInfo
      ...(Array.isArray((service as any).keywords) ? (service as any).keywords : [])
    ],
    authors: [{ name: 'TruckMarketing Team' }],
    creator: 'TruckMarketing',
    publisher: 'TruckMarketing',

    // Robots Meta Tag for Search Engine Crawling
    robots: {
      index: true, // Allow indexing
      follow: true, // Allow following links
      googleBot: { // Specific directives for Googlebot
        index: true,
        follow: true,
        'max-video-preview': -1, // Unlimited video preview time
        'max-image-preview': 'large', // Large image preview size
        'max-snippet': -1, // Unlimited text snippet length
      },
    },

    // Canonical Link
    alternates: {
      canonical: canonicalUrl,
    },

    // Open Graph Metadata (for social media sharing previews)
    openGraph: {
      title: `${service.title} | TruckMarketing`,
      description: service.subtitle, // Often subtitle is good for OG description
      url: canonicalUrl,
      siteName: 'TruckMarketing', // Your site name
      images: [
        {
          url: service.heroImageUrl || '/default-og-image.jpg', // Use service image or a fallback
          width: 1200, // Standard OG image width
          height: 630, // Standard OG image height
          alt: `${service.title} - Professional Marketing Services for Trucking Companies`,
        },
        ...previousImages, // Include default images from parent layout/route
      ],
      locale: 'en_US',
      type: 'website', // Type of content
    },

    // Twitter Card Metadata
    twitter: {
      card: 'summary_large_image', // Type of Twitter card
      title: `${service.title} | TruckMarketing`,
      description: service.subtitle,
      images: [service.heroImageUrl || '/default-og-image.jpg'], // Use same image as OG
      creator: '@your_twitter_handle', // Replace with your actual handle if you have one
    },

    // Additional optional metadata
    category: 'marketing', // e.g., 'Technology', 'Business', 'Marketing'
  }
}

// Generate JSON-LD structured data for richer search results
// This function creates schema.org markup to help search engines understand the content.
function generateStructuredData(service: ServiceInfo, slug: string) {
  // Schema for the Service itself
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service', // Or a more specific type like 'WebPage', 'Article', etc. if appropriate
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'TruckMarketing', // Your organization name
      url: 'https://truckmarketing.com', // Your website URL
      logo: 'https://truckmarketing.com/logo.png', // URL to your organization's logo
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+61491999011', // Your contact number
        contactType: 'customer service',
        areaServed: 'AU', // Geographic area served
        availableLanguage: ['en']
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia' // If services are country-wide
    },
    // Structure for listing features/offers within the service
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Features`, // Name for the list of features
      // Mapping features to schema.org Offer structure
      itemListElement: service.features.map((feature: ServiceFeature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service', // Or 'Product', 'Feature', etc. depending on context
          name: feature.title // Use the title of the feature as the item name
          // Could add description: feature.description if needed
        }
      }))
    },
    // Optional: Aggregate rating if you have customer reviews
    // This is static placeholder data - ideally, this should be dynamic if possible
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8', // Average rating
      reviewCount: '127' // Number of reviews
    },
    url: `https://truckmarketing.com/services/${slug}`, // URL of this specific service page
  };

  // Schema for the FAQ section on the page
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
  return { serviceSchema, faqSchema };
}


// Main Service Page Component (Server Component by default)
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  // Validate slug type and fetch service data
  if (!isServiceSlug(slug)) {
    notFound();
  }
  const service = serviceData[slug as ServiceSlug];

  // Generate the structured data objects
  const { serviceSchema, faqSchema } = generateStructuredData(service, slug);

  return (
    <>
      {/* Embed JSON-LD Structured Data in the head */}
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        key={`service-schema-${slug}`} // Add a unique key for each script tag
      />
       {/* FAQ Schema */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        key={`faq-schema-${slug}`} // Add a unique key
      />


      <main className="min-h-screen bg-white">
    {/* HERO SECTION - OPTION 2: MODERN SPLIT-SCREEN */}
<section className="bg-white text-slate-900">
  <div className="container mx-auto px-6 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Column 1: Text Content */}
      <div className="flex flex-col justify-center">
        {/* Visual Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-slate-800 transition-colors">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link href="/services" className="hover:text-slate-800 transition-colors">Services</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><span className="text-slate-700 font-medium" aria-current="page">{service.title}</span></li>
          </ol>
        </nav>

        {/* Badge */}
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-3 py-1 text-sm font-medium">
            Industry Specialised
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
          {service.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl mb-8 text-slate-600 max-w-xl">
          {service.subtitle}
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg transition-colors"
            asChild
          >
            <Link href={`/contact?service=${slug}`} aria-label={`Get a free strategy session for ${service.title}`}>
              Get Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Column 2: Image Content */}
      <div className="relative h-80 lg:h-full min-h-[400px] order-first lg:order-last">
        {service.heroImageUrl && (
          <Image
            src={service.heroImageUrl}
            alt={`${service.title} - modern marketing approach`}
            fill
            className="object-cover rounded-xl shadow-2xl" // Added rounded corners and a strong shadow
            priority
            quality={80}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>
    </div>
  </div>
</section>


        {/* Process Section - Using a component (likely Client or Server) */}
        <ProcessSectionComponent
          serviceTitle={service.title}
          process={service.process} // Pass array of objects { title: string, desc: string }
        />

        {/* Key Benefits Section - Using a component (likely Client or Server) */}
        <KeyBenefits
          title={`Why ${service.title} Matters for Your Trucking Business`}
          subtitle="Transform your trucking operations with marketing strategies built specifically for the transport industry."
          description="We understand the unique challenges facing trucking companies today - from driver recruitment to regulatory compliance, tight margins to fierce competition. Our specialized approach delivers results that matter to your bottom line."
          benefits={service.benefits} // Pass array of strings
          stats={service.stats} // Pass object { metric: string, value: string }
          imageUrl={service.featureImageUrl || '/images/trucking-benefits.jpg'} // Pass URL string
          imageAlt={`${service.title} benefits for trucking companies`}
          reverse={false} // Control layout direction
        />

        {/* Features Grid Section - Using a component (MUST BE CLIENT COMPONENT for icons) */}
        <FeaturesGrid
          serviceTitle={service.title}
          features={service.features} // Pass array of objects { icon: string, title: string, description: string }
          imageUrl={service.secondaryImageUrl} // Pass URL string
        />

        {/* Success Story Section - Using a component (likely Client or Server) */}
        {/* Assumes SuccessStory component fetches its own data based on id */}
        <SuccessStory storyId="Dawsons-Haulage" />

        {/* FAQ Section (content is static data, rendering uses UI components) */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-6">
            <h2 id="faq-heading" className="text-4xl font-bold text-center mb-16">
              Common Questions About {service.title}
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* Loop through FAQ data */}
              {service.faqs.map((faq: ServiceFAQ, index: number) => (
                <Card key={index}> {/* Use Card component */}
                  <CardHeader>
                    <CardTitle>
                      {/* FAQ Question */}
                      <h3 className="text-lg font-semibold">{faq.question}</h3> {/* Use h3 for semantic structure */}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* FAQ Answer */}
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
           {/* FAQ Schema is already included at the top with other schemas */}
        </section>

        {/* Contact CTA Section - Using a component (likely Client or Server) */}
        <ContactCTA />

      </main>
    </>
  )
}
