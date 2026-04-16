# ExploreSection Specification

## Overview
- **Target file:** `src/components/ExploreSection.tsx`
- **Interaction model:** click-driven (pill buttons filter cards) + horizontal scroll for cards

## DOM Structure
div (explore header + cards combined)
  ├── div (pt-6 px-4 md:px-8 md:pt-10) - header
  │   ├── h2 "Explore our free job simulations"
  │   └── div (horizontal scroll pills)
  │       ├── pill "Featured"
  │       ├── pill "Health Care"
  │       ├── pill "Software Engineering"
  │       ├── pill "Banking & Financial Services"
  │       ├── pill "Law"
  │       ├── pill "Data"
  │       └── pill "Consulting"
  └── div (card carousel container, pb-10 px-8 md:pb-14, overflow-x-auto)
      └── div (flex, gap, horizontal scroll)
          ├── JobSimCard (Pfizer - Molecule to Market)
          ├── JobSimCard (JPMorgan - Software Engineering)
          ├── JobSimCard (Citi - Personal Banking)
          ├── JobSimCard (Mayer Brown - Introduction to Litigation)
          └── JobSimCard (Goldman Sachs - Controllers)

## Computed Styles

### Section heading
- fontSize: 46px (h2)
- fontWeight: 400
- color: #144C8B

### Category pills
- fontSize: 14px
- fontWeight: 700
- padding: 8px 16px
- borderRadius: 999px (pill)
- Active pill: bg #144C8B, color white
- Inactive pill: bg transparent, border 1px solid #E4E4E4, color #3F3F3F

### Job Sim Cards
- width: 260px
- padding: 0 8px
- cursor: pointer
- Card image: rounded-lg top, aspect ratio ~16:10
- Company logo below image: small, ~20px height
- Title: fontSize 16px, fontWeight 700, color #0A0A0A
- Category: fontSize 14px, color #3F3F3F
- Difficulty + Duration: fontSize 14px, color #3F3F3F, with dot separator
- "Talent Network Open" badge: small green/blue badge on some cards

## Cards Data
1. Molecule to Market | Health Care | Introductory | 4-5 hours
2. Software Engineering | Software Engineering | Intermediate | 4-5 hours  
3. Personal Banking | Banking & Financial Services | Intermediate | 5-6 hours (badge: "Talent Network Open")
4. Introduction to Litigation | Law | Introductory | 1-2 hours
5. Controllers | Banking & Financial Services | Introductory | 2-3 hours

## States & Behaviors
- Pills: click to switch category (changes visible cards)
- Cards: horizontal scroll on all viewports
- Card hover: likely subtle shadow or scale

## Responsive Behavior
- **Desktop:** Pills in single row, cards horizontal scroll
- **Mobile:** Pills wrap or scroll, cards horizontal scroll
