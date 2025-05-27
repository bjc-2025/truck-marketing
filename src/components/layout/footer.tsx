import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { 
  Truck,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Search,
  Users,
  Globe,
  Target,
  BarChart3,
  Camera,
  Shield
} from "lucide-react"

const services = [
  {
    title: "Trucking SEO",
    href: "/services/trucking-seo",
    icon: Search
  },
  {
    title: "Logistics Lead Generation",
    href: "/services/logistics-lead-generation",
    icon: Users
  },
  {
    title: "Website Development",
    href: "/services/website-development",
    icon: Globe
  },
  {
    title: "PPC for Haulage",
    href: "/services/ppc-for-haulage",
    icon: Target
  },
  {
    title: "Performance Analytics",
    href: "/services/analytics-reporting",
    icon: BarChart3
  },
  {
    title: "Content Capture",
    href: "/services/content-capture",
    icon: Camera
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-management",
    icon: Users
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    icon: Mail
  },
  {
    title: "Digital Reputation Management",
    href: "/services/digital-reputation-management",
    icon: Shield
  }
]

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Free Strategy Session", href: "/contact" }
]

const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" }
]

const socialLinks = [
  { title: "Facebook", href: "#", icon: Facebook },
  { title: "Twitter", href: "#", icon: Twitter },
  { title: "LinkedIn", href: "#", icon: Linkedin },
  { title: "Instagram", href: "#", icon: Instagram }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-truck-orange-500 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">TruckMarketing</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Australias leading marketing agency specialising in trucking and logistics companies. We help transport businesses drive growth, generate leads, and build stronger brands.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-truck-orange-500 flex-shrink-0" />
                <span className="text-sm">Albury Wodonga, NSW/VIC</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-truck-orange-500 flex-shrink-0" />
                <a href="tel:0491999011" className="text-sm hover:text-truck-orange-500 transition-colors">
                  0491 999 011
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-truck-orange-500 flex-shrink-0" />
                <a href="mailto:hello@truckmarketing.com" className="text-sm hover:text-truck-orange-500 transition-colors">
                  hello@truckmarketing.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={`footer-service-${index}`}>
                  <Link 
                    href={service.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-truck-orange-500 transition-colors text-sm group"
                  >
                    <service.icon className="h-4 w-4 text-truck-orange-500/60 group-hover:text-truck-orange-500 transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={`footer-quick-${index}`}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-truck-orange-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.title}
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-bold text-lg mb-6">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Get trucking marketing tips and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-truck-orange-500 focus:border-transparent"
                />
                <Button 
                  size="sm" 
                  className="bg-truck-orange-500 hover:bg-truck-orange-600 text-white px-4"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={`footer-social-${index}`}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-gray-800 hover:bg-truck-orange-500 rounded-lg transition-colors group"
                    aria-label={social.title}
                  >
                    <social.icon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Truck Marketing. All rights reserved. 
              <span className="hidden sm:inline"> | Proudly Australian owned and operated.</span>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <div key={`footer-legal-${index}`} className="flex items-center gap-6">
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-truck-orange-500 transition-colors text-sm"
                  >
                    {link.title}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}