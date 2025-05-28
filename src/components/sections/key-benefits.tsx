// components/sections/key-benefits.tsx
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

interface KeyBenefitsProps {
  title: string
  subtitle?: string
  description: string
  benefits: string[]
  stats: {
    value: string
    metric: string
  }
  imageUrl?: string
  imageAlt?: string
  reverse?: boolean
}

export default function KeyBenefits({
  title,
  subtitle,
  description,
  benefits,
  imageUrl,
  imageAlt,
  reverse = false
}: KeyBenefitsProps) {
  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-bold lg:text-5xl">
          {title}
        </h2>
        
        <div className={`grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24 ${reverse ? 'sm:grid-cols-2' : ''}`}>
          <div className={`relative space-y-4 ${reverse ? 'sm:order-2' : ''}`}>
            {subtitle && (
              <p className="text">
                {subtitle}
              </p>
            )}
            
            <p className="text">
              {description}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative mt-6 sm:mt-0 ${reverse ? 'sm:order-1' : ''}`}>
            <div className="bg-gradient-to-b aspect-[67/34] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              {imageUrl ? (
                <Image 
                  src={imageUrl} 
                  className="rounded-[15px] shadow object-cover" 
                  alt={imageAlt || 'Benefits illustration'} 
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-[15px] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="truck-nav-shape w-16 h-4 bg-white/30 mx-auto mb-4"></div>
                    <span className="text-lg font-semibold">Benefits</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}