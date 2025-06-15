// src/app/about/page.tsx

import React from 'react'; // Import React
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"; // This import is assumed to work based on the prompt context
import { CheckCircle, MapPin, Zap, Target, DollarSign, Users, LucideIcon } from "lucide-react";
import { ContactCTA } from "@/components/sections/cta-section"; // Importing the Contact CTA component
import  TeamSection  from "@/components/sections/team-section"; // Assuming you have a team section component

// --- SEO & PAGE CONFIGURATION ---
// Centralized configuration for easy updates.
const pageConfig = {
  title: "About Us | Australian Truck & Logistics Marketing Agency",
  description: "Learn how our specialist marketing team in Albury Wodonga drives growth for transport companies across Australia. We offer road-tested strategies with measurable ROI.",
  url: "https://www.truckmarketing.com/about", // Replace with your production URL
  ogImage: "https://res.cloudinary.com/dvwug91mb/image/upload/v1748215193/Brandjam_ciohia.webp",
  companyName: "Truck Marketing",
  address: {
    street: "Level 1/553 Dean St",
    city: "Albury",
    state: "NSW",
    postalCode: "2640",
    country: "AU"
  }
};

// --- METADATA (Next.js specific - kept for context) ---
// Note: Metadata export is a Next.js feature and may not be directly usable in all React environments.
export const metadata = {
  title: pageConfig.title,
  description: pageConfig.description,
  keywords: ['truck marketing agency', 'transport logistics marketing', 'freight marketing Australia', 'heavy vehicle marketing', 'about truck marketing', 'Albury Wodonga marketing'],
  robots: { index: true, follow: true },
  alternates: { canonical: pageConfig.url },
  openGraph: {
    title: pageConfig.title,
    description: pageConfig.description,
    url: pageConfig.url,
    siteName: pageConfig.companyName,
    images: [{ url: pageConfig.ogImage, width: 1200, height: 630, alt: `The expert team at ${pageConfig.companyName}` }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageConfig.title,
    description: pageConfig.description,
    images: [pageConfig.ogImage],
  },
};

// --- JSON-LD STRUCTURED DATA (FOR ADVANCED SEO) ---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: pageConfig.companyName,
  url: pageConfig.url,
  logo: pageConfig.ogImage,
  description: pageConfig.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: pageConfig.address.street,
    addressLocality: pageConfig.address.city,
    addressRegion: pageConfig.address.state,
    postalCode: pageConfig.address.postalCode,
    addressCountry: pageConfig.address.country,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  contactPoint: {
      "@type": "ContactPoint",
      "telephone": "+61-XXXX-XXXX", // Add your phone number here
      "contactType": "customer service"
  },
  sameAs: []
};

// --- MOCK COMPONENTS (to resolve import errors) ---
// In a real Next.js app, these would be in separate files.
// For this self-contained example, they are defined here.



// --- REUSABLE VALUE CARD COMPONENT ---
interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ValueCard = ({ icon: Icon, title, description }: ValueCardProps) => (
  <div className="bg-slate-800/50 rounded-xl p-8 text-center border border-slate-700 hover:bg-slate-800 hover:border-truck-orange-500 transition-all duration-300">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-truck-orange-500 rounded-full mb-6">
      <Icon className="h-7 w-7 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);


// --- THE ABOUT PAGE COMPONENT ---
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-white">
        
        {/* HERO HEADER */}
        <header className="relative flex items-center justify-center text-center text-white overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dvwug91mb/image/upload/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg"
              alt="An Australian freight truck driving on a highway at sunset, representing transport logistics"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
          </div>
          <div className="relative z-10 container-wide">
            <Badge  className="mb-6 bg-white/10 border-white/20 hover:bg-white/20">
              Trucking & Logistics Marketing Specialists
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Small Team, <span className="text-truck-orange-400">Big Results.</span>
            </h1>
            <p className="mt-6 text-xl text-slate-200 max-w-3xl mx-auto">
              We&apos;re the dedicated marketing partner for Australia&apos;s transport industry, delivering road-tested strategies that move your business forward.
            </p>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main>
          <section className="py-20 md:py-24">
            <div className="container-wide grid lg:grid-cols-5 gap-x-12 gap-y-12 items-center">
              <div className="lg:col-span-3 prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <h2>Our Story: Born from the Transport Corridor</h2>
                <p>
                  Founded in Albury Wodonga, the heart of Australia’s transport corridor, Truck Marketing was built on a simple premise: the logistics industry deserves marketing that speaks its language and understands its unique DNA.
                </p>
                <p>
                  While other agencies offer generic solutions, we live and breathe transport. We know the difference between a prime mover and a rigid, we understand the regulatory pressures, and we respect the immense pride that comes with keeping Australia’s wheels turning.
                </p>
                <p>
                  From our home base, we&apos;ve criss-crossed the nation, partnering with transport companies of all sizes. No destination is too remote. When Australian transport businesses need real-world results, they call us.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-300">
                  <Image
                    src="https://res.cloudinary.com/dvwug91mb/image/upload/v1748215193/Brandjam_ciohia.webp"
                    alt="The Truck Marketing creative team collaborating on a project in their Albury office"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white py-20 md:py-24">
            <div className="container-wide">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight">Why The Toughest Companies Choose Us</h2>
                <p className="mt-4 text-lg text-slate-300">
                  Our approach is built on industry expertise, nationwide reach, and a relentless focus on your bottom line.
                </p>
              </div>
              <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ValueCard icon={CheckCircle} title="Trucking Is All We Do" description="We are industry specialists. This singular focus makes us exceptionally good at creating marketing that gets results for transport companies." />
                <ValueCard icon={MapPin} title="National Reach, Local Heart" description="Based in Albury Wodonga, we're ready to deploy anywhere in Australia. Your success is always worth the journey for our team." />
                <ValueCard icon={Zap} title="Agile & Results-Driven" description="As a lean team, we skip the bureaucracy and focus on one thing: delivering tangible results that drive your business forward." />
                <ValueCard icon={Target} title="Road-Tested Strategies" description="Our marketing playbooks are proven on the tarmac, not just in theory. We know what works because we've seen it succeed." />
                <ValueCard icon={DollarSign} title="Focused on Your ROI" description="Every marketing dollar you invest with us is engineered to deliver a powerful return. We measure our success by your growth." />
                <ValueCard icon={Users} title="A True Partnership" description="You get direct access to our core team. We build personalized strategies because you're our partner, not just a client number." />
              </div>
            </div>
          </section>

          <section className="py-20 md:py-24">
            <TeamSection />
          </section>
          
          <section>
            <ContactCTA />
          </section>

        </main>
      </div>
    </>
  );
}
