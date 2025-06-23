import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { subject, html, text, name } = body
    
    // Validate required fields
    if (!subject || (!html && !text)) {
      return NextResponse.json(
        { message: 'Missing required fields: subject and either html or text' },
        { status: 400 }
      )
    }
    
    // Create broadcast
    const { data, error } = await resend.broadcasts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      from: 'Truck Marketing <hello@truckmarketing.com.au>',
      subject,
      html: html || undefined,
      text: text || undefined,
      name: name || `Broadcast - ${new Date().toLocaleDateString()}`
    })
    
    if (error) {
      console.error('Resend broadcast error:', error)
      return NextResponse.json(
        { message: 'Failed to create broadcast', error },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        message: 'Broadcast created successfully',
        id: data?.id 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'An unexpected error occurred', error },
      { status: 500 }
    )
  }
}

// Get list of broadcasts
export async function GET(request: NextRequest) {
  try {
    const { data, error } = await resend.broadcasts.list()
    
    if (error) {
      console.error('Resend list broadcasts error:', error)
      return NextResponse.json(
        { message: 'Failed to retrieve broadcasts', error },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        broadcasts: data,
        count: data?.length || 0
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'An unexpected error occurred', error },
      { status: 500 }
    )
  }
}