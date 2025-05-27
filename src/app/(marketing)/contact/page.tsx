import { Metadata } from 'next'
import { ContactForm } from '@/components/forms'


const pageTitle = 'Contact Truck Marketing Experts | Get Your Free Consultation';
const pageDescription = "Reach out to Truck Marketing for expert advice on growing your transport or logistics business. Request a free consultation today to discuss your needs.";
const pageUrl = 'https://www.truckmarketing.com/contact';

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
  return (
    <div className="container mx-auto px-4 py-8">
      <ContactForm />
    </div>
  )
}