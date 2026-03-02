/**
 * Team Component
 * Displays team members and their roles
 */

const TeamComponent = {
    /**
     * Sample team members data
     */
    members: [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Tour Guide',
            image: 'https://via.placeholder.com/300x300?text=Sarah',
            phone: '(123) 456-7890',
            expertise: 'Adventure Tours'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Manager',
            image: 'https://via.placeholder.com/300x300?text=Michael',
            phone: '(123) 456-7891',
            expertise: 'Package Design'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Tour Guide',
            image: 'https://via.placeholder.com/300x300?text=Emily',
            phone: '(123) 456-7892',
            expertise: 'Cultural Tours'
        },
        {
            id: 4,
            name: 'David Kumar',
            role: 'Assistant Manager',
            image: 'https://via.placeholder.com/300x300?text=David',
            phone: '(123) 456-7893',
            expertise: 'Customer Support'
        }
    ],
    
    /**
     * Initialize team component
     */
    init() {
        this.render();
    },
    
    /**
     * Render HTML
     */
    render() {
        const teamHTML = `
        <section class="py-5">
            <div class="container">
                <div class="section-title text-center">
                    <h2>Meet Our Team</h2>
                    <p class="text-muted">Expert professionals dedicated to your travel experience</p>
                </div>
                
                <div class="row g-4">
                    ${this.members.map(member => this.renderMemberCard(member)).join('')}
                </div>
            </div>
        </section>
        `;
        
        const container = document.querySelector('#team-container');
        if (container) {
            container.innerHTML = teamHTML;
        }
    },
    
    /**
     * Render individual team member card
     * @param {object} member - Team member data
     * @returns {string} Card HTML
     */
    renderMemberCard(member) {
        return `
        <div class="col-md-6 col-lg-3">
            <div class="card text-center">
                <img src="${member.image}" class="card-img-top" alt="${member.name}">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="text-primary fw-semibold">${member.role}</p>
                    <p class="card-text text-muted small">${member.expertise}</p>
                    <div class="mt-3">
                        <a href="tel:${member.phone.replace(/\D/g, '')}" class="text-decoration-none">
                            <i class="fas fa-phone me-2 text-primary"></i>
                            <small>${member.phone}</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    TeamComponent.init();
});
