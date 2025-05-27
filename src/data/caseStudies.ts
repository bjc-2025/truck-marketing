// TypeScript Interface for Case Studies
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  industry: string;
  turnover: string;
  status: 'Ongoing' | 'Completed';
  heroImage: string; // Cloudinary URL
  imageCarousel: string[]; // Array of Cloudinary URLs
  masonryGallery: string[]; // Array of Cloudinary URLs for bottom gallery
  
  // Services provided
  services: string[];
  
  // Case study content
  overview: string;
  challenges: Challenge[];
  approach: ApproachSection[];
  results: Result[];
  
  // Call to action
  callToAction: CallToAction;
  
  // Metadata
  createdAt: string;
  updatedAt: string;
  featured: boolean;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
}

export interface ApproachSection {
  id: number;
  title: string;
  description: string;
  bullets?: string[];
}

export interface Result {
  id: number;
  title: string;
  description: string;
  metrics?: string;
}

export interface CallToAction {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

// Case Studies Data
export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-001',
    slug: 'twincity-truck-centre',
    title: 'TwinCity Truck Centre',
    subtitle: 'Everything a truck dealership should be!',
    company: 'TwinCity Truck Centre',
    industry: 'Automotive - Commercial Vehicles',
    turnover: 'Ongoing',
    status: 'Ongoing',
    heroImage: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229026/TCTC-Web-Phone-Mockup-copy-scaled_g2mbsi.jpg', // Cloudinary URL placeholder
    imageCarousel: [
      '', // Cloudinary URL - Truck showroom
      '', // Cloudinary URL - Fleet display
      '', // Cloudinary URL - Service bay
      '', // Cloudinary URL - Team photo
      ''  // Cloudinary URL - Dealership exterior
    ],
    masonryGallery: [
      '', // Cloudinary URL - Kenworth trucks
      '', // Cloudinary URL - DAF vehicles
      '', // Cloudinary URL - Parts department
      '', // Cloudinary URL - Customer service area
      '', // Cloudinary URL - Workshop
      '', // Cloudinary URL - Branded materials
      '', // Cloudinary URL - Digital assets
      '', // Cloudinary URL - Marketing materials
    ],
    services: [
      'Brand Strategy',
      'Web Design',
      'Digital Advertising',
      'Social Media Management',
      'Direct Communications'
    ],
    overview: 'TwinCity Truck Centre is a leading Kenworth & DAF dealership in New South Wales, known for providing a wide range of high-quality trucks and exceptional customer service. Despite an established reputation in the industry, TwinCity Truck Centre wanted to strengthen their brand presence, modernise their marketing efforts, and connect more effectively with both current and prospective customers.',
    challenges: [
      {
        id: 1,
        title: 'Fragmented Brand Identity',
        description: 'TwinCity Truck Centre\'s existing branding lacked a cohesive look and feel across various touchpoints—print collateral, online channels, and on-site signage.'
      },
      {
        id: 2,
        title: 'Outdated Online Presence',
        description: 'Their website did not effectively showcase new and used inventory or provide a smooth user experience for customers browsing trucks, parts, and services.'
      },
      {
        id: 3,
        title: 'Limited Digital Reach',
        description: 'While the dealership was well-known locally, they wanted to expand their visibility to a broader audience, particularly in online channels where many potential customers begin their purchasing journey.'
      },
      {
        id: 4,
        title: 'Inefficient Customer Communications',
        description: 'TwinCity Truck Centre needed a streamlined way to keep in touch with loyal and potential customers, from service reminders to promotional offers.'
      }
    ],
    approach: [
      {
        id: 1,
        title: 'Brand Strategy & Identity Refresh',
        description: 'Conducted in-depth market research and stakeholder interviews to clarify TwinCity Truck Centre\'s unique value proposition.',
        bullets: [
          'Developed a modernised visual identity, tone of voice, and brand guidelines',
          'Resonated with both Kenworth & DAF\'s heritage and TwinCity\'s forward-thinking approach'
        ]
      },
      {
        id: 2,
        title: 'Marketing Strategy & Positioning',
        description: 'Crafted messaging that underscored quality, reliability, and the dealership\'s commitment to excellent customer service.',
        bullets: [
          'Outlined an integrated marketing plan focusing on consistent messaging',
          'Focused across social media, search engines, and email marketing channels'
        ]
      },
      {
        id: 3,
        title: 'Branding & Design',
        description: 'Created cohesive print and digital assets, including brochures, business cards, on-site signage, and branded merchandise.',
        bullets: [
          'Ensured all new materials aligned with the updated brand identity',
          'Maintained a professional yet approachable aesthetic'
        ]
      },
      {
        id: 4,
        title: 'Web Development',
        description: 'Built a user-friendly, mobile-responsive website that featured an easy-to-navigate inventory section, service bookings, and clear calls to action.',
        bullets: [
          'Optimised site performance and SEO to increase organic traffic',
          'Improved conversion rates through better user experience'
        ]
      },
      {
        id: 5,
        title: 'Video & Photography',
        description: 'Produced high-impact video tours of TwinCity\'s showroom, highlighting truck features and customer testimonials.',
        bullets: [
          'Coordinated professional photo shoots to capture vehicles, team, and facilities',
          'Enhanced visual appeal across digital platforms'
        ]
      },
      {
        id: 6,
        title: 'Digital Advertising',
        description: 'Launched targeted Google Ads and social media campaigns to reach potential buyers across NSW and beyond.',
        bullets: [
          'Monitored and refined campaigns regularly',
          'Ensured cost-effective lead generation and high-quality conversions'
        ]
      },
      {
        id: 7,
        title: 'Direct Communications (Email & SMS)',
        description: 'Implemented automated email and SMS campaigns, including maintenance reminders, dealership updates, and special promotions.',
        bullets: [
          'Customised messaging for distinct customer segments (fleets vs. owner-operators)',
          'Improved open and click-through rates'
        ]
      }
    ],
    results: [
      {
        id: 1,
        title: 'Elevated Brand Visibility',
        description: 'A cohesive brand identity and unified marketing efforts led to greater recognition in both the local market and online channels.'
      },
      {
        id: 2,
        title: 'Increased Online Inquiries & Sales Leads',
        description: 'The new website\'s intuitive design and targeted digital ad campaigns yielded a notable uptick in high-quality leads, ultimately increasing truck sales.'
      },
      {
        id: 3,
        title: 'Enhanced Customer Engagement',
        description: 'Improved communication strategies—especially direct email and SMS—led to higher service bookings, positive feedback, and stronger customer loyalty.'
      },
      {
        id: 4,
        title: 'Stronger Digital Footprint',
        description: 'Optimised SEO, social media presence, and pay-per-click advertising not only broadened the reach but also established TwinCity Truck Centre as an authority in the trucking industry.'
      }
    ],
    callToAction: {
      title: 'Ready to Transform Your Dealership?',
      description: 'See how we can elevate your brand presence and drive more qualified leads to your business.',
      primaryButton: {
        text: 'Start Your Project',
        link: '/contact'
      },
      secondaryButton: {
        text: 'View Our Services',
        link: '/services'
      }
    },
    createdAt: '2024-01-15',
    updatedAt: '2024-12-01',
    featured: true
  },
  
  {
    id: 'cs-002',
    slug: 'killen-trucking-co',
    title: 'Killen Trucking Co',
    subtitle: 'Delivering excellence across regional and metropolitan areas',
    company: 'Killen Trucking Co',
    industry: 'Transport & Logistics',
    turnover: 'Ongoing',
    status: 'Ongoing',
    heroImage: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Ref-1_n7fdve.jpg', // Cloudinary URL placeholder
    imageCarousel: [
      '', // Cloudinary URL - Fleet in action
      '', // Cloudinary URL - Team portraits
      '', // Cloudinary URL - Facility operations
      '', // Cloudinary URL - Truck loading
      ''  // Cloudinary URL - On-the-road shots
    ],
    masonryGallery: [
      '', // Cloudinary URL - Driver interviews
      '', // Cloudinary URL - Behind-the-scenes footage
      '', // Cloudinary URL - Fleet lineup
      '', // Cloudinary URL - Logistics operations
      '', // Cloudinary URL - Modern fleet
      '', // Cloudinary URL - Professional team
      '', // Cloudinary URL - Website screenshots
      '', // Cloudinary URL - Brand materials
    ],
    services: [
      'Web Design',
      'Photography & Video'
    ],
    overview: 'Killen Trucking Co. is a well-established transport and logistics company committed to delivering goods safely and efficiently across regional and metropolitan areas. While their reputation in the industry was solid, they sought a refreshed digital presence and high-quality visual assets that would resonate with modern audiences and better showcase their capabilities.',
    challenges: [
      {
        id: 1,
        title: 'Outdated Online Presence',
        description: 'Killen Trucking Co. needed a new website that would align with their evolving brand identity and showcase their services more effectively.'
      },
      {
        id: 2,
        title: 'Limited Visual Assets',
        description: 'Existing photos and videos did not accurately convey the scale of their operations or highlight the professionalism of their team.'
      },
      {
        id: 3,
        title: 'Increasing Competition',
        description: 'The company needed to stand out in a crowded market by highlighting their reliability, fleet capabilities, and customer-centric approach.'
      }
    ],
    approach: [
      {
        id: 1,
        title: 'Photography',
        description: 'Conducted on-site photo shoots capturing the fleet in action, the facility\'s day-to-day operations, and team portraits.',
        bullets: [
          'Focused on high-quality, candid images showcasing company reliability',
          'Highlighted modern fleet and dedicated workforce'
        ]
      },
      {
        id: 2,
        title: 'Video Production',
        description: 'Created a dynamic brand video featuring driver interviews, behind-the-scenes footage, and on-the-road shots.',
        bullets: [
          'Highlighted the scale and efficiency of logistics processes',
          'Made content engaging and informative for current and potential clients'
        ]
      },
      {
        id: 3,
        title: 'Web Design & Development',
        description: 'Designed a modern, mobile-responsive website that prominently displayed new visual content.',
        bullets: [
          'Structured site with clear service pages and calls to action',
          'User-friendly interface for fleet information and contact forms',
          'Implemented best-practice SEO elements to improve visibility'
        ]
      }
    ],
    results: [
      {
        id: 1,
        title: 'Elevated Brand Image',
        description: 'The new photography and video content presented a professional, forward-thinking image, helping Killens Trucking Co. better reflect its true capabilities and commitment to quality.'
      },
      {
        id: 2,
        title: 'Enhanced Online Visibility',
        description: 'The redesigned website, complemented by SEO optimisations, saw a spike in web traffic and lead inquiries, connecting them with more potential clients.'
      },
      {
        id: 3,
        title: 'Improved Customer Engagement',
        description: 'High-quality visual storytelling—both on the website and shared via social media—generated positive feedback from existing customers and reinforced the company\'s industry reputation.'
      },
      {
        id: 4,
        title: 'Streamlined User Experience',
        description: 'Visitors could quickly navigate to services, request quotes, and learn more about Killens Trucking Co.\'s expertise, supporting higher conversion rates and a smoother customer journey.'
      }
    ],
    callToAction: {
      title: 'Transform Your Transport Business',
      description: 'Showcase your fleet and capabilities with professional photography, video, and web design that drives results.',
      primaryButton: {
        text: 'Get Started',
        link: '/contact'
      },
      secondaryButton: {
        text: 'View Portfolio',
        link: '/portfolio'
      }
    },
    createdAt: '2024-02-20',
    updatedAt: '2024-11-15',
    featured: false
  },
  
  {
    id: 'cs-003',
    slug: 'dawsons-haulage',
    title: 'Dawson\'s Haulage',
    subtitle: 'Powering a Leading Australian Transport Company with a Dynamic Digital Presence',
    company: 'Dawson\'s Haulage',
    industry: 'Transport & Logistics',
    turnover: 'Ongoing',
    status: 'Ongoing',
    heroImage: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/Untitled-1_ksb9pg.jpg', // Cloudinary URL placeholder
    imageCarousel: [
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/Dawsons-Trucking-5_bazffv.jpg', // Cloudinary URL - Fleet and services
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229025/Dawsons-Trucking-2_wkbg5h.jpg', // Cloudinary URL - Community initiatives
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/dawsons-scaled_yx9ewf.jpg', // Cloudinary URL - Mining transport
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748227983/Dawsons-Trucking-5_vzicax.jpg', // Cloudinary URL - Defence partnerships
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229025/Dawsons-Trucking-1_zcajjd.jpg'  // Cloudinary URL - Agriculture transportation
    ],
    masonryGallery: [
      '', // Cloudinary URL - Website design
      '', // Cloudinary URL - Social media content
      '', // Cloudinary URL - TikTok presence
      '', // Cloudinary URL - Dolly's Dream partnership
      '', // Cloudinary URL - Fleet photography
      '', // Cloudinary URL - Team content
      '', // Cloudinary URL - Brand materials
      '', // Cloudinary URL - Community involvement
    ],
    services: [
      'Web Design',
      'Brand Strategy',
      'Digital Advertising',
      'Social Media Management',
      'Photography',
      'Video'
    ],
    overview: 'At Brandjam Creative, we partnered with Dawson\'s Haulage, a trusted Australian-owned and family-operated transport company based in Baranduda, Victoria, to enhance their brand visibility and modernise their digital presence through an integrated approach.',
    challenges: [
      {
        id: 1,
        title: 'Inadequate Digital Strategy',
        description: 'Dawson\'s Haulage required a refreshed digital strategy to better showcase their extensive transport services and engage with their audience across social platforms.'
      },
      {
        id: 2,
        title: 'Limited Community Showcase',
        description: 'Their existing website and social media efforts did not fully highlight their partnerships with key organisations like Dolly\'s Dream or reflect their community involvement.'
      },
      {
        id: 3,
        title: 'Ineffective Audience Reach',
        description: 'The company needed to reach their audience more effectively and showcase their expertise across mining, defence, and agriculture transportation sectors.'
      },
      {
        id: 4,
        title: 'Brand Building and Awareness',
        description: 'Dawson\'s Haulage sought to build a stronger brand presence that resonated with both existing and potential clients, particularly in the competitive transport industry.'
      }
    ],
    approach: [
      {
        id: 1,
        title: 'Website Design and Development',
        description: 'We designed and developed a modern, user-friendly website tailored to Dawson\'s Haulage\'s needs.',
        bullets: [
          'Enhanced navigation to showcase extensive fleet and services',
          'Mobile optimisation for seamless browsing across all devices',
          'SEO best practices to attract more local and national traffic',
          'Dedicated section highlighting community initiatives and partnerships'
        ]
      },
      {
        id: 2,
        title: 'Social Media Management',
        description: 'Our team revamped their social media strategy to engage their audience and highlight their brand values.',
        bullets: [
          'Created engaging posts about services, fleet, and industry expertise',
          'Showcased community involvement, including Dolly\'s Dream collaboration',
          'Launched TikTok account to connect with younger audiences',
          'Built consistent branding across platforms for unified voice and look'
        ]
      },
      {
        id: 3,
        title: 'Content Creation',
        description: 'We produced high-quality, Australian-focused content to enhance Dawson\'s online presence.',
        bullets: [
          'Blog posts about the transport industry and its role in various sectors',
          'Informative pages detailing their fleet and services',
          'Visual content for social media, including photos, videos, and infographics'
        ]
      },
      {
        id: 4,
        title: 'Digital Advertising',
        description: 'We implemented targeted digital advertising campaigns to increase brand visibility and reach potential clients.',
        bullets: [
          'Google Ads campaigns focused on transport services and community initiatives',
          'Social media ads to promote brand awareness and engagement',
          'Regular performance analysis to optimise ad spend and reach'
        ]
      }
    ],
    results: [
      {
        id: 1,
        title: 'Modern, Professional Website',
        description: 'A modern, professional website that effectively communicates their services and values to both existing and potential clients.'
      },
      {
        id: 2,
        title: 'Improved Audience Engagement',
        description: 'Significantly improved audience engagement across social media platforms through strategic content and consistent branding.'
      },
      {
        id: 3,
        title: 'Increased Brand Awareness',
        description: 'Increased brand awareness, particularly through their TikTok presence and community-focused content, reaching new audience segments.'
      },
      {
        id: 4,
        title: 'Stronger Community Connections',
        description: 'Stronger connections with their audience, highlighting their commitment to both quality service and social responsibility through community partnerships.'
      }
    ],
    callToAction: {
      title: 'Ready to Elevate Your Transport Business?',
      description: 'Let us help you create a digital presence that showcases your expertise and connects with your community.',
      primaryButton: {
        text: 'Start Your Journey',
        link: '/contact'
      },
      secondaryButton: {
        text: 'Our Process',
        link: '/process'
      }
    },
    createdAt: '2024-03-10',
    updatedAt: '2024-12-15',
    featured: true
  }
];

// Helper functions for working with case studies
export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getCaseStudiesByIndustry = (industry: string): CaseStudy[] => {
  return caseStudies.filter(study => study.industry === industry);
};

export const getAllIndustries = (): string[] => {
  const industries = caseStudies.map(study => study.industry);
  return [...new Set(industries)];
};

export default caseStudies;