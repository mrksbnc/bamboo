import type { Icon } from '@/components/bo-icon';

export interface BoAccordionProps {
	/**
	 * Unique ID for the accordion, used for accessibility and testing
	 */
	id?: string;
	/**
	 * The title of the accordion item
	 */
	title?: string;
	/**
	 * Whether the accordion is open by default
	 * @default false
	 */
	open?: boolean;
	/**
	 * Whether the accordion is disabled
	 */
	disabled?: boolean;
	/**
	 * Prefix icon for the accordion
	 */
	prefixIcon?: Icon;
	/**
	 * Custom icon for the expand/collapse indicator
	 * @default Icon.chevron_down
	 */
	customToggleIcon?: Icon;
}

/**
 * Props for the accordion container that holds multiple accordion items
 */
export interface BoAccordionContainerProps {
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
}

export interface AccordionGroup {
	openItems: string[];
	toggle: (id: string) => void;
	registerItem: (id: string, initialOpen: boolean) => void;
}
