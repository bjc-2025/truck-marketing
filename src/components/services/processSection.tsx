// src/components/services/ProcessSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceProcess as ServiceProcessType } from '@/data/servicesData';

interface ProcessSectionProps {
  serviceTitle: string;
  process: ServiceProcessType[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ serviceTitle, process }) => {
  return (
    // Keep the section dark
    <section className="py-20 bg-gray-900 text-gray-100" aria-labelledby="process-heading">
      <div className="container mx-auto px-6">
        <h2 id="process-heading" className="text-4xl font-bold text-center mb-6">
          How Our {serviceTitle} Process Works
        </h2>
        {/* Description text color remains suitable for the dark background */}
        <p className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          We&apos;ve refined our process through years of working exclusively with trucking companies
        </p>

        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {process.map((step: ServiceProcessType, index: number) => (
            // Add 'group' class to the list item to enable group-hover effects on children
            <li key={index} className="relative flex flex-col group">
              {/* Card: White background, dark text initially. Orange background, white text on HOVER (of the card itself) */}
              <Card className="h-full flex flex-col bg-white text-gray-800 transition-colors duration-200 ease-in-out hover:bg-orange-500 hover:text-white">

                {/* Step number circle */}
                {/* Initial: Orange background, White text. */}
                {/* On GROUP HOVER: White background, Orange text */}
                <div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg
                             group-hover:bg-white group-hover:text-orange-500 transition-colors duration-200" // <-- Added group-hover:text-orange-500
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>

                {/* Card Header (content) - text color handled by Card's hover:text-white */}
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>

                {/* Card Content - text color handled by Card's hover:text-white */}
                <CardContent className="flex-grow">
                  <p>{step.desc}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;