# Web3Forms Setup Guide

All forms in your Trident Escapes website have been integrated with Web3Forms to send emails to **tweet.ayush@gmail.com**.

## ✅ What's Been Done

1. **Created configuration files:**
   - `.env` - Environment variables (for reference)
   - `frontend/js/config.js` - Frontend configuration file

2. **Updated HTML files:**
   - `frontend/contact.html` - Contact form
   - `frontend/book.html` - Booking form
   - `frontend/Custom_Itineraries.html` - Custom itinerary form

3. **All forms now:**
   - Submit to Web3Forms API
   - Display loading states
   - Show success/error messages
   - Include proper error handling

## 🚀 Setup Steps

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up with **tweet.ayush@gmail.com**
3. Verify your email
4. Copy your access key from the dashboard

### 2. Add Your Access Key

Open `frontend/js/config.js` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:

```javascript
const CONFIG = {
    WEB3FORMS: {
        ACCESS_KEY: 'your-actual-access-key-here',  // ← Replace this
        API_URL: 'https://api.web3forms.com/submit',
        EMAIL: 'tweet.ayush@gmail.com'
    },
    // ... rest of config
};
```

### 3. Test Your Forms

1. Open your website
2. Navigate to Contact, Booking, or Custom Itineraries pages
3. Fill out and submit a form
4. Check your email at tweet.ayush@gmail.com

## 📧 What You'll Receive

Each form submission will send an email with:

### Contact Form
- Subject: "New Contact Form Submission - Trident Escapes"
- Contains: First name, last name, email, phone, subject, message

### Booking Form
- Subject: "New Booking Request - Trident Escapes"
- Contains: All booking details + total amount

### Custom Itinerary Form
- Subject: "New Custom Itinerary Request - Trident Escapes"
- Contains: All custom itinerary details

## 🔐 Security Notes

1. **Never commit your access key to version control!**
   - The `.env` file is already in `.gitignore`
   - Consider adding `frontend/js/config.js` to `.gitignore` if you commit the actual key

2. **Alternative: Use environment variables**
   - If you set up a build process (Vite, Webpack, etc.), you can inject the access key at build time from `.env`

## 🔧 Files Modified

```
TE/
├── .env                                    (Created - your credentials)
├── .env.example                            (Updated - with web3forms fields)
├── frontend/
│   ├── js/
│   │   ├── config.js                       (Created - configuration)
│   │   └── components/
│   │       └── pages/
│   │           ├── contact.js              (Updated - uses CONFIG)
│   │           └── book.js                 (Updated - uses CONFIG)
│   ├── contact.html                        (Updated - web3forms integration)
│   ├── book.html                           (Updated - web3forms integration)
│   └── Custom_Itineraries.html             (Updated - web3forms integration)
```

## 📝 Notes

- Web3Forms has a free tier (250 submissions/month)
- Upgrade plans available for higher volume
- All form submissions are processed server-side, so no backend needed
- Email delivery is handled by Web3Forms infrastructure

## ❓ Troubleshooting

**Forms not sending?**
- Check that you added your access key to `config.js`
- Open browser console (F12) to check for errors
- Verify your email is confirmed in Web3Forms dashboard

**Not receiving emails?**
- Check spam folder
- Verify email in Web3Forms dashboard
- Test with a simple contact form first

## 🎉 You're All Set!

Once you add your access key, all three forms will be fully functional and sending emails to your inbox!
