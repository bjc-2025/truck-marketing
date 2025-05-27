// Your original file, e.g., app/services/[slug]/page.tsx

import React from 'react'
import Image from 'next/image' 
import { Metadata, ResolvingMetadata } from 'next' 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { ArrowRight, CheckCircle2,  Mail, Calendar, } from "lucide-react"
import { serviceData, ServiceSlug, ServiceProcess } from '@/data/servicesData'; 

interface ServicePageProps {
  params: {
    slug: ServiceSlug
  }
}

// Generate metadata for the page
export async function generateMetadata(
  { params: paramsProp }: ServicePageProps,
  parent: ResolvingMetadata // Optional: To access parent metadata
): Promise<Metadata> {
  const resolvedParams = await paramsProp; // Await params
  const slugFromParams = resolvedParams?.slug;

  // Ensure slugFromParams is a valid ServiceSlug before using it as an index
  const slug: ServiceSlug = (slugFromParams && Object.prototype.hasOwnProperty.call(serviceData, slugFromParams))
    ? slugFromParams
    : 'trucking-seo'; // Default or handle notFound more explicitly

  const service = serviceData[slug];

  if (!service) {
    // Optionally use notFound() from next/navigation if the slug is invalid
    // notFound();
    return {
      title: "Service Not Found",
      description: "The requested service page does not exist.",
    };
  }

  // Optionally, resolve parent metadata if needed
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${service.title} | TruckMarketing`,
    // Use service title for page title
    description: service.subtitle, // Use subtitle or description for meta description
    openGraph: {
      title: `${service.title} | TruckMarketing`,
      url: `https://truckmarketing.com/services/${slug}`, // Construct the full URL
      siteName: 'TruckMarketing',
      description: service.subtitle,
      images: [
        {
          url: service.heroImageUrl, // Use the hero image for OG
          width: 1200, // Provide appropriate dimensions
          height: 630,
          alt: `${service.title} service hero image`,
        },
        // ...previousImages, // If you want to inherit parent OG images
      ],
      type: 'website', // or 'article' etc.
    },
  };
}


// Service Page Component
export default async function ServicePage({ params: paramsProp }: ServicePageProps) {
  const resolvedParams = await paramsProp; // Await params
  const slugFromParams = resolvedParams?.slug;

  // Ensure slugFromParams is a valid ServiceSlug before using it as an index
  const slug: ServiceSlug = (slugFromParams && Object.prototype.hasOwnProperty.call(serviceData, slugFromParams))
    ? slugFromParams
    : 'trucking-seo';

  const service = serviceData[slug];

  if (!service) {

    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <p className="text-gray-600">The service you are looking for does not exist or the URL is incorrect.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
  <div className="absolute inset-0 bg-black/20 z-0"></div>
  <div className="container mx-auto px-6 pt-40 pb-24 relative z-10">
    <div className="max-w-4xl">
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
        {/* Updated button with link */}
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg" asChild>
          <Link href={`/contact?service=${slug}`}>
            Get Your Free Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
  
  {service.heroImageUrl && (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none z-0">
      <Image
        src={service.heroImageUrl}
        alt={`${service.title} hero background`}
        fill
        className="object-cover opacity-50"
        priority
        quality={75}
      />
    </div>
  )}
</section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why {service.title} Matters for Your Trucking Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6">
            How Our {service.title} Process Works
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Weve refined our process through years of working exclusively with trucking companies
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {service.process.map((step: ServiceProcess, index: number) => ( // ServiceProcess type is now imported
              <Card key={index} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything Included in Our {service.title} Service
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center text-gray-500">
              {/* If you want to use next/image here too, replace this div */}
              [Truck/Service Feature Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-8">Success Story</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-300">
                 TruckMarketing transformed our online presence. We went from invisible to ranking #1 for our key routes. Our phone hasnt stopped ringing with quality loads.
                </p>
                <p className="font-semibold">Mike Thompson</p>
                <p className="text-gray-400">CEO, Thompson Transport LLC</p>
                <div className="mt-6">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Dynamic FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Common Questions About {service.title}
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {service.faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">Lets discuss how our {service.title} services can help you attract more profitable loads and grow your trucking business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Schedule consultation button */}
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            
            {/* Email button */}
            <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-orange-600 px-8 py-6 text-lg transition-colors" asChild>
              <a href="mailto:hello@truckmarketing.com">
                <Mail className="mr-2 h-5 w-5" />
                hello@truckmarketing.com
              </a>
            </Button>
          </div>
          
          {/* Phone link */}
          <p className="mt-8 text-white">
            Or call us directly at{' '}
            <a href="tel:0491999011" className="font-bold text-white hover:underline">
              0491 999 011
            </a>
          </p>
        </div>
      </section>

     
    </div>
  )
}