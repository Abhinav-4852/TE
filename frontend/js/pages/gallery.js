/**
 * Gallery Page Component
 * Full page component for photo gallery
 */

const GalleryPageComponent = {
    /**
     * Sample gallery images
     */
    galleryItems: [
        { id: 1, title: 'Taj Mahal at Sunrise', category: 'monuments', image: 'https://via.placeholder.com/400x300?text=Taj+Mahal' },
        { id: 2, title: 'City Palace Jaipur', category: 'monuments', image: 'https://via.placeholder.com/400x300?text=City+Palace' },
        { id: 3, title: 'Hawa Mahal', category: 'monuments', image: 'https://via.placeholder.com/400x300?text=Hawa+Mahal' },
        { id: 4, title: 'Ganges Sunset', category: 'nature', image: 'https://via.placeholder.com/400x300?text=Ganges' },
        { id: 5, title: 'Desert Safari', category: 'adventure', image: 'https://via.placeholder.com/400x300?text=Desert+Safari' },
        { id: 6, title: 'Mountain Views', category: 'nature', image: 'https://via.placeholder.com/400x300?text=Mountains' },
        { id: 7, title: 'Local Market', category: 'culture', image: 'https://via.placeholder.com/400x300?text=Market' },
        { id: 8, title: 'Temple Rituals', category: 'culture', image: 'https://via.placeholder.com/400x300?text=Temple' },
        { id: 9, title: 'Adventure Sports', category: 'adventure', image: 'https://via.placeholder.com/400x300?text=Adventure' }
    ],
    
    /**
     * Initialize gallery page
     */
    init() {
        this.render();
        this.setupFilters();
        this.setupLightbox();
    },
    
    /**
     * Render gallery page
     */
    render() {
        const categories = ['all', 'monuments', 'nature', 'adventure', 'culture'];
        
        const galleryHTML = `
        <div class="hero bg-secondary">
            <div class="hero-content">
                <h1 class="mb-3">Gallery</h1>
                <p class="lead">Explore beautiful moments from our tours</p>
            </div>
        </div>
        
        <section class="py-5">
            <div class="container">
                <div class="mb-5 text-center">
                    <div class="btn-group" role="group">
                        ${categories.map(cat => `
                            <button type="button" class="btn btn-sm btn-outline-primary gallery-filter ${cat === 'all' ? 'active' : ''}" data-filter="${cat}">
                                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="row g-3 gallery-container">
                    ${this.galleryItems.map(item => this.renderGalleryItem(item)).join('')}
                </div>
            </div>
        </section>
        
        <!-- Lightbox Modal -->
        <div class="modal fade" id="galleryModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content bg-dark">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    <div class="modal-body p-0">
                        <img id="lightboxImage" src="" alt="" class="img-fluid w-100" style="max-height: 80vh; object-fit: cover;">
                    </div>
                    <div class="modal-footer bg-dark border-top-dark">
                        <p id="lightboxTitle" class="text-light mb-0"></p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        const pageContainer = document.querySelector('#gallery-page');
        if (pageContainer) {
            pageContainer.innerHTML = galleryHTML;
        }
    },
    
    /**
     * Render gallery item
     * @param {object} item - Gallery item
     * @returns {string} HTML
     */
    renderGalleryItem(item) {
        return `
        <div class="col-md-6 col-lg-4 gallery-item" data-category="${item.category}">
            <div class="card card-minimal overflow-hidden cursor-pointer gallery-card" data-id="${item.id}">
                <div class="card-img-wrapper position-relative" style="height: 250px;">
                    <img src="${item.image}" alt="${item.title}" class="card-img-top h-100" style="object-fit: cover;">
                    <div class="card-overlay d-flex align-items-center justify-content-center">
                        <div class="text-center">
                            <button class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#galleryModal" onclick="GalleryPageComponent.openLightbox('${item.image}', '${item.title}')">
                                <i class="fas fa-search-plus"></i> View
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body p-3">
                    <h6 class="card-title mb-0">${item.title}</h6>
                    <small class="text-muted">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</small>
                </div>
            </div>
        </div>
        `;
    },
    
    /**
     * Setup filter functionality
     */
    setupFilters() {
        document.querySelectorAll('.gallery-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const filter = e.target.getAttribute('data-filter');
                this.filterGallery(filter);
            });
        });
    },
    
    /**
     * Filter gallery items
     * @param {string} filter - Category filter
     */
    filterGallery(filter) {
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => item.classList.add('fade-in'), 10);
            } else {
                item.style.display = 'none';
            }
        });
    },
    
    /**
     * Open lightbox with image
     * @param {string} src - Image source
     * @param {string} title - Image title
     */
    openLightbox(src, title) {
        document.getElementById('lightboxImage').src = src;
        document.getElementById('lightboxTitle').textContent = title;
    },
    
    /**
     * Setup lightbox
     */
    setupLightbox() {
        // Bootstrap modal handles this automatically
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    GalleryPageComponent.init();
});
