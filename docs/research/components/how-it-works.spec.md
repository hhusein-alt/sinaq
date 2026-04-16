# HowItWorks Specification

## Overview
- **Target file:** `src/components/HowItWorks.tsx`
- **Interaction model:** static

## DOM Structure
div (py-6 pb-10 px-4 md:px-8 md:pb-14 md:pt-10)
  └── container (max-w-7xl, mx-auto)
      └── section (flex-wrap, flex-row, items-center, justify-evenly, gap-4)
          ├── div (left side - text content)
          │   ├── h2 "Forage is the bridge between education and career success"
          │   └── p description
          └── div (right side - steps)
              ├── step 1: "Register for Forage and tell us a little about yourself."
              ├── step 2: "Enroll in a job sim and complete tasks that replicate real work."
              ├── step 3: "Compare your work with model answers and earn a certificate."
              └── a CTA "How Forage Works →"

## Computed Styles

### H2
- fontSize: 46px
- fontWeight: 400
- color: #144C8B
- lineHeight: 55.2px (1.2)

### Description text
- fontSize: 22px
- fontWeight: 400
- color: #3F3F3F
- lineHeight: 1.4

### Step text
- fontSize: 22px
- fontWeight: 400
- color: #0A0A0A
- Each step likely has a number indicator or icon

### CTA Button "How Forage Works →"
- backgroundColor: #144C8B
- color: #FFFFFF
- borderRadius: 999px (pill/rounded-full)
- padding: 16px 32px
- fontSize: 20px
- fontWeight: 500
- centered

## Text Content
- H2: "Forage is the bridge between education and career success"
- P: "Our job simulations build real-life skills for real-life roles, offering a window into the company and a preview of their day-to-day. Job sims are 100% free, open access and self-paced."
- Step 1: "Register for Forage and tell us a little about yourself."
- Step 2: "Enroll in a job sim and complete tasks that replicate real work."
- Step 3: "Compare your work with model answers and earn a certificate."
- CTA: "How Forage Works →"

## Responsive Behavior
- **Desktop:** 2-column layout (text left, steps right)
- **Mobile:** Single column stacked
