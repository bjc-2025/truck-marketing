import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Mail, Phone, MapPin, CheckCircle, Users, Lock, Eye, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Truck Marketing',
  description: 'Our privacy policy explains how Truck Marketing collects, uses and protects your personal information. We are committed to safeguarding your data and privacy.',
  keywords: 'privacy policy, data protection, truck marketing privacy, personal information, gdpr compliance, australian privacy',
  alternates: {
    canonical: 'https://www.truckmarketing.com.au/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Truck Marketing',
    description: 'Our privacy policy explains how Truck Marketing collects, uses and protects your personal information. We are committed to safeguarding your data and privacy.',
    url: 'https://www.truckmarketing.com.au/privacy',
    siteName: 'Truck Marketing',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Truck Marketing',
    description: 'Our privacy policy explains how we collect, use and protect your personal information.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const privacySections = [
  {
    id: "information-collection",
    title: "Information We Collect",
    icon: FileText,
    content: {
      intro: "We collect information to provide you with the best possible service experience.",
      subsections: [
        {
          title: "Personal Information",
          details: [
            "Information you provide voluntarily such as name, email address, phone number",
            "Information collected when you subscribe to newsletters or contact us for support",
            "Details shared during surveys, contests, or promotional activities"
          ]
        },
        {
          title: "Usage Data", 
          details: [
            "IP address, browser type, and device information",
            "Pages visited and interaction patterns",
            "Time spent on our website and referral sources"
          ]
        },
        {
          title: "Cookies & Tracking",
          details: [
            "Cookies and web beacons for personalized experience",
            "Analytics to understand user preferences and trends",
            "Technologies that help us improve our services"
          ]
        }
      ]
    }
  },
  {
    id: "information-usage",
    title: "How We Use Your Information", 
    icon: Users,
    content: {
      intro: "Your information helps us deliver and improve our marketing services.",
      details: [
        "Providing, maintaining, and improving our services",
        "Communicating with you and responding to inquiries", 
        "Sending marketing materials with your consent",
        "Analyzing usage trends to enhance user experience",
        "Detecting and preventing technical issues or fraud"
      ]
    }
  },
  {
    id: "information-disclosure",
    title: "Information Disclosure",
    icon: Eye,
    content: {
      intro: "We only share your information in specific, necessary circumstances.",
      details: [
        "With service providers who assist in operating our services",
        "When required by law or to protect rights and safety",
        "In connection with business transactions like mergers or acquisitions",
        "With your explicit consent for specific purposes"
      ]
    }
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    icon: CheckCircle,
    content: {
      intro: "You have control over your personal information and privacy preferences.",
      details: [
        "Access, update, or delete your personal information",
        "Opt-out of marketing communications at any time",  
        "Disable cookies through your browser settings",
        "Exercise rights granted by applicable privacy laws",
        "Request data portability or restriction of processing"
      ]
    }
  },
  {
    id: "data-security",
    title: "Data Security & Protection",
    icon: Lock,
    content: {
      intro: "We implement robust security measures to protect your information.",
      details: [
        "Industry-standard encryption for data transmission",
        "Secure servers and regular security audits",
        "Limited access to personal information on need-to-know basis",
        "Regular monitoring for unauthorized access attempts",
        "Incident response procedures for potential security breaches"
      ]
    }
  }
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-wide">
          {/* Back Navigation */}
          <div className="mb-8">
            <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-lg mb-6">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-display-sm font-bold mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            
            <Badge className="bg-truck-orange-600 text-white text-sm px-4 py-2">
              Effective Date: February 14, 2024
            </Badge>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-wide">
          <Card className="card-elevation-md max-w-4xl mx-auto mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">About This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This Privacy Policy describes how Truck Marketing (&quot;Truck Marketing,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and discloses information when you visit and interact with our website and any related services, products, applications, or features offered by Truck Marketing (collectively referred to as the &quot;Service&quot;).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
              <Card key={section.id} className="card-elevation-md group hover:scale-105 transition-all duration-200">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl mb-2">
                    {index + 1}. {section.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground">
                    {section.content.intro}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {section.content.subsections ? (
                    <div className="space-y-4">
                      {section.content.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="font-semibold text-sm uppercase tracking-wide text-truck-orange-600 mb-2">
                            {subsection.title}
                          </h4>
                          <ul className="space-y-2">
                            {subsection.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-truck-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {section.content.details?.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-truck-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Important Sections */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Children's Privacy */}
            <Card className="card-elevation-md">
              <CardHeader>
                <CardTitle className="text-xl">6. Children&apos;s Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18.
                </p>
                <p className="text-sm text-muted-foreground">
                  If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
                </p>
              </CardContent>
            </Card>

            {/* Policy Changes */}
            <Card className="card-elevation-md">
              <CardHeader>
                <CardTitle className="text-xl">7. Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                </p>
                <p className="text-sm text-muted-foreground">
                  We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-wide">
          <Card className="card-elevation-md max-w-4xl mx-auto mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">8. Contact Us</CardTitle>
              <p className="text-muted-foreground">
                Questions about this Privacy Policy? We&apos;re here to help.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:info@truckmarketing.com">
                      info@truckmarketing.com
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:0491999011">
                      0491 999 011
                    </a>
                  </Button>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Visit Us</h4>
                  <p className="text-sm text-muted-foreground">
                    Contact us for location details
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Consent Notice */}
      <section className="section-padding bg-truck-orange-50">
        <div className="container-wide">
          <Card className="card-elevation-md border-truck-orange-200 max-w-4xl mx-auto">
            <CardContent className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-truck-orange-100 rounded-lg mb-6">
                <CheckCircle className="h-8 w-8 text-truck-orange-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-truck-orange-900 mb-4">
                Your Consent Matters
              </h3>
              
              <p className="text-truck-orange-800 mb-6 max-w-2xl mx-auto">
                By using our Service, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
              </p>
              
              <p className="text-sm text-truck-orange-700">
                Last updated: February 14, 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Work Together?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help grow your trucking business while keeping your data secure and protected.
          </p>
          <Button size="lg" className="btn-truck-orange text-lg px-8 py-6 h-auto" asChild>
            <Link href="/contact">
              Get Started Today
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}