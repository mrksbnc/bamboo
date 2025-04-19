---
title: Accessibility
---

# Accessibility

Bamboo follows the [Web Content Accessibility Guidelines (WCAG) 2.1 AA standards](https://www.w3.org/TR/WCAG21/) to ensure that all components and utilities are accessible to users with disabilities. This page provides an overview of the accessibility features built into the library and guidance on maintaining accessibility in your applications.

## WCAG 2.1 AA Compliance

All Bamboo components are designed to meet the following WCAG 2.1 AA requirements:

- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive
- **Operable**: User interface components and navigation must be operable
- **Understandable**: Information and the operation of the user interface must be understandable
- **Robust**: Content must be robust enough to be interpreted by a wide variety of user agents, including assistive technologies

## Accessibility Features

Bamboo implements the following accessibility features:

### Keyboard Navigation

- All interactive elements are fully keyboard accessible
- Focus management for modals, dropdowns, and other components
- Skip links for keyboard users
- Visible focus indicators

### Screen Reader Support

- Proper ARIA attributes for all components
- Meaningful text alternatives for non-text content
- Live region announcements for dynamic content
- Hidden elements with `aria-hidden="true"`

### Visual Design

- Sufficient color contrast ratios
- Visual indicators that don't rely solely on color
- Reduced motion support through media queries
- Adjustable text sizing

## AccessibilityUtils Class

Bamboo provides a utility class `AccessibilityUtils` with methods to enhance accessibility in your applications.

### Screen Reader Announcements

Dynamically announce messages to screen readers:

```typescript
import { AccessibilityUtils } from '@mrksbnc/bamboo'

// Announce with default politeness level (polite)
AccessibilityUtils.announceToScreenReader('Item added to cart')

// Announce with higher priority
AccessibilityUtils.announceToScreenReader('Form submission error', 'assertive')
```

### Skip Links

Add a skip link to bypass navigation and jump directly to content:

```typescript
import { AccessibilityUtils } from '@mrksbnc/bamboo'

// Add a skip link to the main content
AccessibilityUtils.addSkipLink('main-content')

// Add a skip link with custom text
AccessibilityUtils.addSkipLink('main-content', 'Skip to main content')
```

### Accessible ID Generation

Generate unique IDs for ARIA attributes:

```typescript
import { AccessibilityUtils } from '@mrksbnc/bamboo'

// Generate a unique ID with a prefix
const headingId = AccessibilityUtils.generateAccessibleId('section-heading')
// Result: "section-heading-a7b3c9d"
```

### Screen Reader Visibility Check

Check if an element is hidden from screen readers:

```typescript
import { AccessibilityUtils } from '@mrksbnc/bamboo'

const isHidden = AccessibilityUtils.isHiddenFromScreenReaders(element)
```

## CSS Utility Classes

Bamboo provides CSS utility classes for accessibility:

### Screen Reader Only

Make content visible to screen readers but hidden visually:

```html
<span class="sr-only">Additional information for screen readers</span>
```

### Skip Links

The `skip-link` class provides styled skip links (hidden until focused):

```html
<a
  href="#main"
  class="skip-link"
  >Skip to main content</a
>
```

### Reduced Motion

Bamboo automatically respects the user's reduced motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Testing Accessibility

To ensure your application maintains accessibility, you should:

1. Use keyboard navigation to test all interactive elements
2. Test with screen readers (NVDA, VoiceOver, JAWS)
3. Verify proper heading structure and ARIA attributes
4. Check color contrast ratios for text elements
5. Test with browser accessibility tools like Lighthouse or axe

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
