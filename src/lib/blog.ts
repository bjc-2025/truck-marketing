// src/lib/blog.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// --- INTERFACES AND CONSTANTS (No changes needed here) ---
export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  authorImage?: string
  authorBio?: string
  category: string
  tags: string[]
  featured: boolean
  image: string
  imageAlt: string
  readingTime: number
  metaTitle?: string
  metaDescription?: string
  ogImage?: string
  content: string
}

export interface BlogCategory {
  name: string
  slug: string
  description: string
  color: string
}

const BLOG_CATEGORIES: BlogCategory[] = [
  { name: 'SEO & Digital Marketing', slug: 'seo-digital-marketing', description: 'Search engine optimization and digital marketing strategies for trucking companies', color: 'bg-blue-100 text-blue-800' },
  { name: 'Lead Generation', slug: 'lead-generation', description: 'Proven tactics to generate more qualified leads for your transport business', color: 'bg-green-100 text-green-800' },
  { name: 'Website Design', slug: 'website-design', description: 'Web design best practices and trends for logistics companies', color: 'bg-purple-100 text-purple-800' },
  { name: 'PPC & Advertising', slug: 'ppc-advertising', description: 'Pay-per-click advertising strategies and campaign optimization', color: 'bg-orange-100 text-orange-800' },
  { name: 'Industry Insights', slug: 'industry-insights', description: 'Latest trends, news, and insights from the trucking and logistics industry', color: 'bg-gray-100 text-gray-800' },
  { name: 'Success Stories', slug: 'success-stories', description: 'Client case studies and marketing success stories', color: 'bg-yellow-100 text-yellow-800' }
]

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

// --- HELPER AND GETTER FUNCTIONS (No changes needed here) ---
function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

export function getAllBlogPosts(): BlogPost[] {
  ensureBlogDirectory()
  if (!fs.existsSync(postsDirectory)) { return [] }
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readingTimeStats = readingTime(content)
      return { slug, content, readingTime: Math.ceil(readingTimeStats.minutes), ...data } as BlogPost
    })
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) { return 1 } else { return -1 }
  })
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  ensureBlogDirectory()
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) { return null }
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readingTimeStats = readingTime(content)
    return { slug, content, readingTime: Math.ceil(readingTimeStats.minutes), ...data } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error); return null
  }
}

// ... Other getter functions like getBlogPostsByCategory, etc., remain unchanged ...
export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === category)
}
export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.tags.some(postTag => postTag.toLowerCase().replace(/\s+/g, '-') === tag))
}
export function getFeaturedBlogPosts(): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.featured)
}
export function getRelatedBlogPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug)
  const scoredPosts = otherPosts.map(post => {
    let score = 0
    if (post.category === currentPost.category) { score += 10 }
    const sharedTags = post.tags.filter(tag => currentPost.tags.includes(tag))
    score += sharedTags.length * 3
    return { post, score }
  })
  return scoredPosts.sort((a, b) => b.score - a.score).slice(0, limit).map(item => item.post)
}
export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts()
  const tagSet = new Set<string>()
  allPosts.forEach(post => { post.tags.forEach(tag => tagSet.add(tag)) })
  return Array.from(tagSet).sort()
}
export function getBlogCategories(): BlogCategory[] {
  return BLOG_CATEGORIES
}
export function getCategoryBySlug(slug: string): BlogCategory | null {
  return BLOG_CATEGORIES.find(category => category.slug === slug) || null
}
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-AU', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)
}


//
// --- SITEMAP FUNCTION (THIS IS THE CORRECTED PART) ---
//
type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: 'weekly' | 'daily' | 'always' | 'hourly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Generates sitemap-ready entries for all blog posts.
 * It now correctly converts date strings to Date objects.
 */
export function getBlogSitemapEntries(): SitemapEntry[] {
  const allPosts = getAllBlogPosts();
  
  return allPosts.map(post => {
    // CRITICAL FIX: Convert the date string from frontmatter into a true Date object.
    const lastModifiedDate = new Date(post.updatedAt || post.publishedAt);

    return {
      url: `/blog/${post.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'weekly',
      priority: post.featured ? 0.8 : 0.6,
    };
  });
}