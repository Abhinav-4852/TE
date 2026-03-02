/**
 * Main Application File for Trident Escapes Website
 * Initializes the application and manages routing
 */

// API Configuration
const API_CONFIG = {
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
};

/**
 * Main application object
 */
const TridentApp = {
    /**
     * Initialize the entire application
     */
    init() {
        console.log('🚀 Initializing Trident Escapes Application');
        
        // Initialize router
        this.initRouter();
        
        // Setup global utilities
        this.setupUtilities();
        
        // Check API availability
        this.checkAPI();
        
        console.log('✅ Application ready');
    },
    
    /**
     * Initialize the router
     */
    initRouter() {
        if (typeof Router !== 'undefined') {
            Router.init();
        }
    },
    
    /**
     * Setup global utilities and helpers
     */
    setupUtilities() {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Handle any external links
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="http"]');
            if (link && link.target !== '_blank') {
                link.target = '_blank';
            }
        });
        
        // Global error handler
        window.addEventListener('error', (event) => {
            console.error('Global error:', event.error);
        });
    },
    
    /**
     * Check API health
     */
    checkAPI() {
        fetch(`${API_CONFIG.baseURL}/health`, { timeout: API_CONFIG.timeout })
            .then(response => response.json())
            .then(data => {
                console.log('✅ API Connected:', data);
            })
            .catch(error => {
                console.warn('⚠️ API not available:', error.message);
            });
    }
};

/**
 * Global utility functions
 */
const Utils = {
    /**
     * Show a notification
     * @param {string} message - Notification message
     * @param {string} type - Notification type (success, error, info, warning)
     * @param {number} duration - Duration in milliseconds
     */
    notify(message, type = 'info', duration = 3000) {
        // Can be extended with toast notifications
        console.log(`[${type.toUpperCase()}]`, message);
    },
    
    /**
     * Format currency
     * @param {number} amount - Amount to format
     * @param {string} currency - Currency code (default: USD)
     * @returns {string} Formatted currency string
     */
    formatCurrency(amount, currency = 'USD') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
    
    /**
     * Format date
     * @param {date} date - Date to format
     * @returns {string} Formatted date
     */
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },
    
    /**
     * Debounce function
     * @param {function} func - Function to debounce
     * @param {number} wait - Wait time in milliseconds
     * @returns {function} Debounced function
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Throttle function
     * @param {function} func - Function to throttle
     * @param {number} limit - Time limit in milliseconds
     * @returns {function} Throttled function
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    /**
     * Get query parameter
     * @param {string} param - Parameter name
     * @returns {string} Parameter value
     */
    getQueryParam(param) {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    },
    
    /**
     * Check if device is mobile
     * @returns {boolean}
     */
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};

/**
 * API Service for backend communication
 */
const APIService = {
    /**
     * Fetch data from API
     * @param {string} endpoint - API endpoint
     * @param {object} options - Fetch options
     * @returns {Promise}
     */
    async fetch(endpoint, options = {}) {
        try {
            const response = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    /**
     * POST request
     * @param {string} endpoint - API endpoint
     * @param {object} data - Request data
     * @returns {Promise}
     */
    post(endpoint, data) {
        return this.fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    
    /**
     * GET request
     * @param {string} endpoint - API endpoint
     * @returns {Promise}
     */
    get(endpoint) {
        return this.fetch(endpoint, { method: 'GET' });
    }
};

/**
 * Initialize application when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    TridentApp.init();
});

// Make utilities and API service globally available
window.Utils = Utils;
window.APIService = APIService;

