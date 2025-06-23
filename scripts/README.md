# Email Broadcast Scripts

These scripts help you create email broadcasts in Resend that you can review and send from the Resend dashboard.

## Setup

Make sure you have the following environment variables in your `.env.local`:
- `RESEND_API_KEY` - Your Resend API key
- `RESEND_AUDIENCE_ID` - Your audience ID from Resend

## Creating Broadcasts

Run the broadcast creation script:

```bash
# Create a newsletter (default)
pnpm broadcast:create

# Create an announcement
pnpm broadcast:create announcement

# Create a promotional email
pnpm broadcast:create promotional
```

## Available Templates

### Newsletter
Monthly newsletter template with:
- Featured article section
- Marketing tips
- Call-to-action for free SEO audit

### Announcement
Special announcement template for:
- New service launches
- Company updates
- Important news

### Promotional
Sales/promotional template with:
- Discount offers
- Limited-time deals
- Strong call-to-action

## Workflow

1. Run the script to create a broadcast in Resend
2. Go to [Resend Broadcasts](https://resend.com/broadcasts)
3. Find your broadcast in the list
4. Edit the content as needed
5. Preview and test the email
6. Send to your audience

## Merge Tags

The following merge tags are available in Resend:
- `{{{FIRST_NAME|there}}}` - Recipient's first name with fallback
- `{{{LAST_NAME}}}` - Recipient's last name
- `{{{EMAIL}}}` - Recipient's email address
- `{{{RESEND_UNSUBSCRIBE_URL}}}` - Unsubscribe link (required)

## Notes

- Broadcasts are created as drafts in Resend
- You can edit, preview, and test before sending
- Always include the unsubscribe link
- Test with a small segment before sending to all contacts