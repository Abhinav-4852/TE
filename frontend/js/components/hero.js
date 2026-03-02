/**
 * Hero Component
 * Renders the hero banner section
 */

const HeroComponent = {
    /**
     * Initialize hero component
     */
    init() {
        this.render();
    },
    
    /**
     * Render hero HTML
     */
    render() {
        const heroHTML = `
        <div class="hero">
            <div class="hero-content">
                <h1 class="mb-3">Design Your Dream Escape</h1>
                <p class="lead mb-4">Explore amazing travel experiences around the world with Trident Escapes</p>
                <button class="btn btn-primary btn-lg" data-nav="book">
                    <i class="fas fa-plane me-2"></i>Start Your Adventure
                </button>
            </div>
        </div>
        `;
        
        const heroContainer = document.querySelector('#hero-container');
        if (heroContainer) {
            heroContainer.innerHTML = heroHTML;
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    HeroComponent.init();
});
