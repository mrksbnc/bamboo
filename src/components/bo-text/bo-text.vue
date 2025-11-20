<template>
	<p
		:id="id"
		:role="role"
		:lang="lang"
		:style="boTextStyle"
		:class="componentClasses"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		{{ formattedStr }}
	</p>
</template>

<script lang="ts" setup>
	import { ColorService } from '@/services/color-service';
	import { IdentityService } from '@/services/identity-service.js';
	import { AriaLive } from '@/shared/accessibility';
	import type { ConditionalCssProperties } from '@/shared/css';
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

	const formattedStr = computed<string>(() => {
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
			return {
				color: ColorService.instance.getValidCssColor(props.customColor),
			};
		}

		// Don't set color here - let CSS variants handle it
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

	const componentClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-text': true,
			[`bo-text--variant-${props.variant}`]: true,
			[`bo-text--size-${props.fontSize}`]: true,
			[`bo-text--align-${props.textAlign}`]: true,
			[`bo-text--weight-${props.fontWeight}`]: true,
			[`bo-text--whitespace-${props.whiteSpace}`]: true,
			[`bo-text--font-family-${props.fontFamily}`]: true,
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

		/* Color variants - using tokens from components.css */
		&--variant-default {
			color: var(--text-default);
		}

		&--variant-primary {
			color: var(--text-primary);
		}

		&--variant-secondary {
			color: var(--text-secondary);
		}

		&--variant-disabled {
			color: var(--text-muted);
		}

		&--variant-success {
			color: var(--text-success);
		}

		&--variant-warning {
			color: var(--text-warning);
		}

		&--variant-danger {
			color: var(--text-danger);
		}

		&--variant-light {
			color: var(--text-light);
		}

		&--variant-dark {
			color: var(--text-dark);
		}

		&--variant-current {
			color: currentcolor;
		}

		&--variant-inherit {
			color: inherit;
		}

		/* Font sizes with line heights - direct values */
		&--size-xs {
			font-size: 0.75rem; /* 12px */
			line-height: 1.33;
		}

		&--size-sm {
			font-size: 0.875rem; /* 14px */
			line-height: 1.43;
		}

		&--size-default {
			font-size: 1rem; /* 16px */
			line-height: 1.5;
		}

		&--size-lg {
			font-size: 1.125rem; /* 18px */
			line-height: 1.56;
		}

		&--size-xl {
			font-size: 1.25rem; /* 20px */
			line-height: 1.4;
		}

		&--size-2xl {
			font-size: 1.5rem; /* 24px */
			line-height: 1.33;
		}

		&--size-3xl {
			font-size: 1.875rem; /* 30px */
			line-height: 1.2;
		}

		&--size-4xl {
			font-size: 2.25rem; /* 36px */
			line-height: 1.11;
		}

		&--size-5xl {
			font-size: 3rem; /* 48px */
			line-height: 1;
		}

		&--size-6xl {
			font-size: 3.75rem; /* 60px */
			line-height: 1;
		}

		&--size-7xl {
			font-size: 4.5rem; /* 72px */
			line-height: 1;
		}

		&--size-8xl {
			font-size: 6rem; /* 96px */
			line-height: 1;
		}

		&--size-9xl {
			font-size: 8rem; /* 128px */
			line-height: 1;
		}

		/* Font weights - direct values */
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

		/* Text alignment */
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

		/* White space */
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

		/* Font families */
		&--font-family-sans {
			font-family:
				ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
				'Segoe UI Symbol', 'Noto Color Emoji';
		}

		&--font-family-mono {
			font-family:
				ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
				monospace;
		}

		&--font-family-serif {
			font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
		}

		&--font-family-inherit {
			font-family: inherit;
		}

		/* Text transform */
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
