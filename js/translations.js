/**
 * JODO — Bilingual Translation Dictionary (English & Kannada)
 * High-quality, natural translations for automotive & group-buying terms.
 */

const TRANSLATIONS = {
  en: {
    // Brand
    "brand.tagline": "Ride For Less",
    "brand.footerTagline": "\"Join Together. Ride for Less.\"",

    // Navigation
    "nav.home": "Home",
    "nav.explore": "Explore Bikes",
    "nav.how": "How It Works",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.join": "Join JODO",
    "lang.label": "Language / ಭಾಷೆ:",

    // Hero Section
    "hero.title1": "Your Next Ride.",
    "hero.title2": "A Better Deal.",
    "hero.together": "Together.",
    "hero.desc": "Why buy alone when you can buy together? Join other bike and scooter buyers, unlock exclusive group offers, and save more on your next ride.",
    "hero.ctaExplore": "Explore Group Deals",
    "hero.ctaCommunity": "Join the JODO Community",
    "hero.trust1Title": "Group Buying Power",
    "hero.trust1Sub": "Strength in numbers",
    "hero.trust2Title": "Exclusive Dealer Offers",
    "hero.trust2Sub": "Authorized networks",
    "hero.trust3Title": "Free Registration",
    "hero.trust3Sub": "Zero risk to join",
    "hero.hub": "Bengaluru Hub",
    "hero.waiting": "48 Buyers Waiting",
    "hero.hunterModel": "Royal Enfield Hunter 350",
    "hero.quoteTitle": "Better Dealership Quotes",
    "hero.quoteSub": "Negotiated via collective demand",

    // Featured Two-Wheeler Campaigns
    "campaigns.title": "Featured Two-Wheeler Campaigns",
    "campaigns.subtitle": "Explore ongoing groups in Bengaluru. Join interested buyers of your dream ride to unlock better group offers from authorized dealerships.",
    "filter.all": "All Two-Wheelers",
    "filter.motorcycle": "Motorcycles",
    "filter.scooter": "Scooters",
    "filter.electric": "Electric EV",

    // Common Card Elements
    "city.bengaluru": "Bengaluru",
    "cat.motorcycle": "Motorcycle",
    "cat.scooter": "Scooter",
    "cat.electric": "Electric Two-Wheeler",
    "card.targetPrefix": "Target: ",
    "card.progressLabel": "Illustrative Group Progress",
    "card.activeBatch": "Active Batch",
    "card.benefitLabel": "Target Group Benefit (Placeholder)",
    "card.viewDeal": "View Group Deal",
    "card.disclaimer": "*Note: Buyer counts and placeholder offers shown are illustrative examples. Discounts and dealer offers are negotiated based on group size and confirmed directly with authorized dealerships upon batch closure.",

    // Specific Vehicles
    "card.hunter.brand": "Royal Enfield",
    "card.hunter.model": "Hunter 350",
    "card.hunter.buyers": "48 Interested Buyers",
    "card.hunter.target": "Target: 60",
    "card.hunter.val": "Up to ₹9,500*",
    "card.hunter.note": "Accessories bundle & dealership benefits",

    "card.apache.brand": "TVS",
    "card.apache.model": "Apache RTR 160",
    "card.apache.buyers": "36 Interested Buyers",
    "card.apache.target": "Target: 50",
    "card.apache.val": "Up to ₹7,200*",
    "card.apache.note": "Helmet & extended warranty package",

    "card.activa.brand": "Honda",
    "card.activa.model": "Activa 125",
    "card.activa.buyers": "52 Interested Buyers",
    "card.activa.target": "Target: 60",
    "card.activa.val": "Up to ₹6,800*",
    "card.activa.note": "Protection accessories & service package",

    "card.yamaha.brand": "Yamaha",
    "card.yamaha.model": "Yamaha R15",
    "card.yamaha.buyers": "29 Interested Buyers",
    "card.yamaha.target": "Target: 40",
    "card.yamaha.val": "Up to ₹11,000*",
    "card.yamaha.note": "Performance gear voucher & insurance subsidy",

    "card.ather.brand": "Ather",
    "card.ather.model": "Ather Rizta",
    "card.ather.buyers": "64 Interested Buyers",
    "card.ather.target": "Target: 75",
    "card.ather.val": "Up to ₹13,500*",
    "card.ather.note": "Ather Duo fast charger & Pro pack bundle",

    "card.access.brand": "Suzuki",
    "card.access.model": "Suzuki Access 125",
    "card.access.buyers": "41 Interested Buyers",
    "card.access.target": "Target: 50",
    "card.access.val": "Up to ₹6,500*",
    "card.access.note": "Chrome accessories & roadside assistance package",

    // How JODO Works
    "how.title": "How JODO Works",
    "how.subtitle": "A simple, transparent process that brings buyers together to unlock better two-wheeler deals.",
    "how.step1Title": "Step 1: Choose Your Ride",
    "how.step1Desc": "Select the bike or scooter you want.",
    "how.step2Title": "Step 2: Join a Group",
    "how.step2Desc": "Connect with other people interested in the same vehicle.",
    "how.step3Title": "Step 3: JODO Negotiates",
    "how.step3Desc": "We approach dealerships to negotiate better group offers.",
    "how.step4Title": "Step 4: Get Your Deal",
    "how.step4Desc": "Compare the offer and purchase directly from the dealership.",

    // Why Choose JODO
    "why.title": "Why Choose JODO?",
    "why.subtitle": "A smarter, community-driven way to purchase your two-wheeler in India.",
    "why.card1Title": "Better Group Deals",
    "why.card1Desc": "More interested buyers can create stronger negotiating power.",
    "why.card2Title": "Save Time",
    "why.card2Desc": "We bring dealership offers together in one place.",
    "why.card3Title": "Trusted Dealerships",
    "why.card3Desc": "Work with verified and authorized dealerships.",
    "why.card4Title": "Free to Join",
    "why.card4Desc": "Registration is free. An optional ₹99 assistance service can be shown separately, with its benefits explained clearly.",

    // Optional ₹99 Card
    "assist.badge": "Optional Service • ₹99 Only",
    "assist.title": "Optional ₹99 Assistance Service",
    "assist.desc": "For buyers who would like dedicated support throughout their purchase, our optional ₹99 assistance service provides personalized coordination from test rides to delivery.",
    "assist.notePrefix": "Note:",
    "assist.note": "Registration and participation in all JODO groups is 100% Free. This assistance service is completely optional.",
    "assist.feat1": "Dedicated WhatsApp support specialist",
    "assist.feat2": "Doorstep test ride coordination",
    "assist.feat3": "Paperwork and documentation pre-check",
    "assist.feat4": "Priority slot in the active negotiation batch",

    // Call to Action
    "cta.title1": "Your Dream Ride Is",
    "cta.title2": "Better Together.",
    "cta.desc": "Join JODO today and be part of a smarter way to buy two-wheelers.",
    "cta.btn": "Join the Group",

    // Footer
    "footer.navTitle": "Navigation",
    "footer.about": "About JODO",
    "footer.how": "How It Works",
    "footer.explore": "Explore Bikes",
    "footer.contact": "Contact Us",
    "footer.legalTitle": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and Conditions",
    "footer.disclaimer": "JODO is a group-buying facilitation platform. Vehicle purchases are completed directly with dealerships.",
    "footer.rights": "© 2026 JODO. All rights reserved.",

    // Interactive Modal
    "modal.campaignLabel": "Group Buying Campaign",
    "modal.activePool": "Active Group Pool:",
    "modal.batch": "Bengaluru Batch",
    "modal.nameLabel": "Your Full Name",
    "modal.namePlaceholder": "Enter your full name",
    "modal.phoneLabel": "WhatsApp Number",
    "modal.phonePlaceholder": "+91 98765 43210",
    "modal.variantLabel": "Preferred Variant / Color",
    "modal.variantDefault": "Standard Variant",
    "modal.addonTitle": "Add Optional ₹99 Assistance Service",
    "modal.addonDesc": "Dedicated WhatsApp support, doorstep test ride coordination, and paperwork pre-checks. (Basic group registration is 100% Free).",
    "modal.submit": "Join the Group",
    "modal.toastSuccess": "🎉 Thank you, {name}! Your interest in {vehicle}{service} has been submitted.",
    "modal.toastService": " with Optional ₹99 Assistance"
  },

  kn: {
    // Brand
    "brand.tagline": "ಕಡಿಮೆ ಬೆಲೆಗೆ ಖರೀದಿಸಿ",
    "brand.footerTagline": "\"ಒಟ್ಟಾಗಿ ಸೇರಿ. ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಸವಾರಿ ಮಾಡಿ.\"",

    // Navigation
    "nav.home": "ಮುಖಪುಟ",
    "nav.explore": "ವಾಹನಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "nav.how": "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.contact": "ಸಂಪರ್ಕಿಸಿ",
    "nav.join": "ಜೊಡೋ ಸೇರಿ",
    "lang.label": "ಭಾಷೆ / Language:",

    // Hero Section
    "hero.title1": "ನಿಮ್ಮ ಮುಂದಿನ ಸವಾರಿ.",
    "hero.title2": "ಉತ್ತಮ ಆಫರ್.",
    "hero.together": "ಒಟ್ಟಾಗಿ.",
    "hero.desc": "ಒಬ್ಬರೇ ಏಕೆ ಖರೀದಿಸಬೇಕು? ಒಟ್ಟಾಗಿ ಖರೀದಿಸಿ! ಇತರ ಬೈಕ್ ಮತ್ತು ಸ್ಕೂಟರ್ ಖರೀದಿದಾರರೊಂದಿಗೆ ಸೇರಿ, ವಿಶೇಷ ಗುಂಪು ಆಫರ್‌ಗಳನ್ನು ಪಡೆದುಕೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ಮುಂದಿನ ಸವಾರಿಯಲ್ಲಿ ಹೆಚ್ಚು ಉಳಿತಾಯ ಮಾಡಿ.",
    "hero.ctaExplore": "ಗುಂಪು ಡೀಲ್‌ಗಳನ್ನು ನೋಡಿ",
    "hero.ctaCommunity": "ಜೊಡೋ ಸಮುದಾಯವನ್ನು ಸೇರಿ",
    "hero.trust1Title": "ಗುಂಪು ಖರೀದಿಯ ಶಕ್ತಿ",
    "hero.trust1Sub": "ಜನಬಲದಲ್ಲಿದೆ ಉಳಿತಾಯ",
    "hero.trust2Title": "ವಿಶೇಷ ಡೀಲರ್ ಆಫರ್‌ಗಳು",
    "hero.trust2Sub": "ಅಧಿಕೃತ ನೆಟ್‌ವರ್ಕ್",
    "hero.trust3Title": "ಉಚಿತ ನೋಂದಣಿ",
    "hero.trust3Sub": "ಸೇರಲು ಯಾವುದೇ ಅಪಾಯವಿಲ್ಲ",
    "hero.hub": "ಬೆಂಗಳೂರು ಹಬ್",
    "hero.waiting": "48 ಖರೀದಿದಾರರು ಕಾಯುತ್ತಿದ್ದಾರೆ",
    "hero.hunterModel": "ರಾಯಲ್ ಎನ್‌ಫೀಲ್ಡ್ ಹಂಟರ್ 350",
    "hero.quoteTitle": "ಉತ್ತಮ ಡೀಲರ್‌ಶಿಪ್ ಕೊಡುಗೆಗಳು",
    "hero.quoteSub": "ಸಾಮೂಹಿಕ ಬೇಡಿಕೆಯ ಮೂಲಕ ಮಾತುಕತೆ",

    // Featured Two-Wheeler Campaigns
    "campaigns.title": "ಪ್ರಮುಖ ದ್ವಿಚಕ್ರ ವಾಹನಗಳ ಪ್ರಚಾರಗಳು",
    "campaigns.subtitle": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಗುಂಪುಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ಗಳಿಂದ ಉತ್ತಮ ಆಫರ್‌ಗಳನ್ನು ಪಡೆಯಲು ಇತರ ಖರೀದಿದಾರರೊಂದಿಗೆ ಸೇರಿ.",
    "filter.all": "ಎಲ್ಲಾ ವಾಹನಗಳು",
    "filter.motorcycle": "ಮೋಟರ್‌ಸೈಕಲ್‌ಗಳು",
    "filter.scooter": "ಸ್ಕೂಟರ್‌ಗಳು",
    "filter.electric": "ಎಲೆಕ್ಟ್ರಿಕ್ ಇವಿ",

    // Common Card Elements
    "city.bengaluru": "ಬೆಂಗಳೂರು",
    "cat.motorcycle": "ಮೋಟರ್‌ಸೈಕಲ್",
    "cat.scooter": "ಸ್ಕೂಟರ್",
    "cat.electric": "ಎಲೆಕ್ಟ್ರಿಕ್ ದ್ವಿಚಕ್ರ ವಾಹನ",
    "card.targetPrefix": "ಗುರಿ: ",
    "card.progressLabel": "ಮಾದರಿ ಗುಂಪು ಪ್ರಗತಿ",
    "card.activeBatch": "ಸಕ್ರಿಯ ಬ್ಯಾಚ್",
    "card.benefitLabel": "ಗುರಿ ಗುಂಪು ಪ್ರಯೋಜನ (ಮಾದರಿ)",
    "card.viewDeal": "ಗುಂಪು ಆಫರ್ ನೋಡಿ",
    "card.disclaimer": "*ಗಮನಿಸಿ: ಇಲ್ಲಿ ತೋರಿಸಿರುವ ಖರೀದಿದಾರರ ಸಂಖ್ಯೆ ಮತ್ತು ಆಫರ್‌ಗಳು ಕೇವಲ ಮಾದರಿ ಉದಾಹರಣೆಗಳಾಗಿವೆ. ರಿಯಾಯಿತಿಗಳು ಮತ್ತು ಡೀಲರ್ ಕೊಡುಗೆಗಳನ್ನು ಗುಂಪಿನ ಗಾತ್ರದ ಆಧಾರದ ಮೇಲೆ ಮಾತುಕತೆ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಬ್ಯಾಚ್ ಪೂರ್ಣಗೊಂಡ ನಂತರ ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ.",

    // Specific Vehicles
    "card.hunter.brand": "ರಾಯಲ್ ಎನ್‌ಫೀಲ್ಡ್",
    "card.hunter.model": "ಹಂಟರ್ 350",
    "card.hunter.buyers": "48 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.hunter.target": "ಗುರಿ: 60",
    "card.hunter.val": "₹9,500* ವರೆಗೆ",
    "card.hunter.note": "ಉಪಕರಣಗಳ ಪ್ಯಾಕೇಜ್ ಮತ್ತು ಡೀಲರ್‌ಶಿಪ್ ಪ್ರಯೋಜನಗಳು",

    "card.apache.brand": "ಟಿವಿಎಸ್",
    "card.apache.model": "ಅಪಾಚೆ ಆರ್‌ಟಿಆರ್ 160",
    "card.apache.buyers": "36 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.apache.target": "ಗುರಿ: 50",
    "card.apache.val": "₹7,200* ವರೆಗೆ",
    "card.apache.note": "ಹೆಲ್ಮೆಟ್ ಮತ್ತು ವಿಸ್ತೃತ ವಾರಂಟಿ ಪ್ಯಾಕೇಜ್",

    "card.activa.brand": "ಹೋಂಡಾ",
    "card.activa.model": "ಆಕ್ಟಿವಾ 125",
    "card.activa.buyers": "52 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.activa.target": "ಗುರಿ: 60",
    "card.activa.val": "₹6,800* ವರೆಗೆ",
    "card.activa.note": "ರಕ್ಷಣಾ ಪರಿಕರಗಳು ಮತ್ತು ಸರ್ವಿಸ್ ಪ್ಯಾಕೇಜ್",

    "card.yamaha.brand": "ಯಮಹಾ",
    "card.yamaha.model": "ಯಮಹಾ ಆರ್‌15",
    "card.yamaha.buyers": "29 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.yamaha.target": "ಗುರಿ: 40",
    "card.yamaha.val": "₹11,000* ವರೆಗೆ",
    "card.yamaha.note": "ರೈಡಿಂಗ್ ಗೇರ್ ವೋಚರ್ ಮತ್ತು ವಿಮಾ ರಿಯಾಯಿತಿ",

    "card.ather.brand": "ಏಥರ್",
    "card.ather.model": "ಏಥರ್ ರಿಜ್ತಾ",
    "card.ather.buyers": "64 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.ather.target": "ಗುರಿ: 75",
    "card.ather.val": "₹13,500* ವರೆಗೆ",
    "card.ather.note": "ಏಥರ್ ಡ್ಯುಯೊ ಫಾಸ್ಟ್ ಚಾರ್ಜರ್ ಮತ್ತು ಪ್ರೊ ಪ್ಯಾಕ್",

    "card.access.brand": "ಸುಜುಕಿ",
    "card.access.model": "ಸುಜುಕಿ ಆಕ್ಸೆಸ್ 125",
    "card.access.buyers": "41 ಆಸಕ್ತ ಖರೀದಿದಾರರು",
    "card.access.target": "ಗುರಿ: 50",
    "card.access.val": "₹6,500* ವರೆಗೆ",
    "card.access.note": "ಕ್ರೋಮ್ ಪರಿಕರಗಳು ಮತ್ತು ರಸ್ತೆಬದಿಯ ನೆರವು ಪ್ಯಾಕೇಜ್",

    // How JODO Works
    "how.title": "ಜೊಡೋ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?",
    "how.subtitle": "ಉತ್ತಮ ದ್ವಿಚಕ್ರ ವಾಹನ ಆಫರ್‌ಗಳನ್ನು ಪಡೆಯಲು ಖರೀದಿದಾರರನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ಸರಳ ಮತ್ತು ಪಾರದರ್ಶಕ ಪ್ರಕ್ರಿಯೆ.",
    "how.step1Title": "ಹಂತ 1: ನಿಮ್ಮ ವಾಹನ ಆಯ್ಕೆಮಾಡಿ",
    "how.step1Desc": "ನಿಮಗೆ ಬೇಕಾದ ಬೈಕ್ ಅಥವಾ ಸ್ಕೂಟರ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    "how.step2Title": "ಹಂತ 2: ಗುಂಪನ್ನು ಸೇರಿ",
    "how.step2Desc": "ಅದೇ ವಾಹನದ ಮೇಲೆ ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಇತರ ಜನರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
    "how.step3Title": "ಹಂತ 3: ಜೊಡೋ ಮಾತುಕತೆ ನಡೆಸುತ್ತದೆ",
    "how.step3Desc": "ಉತ್ತಮ ಗುಂಪು ಆಫರ್‌ಗಳಿಗಾಗಿ ನಾವು ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ ಮಾತುಕತೆ ನಡೆಸುತ್ತೇವೆ.",
    "how.step4Title": "ಹಂತ 4: ನಿಮ್ಮ ಡೀಲ್ ಪಡೆಯಿರಿ",
    "how.step4Desc": "ಆಫರ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಡೀಲರ್‌ಶಿಪ್‌ನಿಂದ ನೇರವಾಗಿ ಖರೀದಿಸಿ.",

    // Why Choose JODO
    "why.title": "ಜೊಡೋವನ್ನು ಏಕೆ ಆರಿಸಬೇಕು?",
    "why.subtitle": "ಭಾರತದಲ್ಲಿ ನಿಮ್ಮ ದ್ವಿಚಕ್ರ ವಾಹನವನ್ನು ಖರೀದಿಸಲು ಒಂದು ಚುರುಕಾದ, ಸಮುದಾಯ ಆಧಾರಿತ ಮಾರ್ಗ.",
    "why.card1Title": "ಉತ್ತಮ ಗುಂಪು ಡೀಲ್‌ಗಳು",
    "why.card1Desc": "ಹೆಚ್ಚಿನ ಖರೀದಿದಾರರು ಒಟ್ಟಾದಾಗ ಬಲವಾದ ಚೌಕಾಶಿ ಶಕ್ತಿ ಸೃಷ್ಟಿಯಾಗುತ್ತದೆ.",
    "why.card2Title": "ಸಮಯ ಉಳಿಸಿ",
    "why.card2Desc": "ನಾವು ವಿವಿಧ ಡೀಲರ್‌ಶಿಪ್ ಕೊಡುಗೆಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ಒದಗಿಸುತ್ತೇವೆ.",
    "why.card3Title": "ವಿಶ್ವಾಸಾರ್ಹ ಡೀಲರ್‌ಶಿಪ್‌ಗಳು",
    "why.card3Desc": "ಕೇವಲ ಪರಿಶೀಲಿಸಿದ ಮತ್ತು ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ಗಳೊಂದಿಗೆ ಮಾತ್ರ ವ್ಯವಹರಿಸಿ.",
    "why.card4Title": "ಉಚಿತ ನೋಂದಣಿ",
    "why.card4Desc": "ನೋಂದಣಿ ಸಂಪೂರ್ಣ ಉಚಿತ. ಐಚ್ಛಿಕ ₹99 ಸಹಾಯ ಸೇವೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಆಯ್ಕೆ ಮಾಡಬಹುದು, ಅದರ ಪ್ರಯೋಜನಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಲಾಗಿದೆ.",

    // Optional ₹99 Card
    "assist.badge": "ಐಚ್ಛಿಕ ಸೇವೆ • ಕೇವಲ ₹99",
    "assist.title": "ಐಚ್ಛಿಕ ₹99 ನೆರವು ಸೇವೆ",
    "assist.desc": "ತಮ್ಮ ಖರೀದಿಯ ಸಮಯದಲ್ಲಿ ವಿಶೇಷ ಬೆಂಬಲವನ್ನು ಬಯಸುವ ಖರೀದಿದಾರರಿಗಾಗಿ, ನಮ್ಮ ಐಚ್ಛಿಕ ₹99 ನೆರವು ಸೇವೆಯು ಟೆಸ್ಟ್ ರೈಡ್‌ನಿಂದ ವಿತರಣೆಯವರೆಗೆ ವೈಯಕ್ತಿಕ ಸಮನ್ವಯತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    "assist.notePrefix": "ಗಮನಿಸಿ:",
    "assist.note": "ಎಲ್ಲಾ ಜೊಡೋ ಗುಂಪುಗಳಲ್ಲಿ ನೋಂದಣಿ ಮತ್ತು ಭಾಗವಹಿಸುವಿಕೆ 100% ಉಚಿತವಾಗಿದೆ. ಈ ಸಹಾಯ ಸೇವೆಯು ಸಂಪೂರ್ಣವಾಗಿ ಐಚ್ಛಿಕವಾಗಿರುತ್ತದೆ.",
    "assist.feat1": "ಮೀಸಲಾದ ವಾಟ್ಸಾಪ್ ಬೆಂಬಲ ತಜ್ಞರು",
    "assist.feat2": "ಮನೆಬಾಗಿಲಿಗೆ ಟೆಸ್ಟ್ ರೈಡ್ ಸಮನ್ವಯ",
    "assist.feat3": "ದಾಖಲೆಗಳು ಮತ್ತು ಕಾಗದಪತ್ರಗಳ ಪೂರ್ವ ಪರಿಶೀಲನೆ",
    "assist.feat4": "ಸಕ್ರಿಯ ಮಾತುಕತೆ ಬ್ಯಾಚ್‌ನಲ್ಲಿ ಆದ್ಯತೆಯ ಸ್ಲಾಟ್",

    // Call to Action
    "cta.title1": "ನಿಮ್ಮ ಕನಸಿನ ಸವಾರಿ",
    "cta.title2": "ಒಟ್ಟಾಗಿದ್ದಾಗ ಇನ್ನೂ ಉತ್ತಮ.",
    "cta.desc": "ಇಂದೇ ಜೊಡೋ ಸೇರಿ ಮತ್ತು ದ್ವಿಚಕ್ರ ವಾಹನಗಳನ್ನು ಖರೀದಿಸುವ ಹೊಸ ಬುದ್ಧಿವಂತ ಮಾರ್ಗದಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಿ.",
    "cta.btn": "ಗುಂಪನ್ನು ಸೇರಿ",

    // Footer
    "footer.navTitle": "ನ್ಯಾವಿಗೇಷನ್",
    "footer.about": "ಜೊಡೋ ಬಗ್ಗೆ",
    "footer.how": "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    "footer.explore": "ವಾಹನಗಳನ್ನು ನೋಡಿ",
    "footer.contact": "ಸಂಪರ್ಕಿಸಿ",
    "footer.legalTitle": "ಕಾನೂನು ಮಾಹಿತಿ",
    "footer.privacy": "ಗೌಪ್ಯತಾ ನೀತಿ",
    "footer.terms": "ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು",
    "footer.disclaimer": "ಜೊಡೋ ಒಂದು ಗುಂಪು-ಖರೀದಿ ಸುಗಮಗೊಳಿಸುವ ವೇದಿಕೆಯಾಗಿದೆ. ವಾಹನ ಖರೀದಿ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನೇರವಾಗಿ ಅಧಿಕೃತ ಡೀಲರ್‌ಶಿಪ್‌ಗಳಲ್ಲಿ ಪೂರ್ಣಗೊಳಿಸಲಾಗುತ್ತದೆ.",
    "footer.rights": "© 2026 ಜೊಡೋ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

    // Interactive Modal
    "modal.campaignLabel": "ಗುಂಪು ಖರೀದಿ ಪ್ರಚಾರ",
    "modal.activePool": "ಸಕ್ರಿಯ ಗುಂಪು ಪೂಲ್:",
    "modal.batch": "ಬೆಂಗಳೂರು ಬ್ಯಾಚ್",
    "modal.nameLabel": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು",
    "modal.namePlaceholder": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
    "modal.phoneLabel": "ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
    "modal.phonePlaceholder": "+91 98765 43210",
    "modal.variantLabel": "ಆದ್ಯತೆಯ ಬಣ್ಣ / ರೂಪಾಂತರ",
    "modal.variantDefault": "ಸ್ಟ್ಯಾಂಡರ್ಡ್ ರೂಪಾಂತರ",
    "modal.addonTitle": "ಆದ್ಯತೆಯ ನೆರವು ಸೇವೆಯನ್ನು ಸೇರಿಸಿ (ಐಚ್ಛಿಕ ₹99)",
    "modal.addonDesc": "ಮೀಸಲಾದ ಕಾರ್ಯನಿರ್ವಾಹಕರು ನಿಮ್ಮ ಟೆಸ್ಟ್ ರೈಡ್ ಮತ್ತು ಡೀಲರ್‌ಶಿಪ್ ಭೇಟಿಯನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ. (ಸಾಮಾನ್ಯ ನೋಂದಣಿ 100% ಉಚಿತ).",
    "modal.submit": "ಗುಂಪು ಸೇರಿ",
    "modal.toastSuccess": "🎉 ಧನ್ಯವಾದಗಳು, {name}! {vehicle} ಗಾಗಿ ನಿಮ್ಮ ಆಸಕ್ತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ{service}.",
    "modal.toastService": " (ಐಚ್ಛಿಕ ₹99 ಸಹಾಯ ಸೇವೆಯೊಂದಿಗೆ)"
  }
};
