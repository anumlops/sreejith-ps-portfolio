# Sreejith P.S. — Portfolio Website Design

## Overview

Single-page static portfolio site for Sreejith P.S., an organic farmer and founder of APEC (agricultural education initiative) based in Kerala, India. Deployed on Vercel free tier via GitHub. Plain HTML/CSS/JS, no frameworks, no build step.

## Design Direction: Paddy Terrace

Inspired by the geometry of flooded rice paddies in Kerala — horizontal bands of color (water-sky-earth), wide horizontal compositions, deep greens and water-blues. Each section feels like stepping onto a different terrace level.

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Paddy green (primary) | Deep rice-field green | `#2D5A27` |
| Water blue (secondary) | Pale sky reflecting on water | `#8AB4C9` |
| Earth brown (accent) | Wet soil / mud | `#6B4F3A` |
| Sky (background light) | Pale warm off-white | `#F5F0E8` |
| Content background | Pale green-water tone | `#E8EDE4` |
| Text | Near-black with warmth | `#1A1A18` |

## Typography

System sans-serif stack. Headings: bold weight, generous letter-spacing. Body: 16-18px, comfortable line-height. No external font loading.

## Section Design

### 1. Hero
- Full viewport height
- Background: wide landscape photo with dark gradient overlay
- Top-left: CSS/SVG brand mark (rice seedling / terrace shape)
- Center: Name in large white bold type, tagline in water-blue
- Bottom-right: Circular portrait inset (120px, white border), overlapping into next section
- Soft gradient fade at bottom edge

### 2. Bio
- Background: `#E8EDE4` (pale sky/water)
- Centered content, max-width 700px
- Heading "About" in paddy green with thin horizontal rule
- 2-3 paragraphs placeholder text with `<!-- REPLACE: ... -->` markers
- Subtle SVG divider with diamond/seed motif

### 3. About APEC
- Background: `#2D5A27` (paddy green), white text
- Heading "APEC" in white, subheading "Agricultural Education Initiative" in water-blue
- 2 paragraphs placeholder text with `<!-- REPLACE: ... -->` markers
- Stats row: 3 placeholder stats (Farmers Reached, Workshops, Years)

### 4. Gallery
- Background: `#E8EDE4`
- 3-column grid (2 on tablet, 1 on mobile)
- 6 placeholder photo slots with dashed borders
- `<!-- REPLACE: photo filename -->` markers
- Subtle scale-up hover effect on desktop

### 5. Videos
- Background: `#2D5A27`
- 2-column grid (1 on mobile)
- 4 placeholder embed slots with play-button overlay
- `<!-- REPLACE: YouTube embed URL -->` and `<!-- REPLACE: video title -->` markers

### 6. Contact
- Background: `#E8EDE4`
- Email as `mailto:` link, phone, location
- `<!-- REPLACE: real email -->` and `<!-- REPLACE: real phone -->` markers
- Footer: paddy green band with copyright

## Technical Spec

- **Files:** `index.html`, `style.css`, `script.js` (minimal JS for scroll effects)
- **No dependencies:** No frameworks, no build step, no CDN fonts
- **Responsive:** Mobile-first, breakpoints at 768px and 1024px
- **Accessibility:** Visible focus states, good contrast ratios, semantic HTML, alt text placeholders, skip-to-content link
- **Vercel:** Zero-config deployment — just push to GitHub and connect