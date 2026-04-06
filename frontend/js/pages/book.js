/**
 * Book Your Trip Page Component
 * Full page component for tour booking
 */

const BookPageComponent = {
    /**
     * Sample packages for booking
     */
    packages: [
        { id: 1, name: 'Golden Triangle', minPrice: 599 },
        { id: 2, name: 'Golden Triangle + Rishikesh', minPrice: 749 },
        { id: 3, name: 'Golden Triangle + Rajasthan', minPrice: 899 },
        { id: 4, name: 'Golden Triangle + Varanasi', minPrice: 799 }
    ],
    
    /**
     * Initialize book page
     */
    init() {
        this.render();
        this.setupForm();
    },
    
    /**
     * Render book page
     */
    render() {
        const bookHTML = `
        <div class="hero bg-secondary">
            <div class="hero-content">
                <h1 class="mb-3">Book Your Dream Escape</h1>
                <p class="lead">Reserve your spot on an unforgettable adventure</p>
            </div>
        </div>
        
        <section class="py-5">
            <div class="container">
                <div class="row g-5">
                    <!-- Booking Form -->
                    <div class="col-lg-8">
                        <div class="booking-form bg-light-color p-5 rounded-lg">
                            <h3 class="mb-4">Tour Booking Form</h3>
                            <form id="bookingForm">
                                <!-- Web3Forms Access Key -->
                                <input type="hidden" name="access_key" value="">
                                <input type="hidden" name="subject" value="">
                                <input type="hidden" name="from_name" value="">

                                <!-- Personal Information Section -->
                                <div class="mb-4">
                                    <h5 class="mb-3"><i class="fas fa-user text-primary me-2"></i>Personal Information</h5>
                                    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="fullName" class="form-label">Full Name *</label>
                                            <input type="text" class="form-control" id="fullName" name="fullName" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="email" class="form-label">Email Address *</label>
                                            <input type="email" class="form-control" id="email" name="email" required>
                                        </div>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="phone" class="form-label">Phone Number *</label>
                                            <input type="tel" class="form-control" id="phone" name="phone" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="nationality" class="form-label">Nationality *</label>
                                            <input type="text" class="form-control" id="nationality" name="nationality" required>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Tour Selection Section -->
                                <div class="mb-4">
                                    <h5 class="mb-3"><i class="fas fa-map text-primary me-2"></i>Tour Selection</h5>
                                    
                                    <div class="mb-3">
                                        <label for="package" class="form-label">Select Tour Package *</label>
                                        <select class="form-control" id="package" name="package" required onchange="BookPageComponent.updatePackageDetails()">
                                            <option value="">Choose a package...</option>
                                            ${this.packages.map(pkg => `<option value="${pkg.id}:${pkg.minPrice}">${pkg.name} (from $${pkg.minPrice})</option>`).join('')}
                                        </select>
                                    </div>
                                    
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label for="startDate" class="form-label">Preferred Start Date *</label>
                                            <input type="date" class="form-control" id="startDate" name="startDate" required>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label for="travelers" class="form-label">Number of Travelers *</label>
                                            <input type="number" class="form-control" id="travelers" name="travelers" min="1" max="20" value="1" required onchange="BookPageComponent.calculateTotal()">
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Accommodation Section -->
                                <div class="mb-4">
                                    <h5 class="mb-3"><i class="fas fa-bed text-primary me-2"></i>Accommodation Preference</h5>
                                    
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="accommodation" id="budget" value="budget" checked>
                                        <label class="form-check-label" for="budget">
                                            Budget Friendly (3-star) +$0
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="radio" name="accommodation" id="standard" value="standard" onchange="BookPageComponent.calculateTotal()">
                                        <label class="form-check-label" for="standard">
                                            Standard (4-star) +$50/night
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="accommodation" id="luxury" value="luxury" onchange="BookPageComponent.calculateTotal()">
                                        <label class="form-check-label" for="luxury">
                                            Luxury (5-star) +$100/night
                                        </label>
                                    </div>
                                </div>
                                
                                <!-- Add-ons Section -->
                                <div class="mb-4">
                                    <h5 class="mb-3"><i class="fas fa-plus text-primary me-2"></i>Optional Add-ons</h5>
                                    
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" name="addons" id="insurance" value="100" onchange="BookPageComponent.calculateTotal()">
                                        <label class="form-check-label" for="insurance">
                                            Travel Insurance (+\$100)
                                        </label>
                                    </div>
                                    <div class="form-check mb-2">
                                        <input class="form-check-input" type="checkbox" name="addons" id="photography" value="50" onchange="BookPageComponent.calculateTotal()">
                                        <label class="form-check-label" for="photography">
                                            Professional Photography Tour (+\$50)
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="addons" id="meals" value="150" onchange="BookPageComponent.calculateTotal()">
                                        <label class="form-check-label" for="meals">
                                            Premium Meals Package (+\$150)
                                        </label>
                                    </div>
                                </div>
                                
                                <!-- Special Requests -->
                                <div class="mb-4">
                                    <label for="requests" class="form-label">Special Requests / Notes</label>
                                    <textarea class="form-control" id="requests" name="requests" rows="3" placeholder="Any special requirements or preferences..."></textarea>
                                </div>
                                
                                <!-- Terms & Conditions -->
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="terms" name="terms" required>
                                        <label class="form-check-label" for="terms">
                                            I agree to the <a href="#" class="text-primary">Terms & Conditions</a> and <a href="#" class="text-primary">Cancellation Policy</a> *
                                        </label>
                                    </div>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-lg w-100">
                                    <i class="fas fa-check me-2"></i>Complete Booking
                                </button>
                            </form>
                            <div id="bookMessage" class="mt-3 d-none"></div>
                        </div>
                    </div>
                    
                    <!-- Booking Summary -->
                    <div class="col-lg-4">
                        <div class="booking-summary bg-white rounded-lg shadow p-4 position-sticky" style="top: 20px;">
                            <h5 class="mb-4"><i class="fas fa-receipt text-primary me-2"></i>Booking Summary</h5>
                            
                            <div class="mb-3">
                                <small class="text-muted d-block">Package Price</small>
                                <h6>$<span id="packagePrice">0</span></h6>
                            </div>
                            
                            <div class="mb-3">
                                <small class="text-muted d-block">Travelers</small>
                                <h6><span id="summaryTravelers">1</span> × $<span id="perPersonPrice">0</span></h6>
                            </div>
                            
                            <div class="mb-3">
                                <small class="text-muted d-block">Accommodation Upgrade</small>
                                <h6>$<span id="accommodationCost">0</span></h6>
                            </div>
                            
                            <div class="mb-3">
                                <small class="text-muted d-block">Add-ons</small>
                                <h6>$<span id="addonsCost">0</span></h6>
                            </div>
                            
                            <hr class="divider">
                            
                            <div class="mb-4">
                                <small class="text-muted d-block">Total Cost</small>
                                <h3 class="text-primary">$<span id="totalCost">0</span></h3>
                            </div>
                            
                            <div class="alert alert-info">
                                <small><i class="fas fa-info-circle me-2"></i>A 20% deposit is required to confirm your booking.</small>
                            </div>
                            
                            <button class="btn btn-outline-primary w-100 mb-2">
                                <i class="fas fa-question-circle me-2"></i>Need Help?
                            </button>
                            <a href="#" data-nav="contact" class="btn btn-secondary w-100">
                                <i class="fas fa-headset me-2"></i>Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        
        const pageContainer = document.querySelector('#book-page');
        if (pageContainer) {
            pageContainer.innerHTML = bookHTML;
        }
    },
    
    /**
     * Update package details
     */
    updatePackageDetails() {
        const packageSelect = document.querySelector('#package');
        if (!packageSelect.value) return;
        
        const [pkgId, price] = packageSelect.value.split(':');
        document.querySelector('#packagePrice').textContent = price;
        this.calculateTotal();
    },
    
    /**
     * Calculate total booking cost
     */
    calculateTotal() {
        const price = parseFloat(document.querySelector('#packagePrice').textContent) || 0;
        const travelers = parseInt(document.querySelector('#travelers').value) || 1;
        const accommodation = document.querySelector('input[name="accommodation"]:checked').value;
        
        // Accommodation cost calculation (5 days average)
        let accommodationCost = 0;
        if (accommodation === 'standard') accommodationCost = 50 * 5 * travelers;
        else if (accommodation === 'luxury') accommodationCost = 100 * 5 * travelers;
        
        // Add-ons
        let addonsCost = 0;
        document.querySelectorAll('input[name="addons"]:checked').forEach(addon => {
            addonsCost += parseInt(addon.value);
        });
        
        // Calculate total
        const baseCost = price * travelers;
        const totalCost = baseCost + accommodationCost + addonsCost;
        
        // Update summary
        document.querySelector('#summaryTravelers').textContent = travelers;
        document.querySelector('#perPersonPrice').textContent = price;
        document.querySelector('#accommodationCost').textContent = accommodationCost;
        document.querySelector('#addonsCost').textContent = addonsCost;
        document.querySelector('#totalCost').textContent = totalCost.toFixed(0);
    },
    
    /**
     * Setup form submission
     */
    setupForm() {
        const form = document.querySelector('#bookingForm');
        if (!form) return;

        // Populate hidden fields from config
        form.querySelector('input[name="access_key"]').value = CONFIG.WEB3FORMS.ACCESS_KEY;
        form.querySelector('input[name="subject"]').value = CONFIG.FORMS.BOOKING_SUBJECT;
        form.querySelector('input[name="from_name"]').value = CONFIG.FORMS.FROM_NAME;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const messageEl = document.querySelector('#bookMessage');
            const submitBtn = form.querySelector('button[type="submit"]');

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';

            const formData = new FormData(form);

            // Add booking summary to email
            const totalCost = document.querySelector('#totalCost').textContent;
            formData.append('booking_total', `$${totalCost}`);

            try {
                // Submit to Web3Forms
                const response = await fetch(CONFIG.WEB3FORMS.API_URL, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.success) {
                    // Success message
                    messageEl.classList.remove('d-none', 'alert-danger');
                    messageEl.classList.add('alert', 'alert-success');
                    messageEl.innerHTML = '<i class="fas fa-check-circle me-2"></i><strong>Booking Confirmed!</strong> You will receive a confirmation email shortly with payment details and booking reference number.';

                    // Scroll to message
                    setTimeout(() => {
                        window.scrollTo(0, 0);
                    }, 1000);
                } else {
                    throw new Error(result.message || 'Booking failed');
                }
            } catch (error) {
                // Error message
                messageEl.classList.remove('d-none', 'alert-success');
                messageEl.classList.add('alert', 'alert-danger');
                messageEl.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Sorry, there was an error processing your booking. Please try again or contact us directly.';
                console.error('Booking submission error:', error);
            } finally {
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Complete Booking';
            }
        });
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    BookPageComponent.init();
});
