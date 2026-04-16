# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static

## DOM Structure
div (gradient bg, -mt-16, pt-28 md:pt-32, pb-20, relative)
  └── container (text-center)
      ├── h1 "Build confidence.\nGet the job."
      ├── p subtitle
      └── a CTA button "Get Started →"

## Computed Styles

### Container
- background: linear-gradient(to bottom, #DBEDFF 0%, #FFFFFF 100%)
- marginTop: -64px (pulls under nav)
- paddingTop: 112px (md: 128px)
- paddingBottom: 80px
- position: relative
- textAlign: center

### H1
- fontSize: 72px
- fontWeight: 600
- color: #114178 (rgb(17, 65, 120))
- lineHeight: 79.2px (1.1)
- textAlign: center
- Two lines: "Build confidence." and "Get the job."

### Subtitle (p)
- fontSize: 22px
- fontWeight: 500
- color: #144C8B (rgb(20, 76, 139))
- lineHeight: 30.8px (1.4)
- textAlign: center
- maxWidth: ~700px, centered

### CTA Button (a)
- fontSize: 26px
- fontWeight: 500
- color: #FFFFFF
- backgroundColor: #144C8B
- borderRadius: 6px
- padding: 16px 32px
- height: 65.8px
- display: inline-flex, items-center, gap

## States & Behaviors
- CTA hover: likely slight opacity or brightness change

## Text Content
- H1: "Build confidence.\nGet the job."
- Subtitle: "Explore careers and prepare for the job with hundreds of free job simulations designed by the world's top employers."
- CTA: "Get Started →"

## Responsive Behavior
- **Desktop:** 72px heading, 22px subtitle
- **Mobile:** Heading scales down (~36-40px), subtitle ~18px, CTA smaller
