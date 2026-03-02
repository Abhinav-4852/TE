/**
 * Contact Page Component
 * Full page component for contact information and form
 */

const ContactPageComponent = {
    /**
     * Initialize contact page
     */
    init() {
        this.render();
        this.setupForm();
    },
    
    /**
     * Render contact page
     */
    render() {
        const contactHTML = `
        <div class="hero bg-secondary">
            <div class="hero-content">
                <h1 class="mb-3">Contact Us</h1>
                <p class="lead">Get in touch with our team for inquiries and support</p>
            </div>
        </div>
        
        <section class="py-5">
            <div class="container">
                <div class="row g-5 mb-5">
                    <!-- Contact Information -->
                    <div class="col-lg-4">
                        <div class="contact-info">
                            <div class="mb-4">
                                <h5 class="mb-3">
                                    <i class="fas fa-map-marker-alt text-primary me-2"></i>Address
                                </h5>
                                <p class="text-muted">
                                    123 Travel Street<br>
                                    Adventure City, AC 12345<br>
                                    Country
                                </p>
                            </div>
                            
                            <div class="mb-4">
                                <h5 class="mb-3">
                                    <i class="fas fa-phone text-primary me-2"></i>Phone
                                </h5>
                                <p class="text-muted">
                                    <a href="tel:+18001234567" class="text-decoration-none text-muted">+1 (800) 123-4567</a><br>
                                    <small>Available 24/7</small>
                                </p>
                            </div>
                            
                            <div class="mb-4">
                                <h5 class="mb-3">
                                    <i class="fas fa-envelope text-primary me-2"></i>Email
                                </h5>
                                <p class="text-muted">
                                    <a href="mailto:info@tridentescapes.com" class="text-decoration-none text-muted">info@tridentescapes.com</a><br>
                                    <a href="mailto:support@tridentescapes.com" class="text-decoration-none text-muted">support@tridentescapes.com</a>
                                </p>
                            </div>
                            
                            <div>
                                <h5 class="mb-3">
                                    <i class="fas fa-clock text-primary me-2"></i>Business Hours
                                </h5>
                                <p class="text-muted">
                                    Monday - Friday: 9:00 AM - 6:00 PM<br>
                                    Saturday: 10:00 AM - 4:00 PM<br>
                                    Sunday: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Contact Form -->
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <h3 class="mb-4">Send us a Message</h3>
                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="firstName" class="form-label">First Name *</label>
                                        <input type="text" class="form-control" id="firstName" name="firstName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="lastName" class="form-label">Last Name *</label>
                                        <input type="text" class="form-control" id="lastName" name="lastName" required>
                                    </div>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email Address *</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                </div>
                                
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone Number</label>
                                    <input type="tel" class="form-control" id="phone" name="phone">
                                </div>
                                
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Subject *</label>
                                    <select class="form-control" id="subject" name="subject" required>
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="booking">Booking Question</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="message" class="form-label">Message *</label>
                                    <textarea class="form-control" id="message" name="message" rows="6" required></textarea>
                                </div>
                                
                                <div class="mb-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="privacy" name="privacy" required>
                                        <label class="form-check-label" for="privacy">
                                            I agree to the <a href="#" class="text-primary">Privacy Policy</a>
                                        </label>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-lg w-100">
                                    <i class="fas fa-paper-plane me-2"></i>Send Message
                                </button>
                            </form>
                            <div id="formMessage" class="mt-3 d-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Map Section -->
        <section class="py-5 bg-light-color">
            <div class="container">
                <h3 class="text-center mb-4">Visit Our Office</h3>
                <div class="rounded-lg overflow-hidden shadow" style="height: 400px;">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5689253849453!2d77.2245!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTMnMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890" 
                        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </section>
        `;
        
        const pageContainer = document.querySelector('#contact-page');
        if (pageContainer) {
            pageContainer.innerHTML = contactHTML;
        }
    },
    
    /**
     * Setup form submission
     */
    setupForm() {
        const form = document.querySelector('#contactForm');
        if (!form) return;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const messageEl = document.querySelector('#formMessage');
            messageEl.classList.remove('d-none');
            messageEl.classList.add('alert', 'alert-success');
            messageEl.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully. We will get back to you soon.';
            
            // Reset form
            form.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageEl.classList.add('d-none');
            }, 5000);
            
            console.log('Form submitted:', data);
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ContactPageComponent.init();
});
