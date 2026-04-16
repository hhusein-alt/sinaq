# LogoTicker Specification

## Overview
- **Target file:** `src/components/LogoTicker.tsx`
- **Interaction model:** time-driven (auto-scrolling animation)

## DOM Structure
div (pb-12)
  ├── p heading "Featuring job simulations and jobs from leading companies"
  └── div (overflow-hidden)
      └── div (flex, gap, animate-ticker)
          ├── img bloomberg.svg
          ├── img clifford-chance-black.svg
          ├── img cbre.svg
          ├── img pfizer.svg
          ├── img british-airways.svg
          ├── img lloyds.svg
          ├── img morrison-foerster.svg
          ├── img citi.svg
          ├── img whitecase.svg
          ├── img skyscanner.svg
          ├── img walmart.svg
          ├── img goldman-sachs.svg
          └── (duplicate set for seamless loop)

## Computed Styles

### Heading
- fontSize: 16px
- fontWeight: 500
- color: #3F3F3F
- textAlign: center
- marginBottom: 16px

### Logo images
- height: ~40-50px
- objectFit: contain
- filter: grayscale(0) — logos appear in original colors (mostly monochrome SVGs)

### Animation container
- overflow: hidden
- Logos flex in single row
- Animation: translateX(0) → translateX(-50%), 30s linear infinite
- Pause on hover

## States & Behaviors
### Auto-scroll
- **Trigger:** page load (CSS animation)
- **Animation:** CSS keyframe, translateX(0) to translateX(-50%)
- **Duration:** ~30s
- **Timing:** linear, infinite
- **Hover:** animation-play-state: paused

## Assets
All in `public/images/logos/`:
- bloomberg.svg, clifford-chance-black.svg, cbre.svg, pfizer.svg
- british-airways.svg, lloyds.svg, morrison-foerster.svg, citi.svg
- whitecase.svg, skyscanner.svg, walmart.svg, goldman-sachs.svg

## Text Content
- "Featuring job simulations and jobs from leading companies"

## Responsive Behavior
- Same on all breakpoints, logos just scroll horizontally
- Logo height may reduce slightly on mobile
