# Accessibility Types

Web accessibility (also known as a11y) refers to the practice of creating websites that can be used by anyone — be that a person with a disability, a slow connection, outdated or broken hardware or simply someone in an unfavorable environment.

This document describes the comprehensive accessibility types and interfaces used throughout Bamboo components, based on [Vue.js accessibility guidelines](https://vuejs.org/guide/best-practices/accessibility) and [WCAG standards](https://www.w3.org/WAI/WCAG21/quickref/).

## Core Accessibility

### `AccessibilityConstruct`

Core accessibility interface for interactive components that provides consistent structure for ARIA attributes and accessibility properties.

```typescript
interface AccessibilityConstruct {
	/** ARIA expanded state for collapsible elements */
	ariaExpanded: boolean;
	/** ARIA disabled state for interactive elements */
	ariaDisabled: boolean;
	/** ARIA label for accessible naming */
	ariaLabel?: string;
	/** ARIA controls relationship to other elements */
	ariaControls: string;
	/** ARIA labelledby relationship for accessible naming */
	ariaLabelledBy: string;
	/** Element ID for accessibility references */
	headerId: string;
	/** Body/content element ID for accessibility references */
	bodyId: string;
}
```

**Usage Example:**

```vue
<template>
	<div
		:id="accessibility.headerId"
		:aria-expanded="accessibility.ariaExpanded"
		:aria-disabled="accessibility.ariaDisabled"
		:aria-label="accessibility.ariaLabel"
		:aria-controls="accessibility.ariaControls"
	>
		<!-- Interactive content -->
	</div>
	<div
		:id="accessibility.bodyId"
		:aria-labelledby="accessibility.ariaLabelledBy"
	>
		<!-- Content -->
	</div>
</template>
```

## Form Accessibility

### `FormAccessibilityConstruct`

Extended accessibility interface for form components with form-specific ARIA attributes and validation states.

```typescript
interface FormAccessibilityConstruct {
	/** ARIA label for form control */
	ariaLabel?: string;
	/** ARIA labelledby reference to external label */
	ariaLabelledBy?: string;
	/** ARIA describedby reference to description element */
	ariaDescribedBy?: string;
	/** ARIA required state for form validation */
	ariaRequired?: boolean;
	/** ARIA invalid state for validation errors */
	ariaInvalid?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
	/** ARIA errormessage reference to error element */
	ariaErrorMessage?: string;
	/** Form control ID for label association */
	controlId: string;
	/** Description element ID for aria-describedby */
	descriptionId?: string;
	/** Error message element ID for aria-errormessage */
	errorId?: string;
}
```

**Best Practices:**

- Always provide labels for form controls
- Use `aria-describedby` for additional instructions
- Link error messages with `aria-errormessage`
- Indicate required fields with `aria-required`

**Usage Example:**

```vue
<template>
	<label :for="formAccess.controlId">Email Address *</label>
	<input
		:id="formAccess.controlId"
		type="email"
		:aria-required="formAccess.ariaRequired"
		:aria-invalid="formAccess.ariaInvalid"
		:aria-describedby="formAccess.descriptionId"
		:aria-errormessage="formAccess.errorId"
	/>
	<div :id="formAccess.descriptionId">Please enter a valid email address</div>
	<div
		:id="formAccess.errorId"
		v-if="hasError"
	>
		Email address is required
	</div>
</template>
```

## Landmark Navigation

### `LandmarkAccessibilityConstruct`

Interface for page structure landmarks that define semantic regions and navigation areas.

```typescript
interface LandmarkAccessibilityConstruct {
	/** Landmark role (banner, navigation, main, complementary, etc.) */
	role: LandmarkRole;
	/** ARIA label for landmark identification */
	ariaLabel?: string;
	/** ARIA labelledby reference for landmark naming */
	ariaLabelledBy?: string;
	/** Element ID for landmark identification */
	landmarkId: string;
}
```

### `LandmarkRole`

Standard ARIA roles for landmarks and regions.

```typescript
enum LandmarkRole {
	BANNER = 'banner',
	NAVIGATION = 'navigation',
	MAIN = 'main',
	COMPLEMENTARY = 'complementary',
	CONTENTINFO = 'contentinfo',
	SEARCH = 'search',
	FORM = 'form',
	REGION = 'region',
	APPLICATION = 'application',
	DOCUMENT = 'document',
}
```

**Usage Example:**

```vue
<template>
	<header
		:id="headerLandmark.landmarkId"
		:role="headerLandmark.role"
	>
		<!-- Site header -->
	</header>
	<nav
		:id="navLandmark.landmarkId"
		:role="navLandmark.role"
		:aria-label="navLandmark.ariaLabel"
	>
		<!-- Navigation menu -->
	</nav>
	<main
		:id="mainLandmark.landmarkId"
		:role="mainLandmark.role"
	>
		<!-- Main content -->
	</main>
</template>
```

## Navigation Accessibility

### `NavigationAccessibilityConstruct`

Interface for menu and navigation components with keyboard navigation and orientation support.

```typescript
interface NavigationAccessibilityConstruct {
	/** ARIA orientation for navigation direction */
	ariaOrientation?: 'horizontal' | 'vertical';
	/** ARIA current state for current page/location */
	ariaCurrent?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
	/** ARIA expanded state for submenus */
	ariaExpanded?: boolean;
	/** ARIA haspopup to indicate popup type */
	ariaHasPopup?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
	/** ARIA level for hierarchical navigation */
	ariaLevel?: number;
	/** ARIA setsize for total items in set */
	ariaSetSize?: number;
	/** ARIA posinset for position in set */
	ariaPosInSet?: number;
}
```

**Keyboard Navigation Support:**

- ↑↓ Arrow keys for vertical navigation
- ←→ Arrow keys for horizontal navigation
- Enter/Space to activate items
- Escape to close submenus
- Home/End for first/last items

## Skip Links

### `SkipLinkAccessibilityConstruct`

Interface for navigation bypass links that allow keyboard users to skip repetitive content.

```typescript
interface SkipLinkAccessibilityConstruct {
	/** Skip link target element ID */
	targetId: string;
	/** Skip link element ID */
	skipLinkId: string;
	/** Skip link text content */
	skipText: string;
	/** Whether skip link is currently visible */
	isVisible: boolean;
}
```

**Implementation Example:**

```vue
<template>
	<a
		:id="skipLink.skipLinkId"
		:href="`#${skipLink.targetId}`"
		class="skip-link"
		@focus="skipLink.isVisible = true"
		@blur="skipLink.isVisible = false"
	>
		{{ skipLink.skipText }}
	</a>
</template>

<style>
.skip-link {
	position: absolute;
	top: -40px;
	left: 6px;
	background: white;
	color: black;
	padding: 8px;
	text-decoration: none;
	z-index: 1000;
}

.skip-link:focus {
	top: 6px;
}
</style>
```

## Live Regions

### `LiveRegionAccessibilityConstruct`

Interface for dynamic content that manages screen reader announcements.

```typescript
interface LiveRegionAccessibilityConstruct {
	/** ARIA live region politeness level */
	ariaLive: 'off' | 'polite' | 'assertive';
	/** ARIA atomic to announce entire region */
	ariaAtomic?: boolean;
	/** ARIA relevant for types of changes to announce */
	ariaRelevant?: 'additions' | 'removals' | 'text' | 'all';
	/** Live region element ID */
	liveRegionId: string;
}
```

### `LiveRegionPoliteness`

ARIA live region politeness levels.

```typescript
enum LiveRegionPoliteness {
	OFF = 'off', // No announcements
	POLITE = 'polite', // Announce when user is idle
	ASSERTIVE = 'assertive', // Announce immediately
}
```

**Usage Guidelines:**

- Use `polite` for status updates and form validation
- Use `assertive` for critical alerts and errors
- Keep announcements concise and meaningful

## Focus Management

### `FocusManagementConstruct`

Interface for managing focus in dynamic content with support for focus trapping and restoration.

```typescript
interface FocusManagementConstruct {
	/** Current focused element reference */
	focusedElement?: HTMLElement;
	/** Previous focused element for restoration */
	previousFocus?: HTMLElement;
	/** Focus trap active state */
	isFocusTrapped: boolean;
	/** Focusable elements within container */
	focusableElements: HTMLElement[];
	/** First focusable element */
	firstFocusableElement?: HTMLElement;
	/** Last focusable element */
	lastFocusableElement?: HTMLElement;
}
```

### `FocusTrapOptions`

Configuration options for focus trapping in modal dialogs and overlays.

```typescript
interface FocusTrapOptions {
	/** Whether to return focus to trigger element on close */
	returnFocus: boolean;
	/** Whether to focus first element automatically */
	autoFocus: boolean;
	/** Whether to allow clicking outside to close */
	clickOutsideToClose: boolean;
	/** Escape key handler */
	onEscape?: () => void;
}
```

**Focus Management Best Practices:**

- Always restore focus when closing modals
- Trap focus within modal dialogs
- Provide clear focus indicators
- Maintain logical tab order

## ARIA Enums

### `AriaCurrent`

Values for indicating current item in a set.

```typescript
enum AriaCurrent {
	FALSE = 'false',
	TRUE = 'true',
	PAGE = 'page', // Current page in pagination
	STEP = 'step', // Current step in process
	LOCATION = 'location', // Current location in site
	DATE = 'date', // Current date in calendar
	TIME = 'time', // Current time in timeline
}
```

### `AriaInvalid`

Values for indicating validation state.

```typescript
enum AriaInvalid {
	FALSE = 'false', // No validation errors
	TRUE = 'true', // Has validation errors
	GRAMMAR = 'grammar', // Grammar errors
	SPELLING = 'spelling', // Spelling errors
}
```

## Testing & Validation

### `AccessibilityTesting`

Interface for accessibility testing utilities.

```typescript
interface AccessibilityTesting {
	/** Test ID for accessibility testing */
	testId: string;
	/** ARIA role for testing */
	role?: string;
	/** Accessibility tree label */
	accessibleName: string;
	/** Accessibility tree description */
	accessibleDescription?: string;
}
```

### `ContrastAccessibilityConstruct`

Interface for ensuring WCAG contrast requirements are met.

```typescript
interface ContrastAccessibilityConstruct {
	/** Foreground color value */
	foregroundColor: string;
	/** Background color value */
	backgroundColor: string;
	/** Contrast ratio calculation */
	contrastRatio: number;
	/** WCAG AA compliance (4.5:1 for normal text) */
	wcagAA: boolean;
	/** WCAG AAA compliance (7:1 for normal text) */
	wcagAAA: boolean;
	/** Text size category (normal, large) */
	textSize: 'normal' | 'large';
}
```

## Testing Tools

### Automated Testing

- **Lighthouse** - Built into Chrome DevTools
- **axe-core** - Popular accessibility testing library
- **WAVE** - Web accessibility evaluation tool

### Manual Testing

- **Keyboard Navigation** - Test with Tab, Shift+Tab, Arrow keys
- **Screen Readers** - Test with NVDA, JAWS, VoiceOver
- **Color Contrast** - Use WebAIM's contrast checker

### Testing Checklist

✅ **Keyboard Navigation**

- All interactive elements are keyboard accessible
- Tab order is logical and predictable
- Focus indicators are clearly visible

✅ **Screen Reader Support**

- All content has appropriate labels
- ARIA attributes are correctly implemented
- Dynamic content changes are announced

✅ **Visual Accessibility**

- Color contrast meets WCAG AA standards (4.5:1)
- Text is readable at 200% zoom
- Focus indicators are clearly visible

✅ **Semantic Structure**

- Proper heading hierarchy (h1-h6)
- Landmarks identify page regions
- Form controls have associated labels

## Resources

### Standards & Guidelines

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Vue.js Accessibility Guide](https://vuejs.org/guide/best-practices/accessibility)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

### Testing Tools

- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse/audits/accessibility)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Extension](https://www.deque.com/axe/devtools/)

### Screen Readers

- [NVDA](https://www.nvaccess.org/) (Windows, Free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows)
- [VoiceOver](https://www.apple.com/accessibility/mac/vision/) (macOS, Built-in)
- [ChromeVox](https://chrome.google.com/webstore/detail/chromevox-classic-extensi/kgejglhpjiefppelpmljglcjbhoiplfn) (Chrome Extension)
