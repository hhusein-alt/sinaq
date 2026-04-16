# StatsSection Specification

## Overview
- **Target file:** `src/components/StatsSection.tsx`
- **Interaction model:** static

## DOM Structure
div (bg-navy-500, full-width, px-4 md:px-10, py-10 lg:py-16)
  └── container (max-w-7xl, mx-auto)
      ├── div (stats grid - 3 columns)
      │   ├── stat: "3.3x more likely" + description
      │   ├── stat: "Over 300 job simulations and 125+ employers" + description
      │   └── stat: "5M+ students" + description
      └── a CTA "Find a Job Simulation →"

## Computed Styles

### Container
- backgroundColor: #144C8B (rgb(20, 76, 139))
- padding: 40px 16px (md: 40px, lg: 64px)
- width: 100%

### Stat value (large text)
- fontSize: ~46-52px
- fontWeight: 600
- color: #FFFFFF
- lineHeight: 1.1

### Stat description
- fontSize: ~16-18px
- fontWeight: 400
- color: rgba(255, 255, 255, 0.8)
- lineHeight: 1.4

### CTA Button
- Similar to hero CTA but white text on transparent/outlined
- borderRadius: rounded-full (pill shape)
- padding: 16px 32px
- fontSize: ~20px
- backgroundColor: white or outlined
- color: #144C8B
- Centered below stats

## Text Content
- "3.3x more likely" / "to land a job after participating in a job simulation"
- "Over 300 job simulations and 125+ employers" / "across diverse industries and careers"
- "5M+ students" / "have signed up to Forage"
- CTA: "Find a Job Simulation →"

## Responsive Behavior
- **Desktop:** 3-column grid for stats
- **Tablet:** 2-column or stacked
- **Mobile:** Single column stacked
