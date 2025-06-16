import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Users, Globe, Target, BarChart3, Camera} from "lucide-react"
import Link from "next/link"

interface Service {
  
  id: string
  title: string
  description: string
  benefits: string[]
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  href: string
}

interface ServicesGridProps {
  title?: string
  subtitle?: string
  services?: Service[]
  showBadges?: boolean
}

const defaultServices: Service[] = [
    {
    id: "website-development",
    title: "Website Development",
    description: "Custom websites that establish credibility and convert visitors for transport & logistics brands.",
    benefits: ["Mobile-responsive design", "Load tracking integration", "Quote request systems"],
    icon: Globe,
    href: "/services/website-development"
  },
  {
    id: "trucking-seo",
    title: "Trucking SEO",
    description: "Get found by companies actively searching for your transport services with specialised SEO strategies.",
    benefits: ["Local search optimisation", "Industry-specific keywords", "Route-based targeting"],
    icon: Search,
    badge: "Most Popular",
    href: "/services/trucking-seo"
  },
  {
    id: "lead-generation",
    title: "Logistics Lead Generation",
    description: "Fill your pipeline with qualified leads ready to convert using proven lead generation tactics.",
    benefits: ["Qualified prospect targeting", "Multi-channel campaigns", "CRM integration"],
    icon: Users,
    href: "/services/logistics-lead-generation"
  },
  {
    id: "ppc-advertising",
    title: "PPC for Haulage",
    description: "Maximise your ad spend with pay-per-click campaigns that deliver results for haulage companies.",
    benefits: ["Route-specific targeting", "Cost-per-acquisition focus", "Real-time optimisation"],
    icon: Target,
    href: "/services/ppc-for-haulage"
  },
  {
    id: "analytics-reporting",
    title: "Performance Analytics",
    description: "Track and optimise your marketing performance with detailed analytics and actionable insights.",
    benefits: ["Custom dashboards", "ROI tracking", "Competitive analysis"],
    icon: BarChart3,
    href: "/services/analytics-reporting"
  },
  {
    id: "Content Capture",
    title: "Content Capture",
    description: "Capture and convert leads with high-quality content tailored for the trucking industry.",
    benefits: ["Blogging", "Video content", "Lead magnets"],
    icon: Camera,
    href: "/services/content-capture"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Engage your audience and build brand loyalty through targeted social media strategies.",
    benefits: ["Content creation", "Community management", "Performance tracking"],
    icon: Users,
    href: "/services/social-media-management"
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Nurture leads and retain customers with effective email marketing campaigns.",
    benefits: ["Automated workflows", "Personalised content", "Performance analytics"],
    icon: Users,
    href: "/services/email-marketing"
  },
  {
    id: "Digital Reputation Management",
    title: "Digital Reputation Management",
    description: "Build and maintain a positive online reputation for your trucking business.",
    benefits: ["Review management", "Brand monitoring", "Crisis response"],
    icon: Users,
    href: "/services/digital-reputation-management"
  }
]

export function ServicesGrid({ 
  title = "Marketing Services Engineered for Trucking & Logistics",
  subtitle = "Comprehensive solutions designed to drive growth for transport companies",
  services = defaultServices,
  showBadges = true
}: ServicesGridProps) {
  return (
    <section className="section-padding  bg-gray-50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-sm font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="card-elevation-md group hover:scale-105 transition-all duration-200">
              <CardHeader className="relative">
                {service.badge && showBadges && (
                  <Badge className="absolute -top-2 -right-2 bg-truck-orange-600 text-white">
                    {service.badge}
                  </Badge>
                )}
                
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                
                <CardTitle className="text-xl mb-2">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-truck-orange-500 rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="btn-truck-orange text-lg px-8 py-6 h-auto" asChild>
            <a href="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}