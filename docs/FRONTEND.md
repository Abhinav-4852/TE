# Frontend Development Guide

Guidelines and best practices for working with the Trident Escapes frontend.

## File Structure

```
frontend/
├── index.html              # Home page (main entry point)
├── pages/                  # Additional pages
│   ├── about.html
│   ├── destinations.html
│   └── contact.html
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # Main JavaScript file
├── images/                # Image assets
│   └── (Add .png, .jpg, .gif files)
└── assets/                # Other assets (fonts, icons, etc.)
    └── (Add fonts and icons)
```

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Responsive design with Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure ES6+

## CSS Architecture

**Color Scheme:**
```css
--primary-color: #0066cc      /* Blue */
--secondary-color: #004a99    /* Dark Blue */
--text-color: #333            /* Dark Gray */
--light-bg: #f5f5f5          /* Light Gray */
--border-color: #ddd         /* Light Border */
```

**Breakpoints:**
```css
/* Mobile First Approach */
Default: < 768px
@media (max-width: 768px)  /* Tablets and below */
```

## JavaScript Standards

### API Communication

All API calls should use the configured base URL:

```javascript
const API_URL = 'http://localhost:3000/api';

// Example API call
fetch(`${API_URL}/health`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('API Error:', error));
```

### Event Handling

```javascript
// Always use addEventListener
element.addEventListener('click', handleClick);

// Example
document.querySelector('.cta-button').addEventListener('click', () => {
  console.log('Button clicked');
});
```

### DOM Manipulation

```javascript
// Query selectors
document.querySelector('.class-name');
document.querySelectorAll('.class-name');

// Creating elements
const div = document.createElement('div');
div.classList.add('my-class');
document.body.appendChild(div);
```

## Adding New Pages

### 1. Create HTML File

Create `pages/new-page.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page - Trident Escapes</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <!-- Navigation -->
    </header>

    <main>
        <!-- Page content -->
    </main>

    <footer>
        <!-- Footer -->
    </footer>

    <script src="../js/main.js"></script>
</body>
</html>
```

### 2. Update Navigation

Update all HTML files to include the new page in navigation:
```html
<ul class="nav-links">
    <li><a href="../index.html">Home</a></li>
    <li><a href="new-page.html">New Page</a></li>
</ul>
```

### 3. Add Styles (if needed)

Add custom styles to `css/style.css`:
```css
.new-page-section {
  /* Your styles */
}
```

## Adding Images

1. Place images in `images/` folder
2. Reference in HTML:
```html
<img src="images/my-image.png" alt="Description">
```

3. Best Practices:
   - Use descriptive `alt` text for accessibility
   - Optimize images before uploading (WebP format recommended)
   - Keep file sizes under 500KB for web
   - Use consistent naming: `kebab-case`

## Performance Tips

1. **Minimize HTTP Requests**: Combine CSS and JS files when possible
2. **Image Optimization**: Use modern formats (WebP) with fallbacks
3. **Lazy Loading**: Implement for below-the-fold images
4. **Caching**: Configure browser caching in backend
5. **Minification**: Minify CSS and JS for production

## Accessibility Standards

### Semantic HTML
```html
<!-- Good -->
<nav>Navigation here</nav>
<header>Header here</header>
<main>Main content</main>
<footer>Footer here</footer>

<!-- Avoid <div> for structural elements -->
```

### ARIA Labels
```html
<button aria-label="Close menu">×</button>
<img src="logo.png" alt="Trident Escapes Logo">
```

### Color Contrast
- Text should have sufficient contrast (WCAG AA standard)
- Don't rely on color alone for meaning

## Testing Your Frontend

### Manual Testing Checklist
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile (iOS Safari, Chrome Mobile)
- [ ] Verify all links work
- [ ] Check form submissions
- [ ] Test keyboard navigation
- [ ] Verify responsive design at different breakpoints

### Browser DevTools
- Press F12 to open DevTools
- Use Mobile view (Ctrl+Shift+M)
- Check Console for JavaScript errors
- Use Network tab to monitor API calls

## Common Tasks

### Styling a Component
```css
.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}
```

### Adding a Form
```html
<form id="contact-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>
```

### Handling Form Submission
```javascript
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  fetch(`${API_URL}/contact`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Error:', err));
});
```

## Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Responsive Design](https://responsivedesign.is/)

---

**Last Updated**: February 28, 2024
