# Trident Escapes Website

A complete full-stack web application for Trident Escapes tour agency built with Bootstrap 5 frontend and Node.js/Express backend.

## 🚀 Quick Start

### Frontend Only (No Setup Required!)
1. Open `frontend/index.html` directly in your browser
2. Everything works immediately - no build process!

### Full Stack Development
Follow the installation steps below for both frontend and backend.

## 📋 Project Structure

```
TE/
├── frontend/                         # Bootstrap 5 + Vanilla JS
│   ├── index.html                   # Main entry point
│   ├── README.md                    # Frontend docs
│   ├── css/
│   │   ├── variables.css           # Design tokens
│   │   ├── layout.css              # Grid & layout
│   │   ├── components.css          # Component styles
│   │   ├── hero.css                # Hero styles
│   │   ├── cards.css               # Card styles
│   │   ├── navigation.css          # Navbar styles
│   │   └── style.css               # Utilities
│   ├── js/
│   │   ├── main.js                 # App initialization
│   │   ├── router.js               # SPA routing
│   │   └── components/
│   │       ├── navbar.js
│   │       ├── hero.js
│   │       ├── trending.js
│   │       ├── packages.js
│   │       ├── services.js
│   │       ├── whychoose.js
│   │       ├── team.js
│   │       ├── faq.js
│   │       ├── footer.js
│   │       └── pages/
│   │           ├── about.js
│   │           ├── packages.js
│   │           ├── gallery.js
│   │           ├── contact.js
│   │           └── book.js
│   └── assets/
│       └── images/
│
├── backend/                          # Node.js/Express API
│   ├── server.js
│   ├── package.json
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   └── public/
│
├── docs/
│   ├── API.md
│   ├── BACKEND.md
│   ├── FRONTEND.md                  # ← Frontend guide
│   ├── QUICKSTART.md
│   └── README.md
└── README.md                         # This file
```

## ✨ Frontend Features

- ✅ **Responsive Bootstrap 5** - Mobile-first design
- ✅ **Modular Components** - Reusable, maintainable code
- ✅ **Client-Side Routing** - SPA navigation without page reloads
- ✅ **6 Complete Pages**:
  - Home (Hero, Trending, Packages, Services, Why Choose Us, Team, FAQ)
  - About Us
  - Tour Packages (with filters)
  - Photo Gallery (with categories)
  - Contact Us (with form)
  - Book Trip (with dynamic pricing)
- ✅ **Rich Components**:
  - Sticky Navigation
  - Hero Banner with Animations
  - Card Layouts
  - Accordion FAQ
  - Contact Forms
  - Booking Calculator
  - Photo Gallery with Lightbox
- ✅ **Zero Dependencies** - Just HTML, CSS, and JavaScript!

## 🛠️ Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Node.js for backend development

### Frontend (Quick)

**Method 1: Direct Browser**
```bash
# Simply open the file
open frontend/index.html

# Or drag to browser window
```

**Method 2: Local Server**
```bash
cd frontend
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

### Full Stack Setup

#### Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=3000
NODE_ENV=development
```

Start backend:
```bash
npm start      # Production
npm run dev    # Development with auto-reload
```

Backend API: `http://localhost:3000`

#### Frontend Setup

In a new terminal:
```bash
cd frontend
python -m http.server 8000
```

Frontend: `http://localhost:8000`

## 🎨 Design System

### Color Palette
- **Primary**: #0066cc (Blue)
- **Secondary**: #00a8e8 (Light Blue)
- **Accent**: #ff6b35 (Orange)
- **Dark**: #1a1a1a
- **Light**: #f5f5f5

### Spacing Scale
xs (4px) → sm (8px) → md (16px) → lg (24px) → xl (32px) → xxl (48px)

### Typography
Mobile-first responsive sizing from xs to xxxl

## 🗂️ Pages & Routes

### Navigation Structure
- **Home** (`#home-page`) - Main landing page
- **About** (`#about-page`) - Company information
- **Packages** (`#packages-page`) - Tour packages with filters
- **Gallery** (`#gallery-page`) - Photo gallery with categories
- **Contact** (`#contact-page`) - Contact form and info
- **Book** (`#book-page`) - Booking system with calculator

## 💻 Technology Stack

### Frontend
- **Bootstrap 5** - Responsive framework
- **HTML5** - Semantic markup
- **CSS3** - Variables, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks/dependencies
- **Font Awesome 6** - Icons (CDN)

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Dotenv** - Environment management
- **CORS** - Cross-origin support
- **Helmet** - Security

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| Mobile | Latest ✅ |

## 🎯 Features Detail

### Home Page
Showcase multiple components on one page:
- Full-screen hero with CTA
- Trending destinations carousel
- Tour packages with pricing
- Service highlights
- Why choose us stats
- Team member cards
- FAQ accordion
- Contact footer

### About Page
- Company story and history
- Mission statement
- Core values
- Team strengths

### Packages Page
- All packages listed
- Duration-based filtering
- Rating and reviews
- Price breakdown
- "Book Now" integration

### Gallery Page
- Photo grid layout
- Category filters (monuments, nature, adventure, culture)
- Lightbox viewer
- Responsive image grid

### Contact Page
- Contact form with validation
- Business information
- Operating hours
- Map embed
- Success notification

### Booking Page
- Package selection
- Date picker
- Traveler count input
- Accommodation tier selection
- Add-ons (insurance, photography, meals)
- Real-time price calculation
- Booking summary sidebar
- Form submission

## 🔧 Extensibility

### Add New Component
```javascript
// Create: js/components/mycomponent.js
const MyComponent = {
    init() {
        this.render();
    },
    render() {
        const html = `<!-- markup -->`;
        document.querySelector('#my-container').innerHTML = html;
    }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    MyComponent.init();
});
```

### Add New Page
1. Create `js/components/pages/mypage.js`
2. Add container: `<div id="my-page" class="page d-none"></div>`
3. Include script in `index.html`
4. Update Router config

## 🚀 Deployment

### Deploy Frontend
```bash
# Build for production
# (No build step needed - just upload files)

# Upload to:
# - Netlify (drag & drop)
# - Vercel (git integration)
# - GitHub Pages (push to gh-pages)
# - Any static host
```

### Deploy Backend
```bash
# Deploy to:
# - Heroku
# - Railway
# - AWS Lambda
# - Google Cloud
# - DigitalOcean

# Remember to set environment variables on host
```

## 📊 Customization

### Change Theme Colors
Edit `frontend/css/variables.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Update Content
Edit component data in `frontend/js/components/*.js`:
```javascript
packages: [
    { id: 1, name: 'Your Package', price: 999 }
]
```

### Add New Features
- Modify component structure
- Add event listeners
- Call backend APIs
- Update styles with CSS variables

## 🔌 API Integration

Configure backend URL in `frontend/js/main.js`:
```javascript
const API_CONFIG = {
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
};
```

Use global API service:
```javascript
// GET
APIService.get('/endpoint')

// POST
APIService.post('/endpoint', { data })
```

## 📚 Available Utilities

Global utilities in `window.Utils`:
```javascript
Utils.formatCurrency(1000)          // $1,000.00
Utils.formatDate(new Date())        // March 1, 2024
Utils.isMobile()                    // true/false
Utils.getQueryParam('param')        // query value
Utils.debounce(func, 300)          // debounced function
Utils.throttle(func, 300)          // throttled function
```

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Components not showing | Check browser console (F12) and container IDs |
| Styles missing | Clear cache (Ctrl+Shift+Delete), check CSS load |
| Router not working | Verify `data-nav` attributes, check JS errors |
| API errors | Check backend is running, verify API URL |

## 📖 Documentation

- [Frontend Guide](docs/FRONTEND.md) - Component architecture, usage
- [Backend Guide](docs/BACKEND.md) - API routes, setup
- [Quick Start](docs/QUICKSTART.md) - Get running in 5 minutes
- [API Documentation](docs/API.md) - Endpoint reference

## 📝 License

© 2024 Trident Escapes. All Rights Reserved.

## 📞 Support & Contact

- **Email**: info@tridentescapes.com
- **Phone**: +1 (800) 123-4567
- **Hours**: Mon-Fri 9AM-6PM, Sat 10AM-4PM

## ⚙️ Configuration System

**✅ New: Simplified configuration for easy deployment!**

### What's Included:
- **`frontend/js/config.js`** - All business info (✅ committed to git)
- **`.env`** - Web3Forms secrets including email (❌ not committed)
- **`assets/favicon.png`** - Added to all HTML pages
- **Setup scripts** - `setup-deployment.sh` (Linux/Mac), `setup-deployment.bat` (Windows)

### Quick Config Update:
```javascript
// frontend/js/config.js - Edit business info here
CONFIG.CONTACT.EMAIL.PRIMARY = 'your-email@domain.com'
CONFIG.CONTACT.PHONE.PRIMARY = '+1 (555) 123-4567'
// Push to git → Auto deploys!
```

### Documentation:
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Deploy to any hosting
- **[CONFIGURATION_GUIDE.md](CONFIGURATION_GUIDE.md)** - All config options
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick lookup
- **[WEB3FORMS_SETUP.md](WEB3FORMS_SETUP.md)** - Form setup

---

**Version**: 1.0.0
**Last Updated**: March 28, 2026
**Maintained By**: Trident Escapes Development Team
