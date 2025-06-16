// src/app/(marketing)/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata for each case study
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} Case Study | Truck Marketing Solutions`,
    description: study.overview,
    alternates: {
      canonical: `https://truckmarketing.com.au/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} Case Study`,
      description: study.overview,
      images: study.heroImage ? [study.heroImage] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/case-studies"
            className="inline-flex items-center text-gray-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero Section (Unchanged) */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        {study.heroImage && (
          <div className="absolute inset-0 opacity-30">
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {study.industry}
                </Badge>
                <Badge variant="secondary" className={`${study.status === 'Ongoing' ? 'bg-green-500/20 text-green-200 border-green-300/30' : 'bg-blue-500/20 text-blue-200 border-blue-300/30'}`}>
                  {study.status}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {study.title}
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {study.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {study.services.map((service) => (
                  <Badge key={service} variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">Project Overview</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Company:</span>
                    <span className="font-medium">{study.company}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Industry:</span>
                    <span className="font-medium">{study.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Status:</span>
                    <span className="font-medium">{study.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Services:</span>
                    <span className="font-medium">{study.services.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel (Unchanged) */}
      {study.imageCarousel.some(img => img) && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {study.imageCarousel.filter(img => img).map((image, index) => (
                <div key={index} className="relative flex-shrink-0 w-80 h-60 rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={`${study.company} - Image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- STYLES IMPROVED --- */}
      {/* Overview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base font-semibold text-blue-600 tracking-wider uppercase">The Foundation</p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight">
            Project Overview
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-8">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-4">
                <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Challenges We Addressed</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Understanding the obstacles was the first step toward creating impactful solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {study.challenges.map((challenge) => (
              <div key={challenge.id} className="relative p-8 bg-slate-50 rounded-xl border border-transparent hover:border-orange-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                        {challenge.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                        <p className="mt-2 text-gray-600">{challenge.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">Our Strategic Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              We executed a multi-faceted strategy to tackle each challenge head-on.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
             <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-slate-700 hidden lg:block" aria-hidden="true"></div>
            {study.approach.map((section, _index) => (
              <div key={section.id} className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-16">
                 <div className="lg:col-start-1">
                    <div className="lg:sticky top-24 lg:text-left lg:pl-16">
                        <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {section.id}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                        </div>
                        <p className="mt-4 text-slate-300">{section.description}</p>
                    </div>
                </div>
                <div className="mt-8 lg:mt-0 lg:col-start-2">
                    {section.bullets && (
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-slate-200">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-100 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Measurable Results</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              The tangible outcomes and improvements achieved through our strategic partnership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {study.results.map((result) => (
              <div key={result.id} className="bg-slate-50 rounded-2xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border-t-4 border-green-400">
                <div className="flex justify-center items-center mx-auto bg-green-500 text-white rounded-full w-16 h-16 -mt-16 ring-8 ring-slate-50">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{result.title}</h3>
                <p className="mt-2 text-base text-gray-600 flex-grow">{result.description}</p>
                {result.metrics && (
                  <div className="mt-6">
                    <p className="text-5xl font-extrabold text-green-600">
                      {result.metrics}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- END OF IMPROVED STYLES --- */}

      {/* Masonry Gallery (Unchanged) */}
      {study.masonryGallery.some(img => img) && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Project Gallery</h2>
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {study.masonryGallery.filter(img => img).map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <Image
                      src={image}
                      alt={`${study.company} Gallery - ${index + 1}`}
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* Related Case Studies (Unchanged) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Success Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies
              .filter(s => s.id !== study.id)
              .slice(0, 3)
              .map((relatedStudy) => (
                <Link 
                  key={relatedStudy.id} 
                  href={`/case-studies/${relatedStudy.slug}`}
                  className="group block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    {relatedStudy.heroImage ? (
                      <Image
                        src={relatedStudy.heroImage}
                        alt={relatedStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                        <span className="text-white font-semibold">{relatedStudy.company}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedStudy.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {relatedStudy.subtitle}
                    </p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                      View Case Study
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}