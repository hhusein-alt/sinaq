# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** static (Blog dropdown not implemented for MVP)

## DOM Structure
nav (h-16, flex, items-center, justify-center, px-4, z-50, relative, transparent bg)
  ├── Logo link (ForageLogo SVG, height 2rem)
  ├── Nav links container (hidden md:inline-block)
  │   ├── "Job Simulations" link
  │   ├── "Jobs" link  
  │   ├── "Blog" button (has chevron)
  │   ├── "For Enterprise" link
  │   └── "For Educators" link
  ├── Buttons container
  │   ├── "Sign Up" link
  │   └── "Sign In" link
  └── Hamburger button (md:hidden)

## Computed Styles

### Nav container
- height: 64px
- display: flex
- alignItems: center
- justifyContent: center  
- padding: 0 16px
- backgroundColor: transparent
- position: relative
- zIndex: 50

### Nav links
- fontSize: 14.68px (use text-[15px])
- fontWeight: 700
- color: rgb(63, 63, 63) → #3F3F3F
- padding: 8px 16px

### Sign Up button
- fontSize: 12px
- fontWeight: 700
- color: #FFFFFF
- backgroundColor: #1C6AC3
- borderRadius: 6px
- padding: 0 20px
- height: 30px
- border: 0.8px solid #1C6AC3

### Sign In button
- fontSize: 12px
- fontWeight: 700
- color: #1C6AC3
- backgroundColor: #FFFFFF
- borderRadius: 6px
- padding: 0 20px
- height: 30px
- border: 0.8px solid #1C6AC3

## States & Behaviors
### Hover states
- Nav links: opacity or color change on hover
- Buttons: slight opacity change

## Text Content
- Logo: ForageLogo component from icons.tsx
- Links: "Job Simulations", "Jobs", "Blog", "For Enterprise", "For Educators"
- Buttons: "Sign Up", "Sign In"

## Responsive Behavior
- **Desktop:** Full horizontal nav with all links and buttons
- **Mobile (<768px):** Only logo + hamburger icon visible, links hidden
