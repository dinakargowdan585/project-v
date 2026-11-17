# JODO — Rural Two-Wheeler Buying Club
**"Better Bike Deals Start in Your Community."**

An authentic, human, responsive landing page frontend for **JODO**, a rural-first group-buying platform connecting two-wheeler buyers across Karnataka villages to negotiate better offers with authorised motorcycle and scooter dealerships.

---

## 🚀 Business Concept

JODO connects buyers from adjacent villages who intend to purchase the same motorcycle, scooter, or electric two-wheeler. By combining local rural demand into organized taluk clusters (e.g. Ramanagara, Nelamangala, Hoskote, Doddaballapura), JODO negotiates group pricing concessions, accessory packages, and transparent dealer offers with verified dealerships.

The platform is exclusively for:
- **Motorcycles**
- **Scooters**
- **Electric two-wheelers**

*(Excludes cars, phones, electronics, or other products)*

---

## 🎨 Design System & Bilingual Support

- **Primary Forest Green:** `#12372A`
- **Deep Green:** `#1F513D`
- **Fresh Green:** `#3FA66B`
- **Sage:** `#A6D8B5`
- **Warm Cream:** `#F4F1E8`
- **White:** `#FFFFFF`
- **Main Text:** `#173126`
- **Footer:** `#102B21`
- **Typography:** Plus Jakarta Sans & Noto Sans Kannada
- **Bilingual Switcher:** Fully integrated toggle (`English | ಕನ್ನಡ`) in top navbar and mobile drawer with instant DOM re-translation and `localStorage` persistence.
- **Authentic Visual Language:** Grounded editorial layout, genuine photography, crisp 1px borders, subtle 6–12px radii, no artificial crowdfunding progress bars, and no generic AI landing page tropes.

---

## 📋 Page Sections

1. **Navigation Bar (Sticky & Understated):**
   - JODO Logo & Subtitle (*"Rural Two-Wheeler Buying Club"*)
   - Links: Home, Village Clusters, How It Works, Why JODO, Explore Bikes
   - Language toggle: `English | ಕನ್ನಡ`
   - *"Join a Buyer Group"* Button

2. **Editorial Hero Section:**
   - Headline: *"Better Bike Deals Start in Your Community."*
   - Supporting Text: *"Join people from nearby villages who want the same bike or scooter. JODO brings buyers together and negotiates better offers with dealerships."*
   - Buttons: **Find Buyers Near You** & **How Group Buying Works ↓**
   - Three Grounded Trust Bullets: 100% Free registration, direct dealership billing, official warranty & RTO registration in buyer's name
   - Authentic photograph of a Royal Enfield on a Karnataka rural road with descriptive caption

3. **Find Buyers Near Your Village (`#clusters`):**
   - 4 Active Karnataka Taluk Clusters:
     1. **Ramanagara – Channapatna Cluster** (`KA-42 Hub`)
     2. **Nelamangala – Dobbaspet Cluster** (`KA-52 Hub`)
     3. **Hoskote – Malur Cluster** (`KA-53 Hub`)
     4. **Doddaballapura – Gauribidanur Cluster** (`KA-43 Hub`)
   - Direct modal triggers pre-selecting the village cluster

4. **How JODO Works (Four Clear Steps):**
   - **Step 1: Choose your bike.** — *"Select the motorcycle or scooter you intend to purchase within the next 30 to 60 days."*
   - **Step 2: Join nearby buyers.** — *"Connect with buyers from your taluk and nearby villages who want the same or related vehicle."*
   - **Step 3: JODO negotiates with dealerships.** — *"We present collective buyer demand to authorised dealerships to negotiate group benefits, accessory bundles, and pricing concessions."*
   - **Step 4: Compare the verified offer and purchase directly from the dealership.** — *"Review the transparent deal sheet. Pay the dealership directly, complete official RTO paperwork, and take delivery."*

5. **How Group Buying Saves You Time and Money (`#why-jodo`):**
   - Save Days of Travel Between Showrooms
   - Real Leverage Instead of Fixed Retail Markups
   - Safe & Direct: 100% Dealership-Billed
   - Local Village Community Trust

6. **Active Two-Wheeler Campaigns (`#explore`):**
   - Category filters: All Two-Wheelers, Motorcycles, Scooters, Electric EV
   - 6 Grounded Vehicle Cards:
     1. **Royal Enfield Hunter 350** (Ramanagara Cluster)
     2. **TVS Apache RTR 160** (Doddaballapura Cluster)
     3. **Honda Activa 125** (Nelamangala Cluster)
     4. **Yamaha R15** (Hoskote Cluster)
     5. **Ather Rizta** (Hoskote & Malur)
     6. **Suzuki Access 125** (Nelamangala & Tumkur)
   - Real demand indicators: Interested buyer tally, active cluster tag, and illustrative group benefit target.
   - Optional ₹99 Dedicated Doorstep Assistance card with clear 100% free standard registration guarantee.

7. **Call-To-Action Section (`#contact`):**
   - Headline: *"Ready to buy a two-wheeler with your community?"*
   - Subtitle: *"Tell us the bike or scooter you want. We will connect you with active buyers in your taluk and notify you as soon as the dealership offer is ready."*
   - Action Button: *"Join Your Local Buyer Group"*

8. **Footer:**
   - JODO brand description, platform navigation, transparency and legal disclosures
   - Mandatory regulatory disclosure box
   - Social channels

---

## 💻 How to View Locally

```bash
cd /home/dinakar/Projects/jodo
python3 -m http.server 4173
```
Open `http://localhost:4173/` in any modern web browser.
