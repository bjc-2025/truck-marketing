import { ServiceInfo } from '../servicesData';

export const socialMediaManagementService: ServiceInfo = {
  title: 'Social Media Management',
  subtitle: 'Build Your Brand and Engage Your Audience Across Social Platforms',
  description: 'Engage your audience and build brand loyalty through targeted social media strategies designed for the trucking industry.',
  heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1750035682/TCTC-Web-Phone-Mockup-copy-scaled_dogmda.jpg',
  featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389401/Willets1_ijbx19.jpg',
  secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1750035679/Killens-Mockup-copy-scaled_u0bend.jpg',
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
      icon: 'Globe',
      title: 'Multi-Platform Management',
      description: 'Strategic management across LinkedIn, Facebook, Instagram, and Twitter, with platform-specific content that maximizes engagement on each channel.'
    },
    {
      icon: 'Calendar',
      title: 'Content Creation and Scheduling',
      description: 'Regular creation of engaging posts, stories, and videos with strategic scheduling to reach your audience when they\'re most active online.'
    },
    {
      icon: 'MessageCircle',
      title: 'Community Engagement',
      description: 'Active monitoring and response to comments, messages, and mentions to build relationships and maintain a positive brand presence across all platforms.'
    },
    {
      icon: 'Target',
      title: 'Social Media Advertising',
      description: 'Targeted ad campaigns on social platforms to reach specific demographics, from shippers needing capacity to qualified drivers looking for opportunities.'
    },
    {
      icon: 'BarChart',
      title: 'Performance Analytics',
      description: 'Detailed monthly reports showing growth, engagement rates, and ROI from social media efforts with actionable insights for continuous improvement.'
    },
    {
      icon: 'Shield',
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
};