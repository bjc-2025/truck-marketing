// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Type for the form data
interface ContactFormData {
  name: string
  email: string
  phone?: string
  company: string
  service?: string
  fleetSize?: string
  message?: string
  newsletter: boolean
  timestamp: string
  source: string
}

// Helper function to escape HTML to prevent XSS
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Email template function that returns HTML string
const createEmailTemplate = (data: ContactFormData): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${data.phone ? escapeHtml(data.phone) : 'Not provided'}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
        <p><strong>Service Interest:</strong> ${data.service ? escapeHtml(data.service) : 'Not specified'}</p>
        <p><strong>Fleet Size:</strong> ${data.fleetSize ? escapeHtml(data.fleetSize) : 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: white; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${data.message ? escapeHtml(data.message) : 'No message provided'}</p>
        <p><strong>Newsletter:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>
        <hr style="border: 1px solid #ddd; margin: 20px 0;" />
        <p style="font-size: 12px; color: #666;">
          <small>Submitted at: ${new Date(data.timestamp).toLocaleString()}</small><br/>
          <small>Source: ${escapeHtml(data.source)}</small>
        </p>
      </div>
    </div>
  `
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()
    
    // Validate required fields
    if (!data.name || !data.email || !data.company) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'Truck Marketing <hello@truckmarketing.com.au>', // Replace with your verified domain
      to: ['hello@truckmarketing.com.au', 'nicolas@brandjam.com.au', 'katie@brandjam.com.au'], // Your receiving emails
      replyTo: data.email,
      subject: `New Contact Form Submission from ${escapeHtml(data.name)}`,
      html: createEmailTemplate(data),
    })
    
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }
    
    // Optionally, add the contact to a Resend audience if they subscribed
    if (data.newsletter) {
      try {
        await resend.contacts.create({
          email: data.email,
          firstName: data.name.split(' ')[0],
          lastName: data.name.split(' ').slice(1).join(' '),
          unsubscribed: false,
          audienceId: process.env.RESEND_AUDIENCE_ID!, // Your audience ID
        })
      } catch (audienceError) {
        // Log but don't fail the request
        console.error('Failed to add to audience:', audienceError)
      }
    }
    
    // Optionally, send a confirmation email to the user
    await resend.emails.send({
      from: 'Truck Marketing <hello@truckmarketing.com.au>',
      to: data.email,
      subject: 'Thank you for contacting Truck Marketing',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${escapeHtml(data.name.split(' ')[0])},</p>
        <p>We've received your message and will be in touch within 2 business hours.</p>
        <p>In the meantime, feel free to call us at 0491 999 011 if you have any urgent questions.</p>
        <p>Best regards,<br>The Truck Marketing Team</p>
      `
    })
    
    return NextResponse.json(
      { 
        message: 'Form submitted successfully',
        id: emailData?.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}