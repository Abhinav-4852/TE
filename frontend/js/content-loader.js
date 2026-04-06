/**
 * Content Loader
 * Reads data/content.json and populates marked elements on each page.
 *
 * HTML usage:
 *   Text content  : <h1 data-content="home.hero.title">Fallback text</h1>
 *   HTML content  : <p data-content-html="site.contact.address">Fallback</p>
 *   Dynamic lists : <div id="gallery-container"></div>
 */

const ContentLoader = {
  content: null,

  /** Resolves base path depending on whether we are in /pages/ or root */
  get basePath() {
    return window.location.pathname.includes('/pages/') ? '../' : './';
  },

  /** Returns correct relative link to a page file */
  link(filename) {
    return window.location.pathname.includes('/pages/') ? filename : `pages/${filename}`;
  },

  async init() {
    try {
      const res = await fetch(this.basePath + 'data/content.json');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      this.content = await res.json();
      this.render();
    } catch (err) {
      console.warn('[ContentLoader] Could not load content.json —', err.message);
    }
  },

  render() {
    this.fillText();
    this.fillHtml();

    // Home page sections
    this.populate('trending-container',      'home.trending',  this.trendingCard);
    this.populate('home-packages-container', 'home.packages',  this.homePackageCard);
    this.populate('services-container',      'home.services',  this.serviceCard);
    this.populate('stats-container',         'home.stats',     this.statCard);
    this.populate('faqAccordion',            'home.faq',       this.faqItem);

    // Packages page
    this.populate('packages-container', 'packages', this.packageListItem);

    // Gallery page
    this.populate('gallery-container', 'gallery', this.galleryItem);

    // About page
    this.populate('reviews-container', 'about.reviews', this.reviewCard);
  },

  // ---------------------------------------------------------------------------
  // Core helpers
  // ---------------------------------------------------------------------------

  /** Reads a dot-notation path from this.content */
  get(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], this.content);
  },

  /** Fills [data-content] elements with text (or src for <img>) */
  fillText() {
    document.querySelectorAll('[data-content]').forEach(el => {
      const val = this.get(el.dataset.content);
      if (val == null) return;
      el.tagName === 'IMG' ? (el.src = val) : (el.textContent = val);
    });
  },

  /** Fills [data-content-html] elements with innerHTML (use for addresses, etc.) */
  fillHtml() {
    document.querySelectorAll('[data-content-html]').forEach(el => {
      const val = this.get(el.dataset.contentHtml);
      if (val != null) el.innerHTML = val;
    });
  },

  /** Finds a container by id, resolves the JSON array, and renders each item */
  populate(id, path, renderer) {
    const container = document.getElementById(id);
    const items = this.get(path);
    if (!container || !Array.isArray(items)) return;
    container.innerHTML = items.map((item, i) => renderer.call(this, item, i)).join('');
  },

  /** Generates star icons from a numeric rating (0–5, supports halves) */
  stars(rating) {
    const full  = Math.floor(rating);
    const half  = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return [
      ...Array(full ).fill('<i class="fas fa-star text-warning"></i>'),
      ...(half       ? ['<i class="fas fa-star-half-alt text-warning"></i>'] : []),
      ...Array(empty).fill('<i class="far fa-star text-warning"></i>'),
    ].join('');
  },

  // ---------------------------------------------------------------------------
  // Card templates
  // ---------------------------------------------------------------------------

  trendingCard(dest) {
    return `
      <div class="col-lg-6 col-xl-3">
        <div class="card h-100">
          <div class="card-img-wrapper position-relative">
            <img src="${dest.image}" class="card-img-top" alt="${dest.alt}">
            <div class="card-overlay">
              <div class="card-overlay-content">
                <button class="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">${dest.title}</h5>
            <p class="card-text text-muted">${dest.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="badge badge-primary">
                <i class="fas fa-star me-1"></i>${dest.rating}
              </span>
              <small class="text-muted">${dest.reviews} reviews</small>
            </div>
          </div>
          <div class="card-footer bg-light">
            <a href="${this.link('book.html')}" class="btn btn-outline-primary w-100">Book Now</a>
          </div>
        </div>
      </div>`;
  },

  homePackageCard(pkg) {
    const badge    = pkg.badge ? `<div class="card-badge"><span class="badge badge-accent">${pkg.badge}</span></div>` : '';
    const features = (pkg.features || []).map(f => `<li><i class="fas fa-check"></i>${f}</li>`).join('');
    return `
      <div class="col-lg-6 col-xl-3">
        <div class="card price-card ${pkg.featured ? 'featured' : ''}">
          <div class="card-img-wrapper position-relative">
            <img src="${pkg.image}" class="card-img-top" alt="${pkg.title}">
            ${badge}
          </div>
          <div class="card-body">
            <h5 class="card-title">${pkg.title}</h5>
            <p class="card-text text-muted small">${pkg.subtitle}</p>
            <div class="price-tag mb-3">
              <span class="price-currency">$</span>
              <span class="price-amount">${pkg.price}</span>
              <span class="price-period">per person</span>
            </div>
            <div class="mb-3">
              <small class="text-primary fw-semibold">
                <i class="fas fa-calendar me-1"></i>${pkg.days} Days
              </small>
            </div>
            <ul class="price-list">${features}</ul>
          </div>
          <div class="card-footer bg-light">
            <a href="${this.link('book.html')}" class="btn btn-primary w-100">Book Package</a>
          </div>
        </div>
      </div>`;
  },

  serviceCard(svc) {
    return `
      <div class="col-md-6 col-lg-4">
        <div class="feature-card">
          <div class="feature-icon mb-3">
            <i class="fas fa-${svc.icon}"></i>
          </div>
          <h4 class="card-title">${svc.title}</h4>
          <p class="card-text text-muted">${svc.description}</p>
          <a href="#" class="text-primary fw-semibold small">
            Learn More <i class="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>`;
  },

  statCard(stat) {
    return `
      <div class="col-md-6 col-lg-3">
        <div class="text-center">
          <div class="mb-3">
            <i class="fas fa-${stat.icon} text-primary" style="font-size: 3rem;"></i>
          </div>
          <div class="mb-2">
            <span class="h2 text-primary fw-bold">${stat.value}</span>
          </div>
          <h5 class="card-title mb-2">${stat.title}</h5>
          <p class="text-muted">${stat.description}</p>
        </div>
      </div>`;
  },

  faqItem(item, i) {
    return `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${i > 0 ? 'collapsed' : ''}" type="button"
            data-bs-toggle="collapse" data-bs-target="#faq${i}">
            <i class="fas fa-question-circle me-3 text-primary"></i>${item.question}
          </button>
        </h2>
        <div id="faq${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}"
          data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            <p class="text-muted mb-0">${item.answer}</p>
          </div>
        </div>
      </div>`;
  },

  packageListItem(pkg) {
    const border = pkg.featured ? 'border-2 border border-primary shadow' : 'border shadow-sm';
    const badge  = pkg.badge
      ? `<div style="position:absolute;top:10px;right:10px;">
           <span class="badge badge-accent">${pkg.badge}</span>
         </div>`
      : '';
    return `
      <div class="row g-0 package-item mb-4 ${border} rounded overflow-hidden" data-days="${pkg.daysCategory}">
        <div class="col-md-5" style="position:relative;">
          <img src="${pkg.image}" class="img-fluid"
            alt="${pkg.title}" style="object-fit:cover;height:300px;width:100%;">
          ${badge}
        </div>
        <div class="col-md-7">
          <div class="p-4 h-100 d-flex flex-column justify-content-between bg-white">
            <div>
              <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                  <h5 class="card-title mb-2">${pkg.title}</h5>
                  <p class="card-text text-muted small mb-0">${pkg.subtitle}</p>
                </div>
                <div class="text-end">
                  <div class="price-tag">
                    <span class="price-currency">$</span>
                    <span class="price-amount">${pkg.price}</span>
                    <span class="price-period d-block small">per person</span>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <small class="text-primary fw-semibold">
                  <i class="fas fa-calendar me-1"></i>${pkg.days} Days
                </small>
              </div>
            </div>
            <a href="${this.link('book.html')}" class="btn btn-primary btn-sm mt-3 align-self-start">
              Explore
            </a>
          </div>
        </div>
      </div>`;
  },

  galleryItem(item) {
    const safe = s => s.replace(/'/g, "\\'");
    return `
      <div class="col-sm-6 col-lg-4 gallery-item" data-category="${item.category}">
        <div class="card overflow-hidden cursor-pointer"
          onclick="openLightbox('${safe(item.src)}', '${safe(item.title)}')">
          <div class="card-img-wrapper position-relative">
            <img src="${item.src}" class="card-img-top" alt="${item.title}">
            <div class="gallery-overlay">
              <div class="gallery-icon"><i class="fas fa-search-plus"></i></div>
            </div>
          </div>
          <div class="card-body">
            <h6 class="card-title mb-0">${item.title}</h6>
            <small class="text-muted">${item.location}</small>
          </div>
        </div>
      </div>`;
  },

  reviewCard(review) {
    return `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow">
          <div class="card-body">
            <div class="d-flex mb-3">${this.stars(review.rating)}</div>
            <p class="card-text text-muted mb-4">"${review.text}"</p>
            <div class="d-flex align-items-center">
              <img src="${review.avatar}" class="rounded-circle me-3"
                alt="${review.name}" style="width:60px;height:60px;object-fit:cover;">
              <div>
                <h6 class="mb-0">${review.name}</h6>
                <small class="text-muted">${review.role}</small>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },
};

document.addEventListener('DOMContentLoaded', () => ContentLoader.init());
