# 🎯 Quick Reference - Trident Escapes Config

## 📞 Contact Information

| Type | Value |
|------|-------|
| **Primary Email** | info@tridentescapes.com |
| **Support Email** | support@tridentescapes.com |
| **Bookings Email** | bookings@tridentescapes.com |
| **Forms Receive Email** | tweet.ayush@gmail.com |
| **Primary Phone** | +1 (800) 123-4567 |
| **WhatsApp** | +91 98765 43210 |
| **Emergency** | +1 (800) 911-HELP |

## 🏢 Address

```
123 Travel Street
Adventure City, AC 12345
United States
```

## ⏰ Business Hours

- **Monday - Friday:** 9:00 AM - 6:00 PM
- **Saturday:** 10:00 AM - 4:00 PM
- **Sunday:** Closed
- **Emergency Support:** 24/7 Available

## 🌐 Social Media

- **Facebook:** https://facebook.com/tridentescapes
- **Twitter:** https://twitter.com/tridentescapes
- **Instagram:** https://instagram.com/tridentescapes
- **LinkedIn:** https://linkedin.com/company/tridentescapes

## ✉️ Web3Forms Settings

- **Access Key:** `1b63b300-bd6a-4321-a483-ca57dbd8ef65`
- **Receiving Email:** tweet.ayush@gmail.com
- **API URL:** https://api.web3forms.com/submit

## 🔧 How to Use in Code

```javascript
// Include config file
<script src="js/config.js"></script>

// Access values
CONFIG.CONTACT.EMAIL.PRIMARY        // info@tridentescapes.com
CONFIG.CONTACT.PHONE.DISPLAY        // +1 (800) 123-4567
CONFIG.CONTACT.ADDRESS.FULL         // Full address
CONFIG.WEB3FORMS.ACCESS_KEY         // Web3Forms key
CONFIG.SOCIAL.INSTAGRAM             // Instagram URL

// Use utility functions
CONFIG.getFullAddress()              // Get formatted address
CONFIG.getPrimaryPhone()             // Get primary phone
CONFIG.getPrimaryEmail()             // Get primary email
CONFIG.getCopyrightText()            // Get copyright text
```

## 📝 Where Everything is Stored

| File | Purpose |
|------|---------|
| `frontend/js/config.js` | Main config (used by website) |
| `.env` | Environment variables (reference only) |
| `.env.example` | Template for new environments |

## ⚡ Quick Update Process

1. Open `frontend/js/config.js`
2. Find the section (CONTACT, SOCIAL, etc.)
3. Update the value
4. Save file
5. Refresh website (hard refresh: Ctrl+Shift+R)

## 🎨 Form Subjects

- **Contact Form:** "New Contact Form Submission - Trident Escapes"
- **Booking Form:** "New Booking Request - Trident Escapes"
- **Custom Itinerary:** "New Custom Itinerary Request - Trident Escapes"

---

**Last Updated:** March 2026
**For detailed documentation:** See `CONFIGURATION_GUIDE.md`
