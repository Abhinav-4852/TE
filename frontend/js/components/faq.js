/**
 * FAQ Component
 * Displays frequently asked questions
 */

const FAQComponent = {
    /**
     * Sample FAQs data
     */
    faqs: [
        {
            id: 1,
            question: 'What is included in a tour package?',
            answer: 'Our tour packages typically include accommodation, meals, guided tours, transportation, and entrance fees to major attractions. Specific inclusions vary by package.'
        },
        {
            id: 2,
            question: 'How can I book a tour?',
            answer: 'You can book a tour through our website using the booking form, or contact our team directly. We also accept phone and email bookings for your convenience.'
        },
        {
            id: 3,
            question: 'What is your cancellation policy?',
            answer: 'We offer flexible cancellation policies. Cancellations made 30 days before travel receive a full refund. Less notice may incur cancellation fees.'
        },
        {
            id: 4,
            question: 'Do you offer customized itineraries?',
            answer: 'Yes! We specialize in creating custom itineraries tailored to your preferences, interests, and budget. Contact our team to discuss your specific needs.'
        },
        {
            id: 5,
            question: 'Is travel insurance included?',
            answer: 'Travel insurance is not included by default, but we strongly recommend it. We can help you arrange comprehensive travel insurance at competitive rates.'
        },
        {
            id: 6,
            question: 'What safety measures are in place?',
            answer: 'We maintain the highest safety standards. All our guides are certified, vehicles are regularly maintained, and we follow all local health and safety regulations.'
        }
    ],
    
    /**
     * Initialize FAQ component
     */
    init() {
        this.render();
        this.setupAccordion();
    },
    
    /**
     * Render HTML
     */
    render() {
        const faqHTML = `
        <section class="py-5 bg-light-color">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Frequently Asked Questions</h2>
                    <p class="text-muted">Find answers to common questions about our tours and services</p>
                </div>
                
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="accordion" id="faqAccordion">
                            ${this.faqs.map((faq, index) => this.renderFAQItem(faq, index)).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-5">
                    <p class="text-muted mb-3">Didn't find your answer?</p>
                    <a href="#" data-nav="contact" class="btn btn-outline-primary">
                        <i class="fas fa-envelope me-2"></i>Contact Us
                    </a>
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#faq-container');
        if (container) {
            container.innerHTML = faqHTML;
        }
    },
    
    /**
     * Render individual FAQ item
     * @param {object} faq - FAQ data
     * @param {number} index - FAQ index
     * @returns {string} FAQ HTML
     */
    renderFAQItem(faq, index) {
        const isFirst = index === 0;
        
        return `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${faq.id}">
                    <i class="fas fa-question-circle me-3 text-primary"></i>${faq.question}
                </button>
            </h2>
            <div id="collapse${faq.id}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    <p class="text-muted mb-0">${faq.answer}</p>
                </div>
            </div>
        </div>
        `;
    },
    
    /**
     * Setup accordion interactions
     */
    setupAccordion() {
        // Bootstrap handles accordion automatically
        // Custom logic can be added here if needed
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    FAQComponent.init();
});
