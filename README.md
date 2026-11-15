# JODO — Two-Wheeler Group Buying Platform
**"Join Together. Ride for Less."**

A modern, premium, responsive landing page frontend prototype for **JODO**, an Indian technology startup enabling group buying for two-wheelers (Motorcycles, Scooters, and Electric Two-Wheelers).

---

## 🚀 Business Concept

JODO helps people in India get better deals on new two-wheelers by bringing together multiple interested buyers of the same or related bikes and scooters. JODO combines buyer demand and negotiates special group discounts with authorized dealerships.

The platform is exclusively for:
- **Motorcycles**
- **Scooters**
- **Electric two-wheelers**

*(Excludes cars, phones, electronics, or other products)*

---

## 🎨 Design System

Inspired by premium automotive and fintech websites:
- **Deep Navy:** `#101B35`
- **Bright Green:** `#20C779`
- **White:** `#FFFFFF`
- **Light Grey:** `#F5F7FA`
- **Typography:** Plus Jakarta Sans
- **Styling:** Clean typography, rounded cards, subtle shadows, beautiful vehicle photography, modern icons, smooth hover effects, responsive layout for desktop and mobile.

---

## 📋 Page Sections

1. **Navigation Bar (Sticky):**
   - JODO Logo & Tagline
   - Links: Home, Explore Bikes, How It Works, About Us, Contact
   - "Join JODO" Button
   - Responsive mobile drawer menu

2. **Hero Section:**
   - Large Headline: *"Your Next Ride. A Better Deal. Together."*
   - Supporting Text: *"Why buy alone when you can buy together? Join other bike and scooter buyers, unlock exclusive group offers, and save more on your next ride."*
   - Two CTA Buttons: **Explore Group Deals** & **Join the JODO Community**
   - Hero visual with stylish Indian motorcycles and floating status cards
   - Three Trust Highlights:
     - Group Buying Power
     - Exclusive Dealer Offers
     - Free Registration

3. **Featured Two-Wheeler Campaigns:**
   - Filter tabs: All Two-Wheelers, Motorcycles, Scooters, Electric EV
   - 6 Example models:
     1. **Royal Enfield Hunter 350** (Motorcycle • Bengaluru)
     2. **TVS Apache RTR 160** (Motorcycle • Bengaluru)
     3. **Honda Activa 125** (Scooter • Bengaluru)
     4. **Yamaha R15** (Motorcycle • Bengaluru)
     5. **Ather Rizta** (Electric Two-Wheeler • Bengaluru)
     6. **Suzuki Access 125** (Scooter • Bengaluru)
   - Vehicle cards include vehicle image, brand & model, vehicle category, city (Bengaluru), interested buyer counts, and "View Group Deal" button.
   - Illustrative sample data clearly labelled.

4. **How JODO Works (Four Steps):**
   - **Step 1: Choose Your Ride** — *"Select the bike or scooter you want."*
   - **Step 2: Join a Group** — *"Connect with other people interested in the same vehicle."*
   - **Step 3: JODO Negotiates** — *"We approach dealerships to negotiate better group offers."*
   - **Step 4: Get Your Deal** — *"Compare the offer and purchase directly from the dealership."*

5. **Why Choose JODO?:**
   - **Better Group Deals** — More interested buyers can create stronger negotiating power.
   - **Save Time** — We bring dealership offers together in one place.
   - **Trusted Dealerships** — Work with verified and authorized dealerships.
   - **Free to Join** — Registration is free.
   - **Optional ₹99 Assistance Service (Shown Separately):** Dedicated WhatsApp support specialist, doorstep test ride coordination, paperwork pre-check, and priority slot. (Basic registration is 100% Free).

6. **Call-To-Action Section:**
   - Headline: *"Your Dream Ride Is Better Together."*
   - Supporting Text: *"Join JODO today and be part of a smarter way to buy two-wheelers."*
   - Button: *"Join the Group"*

7. **Footer:**
   - JODO logo and tagline: *"Join Together. Ride for Less."*
   - About JODO
   - How It Works
   - Explore Bikes
   - Contact Us
   - Privacy Policy
   - Terms and Conditions
   - Instagram, YouTube, and Facebook icons
   - Mandatory Footer Note: *"JODO is a group-buying facilitation platform. Vehicle purchases are completed directly with dealerships."*

---

## 🛠️ Tech Stack & Directory Structure

```
project-v/
├── index.html               # Semantic HTML5
├── css/
│   └── styles.css           # Modern CSS styling (#101B35, #20C779)
├── js/
│   └── app.js               # Interactive filtering, modal & toasts
├── assets/
│   └── images/              # High-resolution optimized vehicle & hero imagery
│       ├── hunter-350.webp
│       ├── apache-rtr-160.webp
│       ├── activa-125.webp
│       ├── yamaha-r15.webp
│       ├── ather-rizta-opt.webp
│       ├── access-125.webp
│       └── hero-banner.webp
├── .gitignore
└── README.md
```

---

## 💻 How to View Locally

```bash
cd /home/dinakar/Projects/jodo
python3 -m http.server 4173
```
Open `http://localhost:4173/` in any modern web browser.
