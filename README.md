# JODO — Two-Wheeler Group Buying Platform
**"Join Together. Ride for Less."**

A modern, premium, responsive landing page and interactive frontend prototype built for **JODO**, an Indian technology startup enabling group buying for two-wheelers (Motorcycles, Scooters, and Electric Two-Wheelers).

---

## 🚀 Concept & Business Overview

In India, buying a new two-wheeler has historically been an individual, stressful showroom haggling experience. Authorized dealerships spend significant capital acquiring individual leads and managing erratic foot traffic.

**JODO** transforms two-wheeler retail by aggregating buyer demand in city clusters (launched in Bengaluru). When 30 to 70 interested buyers pool together for the same or related models, JODO negotiates batch volume benefits with authorized brand dealerships — delivering savings, accessory vouchers, insurance subsidies, and priority delivery directly to buyers.

* **Exclusively For:** Motorcycles, Scooters, Electric Two-Wheelers (EVs).
* **Excluded:** No cars, smartphones, electronics, or unrelated goods.
* **Transaction Execution:** Purchases, GST billing, and deliveries are completed directly with verified, authorized brand dealerships.

---

## 🎨 Design System

Inspired by top-tier automotive and fintech platforms (CRED, Ather Energy, Zerodha, Spinny):

| Element | Specification | Hex / Value |
| :--- | :--- | :--- |
| **Deep Navy** | Primary brand canvas, hero depth, dark cards | `#101B35` |
| **Bright Green** | Growth accent, savings highlights, active CTAs | `#20C779` |
| **Pure White** | Clean card surfaces, high contrast text | `#FFFFFF` |
| **Light Grey** | Harmonious background tone | `#F5F7FA` |
| **Deep Navy Dark**| Ultra-dark footer & base background | `#090E1D` |
| **Typography** | Modern geometric sans | Plus Jakarta Sans / Inter |
| **Visuals** | High-definition vehicle photography & custom SVGs | WebP / Scalable Vector |

---

## 📦 Page Sections & Features

1. **Top Prototype Notice Banner:** Clear reminder that figures, campaigns, and dealer quotes are illustrative demo placeholders.
2. **Sticky Navigation Bar:**
   - JODO brand mark with velocity wheel emblem and tagline
   - Links: Home, Explore Bikes, How It Works, Savings Calculator, About Us, Contact
   - Live city hub badge (`📍 Bengaluru Hub`)
   - "Join JODO" high-contrast CTA
   - Mobile responsive drawer menu with hamburger toggle
3. **Hero Section:**
   - Headline: *"Your Next Ride. A Better Deal. Together."*
   - Subtitle: *"Why buy alone when you can buy together? Join other bike and scooter buyers, unlock exclusive group offers, and save more on your next ride."*
   - Dual CTAs: "Explore Group Deals" & "Join the JODO Community"
   - Right Visual: Urban Bangalore Royal Enfield showcase with floating status cards (`48 Buyers Waiting`, `Up to ₹12,500* Target Saving`)
   - Three Trust Highlights: Group Buying Power, Exclusive Dealer Offers, Free Registration
4. **Live Metrics / Proof Bar:**
   - ₹1.8 Cr+ Illustrative Demand Pooled
   - 640+ Interested Buyers Connected
   - 28+ Authorized Dealership Hubs
   - 100% Free Upfront Registration
5. **Featured Two-Wheeler Campaigns Grid:**
   - Filter Tabs: All Two-Wheelers (6), Motorcycles (3), Scooters (2), Electric EV (1)
   - Real-world Indian models:
     1. **Royal Enfield Hunter 350** (349cc Roadster • 48 Buyers • Tier 3 Power Batch)
     2. **TVS Apache RTR 160 4V** (159.7cc Sport Commuter • 36 Buyers • Tier 2 Batch)
     3. **Honda Activa 125** (124cc Family Scooter • 52 Buyers • Tier 3 Batch)
     4. **Yamaha YZF R15 V4** (155cc Supersport • 29 Buyers • Tier 2 Batch)
     5. **Ather Rizta EV** (160km Range Smart Electric • 64 Buyers • Tier 4 Mega Batch)
     6. **Suzuki Access 125** (124cc Executive Scooter • 41 Buyers • Tier 2 Batch)
   - Progress indicators, batch thresholds, illustrative target benefits, and "View Group Deal" action buttons.
6. **Interactive Group Negotiation Simulator:**
   - Category selector (Premium Bike, Commuter, Scooter, Electric EV)
   - Buyer volume slider (5 to 80 riders)
   - Real-time calculation of collective volume, negotiation tiers, and illustrative perks.
7. **How JODO Works (Four Steps):**
   - Step 1: Choose Your Ride ("Select the bike or scooter you want.")
   - Step 2: Join a Group ("Connect with other people interested in the same vehicle.")
   - Step 3: JODO Negotiates ("We approach dealerships to negotiate better group offers.")
   - Step 4: Get Your Deal ("Compare the offer and purchase directly from the dealership.")
   - Visual flow comparison bar.
8. **Why Choose JODO?:**
   - Four feature cards: Better Group Deals, Save Time, Trusted Dealerships, Free to Join.
   - Dedicated Optional Card: **JODO Priority Assistance Concierge (₹99 Only)** with detailed perks and explicit guarantee that baseline registration is 100% Free.
9. **Authorized Dealership Network Strip:** Verified partner network (Royal Enfield, TVS, Honda, Yamaha, Ather, Suzuki).
10. **Frequently Asked Questions (FAQ):** Accordion addressing dealership model, zero-obligation commitment, and delivery process.
11. **Call-To-Action (CTA):** *"Your Dream Ride Is Better Together."* with "Join the Group" button and trust chips.
12. **Complete Footer:**
    - Social links: Instagram, YouTube, Facebook (custom SVG icons)
    - Navigation, legal links, and Bengaluru Launch Hub details
    - Mandatory Footer Note: *"JODO is a group-buying facilitation platform. Vehicle purchases are completed directly with dealerships."*
13. **Interactive Modal & Toast Notifications:**
    - Clicking any vehicle card opens a dynamic modal prefilled with that specific model
    - Interactive interest form with name, phone, variant selector, and optional ₹99 checkbox
    - Form submission triggers non-blocking animated toast feedback reinforcing the demo prototype nature.

---

## 🛠️ Tech Stack & Directory Structure

* **Pure Vanilla HTML5 / CSS3 / JavaScript** (Zero bloated frameworks, runs instantly in any browser)
* **Responsive Breakpoints:** Desktop (1240px+), Tablet (768px - 1050px), Mobile (360px - 768px)

```
/home/dinakar/Projects/jodo/
├── index.html               # Semantic, accessible HTML5 structure
├── css/
│   └── styles.css           # Modern CSS system, custom properties, glassmorphism
├── js/
│   └── app.js               # Interactive tabs, calculator, modal, accordion & toasts
├── assets/
│   └── images/              # High-res optimized vehicle & hero imagery
│       ├── hunter-350.webp
│       ├── apache-rtr-160.webp
│       ├── activa-125.webp
│       ├── yamaha-r15.webp
│       ├── ather-rizta-opt.webp
│       ├── access-125.webp
│       └── hero-banner.webp
├── preview-desktop.png      # Screenshot of desktop viewport
├── preview-mobile-fixed.png # Screenshot of mobile viewport
├── preview-modal-real.png   # Screenshot of interactive group modal
└── README.md                # Project documentation
```

---

## 💻 How to View & Run Locally

Run any local web server from the project directory:

```bash
cd /home/dinakar/Projects/jodo
python3 -m http.server 4173
```

Then open `http://localhost:4173/` in any modern web browser.
