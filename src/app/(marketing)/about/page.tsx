import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, MapPin, Zap, Target, DollarSign, Users } from "lucide-react"

export const metadata: Metadata = {
  title: 'About Us - Truck Marketing',
  openGraph: {
    title: 'About Us - Truck Marketing',
    description: 'Learn about Truck Marketing and our mission to help trucking companies grow their business.',
    url: 'https://www.truckmarketing.com/about',
    siteName: 'Truck Marketing',
    images: [
      {
        url: 'https://www.truckmarketing.com/images/about-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'About Truck Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Truck Marketing',
    description: 'Learn about Truck Marketing and our mission to help trucking companies grow their business.',
    images: ['https://www.truckmarketing.com/images/about-banner.jpg'],
  },
  keywords: ['trucking', 'marketing', 'business growth', 'logistics', 'transportation'],
  robots: {
    index: true,
    follow: true,
  },    
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dvwug91mb/image/upload/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg')`
          }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Blue gradient overlay for brand consistency */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative container-wide section-padding">
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Trucking & Logistics Marketing Specialists
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-display-lg font-bold text-white mb-6">
              About Truck Marketing
              <span className="block text-truck-orange-500 mt-2">
                Small Team, Big Results
              </span>
            </h1>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Were the marketing agency that speaks your language - the language of the road, logistics, and getting results that move your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-wide section-padding">
        
        {/* Our Story Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                Born from the heart of Australias transport corridor in Albury Wodonga, Truck Marketing was founded on a simple belief: the trucking and logistics industry deserves marketing that understands the unique challenges, opportunities, and spirit of life on the road.
              </p>
              <p className="mb-6">
                While other agencies try to apply generic strategies to every industry, weve made trucking and logistics our specialty. We know that a campaign that works for a tech startup wont necessarily work for a freight company. We understand the regulatory environment, the tight margins, the importance of safety, and the pride that comes with keeping Australia moving.
              </p>
              <p className="mb-6">
                From our base in Albury Wodonga, weve traveled the length and breadth of Australia, working with trucking companies from the red dirt of the Pilbara to the bustling ports of Sydney. No job is too far, no challenge too big. When Australian trucking companies need results, they call us.
              </p>
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Meet the Team</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
              <div className="relative w-full max-w-3xl mx-auto mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dvwug91mb/image/upload/v1748215193/Brandjam_ciohia.webp" 
                  alt="Truck Marketing Team" 
                  width={800}
                  height={600}
                  className="w-full h-auto shadow-md"
                  priority
                />
              </div>
              <p className="text-lg text-gray-600 italic">
                Small team, big impact. Were the marketing muscle behind Australias most successful trucking companies.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Trucking Companies Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Specialists</h3>
                <p className="text-gray-600">
                  We dont do marketing for everyone. We do marketing for trucking and logistics companies, and we do it better than anyone else.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nationwide Reach</h3>
                <p className="text-gray-600">
                  Based in Albury Wodonga but ready to travel anywhere in Australia. Your success is worth the journey.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Small Team, Big Results</h3>
                <p className="text-gray-600">
                  Were lean, agile, and focused. No bureaucracy, no endless meetings - just results that drive your business forward.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Strategies</h3>
                <p className="text-gray-600">
                  Our marketing strategies are road-tested and results-proven. We know what works in trucking because its all we do.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">ROI-Focused</h3>
                <p className="text-gray-600">
                  Every dollar you invest with us is designed to generate more dollars back. We measure success by your bottom line growth.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow border border-gray-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-500 rounded-lg mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Service</h3>
                <p className="text-gray-600">
                  Youre not just another client number. You get direct access to our team and personalized strategies for your unique business.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative overflow-hidden rounded-2xl mb-16">
          {/* Background with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dvwug91mb/image/upload/v1747977431/DSC_0147-Enhanced-NR-Edit_i0we4o.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          
          <div className="relative p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              To be the driving force behind the growth of Australias trucking and logistics companies. Were not just marketers - were partners in your success, dedicated to helping you build stronger brands, attract better clients, and grow more profitable businesses.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Shift Your Marketing into High Gear?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Lets talk about how we can help your trucking company reach new destinations and achieve the growth you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <Link href="/case-studies">
                View Our Work
              </Link>
            </Button>
          </div>
        </section>

      </div>
    </div>
  )
}