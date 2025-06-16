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

// Import all service data from individual files
import { truckingSeoService } from './services/trucking-seo';
import { logisticsLeadGenerationService } from './services/logistics-lead-generation';
import { websiteDevelopmentService } from './services/website-development';
import { ppcForHaulageService } from './services/ppc-for-haulage';
import { analyticsReportingService } from './services/analytics-reporting';
import { contentCaptureService } from './services/content-capture';
import { socialMediaManagementService } from './services/social-media-management';
import { emailMarketingService } from './services/email-marketing';
import { digitalReputationManagementService } from './services/digital-reputation-management';

// Service data configuration from individual files
export const serviceData: Record<ServiceSlug, ServiceInfo> = {
  'trucking-seo': truckingSeoService,
  'logistics-lead-generation': logisticsLeadGenerationService,
  'website-development': websiteDevelopmentService,
  'ppc-for-haulage': ppcForHaulageService,
  'analytics-reporting': analyticsReportingService,
  'content-capture': contentCaptureService,
  'social-media-management': socialMediaManagementService,
  'email-marketing': emailMarketingService,
  'digital-reputation-management': digitalReputationManagementService,
};