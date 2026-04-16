# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static (link hover states)

## DOM Structure
footer (bg-gray-100, px-6, py-8, w-full)
  └── container (max-w-7xl, mx-auto)
      ├── ForageLogo
      ├── hr divider
      ├── div (grid - mission text + link columns)
      │   ├── p "We're on a mission to get motivated students into great jobs."
      │   ├── column "For Students" (links)
      │   ├── column "For Enterprise" (links)
      │   ├── column "For Educators" (links)
      │   ├── column "About Us" (links)
      │   └── column "Support" (links)
      ├── hr divider
      └── div (copyright + social icons)
          ├── p "© 2026 Forage, Inc. All rights reserved."
          ├── LinkedIn icon
          └── TikTok icon

## Computed Styles

### Footer container
- backgroundColor: #F7F7F7 (rgb(247, 247, 247))
- padding: 32px 24px

### Column headers
- fontSize: 14px
- fontWeight: 700
- color: #0A0A0A
- marginBottom: 8px

### Column links
- fontSize: 14px
- fontWeight: 400
- color: #3F3F3F
- lineHeight: ~28px (with spacing)

### Mission text
- fontSize: 22-24px
- fontWeight: 400
- color: #144C8B
- italic style
- maxWidth: ~200px

### Copyright
- fontSize: 14px
- color: #3F3F3F

### Social icons
- width: 24px, height: 24px
- color: #3F3F3F

## Text Content
For Students: Short Courses, All Job Simulations, Software Engineering Job Sims, Consulting Job Sims, Banking & Financial Services Job Sims, Law Job Sims, Data Job Sims, Security Job Sims, Student Blog
For Enterprise: Sign In, Enterprise Resources, Request a Demo
For Educators: Sign In, Educator Resources, Register as an Educator
About Us: Editorial Guidelines, Careers, FAQs
Support: Help Center, Privacy Notice, Privacy Preferences, Do Not Sell or Share My Personal Information, Terms of Use, Responsible Disclosure Program, Sitemap
Copyright: "© 2026 Forage, Inc. All rights reserved."

## Responsive Behavior
- **Desktop:** 6 columns (mission + 5 link groups)
- **Mobile:** Stacked columns
