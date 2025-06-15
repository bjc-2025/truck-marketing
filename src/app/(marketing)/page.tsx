import { TruckingHero } from "@/components/sections/hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactCTA } from "@/components/sections/cta-section"
import { CarouselSection } from "@/components/sections/carousel-section";
import LogoCloud from "@/components/sections/logo-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Truck Marketing - Expert Marketing for Trucking & Logistics Companies',
  description: 'Drive more leads and grow your trucking business with specialized digital marketing. SEO, PPC, and lead generation tailored for transport companies across Australia.',
  keywords: 'truck marketing, logistics marketing, trucking SEO, transport marketing agency, haulage marketing, freight marketing, trucking PPC, logistics lead generation, trucking digital marketing, transport company marketing',
  openGraph: {
    title: 'Truck Marketing - Expert Marketing for Trucking & Logistics Companies',
    description: 'Drive more leads and grow your trucking business with specialized digital marketing. SEO, PPC, and lead generation tailored for transport companies across Australia.',
    url: 'https://truckmarketing.com.au',
    siteName: 'Truck Marketing',
    images: [
      {
        url: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1735969648/Truck_Marketing_brj8yq.png',
        width: 1200,
        height: 630,
        alt: 'Truck Marketing - Marketing Agency for Trucking Companies',
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Marketing - Expert Marketing for Trucking & Logistics',
    description: 'Specialized digital marketing for trucking & logistics companies. Get more qualified leads with our industry-focused SEO, PPC & lead generation services.',
    images: ['https://res.cloudinary.com/dvwug91mb/image/upload/v1735969648/Truck_Marketing_brj8yq.png'],
  },
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
    canonical: 'https://truckmarketing.com.au',
  },
  verification: {
    google: 'verification-token', // Add your Google verification token
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://truckmarketing.com.au',
    name: 'Truck Marketing',
    description: 'Expert marketing agency specializing in digital marketing for trucking and logistics companies across Australia.',
    url: 'https://truckmarketing.com.au',
    telephone: '+61491999011',
    email: 'autruckmarketing@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Stead Street',
      addressLocality: 'Wodonga',
      addressRegion: 'VIC',
      postalCode: '3690',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -36.1217,
      longitude: 146.8850,
    },
    image: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1735969648/Truck_Marketing_brj8yq.png',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/truckmarketing', // Update with actual social links
      'https://www.linkedin.com/company/truck-marketing',
      'https://twitter.com/truckmarketing'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Marketing Services for Trucking Companies',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trucking SEO',
            description: 'Search engine optimisation tailored for trucking and logistics companies',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'PPC for Haulage',
            description: 'Pay-per-click advertising campaigns for transport businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Generation',
            description: 'Qualified lead generation for logistics companies',
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* Hero Section */}
        <TruckingHero />
        <LogoCloud />
        
        {/* Services Overview */}
        <ServicesGrid  />


        <CarouselSection />
        
        {/* Social Proof & Testimonials */}
        <Testimonials  />
        
        {/* Contact CTA */}
        <ContactCTA />
      </main>
    </>
  );
}