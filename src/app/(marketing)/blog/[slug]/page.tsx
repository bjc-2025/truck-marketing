// src/app/(marketing)/blog/[slug]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Calendar, Twitter, Linkedin, Facebook, Mail } from "lucide-react"
import { ContactCTA } from "@/components/sections/cta-section"

// Import blog utilities with error handling
let getAllBlogPosts: any
let getBlogPostBySlug: any
let formatDate: any

try {
  // Use dynamic import instead of require
  const blogUtils = await import('@/lib/blog')
  getAllBlogPosts = blogUtils.getAllBlogPosts
  getBlogPostBySlug = blogUtils.getBlogPostBySlug
  formatDate = blogUtils.formatDate
} catch (error) {
  console.error('Blog utilities not found:', error)
  getAllBlogPosts = () => []
  getBlogPostBySlug = () => null
  formatDate = (date: string) => new Date(date).toLocaleDateString()
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts?.() || []
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug?.(slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.metaTitle || `${post.title} | Truck Marketing Blog`,
    description: post.metaDescription || post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://truckmarketing.com/blog/${post.slug}`,
      siteName: 'Truck Marketing',
      images: [
        {
          url: post.ogImage || post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.ogImage || post.image],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://truckmarketing.com/blog/${post.slug}`,
    }
  }
}

// MDX Components for rich content
const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-foreground mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-foreground mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-semibold text-foreground mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-semibold text-foreground mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="text-gray-700 mb-4 leading-relaxed text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2" {...props} />,
  li: (props: any) => <li className="text-lg leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 bg-accent/5 italic text-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  img: (props: any) => (
    <Image
      className="rounded-lg my-6"
      width={800}
      height={400}
      alt={props.alt || "Blog content image"}
      {...props}
    />
  ),
  a: (props: any) => (
    <a className="text-primary hover:text-primary/80 underline font-medium" {...props} />
  ),
  strong: (props: any) => <strong className="font-bold text-foreground" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug?.(slug)

  if (!post) {
    notFound()
  }

  const shareUrl = `https://truckmarketing.com/blog/${post.slug}`
  const shareTitle = encodeURIComponent(post.title)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.description,
            image: post.image,
            author: {
              '@type': 'Person',
              name: post.author,
              ...(post.authorImage && { image: post.authorImage }),
            },
            publisher: {
              '@type': 'Organization',
              name: 'Truck Marketing',
              logo: {
                '@type': 'ImageObject',
                url: 'https://truckmarketing.com/logo.png',
              },
            },
            datePublished: post.publishedAt,
            dateModified: post.updatedAt || post.publishedAt,
            url: shareUrl,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': shareUrl,
            },
            keywords: post.tags.join(', '),
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b">
          <div className="container-wide py-4">
            <Link 
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[32rem] overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="absolute inset-0 flex items-center">
            <div className="container-wide">
              <div className="max-w-4xl text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-accent text-accent-foreground">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  {post.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    {post.authorImage && (
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="section-padding">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Share this article
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Help other trucking professionals discover this content
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a
                      href={`mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`}
                      aria-label="Share via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                {post.authorImage && (
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    About {post.author}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.authorBio || `${post.author} is a marketing specialist focused on helping trucking and logistics companies grow their business through strategic digital marketing.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </>
  )
}