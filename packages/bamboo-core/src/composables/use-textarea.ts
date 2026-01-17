import { computed, ShallowRef, StyleValue } from 'vue';
import { BoTextareaProps } from '../definitions/bo-textarea';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoIconSize } from '../definitions/bo-icon';
import { BoFontSize } from '../definitions/bo-text';
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
		return TEXTAREA_MANIFEST.styles.icons.size[props.size || 'md'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.styles.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.styles.helpers.fontSize;
	});

	const iconPositionClasses = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.icons.prefix[props.size || 'md']);
	});

	const suffixIconPositionClasses = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.icons.suffix[props.size || 'md']);
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses = [
			TEXTAREA_MANIFEST.styles.container.base,
			TEXTAREA_MANIFEST.styles.variant[props.variant || 'default'],
			TEXTAREA_MANIFEST.styles.state[props.state || 'default'],
		];

		if (props.disabled) {
			baseClasses.push(TEXTAREA_MANIFEST.styles.container.disabled);
		}

		if (props.expand) {
			baseClasses.push(TEXTAREA_MANIFEST.styles.container.expand);
		}

		return merge(...baseClasses);
	});

	const textareaClassValues = computed<string>(() => {
		const classes = [
			TEXTAREA_MANIFEST.styles.textarea.base,
			TEXTAREA_MANIFEST.styles.padding[props.size || 'md'],
		];

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.withPrefixIcon);
		}

		if (props.suffixIcon && props.suffixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.withSuffixIcon);
		}

		if (props.expand) {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.expand);
		}

		if (props.resizable) {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.resizable);
		}

		return merge(...classes);
	});

	const labelContainerClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.labels.container);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.labels.required);
	});

	const errorContainerClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.helpers.error);
	});

	const hintClassValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.helpers.hint);
	});

	const classValues = computed<string>(() => {
		return merge(TEXTAREA_MANIFEST.styles.base);
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
