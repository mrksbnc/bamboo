import type { Icon } from '@/components/BoIcon';
import type { BoSize } from '@/constants';
import type { Ref } from 'vue';
import type { BoButtonType, BoButtonVariant } from './constants';
/**
 * @description Type definition for the Record used to define the
 * tailwind classes for the button component
 *
 * @template T - The type of the key of the record where `T extends string`
 *
 * @property default - The default tailwind classes for the button
 * @property active - The tailwind classes for the button when its in the
 * active state
 */
export declare type BoButtonClassMap<T extends string> = {
	default: Record<T, string>;
	active?: Record<T, string>;
};
/**
 * @description Argument definition for the `useBoButton` composable
 */
export declare type UseBoButtonCompoableArgs = {
	label: Ref<string>;
	variant: Ref<BoButtonVariant>;
	type: Ref<BoButtonType>;
	disabled: Ref<boolean>;
	size: Ref<BoSize>;
	prefixIcon: Ref<Icon | null | undefined>;
	suffixIcon: Ref<Icon | null | undefined>;
};

export declare type BoButtonGroupItem = {
	id: string | number;
	label: string;
	disabled?: boolean;
	prefixIcon?: Icon;
	suffixIcon?: Icon;
};
