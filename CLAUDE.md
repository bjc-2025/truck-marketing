# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**
```bash
pnpm dev  # Uses Turbopack for faster development
```

**Building and linting:**
```bash
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint code quality checks
```

## Architecture Overview

This is a fully functional Next.js 15 marketing website for a trucking/logistics marketing agency using the app router pattern.

**Key Structure:**
- **Route Groups:** Uses `(marketing)` route group for main site pages
- **Nested Layouts:** Root layout handles global metadata, marketing layout adds header/footer
- **Dynamic Routes:** Blog posts (`/blog/[slug]`), case studies (`/case-studies/[slug]`), and services (`/services/[slug]`) use slug-based routing
- **Content Management:** Working MDX blog system with gray-matter frontmatter parsing

**Component Organization:**
- `/components/layout/` - Site-wide layout components (header, footer)
- `/components/sections/` - Page-specific sections and blocks
- `/components/forms/` - Advanced form components with validation
- `/components/ui/` - Comprehensive design system with 20+ UI components
- `/components/services/` - Service-specific components

**Styling:**
- Custom Tailwind CSS configuration with truck-specific brand colors
- Custom color palette: `truck-blue`, `truck-green`, `truck-orange` (11 shades each)
- Typography scale with display sizes (`display-xl` to `display-sm`)
- Inter font family with proper font loading

## Content Management System ✅ IMPLEMENTED

**Blog System:**
- Working MDX processing with `gray-matter` and `next-mdx-remote`
- Blog utilities in `src/lib/blog.ts` for content parsing
- Reading time calculation with `reading-time` package
- Frontmatter support: `title`, `description`, `date`, `author`, `tags`, `category`
- Example blog post: `/src/content/blog/seo-best-practices-trucking-companies-2025.mdx`

**Data Architecture:**
- **Services**: 9 comprehensive services with features, FAQs, processes (`src/data/servicesData.ts`)
- **Case Studies**: 4 detailed case studies with metrics and galleries (`src/data/caseStudies.ts`)
- **Success Stories**: Client testimonials with metrics (`src/data/successData.ts`)

## Email System ✅ IMPLEMENTED

**Contact API Route:**
- Full Resend integration at `/src/app/api/contact/route.ts`
- Zod validation for form data
- HTML email templates with proper escaping
- Confirmation emails to both admin and customer
- Newsletter signup functionality

**Contact Form:**
- Advanced form with `react-hook-form` and Zod validation
- Real-time validation and error handling
- Success/loading states with proper UX
- Multiple contact methods integration

## Image Management ✅ IMPLEMENTED

**Cloudinary Integration:**
- Configuration in `src/lib/cloudinary.ts`
- 25+ optimized images for gallery, case studies, and services
- Responsive image delivery with automatic optimization
- Image transformation and CDN integration

## Design System ✅ IMPLEMENTED

**Custom Color Palette:**
```css
truck-blue: 11 shades (50-950) - Primary brand color
truck-green: 11 shades (50-950) - Success/growth indicators  
truck-orange: 11 shades (50-950) - Action/accent color
```

**Typography:**
- Inter variable font family
- Display scale: `display-xl`, `display-lg`, `display-md`, `display-sm`
- Proper font-weight hierarchy (400-800)

**UI Components:**
Complete Radix UI integration with custom styling:
- Button variants and sizes
- Form components (Input, Textarea, Select, Checkbox)
- Layout components (Card, Separator, Sheet)
- Navigation (Dropdown Menu, Navigation Menu)
- Feedback (Dialog, Badge, Avatar)

## Route Structure ✅ IMPLEMENTED

```
/                    # Homepage with hero, services, testimonials
/about               # About page with team and company info
/services/[slug]     # 9 dynamic service pages with detailed info
/case-studies/[slug] # 4 dynamic case studies with metrics
/blog/[slug]         # Dynamic blog posts with MDX content
/contact             # Contact form with multiple options
/gallery             # Image gallery with Cloudinary integration
/privacy             # Privacy policy page
/terms-of-service    # Terms of service page
```

## Advanced Features ✅ IMPLEMENTED

**Analytics & Performance:**
- Vercel Analytics integration
- Vercel Speed Insights
- SEO optimization with sitemap and robots.txt support

**Form Handling:**
- Newsletter signup integration
- Contact form with multiple service selections
- Proper validation and error handling
- Email confirmations and notifications

## Development Notes

**Implemented:**
- TypeScript with strict configurations
- MDX content processing with frontmatter
- Comprehensive data architecture
- Email system with Resend
- Image optimization with Cloudinary
- Full design system implementation

**Not Yet Implemented:**
- Test framework
- Search functionality for blog/case studies
- CMS integration (currently file-based)

## Content Strategy ✅ IMPLEMENTED

**Blog Posts Frontmatter:**
```yaml
title: string
description: string
date: string (ISO format)
author: string
tags: string[]
category: string
```

**Case Studies Data:**
```typescript
{
  id: string
  title: string
  company: string
  industry: string
  description: string
  challenge: string
  solution: string
  results: { metric: string, value: string }[]
  images: string[]
  testimonial?: { quote: string, author: string, position: string }
}
```

**Services Data:**
```typescript
{
  id: string
  title: string
  description: string
  features: string[]
  process: { step: number, title: string, description: string }[]
  faqs: { question: string, answer: string }[]
  pricing?: string
}
```

## Email Configuration

**Resend Setup:**
- Environment variable: `RESEND_API_KEY`
- Sender email configuration in API route
- HTML email templates with proper styling
- Error handling and validation

**Email Types:**
- Contact form submissions (admin notification)
- Contact confirmations (customer acknowledgment)
- Newsletter signup confirmations

## SEO Implementation ✅ IMPLEMENTED

**Metadata API:**
- Dynamic metadata generation for all pages
- Open Graph tags and Twitter cards
- Proper title templates: `%s | Truck Marketing`
- Structured JSON-LD data for better search results

**Performance:**
- Next.js Image optimization
- Cloudinary CDN integration
- Automatic code splitting
- Server Components for optimal performance

## Brand Guidelines ✅ IMPLEMENTED

**Target Audience:** Trucking and logistics company owners, managers, decision-makers

**Design Principles:**
- Bold, professional, trustworthy appearance
- Clean layouts with ample whitespace
- Results-driven messaging with quantifiable metrics
- Industry-specific imagery and terminology

**Color Usage:**
- **truck-blue**: Primary brand color for headers, CTAs, trust elements
- **truck-green**: Success indicators, growth metrics, positive outcomes
- **truck-orange**: Action items, urgent CTAs, warning states

**Typography Hierarchy:**
- **Display sizes**: Hero headlines and major section headers
- **Heading scales**: Section titles and card headers  
- **Body text**: Readable content with proper line height
- **UI text**: Form labels, buttons, navigation items