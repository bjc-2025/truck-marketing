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

This is a Next.js 15 marketing website for a trucking/logistics marketing agency using the app router pattern.

**Key Structure:**
- **Route Groups:** Uses `(marketing)` route group for main site pages
- **Nested Layouts:** Root layout handles global metadata, marketing layout adds header/footer
- **Dynamic Routes:** Blog posts (`/blog/[slug]`) and case studies (`/case-studies/[slug]`) use slug-based routing
- **Content Management:** Structured for markdown content in `/src/content/` directories (currently empty)

**Component Organization:**
- `/components/layout/` - Site-wide layout components (header, footer)
- `/components/sections/` - Page-specific sections and blocks
- `/components/forms/` - Form components and inputs
- `/components/ui/` - Reusable UI components and design system elements

**Styling:**
- Tailwind CSS with custom color variables (`--background`, `--foreground`)
- Responsive container patterns (`container mx-auto`)
- Inter font from Google Fonts

**Content Strategy:**
Content files should include frontmatter with:
- Blog posts: `title`, `description`, `date`, `author`, `tags`
- Case studies: `title`, `description`, `company`, `industry`, `results`

**Metadata Handling:**
Uses Next.js metadata API with template pattern: `%s | Truck Marketing`

## Development Notes

- Uses TypeScript with strict configurations
- No test framework configured yet
- No content processing (MDX/markdown) setup yet
- Empty `/src/lib/` directory for shared utilities




## API Routes
Handle form submissions (contact, quote requests).
Any server-side logic that needs to be triggered by client-side actions without a full page reload.
Integrate with third-party services (e.g., email providers).


## Data fetching strategies for dynamic content:
Blog Posts & Case Studies:
Option 1 (Local MDX/Markdown): Store content as .mdx or .md files in src/content/. Use libraries like gray-matter to parse frontmatter and next-mdx-remote or @contentlayer/core and contentlayer-next to render.
Fetching: Server Components can directly read these files using Node.js fs module. Use generateStaticParams in dynamic route segments ([slug]/page.tsx) for SSG at build time.





## SEO considerations from an architectural standpoint:
Metadata API: Use the built-in metadata object or generateMetadata function in layout.tsx and page.tsx files for titles, descriptions, Open Graph tags, etc.
Root layout.tsx: Default metadata, site title template.
Page page.tsx: Specific title, description for that page.
Dynamic pages ([slug]/page.tsx): generateMetadata function to fetch data and create dynamic metadata.


Semantic HTML: Use appropriate HTML5 tags (<main>, <article>, <aside>, <nav>, <h1>-<h6>).
Sitemap & robots.txt: Generate dynamically via app/sitemap.xml/route.ts and app/robots.txt/route.ts.
Structured Data (JSON-LD): Embed JSON-LD scripts for richer search results (e.g., Organization, Service, Article). This can be done within the metadata object or directly in page components.
Internal Linking: Ensure logical internal linking between relevant pages.
Performance: Fast load times are crucial. Server Components, image optimization (next/image), and code splitting (automatic with App Router) help.

## Site Style & Branding Guidance
Target Audience: Trucking and logistics company owners, managers, decision-makers. Often practical, results-oriented, value reliability and straightforwardness.
Style Goals: Bold, professional, trustworthy, modern, expertise, reliability.
A. Color Palette:
Primary: Deep, strong blue (e.g., #0A2463 - Oxford Blue, or #1D3557 - Prussian Blue). Conveys trust, stability, professionalism.
Secondary/Accent: A bright, action-oriented color. (Energy/Warning - use sparingly): Strong Orange (e.g., #F39C12 - Orange)



Neutrals:
Dark Grey/Charcoal for text and secondary elements (e.g., #343A40).
Light Grey for backgrounds, dividers (e.g., #F8F9FA - very light grey, #E9ECEF - slightly darker).
White for ample whitespace.


B. Typography:
Headings: Strong, bold, clear sans-serif.
Primary Choice: Inter (Variable font, excellent readability, modern, versatile). Use heavier weights (Bold, ExtraBold).
Alternatives: Montserrat, Oswald (condensed, impactful), Bebas Neue (very bold, display).


Body Text: Highly readable, clean sans-serif.
Primary Choice: Inter (Regular, Medium weights).
Alternatives: Open Sans, Lato, Roboto.



Overall Tone: Dynamic, efficient, solutions-focused. Avoid dated or overly "gritty" imagery. Focus on the modern, tech-enabled side of logistics.
D. Visually Communicating Efficiency, Growth, and Specialization:
Efficiency:
Clean layouts, ample whitespace.
Streamlined navigation.
Icons representing speed, precision, cogs, arrows.
Imagery of smooth operations.


Growth:
Upward-trending lines or arrow motifs (subtly integrated).
"Before & After" visual cues in case studies (e.g., graphs showing metric improvements).
Imagery suggesting expansion and scale.


Industry Specialization:
Consistent use of relevant industry imagery (trucks, logistics).
Language and terminology that resonates with the target audience.
Case studies specifically from trucking/logistics.
Client logos (if permitted) from the industry.



## UI/UX Plan
A. Key Principles for User Interface Design:
Clarity: Easy to understand, unambiguous language, clear visual hierarchy.
Consistency: Similar elements look and behave the same way across the site.
Efficiency: Users can achieve their goals quickly and with minimal effort.
Feedback: The system should inform users of actions, status changes, and errors.
Simplicity: Avoid clutter. Every element should have a purpose.
B. User Experience Flow (Potential Client):
Landing (Homepage/Service Page):
Attracts attention with a strong UVP (Unique Value Proposition) related to trucking/logistics marketing.
Builds initial trust (professional design, key message points).
Clear CTAs to learn more or explore services.


Learning About Services (Services Page / Specific Service Page):
Clearly outlines different marketing services tailored to the industry.
Explains the benefits and process for each service.
Reinforces expertise with industry-specific language.


Viewing Proof (Case Studies/Portfolio):
Showcases successful projects with other trucking/logistics companies.
Uses quantifiable results where possible (e.g., "Increased leads by X%").
Provides context and tells a story.


Building Trust (About Us Page):
Explains who you are (Brandjam's expertise framed for this niche).
Highlights experience and unique approach to trucking/logistics marketing.
Humanizes the brand.


Taking Action (Contact Page / CTAs):
Easy-to-find and use contact form.
Clear call to action (e.g., "Request a Quote," "Schedule a Consultation").
Alternative contact methods (phone, email).
Reassurance of prompt response.


C. Essential UI Elements:
Clear Navigation:
Header: Logo, main navigation links (Home, Services, About, Case Studies, Blog, Contact).
Footer: Secondary links (Privacy, Terms), contact info, copyright.


Prominent Call-to-Actions (CTAs):
Visually distinct buttons (use accent color).
Action-oriented text (e.g., "Get Your Free Audit," "Drive More Leads," "See Our Results").
Strategically placed on each page.


Trust Signals:
Testimonials from trucking/logistics clients (with names/company if possible).
Client logos (carousel or grid).
Industry association badges (if applicable).
Numbers/Stats showcasing success (e.g., "X Years in Trucking Marketing," "Y Clients Served").


Readable Content: Good contrast, appropriate font sizes, well-structured text with headings and bullet points.
Forms: Simple, clearly labeled fields, validation messages, clear submission button.
Search (Optional but good for Blog/Case Studies): If content grows extensive.
D. Mobile-First Responsiveness and Accessibility (WCAG AA):
Mobile-First: Design for small screens first, then scale up. Tailwind CSS is excellent for this.
Responsive Layouts: Use flexible grids, fluid images. Test on multiple devices.
Touch-Friendly: Ensure buttons and links are large enough for touch targets.
Accessibility (WCAG AA):
Perceivable:
Alt text for all informative images.
Sufficient color contrast (use tools to check).
Resizable text.


## Email Handling Strategy
Recommendation: Next.js API Route + Resend
Resend (resend.com): Modern email API for developers. Very easy to integrate, generous free tier for starting out, excellent documentation.
How it works:
Client-side form (e.g., src/components/forms/contact-form.tsx) submits data to your Next.js API route (src/app/api/contact/route.ts).
The API route validates the data.
It then uses the Resend SDK (or a simple fetch call to Resend's API) to send the email.
You'll need a Resend API key (store it in .env.local).

Cons:
Requires a bit more setup than a pure third-party form service.
You manage the email sending logic (though Resend makes it simple).


Alternative: Third-Party Form Services
Tally.so: Extremely easy to use, generous free tier, embeddable forms. You build the form on Tally, embed it, and Tally handles submissions and notifications.
Formspree.io: Another popular option, provides an endpoint you can POST your form data to.
Netlify Forms: If deploying on Netlify, this is incredibly simple (just add data-netlify="true" to your form tag).
Pros (Third-Party):
Very fast to set up.
Often includes spam protection and a dashboard to view submissions.




Why Resend is preferred for this case:
Given you're building a professional, custom Next.js site, integrating Resend via an API route gives you the best balance of control, professionalism, and developer experience. It allows for robust validation and custom email templating if needed.

## Basic Content Scaffolding
A. Homepage (
Page Goal: Instill immediate trust, clearly state what you do for whom, and guide users to key services or a primary consultation CTA.
Primary Headline / UVP: "Drive Your Trucking & Logistics Business Further, Faster with Expert Marketing."
Alternative: "Specialized Marketing Solutions to Fuel Your Fleet's Growth."


Key Message Points (above the fold or prominent):
We Speak Your Language: Deep expertise in the trucking & logistics industry.
Results-Driven Strategies: Proven methods to increase leads, visibility, and ROI.
Your Dedicated Growth Partner: Comprehensive marketing services tailored to your unique needs.


Primary Call to Action (CTA): "Get a Free Marketing Strategy Session" or "Request a Custom Quote"
B. Services Main Page (
Page Goal: Provide an overview of all specialized marketing services offered and allow users to navigate to detailed pages for each.
Primary Headline: "Marketing Services Engineered for the Trucking & Logistics Sector."
Key Message Points (as intro or section headings for service categories):
Targeted SEO for Trucking: Get found by companies actively searching for your transport services.
Logistics Lead Generation: Fill your pipeline with qualified leads ready to convert.
High-Performance Websites: Custom websites that establish credibility and convert visitors for transport & logistics brands.
Precision PPC Campaigns: Maximize your ad spend with pay-per-click campaigns that deliver results for haulage.
(Brief description under each, linking to the specific service page)


Primary Call to Action (CTA): "Explore Our [Service Name] Solutions" (for each service) or a general "Discuss Your Project."
C. About Us Page (
Page Goal: Build trust by showcasing Brandjam's experience, reframed specifically for its success and understanding of the trucking/logistics niche. Explain why you're the experts for them.
Primary Headline: "The Driving Force Behind Your Logistics Marketing Success."
Alternative: "Your Expert Marketing Partner in the Trucking & Logistics Industry."


Key Message Points:
Decades of Combined Marketing Expertise, Focused on Your Industry: (Leverage Brandjam's overall experience but pivot to the niche). "While Brandjam serves diverse clients, our passion and proven success lie in accelerating growth for trucking and logistics companies like yours."
Understanding the Road Ahead: We know the challenges and opportunities unique to transport, from driver recruitment to freight brokerage marketing.
Our Mission: To Be Your Unfair Advantage. We combine industry insight with cutting-edge marketing tactics to put you miles ahead of the competition.
(Optional: Briefly mention key team members if relevant, or a "Powered by Brandjam" statement for transparency if desired, but the focus should be on the new niche brand).


Primary Call to Action (CTA): "See Our Trucking & Logistics Case Studies" or "Let's Map Your Growth Strategy."
D. Contact Page (
Page Goal: Make it extremely easy and inviting for potential clients to get in touch.
Primary Headline: "Ready to Accelerate Your Growth? Let's Talk."
Alternative: "Get in Touch to Discuss Your Trucking & Logistics Marketing Needs."


## Key Message Points:
We're here to help you navigate the road to marketing success.
Fill out the form below, and one of our trucking & logistics marketing specialists will contact you shortly.
Prefer to call or email directly? [Phone Number] | [Email Address for this niche brand, e.g., hello@truckmarketing.com]


Primary Call to Action (CTA): "Send Your Inquiry" (on form button)
Form Fields: Name, Company Name, Email, Phone, Service(s) Interested In (optional dropdown/checkboxes), Message.




