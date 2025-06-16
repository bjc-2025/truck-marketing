
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  industry: string;
  turnover: string;
  status: 'Ongoing' | 'Completed';
  heroImage: string;
  imageCarousel: string[]; 
  masonryGallery: string[];
  

  services: string[];
  

  overview: string;
  challenges: Challenge[];
  approach: ApproachSection[];
  results: Result[];

  callToAction: CallToAction;
  

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
    subtitle: 'Everything a truck dealership should be & more!',
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
      },
      {
        id: 5,
        title: 'Streamlined User Experience',
        description: 'Visitors could quickly navigate to services, request quotes, and learn more about TwinCity Truck Centre\'s expertise, supporting higher conversion rates and a smoother customer journey.'
      },
      {
      id: 6,
      title: 'Professional Visual Content',
      description: 'High-quality photography and video content enhanced the dealership\'s online presence, making it more engaging and visually appealing to potential customers.'
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
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229029/DSC_4284-Edit_o3mirq.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/Ref-1_n7fdve.jpg', // Cloudinary URL - Team portraits
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015806/KillWeb12_aniddo.jpg', // Cloudinary URL - Facility operations
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015806/KillenWeb11_lqsc4t.jpg', // Cloudinary URL - Truck loading
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015638/Hero4_myavow.jpg'  // Cloudinary URL - On-the-road shots
    ],
    masonryGallery: [
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015645/About-Us-Truck_flk1il.jpg', // Cloudinary URL - Driver interviews
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015805/KillenWeb10_bbx5pg.jpg', // Cloudinary URL - Behind-the-scenes footage
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015638/Hero4_myavow.jpg', // Cloudinary URL - Fleet lineup
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015806/KillWeb12_aniddo.jpg', // Cloudinary URL - Logistics operations
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1749016033/Killens-Mockup-copy-scaled_t4uyov_no1aqa.jpg', // Cloudinary URL - Modern fleet
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
      },
      {
        id: 4,
        title: 'Need for Engaging Content',
        description: 'They required high-quality content that could be used across their website, social media, and marketing materials to engage both current and potential clients.'
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
    heroImage: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/Untitled-1_ksb9pg.jpg',
    imageCarousel: [
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229027/Dawsons-Trucking-5_bazffv.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229025/Dawsons-Trucking-2_wkbg5h.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748069855/dawsons-scaled_yx9ewf.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748227983/Dawsons-Trucking-5_vzicax.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748229025/Dawsons-Trucking-1_zcajjd.jpg' 
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
  },
  {
    id: 'cs-004',
    slug: 'Scholz-Bulk-Haulage',
    title: 'Scholz Bulk Haulage',
    subtitle: 'Uplifting a Family-Owned Transport Business with a Modern Digital Strategy',
    company: 'Scholz Bulk Haulage',
    industry: 'Transport & Logistics',
    turnover: 'Ongoing',
    status: 'Ongoing',
    heroImage: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992869/DJI_20250531094431_0054_D_tr3zf2.jpg',
    imageCarousel: [
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992868/DJI_20250531095424_0082_D_fmfqbi.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992868/044A3293_m5gwzo.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992860/044A3216_rx3zwk.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992856/044A3057_aaomvd.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992851/044A3004_zjcwmx.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992850/044A2851-Edit_cjh9ub.jpg'
    ],
    masonryGallery: [
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992866/DJI_20250531095334_0079_D_fdvcc7.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992862/044A3274_dyuew6.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992851/044A2914_ccbeuu.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992853/044A2830_occ0nq.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992854/044A2921_fojvzn.jpg',
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992856/044A3057_aaomvd.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992859/044A3210_zpeyii.jpg', 
      'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992866/044A3302_e2n2zc.jpg', 
    ],
    services: [
      'Web Design',
      'Photography',
      'Video'
    ],
  overview: 'At Brandjam Creative, we partnered with Scholz, a leading Australian business, to transform their brand presence through a comprehensive digital strategy featuring professional photography, website development, and video production.',
  challenges: [
    {
      id: 1,
      title: 'Outdated Visual Identity',
      description: 'Scholz needed a complete visual refresh to better represent their brand values and showcase their services through professional imagery and modern design.'
    },
    {
      id: 2,
      title: 'Lack of Professional Content',
      description: 'Their existing digital presence lacked high-quality photography and video content that could effectively communicate their expertise and brand story.'
    },
    {
      id: 3,
      title: 'Ineffective Digital Presence',
      description: 'The company\'s website and digital platforms were not effectively engaging their target audience or showcasing their capabilities.'
    },
    {
      id: 4,
      title: 'Brand Positioning and Market Reach',
      description: 'Scholz sought to strengthen their market position and reach new audiences through enhanced digital storytelling and professional content.'
    }
  ],
  approach: [
    {
      id: 1,
      title: 'Major Professional Photoshoot',
      description: 'We conducted an extensive professional photoshoot to capture Scholz\'s brand essence and create a comprehensive visual library.',
      bullets: [
        'On-location photography showcasing their facilities and operations',
        'Professional headshots and team photography for brand consistency',
        'Product and service photography highlighting key offerings',
        'Lifestyle imagery that connects with their target audience'
      ]
    },
    {
      id: 2,
      title: 'Website Design and Development',
      description: 'We designed and developed a cutting-edge website that showcases Scholz\'s expertise and incorporates our professional photography.',
      bullets: [
        'Modern, responsive design optimised for all devices',
        'Integration of custom photography throughout the site',
        'Enhanced user experience with intuitive navigation',
        'SEO optimisation to improve search visibility and traffic'
      ]
    },
    {
      id: 3,
      title: 'Video Production',
      description: 'Our team produced high-quality video content to bring Scholz\'s story to life and engage audiences across digital platforms.',
      bullets: [
        'Brand story video showcasing company values and mission',
        'Service demonstration videos highlighting key capabilities',
        'Behind-the-scenes content for authentic brand connection',
        'Social media video content optimised for different platforms'
      ]
    },
    {
      id: 4,
      title: 'Integrated Digital Strategy',
      description: 'We implemented a cohesive digital strategy that unified all visual and content elements across platforms.',
      bullets: [
        'Consistent brand messaging across all digital touchpoints',
        'Strategic content distribution across social media platforms',
        'Performance tracking and analytics implementation',
        'Ongoing optimisation based on audience engagement data'
      ]
    }
  ],
  results: [
    {
      id: 1,
      title: 'Stunning Visual Brand Identity',
      description: 'A complete visual transformation through professional photography that authentically represents Scholz\'s brand and values.'
    },
    {
      id: 2,
      title: 'Modern, High-Performance Website',
      description: 'A cutting-edge website that effectively showcases their services and engages visitors with compelling visual content and seamless user experience.'
    },
    {
      id: 3,
      title: 'Engaging Video Content Library',
      description: 'Professional video content that tells Scholz\'s story and demonstrates their expertise, driving higher engagement across digital platforms.'
    }
  ],
  callToAction: {
    title: 'Ready to Transform Your Brand?',
    description: 'Let us help you create a powerful visual identity through professional photography, web development, and video production.',
    primaryButton: {
      text: 'Start Your Transformation',
      link: '/contact'
    },
    secondaryButton: {
      text: 'View Our Work',
      link: '/portfolio'
    }
  },
  createdAt: '2024-03-10',
  updatedAt: '2024-12-15',
  featured: true
},
{
  "id": "cs-005",
  "slug": "kearneys-transport",
  "title": "Kearneys Transport",
  "subtitle": "Driving Brand Excellence with Statewide Photography and a Cohesive Digital & Print Presence",
  "company": "Kearneys Transport",
  "industry": "Transport & Logistics",
  "turnover": "Ongoing",
  "status": "Completed",
  "heroImage": "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166275/DJI_0079_gt5epb.jpg",
  "imageCarousel": [
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166291/DSC_6520_twv3qj.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166292/DSC_6258_pgtj4g.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166273/DSC_6599_y0rmx8.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166266/DJI_0092_ws1fdp.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166264/DSC_6037_lddyge.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166237/DSC_6610_hrso1c.jpg"
  ],
  "masonryGallery": [
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166282/DSC_6538_qhs7vw.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166271/DSC_6130_jh3ku7.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166259/DSC_6126_msl9g3.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166252/DJI_20250201102448_0023_D_ojmeqw.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166238/DJI_0005_wemci8.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166236/DSC_6733_dqnsye.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166231/DSC_6586_nvdqex.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166223/DSC_6475_izqp1i.jpg",
    "https://res.cloudinary.com/dvwug91mb/image/upload/v1749166210/DJI_20250201104835_0072_D_znclp5.jpg"
  ],
  "services": [
    "Statewide Photography",
    "Web Design & Development",
    "Print Material Design"
  ],
  "overview": "Kearneys Transport, a respected name in Victorian logistics, partnered with us to execute a comprehensive brand uplift. The project involved an extensive photoshoot across various locations in Victoria, the development of a modern and robust website, and the creation of professional print materials to ensure brand consistency across all touchpoints.",
  "challenges": [
    {
      "id": 1,
      "title": "Lacked High-Quality Visuals",
      "description": "The existing visual assets did not reflect the scale and professionalism of Kearneys' operations across Victoria, failing to capture their impressive fleet and dedicated team."
    },
    {
      "id": 2,
      "title": "Outdated Digital Platform",
      "description": "Their website was not effectively showcasing their capabilities or providing a user-friendly experience, creating a disconnect with their modern operational standards."
    },
    {
      "id": 3,
      "title": "Inconsistent Print Materials",
      "description": "There was a need for professionally designed, tangible marketing materials that aligned with a new, modern brand identity for use in sales and client meetings."
    }
  ],
  "approach": [
    {
      "id": 1,
      "title": "Victorian-Wide Photoshoot",
      "description": "We embarked on a comprehensive photoshoot across Victoria to capture the essence of Kearneys Transport in action, creating a powerful library of custom imagery.",
      "bullets": [
        "On-location shoots at key operational hubs and scenic routes",
        "Dynamic aerial drone photography of their fleet in motion",
        "Capturing their trucks against iconic Victorian landscapes",
        "Professional imagery of their team and equipment"
      ]
    },
    {
      "id": 2,
      "title": "Website Design and Development",
      "description": "A new website was built from the ground up to serve as a powerful digital storefront, leveraging the stunning new photography to create an immersive experience.",
      "bullets": [
        "A visually-driven design focused on large-format imagery",
        "Clear articulation of services and company values",
        "Mobile-first, responsive design for accessibility on any device",
        "Implementation of an easy-to-use content management system (CMS)"
      ]
    },
    {
      "id": 3,
      "title": "Professional Print Design",
      "description": "To ensure brand cohesion, we designed a suite of print materials that mirrored the new website's aesthetic, providing a professional and consistent brand image.",
      "bullets": [
        "Design of company brochures and capability statements",
        "Creation of branded stationery and business cards",
        "Ensuring all print collateral was visually aligned with the digital brand",
        "High-quality material and finish recommendations"
      ]
    }
  ],
  "results": [
    {
      "id": 1,
      "title": "A Stunning & Authentic Visual Library",
      "description": "An extensive collection of high-impact photographs that showcase the breadth of their operations and the quality of their fleet across Victoria.",

    },
    {
      "id": 2,
      "title": "Elevated Digital & Print Presence",
      "description": "A seamless and professional brand identity across their new website and print materials, significantly enhancing their market position and client perception."
    },
    {
      "id": 3,
      "title": "Empowered Sales & Marketing",
      "description": "The new website and print collateral serve as powerful tools for the sales team, effectively communicating the company's story and capabilities."
    }
  ],
  "callToAction": {
    "title": "Ready to Unify Your Brand?",
    "description": "From state-wide photoshoots to cohesive web and print design, let's build a powerful and consistent brand identity for your business.",
    "primaryButton": {
      "text": "Get in Touch",
      "link": "/contact"
    },
    "secondaryButton": {
      "text": "See More Projects",
      "link": "/case-studies"
    }
  },
  "createdAt": "2024-05-20",
  "updatedAt": "2025-01-10",
  "featured": true
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