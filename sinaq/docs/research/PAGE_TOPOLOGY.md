# Forage Homepage - Page Topology

## Global
- **Font:** DM Sans (400, 500, 600, 700)
- **No smooth scroll library** (no Lenis/Locomotive)
- **Nav is NOT sticky** — transparent bg, relative positioning, h-16

## Sections (top to bottom)

### 1. Navbar (inside body, above main)
- Relative positioned, transparent bg, z-50
- Logo SVG (viewBox 0 0 777 233, height 2rem)
- Links: Job Simulations, Jobs, Blog (dropdown), For Enterprise, For Educators
- Buttons: Sign Up (blue bg #1C6AC3), Sign In (white bg, blue border)
- **Interaction:** Blog has dropdown (chevron icon). Static otherwise.

### 2. Hero Section (main > div[0])
- **Background:** linear-gradient(#DBEDFF → #FFFFFF)
- H1: "Build confidence. Get the job." — 72px, 600 weight, #114178
- Subtitle: 22px, 500 weight, #144C8B
- CTA: "Get Started →" — 26px, 500 weight, #144C8B bg, white text, rounded-md, padding 16px 32px
- **Interaction:** Static

### 3. Logo Ticker (main > div[1])
- "Featuring job simulations and jobs from leading companies" — heading
- 26 company logos in horizontal auto-scrolling ticker
- **Interaction:** Continuous horizontal scroll animation, pauses on hover

### 4. Explore Header (main > div[2])
- "Explore our free job simulations" heading
- Category pill buttons (horizontal scroll)
- **Interaction:** Click-driven pill selection

### 5. Job Simulation Cards (main > div[3])
- Horizontal scrolling card carousel
- Cards: image, company logo, title, category, difficulty, duration
- 5 visible, scrollable
- **Interaction:** Horizontal scroll/swipe, card hover

### 6. How Forage Works (main > div[4])
- H2: "Forage is the bridge between education and career success"
- Description text
- 3 steps: Register, Enroll, Compare
- CTA: "How Forage Works →" — navy rounded pill button
- **Interaction:** Static

### 7. Stats Section - Navy (main > div[5])
- bg-navy-500 (#144C8B), white text
- Stats: "3.3x more likely", "Over 300 job simulations", "5M+ students"
- CTA: "Find a Job Simulation →"
- **Interaction:** Static

### 8. Employers Section (main > div[6])
- "Employers who are going beyond the resume" heading
- 8 employer cards with images and "See Programs" links
- **Interaction:** Card hover, click

### 9. Testimonials (main > div[7])
- "Too good to be true? Hear from real students."
- Student photos, quotes, names, outcomes
- Horizontal carousel of testimonial cards
- **Interaction:** Scroll/swipe carousel

### 10. Mission Section (main > div[8])
- Light blue bg (#E8F0FB-ish)
- "We want to build a world where candidates are considered equally on their merits."
- Forage logo/globe illustration
- **Interaction:** Static

### 11. Footer
- bg-gray-100 (#F7F7F7)
- Forage logo, mission tagline
- Link columns: For Students, For Enterprise, For Educators, About Us, Support
- Copyright, LinkedIn + TikTok icons
- **Interaction:** Link hover states
