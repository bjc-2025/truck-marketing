import { Resend } from 'resend'
import * as dotenv from 'dotenv'
import { resolve } from 'path'
import { newsletterTemplate, announcementTemplate, promotionalTemplate, introductoryTemplate } from './broadcast-templates'

// Load environment variables from .env.local
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

const resend = new Resend(process.env.RESEND_API_KEY)

// Get template type from command line argument
const templateType = process.argv[2] || 'newsletter'

async function createBroadcast() {
  try {
    console.log(`Creating ${templateType} broadcast...`)
    
    // Select template based on argument
    let template
    switch (templateType) {
      case 'announcement':
        template = announcementTemplate
        break
      case 'promotional':
        template = promotionalTemplate
        break
      case 'introduction':
      case 'intro':
        template = introductoryTemplate
        break
      case 'newsletter':
      default:
        template = newsletterTemplate
        break
    }
    
    // Replace placeholders in template
    const currentDate = new Date()
    const month = currentDate.toLocaleString('default', { month: 'long' })
    const year = currentDate.getFullYear()
    
    const subject = template.subject
      .replace('{Month}', month)
      .replace('{Year}', year.toString())
      .replace('{Date}', currentDate.toLocaleDateString())
    
    const name = template.name
      .replace('{Month}', month)
      .replace('{Year}', year.toString())
      .replace('{Date}', currentDate.toLocaleDateString())
    
    const { data, error } = await resend.broadcasts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      from: 'Truck Marketing <hello@truckmarketing.com.au>',
      subject,
      name,
      html: template.html,
      text: template.text
    })
    
    if (error) {
      console.error('Error creating broadcast:', error)
      return
    }
    
    console.log('✅ Broadcast created successfully!')
    console.log('Broadcast ID:', data?.id)
    console.log('Broadcast Name:', name)
    console.log('Subject:', subject)
    console.log('\nNext steps:')
    console.log('1. Go to https://resend.com/broadcasts')
    console.log('2. Find your broadcast in the list')
    console.log('3. Edit the content as needed')
    console.log('4. Review and send to your audience')
    
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

console.log('\nAvailable templates:')
console.log('- newsletter (default)')
console.log('- announcement')
console.log('- promotional')
console.log('- introduction/intro')
console.log('\nUsage: pnpm broadcast:create [template-type]')
console.log('Example: pnpm broadcast:create intro\n')

// Run the function
createBroadcast()