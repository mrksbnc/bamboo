import type { Icon } from '@/components/icon/bo-icon.js';

export enum BoAccordionTitlePosition {
	start = 'start',
	center = 'center',
	end = 'end',
}

export enum BoAccordionShape {
	rounded = 'rounded',
	flat = 'flat',
}

export interface BoAccordionProps {
	/**
	 * The unique identifier for the accordion.
	 * @default Generated UUID
	 */
	id?: string;

	/**
	 * The title of the accordion.
	 */
	title: string;

	/**
	 * The position of the title in the accordion header.
	 * @default BoAccordionTitlePosition.start
	 */
	titlePosition?: BoAccordionTitlePosition;

	/**
	 * Custom background color for the accordion header.
	 * @default undefined
	 */
	headerBackground?: string;

	/**
	 * Custom background color for the accordion body.
	 * @default undefined
	 */
	bodyBackground?: string;

	/**
	 * The index of the accordion in a group.
	 * Used for border styling and keyboard navigation.
	 */
	index?: number;

	/**
	 * The total number of accordions in the group.
	 * Used for border styling and keyboard navigation.
	 */
	total?: number;

	/**
	 * Whether the accordion is disabled.
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Whether the accordion is expanded.
	 * @default false
	 */
	expanded?: boolean;

	/**
	 * The icon to display before the title.
	 */
	prefixIcon?: Icon;

	/**
	 * The icon to display after the title.
	 */
	suffixIcon?: Icon;

	/**
	 * Custom accessible label for screen readers.
	 */
	ariaLabel?: string;
	/** Whether the accordion is opened by default */
	open?: boolean;
	/** Prefix icon for the accordion item */
	customToggleIcon?: Icon;
	/**
	 * The shape of the accordion.
	 * @default BoAccordionShape.flat
	 */
	shape?: BoAccordionShape;
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
