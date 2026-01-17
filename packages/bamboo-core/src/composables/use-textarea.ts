import { computed, ShallowRef, StyleValue } from 'vue';
import { BoTextareaProps } from '../components/bo-textarea';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoIconSize } from '../components/bo-icon';
import { BoFontSize } from '../components/bo-text';
import { TEXTAREA_MANIFEST } from '../manifests/textarea.manifest';

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

export const useBoTextarea = (props: BoTextareaProps): UseBoTextarea => {
	const { merge } = useTailwind();

	const iconSize = computed<BoIconSize>(() => {
		return TEXTAREA_MANIFEST.icons.size[props.size || 'md'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.helpers.fontSize;
	});

	const iconPositionClasses = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.icons.prefix[props.size || 'md']);
	});

	const suffixIconPositionClasses = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.icons.suffix[props.size || 'md']);
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses = [
			TEXTAREA_MANIFEST.container.base,
			TEXTAREA_MANIFEST.variant[props.variant || 'default'],
			TEXTAREA_MANIFEST.state[props.state || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(TEXTAREA_MANIFEST.container.disabled);
		}

		if (props.expand) {
			baseClasses.push(TEXTAREA_MANIFEST.container.expand);
		}

		return merge(...baseClasses);
	});

	const textareaClassValues = computed<string>(() => {
		const classes = [
			TEXTAREA_MANIFEST.textarea.base,
			TEXTAREA_MANIFEST.padding[props.size || 'md'],
		];

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.textarea.withPrefixIcon);
		}

		if (props.suffixIcon && props.suffixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.textarea.withSuffixIcon);
		}

		if (props.expand) {
			classes.push(TEXTAREA_MANIFEST.textarea.expand);
		}

		if (props.resizable) {
			classes.push(TEXTAREA_MANIFEST.textarea.resizable);
		}

		return merge(...classes);
	});

	const labelContainerClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.labels.container);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.labels.required);
	});

	const errorContainerClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.helpers.error);
	});

	const hintClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.helpers.hint);
	});

	const classValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.base);
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
