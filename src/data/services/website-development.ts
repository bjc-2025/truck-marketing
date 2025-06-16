import { ServiceInfo } from '../servicesData';

export const websiteDevelopmentService: ServiceInfo = {
  title: 'Website Development',
  subtitle: 'Professional Websites That Convert Visitors into Long-Term Contracts',
  description: 'Your website is your digital storefront. We build fast, professional sites that establish credibility and generate leads 24/7.',
  heroImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748992877/DJI_20250531100604_0114_D-Edit-2_obwr0g.jpg',
  featureImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389440/JSC3_a4p3mw.jpg',
  secondaryImageUrl: 'https://res.cloudinary.com/dvwug91mb/image/upload/v1748389438/JSC4_mrwabi.jpg',
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
      icon: 'Calculator',
      title: 'Instant Quote Calculators',
      description: 'Automated pricing tools that provide real-time shipping quotes based on distance, weight, and cargo type. Your customers can get instant estimates 24/7, reducing phone calls and speeding up the booking process.'
    },
    {
      icon: 'Truck',
      title: 'Fleet Showcase Galleries',
      description: 'Professional photo galleries displaying your trucks, trailers, and equipment with detailed specifications. High-quality image optimisation ensures fast loading while showcasing your fleet\'s capabilities.'
    },
    {
      icon: 'Users',
      title: 'Driver Recruitment Portal',
      description: 'Comprehensive recruitment section featuring job postings, benefits information, and streamlined application forms. Includes driver qualification requirements and testimonials from current drivers.'
    },
    {
      icon: 'MapPin',
      title: 'Load Tracking Integration',
      description: 'Real-time shipment tracking system that connects with your dispatch software and GPS systems. Customers receive automatic updates via SMS and email, reducing customer service calls.'
    },
    {
      icon: 'Shield',
      title: 'Customer Portal Access',
      description: 'Secure, password-protected area where clients can access invoices, shipping history, and account information. Features include online payment processing and direct communication with dispatch.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile-Responsive Design',
      description: 'Fully optimised website that adapts seamlessly to smartphones, tablets, and desktop computers. Touch-friendly navigation and fast loading times ensure accessibility across all devices.'
    }
  ],
  faqs: [
    {
      question: "How long does it take to build a trucking website?",
      answer: "Most trucking websites take 4-8 weeks from start to launch, depending on complexity and integrations. We work around your schedule and keep you involved throughout the process to ensure the site meets your exact needs."
    },
    {
      question: "Can you integrate our website with our existing TMS system?",
      answer: "Yes, we specialise in integrating trucking websites with popular TMS platforms, load tracking systems, and customer portals. This allows real-time shipment tracking and seamless customer communication."
    },
    {
      question: "Will our website work well on mobile devices?",
      answer: "Absolutely. All our trucking websites are mobile-first, ensuring they work perfectly on smartphones and tablets. This is crucial since many shippers access websites from mobile devices."
    }
  ]
};