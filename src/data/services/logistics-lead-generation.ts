import { ServiceInfo } from '../servicesData';

export const logisticsLeadGenerationService: ServiceInfo = {
  title: 'Logistics Lead Generation',
  subtitle: 'Fill Your Pipeline with Qualified Shippers Ready to Move',
  description: 'Stop chasing loads and start attracting premium shippers with our proven lead generation system built exclusively for trucking companies.',
  heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389447/Horne2_zgrxwo.jpg',
  featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389444/DSC_4954-Enhanced-NR_irlbhe.jpg',
  secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992877/DJI_20250531100604_0114_D-Edit-2_obwr0g.jpg',
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
      icon: 'Database',
      title: 'Shipper Database Targeting',
      description: 'Access our proprietary database of 50,000+ verified shippers, filtered by industry, location, and shipping volume to match your ideal customer profile.'
    },
    {
      icon: 'Mail',
      title: 'Email Marketing Automation',
      description: 'Deploy sophisticated email campaigns with personalised messaging, automated follow-ups, and behaviour-triggered sequences that nurture leads effectively.'
    },
    {
      icon: 'Users',
      title: 'LinkedIn Outreach Campaigns',
      description: 'Connect with decision-makers through targeted LinkedIn campaigns, leveraging advanced search filters and personalised connection strategies.'
    },
    {
      icon: 'Target',
      title: 'Landing Page Optimisation',
      description: 'Create high-converting landing pages tailored to specific industries and shipping needs, with A/B testing to maximise conversion rates.'
    },
    {
      icon: 'BarChart',
      title: 'Lead Scoring System',
      description: 'Automatically score and prioritise leads based on shipping frequency, volume, lane compatibility, and engagement level to focus on the best opportunities.'
    },
    {
      icon: 'TrendingUp',
      title: 'Real-Time Reporting Dashboard',
      description: 'Track campaign performance, lead quality, and ROI with our comprehensive dashboard that provides actionable insights and optimisation recommendations.'
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
};