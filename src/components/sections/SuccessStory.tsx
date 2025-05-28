// components/SuccessStory.tsx

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button" // Assuming this is your shadcn/ui button
import { ArrowRight } from "lucide-react"
import { getSuccessStory, getRandomSuccessStory, SuccessStoryData } from '@/data/successData'

interface SuccessStoryProps {
  storyId?: string
  className?: string
}

export default function SuccessStory({ storyId, className = "" }: SuccessStoryProps) {
  const story: SuccessStoryData | null = storyId 
    ? getSuccessStory(storyId) 
    : getRandomSuccessStory()

  const displayStory = story || getRandomSuccessStory() // Fallback to random if ID not found or story is null

  return (
    <section className={`py-20 ${className}`} aria-labelledby="success-story-heading">
      <div className="container mx-auto px-6">
        {/* Main card container */}
        <div 
          className="relative text-white rounded-3xl p-12 max-w-5xl mx-auto overflow-hidden bg-slate-800" // Fallback bg if no image
        >
          {/* Background Image (if provided) */}
          {displayStory.backgroundImageUrl && (
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${displayStory.backgroundImageUrl})` }}
              aria-hidden="true"
            />
          )}

          {/* Overlay for text readability */}
          <div 
            className="absolute inset-0 bg-black/60 rounded-3xl" // bg-black with 70% opacity
            aria-hidden="true" 
          />

          {/* Content - ensure it's above the overlay */}
          <div className="relative z-10"> {/* Added relative and z-10 to bring content on top */}
            <h3 id="success-story-heading" className="text-3xl font-bold mb-8">
              Success Story
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <blockquote className="text-lg mb-6 text-gray-200">
                  <p>
                    &quot;{displayStory.quote}&quot;
                  </p>
                </blockquote>
                <cite className="not-italic">
                  <p className="font-semibold">{displayStory.clientName}</p>
                  <p className="text-gray-300">{displayStory.clientTitle}, {displayStory.companyName}</p>
                </cite>
                {displayStory.caseStudyUrl && (
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      asChild
                    >
                      <Link href={displayStory.caseStudyUrl}>
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Grid container for the metrics */}
              <div className="grid grid-cols-2 gap-4 md:gap-6"> {/* Adjusted gap slightly, can be tweaked */}
                {displayStory.metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="
                      text-center 
                      p-4  {/* Padding inside each glass box */}
                      bg-white/10  
                      backdrop-blur-md 
                      rounded-xl 
                      border border-white/20
                      flex flex-col justify-center items-center {/* To center content vertically if needed */}
                    "
                  >
                    <p className="text-4xl font-bold text-orange-400">{metric.value}</p>
                    <p className="text-sm text-gray-300 mt-1">{metric.label}</p> {/* Added small margin-top */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}