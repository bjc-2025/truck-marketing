// servicesData.ts

// Import all Lucide icons you plan to use
import {
  LucideIcon, Calculator, Truck, Users, MapPin, Shield, Smartphone,
  Search, Target, DollarSign, Globe, BarChart, TrendingUp, Database,
  Mail, Phone, FileText, Camera, Video, Share2, Calendar, MessageCircle,
  Heart, Star, AlertCircle, CheckCircle
} from "lucide-react";

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

export interface ServiceFeature {
  // Change icon type to string (the name of the Lucide icon)
  icon: string
  title: string
  description: string
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
  features: ServiceFeature[] // Updated to use ServiceFeature type with string icon
  faqs: ServiceFAQ[]
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


const providedImageUrls = [
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389453/Horne3_v6x0pw.jpg', // Index 0
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389449/Horne1_csrjjd.jpg', // Index 1
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389447/Horne2_zgrxwo.jpg', // Index 2
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389444/DSC_4954-Enhanced-NR_irlbhe.jpg', // Index 3
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389444/DSC_4954-Enhanced-NR_irlbhe.jpg', // Index 4
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389440/JSC3_a4p3mw.jpg', // Index 5
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389438/JSC4_mrwabi.jpg', // Index 6
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389438/JSC4_mrwabi.jpg', // Index 7
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389434/JSC5_btypxj.jpg', // Index 8
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389429/JSC2_r38zet.jpg', // Index 9
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389426/JSC1_cv6yii.jpg', // Index 10
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389426/JSC1_cv6yii.jpg', // Index 11
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389419/Rogerias1_t0bjxf.jpg', // Index 12
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389403/Willets5_v5htnv.jpg', // Index 13
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389402/Willets3_zmgzsf.jpg', // Index 14
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389402/Willets4_a28ia0.jpg', // Index 15
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389401/Willets1_ijbx19.jpg', // Index 16
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389401/Willets1_ijbx19.jpg', // Index 17
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389390/Sam_Armatage1_kwzl3s.jpg', // Index 18
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389382/Sam_Armatage4_prgz4n.jpg', // Index 19
  'https://res.cloudinary.com/dvwug9180/Centurion4_ngmhvd.jpg', // Index 20 - Typo fixed in URL
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748388871/Centurion6_ogd9uo.jpg', // Index 21
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748388665/TeamPhotosWeb_x647go.jpg', // Index 22
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748388664/Kearneytrasnport1_ast3bj.jpg', // Index 23
  'https://res.cloudinary.com/dvwug91mb/image/upload/v1748388204/044A2503-Enhanced-NR-Edit_LR_hdkywy.jpg', // Index 24
];

let imageUrlIndex = 0;

// Helper function to get the next image URL, wrapping around if needed
const getNextImageUrl = () => {
  const url = providedImageUrls[imageUrlIndex % providedImageUrls.length];
  imageUrlIndex++;
  return url;
};

// Mapping of icon names (strings) to Lucide icon components
// This mapping should be used in your Client Component where you render the icons
export const LucideIconMap: Record<string, LucideIcon> = {
  Calculator: Calculator,
  Truck: Truck,
  Users: Users,
  MapPin: MapPin,
  Shield: Shield,
  Smartphone: Smartphone,
  Search: Search,
  Target: Target,
  DollarSign: DollarSign,
  Globe: Globe,
  BarChart: BarChart,
  TrendingUp: TrendingUp,
  Database: Database,
  Mail: Mail,
  Phone: Phone,
  FileText: FileText,
  Camera: Camera,
  Video: Video,
  Share2: Share2,
  Calendar: Calendar,
  MessageCircle: MessageCircle,
  Heart: Heart,
  Star: Star,
  AlertCircle: AlertCircle,
  CheckCircle: CheckCircle,
};

// Service data configuration with full URLs and string icon names
export const serviceData: Record<ServiceSlug, ServiceInfo> = {
  'trucking-seo': {
    title: 'Trucking SEO',
    subtitle: 'Get Found by Companies Actively Searching for Transport Services',
    description: 'Dominate search results and attract high-quality leads with SEO strategies specifically designed for the trucking and logistics industry.',
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Search', // Changed from Search to 'Search'
        title: 'Route-Based Keyword Targeting',
        description: 'Target specific shipping lanes and routes with geo-optimized keywords that capture high-intent searches from shippers looking for carriers on your lanes.'
      },
      {
        icon: 'MapPin', // Changed from MapPin to 'MapPin'
        title: 'Google Business Profile Optimization',
        description: 'Claim and optimize your GBP listings for every terminal and service area, ensuring you appear in local searches and Google Maps results.'
      },
      {
        icon: 'Globe', // Changed from Globe to 'Globe'
        title: 'Industry-Specific Link Building',
        description: 'Build authority with high-quality backlinks from logistics directories, industry publications, and partner websites to boost your domain ranking.'
      },
      {
        icon: 'Smartphone', // Changed from Smartphone to 'Smartphone'
        title: 'Mobile-First Optimization',
        description: 'Ensure your site loads lightning-fast on mobile devices where 60% of trucking searches originate, improving both rankings and user experience.'
      },
      {
        icon: 'Database', // Changed from Database to 'Database'
        title: 'Load Board Integration',
        description: 'Optimize your presence on major load boards and integrate SEO strategies that drive traffic from these platforms to your website.'
      },
      {
        icon: 'MessageCircle', // Changed from MessageCircle to 'MessageCircle'
        title: 'Voice Search Optimization',
        description: 'Capture voice searches like "trucking companies near me" by optimizing for natural language queries and featured snippets.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Database', // Changed from Database to 'Database'
        title: 'Shipper Database Targeting',
        description: 'Access our proprietary database of 50,000+ verified shippers, filtered by industry, location, and shipping volume to match your ideal customer profile.'
      },
      {
        icon: 'Mail', // Changed from Mail to 'Mail'
        title: 'Email Marketing Automation',
        description: 'Deploy sophisticated email campaigns with personalized messaging, automated follow-ups, and behavior-triggered sequences that nurture leads effectively.'
      },
      {
        icon: 'Users', // Changed from Users to 'Users'
        title: 'LinkedIn Outreach Campaigns',
        description: 'Connect with decision-makers through targeted LinkedIn campaigns, leveraging advanced search filters and personalized connection strategies.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Landing Page Optimization',
        description: 'Create high-converting landing pages tailored to specific industries and shipping needs, with A/B testing to maximize conversion rates.'
      },
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'Lead Scoring System',
        description: 'Automatically score and prioritize leads based on shipping frequency, volume, lane compatibility, and engagement level to focus on the best opportunities.'
      },
      {
        icon: 'TrendingUp', // Changed from TrendingUp to 'TrendingUp'
        title: 'Real-Time Reporting Dashboard',
        description: 'Track campaign performance, lead quality, and ROI with our comprehensive dashboard that provides actionable insights and optimization recommendations.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Calculator', // Changed from Calculator to 'Calculator'
        title: 'Instant Quote Calculators',
        description: 'Automated pricing tools that provide real-time shipping quotes based on distance, weight, and cargo type. Your customers can get instant estimates 24/7, reducing phone calls and speeding up the booking process.'
      },
      {
        icon: 'Truck', // Changed from Truck to 'Truck'
        title: 'Fleet Showcase Galleries',
        description: 'Professional photo galleries displaying your trucks, trailers, and equipment with detailed specifications. High-quality image optimization ensures fast loading while showcasing your fleet\'s capabilities.'
      },
      {
        icon: 'Users', // Changed from Users to 'Users'
        title: 'Driver Recruitment Portal',
        description: 'Comprehensive recruitment section featuring job postings, benefits information, and streamlined application forms. Includes driver qualification requirements and testimonials from current drivers.'
      },
      {
        icon: 'MapPin', // Changed from MapPin to 'MapPin'
        title: 'Load Tracking Integration',
        description: 'Real-time shipment tracking system that connects with your dispatch software and GPS systems. Customers receive automatic updates via SMS and email, reducing customer service calls.'
      },
      {
        icon: 'Shield', // Changed from Shield to 'Shield'
        title: 'Customer Portal Access',
        description: 'Secure, password-protected area where clients can access invoices, shipping history, and account information. Features include online payment processing and direct communication with dispatch.'
      },
      {
        icon: 'Smartphone', // Changed from Smartphone to 'Smartphone'
        title: 'Mobile-Responsive Design',
        description: 'Fully optimized website that adapts seamlessly to smartphones, tablets, and desktop computers. Touch-friendly navigation and fast loading times ensure accessibility across all devices.'
      }
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
        answer: "Absolutely. All our trucking websites are mobile-first, ensuring they work perfectly on smartphones and tablets. This is crucial since many shippers access websites from mobile devices."
      }
    ]
  },
  'ppc-for-haulage': {
    title: 'PPC for Haulage',
    subtitle: 'Immediate Results with Pay-Per-Click Campaigns That Deliver ROI',
    description: 'Get instant visibility and attract high-value shippers with PPC campaigns optimised specifically for the trucking industry.',
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Search', // Changed from Search to 'Search'
        title: 'Google Ads Management',
        description: 'Expert management of Google Search and Display campaigns targeting high-intent keywords and competitor traffic to capture shippers at the moment they need trucking services.'
      },
      {
        icon: 'Users', // Changed from Users to 'Users'
        title: 'Facebook & LinkedIn Ads',
        description: 'B2B-focused social media advertising that targets logistics managers and shipping decision-makers based on job title, industry, and company size for maximum relevance.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Retargeting Campaigns',
        description: 'Recapture website visitors who didn\'t convert with strategic retargeting ads across Google, Facebook, and LinkedIn to stay top-of-mind until they\'re ready to ship.'
      },
      {
        icon: 'MapPin', // Changed from MapPin to 'MapPin'
        title: 'Geo-Targeted Campaigns',
        description: 'Location-based campaigns that target specific shipping lanes and geographic markets where you have capacity, ensuring every click has potential value.'
      },
      {
        icon: 'FileText', // Changed from FileText to 'FileText'
        title: 'Negative Keyword Optimization',
        description: 'Continuously refine campaigns by excluding irrelevant searches, saving budget and improving lead quality by focusing only on commercial intent keywords.'
      },
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'A/B Testing Framework',
        description: 'Systematic testing of ad copy, landing pages, and targeting parameters to continuously improve performance and maximize your return on investment.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'Google Analytics Setup',
        description: 'Complete Google Analytics 4 implementation with custom event tracking, conversion goals, and ecommerce tracking specifically configured for trucking lead generation.'
      },
      {
        icon: 'Phone', // Changed from Phone to 'Phone'
        title: 'Call Tracking Integration',
        description: 'Track and record phone calls from different marketing channels with dynamic number insertion, allowing you to measure which campaigns drive the most valuable phone leads.'
      },
      {
        icon: 'TrendingUp', // Changed from TrendingUp to 'TrendingUp'
        title: 'Custom KPI Dashboards',
        description: 'Real-time dashboards showing your most important metrics including cost per lead, conversion rates, and ROI by channel, all in one easy-to-understand interface.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Competitor Analysis',
        description: 'Monitor competitor marketing strategies, keyword rankings, and online presence to identify opportunities and stay ahead in your market.'
      },
      {
        icon: 'Database', // Changed from Database to 'Database'
        title: 'Lead Source Tracking',
        description: 'Track every lead from first touch to closed deal, understanding which marketing channels and campaigns generate the most profitable customers.'
      },
      {
        icon: 'DollarSign', // Changed from DollarSign to 'DollarSign'
        title: 'Revenue Attribution',
        description: 'Connect marketing efforts directly to revenue, showing the true value of each campaign and helping you invest in the channels that drive real business growth.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Video', // Changed from Video to 'Video'
        title: 'Professional Video Production',
        description: 'High-quality video content showcasing your fleet, facilities, and team. Includes drone footage, driver testimonials, and day-in-the-life content that builds trust with shippers.'
      },
      {
        icon: 'Camera', // Changed from Camera to 'Camera'
        title: 'Fleet Photography',
        description: 'Professional photography of your trucks, trailers, and facilities. High-resolution images optimized for web use that showcase your equipment and professionalism.'
      },
      {
        icon: 'FileText', // Changed from FileText to 'FileText'
        title: 'Blog Writing and SEO',
        description: 'Industry-specific blog content that positions you as a thought leader while improving SEO rankings. Topics include logistics trends, shipping tips, and regulatory updates.'
      },
      {
        icon: 'Share2', // Changed from Share2 to 'Share2'
        title: 'Social Media Content',
        description: 'Engaging social media posts, stories, and reels designed to build brand awareness and engage with both shippers and drivers across all major platforms.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Lead Magnet Creation',
        description: 'Valuable downloadable content like shipping guides, rate calculators, and industry reports that capture leads while providing genuine value to prospects.'
      },
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'Infographic Design',
        description: 'Visual representations of industry data, shipping processes, and company capabilities that simplify complex information and encourage social sharing.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Globe', // Changed from Globe to 'Globe'
        title: 'Multi-Platform Management',
        description: 'Strategic management across LinkedIn, Facebook, Instagram, and Twitter, with platform-specific content that maximizes engagement on each channel.'
      },
      {
        icon: 'Calendar', // Changed from Calendar to 'Calendar'
        title: 'Content Creation and Scheduling',
        description: 'Regular creation of engaging posts, stories, and videos with strategic scheduling to reach your audience when they\'re most active online.'
      },
      {
        icon: 'MessageCircle', // Changed from MessageCircle to 'MessageCircle'
        title: 'Community Engagement',
        description: 'Active monitoring and response to comments, messages, and mentions to build relationships and maintain a positive brand presence across all platforms.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Social Media Advertising',
        description: 'Targeted ad campaigns on social platforms to reach specific demographics, from shippers needing capacity to qualified drivers looking for opportunities.'
      },
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'Performance Analytics',
        description: 'Detailed monthly reports showing growth, engagement rates, and ROI from social media efforts with actionable insights for continuous improvement.'
      },
      {
        icon: 'Shield', // Changed from Shield to 'Shield'
        title: 'Reputation Monitoring',
        description: 'Real-time monitoring of brand mentions and sentiment across social platforms, allowing quick response to both positive feedback and potential issues.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Mail', // Changed from Mail to 'Mail'
        title: 'Email Design and Copywriting',
        description: 'Professional email templates and compelling copy that speaks directly to shippers\' needs, with mobile-responsive designs that look great on any device.'
      },
      {
        icon: 'Target', // Changed from Target to 'Target'
        title: 'Marketing Automation',
        description: 'Sophisticated automation workflows that nurture leads based on their behavior, sending the right message at the right time to move them toward conversion.'
      },
      {
        icon: 'Users', // Changed from Users to 'Users'
        title: 'List Segmentation',
        description: 'Advanced segmentation strategies that group contacts by industry, shipping needs, and engagement level for highly targeted, relevant messaging.'
      },
      {
        icon: 'BarChart', // Changed from BarChart to 'BarChart'
        title: 'Performance Tracking',
        description: 'Comprehensive analytics showing open rates, click rates, and conversions by campaign, with insights to continuously improve performance.'
      },
      {
        icon: 'CheckCircle', // Changed from CheckCircle to 'CheckCircle'
        title: 'A/B Testing',
        description: 'Systematic testing of subject lines, content, and send times to optimize every element of your email campaigns for maximum engagement.'
      },
      {
        icon: 'Shield', // Changed from Shield to 'Shield'
        title: 'Deliverability Optimization',
        description: 'Technical optimization to ensure your emails reach the inbox, including authentication setup, list hygiene, and reputation monitoring.'
      }
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
    heroImageUrl: getNextImageUrl(),
    featureImageUrl: getNextImageUrl(),
    secondaryImageUrl: getNextImageUrl(),
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
      {
        icon: 'Star', // Changed from Star to 'Star'
        title: 'Review Monitoring and Response',
        description: 'Monitor reviews across Google, Facebook, and industry-specific platforms with professional responses that demonstrate your commitment to customer satisfaction.'
      },
      {
        icon: 'Globe', // Changed from Globe to 'Globe'
        title: 'Brand Mention Tracking',
        description: 'Real-time alerts when your company is mentioned online, allowing quick response to both positive recognition and potential issues before they escalate.'
      },
      {
        icon: 'AlertCircle', // Changed from AlertCircle to 'AlertCircle'
        title: 'Crisis Response Planning',
        description: 'Proactive crisis management protocols and rapid response strategies to protect your reputation during challenging situations or negative events.'
      },
      {
        icon: 'Heart', // Changed from Heart to 'Heart'
        title: 'Positive Review Generation',
        description: 'Strategic campaigns to encourage satisfied customers to share their experiences, building a strong foundation of positive reviews across key platforms.'
      },
      {
        icon: 'MessageCircle', // Changed from MessageCircle to 'MessageCircle'
        title: 'Social Media Monitoring',
        description: 'Track and respond to social media mentions and conversations about your brand, maintaining a positive presence and addressing concerns promptly.'
      },
      {
        icon: 'FileText', // Changed from FileText to 'FileText'
        title: 'Reputation Reporting',
        description: 'Monthly reports showing review trends, sentiment analysis, and reputation scores with recommendations for continuous improvement.'
      }
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