<template>
	<p
		:id="id"
		:role="role"
		:lang="lang"
		:style="boTextStyle"
		:class="[componentBaseClasses, customCssClass]"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		{{ processedValue }}
	</p>
</template>

<script lang="ts" setup>
	import type { ConditionalCssProperties } from '@/core';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service.js';
	import { AriaLive } from '@/shared/accessibility';
	import { computed, type CSSProperties, type StyleValue } from 'vue';

	import {
		BoFontFamily,
		BoFontSize,
		BoFontWeight,
		type BoTextProps,
		BoTextTransform,
		BoTextVariant,
		BoTextWhiteSpace,
	} from './bo-text';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-text'),
		lang: 'en',
		maxLines: 'none',
		fontSize: () => BoFontSize.default,
		fontFamily: () => BoFontFamily.sans,
		variant: () => BoTextVariant.default,
		fontWeight: () => BoFontWeight.regular,
		textTransform: () => BoTextTransform.none,
		whiteSpace: () => BoTextWhiteSpace.normal,
		ariaLive: () => AriaLive.polite,
	});

	const ariaLabel = computed<string>(() => props.ariaLabel || props.value);
	const role = computed<string>(() => props.role ?? 'text');

	const processedValue = computed<string>(() => {
		switch (props.textTransform) {
			case BoTextTransform.capitalize:
				/**
				 * The \b anchor ensures that the first character of the word is matched, and the \w anchor ensures
				 * that the word boundary isn't crossed.
				 * \g is used to replace all occurrences of the matched characters not just the first occurrence.
				 */
				return props.value.replace(/\b\w/g, (char) => char.toUpperCase());
			case BoTextTransform.uppercase:
				return props.value.toUpperCase();
			case BoTextTransform.lowercase:
				return props.value.toLowerCase();
			case BoTextTransform.none:
			default:
				return props.value;
		}
	});

	const textColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			return ColorService.instance.getCustomColorStyle(props.customColor);
		}

		return {};
	});

	const cursor = computed<CSSProperties>(() => {
		if (props.cursor) {
			return {
				cursor: props.cursor,
			};
		}

		if (props.clickable) {
			return {
				cursor: 'pointer',
			};
		}

		return {
			cursor: 'default',
		};
	});

	const maxLines = computed<CSSProperties>(() => {
		if (typeof props.maxLines === 'number') {
			return {
				overflow: 'hidden',
				display: '-webkit-box',
				textOverflow: 'ellipsis',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: props.maxLines,
			};
		}

		return {};
	});

	const boTextStyle = computed<StyleValue>(() => {
		const style: StyleValue = {
			...textColor.value,
			...maxLines.value,
			...cursor.value,
		};

		return style;
	});

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-text': true,
			[`bo-text--${props.variant}`]: true,
			[`bo-text--size-${props.fontSize}`]: true,
			[`bo-text--align-${props.textAlign}`]: props.textAlign !== undefined,
			[`bo-text--weight-${props.fontWeight}`]: true,
			[`bo-text--whitespace-${props.whiteSpace}`]: true,
			[`bo-text--font-${props.fontFamily}`]: true,
			[`bo-text--transform-${props.textTransform}`]: true,
		};
	});
</script>

<style scoped lang="scss">
	p {
		margin: 0;
	}

	.bo-text {
		box-sizing: border-box;
		vertical-align: middle;

		&--default {
			color: var(--bo-text-color-default);
		}

		&--primary {
			color: var(--bo-text-color-primary);
		}

		&--secondary {
			color: var(--bo-text-color-secondary);
		}

		&--disabled {
			color: var(--bo-text-color-disabled);
		}

		&--success {
			color: var(--bo-text-color-success);
		}

		&--warning {
			color: var(--bo-text-color-warning);
		}

		&--danger {
			color: var(--bo-text-color-danger);
		}

		&--light {
			color: var(--bo-text-color-light);
		}

		&--dark {
			color: var(--bo-text-color-dark);
		}

		&--current {
			color: var(--bo-text-color-current);
		}

		&--inherit {
			color: var(--bo-text-color-inherit);
		}

		&--size-xs {
			font-size: 0.625rem;
			line-height: 1.25;
		}

		&--size-sm {
			font-size: 0.75rem;
			line-height: 1.25;
		}

		&--size-lg {
			font-size: 1rem;
			line-height: 1.5;
		}

		&--size-xl {
			font-size: 1.125rem;
			line-height: 1.75;
		}

		&--size-2xl {
			font-size: 1.25rem;
			line-height: 1.75;
		}

		&--size-3xl {
			font-size: 1.5rem;
			line-height: 2;
		}

		&--size-4xl {
			font-size: 1.875rem;
			line-height: 2.25;
		}

		&--size-5xl {
			font-size: 2.25rem;
			line-height: 2.5;
		}

		&--size-6xl {
			font-size: 3rem;
			line-height: 1;
		}

		&--size-7xl {
			font-size: 3.75rem;
			line-height: 1;
		}

		&--weight-thin {
			font-weight: 100;
		}

		&--weight-extra-light {
			font-weight: 200;
		}

		&--weight-light {
			font-weight: 300;
		}

		&--weight-medium {
			font-weight: 500;
		}

		&--weight-semibold {
			font-weight: 600;
		}

		&--weight-bold {
			font-weight: 700;
		}

		&--weight-extra-bold {
			font-weight: 800;
		}

		&--weight-black {
			font-weight: 900;
		}

		&--align-center {
			text-align: center;
		}

		&--align-right {
			text-align: right;
		}

		&--align-justify {
			text-align: justify;
		}

		&--align-left {
			text-align: left;
		}

		&--whitespace-normal {
			white-space: normal;
		}

		&--whitespace-nowrap {
			white-space: nowrap;
		}

		&--whitespace-pre {
			white-space: pre;
		}

		&--whitespace-pre-line {
			white-space: pre-line;
		}

		&--whitespace-pre-wrap {
			white-space: pre-wrap;
		}

		&--whitespace-break-spaces {
			white-space: break-spaces;
		}

		&--font-sans {
			font-family:
				ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
				'Segoe UI Symbol', 'Noto Color Emoji';
		}

		&--font-mono {
			font-family:
				ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
				monospace;
		}

		&--font-serif {
			font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		}

		&--font-inherit {
			font-family: inherit;
		}

		&--transform-none {
			text-transform: none;
		}

		&--transform-capitalize {
			text-transform: capitalize;
		}

		&--transform-uppercase {
			text-transform: uppercase;
		}

		&--transform-lowercase {
			text-transform: lowercase;
		}
	}
</style>
