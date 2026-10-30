# Gurmandeep Singh - React.js & SCSS Portfolio

Modern, high-performance personal portfolio built with **React.js (Vite)** and modular **SCSS / Sass**, customized with the **Liquid Glass Theme** and **#29a1dd** color palette.

---

## 🏗️ Architecture & Component Hierarchy

Har ek section ko independent React component me divide kiya gaya hai, jiske sath uski dedicated `.scss` style file attached hai:

```
src/
├── App.jsx                     # Root component connecting all sections
├── main.jsx                    # React 18 DOM mount point
├── styles/
│   ├── _variables.scss         # Theme colors (#29a1dd, dark slate base), mixins, breakpoints
│   ├── _globals.scss           # Global resets, typography, button styles (.btn-liquid, etc.)
│   └── main.scss               # Root SCSS bundle
└── components/
    ├── LiquidBackground/       # Floating organic liquid orbs + mouse aura follower
    │   ├── LiquidBackground.jsx
    │   └── LiquidBackground.scss
    ├── Header/                 # Sticky liquid glass navbar, scroll spy, mobile drawer
    │   ├── Header.jsx
    │   └── Header.scss
    ├── Hero/                   # Typewriter role, bio, CTAs, 3D tilt developer card
    │   ├── Hero.jsx
    │   └── Hero.scss
    ├── Metrics/                # 37+ Months, 4 Company Roles, 100% UI count-up animation
    │   ├── Metrics.jsx
    │   └── Metrics.scss
    ├── About/                  # Bio from resume, Malout location, 4 capability pillars
    │   ├── About.jsx
    │   └── About.scss
    ├── Experience/             # 4 Companies timeline + 5-point professional summary
    │   ├── Experience.jsx
    │   └── Experience.scss
    ├── Skills/                 # Interactive category filter tabs + liquid progress bars
    │   ├── Skills.jsx
    │   └── Skills.scss
    ├── Education/              # 12th (2019) & 10th (2017) PSEB credentials cards
    │   ├── Education.jsx
    │   └── Education.scss
    ├── Strengths/              # Flexibility, Communication, Adaptability
    │   ├── Strengths.jsx
    │   └── Strengths.scss
    ├── Contact/                # Phone, Email, Location, WhatsApp & interactive form
    │   ├── Contact.jsx
    │   └── Contact.scss
    ├── Footer/                 # Brand tagline, quick section links, socials, back-to-top
    │   ├── Footer.jsx
    │   └── Footer.scss
    └── Toast/                  # Floating glassmorphism copy/submit alert
        ├── Toast.jsx
        └── Toast.scss
```

---

## 🎨 Theme & Palette
- **Background**: Luminous Dark Slate / Charcoal (`#0d131f` to `#111827`) — *Not pitch black #000000*.
- **Accent Color**: `#29a1dd` (Electric Sky Cyan).
- **Liquid Glass**: Frosted cards (`backdrop-filter: blur(16px)`), specular cyan highlights, and dynamic 3D tilt effects.

---

## 🚀 Running the Project

### 1. Development Server (Hot Reload)
```bash
npm run dev
```
Ye command local dev server start karegi: `http://localhost:3000`.

### 2. Production Build
```bash
npm run build
```
Optimized static production build `dist/` directory me compile hogi.

### 3. Preview Production Build
```bash
npm run preview
```
