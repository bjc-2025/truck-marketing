// app/services/[slug]/page.tsx

import React from 'react'
import Image from 'next/image' 
import { Metadata, ResolvingMetadata, Viewport } from 'next' 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mail, Calendar } from "lucide-react"
import { serviceData, ServiceSlug, ServiceProcess } from '@/data/servicesData'
import { notFound } from 'next/navigation'

interface ServicePageProps {
  params: Promise<{
    slug: ServiceSlug
  }>
}

// Generate static params for all service pages
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }))
}

// Generate viewport configuration separately
export async function generateViewport({ params: _paramsProp }: ServicePageProps): Promise<Viewport> {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
}

// Generate metadata for the page with comprehensive SEO
export async function generateMetadata(
  { params: paramsProp }: ServicePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await paramsProp
  const slug = resolvedParams?.slug

  // Validate slug and get service data
  if (!slug || !serviceData[slug]) {
    return {
      title: 'Service Not Found | TruckMarketing',
      description: 'The requested service page does not exist.',
      robots: 'noindex, nofollow',
    }
  }

  const service = serviceData[slug]
  const canonicalUrl = `https://truckmarketing.com/services/${slug}`
  
  // Get parent metadata
  const previousImages = (await parent).openGraph?.images || []
  const previousKeywords = (await parent).keywords || []

  return {
    title: `${service.title} | TruckMarketing - Trucking Industry Marketing Experts`,
    description: `${service.subtitle}. ${service.description}`.substring(0, 160), // Keep under 160 chars
    keywords: [
      ...previousKeywords,
      service.title.toLowerCase(),
      'trucking marketing',
      'transport marketing',
      'logistics marketing',
      'trucking seo',
      'transport advertising',
      ...(Array.isArray((service as any).keywords) ? (service as any).keywords : []) // Add service-specific keywords if available
    ],
    authors: [{ name: 'TruckMarketing Team' }],
    creator: 'TruckMarketing',
    publisher: 'TruckMarketing',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | TruckMarketing`,
      description: service.subtitle,
      url: canonicalUrl,
      siteName: 'TruckMarketing',
      images: [
        {
          url: service.heroImageUrl || '/default-og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} - Professional Marketing Services for Trucking Companies`,
        },
        ...previousImages,
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | TruckMarketing`,
      description: service.subtitle,
      images: [service.heroImageUrl || '/default-og-image.jpg'],
      creator: '@truckmarketing', // Add your Twitter handle
    },
    // REMOVED: viewport property (this was causing the warnings)
    category: 'marketing',
  }
}

// Generate JSON-LD structured data
function generateStructuredData(service: any, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'TruckMarketing',
      url: 'https://truckmarketing.com',
      logo: 'https://truckmarketing.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+61491999011',
        contactType: 'customer service',
        areaServed: 'AU',
        availableLanguage: ['en']
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'Australia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Trucking Marketing Services',
      itemListElement: service.features.map((feature: string, _index: number) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature
        }
      }))
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    },
    url: `https://truckmarketing.com/services/${slug}`,
  }
}

// Service Page Component
export default async function ServicePage({ params: paramsProp }: ServicePageProps) {
  const resolvedParams = await paramsProp
  const slug = resolvedParams?.slug

  // Validate slug and get service data
  if (!slug || !serviceData[slug]) {
    notFound() // This will trigger the 404 page
  }

  const service = serviceData[slug]
  const structuredData = generateStructuredData(service, slug)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
            <div className="max-w-4xl">
              {/* Breadcrumb Schema */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-300">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2">/</span>
                  </li>
                  <li>
                    <span className="text-white" aria-current="page">
                      {service.title}
                    </span>
                  </li>
                </ol>
              </nav>
              
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-orange-500 text-white border-0 px-4 py-1">
                  Industry Specialized
                </Badge>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-2xl mb-8 text-gray-200">
                {service.subtitle}
              </p>
              <p className="text-lg mb-10 text-gray-300 max-w-2xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" 
                  asChild
                >
                  <Link 
                    href={`/contact?service=${slug}`}
                    aria-label={`Get a free strategy session for ${service.title}`}
                  >
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {service.heroImageUrl && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none z-0">
              <Image
                src={service.heroImageUrl}
                alt={`${service.title} - Professional marketing services for trucking companies`}
                fill
                className="object-cover opacity-50"
                priority
                quality={75}
                sizes="50vw"
              />
            </div>
          )}
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-6">
            <h2 id="benefits-heading" className="text-4xl font-bold text-center mb-16">
              Why {service.title} Matters for Your Trucking Business
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 
                    className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" 
                    aria-hidden="true" 
                  />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center bg-orange-500 text-white py-12 px-6 rounded-2xl max-w-3xl mx-auto">
              <p className="text-6xl font-bold mb-2">{service.stats.value}</p>
              <p className="text-xl">{service.stats.metric}</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20" aria-labelledby="process-heading">
          <div className="container mx-auto px-6">
            <h2 id="process-heading" className="text-4xl font-bold text-center mb-6">
              How Our {service.title} Process Works
            </h2>
            <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              We&apos;ve refined our process through years of working exclusively with trucking companies
            </p>
            
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {service.process.map((step: ServiceProcess, index: number) => (
                <li key={index} className="relative">
                  <Card>
                    <div 
                      className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg"
                      aria-label={`Step ${index + 1}`}
                    >
                      {index + 1}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{step.desc}</p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features Grid with Image */}
        <section className="py-20 bg-gray-50" aria-labelledby="features-heading">
          <div className="container mx-auto px-6">
            <h2 id="features-heading" className="text-4xl font-bold text-center mb-16">
              Everything Included in Our {service.title} Service
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <ul className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" 
                      aria-hidden="true"
                    ></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={service.featureImageUrl || '/images/trucking-service-features.jpg'}
                  alt={`${service.title} features for trucking companies`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Success Story Preview */}
        <section className="py-20" aria-labelledby="success-story-heading">
          <div className="container mx-auto px-6">
            <div className="bg-slate-900 text-white rounded-3xl p-12 max-w-5xl mx-auto">
              <h3 id="success-story-heading" className="text-3xl font-bold mb-8">
                Success Story
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <blockquote className="text-lg mb-6 text-gray-300">
                    <p>
                      &quot;TruckMarketing transformed our online presence. We went from invisible to ranking #1 for our key routes. Our phone hasn&apos;t stopped ringing with quality loads.&quot;
                    </p>
                  </blockquote>
                  <cite className="not-italic">
                    <p className="font-semibold">Mike Thompson</p>
                    <p className="text-gray-400">CEO, Thompson Transport LLC</p>
                  </cite>
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-slate-900"
                      asChild
                    >
                      <Link href="/case-studies/thompson-transport">
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">425%</p>
                    <p className="text-sm text-gray-400">Increase in Leads</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">$2.4M</p>
                    <p className="text-sm text-gray-400">New Revenue</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">87%</p>
                    <p className="text-sm text-gray-400">Less Empty Miles</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-orange-500">6mo</p>
                    <p className="text-sm text-gray-400">ROI Timeline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section with Schema */}
        <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-6">
            <h2 id="faq-heading" className="text-4xl font-bold text-center mb-16">
              Common Questions About {service.title}
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>
                      <h3>{faq.question}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: service.faqs.map((faq: any) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer
                  }
                }))
              })
            }}
          />
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-6 text-center">
            <h2 id="cta-heading" className="text-4xl font-bold mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our {service.title} services can help you attract more profitable loads and grow your trucking business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg" 
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                  Schedule Free Consultation
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg transition-colors" 
                asChild
              >
                <a href="mailto:hello@truckmarketing.com">
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Email us at </span>
                  hello@truckmarketing.com
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-white">
              Or call us directly at{' '}
              <a 
                href="tel:+61491999011" 
                className="font-bold text-white hover:underline"
                aria-label="Call us at 0491 999 011"
              >
                0491 999 011
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}