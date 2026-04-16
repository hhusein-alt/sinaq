# EmployersSection Specification

## Overview
- **Target file:** `src/components/EmployersSection.tsx`
- **Interaction model:** static (hover on cards)

## DOM Structure
div (py-6 pb-10 px-4 md:px-8 md:pb-14 md:pt-10)
  └── container
      ├── h2 "Employers who are going beyond the resume"
      └── div (grid of employer cards)
          ├── EmployerCard × 8
          └── Each has image, company overlay, "See Programs" link

## Computed Styles

### H2
- fontSize: 46px
- fontWeight: 400
- color: #144C8B
- textAlign: center
- marginBottom: 32px

### Employer cards
- borderRadius: 12px
- overflow: hidden
- position: relative
- Image fills card
- "See Programs" text overlaid at bottom
- Hover: likely shadow or scale

## Text Content
- H2: "Employers who are going beyond the resume"
- Each card: "See Programs" link

## Responsive Behavior
- **Desktop:** 4-column grid
- **Tablet:** 2-column grid
- **Mobile:** 1-2 column grid
