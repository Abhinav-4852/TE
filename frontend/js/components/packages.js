/**
 * Tour Packages Component
 * Displays available tour packages
 */

const PackagesComponent = {
    /**
     * Sample data for tour packages
     */
    packages: [
        {
            id: 1,
            name: 'Golden Triangle',
            description: 'Explore Delhi, Agra, and Jaipur',
            price: 599,
            duration: '5 days',
            includes: ['3-star accommodation', 'All meals', 'Expert guide', 'Transport'],
            image: 'https://via.placeholder.com/400x250?text=Golden+Triangle'
        },
        {
            id: 2,
            name: 'Golden Triangle + Rishikesh',
            description: 'Added adventure and spiritual retreat',
            price: 749,
            duration: '7 days',
            includes: ['4-star accommodation', 'All meals', 'Expert guide', 'Transport', 'Yoga session'],
            image: 'https://via.placeholder.com/400x250?text=Rishikesh'
        },
        {
            id: 3,
            name: 'Golden Triangle + Rajasthan',
            description: 'Royal palaces and desert experience',
            price: 899,
            duration: '9 days',
            includes: ['5-star accommodation', 'All meals', 'Expert guide', 'Transport', 'Desert safari'],
            image: 'https://via.placeholder.com/400x250?text=Rajasthan'
        },
        {
            id: 4,
            name: 'Golden Triangle + Varanasi',
            description: 'Spiritual journey on the Ganges',
            price: 799,
            duration: '8 days',
            includes: ['4-star accommodation', 'All meals', 'Expert guide', 'Transport', 'Boat cruise'],
            image: 'https://via.placeholder.com/400x250?text=Varanasi'
        }
    ],
    
    /**
     * Initialize packages component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const packagesHTML = `
        <section class="py-5 bg-light-color">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Tour Packages</h2>
                    <p class="text-muted">Choose from our carefully curated tour packages</p>
                </div>
                
                <div class="row g-4">
                    ${this.packages.map((pkg, index) => this.renderPackageCard(pkg, index)).join('')}
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#packages-container');
        if (container) {
            container.innerHTML = packagesHTML;
        }
    },
    
    /**
     * Render individual package card
     * @param {object} pkg - Package data
     * @param {number} index - Package index
     * @returns {string} Card HTML
     */
    renderPackageCard(pkg, index) {
        const isFeatured = index === 1; // Make second package featured
        
        return `
        <div class="col-lg-6 col-xl-3">
            <div class="card price-card ${isFeatured ? 'featured' : ''}">
                <div class="card-img-wrapper position-relative">
                    <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}">
                    ${isFeatured ? '<div class="card-badge"><span class="badge badge-accent">Popular</span></div>' : ''}
                </div>
                <div class="card-body">
                    <h5 class="card-title">${pkg.name}</h5>
                    <p class="card-text text-muted small">${pkg.description}</p>
                    
                    <div class="price-tag mb-3">
                        <span class="price-currency">$</span>
                        <span class="price-amount">${pkg.price}</span>
                        <span class="price-period">per person</span>
                    </div>
                    
                    <div class="mb-3">
                        <small class="text-primary fw-semibold">
                            <i class="fas fa-calendar me-1"></i>${pkg.duration}
                        </small>
                    </div>
                    
                    <ul class="price-list">
                        ${pkg.includes.map(item => `<li><i class="fas fa-check"></i>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="card-footer bg-light">
                    <button class="btn btn-primary w-100" data-nav="book">
                        Book Package
                    </button>
                </div>
            </div>
        </div>
        `;
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    PackagesComponent.init();
});
