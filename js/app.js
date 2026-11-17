/**
 * JODO — Two-Wheeler Group Buying Platform
 * Client-Side Logic & Bilingual Language Management
 */

const STORAGE_LANG_KEY = 'jodo_selected_language';
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSystem();
  initMobileMenu();
  initVehicleFilter();
  initModalInteractions();
  initSmoothScroll();
});

// Vehicle Catalog Data for Modal Previews (with Kannada support)
const VEHICLE_DATA = {
  'hunter-350': {
    brand: 'Royal Enfield',
    model: 'Hunter 350',
    brand_kn: 'ರಾಯಲ್ ಎನ್‌ಫೀಲ್ಡ್',
    model_kn: 'ಹಂಟರ್ 350',
    category: 'Motorcycle',
    category_kn: 'ಮೋಟರ್‌ಸೈಕಲ್',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/hunter-350.webp',
    variants: ['Dapper Ash', 'Rebel Blue', 'Factory Black', 'Dapper White']
  },
  'apache-rtr-160': {
    brand: 'TVS',
    model: 'Apache RTR 160',
    brand_kn: 'ಟಿವಿಎಸ್',
    model_kn: 'ಅಪಾಚೆ ಆರ್‌ಟಿಆರ್ 160',
    category: 'Motorcycle',
    category_kn: 'ಮೋಟರ್‌ಸೈಕಲ್',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/apache-rtr-160.webp',
    variants: ['Racing Red', 'Matte Black', 'Knight Black', 'Metallic Blue']
  },
  'activa-125': {
    brand: 'Honda',
    model: 'Activa 125',
    brand_kn: 'ಹೋಂಡಾ',
    model_kn: 'ಆಕ್ಟಿವಾ 125',
    category: 'Scooter',
    category_kn: 'ಸ್ಕೂಟರ್',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/activa-125.webp',
    variants: ['Rebel Red Metallic', 'Heavy Gray Metallic', 'Pearl Nightstar Black', 'Mid Night Blue']
  },
  'yamaha-r15': {
    brand: 'Yamaha',
    model: 'Yamaha R15',
    brand_kn: 'ಯಮಹಾ',
    model_kn: 'ಯಮಹಾ ಆರ್‌15',
    category: 'Motorcycle',
    category_kn: 'ಮೋಟರ್‌ಸೈಕಲ್',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/yamaha-r15.webp',
    variants: ['Racing Blue', 'Metallic Red', 'Dark Knight', 'Intensity White']
  },
  'ather-rizta': {
    brand: 'Ather',
    model: 'Ather Rizta',
    brand_kn: 'ಏಥರ್',
    model_kn: 'ಏಥರ್ ರಿಜ್ತಾ',
    category: 'Electric Two-Wheeler',
    category_kn: 'ಎಲೆಕ್ಟ್ರಿಕ್ ದ್ವಿಚಕ್ರ ವಾಹನ',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/ather-rizta-opt.webp',
    variants: ['Pangong Blue', 'Deccan Grey', 'Cardamom Green', 'Siachen White']
  },
  'access-125': {
    brand: 'Suzuki',
    model: 'Suzuki Access 125',
    brand_kn: 'ಸುಜುಕಿ',
    model_kn: 'ಸುಜುಕಿ ಆಕ್ಸೆಸ್ 125',
    category: 'Scooter',
    category_kn: 'ಸ್ಕೂಟರ್',
    city: 'Bengaluru',
    city_kn: 'ಬೆಂಗಳೂರು',
    image: 'assets/images/access-125.webp',
    variants: ['Solid Ice Green', 'Pearl Mirage White', 'Matte Titanium Grey', 'Metallic Dark Green']
  }
};

/* ==========================================================================
   Language Switcher & Translation Engine
   ========================================================================== */
function initLanguageSystem() {
  // 1. Determine Initial Language: from URL param, or localStorage, default to 'en'
  let savedLang = 'en';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'kn' || urlLang === 'en') {
      savedLang = urlLang;
      localStorage.setItem(STORAGE_LANG_KEY, urlLang);
    } else {
      const stored = localStorage.getItem(STORAGE_LANG_KEY);
      if (stored === 'en' || stored === 'kn') {
        savedLang = stored;
      }
    }
  } catch (err) {
    savedLang = 'en';
  }

  // 2. Attach Event Listeners to all language switcher buttons (desktop + mobile)
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang-btn');
      if (targetLang && targetLang !== currentLanguage) {
        setLanguage(targetLang);
      }
    });
  });

  // 3. Apply the initial language
  setLanguage(savedLang);
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'kn') lang = 'en';
  currentLanguage = lang;

  // Persist choice in localStorage
  try {
    localStorage.setItem(STORAGE_LANG_KEY, lang);
  } catch (err) {
    console.warn('localStorage not accessible for language persistence:', err);
  }

  // Update HTML and body classes
  document.documentElement.lang = lang;
  if (lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }

  // Update UI state of all language buttons
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Apply translations to DOM
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) {
    const dict = TRANSLATIONS[lang];

    // Standard text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // HTML content (for elements with inner highlights or spans)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });
  }

  // Update open modal if currently displayed
  if (window.updateModalLanguage) {
    window.updateModalLanguage(lang);
  }
}

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
   Modal Dialog & Group Interest Submission
   ========================================================================== */
function initModalInteractions() {
  const modalOverlay = document.getElementById('deal-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('group-interest-form');
  const openButtons = document.querySelectorAll('[data-open-modal]');

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
    const isKn = currentLanguage === 'kn';

    if (modalTitle) {
      modalTitle.textContent = isKn ? `${data.brand_kn} ${data.model_kn}` : `${data.brand} ${data.model}`;
    }
    if (modalSub) {
      const categoryStr = isKn ? data.category_kn : data.category;
      const cityStr = isKn ? data.city_kn : data.city;
      modalSub.textContent = `${categoryStr} • ${cityStr}`;
    }
    if (modalThumb) {
      modalThumb.src = data.image;
      modalThumb.alt = isKn ? `${data.brand_kn} ${data.model_kn}` : `${data.brand} ${data.model}`;
    }

    if (variantSelect) {
      variantSelect.innerHTML = data.variants
        .map(v => `<option value="${v}">${v}</option>`)
        .join('');
    }
  }

  // Expose to language switcher so dynamic modal content syncs on language change
  window.updateModalLanguage = function(lang) {
    if (modalOverlay && modalOverlay.classList.contains('open')) {
      populateModal(currentVehicleKey);
    }
  };

  // Support deep-link test parameter ?open=1&vehicle=...
  try {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('open') === '1') {
      const vKey = urlParams.get('vehicle') || 'hunter-350';
      setTimeout(() => {
        populateModal(vKey);
        openModal();
      }, 50);
    }
  } catch (e) {}

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

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('applicant-name').value.trim() || (currentLanguage === 'kn' ? 'ಸವಾರ' : 'Rider');
      const vehicleData = VEHICLE_DATA[currentVehicleKey] || VEHICLE_DATA['hunter-350'];
      const vehicle = currentLanguage === 'kn' ? vehicleData.model_kn : vehicleData.model;
      const conciergeChecked = document.getElementById('concierge-addon')?.checked;

      closeModal();

      let toastTemplate = TRANSLATIONS[currentLanguage]["modal.toastSuccess"] || "🎉 Thank you, {name}! Your interest in {vehicle}{service} has been submitted.";
      let serviceText = conciergeChecked ? (TRANSLATIONS[currentLanguage]["modal.toastService"] || " with Optional ₹99 Assistance") : "";

      const toastMessage = toastTemplate
        .replace('{name}', name)
        .replace('{vehicle}', vehicle)
        .replace('{service}', serviceText);

      showToast(toastMessage);
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FA66B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
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
  }, 4500);
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
        const headerOffset = 76;
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
