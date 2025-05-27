import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

interface CTASectionProps {
  variant?: "primary" | "secondary" | "gradient"
  badge?: string
  title: string
  description: string
  primaryCta: {
    text: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
  }
  secondaryCta?: {
    text: string
    href: string
    icon?: React.ComponentType<{ className?: string }>
  }
  benefits?: string[]
  backgroundPattern?: boolean
}

export function CTASection({
  variant = "primary",
  badge,
  title,
  description,
  primaryCta,
  benefits,
  backgroundPattern = true
}: CTASectionProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "gradient":
        return "gradient-cta text-white"
      case "secondary":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-primary text-primary-foreground"
    }
  }

  return (
    <section className={`section-padding relative overflow-hidden ${getVariantClasses()}`}>
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
        </div>
      )}
      
      <div className="container-narrow relative">
        <div className="text-center">
          {badge && (
            <Badge 
              variant="outline" 
              className={`mb-6 ${
                variant === "secondary" 
                  ? "border-primary/20 text-primary" 
                  : "border-white/30 text-white bg-white/10"
              }`}
            >
              {badge}
            </Badge>
          )}
          
          <h2 className="text-3xl sm:text-4xl lg:text-display-sm font-bold mb-6">
            {title}
          </h2>
          
          <p className={`text-xl mb-8 max-w-2xl mx-auto ${
            variant === "secondary" ? "text-muted-foreground" : "text-white"
          }`}>
            {description}
          </p>
          
          {/* Benefits List */}
          {benefits && (
            <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    variant === "secondary" ? "bg-truck-orange-500" : "bg-truck-orange-400"
                  }`} />
                  <span className={`text-sm ${
                    variant === "secondary" ? "text-foreground" : "text-white"
                  }`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          )}
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className={`text-lg px-8 py-6 h-auto ${
                variant === "secondary" 
                  ? "btn-truck-orange" 
                  : "bg-white text-primary hover:bg-gray-100"
              }`}
              asChild
            >
              <a href={primaryCta.href}>
                {primaryCta.icon && <primaryCta.icon className="mr-2 h-5 w-5" />}
                {primaryCta.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}

// Pre-built CTA variants
export function ContactCTA() {
  return (
    <CTASection
      variant="gradient"
      badge="Ready to Accelerate?"
      title="Get Your Free Marketing Strategy Session"
      description="Let's discuss how we can drive more qualified leads and accelerate growth for your trucking business. No commitment, just expert insights."
      primaryCta={{
        text: "Schedule Free Consultation",
        href: "/contact",
        icon: Calendar
      }}
      secondaryCta={{
        text: "Call Now",
        href: "tel:+1-555-0123",
        icon: Phone
      }}
      benefits={[
        "Free 30-minute consultation",
        "Custom growth strategy",
        "No obligation required"
      ]}
    />
  )
}

export function ServicesCTA() {
  return (
    <CTASection
      variant="secondary"
      title="Ready to Drive Results?"
      description="Discover how our specialized marketing services can accelerate your trucking company's growth and increase your lead generation."
      primaryCta={{
        text: "Explore Our Services",
        href: "/services"
      }}
      secondaryCta={{
        text: "Contact Us",
        href: "/contact",
        icon: Mail
      }}
    />
  )
}