import { Icon } from '@/components/icon/bo-icon.js';
import { BoSize } from '@/shared/bo-size.js';

export interface BoDropdownItemProps {
	/** Unique ID for the dropdown item */
	id?: string;
	/** Text label for the dropdown item */
	label?: string;
	/** Description for the dropdown item */
	description?: string;
	/** Icon for the dropdown item */
	icon?: Icon;
	/** Whether the dropdown item is disabled */
	disabled?: boolean;
}

export interface BoDropdownTriggerProps {
	/** Unique ID for the dropdown trigger */
	id?: string;
	/** Whether the dropdown trigger is disabled */
	disabled?: boolean;
	/** Size of the dropdown trigger */
	size?: BoSize;
	/** Text label for the dropdown trigger */
	label?: string;
	/** Custom icon for the dropdown trigger */
	prefixIcon?: Icon;
	/** Custom icon for the dropdown trigger */
	suffixIcon?: Icon;
	/** Custom icon for the dropdown trigger */
	triggerIcon?: Icon;
}
