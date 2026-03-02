/**
 * Trending Destinations Component
 * Displays featured travel destinations
 */

const TrendingComponent = {
    /**
     * Sample data for trending destinations
     */
    destinations: [
        {
            id: 1,
            name: 'Paris, France',
            image: 'https://via.placeholder.com/400x250?text=Paris',
            description: 'Experience the magic of the City of Light with iconic landmarks and world-class cuisine.',
            rating: 4.8,
            reviews: 324
        },
        {
            id: 2,
            name: 'Tokyo, Japan',
            image: 'https://via.placeholder.com/400x250?text=Tokyo',
            description: 'Dive into the blend of ancient traditions and cutting-edge technology.',
            rating: 4.9,
            reviews: 287
        },
        {
            id: 3,
            name: 'Bali, Indonesia',
            image: 'https://via.placeholder.com/400x250?text=Bali',
            description: 'Relax on pristine beaches and explore lush rice terraces and temples.',
            rating: 4.7,
            reviews: 412
        },
        {
            id: 4,
            name: 'New York, USA',
            image: 'https://via.placeholder.com/400x250?text=New+York',
            description: 'The city that never sleeps offers endless entertainment and iconic attractions.',
            rating: 4.6,
            reviews: 542
        }
    ],
    
    /**
     * Initialize trending component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const trendingHTML = `
        <section class="py-5">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Trending Destinations</h2>
                    <p class="text-muted">Explore our most popular tour destinations</p>
                </div>
                
                <div class="row g-4">
                    ${this.destinations.map(dest => this.renderCard(dest)).join('')}
                </div>
                
                <div class="text-center mt-5">
                    <a href="#" data-nav="packages" class="btn btn-primary btn-lg">
                        View All Destinations
                    </a>
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#trending-container');
        if (container) {
            container.innerHTML = trendingHTML;
        }
    },
    
    /**
     * Render individual destination card
     * @param {object} destination - Destination data
     * @returns {string} Card HTML
     */
    renderCard(destination) {
        return `
        <div class="col-lg-6 col-xl-3">
            <div class="card h-100">
                <div class="card-img-wrapper position-relative">
                    <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
                    <div class="card-overlay">
                        <div class="card-overlay-content">
                            <button class="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${destination.name}</h5>
                    <p class="card-text text-muted">${destination.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge badge-primary">
                            <i class="fas fa-star me-1"></i>${destination.rating}
                        </span>
                        <small class="text-muted">${destination.reviews} reviews</small>
                    </div>
                </div>
                <div class="card-footer bg-light">
                    <button class="btn btn-outline-primary w-100" data-nav="book">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        `;
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    TrendingComponent.init();
});
