/**
 * Interface for accessibility constructs used by interactive components
 * Provides a consistent structure for ARIA attributes and accessibility properties
 */
export interface Accessibility {
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
