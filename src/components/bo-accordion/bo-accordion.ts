import type { Icon } from '@/components/bo-icon';

export type BoAccordionProps = {
	/**
	 * The title of the accordion item
	 */
	title?: string;
	/**
	 * Whether the accordion is open by default
	 */
	open?: boolean;
	/**
	 * Whether the accordion is disabled
	 */
	disabled?: boolean;
	/**
	 * Icon to display before the title (prefix)
	 */
	prefixIcon?: Icon;
	/**
	 * Custom icon to display for the expand/collapse action
	 */
	customIcon?: Icon;
	/**
	 * Unique ID for the accordion, used for accessibility and testing
	 */
	id?: string;
	/**
	 * Custom class names for styling
	 */
	className?: string;
};

/**
 * Props for the accordion container that holds multiple accordion items
 */
export type BoAccordionContainerProps = {
	/**
	 * Whether to allow multiple accordion items to be open at once
	 */
	allowMultiple?: boolean;
	/**
	 * Whether to keep at least one accordion item open
	 */
	alwaysOpen?: boolean;
	/**
	 * The initial open accordion item ID
	 */
	defaultOpen?: string;
};
