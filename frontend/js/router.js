/**
 * Router Module
 * Handles page navigation and routing
 */

const Router = {
    /**
     * Initialize router and set up event listeners
     */
    init() {
        this.currentPage = 'home';
        this.pages = {
            'home': '#home-page',
            'about': '#about-page',
            'packages': '#packages-page',
            'gallery': '#gallery-page',
            'contact': '#contact-page',
            'book': '#book-page'
        };
        
        this.setupEventListeners();
        this.showPage('home');
    },
    
    /**
     * Set up navigation click listeners
     */
    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-nav]');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('data-nav');
                this.showPage(page);
                
                // Update URL without page reload
                window.history.pushState(null, null, `?page=${page}`);
                
                // Close mobile menu if open
                const navbarToggle = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    navbarToggle.click();
                }
            }
        });
    },
    
    /**
     * Show a specific page
     * @param {string} pageName - The page to show
     */
    showPage(pageName) {
        if (!this.pages[pageName]) {
            console.warn(`Page '${pageName}' not found`);
            return;
        }
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('d-none');
        });
        
        // Show selected page with animation
        const pageEl = document.querySelector(this.pages[pageName]);
        if (pageEl) {
            pageEl.classList.remove('d-none');
            pageEl.style.animation = 'fadeIn 0.3s ease-in';
        }
        
        // Update active nav link
        document.querySelectorAll('[data-nav]').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-nav') === pageName) {
                link.classList.add('active');
            }
        });
        
        this.currentPage = pageName;
        
        // Scroll to top
        window.scrollTo(0, 0);
    },
    
    /**
     * Get current page
     * @returns {string} Current page name
     */
    getCurrentPage() {
        return this.currentPage;
    }
};

// Export for use in main.js
export default Router;
