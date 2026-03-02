/**
 * Services Component
 * Displays tour agency services
 */

const ServicesComponent = {
    /**
     * Sample services data
     */
    services: [
        {
            id: 1,
            icon: 'fas fa-map-marked-alt',
            title: 'Custom Itineraries',
            description: 'Create your own personalized travel plan tailored to your preferences'
        },
        {
            id: 2,
            icon: 'fas fa-hotel',
            title: 'Hotel Booking',
            description: 'Access to premium hotels and accommodations at competitive prices'
        },
        {
            id: 3,
            icon: 'fas fa-car',
            title: 'Transportation',
            description: 'Comfortable and reliable transport arrangements throughout your journey'
        },
        {
            id: 4,
            icon: 'fas fa-utensils',
            title: 'Food Services',
            description: 'Authentic local cuisine and dining experiences at select restaurants'
        },
        {
            id: 5,
            icon: 'fas fa-camera',
            title: 'Photography Tours',
            description: 'Capture the best moments with expert photography guidance'
        },
        {
            id: 6,
            icon: 'fas fa-life-ring',
            title: '24/7 Support',
            description: 'Round-the-clock customer support for peace of mind during travel'
        }
    ],
    
    /**
     * Initialize services component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const servicesHTML = `
        <section class="py-5">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Our Services</h2>
                    <p class="text-muted">Complete travel solutions for unforgettable experiences</p>
                </div>
                
                <div class="row g-4">
                    ${this.services.map(service => this.renderServiceCard(service)).join('')}
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#services-container');
        if (container) {
            container.innerHTML = servicesHTML;
        }
    },
    
    /**
     * Render individual service card
     * @param {object} service - Service data
     * @returns {string} Card HTML
     */
    renderServiceCard(service) {
        return `
        <div class="col-md-6 col-lg-4">
            <div class="feature-card">
                <div class="feature-icon mb-3">
                    <i class="${service.icon}"></i>
                </div>
                <h4 class="card-title">${service.title}</h4>
                <p class="card-text text-muted">${service.description}</p>
                <a href="#" class="text-primary fw-semibold small">Learn More <i class="fas fa-arrow-right ms-2"></i></a>
            </div>
        </div>
        `;
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ServicesComponent.init();
});
