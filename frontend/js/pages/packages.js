/**
 * Packages Page Component
 * Full page component for all tour packages
 */

const PackagesPageComponent = {
    /**
     * Sample packages data
     */
    packages: [
        {
            id: 1,
            name: 'Golden Triangle',
            days: 5,
            startPrice: 599,
            rating: 4.8,
            reviews: 156,
            image: 'https://via.placeholder.com/400x300?text=Golden+Triangle',
            destinations: ['New Delhi', 'Agra', 'Jaipur'],
            highlights: ['Taj Mahal', 'Red Fort', 'City Palace', 'Hawa Mahal']
        },
        {
            id: 2,
            name: 'Golden Triangle + Rishikesh',
            days: 7,
            startPrice: 749,
            rating: 4.9,
            reviews: 198,
            image: 'https://via.placeholder.com/400x300?text=Rishikesh',
            destinations: ['New Delhi', 'Agra', 'Jaipur', 'Rishikesh'],
            highlights: ['Taj Mahal', 'Yoga Sessions', 'Ganges Aarti', 'Adventure Sports']
        },
        {
            id: 3,
            name: 'Golden Triangle + Rajasthan',
            days: 9,
            startPrice: 899,
            rating: 4.7,
            reviews: 134,
            image: 'https://via.placeholder.com/400x300?text=Rajasthan',
            destinations: ['New Delhi', 'Agra', 'Jaipur', 'Udaipur'],
            highlights: ['Desert Safari', 'Lake City Palace', 'Camel Trekking', 'Royal Fort']
        },
        {
            id: 4,
            name: 'Golden Triangle + Varanasi',
            days: 8,
            startPrice: 799,
            rating: 4.8,
            reviews: 167,
            image: 'https://via.placeholder.com/400x300?text=Varanasi',
            destinations: ['New Delhi', 'Agra', 'Jaipur', 'Varanasi'],
            highlights: ['Ganges Boat Cruise', 'Kashi Vishwanath', 'Sunrise Tour', 'Spiritual Experience']
        },
        {
            id: 5,
            name: 'North India Explorer',
            days: 10,
            startPrice: 1099,
            rating: 4.9,
            reviews: 89,
            image: 'https://via.placeholder.com/400x300?text=North+India',
            destinations: ['Delhi', 'Agra', 'Jaipur', 'Rishikesh', 'Varanasi'],
            highlights: ['Multiple cities', 'Cultural immersion', 'Spiritual journey', 'Combo experience']
        },
        {
            id: 6,
            name: 'Premium Luxury Tour',
            days: 12,
            startPrice: 1599,
            rating: 5.0,
            reviews: 42,
            image: 'https://via.placeholder.com/400x300?text=Luxury+Tour',
            destinations: ['All major cities', 'Luxury hotels', 'Private transfers'],
            highlights: ['5-star accommodations', 'Private guide', 'Gourmet dining', 'Exclusive experiences']
        }
    ],
    
    /**
     * Initialize packages page
     */
    init() {
        this.render();
        this.setupFilters();
    },
    
    /**
     * Render packages page
     */
    render() {
        const packagesHTML = `
        <div class="hero bg-secondary">
            <div class="hero-content">
                <h1 class="mb-3">Tour Packages</h1>
                <p class="lead">Choose from our comprehensive collection of carefully curated tour packages</p>
            </div>
        </div>
        
        <section class="py-5">
            <div class="container">
                <div class="row mb-4">
                    <div class="col-md-6">
                        <h3 class="mb-0">All Packages</h3>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <div class="btn-group" role="group">
                            <button type="button" class="btn btn-sm btn-outline-primary filter-btn active" data-filter="all">All</button>
                            <button type="button" class="btn btn-sm btn-outline-primary filter-btn" data-filter="5-7">5-7 Days</button>
                            <button type="button" class="btn btn-sm btn-outline-primary filter-btn" data-filter="8-10">8-10 Days</button>
                            <button type="button" class="btn btn-sm btn-outline-primary filter-btn" data-filter="11+">11+ Days</button>
                        </div>
                    </div>
                </div>
                
                <div class="row g-4">
                    ${this.packages.map(pkg => this.renderPackageCard(pkg)).join('')}
                </div>
            </div>
        </section>
        `;
        
        const pageContainer = document.querySelector('#packages-page');
        if (pageContainer) {
            pageContainer.innerHTML = packagesHTML;
        }
    },
    
    /**
     * Render package card
     * @param {object} pkg - Package data
     * @returns {string} Card HTML
     */
    renderPackageCard(pkg) {
        return `
        <div class="col-md-6 col-lg-4 package-card" data-days="${pkg.days}">
            <div class="card h-100">
                <div class="card-img-wrapper position-relative">
                    <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
                    <div class="card-badge">
                        <span class="badge badge-primary">${pkg.days} Days</span>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${pkg.name}</h5>
                    <div class="mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-warning small">
                                <i class="fas fa-star"></i> ${pkg.rating} (${pkg.reviews} reviews)
                            </span>
                        </div>
                    </div>
                    <p class="card-text text-muted small">
                        <strong>Includes:</strong><br>
                        ${pkg.destinations.map(d => `<i class="fas fa-map-marker-alt text-primary me-1"></i>${d}`).join('<br>')}
                    </p>
                    <p class="card-text text-muted small mt-2">
                        <strong>Highlights:</strong><br>
                        ${pkg.highlights.slice(0, 2).map(h => `<i class="fas fa-check text-success me-1"></i>${h}`).join('<br>')}
                    </p>
                </div>
                <div class="card-footer bg-light">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span>
                            <small class="text-muted">Starting from</small><br>
                            <strong class="text-primary">$${pkg.startPrice}</strong>
                        </span>
                    </div>
                    <button class="btn btn-primary w-100 btn-sm" data-nav="book">
                        View Details & Book
                    </button>
                </div>
            </div>
        </div>
        `;
    },
    
    /**
     * Setup filter functionality
     */
    setupFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const filter = e.target.getAttribute('data-filter');
                this.filterPackages(filter);
            });
        });
    },
    
    /**
     * Filter packages by duration
     * @param {string} filter - Filter type
     */
    filterPackages(filter) {
        document.querySelectorAll('.package-card').forEach(card => {
            const days = parseInt(card.getAttribute('data-days'));
            let show = false;
            
            if (filter === 'all') show = true;
            else if (filter === '5-7' && days >= 5 && days <= 7) show = true;
            else if (filter === '8-10' && days >= 8 && days <= 10) show = true;
            else if (filter === '11+' && days >= 11) show = true;
            
            card.style.display = show ? 'block' : 'none';
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    PackagesPageComponent.init();
});
