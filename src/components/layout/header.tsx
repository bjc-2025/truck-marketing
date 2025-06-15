"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Phone, 
  Truck,
  Search,
  Users,
  Globe,
  Target,
  BarChart3,
  Camera,
  Mail,
  Shield,
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  priority?: 'high' | 'medium' | 'low' // Add priority for smart prefetching
}

interface NavSection {
  title: string
  items: NavItem[]
}

const services: NavSection = {
  title: "Services",
  items: [
    {
      title: "Website Development",
      href: "/services/website-development",
      description: "Custom websites that establish credibility and convert visitors",
      icon: Globe,
      priority: 'high' // High priority service
    },
    {
      title: "Trucking SEO",
      href: "/services/trucking-seo",
      description: "Get found by companies searching for transport services",
      icon: Search,
      priority: 'high' // High priority service
    },
    {
      title: "Logistics Lead Generation",
      href: "/services/logistics-lead-generation", 
      description: "Fill your pipeline with qualified prospects",
      icon: Users,
      priority: 'high' // High priority service
    },
    {
      title: "PPC for Haulage",
      href: "/services/ppc-for-haulage",
      description: "Targeted ads that deliver results for haulage companies",
      icon: Target,
      priority: 'medium'
    },
    {
      title: "Performance Analytics",
      href: "/services/analytics-reporting",
      description: "Track and optimise your marketing ROI",
      icon: BarChart3,
      priority: 'medium'
    },
    {
      title: "Content Capture",
      href: "/services/content-capture",
      description: "Capture and convert leads with high-quality content",
      icon: Camera,
      priority: 'medium'
    },
    {
      title: "Social Media Management",
      href: "/services/social-media-management",
      description: "Engage your audience and build brand loyalty",
      icon: Users,
      priority: 'low'
    },
    {
      title: "Email Marketing",
      href: "/services/email-marketing",
      description: "Nurture leads and retain customers with effective campaigns",
      icon: Mail,
      priority: 'low'
    },
    {
      title: "Digital Reputation Management",
      href: "/services/digital-reputation-management",
      description: "Build and maintain a positive online reputation",
      icon: Shield,
      priority: 'low'
    }
  ]
}

// Navigation items with priority
const navigation: NavItem[] = [
  { title: "About", href: "/about", priority: 'high' },
  { title: "Case Studies", href: "/case-studies", priority: 'high' },
  { title: "Blog", href: "/blog", priority: 'medium' },
  { title: "Gallery", href: "/gallery", priority: 'low' },
  { title: "Contact", href: "/contact", priority: 'high' }
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Function to determine prefetch behavior based on priority
  const shouldPrefetch = (priority?: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return true  // Always prefetch high priority
      case 'medium':
        return true  // Prefetch medium priority
      case 'low':
        return false // Let Next.js handle low priority with default behavior
      default:
        return true  // Default to prefetch
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with prefetch */}
          <Link href="/" prefetch={true} className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-truck-orange-500 rounded-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">TruckMarketing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Home */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    prefetch={true}
                    className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium px-4 py-2 text-gray-700 hover:text-gray-900">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="z-[60]">
                    <div className="w-[700px] p-6 bg-white shadow-xl border rounded-lg">
                      <div className="grid grid-cols-3 gap-4">
                        {services.items.map((service) => (
                          <Link
                            key={`desktop-${service.href}`}
                            href={service.href}
                            prefetch={shouldPrefetch(service.priority)}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              {service.icon && (
                                <div className="flex items-center justify-center w-8 h-8 bg-truck-orange-100 rounded-lg group-hover:bg-truck-orange-200 transition-colors">
                                  <service.icon className="h-4 w-4 text-truck-orange-600" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-sm mb-1 text-gray-900">{service.title}</div>
                                <div className="text-xs text-gray-600 leading-relaxed">
                                  {service.description}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Other Navigation Items */}
                {navigation.map((item) => (
                  <NavigationMenuItem key={`desktop-${item.href}`}>
                    <Link 
                      href={item.href}
                      prefetch={shouldPrefetch(item.priority)}
                      className="text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-gray-700 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:0491999011" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                0491 999 011
              </a>
            </Button>
            <Button size="sm" className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white" asChild>
              <Link href="/contact" prefetch={true}>
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <div className="flex flex-col gap-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <div className="flex items-center justify-center w-8 h-8 bg-truck-orange-500 rounded-lg">
                      <Truck className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg text-gray-900">TruckMarketing</span>
                  </div>

                  {/* Mobile Navigation */}
                  <div>
                    <h3 className="font-semibold mb-4 text-gray-900">Navigation</h3>
                    <div className="space-y-2">
                      <Link
                        href="/"
                        prefetch={true}
                        className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Home
                      </Link>
                      {navigation.map((item) => (
                        <Link
                          key={`mobile-${item.href}`}
                          href={item.href}
                          prefetch={shouldPrefetch(item.priority)}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Services */}
                  <div>
                    <h3 className="font-semibold mb-4 text-gray-900">Services</h3>
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {services.items.map((service) => (
                        <Link
                          key={`mobile-${service.href}`}
                          href={service.href}
                          prefetch={shouldPrefetch(service.priority)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.icon && (
                            <div className="flex items-center justify-center w-8 h-8 bg-truck-orange-100 rounded-lg">
                              <service.icon className="h-4 w-4 text-truck-orange-600" />
                            </div>
                          )}
                          <div>
                            <div className="font-medium text-sm text-gray-900">{service.title}</div>
                            <div className="text-xs text-gray-600">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTAs */}
                  <div className="space-y-3 pt-4 border-t">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:0491999011" className="flex items-center justify-center gap-2">
                        <Phone className="h-4 w-4" />
                        0491 999 011
                      </a>
                    </Button>
                    <Button className="w-full bg-truck-orange-500 hover:bg-truck-orange-600 text-white" asChild>
                      <Link href="/contact" prefetch={true}>
                        Get Free Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}