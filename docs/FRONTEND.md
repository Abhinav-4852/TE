# Trident Escapes - Frontend Documentation

## Project Overview

This is a modern, responsive frontend for the Trident Escapes tour agency website built with **Bootstrap 5** and modular vanilla JavaScript. The project follows a component-based architecture for maximum code reusability and maintainability.

## File Structure

```
frontend/
├── index.html                 # Main HTML file
├── css/
│   ├── variables.css         # CSS variables and color palette
│   ├── layout.css            # Layout structure and grid
│   ├── components.css        # Global component styles
│   ├── hero.css              # Hero section styles
│   ├── cards.css             # Card component styles
│   ├── navigation.css        # Navbar styles
│   └── style.css             # Main stylesheet with utilities
├── js/
│   ├── main.js               # Application initialization
│   ├── router.js             # Client-side routing
│   └── components/
│       ├── navbar.js         # Navigation bar component
│       ├── hero.js           # Hero section component
│       ├── trending.js       # Trending destinations
│       ├── packages.js       # Tour packages component
│       ├── services.js       # Services listing
│       ├── whychoose.js      # Why Choose Us section
│       ├── team.js           # Team members section
│       ├── faq.js            # FAQ accordion
│       ├── footer.js         # Footer component
│       └── pages/
│           ├── about.js      # About Us page
│           ├── packages.js   # Packages page
│           ├── gallery.js    # Gallery/Photo page
│           ├── contact.js    # Contact Us page
│           └── book.js       # Booking page
└── assets/
    ├── images/               # Image assets
    └── data/                 # JSON data (optional)
```

## Technologies

- **HTML5** - Semantic markup
- **Bootstrap 5** - Responsive design framework
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - No dependencies, modular component architecture
- **Font Awesome 6** - Icon library

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Fluid typography
- Touch-friendly interactions

### 2. Modular Architecture
Each component is self-contained with:
- Independent rendering function
- Local state management
- Event handling
- Easy to update and maintain

### 3. Client-Side Routing
- Single Page Application (SPA) routing
- URL parameter support
- No page reload navigation
- History API support

### 4. CSS Variable System
Comprehensive design tokens:
- **Colors**: Primary, secondary, accent, dark, light
- **Spacing**: xs, sm, md, lg, xl, xxl
- **Typography**: Font sizes from xs to xxxl
- **Borders**: Border radius in sm, md, lg, xl

### 5. Bootstrap Integration
- Grid system
- Cards
- Accordion
- Modal
- Forms
- Utilities

## Component Architecture

All components follow this pattern:

```javascript
const ComponentName = {
    // Data
    data: { /* component data */ },
    
    // Initialize component
    init() {
        this.render();
        this.setupEventListeners();
    },
    
    // Render HTML
    render() {
        const html = `<!-- component markup -->`;
        document.querySelector('#container').innerHTML = html;
    },
    
    // Setup event listeners
    setupEventListeners() {
        // Add event listeners here
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ComponentName.init();
});
```

## CSS Variables System

### Color Variables
```css
--primary-color: #0066cc      /* Main brand color */
--secondary-color: #00a8e8    /* Secondary brand color */
--accent-color: #ff6b35       /* Accent color */
--dark-color: #1a1a1a         /* Dark backgrounds */
--light-color: #f5f5f5        /* Light backgrounds */
--text-color: #333333         /* Main text */
--light-text: #666666         /* Secondary text */
--border-color: #e0e0e0       /* Borders */
```

### Spacing System
```css
--spacing-xs: 0.25rem    /* 4px */
--spacing-sm: 0.5rem     /* 8px */
--spacing-md: 1rem       /* 16px */
--spacing-lg: 1.5rem     /* 24px */
--spacing-xl: 2rem       /* 32px */
--spacing-xxl: 3rem      /* 48px */
```

## Pages

### Home Page
- Features all components on one page
- Fully responsive design
- Smooth scrolling between sections

### About Us (`about.js`)
- Company story
- Mission & values
- Why choose us

### Packages (`packages.js`)
- All tour packages
- Filterable by duration
- Pricing details

### Gallery (`gallery.js`)
- Photo grid layout
- Category filters
- Lightbox modal viewer

### Contact (`contact.js`)
- Contact form
- Business information
- Map integration

### Book Trip (`book.js`)
- Tour selection
- Date picking
- Dynamic pricing calculator

## Routing

The Router controls page navigation without page reloads:

```javascript
// Navigation happens with data-nav attribute
<a href="#" data-nav="about">About Us</a>

// Programmatic navigation
Router.showPage('packages')
```

## Adding New Features

### Add a New Component

1. Create `js/components/mycomponent.js`
2. Define component object with `init()` and `render()`
3. Add container in index.html: `<div id="my-component-container"></div>`
4. Include script in index.html
5. Initialize in DOMContentLoaded event

### Add a New Page

1. Create `js/components/pages/mypage.js`
2. Add container in index.html: `<div id="my-page" class="page d-none"></div>`
3. Include script before main.js
4. Update Router pages object
5. Add navigation link with `data-nav="my-page"`

## API Integration

Global `APIService` for backend communication:

```javascript
// GET request
APIService.get('/endpoint')
  .then(data => console.log(data))

// POST request
APIService.post('/endpoint', { data: 'value' })
  .then(data => console.log(data))
```

Configuration in `main.js`:
```javascript
const API_CONFIG = {
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
};
```

## Utilities

Global `Utils` object provides helper functions:

```javascript
// Format currency
Utils.formatCurrency(1000, 'USD') // $1,000.00

// Format date
Utils.formatDate(new Date()) // March 1, 2024

// Check if mobile device
if (Utils.isMobile()) { /* mobile logic */ }

// Get URL parameter
Utils.getQueryParam('page') // returns page value

// Debounce and throttle
const debouncedScroll = Utils.debounce(handleScroll, 300)
```

## Best Practices

### Component Organization
- Keep components focused and single-responsibility
- Use descriptive naming conventions
- Document component purpose and usage
- Handle errors gracefully

### CSS Practices
- Use CSS variables for consistency
- Implement mobile-first responsive design
- Leverage Bootstrap utilities
- Minimize custom CSS when possible

### JavaScript Standards
- Use const/let instead of var
- Avoid global variables
- Use meaningful variable names
- Add comments for complex logic

### Performance
- Lazy load images with placeholder
- Use CSS animations over JavaScript
- Minimize DOM manipulation
- Debounce event handlers

### Accessibility
- Use semantic HTML elements
- Include alt text for images
- Ensure color contrast compliance
- Support keyboard navigation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Workflow

1. **Edit files** in `frontend/` directory
2. **Open `index.html`** in browser (use Live Server)
3. **Make changes** to HTML, CSS, or JS
4. **Refresh browser** to see updates
5. **Check console** (F12) for errors
6. **Test responsive design** (Ctrl+Shift+M)

## Deployment

### Prepare for Production
1. Minimize all CSS and JS files
2. Optimize all images
3. Update API_CONFIG with production URL
4. Test on production server
5. Verify all links and forms work

### Deploy Steps
1. Upload files to web server
2. Ensure CDN resources are accessible
3. Test cross-browser compatibility
4. Monitor console for errors
5. Verify API connectivity

## Troubleshooting

**Components not rendering?**
- Check browser console (F12)
- Verify container element ID matches
- Ensure scripts load in correct order

**Styles not applying?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS selector specificity
- Verify Bootstrap CDN is loading

**Navigation not working?**
- Check `data-nav` attributes
- Verify Router is initialized
- Check for JavaScript errors

## Resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/)
- [Font Awesome Icons](https://fontawesome.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Variables Reference](https://www.w3schools.com/css/css3_variables.asp)

---

**Last Updated**: March 1, 2024
**Version**: 1.0.0
