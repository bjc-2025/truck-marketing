import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  badge?: string
  title: string
  subtitle: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  stats?: Array<{
    value: string
    label: string
    icon?: React.ComponentType<{ className?: string }>
  }>
  backgroundImage?: string
}

export function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  stats,
  backgroundImage
}: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Optimized Background Image using Next.js Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Trucking and logistics background"
            fill
            className="object-cover"
            priority // Since this is above the fold
            quality={75} // Reduce quality slightly for better performance
            sizes="100vw" // Since it covers the full viewport
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      )}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="relative container-wide section-padding z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {badge && (
              <Badge 
                variant="secondary" 
                className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {badge}
              </Badge>
            )}
            
            <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold text-white mb-6">
              {title}
              <span className="block text-truck-orange-500 mt-2">
                {subtitle}
              </span>
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                asChild
              >
                <a href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              {secondaryCta && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className=" text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <a href={secondaryCta.href}>
                    {secondaryCta.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {/* Stats or visual element */}
          {stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
                >
                  {stat.icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-truck-orange-500 rounded-lg mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  )}
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white font-bold text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Default export with optimized image URL
export function TruckingHero() {
  return (
    <Hero
      badge="Specialised Marketing for Trucking & Logistics"
      title="Drive Your Business"
      subtitle="Further, Faster"
      description="Proven marketing strategies designed specifically for trucking and logistics companies. Get more qualified leads, boost your visibility, and accelerate your growth."
      primaryCta={{
        text: "Get Free Strategy Session",
        href: "/contact"
      }}
      secondaryCta={{
        text: "View Case Studies",
        href: "/case-studies"
      }}
      backgroundImage="https://res.cloudinary.com/dvwug91mb/image/upload/c_scale,f_webp,q_75,w_1920/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg"
      stats={[
        {
          value: "25+",
          label: "Trucking Companies Served",
          icon: Users
        },
        {
          value: "300%",
          label: "Average Lead Increase",
          icon: TrendingUp
        },
        {
          value: "24/7",
          label: "Marketing Performance",
          icon: Zap
        }
      ]}
    />
  )
}