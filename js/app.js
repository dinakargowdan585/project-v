/**
 * JODO — Two-Wheeler Group Buying Platform
 * Client-Side Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initVehicleFilter();
  initModalInteractions();
  initSmoothScroll();
});

// Vehicle Catalog Data for Modal Previews
const VEHICLE_DATA = {
  'hunter-350': {
    brand: 'Royal Enfield',
    model: 'Hunter 350',
    category: 'Motorcycle',
    city: 'Bengaluru',
    image: 'assets/images/hunter-350.webp',
    variants: ['Dapper Ash', 'Rebel Blue', 'Factory Black', 'Dapper White']
  },
  'apache-rtr-160': {
    brand: 'TVS',
    model: 'Apache RTR 160',
    category: 'Motorcycle',
    city: 'Bengaluru',
    image: 'assets/images/apache-rtr-160.webp',
    variants: ['Racing Red', 'Matte Black', 'Knight Black', 'Metallic Blue']
  },
  'activa-125': {
    brand: 'Honda',
    model: 'Activa 125',
    category: 'Scooter',
    city: 'Bengaluru',
    image: 'assets/images/activa-125.webp',
    variants: ['Rebel Red Metallic', 'Heavy Gray Metallic', 'Pearl Nightstar Black', 'Mid Night Blue']
  },
  'yamaha-r15': {
    brand: 'Yamaha',
    model: 'Yamaha R15',
    category: 'Motorcycle',
    city: 'Bengaluru',
    image: 'assets/images/yamaha-r15.webp',
    variants: ['Racing Blue', 'Metallic Red', 'Dark Knight', 'Intensity White']
  },
  'ather-rizta': {
    brand: 'Ather',
    model: 'Ather Rizta',
    category: 'Electric Two-Wheeler',
    city: 'Bengaluru',
    image: 'assets/images/ather-rizta-opt.webp',
    variants: ['Pangong Blue', 'Deccan Grey', 'Cardamom Green', 'Siachen White']
  },
  'access-125': {
    brand: 'Suzuki',
    model: 'Suzuki Access 125',
    category: 'Scooter',
    city: 'Bengaluru',
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

    if (modalTitle) modalTitle.textContent = `${data.brand} ${data.model}`;
    if (modalSub) {
      modalSub.textContent = `${data.category} • ${data.city}`;
    }
    if (modalThumb) {
      modalThumb.src = data.image;
      modalThumb.alt = `${data.brand} ${data.model}`;
    }

    if (variantSelect) {
      variantSelect.innerHTML = data.variants
        .map(v => `<option value="${v}">${v}</option>`)
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

      const name = document.getElementById('applicant-name').value.trim() || 'Rider';
      const vehicle = VEHICLE_DATA[currentVehicleKey]?.model || 'Two-Wheeler';
      const conciergeChecked = document.getElementById('concierge-addon')?.checked;

      closeModal();

      const serviceMsg = conciergeChecked ? ' with Optional ₹99 Assistance' : '';
      showToast(`🎉 Thank you, ${name}! Your interest in ${vehicle}${serviceMsg} has been submitted.`);

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
