# Forage Homepage - Behaviors

## Scroll Behaviors
- Nav does NOT change on scroll (no sticky, no background change)
- No scroll-driven animations observed
- No scroll-snap
- No parallax
- No Lenis or smooth scroll library

## Logo Ticker
- Continuous auto-scrolling horizontal animation
- Pauses on hover
- CSS animation: translateX(0) → translateX(-50%), ~30s linear infinite
- Logos are duplicated for seamless loop

## Click Behaviors
- Category pills in "Explore" section filter/change the visible job sim cards
- Job sim cards link to individual program pages
- Employer cards have "See Programs" links
- Nav "Blog" link has dropdown chevron

## Hover States
- Nav links: likely color change on hover
- Sign Up/Sign In buttons: likely opacity/color shift
- CTA buttons: likely slight opacity change
- Job sim cards: likely shadow or scale
- Footer links: likely color/underline change
- Employer cards: likely shadow/scale

## Responsive
- Nav collapses to hamburger on mobile (SVG hamburger icon at index 2, viewBox 0 0 80 80)
- Cards become horizontal scroll on all sizes
- Hero text scales down on mobile
- Footer columns likely stack vertically
