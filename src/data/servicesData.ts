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

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceInfo {
  title: string
  subtitle: string
  description: string
  heroImageUrl: string // Full URL for the hero image
  featureImageUrl?: string
  secondaryImageUrl?: string
  benefits: string[]
  process: ServiceProcess[]
  stats: ServiceStats
  features: string[]
  faqs: ServiceFAQ[] // New FAQ property
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
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/dawsons-scaled_yx9ewf.jpg',
    featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/dawsons-scaled_yx9ewf.jpg',
    secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/NH-Trans-W900SAR-Jan-copy_nstogz.jpg',
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
    ],
    faqs: [
      {
        question: "How long does trucking SEO take to show results?",
        answer: "Most trucking companies start seeing initial ranking improvements within 60-90 days, with significant lead increases by month 4-6. SEO is a long-term strategy that builds momentum over time."
      },
      {
        question: "Can you help us rank for specific trucking routes?",
        answer: "Absolutely! We specialize in route-based SEO, helping you rank for searches like 'trucking from Chicago to Atlanta' or 'freight shipping to California'. This targets shippers with specific lane needs."
      },
      {
        question: "What if we operate in multiple states?",
        answer: "We optimize for multi-state operations by creating location-specific pages and local SEO strategies for each terminal or major operating area, ensuring you're found wherever you operate."
      }
    ]
  },
  'logistics-lead-generation': {
    title: 'Logistics Lead Generation',
    subtitle: 'Fill Your Pipeline with Qualified Shippers Ready to Move',
    description: 'Stop chasing loads and start attracting premium shippers with our proven lead generation system built exclusively for trucking companies.',
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
    ],
    faqs: [
      {
        question: "How do you ensure leads are qualified for our specific services?",
        answer: "We create detailed shipper profiles based on your preferred lanes, freight types, and volume requirements. Our qualification process includes shipping frequency, budget verification, and decision-maker identification before leads reach you."
      },
      {
        question: "What's the difference between this and load boards?",
        answer: "Load boards are transactional and competitive. Our lead generation creates direct relationships with shippers who need consistent capacity, leading to better rates, regular lanes, and long-term contracts rather than one-off loads."
      },
      {
        question: "How quickly can we expect to see qualified leads?",
        answer: "Most trucking companies start receiving qualified leads within 2-3 weeks of campaign launch. We typically generate 50-200 leads per month, depending on your capacity and target market size."
      }
    ]
  },
  'website-development': {
    title: 'Website Development',
    subtitle: 'Professional Websites That Convert Visitors into Long-Term Contracts',
    description: 'Your website is your digital storefront. We build fast, professional sites that establish credibility and generate leads 24/7.',
    heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229026/TCTC-Web-Mockup-scaled_jhi0ct.jpg',
    featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/Untitled-1_ksb9pg.jpg',
    secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748383797/Screenshot_2025-05-22_at_10.55.02_am_rvcx9m.png',
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
    ],
    faqs: [
      {
        question: "How long does it take to build a trucking website?",
        answer: "Most trucking websites take 4-8 weeks from start to launch, depending on complexity and integrations. We work around your schedule and keep you involved throughout the process to ensure the site meets your exact needs."
      },
      {
        question: "Can you integrate our website with our existing TMS system?",
        answer: "Yes, we specialize in integrating trucking websites with popular TMS platforms, load tracking systems, and customer portals. This allows real-time shipment tracking and seamless customer communication."
      },
      {
        question: "Will our website work well on mobile devices?",
        answer: "Absolutely. All our trucking websites are mobile-first, ensuring they work perfectly on smartphones and tablets. This is crucial since many shippers and drivers access websites from mobile devices."
      }
    ]
  },
  'ppc-for-haulage': {
    title: 'PPC for Haulage',
    subtitle: 'Immediate Results with Pay-Per-Click Campaigns That Deliver ROI',
    description: 'Get instant visibility and attract high-value shippers with PPC campaigns optimised specifically for the trucking industry.',
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
    ],
    faqs: [
      {
        question: "How quickly can PPC campaigns start generating leads?",
        answer: "PPC campaigns can start generating leads within 24-48 hours of launch. Unlike SEO, paid ads provide immediate visibility, making them perfect for trucking companies that need leads quickly or want to test new markets."
      },
      {
        question: "What's a good budget to start with for trucking PPC?",
        answer: "Most successful trucking PPC campaigns start with $2,000-5,000 per month, depending on your target markets and competition. We optimize spending to focus on your most profitable lanes and freight types for maximum ROI."
      },
      {
        question: "Can you target ads to specific shipping lanes?",
        answer: "Yes! We create highly targeted campaigns for specific routes like 'Chicago to Los Angeles trucking' or 'Northeast freight shipping'. This ensures your ads reach shippers with loads on your preferred lanes."
      }
    ]
  },
  'analytics-reporting': {
    title: 'Performance Analytics',
    subtitle: 'Data-Driven Insights to Optimise Your Marketing Investment',
    description: 'Make informed decisions with comprehensive analytics that show exactly what\'s working and where to invest for maximum growth.',
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
    ],
    faqs: [
      {
        question: "What metrics should trucking companies track?",
        answer: "Key metrics include cost per lead, lead-to-customer conversion rate, customer acquisition cost, lifetime value, and ROI by marketing channel. We also track trucking-specific metrics like leads by lane and freight type."
      },
      {
        question: "How often will we receive performance reports?",
        answer: "You'll receive automated weekly performance summaries and comprehensive monthly reports. Plus, you have 24/7 access to real-time dashboards showing your marketing performance and lead generation metrics."
      },
      {
        question: "Can you track phone calls from our marketing?",
        answer: "Absolutely. We implement call tracking to monitor which marketing channels generate phone inquiries. This is crucial for trucking companies since many shippers prefer to call rather than fill out forms."
      }
    ]
  },
  'content-capture': {
    title: 'Content Capture',
    subtitle: 'High-Quality Content That Drives Engagement and Converts Leads',
    description: 'Capture your audience\'s attention and convert leads with professionally crafted content tailored specifically for the trucking industry.',
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
    ],
    faqs: [
      {
        question: "Do you film at our facilities and with our trucks?",
        answer: "Yes, we come to your location to film your actual fleet, drivers, and operations. This authentic content builds more trust than stock footage and showcases your real capabilities to potential customers."
      },
      {
        question: "What types of content work best for trucking companies?",
        answer: "Driver testimonials, fleet showcase videos, behind-the-scenes operations content, and educational content about your services perform best. We also create case studies and customer success stories that build credibility."
      },
      {
        question: "How do you minimize disruption to our operations?",
        answer: "We work around your schedule and operations. Most filming can be done during routine activities without disrupting workflows. We're experienced in working around active trucking operations safely and efficiently."
      }
    ]
  },
  'social-media-management': {
    title: 'Social Media Management',
    subtitle: 'Build Your Brand and Engage Your Audience Across Social Platforms',
    description: 'Engage your audience and build brand loyalty through targeted social media strategies designed for the trucking industry.',
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
    ],
    faqs: [
      {
        question: "Which social media platforms work best for trucking companies?",
        answer: "LinkedIn is excellent for B2B lead generation and connecting with shippers. Facebook works well for driver recruitment and community building. Instagram showcases your fleet visually. We recommend focusing on 2-3 platforms initially."
      },
      {
        question: "How often should trucking companies post on social media?",
        answer: "We typically recommend 3-5 posts per week on primary platforms, with daily engagement and monitoring. Consistency is more important than frequency - we create sustainable posting schedules that maintain quality content."
      },
      {
        question: "Can social media actually generate leads for trucking companies?",
        answer: "Absolutely! LinkedIn is particularly effective for B2B lead generation, while Facebook and Instagram build brand awareness that supports other marketing efforts. We've seen trucking companies generate significant leads through strategic social media marketing."
      }
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    subtitle: 'Nurture Leads and Retain Customers with Effective Email Campaigns',
    description: 'Build lasting relationships with prospects and customers through targeted email marketing campaigns that drive results.',
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
    ],
    faqs: [
      {
        question: "How do we build an email list of potential shippers?",
        answer: "We use lead magnets like freight calculators, shipping guides, and market reports to attract shippers. We also implement opt-in forms on your website and create valuable content that encourages subscriptions from your target audience."
      },
      {
        question: "What types of emails work best for trucking companies?",
        answer: "Educational content about shipping best practices, market updates, case studies, and service spotlights perform well. We also create automated sequences for new leads and regular newsletters that keep you top-of-mind with prospects."
      },
      {
        question: "How do you ensure our emails don't end up in spam folders?",
        answer: "We follow email deliverability best practices including proper authentication, clean list management, engaging content, and monitoring sender reputation. Our goal is to maintain high deliverability rates and inbox placement."
      }
    ]
  },
  'digital-reputation-management': {
    title: 'Digital Reputation Management',
    subtitle: 'Build and Maintain a Positive Online Reputation for Your Business',
    description: 'Protect and enhance your trucking company\'s online reputation with proactive monitoring and strategic response management.',
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
    ],
    faqs: [
      {
        question: "Why is online reputation important for trucking companies?",
        answer: "Shippers research trucking companies online before making decisions. A strong online reputation builds trust, differentiates you from competitors, and can significantly impact your ability to win new business and attract quality drivers."
      },
      {
        question: "How do you handle negative reviews or complaints?",
        answer: "We respond professionally and promptly to address concerns, demonstrate your commitment to customer service, and work to resolve issues offline when possible. Our goal is to turn negative experiences into positive outcomes."
      },
      {
        question: "Can you help us get more positive reviews?",
        answer: "Yes, we implement review generation strategies that encourage satisfied customers to leave positive feedback. This includes automated follow-up emails, review request campaigns, and making it easy for happy customers to share their experiences."
      }
    ]
  }
};