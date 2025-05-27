// components/SuccessStory.tsx

import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getSuccessStory, getRandomSuccessStory, SuccessStoryData } from '@/data/successData'

interface SuccessStoryProps {
  storyId?: string // Optional - if not provided, will show a random story
  className?: string
}

export default function SuccessStory({ storyId, className = "" }: SuccessStoryProps) {
  // Get the story data - either by ID or random
  const story: SuccessStoryData | null = storyId 
    ? getSuccessStory(storyId) 
    : getRandomSuccessStory()

  // If no story found and storyId was provided, fall back to random
  const displayStory = story || getRandomSuccessStory()

  return (
    <section className={`py-20 ${className}`} aria-labelledby="success-story-heading">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 text-white rounded-3xl p-12 max-w-5xl mx-auto">
          <h3 id="success-story-heading" className="text-3xl font-bold mb-8">
            Success Story
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-lg mb-6 text-gray-300">
                <p>
                  &quot;{displayStory.quote}&quot;
                </p>
              </blockquote>
              <cite className="not-italic">
                <p className="font-semibold">{displayStory.clientName}</p>
                <p className="text-gray-400">{displayStory.clientTitle}, {displayStory.companyName}</p>
              </cite>
              {displayStory.caseStudyUrl && (
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-slate-900"
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
            
            <div className="grid grid-cols-2 gap-6">
              {displayStory.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-orange-500">{metric.value}</p>
                  <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}