import { Metadata } from 'next'
import { ContactForm } from '@/components/forms'


const pageTitle = 'Contact Truck Marketing Experts | Get Your Free Consultation';
const pageDescription = "Get in touch with Truck Marketing for expert trucking & logistics marketing advice. Request your free consultation to discuss how we can grow your transport business.";
const pageUrl = 'https://www.truckmarketing.com.au/contact';

const ogImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748215193/Brandjam_ciohia.webp';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'contact truck marketing',
    'trucking marketing agency contact',
    'logistics marketing consultation',
    'transport business growth',
    'get in touch trucking experts',
    'free marketing consultation trucking',
    'trucking advertising help',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: 'Truck Marketing', // Or your actual site name
    images: [
      {
        url: ogImageUrl, // Use the defined Cloudinary URL
        width: 1200,
        height: 630,
        alt: 'Contact Truck Marketing Experts',
      },
    ],
    locale: 'en_AU', // Or your primary locale e.g. en_US
    type: 'profile', // 'profile' can be suitable for a contact page representing a company's contact point
                     // 'website' is also acceptable.
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    // site: '@YourTwitterHandle', // Your company's Twitter handle
    images: [ogImageUrl], // Must be an absolute URL
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
  }
};

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.truckmarketing.com.au/#business',
    name: 'Truck Marketing',
    description: 'Expert marketing agency specializing in digital marketing for trucking and logistics companies across Australia.',
    url: 'https://www.truckmarketing.com.au/contact',
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
      'https://www.facebook.com/truckmarketing',
      'https://www.linkedin.com/company/truck-marketing',
      'https://twitter.com/truckmarketing'
    ],
    areaServed: [
      {
        '@type': 'State',
        name: 'Victoria',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia'
        }
      },
      {
        '@type': 'State',
        name: 'New South Wales',
        containedInPlace: {
          '@type': 'Country',
          name: 'Australia'
        }
      },
      {
        '@type': 'Country',
        name: 'Australia'
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-truck-blue-900 mb-6">
              Contact Truck Marketing Experts Today
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to grow your trucking business? Contact our experts today for a personalized marketing strategy that delivers results.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}