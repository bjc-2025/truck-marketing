import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation schema
const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validation = newsletterSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email } = validation.data;

    // Add contact to newsletter audience
    // You'll need to create an audience in Resend dashboard first
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: process.env.RESEND_NEWSLETTER_AUDIENCE_ID!,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter. Please try again.' },
        { status: 500 }
      );
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Truck Marketing <hello@truckmarketing.com.au>',
      to: [email],
      subject: 'Welcome to Truck Marketing Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1f2937;">Welcome to Truck Marketing!</h1>
          <p>Thanks for subscribing to our newsletter. You'll receive weekly insights on:</p>
          <ul>
            <li>Latest trucking industry trends</li>
            <li>Marketing strategies for logistics companies</li>
            <li>Case studies and success stories</li>
            <li>SEO tips for trucking businesses</li>
          </ul>
          <p>If you ever want to unsubscribe, you can do so by clicking the unsubscribe link in any of our emails.</p>
          <p>Best regards,<br>The Truck Marketing Team</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}