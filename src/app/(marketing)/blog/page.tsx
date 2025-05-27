import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Trucking Marketing Insights',
  description: 'Stay updated with the latest insights, tips, and trends in trucking industry marketing.',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-lg text-gray-600">
        Stay informed with our latest insights, industry trends, and expert tips for growing your trucking business.
      </p>
    </div>
  )
}