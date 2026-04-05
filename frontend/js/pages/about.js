/**
 * About Us Page Component
 * Full page component for About Us
 */

const AboutPageComponent = {
    /**
     * Initialize about page
     */
    init() {
        this.render();
    },
    
    /**
     * Render about page
     */
    render() {
        const aboutHTML = `
        <div class="hero bg-secondary">
            <div class="hero-content">
                <h1 class="mb-3">About Trident Escapes</h1>
                <p class="lead">Your trusted partner in creating unforgettable travel experiences since 2009</p>
            </div>
        </div>
        
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center gap-4">
                    <div class="col-lg-6">
                        <h2 class="mb-3">Our Story</h2>
                        <p class="text-muted mb-3">
                            Founded in 2009, Trident Escapes emerged from a passion for travel and a commitment to excellence. 
                            What started as a small local tour company has grown into a trusted partner for thousands of travelers worldwide.
                        </p>
                        <p class="text-muted mb-3">
                            We believe that travel is more than just visiting places – it's about creating meaningful connections, 
                            experiencing diverse cultures, and discovering the world's hidden gems. Every tour we design is crafted with care 
                            to ensure you have the most authentic and memorable experience.
                        </p>
                        <p class="text-muted">
                            Our team of experienced guides, travel consultants, and support staff work tirelessly to ensure every aspect 
                            of your journey is seamless and unforgettable.
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <img src="https://via.placeholder.com/500x400?text=About+Us" alt="About Trident Escapes" class="img-fluid rounded-lg shadow">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-5 bg-light-color">
            <div class="container">
                <h2 class="text-center mb-5">Our Mission & Values</h2>
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">
                                    <i class="fas fa-target me-2"></i>Our Mission
                                </h5>
                                <p class="card-text text-muted">
                                    To provide exceptional travel experiences that transform the way people see the world, 
                                    delivering personalized service with integrity and professionalism.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">
                                    <i class="fas fa-handshake me-2"></i>Our Values
                                </h5>
                                <ul class="list-unstyled text-muted small">
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Integrity & Honesty</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Customer First</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Quality Excellence</li>
                                    <li><i class="fas fa-check text-success me-2"></i>Sustainability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card shadow-sm h-100">
                            <div class="card-body">
                                <h5 class="card-title text-primary">
                                    <i class="fas fa-lightbulb me-2"></i>Our Vision
                                </h5>
                                <p class="card-text text-muted">
                                    To be the most respected and innovative tour operator, known for creating authentic experiences 
                                    that bridge cultures and create lasting memories.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-5">
            <div class="container">
                <h2 class="text-center mb-5">Why Travel With Us</h2>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-award text-primary"></i>
                            </div>
                            <h5 class="card-title">Award Winning</h5>
                            <p class="card-text text-muted">Recognized internationally for excellence in travel services</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-people-group text-primary"></i>
                            </div>
                            <h5 class="card-title">Expert Team</h5>
                            <p class="card-text text-muted">Highly trained guides with years of destination expertise</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-lock text-primary"></i>
                            </div>
                            <h5 class="card-title">Safety First</h5>
                            <p class="card-text text-muted">Highest safety standards and travel insurance options</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="feature-card">
                            <div class="feature-icon">
                                <i class="fas fa-gem text-primary"></i>
                            </div>
                            <h5 class="card-title">Authentic Experiences</h5>
                            <p class="card-text text-muted">Genuine local experiences beyond the typical tourist route</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        
        const pageContainer = document.querySelector('#about-page');
        if (pageContainer) {
            pageContainer.innerHTML = aboutHTML;
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    AboutPageComponent.init();
});
