/**
 * JODO — Two-Wheeler Group Buying Landing Page
 * Interactive Logic & Visual Prototype Handlers
 * 
 * Note: This is purely a visual prototype. No backend, database, 
 * OTP, or real transaction is executed.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initVehicleFilter();
  initSavingsCalculator();
  initFaqAccordion();
  initModalInteractions();
  initSmoothScroll();
});

// Vehicle Catalog Data for Modal Previews
const VEHICLE_DATA = {
  'hunter-350': {
    brand: 'Royal Enfield',
    model: 'Hunter 350',
    category: 'Roadster Motorcycle',
    engine: '349cc J-Series',
    city: 'Bengaluru',
    buyersJoined: 48,
    targetBuyers: 60,
    tier: 'Tier 3 (Power Batch)',
    illustrativeBenefit: 'Up to ₹9,500*',
    perks: 'Free Bar-end Mirrors + Engine Guard + 1st Year RSA',
    image: 'assets/images/hunter-350.webp',
    variants: ['Dapper Ash', 'Rebel Blue', 'Factory Black', 'Dapper White']
  },
  'apache-rtr-160': {
    brand: 'TVS',
    model: 'Apache RTR 160 4V',
    category: 'Sport Commuter',
    engine: '159.7cc Oil-Cooled',
    city: 'Bengaluru',
    buyersJoined: 36,
    targetBuyers: 50,
    tier: 'Tier 2 (Growing Batch)',
    illustrativeBenefit: 'Up to ₹7,200*',
    perks: 'DOT Helmet + Extended Warranty (3 Yrs) + Tank Pad',
    image: 'assets/images/apache-rtr-160.webp',
    variants: ['Racing Red', 'Matte Black', 'Knight Black', 'Metallic Blue']
  },
  'activa-125': {
    brand: 'Honda',
    model: 'Activa 125',
    category: 'Family Scooter',
    engine: '124cc eSP PGM-FI',
    city: 'Bengaluru',
    buyersJoined: 52,
    targetBuyers: 60,
    tier: 'Tier 3 (Power Batch)',
    illustrativeBenefit: 'Up to ₹6,800*',
    perks: 'All-Round Steel Guard + Floor Mat + Free 2-Year Annual Maintenance',
    image: 'assets/images/activa-125.webp',
    variants: ['Rebel Red Metallic', 'Heavy Gray Metallic', 'Pearl Nightstar Black', 'Mid Night Blue']
  },
  'yamaha-r15': {
    brand: 'Yamaha',
    model: 'YZF R15 V4',
    category: 'Supersport Motorcycle',
    engine: '155cc Liquid-Cooled VVA',
    city: 'Bengaluru',
    buyersJoined: 29,
    targetBuyers: 40,
    tier: 'Tier 2 (Active Batch)',
    illustrativeBenefit: 'Up to ₹11,000*',
    perks: 'Yamaha Riding Jacket Voucher + Frame Sliders + Zero-Dep Insurance Subsidy',
    image: 'assets/images/yamaha-r15.webp',
    variants: ['Racing Blue', 'Metallic Red', 'Dark Knight', 'Intensity White']
  },
  'ather-rizta': {
    brand: 'Ather Energy',
    model: 'Ather Rizta EV',
    category: 'Electric Smart Scooter',
    engine: '160 km IDC Range',
    city: 'Bengaluru',
    buyersJoined: 64,
    targetBuyers: 75,
    tier: 'Tier 4 (Mega Batch)',
    illustrativeBenefit: 'Up to ₹13,500*',
    perks: 'Ather Duo Portable Fast Charger + Ather Pro Pack Included',
    image: 'assets/images/ather-rizta-opt.webp',
    variants: ['Pangong Blue', 'Deccan Grey', 'Cardamom Green', 'Siachen White']
  },
  'access-125': {
    brand: 'Suzuki',
    model: 'Access 125',
    category: 'Executive Scooter',
    engine: '124cc SEP Fi',
    city: 'Bengaluru',
    buyersJoined: 41,
    targetBuyers: 50,
    tier: 'Tier 2 (Forming Batch)',
    illustrativeBenefit: 'Up to ₹6,500*',
    perks: 'Chrome Side Guard + Seat Cover + 1-Year Comprehensive RSA',
    image: 'assets/images/access-125.webp',
    variants: ['Solid Ice Green', 'Pearl Mirage White', 'Matte Titanium Grey', 'Metallic Dark Green']
  }
};

/* ==========================================================================
   Mobile Menu Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   Vehicle Category Filter Tabs
   ========================================================================== */
function initVehicleFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.vehicle-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   Interactive Group Savings Calculator
   ========================================================================== */
function initSavingsCalculator() {
  const slider = document.getElementById('calc-slider');
  const countDisplay = document.getElementById('calc-buyer-count');
  const tierBadge = document.getElementById('calc-tier-badge');
  const amountDisplay = document.getElementById('calc-amount-display');
  const volumeDisplay = document.getElementById('calc-volume-display');
  const perksList = document.getElementById('calc-perks-list');
  const typeBtns = document.querySelectorAll('.type-btn');

  if (!slider) return;

  // Base pricing multipliers for illustrative calculations
  const TYPE_MULTIPLIERS = {
    'motorcycle-premium': { avgPrice: 180000, baseSavingRate: 0.055 },
    'motorcycle-commuter': { avgPrice: 120000, baseSavingRate: 0.05 },
    'scooter': { avgPrice: 95000, baseSavingRate: 0.052 },
    'electric': { avgPrice: 145000, baseSavingRate: 0.075 }
  };

  let activeType = 'motorcycle-premium';

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.getAttribute('data-type');
      updateCalculator();
    });
  });

  slider.addEventListener('input', updateCalculator);

  function updateCalculator() {
    const buyers = parseInt(slider.value, 10);
    countDisplay.textContent = `${buyers} Buyers`;

    const config = TYPE_MULTIPLIERS[activeType] || TYPE_MULTIPLIERS['motorcycle-premium'];
    const totalVolume = buyers * config.avgPrice;
    volumeDisplay.textContent = `₹${(totalVolume / 100000).toFixed(1)} Lakhs`;

    let tierName = 'Tier 1 (Starter Batch)';
    let tierMultiplier = 1.0;
    let perks = [];

    if (buyers < 15) {
      tierName = 'Tier 1 (Starter Group)';
      tierMultiplier = 1.0;
      perks = [
        'Dealership Handling Fee Waiver (~₹1,500 value)',
        'Basic Accessories Kit (Seat Cover + Grip)',
        'Standard Authorized Dealership Delivery'
      ];
    } else if (buyers < 35) {
      tierName = 'Tier 2 (Active Community)';
      tierMultiplier = 1.35;
      perks = [
        'Dealership Handling & Logistics Waiver (~₹2,500 value)',
        'Premium Accessory Bundle (Crash Guard / Visor)',
        '1-Year Free Roadside Assistance (RSA)',
        'Subsidized 1st Year Insurance Package'
      ];
    } else if (buyers < 60) {
      tierName = 'Tier 3 (Power Syndicate)';
      tierMultiplier = 1.7;
      perks = [
        'Full Dealer Fee Waiver + Free Delivery Kit (~₹3,500 value)',
        'Complete OEM Chrome/Protection Accessory Set',
        '2-Year Extended Engine/Battery Warranty Included',
        'Subsidized Comprehensive Zero-Dep Insurance'
      ];
    } else {
      tierName = 'Tier 4 (Mega Batch Power)';
      tierMultiplier = 2.1;
      perks = [
        'Maximum Negotiated Group Fleet Quotation',
        'Complete OEM Accessories & Free Helmets for 2 Riders',
        '3-Year Extended Warranty + VIP Fast-Track PDI Delivery',
        'Exclusive Dealership Batch Dispatch Day'
      ];
    }

    tierBadge.textContent = tierName;

    // Calculate illustrative savings per buyer
    const baseSaving = config.avgPrice * config.baseSavingRate;
    const estSavingPerBuyer = Math.round((baseSaving * tierMultiplier) / 500) * 500;

    amountDisplay.innerHTML = `₹${estSavingPerBuyer.toLocaleString('en-IN')}* <small>/ rider (illustrative)</small>`;

    // Render perks
    perksList.innerHTML = perks.map(p => `
      <li class="calc-perk-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${p}</span>
      </li>
    `).join('');
  }

  // Initial trigger
  updateCalculator();
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');

    if (!button || !content) return;

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other items for a clean single-open accordion
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          const otherContent = other.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/* ==========================================================================
   Modal Dialog & Demo Interest Submission
   ========================================================================== */
function initModalInteractions() {
  const modalOverlay = document.getElementById('deal-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('group-interest-form');
  const openButtons = document.querySelectorAll('[data-open-modal]');

  // Modal elements to dynamically populate
  const modalTitle = document.getElementById('modal-vehicle-title');
  const modalSub = document.getElementById('modal-vehicle-sub');
  const modalThumb = document.getElementById('modal-vehicle-thumb');
  const variantSelect = document.getElementById('modal-variant-select');

  let currentVehicleKey = 'hunter-350';

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const vehicleKey = btn.getAttribute('data-vehicle') || 'hunter-350';
      populateModal(vehicleKey);
      openModal();
    });
  });

  function populateModal(key) {
    currentVehicleKey = key;
    const data = VEHICLE_DATA[key] || VEHICLE_DATA['hunter-350'];

    if (modalTitle) modalTitle.textContent = `${data.brand} ${data.model}`;
    if (modalSub) {
      modalSub.textContent = `${data.category} • ${data.engine} • ${data.buyersJoined} Buyers in Bengaluru`;
    }
    if (modalThumb) {
      modalThumb.src = data.image;
      modalThumb.alt = `${data.brand} ${data.model}`;
    }

    if (variantSelect) {
      variantSelect.innerHTML = data.variants
        .map(v => `<option value="${v}">${v} (Standard Showroom Spec)</option>`)
        .join('');
    }
  }

  function openModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close on outside click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Handle Demo Form Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('applicant-name').value.trim() || 'Rider';
      const vehicle = VEHICLE_DATA[currentVehicleKey]?.model || 'Two-Wheeler';
      const conciergeChecked = document.getElementById('concierge-addon')?.checked;

      closeModal();

      // Show friendly prototype toast
      const conciergeText = conciergeChecked ? ' with ₹99 Concierge selected' : '';
      showToast(`🎉 Demo interest recorded for ${name} (${vehicle}${conciergeText})! Visual prototype: No real registration or payment processed.`);

      // Reset form
      form.reset();
    });
  }
}

/* ==========================================================================
   Toast Notification System
   ========================================================================== */
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#20C779" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4800);
}

/* ==========================================================================
   Smooth Scrolling for Anchors
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
