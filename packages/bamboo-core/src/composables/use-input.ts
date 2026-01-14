import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoInputProps,
	BoInputSize,
	BoInputSizeStyleMap,
	BoInputVariantStyleMap,
} from '../components/bo-input';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoIconSize } from '../components/bo-icon';
import { BoFontSize } from '../components/bo-text';

export interface UseBoInput extends ComponentStyleComposable {
	containerClassValues: ShallowRef<string>;
	inputClassValues: ShallowRef<string>;
	inputContainerClassValues: ShallowRef<string>;
	prefixIconClassValues: ShallowRef<string>;
	suffixIconClassValues: ShallowRef<string>;
	labelContainerClassValues: ShallowRef<string>;
	labelClassValues: ShallowRef<string>;
	requiredIndicatorClassValues: ShallowRef<string>;
	helperContainerClassValues: ShallowRef<string>;
	errorContainerClassValues: ShallowRef<string>;
	iconSize: ShallowRef<BoIconSize>;
	labelFontSize: ShallowRef<BoFontSize>;
	hintFontSize: ShallowRef<BoFontSize>;
	showPasswordToggle: ShallowRef<boolean>;
}

/**
 * Base classes for the input container
 */
const BO_INPUT_CONTAINER_BASE_CLASSES =
	/*tw*/ 'relative flex w-full items-center rounded-md border transition duration-200 shadow-sm';

/**
 * Base classes for the input element
 */
const BO_INPUT_BASE_CLASSES =
	/*tw*/ 'w-full flex-1 bg-transparent text-sm font-normal border-none outline-none text-neutral-800 placeholder:text-neutral-400 dark:text-white dark:placeholder:text-neutral-500';

export const BO_INPUT_SIZE_STYLE = {
	sm: /*tw*/ 'h-9',
	md: /*tw*/ 'h-10',
	lg: /*tw*/ 'h-11',
} as const satisfies BoInputSizeStyleMap;

export const BO_INPUT_PADDING_STYLE: Record<BoInputSize, string> = {
	sm: /*tw*/ 'py-2 px-3',
	md: /*tw*/ 'py-2.5 px-3.5',
	lg: /*tw*/ 'py-2.5 px-4',
} as const;

export const BO_INPUT_STATE_STYLE = {
	default:
		/*tw*/ 'border-neutral-300 focus-within:border-blue-500 hover:border-neutral-400 dark:border-neutral-600 dark:focus-within:border-blue-400 dark:hover:border-neutral-500',
	valid:
		/*tw*/ 'border-green-500 focus-within:border-green-600 hover:border-green-600 dark:border-green-500 dark:focus-within:border-green-400',
	invalid:
		/*tw*/ 'border-red-500 focus-within:border-red-600 hover:border-red-600 dark:border-red-500 dark:focus-within:border-red-400',
} as const satisfies BoInputVariantStyleMap;

export const BO_INPUT_VARIANT_STYLE = {
	default: /*tw*/ 'bg-white dark:bg-neutral-800',
	filled: /*tw*/ 'bg-neutral-100 dark:bg-neutral-700',
} as const;

export const BO_INPUT_DISABLED_STYLE =
	/*tw*/ 'cursor-not-allowed bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700';

export const useBoInput = (
	props: BoInputProps,
	options?: { modelValue?: string; passwordVisible?: boolean },
): UseBoInput => {
	const { merge } = useTailwind();

	const hasPills = computed<boolean>(() => {
		return !!props.pills && props.pills.length > 0;
	});

	const iconSize = computed<BoIconSize>(() => {
		switch (props.size) {
			case 'sm':
				return 'sm';
			case 'lg':
				return 'lg';
			default:
				return 'default';
		}
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return 'sm';
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return 'sm';
	});

	const showPasswordToggle = computed<boolean>(() => {
		return (
			props.type === 'password' &&
			!props.disabled &&
			!!options?.modelValue &&
			!!props.revealPassword
		);
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses = [
			BO_INPUT_CONTAINER_BASE_CLASSES,
			BO_INPUT_VARIANT_STYLE[props.variant || 'default'],
			BO_INPUT_STATE_STYLE[props.state || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(BO_INPUT_DISABLED_STYLE);
		}

		if (!hasPills.value) {
			baseClasses.push(BO_INPUT_SIZE_STYLE[props.size || 'md']);
		} else {
			baseClasses.push('h-auto min-h-10');
		}

		return merge(...baseClasses);
	});

	const inputClassValues = computed<string>(() => {
		const classes = [BO_INPUT_BASE_CLASSES];

		if (hasPills.value) {
			classes.push('min-w-[100px]');
		}

		return merge(...classes);
	});

	const inputContainerClassValues = computed<string>(() => {
		const classes = [
			'flex max-h-[124px] w-full gap-1.5 overflow-y-auto',
			BO_INPUT_PADDING_STYLE[props.size || 'md'],
		];

		if (props.horizontalScroll) {
			classes.push('scrollbar-none flex-nowrap overflow-x-auto');
		} else {
			classes.push('flex-wrap');
		}

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push('ml-8');
		}

		if ((props.suffixIcon && props.suffixIcon !== 'none') || showPasswordToggle.value) {
			classes.push('mr-8');
		}

		return merge(...classes);
	});

	const prefixIconClassValues = computed<string>(() => {
		return merge('absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400');
	});

	const suffixIconClassValues = computed<string>(() => {
		return merge(
			'absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400',
		);
	});

	const labelContainerClassValues = computed<string>(() => {
		return merge('flex justify-between gap-2');
	});

	const labelClassValues = computed<string>(() => {
		return merge('mb-1 flex items-center gap-1');
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return merge('pl-0.5 text-red-500');
	});

	const helperContainerClassValues = computed<string>(() => {
		return merge('mt-1 flex flex-col gap-1');
	});

	const errorContainerClassValues = computed<string>(() => {
		return merge('flex items-center gap-1');
	});

	const classValues = computed<string>(() => {
		return merge('bo-input relative flex w-full flex-col transition-all duration-200');
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	return {
		containerClassValues,
		inputClassValues,
		inputContainerClassValues,
		prefixIconClassValues,
		suffixIconClassValues,
		labelContainerClassValues,
		labelClassValues,
		requiredIndicatorClassValues,
		helperContainerClassValues,
		errorContainerClassValues,
		iconSize,
		labelFontSize,
		hintFontSize,
		showPasswordToggle,
		classValues,
		styleValues,
	};
};
