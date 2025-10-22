# Quick Email Setup - Get Real Emails to rp2374@nau.edu

## Current Issue
You're not receiving emails because the contact form is using a mock service (httpbin.org) instead of the real email function.

## Solution: Deploy to Netlify

### Step 1: Deploy Your Site
1. **Push to GitHub** (if not already done)
2. **Go to [netlify.com](https://netlify.com)**
3. **Click "New site from Git"**
4. **Connect your GitHub repository**
5. **Set these build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
6. **Deploy the site**

### Step 2: Set Environment Variables
1. **In Netlify dashboard, go to:**
   - Site settings → Environment variables
2. **Add these variables:**
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   ```

### Step 3: Get Gmail App Password
1. **Go to [Google Account Security](https://myaccount.google.com/security)**
2. **Enable 2-Step Verification** (if not already enabled)
3. **Go to "App passwords"**
4. **Generate a new app password for "Mail"**
5. **Use this password as `EMAIL_PASS` in Netlify**

### Step 4: Update Contact Form
1. **Get your Netlify site URL** (e.g., `https://amazing-portfolio.netlify.app`)
2. **Update `env.local`:**
   ```bash
   VITE_CONTACT_API_URL=https://your-actual-site.netlify.app/api/contact
   ```
3. **Restart your development server**

## Alternative: Use a Different Email Service

If you don't want to use Gmail, you can modify `netlify/functions/contact.js` to use:
- **SendGrid** (recommended for production)
- **Mailgun**
- **AWS SES**

## Test the Setup
1. **Fill out the contact form**
2. **Check rp2374@nau.edu for the email**
3. **Check Netlify function logs** if there are issues

## Current Status
- ✅ Netlify function is ready
- ✅ Email template is configured for rp2374@nau.edu
- ❌ Not deployed yet (that's why no emails)
- ❌ Environment variables not set

## Quick Test (Without Deployment)
If you want to test immediately without deploying, you can:
1. **Install Netlify CLI:** `npm install -g netlify-cli`
2. **Run:** `netlify dev`
3. **Update API URL to:** `http://localhost:8888/api/contact`
4. **Set environment variables locally**

But for production, you need to deploy to Netlify.
