import type { Icon } from '@/components/icon/bo-icon.js';

export interface BoAccordionProps {
	/** Unique ID for the accordion, used for accessibility and testing */
	id?: string;
	/** The title of the accordion item */
	title?: string;
	/** Whether the accordion is open by default */
	open?: boolean;
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
	/** Whether to allow multiple accordion items to be open at once */
	allowMultiple?: boolean;
	/** Whether to keep at least one accordion item open */
	alwaysOpen?: boolean;
	/** The initial open accordion item Id */
	defaultOpenItemId?: string;
}

export interface AccordionGroup {
	openItems: Set<string>;
	toggle: (id: string) => void;
	registerItem: (id: string, initialOpen: boolean) => void;
}
