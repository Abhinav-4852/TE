/**
 * Why Choose Us Component
 * Highlights company benefits and features
 */

const WhyChooseComponent = {
    /**
     * Features highlighting why to choose
     */
    reasons: [
        {
            id: 1,
            icon: 'fas fa-star',
            number: '15+',
            title: 'Years of Experience',
            description: 'Over a decade and a half of crafting memorable travel experiences'
        },
        {
            id: 2,
            icon: 'fas fa-users',
            number: '50K+',
            title: 'Happy Travelers',
            description: 'Thousands of satisfied customers who trust us with their adventures'
        },
        {
            id: 3,
            icon: 'fas fa-globe',
            number: '100+',
            title: 'Destinations',
            description: 'Access to over a hundred amazing destinations worldwide'
        },
        {
            id: 4,
            icon: 'fas fa-award',
            number: '8/10',
            title: 'Rating',
            description: 'Consistently rated highly for service quality and customer satisfaction'
        }
    ],
    
    /**
     * Initialize why choose component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const whyChooseHTML = `
        <section class="py-5 bg-primary-light">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Why Choose Trident Escapes?</h2>
                    <p class="text-muted">We provide the best travel experiences with exceptional service</p>
                </div>
                
                <div class="row g-4">
                    ${this.reasons.map(reason => this.renderReasonCard(reason)).join('')}
                </div>
                
                <div class="text-center mt-5">
                    <p class="lead text-muted mb-4">We're committed to making your journey unforgettable</p>
                    <button class="btn btn-primary btn-lg" data-nav="book">
                        <i class="fas fa-check me-2"></i>Start Booking Now
                    </button>
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#why-choose-container');
        if (container) {
            container.innerHTML = whyChooseHTML;
        }
    },
    
    /**
     * Render individual reason card
     * @param {object} reason - Reason data
     * @returns {string} Card HTML
     */
    renderReasonCard(reason) {
        return `
        <div class="col-md-6 col-lg-3">
            <div class="text-center">
                <div class="mb-3">
                    <i class="${reason.icon} text-primary" style="font-size: 3rem;"></i>
                </div>
                <div class="mb-2">
                    <span class="h2 text-primary fw-bold">${reason.number}</span>
                </div>
                <h5 class="card-title mb-2">${reason.title}</h5>
                <p class="text-muted">${reason.description}</p>
            </div>
        </div>
        `;
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    WhyChooseComponent.init();
});
