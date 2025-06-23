// Broadcast templates for different types of emails

export const newsletterTemplate = {
  subject: "📧 {Month} Newsletter: SEO Tips for Trucking Companies",
  name: "{Month} {Year} Newsletter",
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header -->
  <div style="text-align: center; margin-bottom: 40px;">
    <h1 style="color: #1a73e8; margin: 0;">Truck Marketing</h1>
    <p style="color: #666; margin-top: 10px;">Your Monthly Marketing Update</p>
  </div>

  <!-- Greeting -->
  <p style="font-size: 16px; line-height: 1.6;">Hi {{{FIRST_NAME|there}}},</p>
  
  <p style="font-size: 16px; line-height: 1.6;">
    Welcome to this month's newsletter! Here's what's new in trucking marketing...
  </p>

  <!-- Main Content -->
  <h2 style="color: #333; margin-top: 30px;">Featured Article</h2>
  <p style="font-size: 16px; line-height: 1.6;">
    [Your main article content here]
  </p>

  <!-- Tips Section -->
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
    <h3 style="color: #1a73e8; margin-top: 0;">Quick Marketing Tips</h3>
    <ul style="font-size: 16px; line-height: 1.8;">
      <li>Tip 1: Optimize your Google My Business listing</li>
      <li>Tip 2: Use location-specific keywords</li>
      <li>Tip 3: Showcase your fleet with quality photos</li>
    </ul>
  </div>

  <!-- CTA Button -->
  <div style="text-align: center; margin: 40px 0;">
    <a href="https://truckmarketing.com.au/contact" style="display: inline-block; background-color: #ff6b35; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">
      Get Your Free SEO Audit
    </a>
  </div>

  <!-- Footer -->
  <div style="border-top: 1px solid #eee; margin-top: 40px; padding-top: 20px; font-size: 14px; color: #666;">
    <p>Best regards,<br>The Truck Marketing Team</p>
    <p style="margin-top: 20px;">
      📞 0491 999 011<br>
      ✉️ hello@truckmarketing.com.au<br>
      🌐 <a href="https://truckmarketing.com.au" style="color: #1a73e8;">truckmarketing.com.au</a>
    </p>
    <p style="font-size: 12px; margin-top: 20px;">
      You're receiving this because you subscribed to our newsletter.
      <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #1a73e8;">Unsubscribe</a>
    </p>
  </div>
</div>
  `,
  text: `
Truck Marketing - Your Monthly Marketing Update

Hi {{{FIRST_NAME|there}}},

Welcome to this month's newsletter! Here's what's new in trucking marketing...

FEATURED ARTICLE
[Your main article content here]

QUICK MARKETING TIPS
• Tip 1: Optimize your Google My Business listing
• Tip 2: Use location-specific keywords  
• Tip 3: Showcase your fleet with quality photos

Ready to improve your online presence?
Visit: https://truckmarketing.com.au/contact

Best regards,
The Truck Marketing Team

📞 0491 999 011
✉️ hello@truckmarketing.com.au
🌐 truckmarketing.com.au

---
You're receiving this because you subscribed to our newsletter.
Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}
  `
}

export const announcementTemplate = {
  subject: "🎉 Exciting News from Truck Marketing",
  name: "Announcement - {Date}",
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #1a73e8; text-align: center;">Big Announcement!</h1>
  
  <p style="font-size: 16px; line-height: 1.6;">Hi {{{FIRST_NAME|there}}},</p>
  
  <p style="font-size: 16px; line-height: 1.6;">
    We have some exciting news to share with you...
  </p>

  <!-- Announcement Content -->
  <div style="background-color: #e3f2fd; padding: 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
    <h2 style="color: #1a73e8; margin-top: 0;">[Your Announcement Here]</h2>
    <p style="font-size: 18px; line-height: 1.6;">
      [Details about the announcement]
    </p>
  </div>

  <!-- CTA -->
  <div style="text-align: center; margin: 40px 0;">
    <a href="https://truckmarketing.com.au" style="display: inline-block; background-color: #ff6b35; color: white; padding: 12px 30px; text-decoration: none; border-radius: 4px; font-weight: bold;">
      Learn More
    </a>
  </div>

  <!-- Footer -->
  <p style="font-size: 14px; color: #666; margin-top: 40px;">
    Thanks for being part of our community!<br>
    The Truck Marketing Team
  </p>
  
  <p style="font-size: 12px; color: #999; margin-top: 20px;">
    <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #1a73e8;">Unsubscribe</a>
  </p>
</div>
  `,
  text: `
Big Announcement!

Hi {{{FIRST_NAME|there}}},

We have some exciting news to share with you...

[Your Announcement Here]
[Details about the announcement]

Learn more at: https://truckmarketing.com.au

Thanks for being part of our community!
The Truck Marketing Team

Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}
  `
}

export const promotionalTemplate = {
  subject: "🚚 Special Offer: Save on Marketing Services",
  name: "Promotional Campaign - {Date}",
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <!-- Header with Offer -->
  <div style="background-color: #ff6b35; color: white; padding: 30px; text-align: center; border-radius: 8px;">
    <h1 style="margin: 0; font-size: 32px;">LIMITED TIME OFFER</h1>
    <p style="font-size: 20px; margin: 10px 0;">Save 20% on SEO Services</p>
  </div>

  <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Hi {{{FIRST_NAME|there}}},</p>
  
  <p style="font-size: 16px; line-height: 1.6;">
    For a limited time, we're offering 20% off our comprehensive SEO packages for trucking companies.
  </p>

  <!-- Benefits -->
  <h2 style="color: #333; margin-top: 30px;">What You'll Get:</h2>
  <ul style="font-size: 16px; line-height: 1.8;">
    <li>✅ Complete SEO audit</li>
    <li>✅ Keyword research & strategy</li>
    <li>✅ On-page optimization</li>
    <li>✅ Local SEO setup</li>
    <li>✅ Monthly reporting</li>
  </ul>

  <!-- Urgency -->
  <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 30px 0;">
    <p style="margin: 0; font-weight: bold; color: #856404;">
      ⏰ Offer expires in 7 days!
    </p>
  </div>

  <!-- CTA -->
  <div style="text-align: center; margin: 40px 0;">
    <a href="https://truckmarketing.com.au/contact" style="display: inline-block; background-color: #28a745; color: white; padding: 15px 40px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 18px;">
      Claim Your Discount
    </a>
  </div>

  <!-- Footer -->
  <p style="font-size: 14px; color: #666;">
    Questions? Call us at 0491 999 011
  </p>
  
  <p style="font-size: 12px; color: #999; margin-top: 20px;">
    <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #1a73e8;">Unsubscribe</a>
  </p>
</div>
  `,
  text: `
LIMITED TIME OFFER - Save 20% on SEO Services

Hi {{{FIRST_NAME|there}}},

For a limited time, we're offering 20% off our comprehensive SEO packages for trucking companies.

What You'll Get:
✅ Complete SEO audit
✅ Keyword research & strategy
✅ On-page optimization
✅ Local SEO setup
✅ Monthly reporting

⏰ Offer expires in 7 days!

Claim your discount: https://truckmarketing.com.au/contact

Questions? Call us at 0491 999 011

Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}
  `
}

export const introductoryTemplate = {
  subject: "🚚 Welcome to Truck Marketing - Your Growth Partner in Logistics",
  name: "Welcome Email - {Date}",
  html: `
<div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
  <!-- Header with gradient background -->
  <div style="background: linear-gradient(135deg, #0066CC 0%, #004499 100%); padding: 40px 20px; text-align: center; border-radius: 0 0 24px 24px;">
    <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
      Truck Marketing
    </h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px; font-weight: 400;">
      Powering Growth Through Return Haulage
    </p>
  </div>

  <!-- Main Content -->
  <div style="padding: 40px 20px;">
    <!-- Greeting -->
    <p style="font-size: 18px; line-height: 1.6; color: #1f2937; margin-bottom: 24px;">
      G'day {{{FIRST_NAME|there}}},
    </p>
    
    <p style="font-size: 16px; line-height: 1.8; color: #374151; margin-bottom: 32px;">
      Welcome to Truck Marketing! We're excited to introduce you to Australia's premier marketing agency dedicated exclusively to the trucking and logistics industry.
    </p>

    <!-- Partnership Section -->
    <div style="background-color: #f3f4f6; padding: 32px; border-radius: 12px; margin-bottom: 32px;">
      <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 24px; font-weight: 600;">
        A Powerful Partnership
      </h2>
      <p style="font-size: 16px; line-height: 1.8; color: #374151; margin-bottom: 20px;">
        Truck Marketing brings together the industry expertise of <strong style="color: #0066CC;">Twincity Truck Centre</strong> and the creative excellence of <strong style="color: #0066CC;">Brandjam Creative</strong> to deliver marketing solutions that truly understand your business.
      </p>
      <div style="display: table; width: 100%;">
        <div style="display: table-row;">
          <div style="display: table-cell; padding: 12px 16px 12px 0;">
            <div style="background-color: white; padding: 16px; border-radius: 8px; border-left: 4px solid #0066CC;">
              <strong style="color: #111827;">Industry Knowledge</strong>
              <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 14px;">
                Deep understanding of trucking operations and challenges
              </p>
            </div>
          </div>
          <div style="display: table-cell; padding: 12px 0 12px 16px;">
            <div style="background-color: white; padding: 16px; border-radius: 8px; border-left: 4px solid #ff6b35;">
              <strong style="color: #111827;">Creative Excellence</strong>
              <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 14px;">
                Award-winning design and marketing strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Focus -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 28px; font-weight: 600;">
        It's All About Growth & Return Haulage
      </h2>
      <p style="font-size: 16px; line-height: 1.8; color: #374151; max-width: 500px; margin: 0 auto;">
        We understand that empty miles mean lost revenue. Our marketing strategies are designed to help you find more loads, optimize routes, and maximize your fleet's profitability.
      </p>
    </div>

    <!-- Services Grid -->
    <h3 style="color: #111827; margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">
      How We Help Your Business Grow
    </h3>
    
    <div style="margin-bottom: 32px;">
      <!-- Service 1 -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center;">
          <div style="background-color: #dbeafe; width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px; flex-shrink: 0;">
            <span style="font-size: 24px;">🔍</span>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">
              Trucking SEO
            </h4>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Get found by shippers searching for reliable carriers in your lanes
            </p>
          </div>
        </div>
      </div>

      <!-- Service 2 -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center;">
          <div style="background-color: #fef3c7; width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px; flex-shrink: 0;">
            <span style="font-size: 24px;">📈</span>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">
              Lead Generation
            </h4>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Connect with freight brokers and direct shippers for consistent loads
            </p>
          </div>
        </div>
      </div>

      <!-- Service 3 -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
        <div style="display: flex; align-items: center;">
          <div style="background-color: #d1fae5; width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px; flex-shrink: 0;">
            <span style="font-size: 24px;">🌐</span>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">
              Website Development
            </h4>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Professional websites that showcase your fleet and capabilities
            </p>
          </div>
        </div>
      </div>

      <!-- Service 4 -->
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px;">
        <div style="display: flex; align-items: center;">
          <div style="background-color: #fce7f3; width: 48px; height: 48px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-right: 16px; flex-shrink: 0;">
            <span style="font-size: 24px;">📊</span>
          </div>
          <div>
            <h4 style="margin: 0 0 4px 0; color: #111827; font-size: 16px; font-weight: 600;">
              Performance Analytics
            </h4>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              Track ROI and optimize your marketing for maximum results
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Metrics -->
    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 32px;">
      <h3 style="color: white; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
        Our Clients See Real Results
      </h3>
      <div style="display: table; width: 100%; max-width: 400px; margin: 0 auto;">
        <div style="display: table-row;">
          <div style="display: table-cell; padding: 0 10px; text-align: center;">
            <div style="font-size: 32px; font-weight: 700; color: white; margin-bottom: 4px;">243%</div>
            <div style="font-size: 14px; color: rgba(255,255,255,0.9);">More Leads</div>
          </div>
          <div style="display: table-cell; padding: 0 10px; text-align: center;">
            <div style="font-size: 32px; font-weight: 700; color: white; margin-bottom: 4px;">87%</div>
            <div style="font-size: 14px; color: rgba(255,255,255,0.9);">Less Empty Miles</div>
          </div>
          <div style="display: table-cell; padding: 0 10px; text-align: center;">
            <div style="font-size: 32px; font-weight: 700; color: white; margin-bottom: 4px;">5x</div>
            <div style="font-size: 14px; color: rgba(255,255,255,0.9);">ROI Average</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div style="text-align: center; margin: 40px 0;">
      <h3 style="color: #111827; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
        Ready to Fill Those Empty Miles?
      </h3>
      <p style="font-size: 16px; line-height: 1.6; color: #6b7280; margin-bottom: 24px;">
        Let's discuss how we can help your trucking business grow
      </p>
      <a href="https://truckmarketing.com.au/contact" style="display: inline-block; background-color: #ff6b35; color: white; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; transition: all 0.2s;">
        Get Your Free Marketing Audit →
      </a>
    </div>

    <!-- What's Next -->
    <div style="border-top: 1px solid #e5e7eb; margin-top: 48px; padding-top: 32px;">
      <h4 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">
        What Happens Next?
      </h4>
      <ol style="margin: 0; padding-left: 24px; color: #374151; font-size: 16px; line-height: 1.8;">
        <li style="margin-bottom: 12px;">We'll analyze your current online presence and identify opportunities</li>
        <li style="margin-bottom: 12px;">You'll receive a customized marketing strategy for your business</li>
        <li style="margin-bottom: 12px;">We'll show you exactly how to get more loads and reduce empty miles</li>
      </ol>
    </div>
  </div>

  <!-- Footer -->
  <div style="background-color: #f9fafb; padding: 32px 20px; border-top: 1px solid #e5e7eb;">
    <div style="text-align: center; margin-bottom: 24px;">
      <p style="color: #374151; margin: 0 0 16px 0; font-size: 16px;">
        Have questions? We're here to help!
      </p>
      <div style="display: inline-block; text-align: left;">
        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
          📞 <a href="tel:0491999011" style="color: #0066CC; text-decoration: none;">0491 999 011</a>
        </p>
        <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
          ✉️ <a href="mailto:hello@truckmarketing.com.au" style="color: #0066CC; text-decoration: none;">hello@truckmarketing.com.au</a>
        </p>
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          🌐 <a href="https://truckmarketing.com.au" style="color: #0066CC; text-decoration: none;">truckmarketing.com.au</a>
        </p>
      </div>
    </div>
    
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        © 2025 Truck Marketing - A partnership between Twincity Truck Centre & Brandjam Creative
      </p>
      <p style="color: #9ca3af; font-size: 12px; margin: 8px 0 0 0;">
        You received this email because you expressed interest in trucking marketing services.
        <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #6b7280;">Unsubscribe</a>
      </p>
    </div>
  </div>
</div>
  `,
  text: `
Welcome to Truck Marketing - Your Growth Partner in Logistics

G'day {{{FIRST_NAME|there}}},

Welcome to Truck Marketing! We're excited to introduce you to Australia's premier marketing agency dedicated exclusively to the trucking and logistics industry.

A POWERFUL PARTNERSHIP
Truck Marketing brings together the industry expertise of Twincity Truck Centre and the creative excellence of Brandjam Creative to deliver marketing solutions that truly understand your business.

• Industry Knowledge: Deep understanding of trucking operations and challenges
• Creative Excellence: Award-winning design and marketing strategies

IT'S ALL ABOUT GROWTH & RETURN HAULAGE
We understand that empty miles mean lost revenue. Our marketing strategies are designed to help you find more loads, optimize routes, and maximize your fleet's profitability.

HOW WE HELP YOUR BUSINESS GROW:

🔍 Trucking SEO
Get found by shippers searching for reliable carriers in your lanes

📈 Lead Generation  
Connect with freight brokers and direct shippers for consistent loads

🌐 Website Development
Professional websites that showcase your fleet and capabilities

📊 Performance Analytics
Track ROI and optimize your marketing for maximum results

OUR CLIENTS SEE REAL RESULTS:
More Leads
Less Empty Miles  


Ready to Fill Those Empty Miles?
Let's discuss how we can help your trucking business grow.

Get Your Free Marketing Audit: https://truckmarketing.com.au/contact

WHAT HAPPENS NEXT?
1. We'll analyze your current online presence and identify opportunities
2. You'll receive a customized marketing strategy for your business
3. We'll show you exactly how to get more loads and reduce empty miles

Have questions? We're here to help!
📞 0491 999 011
✉️ hello@truckmarketing.com.au
🌐 truckmarketing.com.au

© 2025 Truck Marketing - A partnership between Twincity Truck Centre & Brandjam Creative

You received this email because you expressed interest in trucking marketing services.
Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}
  `
}