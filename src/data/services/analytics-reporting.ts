import { ServiceInfo } from '../servicesData';

export const analyticsReportingService: ServiceInfo = {
  title: 'Performance Analytics',
  subtitle: 'Data-Driven Insights to Optimise Your Marketing Investment',
  description: 'Make informed decisions with comprehensive analytics that show exactly what\'s working and where to invest for maximum growth.',
  heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1749166276/DJI_0072_avtrmw.jpg',
  featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1749015638/Hero4_myavow.jpg',
  secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992897/DSC_0934_lumf8q.jpg',
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
      icon: 'BarChart',
      title: 'Google Analytics Setup',
      description: 'Complete Google Analytics implementation with custom event tracking, conversion goals, and ecommerce tracking specifically configured for trucking lead generation.'
    },
    {
      icon: 'Phone',
      title: 'Call Tracking Integration',
      description: 'Track and record phone calls from different marketing channels with dynamic number insertion, allowing you to measure which campaigns drive the most valuable phone leads.'
    },
    {
      icon: 'TrendingUp',
      title: 'Custom KPI Dashboards',
      description: 'Real-time dashboards showing your most important metrics including cost per lead, conversion rates, and ROI by channel, all in one easy-to-understand interface.'
    },
    {
      icon: 'Target',
      title: 'Competitor Analysis',
      description: 'Monitor competitor marketing strategies, keyword rankings, and online presence to identify opportunities and stay ahead in your market.'
    },
    {
      icon: 'Database',
      title: 'Lead Source Tracking',
      description: 'Track every lead from first touch to closed deal, understanding which marketing channels and campaigns generate the most profitable customers.'
    },
    {
      icon: 'DollarSign',
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
};