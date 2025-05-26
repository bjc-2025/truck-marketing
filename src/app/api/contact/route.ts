import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // TODO: Validate body (name, email, message)
    // TODO: Send email using an email service (Resend, SendGrid, etc.)
    console.log('Contact form submission:', body);
    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Error submitting form.' }, { status: 500 });
  }
}