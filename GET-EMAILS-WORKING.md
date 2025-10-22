# 🚀 Get Contact Form Working NOW

## Step 1: Set Up Gmail App Password
1. **Go to [Google Account Security](https://myaccount.google.com/security)**
2. **Enable 2-Step Verification** (if not already)
3. **Go to "App passwords"**
4. **Generate password for "Mail"**
5. **Copy the 16-character password**

## Step 2: Set Environment Variables
Create a `.env` file in your project root:
```bash
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## Step 3: Start Local Development
Run these commands in your terminal:

```bash
# Terminal 1: Start Netlify dev server
netlify dev

# Terminal 2: Start Vue dev server (in another terminal)
npm run dev
```

## Step 4: Test the Form
1. **Go to your local site** (usually http://localhost:3000)
2. **Fill out the contact form**
3. **Submit the form**
4. **Check rp2374@nau.edu for the email!**

## What's Happening
- ✅ Netlify dev server runs the contact function locally
- ✅ Function sends real emails using Gmail SMTP
- ✅ Emails go directly to rp2374@nau.edu
- ✅ No deployment needed for testing

## Troubleshooting
- **If no email:** Check Gmail app password is correct
- **If error:** Make sure both servers are running
- **Check console:** Look for any error messages

## Current Setup
- ✅ Contact function: `netlify/functions/contact.js`
- ✅ API URL: `http://localhost:8888/api/contact`
- ✅ Email target: `rp2374@nau.edu`
- ❌ Need Gmail credentials

**Once you set up the Gmail app password, you'll receive real emails immediately!**
