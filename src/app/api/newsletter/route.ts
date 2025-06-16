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
    const { error } = await resend.contacts.create({
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

    // Send welcome email with enhanced design
    await resend.emails.send({
      from: 'Truck Marketing <hello@truckmarketing.com.au>',
      to: [email],
      subject: 'Welcome to Truck Marketing Newsletter! 🚛',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #111827; padding: 40px 40px 30px 40px; text-align: center;">
                      <img src="https://truckmarketing.com.au/Truck%20marketing%20logo%20WW-07.svg" alt="Truck Marketing" style="width: 200px; height: auto;">
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <h1 style="color: #111827; font-size: 28px; margin: 0 0 20px 0; text-align: center;">Welcome to the Fleet! 🎉</h1>
                      
                      <p style="color: #4b5563; font-size: 16px; line-height: 24px; margin: 0 0 30px 0;">
                        G'day! Thanks for subscribing to the Truck Marketing newsletter. You're now part of Australia's premier trucking and logistics marketing community.
                      </p>
                      
                      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 0 0 30px 0;">
                        <p style="color: #92400e; font-size: 16px; margin: 0;">
                          <strong>What to expect:</strong> You'll receive our newsletter every fortnight packed with marketing insights specifically for the trucking industry.
                        </p>
                      </div>
                      
                      <h2 style="color: #111827; font-size: 20px; margin: 0 0 15px 0;">Here's what you'll get:</h2>
                      
                      <table role="presentation" style="width: 100%; margin: 0 0 30px 0;">
                        <tr>
                          <td style="padding: 0 0 15px 0;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 24px; vertical-align: top;">
                                  <div style="width: 20px; height: 20px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 12px;">✓</div>
                                </td>
                                <td style="padding-left: 10px;">
                                  <p style="color: #4b5563; font-size: 16px; margin: 0;"><strong>Industry Trends:</strong> Stay ahead with the latest trucking marketing developments</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 15px 0;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 24px; vertical-align: top;">
                                  <div style="width: 20px; height: 20px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 12px;">✓</div>
                                </td>
                                <td style="padding-left: 10px;">
                                  <p style="color: #4b5563; font-size: 16px; margin: 0;"><strong>Proven Strategies:</strong> Marketing tactics that work for transport companies</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 0 15px 0;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 24px; vertical-align: top;">
                                  <div style="width: 20px; height: 20px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 12px;">✓</div>
                                </td>
                                <td style="padding-left: 10px;">
                                  <p style="color: #4b5563; font-size: 16px; margin: 0;"><strong>Case Studies:</strong> Real success stories from Australian trucking businesses</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0;">
                            <table role="presentation" style="width: 100%;">
                              <tr>
                                <td style="width: 24px; vertical-align: top;">
                                  <div style="width: 20px; height: 20px; background-color: #10b981; border-radius: 50%; text-align: center; line-height: 20px; color: white; font-size: 12px;">✓</div>
                                </td>
                                <td style="padding-left: 10px;">
                                  <p style="color: #4b5563; font-size: 16px; margin: 0;"><strong>SEO & Digital Tips:</strong> Boost your online presence and generate more leads</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="text-align: center; margin: 40px 0;">
                        <a href="https://truckmarketing.com.au/blog" style="display: inline-block; background-color: #f97316; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">Check Out Our Blog</a>
                      </div>
                      
                      <div style="border-top: 1px solid #e5e7eb; margin: 40px 0 30px 0;"></div>
                      
                      <p style="color: #6b7280; font-size: 14px; line-height: 20px; margin: 0;">
                        We're excited to have you on board! If you have any questions or want to discuss how we can help grow your trucking business, feel free to reach out.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px 40px; text-align: center;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td>
                            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                              <strong>Truck Marketing</strong><br>
                              Albury Wodonga, NSW/VIC<br>
                              <a href="tel:0491999011" style="color: #f97316; text-decoration: none;">0491 999 011</a> | 
                              <a href="mailto:hello@truckmarketing.com.au" style="color: #f97316; text-decoration: none;">hello@truckmarketing.com.au</a>
                            </p>
                            <p style="color: #9ca3af; font-size: 12px; margin: 10px 0 0 0;">
                              You're receiving this because you subscribed to our newsletter.<br>
                              You can unsubscribe at any time using the link in our emails.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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