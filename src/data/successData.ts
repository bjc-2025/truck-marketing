// data/successData.ts

export interface SuccessMetric {
  value: string
  label: string
}

export interface SuccessStoryData {
  id: string
  clientName: string
  clientTitle: string
  companyName: string
  quote: string
  caseStudyUrl?: string
  metrics: SuccessMetric[]
}

export const successData: Record<string, SuccessStoryData> = {
  'thompson-transport': {
    id: 'thompson-transport',
    clientName: 'Mike Thompson',
    clientTitle: 'CEO',
    companyName: 'Thompson Transport LLC',
    quote: 'TruckMarketing transformed our online presence. We went from invisible to ranking #1 for our key routes. Our phone hasn\'t stopped ringing with quality loads.',
    caseStudyUrl: '/case-studies/thompson-transport',
    metrics: [
      {
        value: '425%',
        label: 'Increase in Leads'
      },
      {
        value: '$2.4M',
        label: 'New Revenue'
      },
      {
        value: '87%',
        label: 'Less Empty Miles'
      },
      {
        value: '6mo',
        label: 'ROI Timeline'
      }
    ]
  },
  'midwest-logistics': {
    id: 'midwest-logistics',
    clientName: 'Sarah Johnson',
    clientTitle: 'Operations Director',
    companyName: 'Midwest Logistics Co.',
    quote: 'Within 3 months of working with TruckMarketing, we doubled our contract loads and reduced our marketing costs by 60%. The ROI speaks for itself.',
    caseStudyUrl: '/case-studies/midwest-logistics',
    metrics: [
      {
        value: '200%',
        label: 'More Contract Loads'
      },
      {
        value: '60%',
        label: 'Reduced Marketing Costs'
      },
      {
        value: '95%',
        label: 'Customer Retention'
      },
      {
        value: '3mo',
        label: 'Results Timeline'
      }
    ]
  },
  'coastal-freight': {
    id: 'coastal-freight',
    clientName: 'Roberto Martinez',
    clientTitle: 'Fleet Manager',
    companyName: 'Coastal Freight Solutions',
    quote: 'Our driver recruitment went from a nightmare to a dream. TruckMarketing helped us attract quality drivers and reduce turnover by 70%.',
    caseStudyUrl: '/case-studies/coastal-freight',
    metrics: [
      {
        value: '70%',
        label: 'Reduced Turnover'
      },
      {
        value: '300%',
        label: 'More Applications'
      },
      {
        value: '45%',
        label: 'Faster Hiring'
      },
      {
        value: '8wk',
        label: 'Implementation Time'
      }
    ]
  }
}

// Helper function to get success story by ID
export function getSuccessStory(id: string): SuccessStoryData | null {
  return successData[id] || null
}

// Helper function to get a random success story
export function getRandomSuccessStory(): SuccessStoryData {
  const stories = Object.values(successData)
  return stories[Math.floor(Math.random() * stories.length)]
}

// Helper function to get success stories by service type (you can extend this)
export function getSuccessStoriesByTag(tag: string): SuccessStoryData[] {
  // This is a simple implementation - you could add tags to the data structure
  // and filter based on them for more sophisticated matching
  return Object.values(successData)
}