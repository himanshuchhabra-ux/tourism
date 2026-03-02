# TourHub Admin Panel - DESIGN SYSTEM & GUIDELINES

## Design System Overview

This document defines the design system, visual language, and component guidelines for the TourHub Tourism Application Admin Panel. All future developments should follow these guidelines to maintain consistency and cohesion across the platform.

---

## 1. COLOR PALETTE

### Primary Colors (Tourism Theme)
```css
--primary-color: #16a085;        /* Main teal - Trust, nature, travel */
--primary-light: #1abc9c;        /* Bright teal - Freshness, energy */
--primary-dark: #0e7260;         /* Deep teal - Depth, authority */
```

**Usage**: Primary actions, brand elements, navigation highlights, main CTAs

### Accent Colors
```css
--accent-orange: #e67e22;        /* Orange - Warmth, energy */
--accent-orange-light: #f39c12;  /* Light orange - Caution, warning */
```

**Usage**: Secondary actions, highlights, alerts, complementary elements

### Secondary Colors
```css
--secondary-teal: #2980b9;       /* Professional blue */
--secondary-blue: #3498db;       /* Light blue - Information */
```

**Usage**: Data visualization, charts, alternative highlights

### Neutral Colors
```css
--bg-primary: #ffffff;           /* Main background, cards */
--bg-secondary: #f8f9fa;         /* Page background */
--bg-tertiary: #ecf0f1;          /* Tertiary backgrounds */
--text-primary: #2c3e50;         /* Main text */
--text-secondary: #7f8c8d;       /* Secondary text, labels */
--text-light: #95a5a6;           /* Light text, hints */
--border-color: #e0e6ed;         /* Borders, dividers */
```

### Status Colors
```css
--success: #27ae60;              /* Green - Success, positive */
--warning: #f39c12;              /* Orange - Warning, caution */
--danger: #e74c3c;               /* Red - Danger, error, deletion */
--info: #3498db;                 /* Blue - Information, alerts */
```

### Color Gradients (Premium Effects)
```css
/* Gradient 1: Purple-Pink */
linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Gradient 2: Pink-Red */
linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Gradient 3: Cyan-Blue */
linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Gradient 4: Pink-Orange */
linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Gradient 5: Cyan-Pink */
linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* Gradient 6: Orange-Cake */
linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);

/* Primary Gradient */
linear-gradient(135deg, #16a085 0%, #1abc9c 100%);
```

### Color Accessibility
- Main text: At least 4.5:1 contrast ratio with background
- Secondary text: At least 3:1 contrast ratio
- Interactive elements: Clear visual distinction from text

---

## 2. TYPOGRAPHY

### Font Family
```css
--font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

**Rationale**: Clean, modern, widely-available sans-serif font that works well on screens

### Font Sizes
```css
--font-size-xs: 0.75rem;        /* 12px - Small labels, hints */
--font-size-sm: 0.875rem;       /* 14px - Labels, secondary text */
--font-size-base: 1rem;         /* 16px - Body text, normal */
--font-size-lg: 1.125rem;       /* 18px - Section titles */
--font-size-xl: 1.5rem;         /* 24px - Page titles */
--font-size-2xl: 2rem;          /* 32px - Large headings */
```

### Font Weights
```css
400 - Regular (Body text, normal content)
500 - Medium (Labels, secondary nav items)
600 - Semi-Bold (Section titles, card headers)
700 - Bold (Page titles, KPI values, emphasis)
```

### Typography Hierarchy

#### Level 1: Page Title
- Size: 24px (--font-size-xl)
- Weight: 600
- Color: --text-primary
- Usage: Main page headings

#### Level 2: Section Headers
- Size: 18px (--font-size-lg)
- Weight: 600
- Color: --text-primary
- Usage: Card titles, section headings

#### Level 3: Labels & Secondary Text
- Size: 14px (--font-size-sm)
- Weight: 600
- Color: --text-secondary
- Usage: Form labels, navigation items

#### Level 4: Body Text
- Size: 16px (--font-size-base)
- Weight: 400
- Color: --text-primary
- Usage: Paragraph text, descriptions

#### Level 5: Small/Meta Text
- Size: 12px (--font-size-xs)
- Weight: 400
- Color: --text-light
- Usage: Timestamps, hints, small labels

### Line Height
```css
1.6 - Default line height for body text
1.4 - Compact line height for headings
1.2 - Tight line height for data displays
```

---

## 3. SPACING SYSTEM (8px Base)

All spacing follows an 8px base unit for consistency:

```css
--spacing-xs: 0.25rem;   /* 2px - micro spacing */
--spacing-sm: 0.5rem;    /* 4px - small spacing */
--spacing-md: 1rem;      /* 8px - base spacing */
--spacing-lg: 1.5rem;    /* 12px - larger spacing */
--spacing-xl: 2rem;      /* 16px - extra large */
--spacing-2xl: 3rem;     /* 24px - double extra large */
```

### Application Guidelines
- **Padding**: Use spacing units for all internal padding
- **Margins**: Use spacing units for vertical/horizontal spacing
- **Gaps**: Use spacing units in flexbox/grid gaps
- **Never use arbitrary values** - Always choose from the system

### Examples
- Form field padding: spacing-md (8px)
- Card padding: spacing-lg (12px)
- Section margins: spacing-2xl (24px)
- Icon gaps: spacing-md (8px)

---

## 4. SHADOW SYSTEM (Depth)

Three-tier shadow system for visual hierarchy:

```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
--shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.15);
```

### Usage Guidelines
- **shadow-sm**: Subtle elevation for cards and containers
- **shadow-md**: Hover states, interactive elements, floating components
- **shadow-lg**: Modals, dropdowns, topmost z-index elements
- **No shadow**: Text-based components, borders only

### Application
```css
/* Card - default */
box-shadow: var(--shadow-sm);

/* Card - hover state */
box-shadow: var(--shadow-md);
transition: var(--transition);

/* Modal/Modal overlay */
box-shadow: var(--shadow-lg);
```

---

## 5. COMPONENT LIBRARY

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
color: white;
padding: var(--spacing-md) var(--spacing-lg);
border-radius: 10px;
font-weight: 600;
box-shadow: var(--shadow-md);
transition: var(--transition);
```

Hover State:
```css
transform: translateY(-2px);
box-shadow: var(--shadow-lg);
```

#### Secondary Button
```css
background: var(--bg-secondary);
color: var(--primary-color);
border: 2px solid var(--border-color);
padding: var(--spacing-md) var(--spacing-lg);
border-radius: 10px;
font-weight: 600;
```

#### Danger Button
```css
background: var(--danger);
color: white;
padding: var(--spacing-md) var(--spacing-lg);
border-radius: 10px;
font-weight: 600;
```

### Input Fields

#### Standard Input
```css
padding: var(--spacing-md);
border: 2px solid var(--border-color);
border-radius: 10px;
font-size: var(--font-size-base);
transition: var(--transition);
```

Focus State:
```css
border-color: var(--primary-color);
outline: none;
box-shadow: 0 0 0 3px rgba(22, 160, 133, 0.1);
```

### Cards

#### KPI Card
```css
background: var(--bg-primary);
padding: var(--spacing-lg);
border-radius: 12px;
box-shadow: var(--shadow-sm);
border-top: 3px solid [gradient];
transition: var(--transition);
```

Hover State:
```css
box-shadow: var(--shadow-md);
transform: translateY(-2px);
```

#### Chart Card
```css
background: var(--bg-primary);
padding: var(--spacing-lg);
border-radius: 12px;
box-shadow: var(--shadow-sm);
```

#### Insight Card
```css
background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
padding: var(--spacing-lg);
border-radius: 12px;
box-shadow: var(--shadow-sm);
border-left: 4px solid var(--primary-color);
```

### Forms

#### Form Group
```css
margin-bottom: var(--spacing-lg);
```

#### Form Label
```css
display: block;
margin-bottom: var(--spacing-sm);
font-weight: 600;
color: var(--text-primary);
font-size: var(--font-size-sm);
text-transform: optional
```

#### Input Wrapper
```css
position: relative;
display: flex;
align-items: center;
```

Icon positioning:
```css
position: absolute;
left: var(--spacing-md);
color: var(--text-light);
pointer-events: none;
```

---

## 6. LAYOUT SYSTEM

### Sidebar Layout
```css
Width: 260px (fixed)
Background: var(--bg-primary)
Box-shadow: var(--shadow-md)
Responsive: Hidden at 768px breakpoint, becomes overlay
```

### Main Content Grid
```css
display: flex;
flex-direction: column;
flex: 1;
padding: var(--spacing-2xl);
overflow-y: auto;
```

### KPI Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: var(--spacing-lg);
```

### Card Grid (Responsive)
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax([300-400px], 1fr));
gap: var(--spacing-lg);
```

---

## 7. RESPONSIVE BREAKPOINTS

```css
/* Desktop */
@media (min-width: 1200px) {}

/* Tablet */
@media (max-width: 1199px) and (min-width: 768px) {}

/* Mobile */
@media (max-width: 767px) {}

/* Small Mobile */
@media (max-width: 640px) {}
```

### Responsive Adjustments
- **Desktop**: Multi-column layouts, full sidebar, all information visible
- **Tablet**: Adjusted columns, responsive padding
- **Mobile**: Single column, collapsed sidebar, optimized spacing
- **Small Mobile**: Text hierarchy, hidden secondary info, touch-optimized

---

## 8. TRANSITIONS & ANIMATIONS

### Transition Timing
```css
--transition: all 0.3s ease;                /* Default smooth transition */
--transition-fast: all 0.15s ease;          /* Quick feedback */
```

### Standard Transitions
```css
/* Hover effects */
transition: var(--transition);

/* Rapid feedback (buttons, toggles) */
transition: var(--transition-fast);
```

### Keyframe Animations

#### Slide In Left
```css
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

#### Slide In Right
```css
@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

animation: slideInRight 0.3s ease;
```

#### Float
```css
@keyframes float {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
}

animation: float 20s linear infinite;
```

---

## 9. ICONS & IMAGERY

### Icon Library
- **Font Awesome 6.4.0** (via CDN)
- Icon size: 1.5rem (24px) for standard icons
- Icon size: 2rem (32px) for emphasis
- Icon size: 1rem (16px) for navigation

### Icon Colors
```css
Primary action: var(--primary-color)
Disabled: var(--text-light)
Success: var(--success)
Warning: var(--warning)
Danger: var(--danger)
Info: var(--info)
```

### Avatar Images
```css
Size: 40px (user profiles in topbar)
Border-radius: 50%
Source: UI Avatars API (https://ui-avatars.com)
```

---

## 10. FORMS & VALIDATION

### Form Validation States

#### Valid State
```css
border-color: var(--success);
box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
```

#### Invalid State
```css
border-color: var(--danger);
box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
```

#### Warning State
```css
border-color: var(--warning);
box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.1);
```

### Error Messages
```css
color: var(--danger);
font-size: var(--font-size-sm);
margin-top: var(--spacing-sm);
font-weight: 500;
```

### Help Text
```css
color: var(--text-secondary);
font-size: var(--font-size-xs);
margin-top: var(--spacing-xs);
```

---

## 11. DATA VISUALIZATION STANDARDS

### Chart Colors (Chart.js)
```css
Primary: #16a085
Secondary: #e67e22
Tertiary: #3498db
Quaternary: #f39c12
Quinary: #2980b9
```

### Chart Configuration
```javascript
{
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                padding: 15,
                font: { size: 12, weight: '600' }
            }
        }
    }
}
```

---

## 12. NOTIFICATIONS & ALERTS

### Notification Toast
```css
position: fixed;
top: 20px;
right: 20px;
padding: var(--spacing-md) var(--spacing-lg);
border-radius: 8px;
font-size: var(--font-size-sm);
font-weight: 500;
z-index: 10000;
box-shadow: var(--shadow-lg);
```

### Notification Types
- **Success**: background: var(--success)
- **Error**: background: var(--danger)
- **Warning**: background: var(--warning)
- **Info**: background: var(--info)

---

## 13. ACCESSIBILITY REQUIREMENTS

### Color Contrast
- Main text vs background: 4.5:1 minimum
- Secondary text vs background: 3:1 minimum
- Focus indicators: Clear visual distinction

### Touch Targets
- Minimum touch target size: 44px × 44px
- Spacing between targets: 8px minimum

### Keyboard Navigation
- All interactive elements: Tab-accessible
- Focus indicators: Always visible
- Logical tab order: Left-to-right, top-to-bottom

### ARIA Labels
- Icon-only buttons: aria-label required
- Form inputs: aria-label or associated <label>
- Interactive regions: Appropriate role attributes

---

## 14. DARK MODE (Future Enhancement)

When dark mode is implemented, these colors should be used:

```css
--bg-primary-dark: #1a1a2e;
--bg-secondary-dark: #16213e;
--text-primary-dark: #eaeaea;
--text-secondary-dark: #b0b0b0;
--border-color-dark: #2a2a4e;
```

---

## 15. DESIGN SPECIFICATIONS CHECKLIST

When implementing new features, ensure:

- [ ] Color palette adheres to defined colors
- [ ] Typography follows size and weight hierarchy
- [ ] Spacing uses base-8 unit system
- [ ] Shadows applied appropriately
- [ ] Responsive design tested at all breakpoints
- [ ] Transitions/animations smooth and purposeful
- [ ] Form validation states implemented
- [ ] Accessibility standards met
- [ ] Components follow design system patterns
- [ ] No hardcoded colors or margins used

---

## 16. DEVELOPER NOTES

### CSS Variables Usage
All styling should use CSS variables:

```css
/* ❌ Avoid */
color: #16a085;
padding: 12px;

/* ✅ Use */
color: var(--primary-color);
padding: var(--spacing-lg);
```

### Class Naming Convention
Use BEM-like naming for clarity:

```css
.component {}
.component__element {}
.component--modifier {}
```

### Responsive Mobile-First
Always start with mobile, then enhance:

```css
/* Base mobile styles */
.card { padding: var(--spacing-md); }

/* Tablet and up */
@media (min-width: 768px) {
    .card { padding: var(--spacing-lg); }
}
```

---

## Version History

| Version | Date | Updates |
|---------|------|---------|
| 1.0 | Mar 2, 2026 | Initial design system documentation |

---

**Document Version**: 1.0
**Last Updated**: March 2, 2026
**Status**: Ready for Implementation

For questions or clarifications regarding design specifications, please contact the design team.
