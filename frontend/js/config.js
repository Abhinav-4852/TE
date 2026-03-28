/**
 * Trident Escapes - Central Configuration File
 * All business information, contact details, and API keys in one place
 */

const CONFIG = {
    // Company Information
    COMPANY: {
        NAME: 'Trident Escapes',
        TAGLINE: 'Your Gateway to Incredible India',
        FOUNDED: '2020',
        DESCRIPTION: 'Expert travel company specializing in authentic Indian experiences and custom itineraries'
    },

    // Contact Information
    CONTACT: {
        // Primary Email
        EMAIL: {
            PRIMARY: 'info@tridentescapes.com',
            SUPPORT: 'support@tridentescapes.com',
            BOOKINGS: 'bookings@tridentescapes.com',
            RECEIVE_FORMS: 'tweet.ayush@gmail.com' // TODO: Run setup-deployment script to make this private
        },

        // Phone Numbers
        PHONE: {
            PRIMARY: '+1 (800) 123-4567',
            WHATSAPP: '+91 98765 43210',
            EMERGENCY: '+1 (800) 911-HELP',
            DISPLAY: '+1 (800) 123-4567',
            LINK: 'tel:+18001234567'
        },

        // Physical Address
        ADDRESS: {
            STREET: '123 Travel Street',
            CITY: 'Adventure City',
            STATE: 'AC',
            ZIP: '12345',
            COUNTRY: 'United States',
            FULL: '123 Travel Street, Adventure City, AC 12345, United States',
            MAP_URL: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5689253849453!2d77.2245!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTMnMjguMiJF!5e0!3m2!1sen!2sin!4v1234567890'
        },

        // Business Hours
        HOURS: {
            WEEKDAYS: 'Monday - Friday: 9:00 AM - 6:00 PM',
            SATURDAY: 'Saturday: 10:00 AM - 4:00 PM',
            SUNDAY: 'Sunday: Closed',
            EMERGENCY_SUPPORT: '24/7 Emergency Support Available',
            TIMEZONE: 'EST (Eastern Standard Time)'
        }
    },

    // Social Media Links
    SOCIAL: {
        FACEBOOK: 'https://facebook.com/tridentescapes',
        TWITTER: 'https://twitter.com/tridentescapes',
        INSTAGRAM: 'https://instagram.com/tridentescapes',
        LINKEDIN: 'https://linkedin.com/company/tridentescapes',
        YOUTUBE: 'https://youtube.com/@tridentescapes',
        PINTEREST: 'https://pinterest.com/tridentescapes'
    },

    // Web3Forms Configuration
    WEB3FORMS: {
        ACCESS_KEY: '1b63b300-bd6a-4321-a483-ca57dbd8ef65',
        API_URL: 'https://api.web3forms.com/submit',
        EMAIL: 'tweet.ayush@gmail.com', // TODO: Run setup-deployment script to make this private
        ENABLED: true // Toggle to disable forms temporarily
    },

    // Form Settings
    FORMS: {
        CONTACT_SUBJECT: 'New Contact Form Submission - Trident Escapes',
        BOOKING_SUBJECT: 'New Booking Request - Trident Escapes',
        CUSTOM_ITINERARY_SUBJECT: 'New Custom Itinerary Request - Trident Escapes',
        FROM_NAME: 'Trident Escapes Website',
        SUCCESS_MESSAGE_DURATION: 6000, // milliseconds
        ERROR_MESSAGE_DURATION: 8000 // milliseconds
    },

    // Website Settings
    SITE: {
        URL: 'https://tridentescapes.com',
        COPYRIGHT_YEAR: '2026',
        COPYRIGHT_TEXT: '© 2026 Trident Escapes. All Rights Reserved.',
        PRIVACY_POLICY_URL: '/privacy-policy',
        TERMS_URL: '/terms-conditions'
    },

    // Tour Packages Base Info
    PACKAGES: {
        MIN_TRAVELERS: 1,
        MAX_TRAVELERS: 20,
        DEFAULT_DURATION: 7, // days
        CURRENCY: 'USD',
        CURRENCY_SYMBOL: '$'
    },

    // Additional Services
    SERVICES: {
        CUSTOM_ITINERARIES: true,
        HOTEL_BOOKING: true,
        TRANSPORTATION: true,
        TOUR_GUIDES: true,
        TRAVEL_INSURANCE: true,
        PHOTOGRAPHY: true,
        VISA_ASSISTANCE: true
    }
};

// Utility Functions
CONFIG.getFullAddress = function() {
    return this.CONTACT.ADDRESS.FULL;
};

CONFIG.getPrimaryPhone = function() {
    return this.CONTACT.PHONE.DISPLAY;
};

CONFIG.getPrimaryEmail = function() {
    return this.CONTACT.EMAIL.PRIMARY;
};

CONFIG.getBusinessHours = function() {
    return [
        this.CONTACT.HOURS.WEEKDAYS,
        this.CONTACT.HOURS.SATURDAY,
        this.CONTACT.HOURS.SUNDAY
    ].join('\n');
};

CONFIG.getCopyrightText = function() {
    return `© ${new Date().getFullYear()} ${this.COMPANY.NAME}. All Rights Reserved.`;
};

// Freeze the config to prevent accidental modifications
Object.freeze(CONFIG.COMPANY);
Object.freeze(CONFIG.CONTACT);
Object.freeze(CONFIG.SOCIAL);
Object.freeze(CONFIG.WEB3FORMS);
Object.freeze(CONFIG.FORMS);
Object.freeze(CONFIG.SITE);
Object.freeze(CONFIG.PACKAGES);
Object.freeze(CONFIG.SERVICES);
