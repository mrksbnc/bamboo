/**
 * Comprehensive accessibility constructs for interactive components
 * Based on Vue.js accessibility guidelines and WCAG standards
 * @see https://vuejs.org/guide/best-practices/accessibility
 */

/**
 * Core accessibility interface for interactive components
 * Provides consistent structure for ARIA attributes and accessibility properties
 */
export interface AccessibilityConstruct {
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

/**
 * Extended accessibility interface for form components
 * Includes form-specific ARIA attributes and validation states
 */
export interface FormAccessibilityConstruct {
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

/**
 * Landmark accessibility interface for page structure
 * Defines semantic regions and navigation landmarks
 */
export interface LandmarkAccessibilityConstruct {
	/** Landmark role (banner, navigation, main, complementary, etc.) */
	role: LandmarkRole;
	/** ARIA label for landmark identification */
	ariaLabel?: string;
	/** ARIA labelledby reference for landmark naming */
	ariaLabelledBy?: string;
	/** Element ID for landmark identification */
	landmarkId: string;
}

/**
 * Navigation accessibility interface for menu and navigation components
 * Includes keyboard navigation and orientation support
 */
export interface NavigationAccessibilityConstruct {
	/** ARIA orientation for navigation direction */
	ariaOrientation?: NavigationOrientation;
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

/**
 * Skip link accessibility interface for navigation bypass
 * Implements skip link patterns for keyboard navigation
 */
export interface SkipLinkAccessibilityConstruct {
	/** Skip link target element ID */
	targetId: string;
	/** Skip link element ID */
	skipLinkId: string;
	/** Skip link text content */
	skipText: string;
	/** Whether skip link is currently visible */
	isVisible: boolean;
}

/**
 * Live region accessibility interface for dynamic content
 * Manages screen reader announcements for content changes
 */
export interface LiveRegionAccessibilityConstruct {
	/** ARIA live region politeness level */
	ariaLive: 'off' | 'polite' | 'assertive';
	/** ARIA atomic to announce entire region */
	ariaAtomic?: boolean;
	/** ARIA relevant for types of changes to announce */
	ariaRelevant?: 'additions' | 'removals' | 'text' | 'all';
	/** Live region element ID */
	liveRegionId: string;
}

/**
 * Focus management interface for dynamic content
 * Handles focus trapping and restoration
 */
export interface FocusManagementConstruct {
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

/**
 * Standard ARIA roles for landmarks and regions
 */
export enum LandmarkRole {
	banner = 'banner',
	navigation = 'navigation',
	main = 'main',
	complementary = 'complementary',
	contentinfo = 'contentinfo',
	search = 'search',
	form = 'form',
	region = 'region',
	application = 'application',
	document = 'document',
}

/**
 * ARIA live region politeness levels
 */
export enum LiveRegionPoliteness {
	off = 'off',
	polite = 'polite',
	assertive = 'assertive',
}

/**
 * ARIA current state values
 */
export enum AriaCurrent {
	false = 'false',
	true = 'true',
	page = 'page',
	step = 'step',
	location = 'location',
	date = 'date',
	time = 'time',
}

/**
 * ARIA invalid state values
 */
export enum AriaInvalid {
	false = 'false',
	true = 'true',
	grammar = 'grammar',
	spelling = 'spelling',
}

/**
 * Focus trap options for modal dialogs and overlays
 */
export interface FocusTrapOptions {
	/** Whether to return focus to trigger element on close */
	returnFocus: boolean;
	/** Whether to focus first element automatically */
	autoFocus: boolean;
	/** Whether to allow clicking outside to close */
	clickOutsideToClose: boolean;
	/** Escape key handler */
	onEscape?: () => void;
}

/**
 * Testing interface for accessibility validation
 * Provides test IDs and accessible names for automated testing
 */
export interface AccessibilityTesting {
	/** Test ID for accessibility testing */
	testId: string;
	/** ARIA role for testing */
	role?: string;
	/** Accessibility tree label */
	accessibleName: string;
	/** Accessibility tree description */
	accessibleDescription?: string;
}

/**
 * Accordion-specific accessibility interface
 * Handles collapsible content accessibility patterns
 */
export interface AccordionAccessibilityConstruct {
	/** Header element accessibility attributes */
	header: {
		id: string;
		ariaExpanded: boolean;
		ariaDisabled: boolean;
		ariaLabel?: string;
		ariaControls: string;
		role: 'button';
		tabIndex: number;
	};
	/** Content region accessibility attributes */
	content: {
		id: string;
		ariaLabelledBy: string;
		role: 'region';
		isVisible: boolean;
	};
	/** Container group accessibility attributes */
	container: {
		role: 'group';
		ariaLabel?: string;
	};
}

/**
 * Navigation direction enumeration for keyboard interaction
 * Defines directional movement for arrow key navigation
 */
export enum NavigationDirection {
	up = 'up',
	down = 'down',
	left = 'left',
	right = 'right',
}

/**
 * Navigation orientation enumeration for keyboard behavior
 * Defines the spatial orientation of navigation elements
 */
export enum NavigationOrientation {
	horizontal = 'horizontal',
	vertical = 'vertical',
	both = 'both',
}

/**
 * Tab navigation behavior enumeration
 * Defines how Tab key behaves in component contexts
 */
export enum TabBehavior {
	cycle = 'cycle',
	exit = 'exit',
	trap = 'trap',
}

/**
 * Keyboard navigation patterns for interactive components
 * Based on WAI-ARIA Authoring Practices Guide
 */
export interface KeyboardNavigationConstruct {
	/** Current focused element index */
	currentIndex: number;
	/** Total number of navigable elements */
	totalItems: number;
	/** Navigation orientation */
	orientation: NavigationOrientation;
	/** Whether to wrap at boundaries */
	wrap: boolean;
	/** Home/End key support */
	homeEndEnabled: boolean;
	/** Arrow key navigation enabled */
	arrowKeysEnabled: boolean;
	/** Tab key navigation behavior */
	tabBehavior: TabBehavior;
}

/**
 * Grouped navigation accessibility for accordion containers
 * Manages navigation between related interactive elements
 */
export interface GroupNavigationAccessibilityConstruct {
	/** Group container attributes */
	container: {
		role: 'group';
		ariaLabel?: string;
		ariaLabelledBy?: string;
	};
	/** Navigation state management */
	navigation: {
		currentItem: string;
		allItems: string[];
		allowMultipleExpanded: boolean;
		alwaysOneExpanded: boolean;
	};
	/** Keyboard interaction patterns */
	keyboard: KeyboardNavigationConstruct;
}

/**
 * Color contrast accessibility construct
 * Validates color combinations against WCAG standards
 */
export interface ContrastAccessibilityConstruct {
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
