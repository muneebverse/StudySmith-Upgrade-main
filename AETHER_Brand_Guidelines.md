# AETHER Brand Guidelines & Design System

## 1. BRAND ESSENCE

**Name:** AETHER  
**Tagline:** "Elevate to Clarity"  
**Brand Promise:** Transform your professional application from invisible to unmissable  
**Personality:** Aspirational, clear, premium, modern, trustworthy

---

## 2. COLOR PALETTE

### Primary Colors

**Aether Indigo** `#4F46E5`  
RGB: 79, 70, 229 | CMYK: 66, 69, 0, 10  
*Primary brand color. Use for CTAs, headlines, key UI elements*

**Aether Gold** `#F4A460`  
RGB: 244, 164, 96 | CMYK: 0, 33, 61, 4  
*Accent/energy. Use for highlights, success states, secondary CTAs*

### Secondary Colors

**Sky White** `#FAFAF8`  
RGB: 250, 250, 248 | CMYK: 0, 0, 1, 2  
*Base/background. Clean, slightly warm*

**Deep Ink** `#0F0F12`  
RGB: 15, 15, 18 | CMYK: 100, 100, 85, 80  
*Text, shadows, dark sections*

### Utility Colors

**Success** `#10B981` — Interview call, approval, positive action  
**Alert** `#EF4444` — ATS warning, missing keywords  
**Neutral** `#6B7280` — Secondary text, disabled states

---

## 3. TYPOGRAPHY SYSTEM

### Font Stack (Web-Safe)

**Display (Headlines):** Space Grotesk, -apple-system, sans-serif  
Weight: 600, 700  
Use for: H1, H2, taglines, hero copy

**Body (Text):** Inter, -apple-system, sans-serif  
Weight: 400, 500, 600  
Use for: Paragraphs, descriptions, labels

**Mono (Code/Details):** JetBrains Mono, Courier New, monospace  
Weight: 400, 500  
Use for: Pricing, technical details, code blocks

### Type Sizes & Line Heights

- **H1 (Hero):** 48px / 56px (desktop), 32px / 40px (mobile) | Weight: 700
- **H2 (Section):** 32px / 40px (desktop), 24px / 32px (mobile) | Weight: 700
- **H3 (Subsection):** 24px / 32px | Weight: 600
- **Body Large:** 18px / 28px | Weight: 400
- **Body Regular:** 16px / 24px | Weight: 400
- **Body Small:** 14px / 22px | Weight: 400
- **Caption:** 12px / 18px | Weight: 500

---

## 4. LOGO CONCEPT

### Logo Variations

**Primary Logo: "Aether Ascending"**  
- Geometric upward-pointing form (three ascending layers/steps)
- Top point touches infinite space (minimal)
- Negative space creates subtle feather or wind element
- Wordmark in Space Grotesk, all-caps, letter-spaced
- Color: Aether Indigo on light, Sky White on dark

**Icon Mark (Logo Symbol Only)**  
- Simplified three-layer chevron/upward form
- Square aspect ratio, 40px minimum size
- Used for favicon, social profiles, app icons

**Lockup**  
- Logo mark + wordmark (horizontal, 1:2 ratio recommended)
- Minimum clear space: 8px padding around entire lockup
- Never scale below 120px in width

### Logo Don'ts
- Never rotate, skew, or manipulate
- Never change colors
- Never remove the word "AETHER" in official materials
- Never outline or add strokes
- Never place on background with less than 3:1 contrast

---

## 5. VISUAL DESIGN LANGUAGE

### Shapes & Elements

**Primary Shape:** Ascending geometric forms (chevrons, layers, steps)  
**Secondary:** Clean rectangles, minimal circles  
**Avoid:** Heavy shadows, gradients, ornamental elements  

### Imagery

- **Photography:** Aspirational but grounded. Real students, professionals, moments of clarity
- **Illustrations:** Geometric, minimal, 2-color systems (Indigo + Gold)
- **Icons:** Lucide React or custom geometric, consistent 2px stroke weight
- **Patterns:** Subtle upward chevron pattern (10% opacity), used sparingly in backgrounds

### Spacing System

Use 8px base unit for all spacing:
- 8px, 16px, 24px, 32px, 48px, 64px, 80px, 96px
- Padding inside cards: 24px (3 units)
- Margin between sections: 48px-64px
- Grid gutter: 24px

### Border & Corners

- Border radius: 12px (default), 8px (tight), 16px (expansive)
- Border weight: 1px (light dividers), 2px (active/focus)
- Border color: Use 15% opacity of Indigo for subtle lines

### Shadows & Depth

**No heavy shadows.** Use instead:
- Subtle 1px top border in Indigo (10% opacity) on elevated elements
- Very light drop shadow: `0 1px 3px rgba(15, 15, 18, 0.1)`
- Hover state: 2px top border in Aether Gold, no shadow

---

## 6. COMPONENT STYLING

### Buttons

**Primary (CTA)**  
- Background: Aether Indigo
- Text: Sky White
- Padding: 12px 24px (16px height)
- Border radius: 8px
- Font: Inter, 14px, 600, uppercase
- Hover: Background darker by 10%, top border Aether Gold (2px)
- Active: Indigo with 20% opacity reduction

**Secondary**  
- Background: transparent
- Border: 1px Aether Indigo
- Text: Aether Indigo
- Same padding/radius/font as primary
- Hover: Background 5% opacity Indigo, border thicker (2px)

**Tertiary/Text**  
- Background: transparent
- Text: Aether Indigo
- Underline: appears on hover
- No padding, no border

### Cards

- Background: Sky White or transparent
- Border: 1px solid, 10% opacity Indigo
- Border radius: 12px
- Padding: 24px
- Hover: Top border 2px Aether Gold, subtle shadow: `0 1px 3px rgba(79, 70, 229, 0.1)`

### Input Fields

- Background: Sky White
- Border: 1px Indigo (10% opacity)
- Focus: Border color full Indigo (2px), no box shadow
- Placeholder text: Neutral (6B7280)
- Padding: 12px 16px
- Border radius: 8px

### Form Labels

- Color: Deep Ink (0F0F12)
- Font: Inter, 14px, 600
- Margin bottom: 8px

---

## 7. PAGE-LEVEL DESIGN HIERARCHY

### Hero Sections

- Full-width background color (Indigo or white)
- H1 in 48px Space Grotesk, 700 weight
- Subheading in 18px Inter, 400 weight, Neutral gray
- CTA button primary style
- Asymmetric layout (text left, visual right) or centered
- Padding: 80px horizontal, 120px vertical (desktop); 32px/64px (mobile)

### Section Backgrounds

Alternate between:
- Sky White (main content)
- Aether Indigo at 5% opacity (secondary sections)
- Deep Ink (dark sections, text in Sky White)
- Aether Gold at 8% opacity (highlight/call-to-action sections)

### Navigation

- Background: Sky White with 1px bottom border (Indigo 10%)
- Logo: 32px width
- Links: Inter 14px, 500, Indigo
- Active link: Indigo with bottom border (2px Gold)
- Mobile: Hamburger menu, Indigo icon

### Footer

- Background: Deep Ink
- Text: Sky White
- Links: Aether Gold
- Hover: Brighter Gold
- Spacing: 48px vertical, 32px horizontal

---

## 8. ANIMATION & INTERACTION

### Transitions

- All interactive elements: 200ms ease-out
- Hover states: Immediate top border appearance
- Loading states: 300ms fade-in

### Micro-interactions

- Link hover: 2px top border Gold appears (200ms)
- Button hover: Slight 2px upward shift
- Form focus: Border color change + 200ms transition
- Card hover: Top border Gold appears, light shadow

---

## 9. RESPONSIVE BREAKPOINTS

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px - 1440px
- **Large Desktop:** 1441px+

Typography scales down on mobile by 20-30%.  
Spacing reduces to 16px-24px margins on mobile.

---

## 10. DARK MODE (Optional Future)

If dark mode is implemented:
- Background: Deep Ink (0F0F12)
- Text: Sky White
- Cards: Deep Ink with 1px Gold border
- Accents: Aether Gold (brighter, more visible on dark)
- Subtle grid pattern in 5% Indigo opacity as background texture

---

## 11. BRAND DON'Ts

❌ Don't use corporate blue or red  
❌ Don't add drop shadows to everything  
❌ Don't use thin serif fonts  
❌ Don't skew or rotate the logo  
❌ Don't use more than 3 colors per layout section  
❌ Don't center all text (use asymmetric layouts)  
❌ Don't add complexity to icons  
❌ Don't use gradients (solid colors only)  

---

## 12. USAGE EXAMPLES

### For Headings
"Elevate to Clarity" — tagline appears on:
- Hero section
- Social media covers
- Email signatures
- Pitch decks

### For CTAs
Primary color (Indigo) on all conversion points:
- "Start Your Aether Journey"
- "Get Your Clarity Assessment"
- "Book Your Session"

### For Social/Marketing
Use Indigo + Gold combination with ascending geometric pattern.  
Keep 50% whitespace for breathing room.

---

**Document Version:** 1.0  
**Last Updated:** July 2026  
**Designer:** [Your Name]
