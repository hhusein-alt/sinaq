# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** horizontal scroll carousel

## DOM Structure
div
  └── container
      ├── h2 "Too good to be true? Hear from real students."
      └── div (horizontal scroll carousel)
          ├── TestimonialCard (Nana Kessie)
          ├── TestimonialCard (student 2)
          └── TestimonialCard (student 3)

## Computed Styles

### H2
- fontSize: 46px
- fontWeight: 400
- color: #144C8B
- textAlign: center

### Testimonial cards
- Large photo (square/landscape crop)
- Below photo:
  - Quote text: fontSize 16px, fontWeight 500, color #3F3F3F, italic
  - Name: fontSize 18px, fontWeight 700, color #144C8B
  - Outcome: fontSize 16px, fontWeight 500, color #3F3F3F

## Testimonial Data
1. Nana Kessie - "Landed a job at White & Case" - Quote about having a seat at the table
2. Second student - quote about starting a project at Forage
3. Third student

## States & Behaviors
- Horizontal scroll on all viewports
- Cards scroll left/right

## Responsive Behavior
- **Desktop:** 3 cards visible in row, horizontal scroll
- **Mobile:** 1 card visible, horizontal scroll
