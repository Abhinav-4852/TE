/**
 * Navbar Component
 * Renders the main navigation bar
 */

const NavbarComponent = {
    /**
     * Initialize navbar component
     */
    init() {
        this.render();
        this.setupScrollListener();
        this.setupSearch();
    },
    
    /**
     * Render navbar HTML
     */
    render() {
        const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-custom sticky-top">
            <div class="container">
                <a class="navbar-brand" href="#" data-nav="home">
                    <i class="fas fa-compass me-2"></i>Trident Escapes
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" data-nav="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-nav="about">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-nav="packages">Packages</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-nav="gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-nav="contact">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-primary btn-sm navbar-cta ms-2" data-nav="book">
                                <i class="fas fa-calendar-check me-1"></i>Book Your Trip
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        `;
        
        const navContainer = document.querySelector('#navbar-container');
        if (navContainer) {
            navContainer.innerHTML = navbarHTML;
        }
    },
    
    /**
     * Setup scroll listener for navbar shadow effect
     */
    setupScrollListener() {
        const navbar = document.querySelector('.navbar-custom');
        if (!navbar) return;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    },
    
    /**
     * Setup search functionality
     */
    setupSearch() {
        // Can be extended for functionality
    },
    
    /**
     * Highlight active nav item
     * @param {string} page - Current page
     */
    setActive(page) {
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-nav') === page) {
                link.classList.add('active');
            }
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    NavbarComponent.init();
});
