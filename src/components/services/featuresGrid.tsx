// src/components/services/featuresGrid.tsx
'use client'; // ESSENTIAL: Make this a Client Component

import React from 'react';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LucideIconMap } from '@/data/servicesData';
import type { LucideIcon as LucideIconType } from 'lucide-react'; 

// This is the type for the props *received* by this component
interface ClientFeature {
  icon: string; // Expecting a string name for the icon
  title: string;
  description: string;
}

interface FeaturesGridProps {
  serviceTitle: string;
  features: ClientFeature[]; // Expecting an array of ClientFeature
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaSubtext?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  serviceTitle,
  features,
  imageUrl,
  imageAlt,
}) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything Included in Our {serviceTitle} Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialised {serviceTitle.toLowerCase()} features designed specifically for trucking companies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Features Accordion */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              {serviceTitle} Features for Trucking Companies
            </h3>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {features.map((feature, index) => {
                // Look up the IconComponent from the LucideIconMap using the string name
                const IconComponent = LucideIconMap[feature.icon] as LucideIconType | undefined;

                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-6 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-2">
                      <div className="flex items-center gap-4">
                        {IconComponent ? (
                          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          // Fallback if icon is not found
                          <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0" title={`Icon not found: ${feature.icon}`}>
                            <span className="text-gray-600">?</span>
                          </div>
                        )}
                        <span className="text-lg font-semibold text-gray-900">{feature.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pt-2">
                      <div className="ml-14 text-gray-600 leading-relaxed">{feature.description}</div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>

          </div>
          <div className="lg:sticky lg:top-8">
              <div className="relative h-96 w-full rounded-lg shadow-lg mb-6 overflow-hidden">
                <Image
                  src={imageUrl || '/images/trucking-service-features.jpg'}
                  alt={imageAlt || `Professional trucking ${serviceTitle.toLowerCase()} showing fleet management and customer portal features`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            
            </div>
          </div>
        </div>

    </section>
  );
};

export default FeaturesGrid;

// The example usage at the bottom of your original file for FeaturesGrid.tsx
// is how you would use it *if it were a standalone client component or page where data is defined locally*.
// It's NOT how it gets data when used within the Server Component structure of /services/[slug]/page.tsx.
// In that context, it receives its props (with string icon names) from page.tsx.