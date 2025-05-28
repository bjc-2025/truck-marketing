// src/app/(marketing)/case-studies/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { ContactCTA } from "@/components/sections/cta-section";

// --- SEO & METADATA ---
const pageTitle = 'Trucking Case Studies | Proven Marketing Success Stories';
const pageDescription = 'Explore real-world examples of how Truck Marketing drives growth for transport & logistics companies. See our client success stories and proven results.';
const pageUrl = 'https://www.truckmarketing.com.au/case-studies'; // Replace with your actual domain
const ogImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1747977414/DSC_0220-Enhanced-NR-Edit_faeij0.jpg';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
  alternates: {
    canonical: pageUrl,
  },
};

// --- HERO BACKGROUND IMAGE URL ---
const heroBackgroundImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1747978820/Centourion1_wm5soo.webp'; // <<<< EXAMPLE - REPLACE THIS!

// --- PAGE COMPONENT ---
export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative section-padding overflow-hidden" // Removed gradient-hero, added overflow-hidden
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackgroundImageUrl})` }}
          aria-hidden="true"
        />

        {/* Black Overlay */}
        <div 
          className="absolute inset-0 bg-black/70" // Adjust opacity (e.g., bg-black/60, bg-black/75) as needed
          aria-hidden="true"
        />

        {/* Content Container - ensure it's above the overlay */}
        <div className="container-wide relative z-10"> {/* Added relative z-10 */}
          <div className="relative text-center text-white py-16 md:py-24"> {/* Added some vertical padding here */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Client Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Driving Success
              <span className="block text-accent mt-2">Across the Industry</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
              From local haulers to nationwide logistics giants, discover how we&quot;ve helped
              transport companies accelerate growth, strengthen their digital presence,
              and dominate their markets.
            </p>
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
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