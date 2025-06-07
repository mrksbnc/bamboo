import type { Icon } from '@/components/icon/bo-icon.js';

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
	/**
	 * Custom icon for the expand/collapse indicator
	 * @default Icon.chevron_down
	 */
	customToggleIcon?: Icon;
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
