/**
 * Footer Component
 * Renders the website footer with links and info
 */

const FooterComponent = {
    /**
     * Footer content and configuration
     */
    config: {
        company: 'Trident Escapes',
        year: new Date().getFullYear(),
        address: 'Address Line 1, City, State - 123456',
        email: 'info@tridentescapes.com',
        phone: '+1 (800) 123-4567',
        social: [
            { platform: 'facebook', icon: 'fab fa-facebook-f', url: '#' },
            { platform: 'twitter', icon: 'fab fa-twitter', url: '#' },
            { platform: 'instagram', icon: 'fab fa-instagram', url: '#' },
            { platform: 'linkedin', icon: 'fab fa-linkedin-in', url: '#' }
        ]
    },
    
    /**
     * Initialize footer component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const footerHTML = `
        <footer class="bg-dark text-light py-5">
            <div class="container">
                <div class="row g-4 mb-4">
                    <!-- Company Info -->
                    <div class="col-md-6 col-lg-3">
                        <h5 class="mb-3">
                            <i class="fas fa-compass text-primary me-2"></i>${this.config.company}
                        </h5>
                        <p class="text-muted small mb-3">${this.config.address}</p>
                        <ul class="list-unstyled text-muted small">
                            <li class="mb-2">
                                <a href="tel:${this.config.phone.replace(/\D/g, '')}" class="text-muted text-decoration-none">
                                    <i class="fas fa-phone me-2"></i>${this.config.phone}
                                </a>
                            </li>
                            <li>
                                <a href="mailto:${this.config.email}" class="text-muted text-decoration-none">
                                    <i class="fas fa-envelope me-2"></i>${this.config.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <!-- Quick Links -->
                    <div class="col-md-6 col-lg-3">
                        <h5 class="mb-3">Pages</h5>
                        <ul class="list-unstyled text-muted small">
                            <li class="mb-2"><a href="#" data-nav="home" class="text-muted text-decoration-none">Home</a></li>
                            <li class="mb-2"><a href="#" data-nav="about" class="text-muted text-decoration-none">About Us</a></li>
                            <li class="mb-2"><a href="#" data-nav="packages" class="text-muted text-decoration-none">Packages</a></li>
                            <li class="mb-2"><a href="#" data-nav="gallery" class="text-muted text-decoration-none">Gallery</a></li>
                            <li class="mb-2"><a href="#" data-nav="contact" class="text-muted text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    <!-- Tour Packages -->
                    <div class="col-md-6 col-lg-3">
                        <h5 class="mb-3">Tour Packages</h5>
                        <ul class="list-unstyled text-muted small">
                            <li class="mb-2"><a href="#" data-nav="packages" class="text-muted text-decoration-none">Golden Triangle</a></li>
                            <li class="mb-2"><a href="#" data-nav="packages" class="text-muted text-decoration-none">With Rishikesh</a></li>
                            <li class="mb-2"><a href="#" data-nav="packages" class="text-muted text-decoration-none">With Rajasthan</a></li>
                            <li class="mb-2"><a href="#" data-nav="packages" class="text-muted text-decoration-none">With Varanasi</a></li>
                        </ul>
                    </div>
                    
                    <!-- Our Services -->
                    <div class="col-md-6 col-lg-3">
                        <h5 class="mb-3">Our Services</h5>
                        <ul class="list-unstyled text-muted small">
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Custom Itineraries</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Hotel Booking</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Transportation</a></li>
                            <li class="mb-2"><a href="#" class="text-muted text-decoration-none">24/7 Support</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Social Links -->
                <div class="border-top pt-4 mb-4">
                    <div class="text-center mb-4">
                        <h6 class="text-light mb-3">Follow Us</h6>
                        <div class="d-flex justify-content-center gap-3">
                            ${this.config.social.map(social => `
                                <a href="${social.url}" class="text-muted text-decoration-none hover-translate" title="${social.platform}">
                                    <i class="${social.icon} fa-lg"></i>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Copyright -->
                <div class="border-top pt-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-muted small mb-0">
                                &copy; ${this.config.year} ${this.config.company}. All Rights Reserved.
                            </p>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <small class="text-muted">
                                <a href="#" class="text-muted text-decoration-none">Privacy Policy</a> | 
                                <a href="#" class="text-muted text-decoration-none">Terms & Conditions</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
        
        const footerContainer = document.querySelector('#footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = footerHTML;
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    FooterComponent.init();
});
