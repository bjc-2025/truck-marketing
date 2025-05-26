// servicesData.ts

// Type definitions
export interface ServiceProcess {
  title: string
  desc: string
}

export interface ServiceStats {
  metric: string
  value: string
}

export interface ServiceInfo {
  title: string
  subtitle: string
  description: string
  icon: string // Emoji icon
  heroImageUrl: string // Full URL for the hero image
  benefits: string[]
  process: ServiceProcess[]
  stats: ServiceStats
  features: string[]
}

export type ServiceSlug = 
  | 'trucking-seo' 
  | 'logistics-lead-generation' 
  | 'website-development' 
  | 'ppc-for-haulage' 
  | 'analytics-reporting' 
  | 'content-capture' 
  | 'social-media-management' 
  | 'email-marketing' 
  | 'digital-reputation-management';

// Service data configuration with full URLs
export const serviceData: Record<ServiceSlug, ServiceInfo> = {
  'trucking-seo': {
    title: 'Trucking SEO',
    subtitle: 'Get Found by Companies Actively Searching for Transport Services',
    description: 'Dominate search results and attract high-quality leads with SEO strategies specifically designed for the trucking and logistics industry.',
    icon: '🔍',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/dawsons-scaled_yx9ewf.jpg',
    benefits: [
      'Rank #1 for "trucking companies near me" and route-specific searches',
      'Attract shippers actively looking for reliable carriers',
      'Build long-term organic traffic that converts',
      'Outrank competitors in local and national searches'
    ],
    process: [
      { title: 'Industry Analysis', desc: 'We analyse your routes, services, and competition to identify high-value keywords' },
      { title: 'On-Page Optimization', desc: 'Optimise your website content, meta tags, and structure for trucking-specific searches' },
      { title: 'Local SEO Dominance', desc: 'Claim and optimise your Google Business Profile for every terminal and route' },
      { title: 'Content Strategy', desc: 'Create valuable content that positions you as an industry authority' }
    ],
    stats: { metric: 'average increase in organic leads', value: '312%' },
    features: [
      'Route-based keyword targeting',
      'Google Business Profile optimisation',
      'Industry-specific link building',
      'Mobile-first optimisation',
      'Load board integration',
      'Voice search optimisation'
    ]
  },
  'logistics-lead-generation': {
    title: 'Logistics Lead Generation',
    subtitle: 'Fill Your Pipeline with Qualified Shippers Ready to Move',
    description: 'Stop chasing loads and start attracting premium shippers with our proven lead generation system built exclusively for trucking companies.',
    icon: '👥',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/logistics_lead_gen_hero_page_xcyfwa.jpg',
    benefits: [
      'Generate 50-200 qualified leads per month',
      'Target specific industries and shipping lanes',
      'Pre-qualify leads based on your criteria',
      'Reduce empty miles with strategic lead targeting'
    ],
    process: [
      { title: 'Ideal Customer Profile', desc: 'Define your perfect shipper based on lanes, freight type, and volume' },
      { title: 'Multi-Channel Outreach', desc: 'Deploy targeted campaigns across email, LinkedIn, and industry platforms' },
      { title: 'Lead Qualification', desc: 'Score and qualify leads based on shipping needs and your capacity' },
      { title: 'CRM Integration', desc: 'Seamlessly integrate qualified leads into your existing systems' }
    ],
    stats: { metric: 'average cost per qualified lead', value: '$47' },
    features: [
      'Shipper database targeting',
      'Email marketing automation',
      'LinkedIn outreach campaigns',
      'Landing page optimisation',
      'Lead scoring system',
      'Real-time reporting dashboard'
    ]
  },
  'website-development': {
    title: 'Website Development',
    subtitle: 'Professional Websites That Convert Visitors into Long-Term Contracts',
    description: 'Your website is your digital storefront. We build fast, professional sites that establish credibility and generate leads 24/7.',
    icon: '🌐',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/website_dev_truck_hero_page_bnmjkl.jpg',
    benefits: [
      'Convert 3x more visitors into qualified leads',
      'Showcase your fleet and capabilities professionally',
      'Integrate with TMS and load tracking systems',
      'Mobile-optimised for drivers and dispatchers'
    ],
    process: [
      { title: 'Strategy Session', desc: 'Understand your business goals and target shippers' },
      { title: 'Custom Design', desc: 'Create a unique design that reflects your brand and builds trust' },
      { title: 'Development', desc: 'Build a fast, secure website with trucking-specific features' },
      { title: 'Launch & Optimise', desc: 'Deploy your site and continuously optimise for conversions' }
    ],
    stats: { metric: 'average increase in quote requests', value: '285%' },
    features: [
      'Instant quote calculators',
      'Fleet showcase galleries',
      'Driver recruitment portal',
      'Load tracking integration',
      'Customer portal access',
      'Mobile-responsive design'
    ]
  },
  'ppc-for-haulage': {
    title: 'PPC for Haulage',
    subtitle: 'Immediate Results with Pay-Per-Click Campaigns That Deliver ROI',
    description: 'Get instant visibility and attract high-value shippers with PPC campaigns optimised specifically for the trucking industry.',
    icon: '🎯',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/ppc_haulage_hero_page_qwerty.jpg',
    benefits: [
      'Start generating leads within 48 hours',
      'Target specific lanes and freight types',
      'Only pay for qualified clicks',
      'Scale up or down based on capacity'
    ],
    process: [
      { title: 'Campaign Strategy', desc: 'Develop targeted campaigns for your most profitable lanes' },
      { title: 'Ad Creation', desc: 'Craft compelling ads that speak to shippers\' pain points' },
      { title: 'Landing Page Optimisation', desc: 'Create dedicated pages that convert clicks into leads' },
      { title: 'Continuous Optimisation', desc: 'Daily monitoring and optimisation for maximum ROI' }
    ],
    stats: { metric: 'average return on ad spend', value: '4.2x' },
    features: [
      'Google Ads management',
      'Facebook & LinkedIn ads',
      'Retargeting campaigns',
      'Geo-targeted campaigns',
      'Negative keyword optimisation',
      'A/B testing framework'
    ]
  },
  'analytics-reporting': {
    title: 'Performance Analytics',
    subtitle: 'Data-Driven Insights to Optimise Your Marketing Investment',
    description: 'Make informed decisions with comprehensive analytics that show exactly what\'s working and where to invest for maximum growth.',
    icon: '📊',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/analytics_reporting_hero_page_zxcvbn.jpg',
    benefits: [
      'Track ROI on every marketing dollar spent',
      'Identify your most profitable lead sources',
      'Benchmark against industry competitors',
      'Make data-driven growth decisions'
    ],
    process: [
      { title: 'Setup & Integration', desc: 'Connect all your marketing channels and data sources' },
      { title: 'Custom Dashboards', desc: 'Build dashboards tailored to your KPIs and goals' },
      { title: 'Regular Reporting', desc: 'Receive weekly and monthly performance reports' },
      { title: 'Strategic Recommendations', desc: 'Get actionable insights to improve performance' }
    ],
    stats: { metric: 'average improvement in marketing ROI', value: '67%' },
    features: [
      'Google Analytics setup',
      'Call tracking integration',
      'Custom KPI dashboards',
      'Competitor analysis',
      'Lead source tracking',
      'Revenue attribution'
    ]
  },
  'content-capture': {
    title: 'Content Capture',
    subtitle: 'High-Quality Content That Drives Engagement and Converts Leads',
    description: 'Capture your audience\'s attention and convert leads with professionally crafted content tailored specifically for the trucking industry.',
    icon: '📸',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/content_capture_hero_page_mnbvcx.jpg',
    benefits: [
      'Professional video content showcasing your fleet',
      'Industry-focused blog content that ranks well',
      'Lead magnets that capture qualified prospects',
      'Visual content that builds trust and credibility'
    ],
    process: [
      { title: 'Content Strategy', desc: 'Develop a content plan aligned with your business goals' },
      { title: 'Production Planning', desc: 'Schedule shoots and content creation around your operations' },
      { title: 'Content Creation', desc: 'Produce high-quality videos, photos, and written content' },
      { title: 'Distribution & Optimization', desc: 'Deploy content across channels and optimise for performance' }
    ],
    stats: { metric: 'average increase in engagement', value: '289%' },
    features: [
      'Professional video production',
      'Fleet photography',
      'Blog writing and SEO',
      'Social media content',
      'Lead magnet creation',
      'Infographic design'
    ]
  },
  'social-media-management': {
    title: 'Social Media Management',
    subtitle: 'Build Your Brand and Engage Your Audience Across Social Platforms',
    description: 'Engage your audience and build brand loyalty through targeted social media strategies designed for the trucking industry.',
    icon: '📱',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/social_media_hero_page_qwertyu.jpg',
    benefits: [
      'Build brand awareness in your target markets',
      'Engage with drivers and potential customers',
      'Showcase your company culture and values',
      'Generate leads through social channels'
    ],
    process: [
      { title: 'Social Audit', desc: 'Analyse your current social presence and competitor activity' },
      { title: 'Strategy Development', desc: 'Create a tailored social media strategy for your brand' },
      { title: 'Content Creation', desc: 'Develop engaging content that resonates with your audience' },
      { title: 'Community Management', desc: 'Actively engage with your audience and monitor conversations' }
    ],
    stats: { metric: 'average increase in social engagement', value: '187%' },
    features: [
      'Multi-platform management',
      'Content creation and scheduling',
      'Community engagement',
      'Social media advertising',
      'Performance analytics',
      'Reputation monitoring'
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    subtitle: 'Nurture Leads and Retain Customers with Effective Email Campaigns',
    description: 'Build lasting relationships with prospects and customers through targeted email marketing campaigns that drive results.',
    icon: '📧',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/email_marketing_hero_page_asdfgh.jpg',
    benefits: [
      'Nurture leads through the sales funnel',
      'Maintain relationships with existing customers',
      'Drive repeat business and referrals',
      'Automated sequences that work 24/7'
    ],
    process: [
      { title: 'List Building', desc: 'Develop strategies to grow your email subscriber base' },
      { title: 'Segmentation', desc: 'Segment your audience for targeted messaging' },
      { title: 'Campaign Creation', desc: 'Design and write compelling email campaigns' },
      { title: 'Automation Setup', desc: 'Implement automated workflows for consistent communication' }
    ],
    stats: { metric: 'average increase in email conversions', value: '156%' },
    features: [
      'Email design and copywriting',
      'Marketing automation',
      'List segmentation',
      'Performance tracking',
      'A/B testing',
      'Deliverability optimization'
    ]
  },
  'digital-reputation-management': {
    title: 'Digital Reputation Management',
    subtitle: 'Build and Maintain a Positive Online Reputation for Your Business',
    description: 'Protect and enhance your trucking company\'s online reputation with proactive monitoring and strategic response management.',
    icon: '🛡️',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/NH-Trans-W900SAR-Jan-copy_nstogz.jpg',
    benefits: [
      'Monitor your online reputation 24/7',
      'Respond to reviews and feedback professionally',
      'Build trust with potential customers',
      'Protect your brand from negative publicity'
    ],
    process: [
      { title: 'Reputation Audit', desc: 'Assess your current online reputation across all platforms' },
      { title: 'Monitoring Setup', desc: 'Implement tools to track mentions and reviews' },
      { title: 'Response Strategy', desc: 'Develop protocols for responding to feedback' },
      { title: 'Reputation Building', desc: 'Proactively build positive online presence' }
    ],
    stats: { metric: 'average improvement in online ratings', value: '2.3pts' },
    features: [
      'Review monitoring and response',
      'Brand mention tracking',
      'Crisis response planning',
      'Positive review generation',
      'Social media monitoring',
      'Reputation reporting'
    ]
  }
};