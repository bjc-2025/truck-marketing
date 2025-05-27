// src/app/(marketing)/case-studies/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next'; // Make sure Metadata is imported
import { caseStudies } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { ContactCTA } from "@/components/sections/cta-section";

// --- SEO & METADATA ---
const pageTitle = 'Trucking Case Studies | Proven Marketing Success Stories';
const pageDescription = 'Explore real-world examples of how Truck Marketing drives growth for transport & logistics companies. See our client success stories and proven results.';
const pageUrl = 'https://www.truckmarketing.com/case-studies'; // Replace with your actual domain

// Choose a relevant, high-quality image for social sharing.
// This could be a collage of client logos, a graphic representing success,
// or an image from one of your top case studies.
// Ensure it's optimized (e.g., 1200x630) and hosted (e.g., on Cloudinary).
const ogImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1747977414/DSC_0220-Enhanced-NR-Edit_faeij0.jpg'; // <<<< REPLACE THIS

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'trucking case studies',
    'logistics marketing success',
    'transport company growth',
    'freight marketing results',
    'client success stories trucking',
    'digital marketing for transport',
    'truck marketing agency',
    'proven marketing strategies',
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
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'Truck Marketing Case Studies - Client Success',
      },
    ],
    locale: 'en_AU', // Or your primary locale e.g. en_US
    type: 'website', // Could also be 'object' or 'article' if more appropriate, but 'website' is fine for a listing page
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    // site: '@YourTwitterHandle', // Your company's Twitter handle
    // creator: '@YourTwitterHandle', // Or a specific author if relevant
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
  },
  // Optional: If you have structured data for the organization or website itself
  // you might add it here or in your root layout.
  // For a case studies page, you *could* consider ItemList schema if you want to go deep,
  // but it might be overkill for the overview page.
  // Focus on strong metadata for each individual case study page.
};

// --- PAGE COMPONENT ---
export default function CaseStudiesPage() {
  const featuredStudies = caseStudies.filter(study => study.featured);
  // const otherStudies = caseStudies.filter(study => !study.featured); // Not used, can remove if not needed for logic

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-padding gradient-hero">
        {/* ... rest of your hero section ... */}
        <div className="container-wide">

          <div className="relative text-center text-white">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Driving Success
              <span className="block text-accent mt-2">Across the Industry</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              From local haulers to nationwide logistics giants, discover how we've helped
              transport companies accelerate growth, strengthen their digital presence,
              and dominate their markets.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {/* ... your featured studies section ... */}
      {featuredStudies.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-accent">Featured Success</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Industry-Leading Transformations
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our most impactful partnerships showcasing exceptional growth and digital transformation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredStudies.map((study, index) => (
                <Link
                  key={study.id}
                  href={`/case-studies/${study.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-2xl card-elevation-lg overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="relative h-72 overflow-hidden">
                      {study.heroImage ? (
                        <Image
                          src={study.heroImage}
                          alt={study.title} // Good alt text
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full gradient-hero flex items-center justify-center">
                          <div className="text-center">
                            <div className="truck-nav-shape w-16 h-4 bg-white/30 mx-auto mb-4"></div>
                            <span className="text-white text-2xl font-bold">{study.company}</span>
                          </div>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          ⭐ Featured
                        </Badge>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        {/* Ensure your h3 is wrapped in a heading tag if it's a heading */}
                        <h3 className="text-2xl font-bold mb-3 leading-tight">{study.title}</h3>
                        <p className="text-gray-200 leading-relaxed line-clamp-2">{study.subtitle}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757l-.657-.657a2 2 0 00-2.828 0L5.1 6.515a2 2 0 000 2.828l4.9 4.9a2 2 0 002.828 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                            {study.industry}
                          </span>
                        </div>
                        <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                          {study.status}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.overview} {/* Ensure this is a concise, compelling overview */}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.services.slice(0, 3).map((service) => (
                          <Badge key={service} variant="secondary" className="bg-primary/5 text-primary border-primary/20">
                            {service}
                          </Badge>
                        ))}
                        {study.services.length > 3 && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                            +{study.services.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-accent font-semibold group-hover:text-accent/80 transition-colors">
                          <span>Read Full Case Study</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <div className="truck-nav-shape-simple w-8 h-2 bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies Grid */}
      {/* ... your "All Case Studies" section ... */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="">

            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Success Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every partnership tells a story of growth, innovation, and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-studies/${study.slug}`}
                className="group block"
              >
                <article className="bg-card rounded-xl card-elevation-md overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    {study.heroImage ? (
                      <Image
                        src={study.heroImage}
                        alt={study.title} // Good alt text
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <div className="text-center">
                          <div className="truck-nav-shape w-12 h-3 bg-white/30 mx-auto mb-2"></div>
                          <span className="text-white text-lg font-semibold">{study.company}</span>
                        </div>
                      </div>
                    )}
                    {study.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent text-accent-foreground text-xs font-semibold">
                          ⭐ Featured
                        </Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <div className="truck-nav-shape-simple w-8 h-1.5 bg-white/40"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {study.industry}
                      </span>
                      <Badge variant="outline" className="text-xs border-primary/20 text-primary bg-primary/5">
                        {study.status}
                      </Badge>
                    </div>

                    {/* Ensure your h3 is wrapped in a heading tag if it's a heading */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                      {study.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {study.services.slice(0, 2).map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs bg-secondary/80 text-secondary-foreground">
                          {service}
                        </Badge>
                      ))}
                      {study.services.length > 2 && (
                        <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                          +{study.services.length - 2}
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:text-primary/80 transition-colors">
                        <span>View Case Study</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform"></div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}