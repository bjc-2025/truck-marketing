import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"

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
}

export function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  stats
}: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dvwug91mb/image/upload/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg')`
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Blue gradient overlay for brand consistency */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container-wide section-padding">
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
                  className="border-white/30 text-lg px-8 py-6 h-auto"
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

// Default export with example data
export function TruckingHero() {
  return (
    <Hero
      badge="Specialized Marketing for Trucking & Logistics"
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