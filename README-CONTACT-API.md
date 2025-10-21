# Contact API Setup Guide

This guide will help you configure the contact form to send emails to `rp2374@nau.edu`.

## Setup Steps

### 1. Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command to: `npm run build`
4. Set the publish directory to: `dist`

### 2. Configure Environment Variables

In your Netlify dashboard, go to:
- Site settings → Environment variables

Add these variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

### 3. Gmail App Password Setup

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password as `EMAIL_PASS` in Netlify

### 4. Update API URL

After deployment, update your environment variable:
```
VITE_CONTACT_API_URL=https://your-site-name.netlify.app/api/contact
```

Or the contact form will automatically use `/api/contact` which works with Netlify redirects.

## How It Works

1. User fills out the contact form
2. Form submits to `/api/contact` (Netlify Function)
3. Function sends email to `rp2374@nau.edu` with:
   - Sender's name and email
   - Their message
   - Formatted HTML and plain text versions

## Testing

1. Deploy to Netlify
2. Fill out the contact form on your live site
3. Check `rp2374@nau.edu` for the email

## Troubleshooting

- Check Netlify function logs in the dashboard
- Ensure environment variables are set correctly
- Verify Gmail app password is valid
- Check that 2FA is enabled on Gmail account

## Alternative Email Services

You can modify `netlify/functions/contact.js` to use other email services:
- SendGrid
- Mailgun
- AWS SES
- Outlook/Hotmail

Just update the transporter configuration accordingly.
