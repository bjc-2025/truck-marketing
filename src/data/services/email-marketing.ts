import { ServiceInfo } from '../servicesData';

export const emailMarketingService: ServiceInfo = {
  title: 'Email Marketing',
  subtitle: 'Nurture Leads and Retain Customers with Effective Email Campaigns',
  description: 'Build lasting relationships with prospects and customers through targeted email marketing campaigns that drive results.',
  heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389390/Sam_Armatage1_kwzl3s.jpg',
  featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389382/Sam_Armatage4_prgz4n.jpg',
  secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748388871/Centurion6_ogd9uo.jpg',
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
      icon: 'Mail',
      title: 'Email Design and Copywriting',
      description: 'Professional email templates and compelling copy that speaks directly to shippers\' needs, with mobile-responsive designs that look great on any device.'
    },
    {
      icon: 'Target',
      title: 'Marketing Automation',
      description: 'Sophisticated automation workflows that nurture leads based on their behaviour, sending the right message at the right time to move them toward conversion.'
    },
    {
      icon: 'Users',
      title: 'List Segmentation',
      description: 'Advanced segmentation strategies that group contacts by industry, shipping needs, and engagement level for highly targeted, relevant messaging.'
    },
    {
      icon: 'BarChart',
      title: 'Performance Tracking',
      description: 'Comprehensive analytics showing open rates, click rates, and conversions by campaign, with insights to continuously improve performance.'
    },
    {
      icon: 'CheckCircle',
      title: 'A/B Testing',
      description: 'Systematic testing of subject lines, content, and send times to optimise every element of your email campaigns for maximum engagement.'
    },
    {
      icon: 'Shield',
      title: 'Deliverability Optimisation',
      description: 'Technical optimisation to ensure your emails reach the inbox, including authentication setup, list hygiene, and reputation monitoring.'
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
};