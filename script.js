/* ==========================================
   SWASTIIK GROUP — REAL ESTATE
   script.js
   All data below is sourced directly from the
   official project brochures. No placeholder /
   stock content is used.
   ========================================== */

"use strict";

// ==========================================
// PROJECT DATABASE — real data from brochures
// ==========================================
const projects = [
  {
    id: "vimal",
    name: "Vimal Apartments",
    year: 2013,
    yearLabel: "2013 · Redevelopment",
    status: "completed",
    statusLabel: "Completed",
    config: "3 BHK",
    units: "24 Units",
    type: "Residential Redevelopment",
    developer: "Swastik Developers",
    architect: "Dwarkesh Soni",
    structural: "Achal Parikh",
    address: "Vimal Apartment, Sanjivani Hospital Road, Jain Nagar, Suvidha, Ahmedabad.",
    phone: "079-2664 1165",
    email: "swastikdevelopers99@gmail.com",
    description: "Swastiik Group's earliest signature project — a ground-up redevelopment delivering twenty-four 3 BHK residences on Sanjivani Hospital Road, Jain Nagar. The scheme set the template later used across the group's residential work: earthquake-resistant RCC framing, vitrified flooring, granite kitchen platforms and separate two-car parking for every flat.",
    amenities: [
      "Earthquake resistant R.C.C. frame structure",
      "Automatic V3F elevator, 8-person capacity (Omega/Trio)",
      "2 dedicated car parking spaces per flat",
      "CCTV installation in all common areas",
      "Video door phone in all flats",
      "Intercom facility",
      "Italian marble / vitrified tile entrance foyer",
      "Open-air theatre & attractive landscaping on terrace",
      "Decorative compound wall & building façade lighting"
    ],
    images: [
      "images/projects/vimal_hero.jpg"
    ]
  },
  {
    id: "scarlet-business-hub",
    name: "Scarlet Business Hub",
    year: 2015,
    yearLabel: "2015 · Commercial",
    status: "completed",
    statusLabel: "Completed",
    config: "Retail & Office Spaces",
    units: "75 Offices + 24 Showrooms",
    type: "Commercial",
    developer: "Swastik",
    architect: "Ar. Jinesh Dhruv, 99 Studio",
    structural: "Achal Parikh",
    electrical: "Saurin Patel",
    legal: "Nimish Desai",
    address: "Scarlet Business Hub, Opp. Ankur School, Fatehpura, Nr. Mahalaxmi Cross Road, Paldi, Ahmedabad 380 007.",
    phone: "079-2664 1165",
    email: "swastikdevelopers99@gmail.com",
    description: "An address built to define your business — Scarlet Business Hub is Swastiik Group's flagship commercial development on Mahalaxmi Cross Road, Paldi. A curved glass-and-stone façade wraps ground-floor showrooms and multiple upper floors of office space, anchored by a double-height foyer, dedicated lifts and a well-planned retail court on the ground floor.",
    amenities: [
      "Ground floor retail with shop sizes from 413 to 1,645 sq.ft.",
      "Elegant curved façade on a prominent T.P.S. road corner",
      "Double-height entrance foyer",
      "Dedicated passenger lifts",
      "Ample customer & visitor parking",
      "CCTV surveillance across common areas",
      "Wide internal passages for retail frontage",
      "Prime high-street location opposite Ankur School"
    ],
    images: [
      "images/projects/sbh_hero_day.jpg",
      "images/projects/sbh_hero_night.jpg"
    ]
  },
  {
    id: "scarlet-repose",
    name: "Scarlet Repose",
    year: 2018,
    yearLabel: "2018",
    status: "completed",
    statusLabel: "Completed",
    config: "3 BHK",
    units: "20 Units",
    type: "Residential",
    developer: "Swastik Homes",
    architect: "Aakruti Infra",
    structural: "Achal Parikh",
    legal: "V. D. Desai & Co.",
    address: "Scarlet Repose, 4, Prabhat Society, B/h. Sumeru Tower, Opp. Karnavati Pagarkha Bazar, Suvidha Cross Road, Paldi, Ahmedabad - 380 007.",
    phone: "99090 20205 / 98250 34030",
    email: "swastikbusinesshub@gmail.com",
    description: "\"Fine living concept, modern architecture\" — Scarlet Repose brings a blissful, naturally lit and well-ventilated living environment to Suvidha Cross Road, Paldi. Twenty thoughtfully planned 3 BHK homes sit above a stone-and-brown façade, with every unit finished in premium vitrified tiling and veneer doors.",
    amenities: [
      "Quality controlled RCC frame structure",
      "Premium vitrified tiles throughout",
      "Veneer finish main door with brass/S.S. fittings",
      "Granite kitchen platform with S.S. sink & designer tiles",
      "3-phase concealed copper wiring with modular fittings",
      "24x7 CCTV surveillance in common areas",
      "Attractive gate & elegant entrance foyer",
      "Automatic lift",
      "Allotted ground-floor parking",
      "Society private bore well · 24-hr water supply · 24-hr security"
    ],
    images: [
      "images/projects/repose_hero.jpg"
    ]
  },
  {
    id: "hiren",
    name: "Hiren Apartments",
    year: 2020,
    yearLabel: "2020",
    status: "completed",
    statusLabel: "Completed",
    config: "3 BHK",
    units: "22 Units",
    type: "Residential",
    developer: "Swastik Homes Hiren",
    architect: "Aakruti Infra",
    structural: "Achal Parikh",
    address: "Hiren Apartment, Opp. LIC Office, Nr. Muthoot Finance, Jivraj Mehta Hospital to Vasna Bus Stand Road, Vasna, Ahmedabad.",
    phone: "99090 20205 / 98250 34030",
    email: "swastikbusinesshub@gmail.com",
    description: "Exclusive 3 BHK residences on the Jivraj Mehta Hospital to Vasna Bus Stand Road — Hiren Apartments pairs a warm brick-and-stone elevation with practical, spacious floor plans across a basement and multiple typical floors, each with three large bedrooms, dedicated toilets and generous living/dining areas.",
    amenities: [
      "Earthquake-resistant RCC frame structure",
      "Basement parking with dedicated car bays",
      "Spacious drawing & dining rooms on every floor",
      "Three bedrooms with attached toilets in every flat",
      "Modular kitchen / dining points",
      "CCTV & video door phone",
      "Automatic lift",
      "Located minutes from LIC Office & Muthoot Finance, Vasna"
    ],
    images: [
      "images/projects/hiren_hero.jpg"
    ]
  },
  {
    id: "julee",
    name: "Julee Flat",
    year: 2022,
    yearLabel: "2022",
    status: "completed",
    statusLabel: "Completed",
    config: "3 BHK",
    units: "15 Units",
    type: "Residential",
    developer: "Swastik Homes Julee",
    architect: "AAPL",
    structural: "Achal Parikh",
    address: "Julee Apartment, Opp. Jain Supper Bazar, Shantivan, Paldi, Ahmedabad.",
    phone: "99090 20205 / 98250 34030",
    email: "swastikbusinesshub@gmail.com",
    description: "Fifteen exclusive 3 BHK apartments in the heart of Shantivan, Paldi, opposite Jain Supper Bazar. Julee Flat's brick-clad façade and timber-look balconies wrap a compact, efficient plan with premium vitrified flooring and a 500 ft. bore well ensuring round-the-clock water supply.",
    amenities: [
      "Quality controlled RCC frame structure",
      "Premium vitrified tiles in the entire apartment",
      "Veneer/Brass-S.S. fitted main door, powder-coated aluminium windows",
      "Granite kitchen platform with S.S. sink & designer tiles",
      "500 ft. bore well for 24-hr water supply, rechargeable bore well",
      "3-phase concealed copper wiring with ELCB/MCB",
      "China mosaic / ceramic terrace waterproofing",
      "Central location opposite Jain Supper Bazar, Shantivan"
    ],
    images: [
      "images/projects/julee_hero.jpg"
    ]
  },
  {
    id: "amarjyot",
    name: "Amarjyot Apartment",
    year: 2023,
    yearLabel: "2023",
    status: "completed",
    statusLabel: "Completed",
    config: "2 & 3 BHK",
    units: "15 Units",
    type: "Residential",
    developer: "Arihant Realty",
    architect: "Profiles Architects",
    structural: "Aanand Dave",
    address: "Amarjyot Appartment, Nr. Vakil House, Suvidha, Paldi, Ahmedabad - 380 007.",
    phone: "63526 22727",
    email: "arihantrealty2022@gmail.com",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA11874/300523",
    description: "A dusk-to-dawn presence on Vakil House Road, Suvidha — Amarjyot Apartment offers 2 & 3 BHK homes with CCTV surveillance, sufficient parking, decorative entrance foyer and a solar panel for common-area use, all wrapped in a warm taupe-toned modern elevation.",
    amenities: [
      "Quality controlled RCC frame structure",
      "Premium vitrified tiles in entire flat",
      "Granite kitchen platform with S.S. sink & designer tiles",
      "24x7 CCTV surveillance from common areas",
      "Decorative foyer & senior-citizen sitting area",
      "Sufficient & internal paved parking",
      "Fire safety provisions",
      "Solar panel for common use",
      "Good-quality lift"
    ],
    images: [
      "images/projects/amarjyot_hero.jpg",
      "images/projects/amarjyot_dusk.jpg"
    ]
  },
  {
    id: "kesariaji",
    name: "Kesariaji Flats",
    year: 2024,
    yearLabel: "2024",
    status: "completed",
    statusLabel: "Completed",
    config: "3 BHK",
    units: "21 Units",
    type: "Residential",
    developer: "Arihant Associates",
    architect: "Dhyan Appa",
    structural: "Aanand Dave",
    address: "Kesariyaji Flats, Opp. Vimal Apartment, Jain Nagar, Nr. Hirabaug Crossing, Suvidha, Paldi, Ahmedabad - 380 007.",
    phone: "63526 22727",
    email: "arihant21.hp@gmail.com",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA11615/180423",
    description: "Twenty-one exclusive 3 BHK residences rising directly opposite Vimal Apartment near Hirabaug Crossing — bringing the group's story full circle. A grey-and-amber tower with generous glazed balconies overlooks Suvidha, Paldi, finished with premium vitrified flooring and glazed bathroom tiling to lintel level.",
    amenities: [
      "Quality controlled RCC frame structure",
      "Premium vitrified tiles in entire apartment",
      "Glazed wall tiles up to lintel level in bathrooms",
      "Granite kitchen platform with S.S. sink & designer tiles",
      "3-phase concealed copper wiring with ELCB/MCB",
      "24x7 CCTV surveillance from common areas",
      "China mosaic / ceramic terrace waterproofing",
      "Separate bore well for 24-hr water supply",
      "Located opposite Vimal Apartment, near Hirabaug Crossing"
    ],
    images: [
      "images/projects/kesariaji_hero.jpg",
      "images/projects/kesariaji_aerial.jpg"
    ]
  },
  {
    id: "scarlet-homes",
    name: "Scarlet Homes",
    year: 2024,
    yearLabel: "2024 · Ongoing",
    status: "ongoing",
    statusLabel: "Currently Under Construction",
    config: "3 BHK Elegant",
    units: "28 Units",
    type: "Residential",
    developer: "Swastiik Realty",
    architect: "Divyesh Desai & Associates",
    structural: "Achal Parikh",
    legal: "V. D. Desai & Co.",
    address: "Scarlet Homes, 2, Rajnagar Society, B/s Jigar Flate, Rajnagar Char Rasta, B/h NID, Paldi, Ahmedabad.",
    phone: "98250 34030 / 97276 93151 / 81605 56823",
    email: "swastiikrealty@gmail.com",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA13053/290224/300625",
    description: "Swastiik Group's current flagship residence — 28 elegant 3 BHK homes rising behind NID, at Rajnagar Char Rasta, Paldi. Scarlet Homes pairs a brick-and-glass elevation with a landscaped rooftop terrace featuring a pergola deck, open lawn and an open-air theatre screen, above two levels of dedicated parking for 28 cars.",
    amenities: [
      "13 ft. height on the ground floor",
      "1 allotted car parking space per unit + basement parking (28 cars total)",
      "Landscaped rooftop terrace with pergola seating & open-air theatre",
      "Prime, peaceful, oxygen-rich location near Jamalpur, Paldi, Kalupur & the riverfront",
      "Good frontage to the main road",
      "Earthquake resistant RCC frame structure",
      "Premium vitrified flooring throughout",
      "Automatic lift & CCTV-monitored common areas",
      "RERA Registered: PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA13053/290224/300625"
    ],
    images: [
      "images/projects/shomes_hero.jpg",
      "images/projects/shomes_terrace.jpg",
      "images/projects/shomes_small.jpg"
    ]
  }
];

// Sorted chronologically, oldest first (2013 → 2024 current)
const projectsChrono = [...projects].sort((a, b) => {
  if (a.year !== b.year) return a.year - b.year;
  // Within the same year, ongoing project goes last (it's the "current" one)
  if (a.status === "ongoing") return 1;
  if (b.status === "ongoing") return -1;
  return 0;
});

const ongoingProject = projects.find((p) => p.status === "ongoing");
const completedProjects = projectsChrono.filter((p) => p.status !== "ongoing");

// Real aggregate stats derived from the data above
const totalCompletedUnits = completedProjects.reduce((sum, p) => {
  const n = parseInt(p.units, 10);
  return sum + (isNaN(n) ? 0 : n);
}, 0);

// ==========================================
// SPLASH SCREEN
// ==========================================
function hideSplash() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  splash.classList.add("splash-hide");
  window.setTimeout(() => {
    splash.style.display = "none";
    document.body.classList.remove("no-scroll");
  }, 700);
}

function initSplash() {
  document.body.classList.add("no-scroll");
  const minDisplay = new Promise((resolve) => setTimeout(resolve, 1400));
  const loaded = new Promise((resolve) => {
    if (document.readyState === "complete") resolve();
    else window.addEventListener("load", () => resolve());
  });
  Promise.all([minDisplay, loaded]).then(hideSplash);
  // Hard fallback in case something hangs
  window.setTimeout(hideSplash, 4500);
}

// ==========================================
// NAVBAR
// ==========================================
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function initNav() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const updateActiveNav = () => {
    let current = "";
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.section === current);
    });
  };
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (target - start) * eased);
    el.textContent = value.toLocaleString("en-IN");
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll(".stat-number[data-count]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((el) => observer.observe(el));
}

// ==========================================
// GOOGLE MAP EMBED (no API key required)
// ==========================================
function mapEmbedUrl(address) {
  return "https://www.google.com/maps?q=" + encodeURIComponent(address) + "&output=embed";
}

// ==========================================
// PROJECT CARD BUILDERS
// ==========================================
function statusBadgeClass(status) {
  return status === "ongoing" ? "badge-ongoing" : "badge-completed";
}

function buildOngoingSpotlight() {
  const wrap = document.getElementById("ongoingSpotlight");
  if (!wrap || !ongoingProject) return;
  const p = ongoingProject;
  wrap.innerHTML = `
    <div class="spotlight-media">
      <img src="${p.images[0]}" alt="${p.name} elevation">
      <span class="spotlight-tag">${p.statusLabel}</span>
    </div>
    <div class="spotlight-content">
      <p class="section-eyebrow">Currently Working On</p>
      <h2 class="section-title">${p.name}<br><em>${p.config}</em></h2>
      <p class="spotlight-desc">${p.description}</p>
      <div class="spotlight-facts">
        <div class="spotlight-fact"><span>${p.units}</span><p>Units</p></div>
        <div class="spotlight-fact"><span>${p.yearLabel.split(" ")[0]}</span><p>Launch Year</p></div>
        <div class="spotlight-fact"><span>${p.type}</span><p>Type</p></div>
      </div>
      <p class="spotlight-address"><i data-lucide="map-pin"></i> ${p.address}</p>
      <button class="btn btn-primary" data-open-project="${p.id}">View Full Details</button>
    </div>
  `;
}

function buildProjectCards() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = completedProjects
    .map(
      (p) => `
    <article class="project-card reveal" data-open-project="${p.id}">
      <div class="project-card-media">
        <img src="${p.images[0]}" alt="${p.name} elevation" loading="lazy">
        <span class="project-year-tag">${p.yearLabel}</span>
      </div>
      <div class="project-card-body">
        <span class="badge ${statusBadgeClass(p.status)}">${p.statusLabel}</span>
        <h3>${p.name}</h3>
        <p class="project-card-meta">${p.config} &middot; ${p.units}</p>
        <p class="project-card-loc"><i data-lucide="map-pin"></i> ${p.address.split(",").slice(-3).join(",").trim()}</p>
        <span class="project-card-link">View Details <i data-lucide="arrow-right"></i></span>
      </div>
    </article>
  `
    )
    .join("");
}

function buildFooterProjects() {
  const list = document.getElementById("footerProjectList");
  if (!list) return;
  list.innerHTML = projectsChrono
    .map((p) => `<li><a href="#" data-open-project="${p.id}">${p.name} <span>(${p.year})</span></a></li>`)
    .join("");
}

// ==========================================
// PROJECT MODAL
// ==========================================
const modalBackdrop = document.getElementById("modalBackdrop");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function buildGalleryHtml(p) {
  if (p.images.length <= 1) {
    return `<div class="modal-hero"><img src="${p.images[0]}" alt="${p.name}"></div>`;
  }
  return `
    <div class="modal-gallery">
      <div class="modal-gallery-main">
        <img id="modalGalleryMain" src="${p.images[0]}" alt="${p.name}">
      </div>
      <div class="modal-gallery-thumbs">
        ${p.images
          .map(
            (img, i) =>
              `<button class="modal-thumb ${i === 0 ? "active" : ""}" data-img="${img}"><img src="${img}" alt="${p.name} view ${i + 1}"></button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function specRow(label, value) {
  if (!value) return "";
  return `<div class="spec-row"><span class="spec-label">${label}</span><span class="spec-value">${value}</span></div>`;
}

function openModal(id) {
  const p = projects.find((proj) => proj.id === id);
  if (!p) return;

  modalContent.innerHTML = `
    ${buildGalleryHtml(p)}
    <div class="modal-body">
      <div class="modal-title-row">
        <span class="badge ${statusBadgeClass(p.status)}">${p.statusLabel}</span>
        <span class="modal-year">${p.yearLabel}</span>
      </div>
      <h2>${p.name}</h2>
      <p class="modal-config">${p.config} &middot; ${p.units} &middot; ${p.type}</p>
      <p class="modal-desc">${p.description}</p>

      <h4 class="modal-subhead">Project Specifications</h4>
      <div class="spec-grid">
        ${specRow("Developer", p.developer)}
        ${specRow("Architect", p.architect)}
        ${specRow("Structural Engineer", p.structural)}
        ${specRow("Electrical Consultant", p.electrical)}
        ${specRow("Legal Advisor", p.legal)}
        ${specRow("RERA No.", p.rera)}
      </div>

      <h4 class="modal-subhead">Amenities & Features</h4>
      <ul class="modal-amenities">
        ${p.amenities.map((a) => `<li><i data-lucide="check-circle"></i> ${a}</li>`).join("")}
      </ul>

      <h4 class="modal-subhead">Site Address</h4>
      <p class="modal-address"><i data-lucide="map-pin"></i> ${p.address}</p>

      <h4 class="modal-subhead">Location on Map</h4>
      <div class="modal-map">
        <iframe
          src="${mapEmbedUrl(p.address)}"
          width="100%" height="100%" style="border:0;"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.classList.add("no-scroll");
  initIcons();

  modalContent.querySelectorAll(".modal-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      modalContent.querySelectorAll(".modal-thumb").forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      document.getElementById("modalGalleryMain").src = thumb.dataset.img;
    });
  });
}

function closeModal() {
  modalBackdrop.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

function initModalEvents() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-project]");
    if (trigger) {
      e.preventDefault();
      openModal(trigger.dataset.openProject);
    }
  });
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ==========================================
// GALLERY — built only from real project images
// ==========================================
function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  const items = [];
  projectsChrono.forEach((p) => {
    p.images.forEach((img) => {
      items.push({ img, name: p.name, id: p.id, year: p.year });
    });
  });
  grid.innerHTML = items
    .map(
      (it) => `
    <div class="gallery-item reveal" data-open-project="${it.id}">
      <img src="${it.img}" alt="${it.name}, ${it.year}" loading="lazy">
      <div class="gallery-caption">${it.name} &middot; ${it.year}</div>
    </div>
  `
    )
    .join("");
}

// ==========================================
// SCROLL REVEAL
// ==========================================
function addRevealClasses() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
  });
}

// ==========================================
// ICON SET — small inline SVGs (no external CDN dependency)
// ==========================================
const ICONS = {
  "map-pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  "arrow-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  "check-circle": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>',
  "shield-check": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2v-4l-2-5H5L3 13v4h2"/><circle cx="7.5" cy="17.5" r="1.5"/><circle cx="16.5" cy="17.5" r="1.5"/><path d="M5 17h10"/></svg>',
  video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 5 5-12 12-5-5Z"/><path d="m14.5 6.5 1.5 1.5"/><path d="m11.5 9.5 1.5 1.5"/><path d="m8.5 12.5 1.5 1.5"/><path d="m5.5 15.5 1.5 1.5"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
};

function initIcons() {
  document.querySelectorAll("[data-lucide]").forEach((el) => {
    const name = el.getAttribute("data-lucide");
    if (ICONS[name]) {
      el.innerHTML = ICONS[name];
      el.classList.add("icon-svg");
    }
  });
}

// ==========================================
// INIT
// ==========================================
function init() {
  initSplash();
  initNav();
  buildOngoingSpotlight();
  buildProjectCards();
  buildGallery();
  buildFooterProjects();
  initModalEvents();
  initCounters();
  initIcons();
  addRevealClasses();

  const totalUnitsEl = document.getElementById("statTotalUnits");
  if (totalUnitsEl) totalUnitsEl.dataset.count = totalCompletedUnits;
  const totalProjectsEl = document.getElementById("statTotalProjects");
  if (totalProjectsEl) totalProjectsEl.dataset.count = projects.length;
}

document.addEventListener("DOMContentLoaded", init);
