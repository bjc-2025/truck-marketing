// src/app/(marketing)/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { ContactCTA } from "@/components/sections/cta-section"

// Import blog utilities with error handling
let getAllBlogPosts: any
let getFeaturedBlogPosts: any
let formatDate: any

try {
  // Use dynamic import instead of require
  const blogUtils = await import('@/lib/blog')
  getAllBlogPosts = blogUtils.getAllBlogPosts
  getFeaturedBlogPosts = blogUtils.getFeaturedBlogPosts
  formatDate = blogUtils.formatDate
} catch (error) {
  console.error('Blog utilities not found:', error)
  // Fallback functions
  getAllBlogPosts = () => []
  getFeaturedBlogPosts = () => []
  formatDate = (date: string) => new Date(date).toLocaleDateString()
}

// SEO Metadata
export const metadata: Metadata = {
  title: 'Trucking Marketing Blog | Industry Insights & Growth Strategies',
  description: 'Get expert insights on trucking industry marketing, lead generation, SEO strategies, and digital growth tactics. Free resources for transport companies.',
  openGraph: {
    title: 'Trucking Marketing Blog | Expert Industry Insights',
    description: 'Discover proven marketing strategies, industry insights, and growth tactics specifically for trucking and logistics companies.',
    url: 'https://truckmarketing.com/blog', // Replace with your actual domain
    siteName: 'Truck Marketing',
    images: [ // It's good practice to have an OG image for the blog listing page too
      {
        url: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Plane-Over-Truck_nju2ie.jpg', // <<<< REPLACE WITH YOUR BLOG OG IMAGE
        width: 1200,
        height: 630,
        alt: 'Truck Marketing Blog - Insights and Strategies',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trucking Marketing Blog | Expert Industry Insights',
    description: 'Discover proven marketing strategies, industry insights, and growth tactics specifically for trucking and logistics companies.',
    images: ['https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Plane-Over-Truck_nju2ie.jpg'],
  },
  alternates: {
    canonical: 'https://truckmarketing.com/blog',
  },
}

// --- HERO BACKGROUND IMAGE URL ---
// Use a different image or the same one as case studies, up to you.
const blogHeroBackgroundImageUrl = 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Plane-Over-Truck_nju2ie.jpg'; // <<<< EXAMPLE - REPLACE THIS!

export default function BlogPage() {
  // Get blog data with fallbacks
  const allPosts = getAllBlogPosts?.() || []
  const featuredPosts = getFeaturedBlogPosts?.() || []
  const recentPosts = allPosts.slice(0, 6)

  // console.log('Blog posts found:', allPosts.length)
  // console.log('Featured posts:', featuredPosts.length)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative section-padding overflow-hidden" // Removed gradient-hero, added overflow-hidden
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blogHeroBackgroundImageUrl})` }}
          aria-hidden="true"
        />

        {/* Black Overlay */}
        <div 
          className="absolute inset-0 bg-black/70" // Adjust opacity (e.g., bg-black/60, bg-black/75) as needed
          aria-hidden="true"
        />
        
        {/* Content Container - ensure it's above the overlay */}
        <div className="container-wide relative z-10"> {/* Added relative z-10 */}
          <div className="relative text-center text-white py-16 md:py-24"> {/* Added some vertical padding here */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Industry Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trucking Marketing
              <span className="block text-accent mt-2">Insights & Strategies</span>
            </h1>
            
            <p className="text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay ahead of the competition with expert insights, proven strategies, 
              and industry trends tailored specifically for trucking and logistics companies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 ? (
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-accent">⭐ Featured</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Must-Read Articles
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our most popular and impactful content to help grow your trucking business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post: any) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-2xl card-elevation-lg overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-1">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          Featured
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-2xl font-bold mb-3 leading-tight">{post.title}</h3>
                        <p className="text-gray-200 leading-relaxed line-clamp-2">{post.description}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Consider adding author image if available */}
                          {/* {post.authorImage && (
                            <Image src={post.authorImage} alt={post.author} width={40} height={40} className="rounded-full" />
                          )} */}
                          <div>
                            <p className="font-medium text-foreground">{post.author}</p>
                            <p className="text-sm text-muted-foreground">Marketing Expert</p> {/* Or a more dynamic role */}
                          </div>
                        </div>
                        
                        <div className="flex items-center text-accent font-semibold group-hover:text-accent/80 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Recent Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fresh insights and strategies to keep your trucking business ahead of the curve
            </p>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post: any) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/30">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime}m</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-1">•</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:text-primary/80 transition-colors">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Blog Posts Coming Soon!
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                We&quot;re working on creating valuable content for trucking professionals. 
                Check back soon for expert insights and strategies.
              </p>
              <Button asChild>
                <Link href="/contact">
                  Get Notified When We Launch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  )
}