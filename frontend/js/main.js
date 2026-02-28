/**
 * Main JavaScript file for Trident Escapes Website
 */

// API Configuration
const API_URL = 'http://localhost:3000/api';

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Application initialized');
  setupEventListeners();
  fetchHealthStatus();
});

/**
 * Setup event listeners
 */
function setupEventListeners() {
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', handleCTAClick);
  }
}

/**
 * Handle CTA button click
 */
function handleCTAClick() {
  console.log('CTA Button clicked');
  // Add your logic here
}

/**
 * Fetch health status from API
 */
function fetchHealthStatus() {
  fetch(`${API_URL}/health`)
    .then(response => response.json())
    .then(data => {
      console.log('API Health Status:', data);
    })
    .catch(error => {
      console.error('Error fetching health status:', error);
    });
}
