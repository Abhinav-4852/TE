# Trident Escapes - Configuration Guide

This guide explains how to use the centralized configuration system to manage all business information in one place.

## 📁 Files Overview

1. **`.env`** - Environment variables (backend reference, not used in frontend)
2. **`frontend/js/config.js`** - Main configuration file (used by all pages)

## 🎯 Configuration Structure

### Available Configuration Sections:

#### 1. **COMPANY** - Company Information
```javascript
CONFIG.COMPANY.NAME              // "Trident Escapes"
CONFIG.COMPANY.TAGLINE           // "Your Gateway to Incredible India"
CONFIG.COMPANY.FOUNDED           // "2020"
CONFIG.COMPANY.DESCRIPTION       // Company description
```

#### 2. **CONTACT** - Contact Information
```javascript
// Emails
CONFIG.CONTACT.EMAIL.PRIMARY            // info@tridentescapes.com
CONFIG.CONTACT.EMAIL.SUPPORT            // support@tridentescapes.com
CONFIG.CONTACT.EMAIL.BOOKINGS           // bookings@tridentescapes.com
CONFIG.CONTACT.EMAIL.RECEIVE_FORMS      // tweet.ayush@gmail.com

// Phone Numbers
CONFIG.CONTACT.PHONE.PRIMARY            // +1 (800) 123-4567
CONFIG.CONTACT.PHONE.WHATSAPP           // +91 98765 43210
CONFIG.CONTACT.PHONE.EMERGENCY          // +1 (800) 911-HELP
CONFIG.CONTACT.PHONE.DISPLAY            // Formatted for display
CONFIG.CONTACT.PHONE.LINK               // tel:+18001234567

// Address
CONFIG.CONTACT.ADDRESS.STREET           // 123 Travel Street
CONFIG.CONTACT.ADDRESS.CITY             // Adventure City
CONFIG.CONTACT.ADDRESS.STATE            // AC
CONFIG.CONTACT.ADDRESS.ZIP              // 12345
CONFIG.CONTACT.ADDRESS.COUNTRY          // United States
CONFIG.CONTACT.ADDRESS.FULL             // Full formatted address
CONFIG.CONTACT.ADDRESS.MAP_URL          // Google Maps embed URL

// Business Hours
CONFIG.CONTACT.HOURS.WEEKDAYS           // Monday - Friday: 9:00 AM - 6:00 PM
CONFIG.CONTACT.HOURS.SATURDAY           // Saturday: 10:00 AM - 4:00 PM
CONFIG.CONTACT.HOURS.SUNDAY             // Sunday: Closed
CONFIG.CONTACT.HOURS.EMERGENCY_SUPPORT  // 24/7 Emergency Support Available
CONFIG.CONTACT.HOURS.TIMEZONE           // EST (Eastern Standard Time)
```

#### 3. **SOCIAL** - Social Media Links
```javascript
CONFIG.SOCIAL.FACEBOOK          // https://facebook.com/tridentescapes
CONFIG.SOCIAL.TWITTER           // https://twitter.com/tridentescapes
CONFIG.SOCIAL.INSTAGRAM         // https://instagram.com/tridentescapes
CONFIG.SOCIAL.LINKEDIN          // https://linkedin.com/company/tridentescapes
CONFIG.SOCIAL.YOUTUBE           // https://youtube.com/@tridentescapes
CONFIG.SOCIAL.PINTEREST         // https://pinterest.com/tridentescapes
```

#### 4. **WEB3FORMS** - Form Submission Settings
```javascript
CONFIG.WEB3FORMS.ACCESS_KEY     // Your Web3Forms access key
CONFIG.WEB3FORMS.API_URL        // https://api.web3forms.com/submit
CONFIG.WEB3FORMS.EMAIL          // tweet.ayush@gmail.com
CONFIG.WEB3FORMS.ENABLED        // true/false to toggle forms
```

#### 5. **FORMS** - Form Configuration
```javascript
CONFIG.FORMS.CONTACT_SUBJECT              // Email subject for contact form
CONFIG.FORMS.BOOKING_SUBJECT              // Email subject for booking form
CONFIG.FORMS.CUSTOM_ITINERARY_SUBJECT     // Email subject for custom itinerary
CONFIG.FORMS.FROM_NAME                    // Sender name in emails
CONFIG.FORMS.SUCCESS_MESSAGE_DURATION     // 6000 (milliseconds)
CONFIG.FORMS.ERROR_MESSAGE_DURATION       // 8000 (milliseconds)
```

#### 6. **SITE** - Website Settings
```javascript
CONFIG.SITE.URL                 // https://tridentescapes.com
CONFIG.SITE.COPYRIGHT_YEAR      // 2026
CONFIG.SITE.COPYRIGHT_TEXT      // Full copyright text
CONFIG.SITE.PRIVACY_POLICY_URL  // /privacy-policy
CONFIG.SITE.TERMS_URL           // /terms-conditions
```

#### 7. **PACKAGES** - Tour Package Settings
```javascript
CONFIG.PACKAGES.MIN_TRAVELERS   // 1
CONFIG.PACKAGES.MAX_TRAVELERS   // 20
CONFIG.PACKAGES.DEFAULT_DURATION // 7 days
CONFIG.PACKAGES.CURRENCY        // USD
CONFIG.PACKAGES.CURRENCY_SYMBOL // $
```

#### 8. **SERVICES** - Available Services
```javascript
CONFIG.SERVICES.CUSTOM_ITINERARIES  // true
CONFIG.SERVICES.HOTEL_BOOKING       // true
CONFIG.SERVICES.TRANSPORTATION      // true
CONFIG.SERVICES.TOUR_GUIDES         // true
CONFIG.SERVICES.TRAVEL_INSURANCE    // true
CONFIG.SERVICES.PHOTOGRAPHY         // true
CONFIG.SERVICES.VISA_ASSISTANCE     // true
```

## 🛠️ Utility Functions

```javascript
// Get full formatted address
CONFIG.getFullAddress()

// Get primary phone number
CONFIG.getPrimaryPhone()

// Get primary email
CONFIG.getPrimaryEmail()

// Get formatted business hours
CONFIG.getBusinessHours()

// Get current year copyright text
CONFIG.getCopyrightText()
```

## 📝 Usage Examples

### Example 1: Display Contact Information in HTML
```html
<script src="js/config.js"></script>

<script>
    document.getElementById('phone').textContent = CONFIG.CONTACT.PHONE.DISPLAY;
    document.getElementById('email').textContent = CONFIG.CONTACT.EMAIL.PRIMARY;
    document.getElementById('address').textContent = CONFIG.CONTACT.ADDRESS.FULL;
</script>
```

### Example 2: Create a Contact Link
```javascript
const phoneLink = document.createElement('a');
phoneLink.href = CONFIG.CONTACT.PHONE.LINK;
phoneLink.textContent = CONFIG.CONTACT.PHONE.DISPLAY;
```

### Example 3: Display Business Hours
```javascript
const hoursDiv = document.getElementById('business-hours');
hoursDiv.innerHTML = `
    <p>${CONFIG.CONTACT.HOURS.WEEKDAYS}</p>
    <p>${CONFIG.CONTACT.HOURS.SATURDAY}</p>
    <p>${CONFIG.CONTACT.HOURS.SUNDAY}</p>
    <small>${CONFIG.CONTACT.HOURS.EMERGENCY_SUPPORT}</small>
`;
```

### Example 4: Social Media Icons
```javascript
const socialLinks = `
    <a href="${CONFIG.SOCIAL.FACEBOOK}">Facebook</a>
    <a href="${CONFIG.SOCIAL.TWITTER}">Twitter</a>
    <a href="${CONFIG.SOCIAL.INSTAGRAM}">Instagram</a>
`;
```

### Example 5: Form Submission with Web3Forms (Already Implemented)
```javascript
const formData = new FormData(form);
formData.append('access_key', CONFIG.WEB3FORMS.ACCESS_KEY);
formData.append('subject', CONFIG.FORMS.CONTACT_SUBJECT);
formData.append('from_name', CONFIG.FORMS.FROM_NAME);

const response = await fetch(CONFIG.WEB3FORMS.API_URL, {
    method: 'POST',
    body: formData
});
```

## ✏️ How to Update Information

### To update business information:

1. **Open `frontend/js/config.js`**
2. **Find the section you want to update**
3. **Change the value**
4. **Save the file**

Example - Update phone number:
```javascript
CONTACT: {
    PHONE: {
        PRIMARY: '+1 (888) NEW-NUMBER',  // ← Change here
        DISPLAY: '+1 (888) NEW-NUMBER',  // ← Change here too
        LINK: 'tel:+18886396862'         // ← Update link
    }
}
```

### To update Web3Forms email:
```javascript
WEB3FORMS: {
    ACCESS_KEY: 'your-access-key',
    EMAIL: 'new-email@gmail.com',  // ← Change here
}
```

## 🔒 Security Note

**IMPORTANT:** The `config.js` file contains your Web3Forms access key. While this is safe for frontend use, be aware:

1. ✅ Web3Forms keys are safe to expose in frontend code
2. ✅ They can only send emails, not receive or access your account
3. ⚠️ If you want extra security, consider adding the file to `.gitignore`

## 🎯 Benefits of Centralized Configuration

✅ **Single Source of Truth** - Update once, reflects everywhere
✅ **Easy Maintenance** - All info in one file
✅ **Consistency** - No mismatched info across pages
✅ **Quick Updates** - Change phone/email in seconds
✅ **Better Organization** - Structured and documented
✅ **Type Safety** - Clear structure prevents errors

## 📋 Quick Update Checklist

When business information changes:

- [ ] Update `frontend/js/config.js`
- [ ] Update `.env` (optional, for documentation)
- [ ] Test all forms still work
- [ ] Check contact pages display correctly
- [ ] Verify footer information updated
- [ ] Test phone/email links work

## 🆘 Troubleshooting

**Q: Forms not working after updating Web3Forms key?**
A: Clear browser cache and hard refresh (Ctrl+Shift+R)

**Q: Changes not showing on website?**
A: Make sure to clear cache or do a hard refresh

**Q: How to temporarily disable forms?**
A: Set `CONFIG.WEB3FORMS.ENABLED = false` in config.js

## 📞 Support

For questions about configuration:
- Check this guide first
- Review `config.js` comments
- Contact: tweet.ayush@gmail.com
