import { computed, ShallowRef, StyleValue } from 'vue';
import {
	BoTextareaProps,
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
} from '../components/bo-textarea';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoIconSize } from '../components/bo-icon';
import { BoFontSize } from '../components/bo-text';

type BoTextareaSizeStyleMap = Record<BoTextareaSize, string>;
type BoTextareaStateStyleMap = Record<BoTextareaState, string>;
type BoTextareaVariantStyleMap = Record<BoTextareaVariant, string>;

export interface UseBoTextarea extends ComponentStyleComposable {
	containerClassValues: ShallowRef<string>;
	textareaClassValues: ShallowRef<string>;
	iconSize: ShallowRef<BoIconSize>;
	labelFontSize: ShallowRef<BoFontSize>;
	hintFontSize: ShallowRef<BoFontSize>;
	iconPositionClasses: ShallowRef<string>;
	suffixIconPositionClasses: ShallowRef<string>;
	labelContainerClassValues: ShallowRef<string>;
	requiredIndicatorClassValues: ShallowRef<string>;
	errorContainerClassValues: ShallowRef<string>;
	hintClassValues: ShallowRef<string>;
}

const BO_TEXTAREA_CONTAINER_BASE_CLASSES =
	/*tw*/ 'relative flex w-full rounded-md border transition duration-200 shadow-sm';

const BO_TEXTAREA_BASE_CLASSES =
	/*tw*/ 'w-full resize-none rounded-md border-none bg-transparent text-base font-normal text-neutral-800 outline-none dark:text-white dark:placeholder:text-neutral-500';

const BO_TEXTAREA_PADDING_STYLE: BoTextareaSizeStyleMap = {
	sm: /*tw*/ 'p-2',
	md: /*tw*/ 'p-3',
	lg: /*tw*/ 'p-4',
} as const;

const BO_TEXTAREA_STATE_STYLE: BoTextareaStateStyleMap = {
	default:
		/*tw*/ 'border-neutral-300 focus-within:border-blue-500 hover:border-neutral-400 dark:border-neutral-600 dark:focus-within:border-blue-400',
	valid:
		/*tw*/ 'border-green-500 focus-within:border-green-600 dark:border-green-500 dark:focus-within:border-green-400',
	invalid:
		/*tw*/ 'border-red-500 focus-within:border-red-600 dark:border-red-500 dark:focus-within:border-red-400',
} as const;

const BO_TEXTAREA_VARIANT_STYLE: BoTextareaVariantStyleMap = {
	default: /*tw*/ 'bg-white dark:bg-neutral-800',
	filled: /*tw*/ 'bg-neutral-100 dark:bg-neutral-700',
} as const;

const BO_TEXTAREA_DISABLED_STYLE =
	/*tw*/ 'cursor-not-allowed bg-neutral-100 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700';

const BO_TEXTAREA_ICON_POSITION: BoTextareaSizeStyleMap = {
	sm: /*tw*/ 'left-3 top-2.5',
	md: /*tw*/ 'left-3 top-3',
	lg: /*tw*/ 'left-3.5 top-4',
} as const;

const BO_TEXTAREA_SUFFIX_ICON_POSITION: BoTextareaSizeStyleMap = {
	sm: /*tw*/ 'right-3 top-2.5',
	md: /*tw*/ 'right-3 top-3',
	lg: /*tw*/ 'right-3.5 top-4',
} as const;

export const useBoTextarea = (props: BoTextareaProps): UseBoTextarea => {
	const { merge } = useTailwind();

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

	const iconPositionClasses = computed<string>(() => {
		return merge(
			'absolute text-neutral-500 dark:text-neutral-400',
			BO_TEXTAREA_ICON_POSITION[props.size || 'md'],
		);
	});

	const suffixIconPositionClasses = computed<string>(() => {
		return merge(
			'absolute h-full text-neutral-500 dark:text-neutral-400',
			BO_TEXTAREA_SUFFIX_ICON_POSITION[props.size || 'md'],
		);
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses = [
			BO_TEXTAREA_CONTAINER_BASE_CLASSES,
			BO_TEXTAREA_VARIANT_STYLE[props.variant || 'default'],
			BO_TEXTAREA_STATE_STYLE[props.state || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(BO_TEXTAREA_DISABLED_STYLE);
		}

		if (props.expand) {
			baseClasses.push('flex-grow');
		}

		return merge(...baseClasses);
	});

	const textareaClassValues = computed<string>(() => {
		const classes = [BO_TEXTAREA_BASE_CLASSES, BO_TEXTAREA_PADDING_STYLE[props.size || 'md']];

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push('pl-10');
		}

		if (props.suffixIcon && props.suffixIcon !== 'none') {
			classes.push('pr-10');
		}

		if (props.expand) {
			classes.push('flex-grow');
		}

		if (props.resizable) {
			classes.push('resize-y');
		}

		return merge(...classes);
	});

	const labelContainerClassValues = computed<string>(() => {
		return merge('flex items-center justify-start pb-2');
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return merge('ml-1 text-sm font-medium text-red-500');
	});

	const errorContainerClassValues = computed<string>(() => {
		return merge('mt-1 flex items-center gap-1');
	});

	const hintClassValues = computed<string>(() => {
		return merge('mt-1');
	});

	const classValues = computed<string>(() => {
		return merge('flex flex-col transition-all duration-200');
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	return {
		containerClassValues,
		textareaClassValues,
		iconSize,
		labelFontSize,
		hintFontSize,
		iconPositionClasses,
		suffixIconPositionClasses,
		labelContainerClassValues,
		requiredIndicatorClassValues,
		errorContainerClassValues,
		hintClassValues,
		classValues,
		styleValues,
	};
};
