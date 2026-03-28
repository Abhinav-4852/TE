# 🚀 Deployment Guide - Trident Escapes

This guide explains how configuration files work and how to deploy to hosting services.

## 📂 Configuration Architecture

### Files That CAN be committed to GitHub:
- ✅ **`frontend/js/config.js`** - All business information (address, phone, social media, etc.)
- ✅ **All HTML/CSS/JS files** - Your website code
- ✅ **`.env.example`** - Template showing what secrets are needed

### Files That CANNOT be committed (in `.gitignore`):
- ❌ **`.env`** - Contains secrets (Web3Forms API key)

## 🎯 Why This Setup?

**Problem:** Previously all info was in `.env`, which:
- Is ignored by git (won't be deployed)
- Would need to be manually filled on hosting platforms
- Makes deployment time-consuming

**Solution:** Now separated into:
- **Public info** → `frontend/js/config.js` (committed to git, deploys automatically)
- **Secrets** → `.env` (stays private, only Web3Forms key needed)

## 📝 What's Stored Where

### `frontend/js/config.js` (✅ Committed to GitHub)
```javascript
- Company name, tagline, description
- Contact emails (primary, support, bookings)
- Phone numbers (primary, WhatsApp, emergency)
- Physical address
- Business hours
- Social media links
- Form subjects and settings
- Website settings
```

### `.env` (❌ Not Committed)
```
- WEB3FORMS_ACCESS_KEY (only secret needed)
- Development environment settings
```

## 🚀 Deployment Instructions

### Option 1: Using Deployment Script (Recommended)

**For any hosting platform:**

1. **Prepare environment:**
   ```bash
   # Copy template
   cp .env.example .env

   # Add your credentials
   # - WEB3FORMS_ACCESS_KEY=your-key-here
   # - WEB3FORMS_EMAIL=your-email@gmail.com
   ```

2. **Run setup script:**
   ```bash
   # Linux/Mac
   chmod +x setup-deployment.sh
   ./setup-deployment.sh

   # Windows
   setup-deployment.bat
   ```

3. **Deploy:**
   - **Netlify/Vercel:** Connect GitHub and deploy
   - **Traditional hosting:** Upload `frontend/` folder via FTP
   - **GitHub Pages:** Push to `gh-pages` branch

### Option 2: Manual Setup

1. **Open `.env` and copy your email**
2. **Open `frontend/js/config.js`**
3. **Replace both instances of `REPLACE_WITH_YOUR_EMAIL` with your email**
4. **Deploy the files**

### ⚠️ **After Deployment**

- Test all forms work by submitting test data
- Check your email inbox for form submissions
- If using deployment script, **don't commit the modified config.js**

---

## ✏️ Updating Business Information

### To change contact details, address, hours, etc:

1. **Open `frontend/js/config.js`**
2. **Find the section you want to update:**
   ```javascript
   CONTACT: {
       PHONE: {
           PRIMARY: '+1 (800) 123-4567',  // ← Change here
       }
   }
   ```
3. **Save and push to GitHub:**
   ```bash
   git commit -am "Updated phone number"
   git push
   ```
4. **Hosting auto-deploys** (if connected to GitHub)

### To change Web3Forms email recipient:

**In `config.js` (line 69):**
```javascript
EMAIL: 'tweet.ayush@gmail.com',  // ← Change this
```

Then push to GitHub. Done!

## 🔑 Managing Secrets

### Local Development:
1. Copy `.env.example` to `.env`
2. Add your Web3Forms access key
3. Add your receiving email address
4. Run setup script to configure for deployment:
   ```bash
   # Linux/Mac
   ./setup-deployment.sh

   # Windows
   setup-deployment.bat
   ```

### Production/Hosting:

**Static Hosts (Netlify/Vercel):**
- Add environment variable in dashboard:
  - Key: `WEB3FORMS_ACCESS_KEY`
  - Value: your access key
- Before deploying: Run setup script locally to inject email into `config.js`
- Deploy your files including the updated `config.js`

**Traditional Hosts:**
- Run setup script before uploading to FTP
- Upload all files including updated `config.js`

### ⚠️ **IMPORTANT: Email Privacy**

Your receiving email address is now private! Here's how it works:

1. **Email stored in `.env`** (not committed to git)
2. **`config.js` has placeholder** (safe to commit)
3. **Setup script copies email** from `.env` to `config.js` for deployment
4. **`config.js` ignored by git** after setup to keep email private

## 🎨 Deployment Checklist

Before deploying:
- [ ] All business info updated in `config.js`
- [ ] Web3Forms access key added
- [ ] Favicon present at `frontend/assets/favicon.png`
- [ ] Test forms locally
- [ ] All HTML files have config.js loaded
- [ ] Committed and pushed to GitHub

## 🆘 Troubleshooting

**Q: Forms not working after deployment?**
- Check Web3Forms key is set correctly
- Verify `config.js` is being loaded in HTML
- Check browser console for errors

**Q: Business info not updating on site?**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check if hosting auto-deployed latest commit

**Q: Do I need `.env` on hosting?**
- No for static hosts! Just set environment variable in dashboard
- For traditional hosts, you can hardcode the key in `config.js`

## 🌟 Benefits of This Setup

✅ **Easy Deployment** - Push to GitHub, auto-deploys
✅ **Quick Updates** - Change business info in one file
✅ **Secure** - Only API key is secret, safely stored
✅ **No Manual Setup** - Business info already in code
✅ **Version Controlled** - Track all changes in git
✅ **Team Friendly** - Anyone can update business info

## 📧 Support

Questions about deployment? Check the config.js file or contact tweet.ayush@gmail.com
