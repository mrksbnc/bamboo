import type { Icon } from '@/components/icon/bo-icon.js';

export enum BoAccordionShape {
	rounded = 'rounded',
	square = 'square',
}

export interface BoAccordionProps {
	/** Unique ID for the accordion, used for accessibility and testing */
	id?: string;
	/** The title of the accordion item */
	title?: string;
	/** Custom accessible label for screen readers (falls back to title) */
	ariaLabel?: string;
	/** Whether the accordion is opened by default */
	open?: boolean;
	/** Whether the accordion is disabled */
	disabled?: boolean;
	/** Prefix icon for the accordion item */
	prefixIcon?: Icon;
	/** Shape of the accordion item */
	shape?: BoAccordionShape;
	/**
	 * Custom icon for the expand/collapse indicator
	 * @default Icon.chevron_down
	 */
	customToggleIcon?: Icon;
	/** Custom background color for the header (accepts Tailwind or CSS classes) */
	headerBackgroundColor?: string;
	/** Custom background color for the body (accepts Tailwind or CSS classes) */
	bodyBackgroundColor?: string;
	/** Custom text color for the header (accepts Tailwind or CSS classes) */
	headerTextColor?: string;
	/** Custom text color for the body (accepts Tailwind or CSS classes) */
	bodyTextColor?: string;
	/** True if this accordion is the first in a group */
	isFirst?: boolean;
	/** True if this accordion is the last in a group */
	isLast?: boolean;
}

export interface BoAccordionContainerProps {
	/** Unique ID for the accordion container, used for accessibility and testing */
	id?: string;
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The initial open accordion item Id */
	defaultOpenItemId?: string;
}

export interface AccordionGroup {
	/** The currently open accordion items */
	openItems: Set<string>;
	/** Toggle an accordion item */
	toggle: (id: string) => void;
	/** Register an accordion item on the accordion group */
	registerItem: (id: string, initialOpen: boolean) => void;
}
