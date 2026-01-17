import { computed, ShallowRef, StyleValue } from 'vue';
import { BoInputProps } from '../components/bo-input';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoIconSize } from '../components/bo-icon';
import { BoFontSize } from '../components/bo-text';
import { INPUT_MANIFEST } from '../manifests/input.manifest';

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

export const useBoInput = (
	props: BoInputProps,
	options?: { modelValue?: string; passwordVisible?: boolean },
): UseBoInput => {
	const { merge } = useTailwind();

	const hasPills = computed<boolean>(() => {
		return !!props.pills && props.pills.length > 0;
	});

	const iconSize = computed<BoIconSize>(() => {
		return INPUT_MANIFEST.icons.size[props.size || 'md'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.helpers.fontSize;
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
			INPUT_MANIFEST.container.base,
			INPUT_MANIFEST.variant[props.variant || 'default'],
			INPUT_MANIFEST.state[props.state || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(INPUT_MANIFEST.container.disabled);
		}

		if (!hasPills.value) {
			baseClasses.push(INPUT_MANIFEST.size[props.size || 'md']);
		} else {
			baseClasses.push('h-auto min-h-10');
		}

		return merge(...baseClasses);
	});

	const inputClassValues = computed<string>(() => {
		const classes = [INPUT_MANIFEST.input.base];

		if (hasPills.value) {
			classes.push(INPUT_MANIFEST.input.withPills);
		}

		return merge(...classes);
	});

	const inputContainerClassValues = computed<string>(() => {
		const classes = [
			INPUT_MANIFEST.inputContainer.base,
			INPUT_MANIFEST.padding[props.size || 'md'],
		];

		if (props.horizontalScroll) {
			classes.push(INPUT_MANIFEST.inputContainer.horizontalScroll);
		} else {
			classes.push(INPUT_MANIFEST.inputContainer.flexWrap);
		}

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push(INPUT_MANIFEST.inputContainer.withPrefixIcon);
		}

		if ((props.suffixIcon && props.suffixIcon !== 'none') || showPasswordToggle.value) {
			classes.push(INPUT_MANIFEST.inputContainer.withSuffixIcon);
		}

		return merge(...classes);
	});

	const prefixIconClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.icons.prefix);
	});

	const suffixIconClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.icons.suffix);
	});

	const labelContainerClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.labels.container);
	});

	const labelClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.labels.label);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.labels.required);
	});

	const helperContainerClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.helpers.container);
	});

	const errorContainerClassValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.helpers.error);
	});

	const classValues = computed<string>(() => {
		return merge(INPUT_MANIFEST.base);
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
