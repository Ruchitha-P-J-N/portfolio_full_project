# 📧 Get Emails to rp2374@nau.edu - ACTIVE SETUP

## ✅ Netlify Dev Server is Running!
The contact function is now active and ready to send emails.

## 🔧 Final Steps to Receive Emails:

### 1. Get Your Gmail App Password
1. **Go to:** https://myaccount.google.com/security
2. **Enable 2-Step Verification** (if not already enabled)
3. **Click "App passwords"**
4. **Select "Mail" and generate password**
5. **Copy the 16-character password**

### 2. Update Your .env File
Edit the `.env` file in your project root:
```bash
EMAIL_USER=your-actual-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### 3. Test the Contact Form
1. **Go to your site** (http://localhost:3000 or your dev server)
2. **Fill out the contact form**
3. **Click Send**
4. **Check rp2374@nau.edu for the email!**

## 🎯 What's Happening:
- ✅ **Netlify dev server running** - Contact function is active
- ✅ **Email configured** - Will send to rp2374@nau.edu
- ✅ **Gmail SMTP ready** - Just need your credentials
- ❌ **Need Gmail app password** - This is the only missing piece

## 📧 Email Content:
When someone fills out the form, you'll receive:
- **From:** Your Gmail address
- **To:** rp2374@nau.edu
- **Subject:** "Portfolio Contact Form: Message from [Name]"
- **Content:** Name, email, and message from the form

## 🚨 If You Don't Get Emails:
1. **Check spam folder** in rp2374@nau.edu
2. **Verify Gmail app password** is correct
3. **Check Netlify dev server logs** for errors
4. **Make sure both servers are running**

**Once you add the Gmail app password, emails will work immediately!**
