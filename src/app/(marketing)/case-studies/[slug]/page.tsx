// src/app/(marketing)/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';

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
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Image Carousel */}
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

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Project Overview</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed text-lg">
              {study.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Target className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges We Addressed</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every successful project starts with understanding the obstacles and pain points that need to be overcome.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {study.challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">{challenge.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we tackled each challenge with innovative solutions and proven methodologies.
            </p>
          </div>
          
          <div className="space-y-8">
            {study.approach.map((section, index) => (
              <div key={section.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">{section.id}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-700 mb-4">{section.description}</p>
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The tangible outcomes and improvements achieved through our strategic partnership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {study.results.map((result) => (
              <div key={result.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  {result.title}
                </h3>
                <p className="text-gray-600">{result.description}</p>
                {result.metrics && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">{result.metrics}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
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

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {study.callToAction.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {study.callToAction.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={study.callToAction.primaryButton.link}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg font-semibold">
                {study.callToAction.primaryButton.text}
                <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            
            {study.callToAction.secondaryButton && (
              <Link href={study.callToAction.secondaryButton.link}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                >
                  {study.callToAction.secondaryButton.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
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