import { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  
  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Truck Marketing Blog`,
    description: `Read our latest insights about ${slug.replace(/-/g, ' ')} in the trucking industry.`,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const postTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{postTitle}</h1>
      <p className="text-lg text-gray-600">
        Detailed insights and expert advice about {postTitle.toLowerCase()} in the trucking industry.
      </p>
    </div>
  )
}