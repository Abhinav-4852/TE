# Trident Escapes Frontend

Modern, responsive tour agency website built with Bootstrap 5 and modular vanilla JavaScript.

## 🚀 Quick Start

1. Open `index.html` in a web browser
2. No build process required!
3. All components load automatically

## 📋 What's Included

### Pages
- ✅ **Home** - Hero, trending destinations, packages, services, why choose us, team, FAQ
- ✅ **About Us** - Company story, mission, values
- ✅ **Packages** - All tour packages with filters
- ✅ **Gallery** - Photo gallery with categories
- ✅ **Contact** - Contact form and business info
- ✅ **Book Trip** - Complete booking form with pricing

### Features
- 📱 Fully responsive design
- 🎨 Beautiful Bootstrap 5 styling
- ⚡ Fast client-side routing (no page reloads)
- 🧩 Modular component architecture
- 📊 Dynamic pricing calculator
- 🔄 Form validation and submission
- 🖼️ Photo gallery with lightbox
- 📖 FAQ accordion
- 🎯 Smooth animations and transitions

## 📁 File Structure

```
frontend/
├── index.html                    # Main entry point
├── css/                          # Stylesheets
│   ├── variables.css            # Design tokens
│   ├── layout.css               # Layout & grid
│   ├── components.css           # Component styles
│   ├── hero.css                 # Hero section
│   ├── cards.css                # Card components
│   ├── navigation.css           # Navbar
│   └── style.css                # Utilities
├── js/
│   ├── main.js                  # App initialization
│   ├── router.js                # Page routing
│   └── components/
│       ├── navbar.js            # Navigation
│       ├── hero.js              # Hero banner
│       ├── trending.js          # Featured destinations
│       ├── packages.js          # Tour packages
│       ├── services.js          # Services list
│       ├── whychoose.js         # Benefits
│       ├── team.js              # Team members
│       ├── faq.js               # FAQ section
│       ├── footer.js            # Footer
│       └── pages/
│           ├── about.js         # About page
│           ├── packages.js      # Packages page
│           ├── gallery.js       # Gallery page
│           ├── contact.js       # Contact page
│           └── book.js          # Booking page
└── assets/
    └── images/                  # Images
```

## 🎨 Design System

### Colors
```
Primary:      #0066cc (Blue)
Secondary:    #00a8e8 (Light Blue)
Accent:       #ff6b35 (Orange)
Dark:         #1a1a1a (Charcoal)
Light:        #f5f5f5 (Off-white)
Text:         #333333 (Dark Gray)
```

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

### Border Radius
- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px

## 🔧 Technologies

- **HTML5** - Semantic markup
- **Bootstrap 5** - Responsive framework
- **CSS3** - Custom styling with variables
- **Vanilla JavaScript** - No dependencies
- **Font Awesome 6** - Icon library

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🚦 Navigation

Click any link with the data-nav attribute to navigate:

```html
<a href="#" data-nav="about">About Us</a>
<a href="#" data-nav="packages">Packages</a>
<a href="#" data-nav="contact">Contact</a>
```

No page reloads - instant single-page app navigation!

## 📦 Components

### Navbar
- Sticky positioning
- Mobile hamburger menu
- Active link highlighting
- CTA button

### Hero Section
- Gradient background
- Call-to-action button
- Animated entrance effects
- Responsive typography

### Cards
- Image with overlay effects
- Hover animations
- Badges and ratings
- Flexible content structure

### Forms
- Text inputs
- Dropdowns and selects
- Textarea fields
- Checkboxes and radios
- Form validation

### Pricing
- Price display with currency
- Feature lists
- "Popular" badge support
- Multiple accommodation tiers

## 🎯 Features Showcase

### Dynamic Pricing
The booking page calculates totals in real-time:
- Base package price
- Number of travelers
- Accommodation upgrades
- Optional add-ons

### Gallery Filtering
Filter photos by category:
- Monuments
- Nature
- Adventure
- Culture

### Package Filtering
Filter tours by duration:
- 5-7 days
- 8-10 days
- 11+ days

### Contact Form
- Name, email, message fields
- Topic selection
- Privacy policy agreement
- Success notification

### Booking Form
- Package selection
- Date picker
- Traveler count
- Accommodation options
- Add-ons selection
- Price calculator

## 🔌 API Integration

Backend API support included:

```javascript
// GET request
APIService.get('/endpoint')

// POST request
APIService.post('/endpoint', { data })
```

Configure API URL in `js/main.js`:
```javascript
const API_CONFIG = {
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
};
```

## 🛠️ Customization

### Change Colors
Edit `css/variables.css`:
```css
--primary-color: #yourhexcolor;
--secondary-color: #yourhexcolor;
```

### Modify Content
All text is in the JavaScript component files. Edit the data objects to update:
- Package names and prices
- Team member information
- Services descriptions
- FAQ answers

### Add New Components
1. Create `js/components/newcomponent.js`
2. Add container in `index.html`
3. Include script before `main.js`
4. Initialize in DOMContentLoaded

## 💡 Tips & Tricks

- Use browser DevTools (F12) to debug
- Check Console for any error messages
- Use Ctrl+Shift+M to preview mobile layout
- Edit CSS variables for quick theme changes
- Each component is independent and reusable

## 📊 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- No build process needed
- Single file deployment
- CDN-delivered dependencies
- Fast client-side routing
- Optimized animations

## 📚 Learning Resources

- [Bootstrap 5 Docs](https://getbootstrap.com)
- [Font Awesome Icons](https://fontawesome.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Variables Guide](https://www.w3schools.com/css/css3_variables.asp)

## 📝 License

© 2024 Trident Escapes. All rights reserved.

## 📧 Support

For issues or questions:
- Email: info@tridentescapes.com
- Phone: +1 (800) 123-4567

---

**Version**: 1.0.0  
**Last Updated**: March 1, 2024  
**Created with ❤️ for Trident Escapes**
