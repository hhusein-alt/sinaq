# MissionSection Specification

## Overview
- **Target file:** `src/components/MissionSection.tsx`
- **Interaction model:** static

## DOM Structure
div (light blue bg, padding)
  └── container (flex, items-center)
      ├── div (text content - left)
      │   ├── h2 "We want to build a world where candidates are considered equally on their merits."
      │   └── p description text
      └── div (illustration - right)
          └── Forage globe/logo illustration (SVG or image)

## Computed Styles

### Container
- backgroundColor: light blue (~#E8F0FB / rgb(232, 240, 251))
- padding: 64px
- borderRadius: possibly rounded

### H2
- fontSize: 36-42px
- fontWeight: 600
- color: #114178
- lineHeight: 1.2

### Description
- fontSize: 18-20px
- fontWeight: 400
- color: #3F3F3F
- lineHeight: 1.5

## Text Content
- H2: "We want to build a world where candidates are considered equally on their merits."
- P: "We're here to ensure that your skills, grit, and drive are recognized by the world's best companies — regardless of your GPA, school, or connections."

## Assets
- Globe/logo illustration (abstract geometric shapes in blue/green)

## Responsive Behavior
- **Desktop:** 2-column (text left, illustration right)
- **Mobile:** Stacked, text on top, illustration below or hidden
