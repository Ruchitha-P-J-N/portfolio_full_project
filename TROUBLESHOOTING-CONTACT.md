# Contact Form 404 Error - Troubleshooting Guide

## The Problem
You're getting "Request failed (404)" when submitting the contact form. This means the API endpoint isn't found.

## Solutions

### Option 1: Deploy to Netlify (Recommended)
1. **Push your code to GitHub**
2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Set Environment Variables in Netlify:**
   - Go to Site settings → Environment variables
   - Add:
     ```
     EMAIL_USER=your-gmail@gmail.com
     EMAIL_PASS=your-app-password
     ```

4. **Update API URL:**
   - After deployment, update `env.local` with your actual Netlify URL:
     ```
     VITE_CONTACT_API_URL=https://your-actual-site.netlify.app/api/contact
     ```

### Option 2: Test with Mock Service (Quick Fix) ✅ ACTIVE
For immediate testing, using httpbin.org mock service:

1. **Current setup in `env.local`:**
   ```bash
   VITE_CONTACT_API_URL=https://httpbin.org/post
   ```

2. **This will show the form data being sent (won't actually send emails)**
3. **The form should now work without 404 errors**

### Option 3: Local Development Server
If you want to test the Netlify function locally:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Start local development:**
   ```bash
   netlify dev
   ```

3. **Update `env.local`:**
   ```bash
   VITE_CONTACT_API_URL=http://localhost:8888/api/contact
   ```

## Current Status
- ✅ Contact form is configured
- ✅ Netlify function is ready
- ✅ Using mock service for testing (httpbin.org)
- ❌ **NOT receiving real emails** - using mock service
- ❌ API endpoint needs to be deployed for real emails
- ❌ Environment variables need to be set for real emails

## Why No Emails?
You're currently using `https://httpbin.org/post` which is a **mock service** that doesn't send real emails. It only shows the form data for testing purposes.

## Next Steps
1. Deploy to Netlify (Option 1) for full functionality
2. Or use mock service (Option 2) for immediate testing
3. Set up Gmail app password for email functionality

## Gmail Setup (for when you deploy)
1. Go to Google Account → Security → 2-Step Verification
2. Generate App Password for "Mail"
3. Use this password as `EMAIL_PASS` in Netlify
