<template>
	<p
		:id="id"
		:role="role"
		:lang="lang"
		:style="boTextStyle"
		:class="customCssClass"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		{{ value }}
	</p>
</template>

<script lang="ts" setup>
import { AriaLive } from '@/lib/bo-accessibility';
import { IdentityService } from '@/services/identity-service.js';
import { computed, CSSProperties, StyleValue } from 'vue';
import {
	BoFontFamily,
	BoFontSize,
	BoFontWeight,
	BoTextAlign,
	BoTextProps,
	BoTextVariant,
	BoTextWhiteSpace,
} from './bo-text';

const props = withDefaults(defineProps<BoTextProps>(), {
	id: IdentityService.instance.getComponentId('bo-text'),
	dataTestId: IdentityService.instance.getDataTestId('bo-text'),
	lang: 'en',
	maxLines: 'none',
	fontSize: () => BoFontSize.default,
	fontFamily: () => BoFontFamily.sans,
	variant: () => BoTextVariant.default,
	fontWeight: () => BoFontWeight.regular,
	whiteSpace: () => BoTextWhiteSpace.normal,
	ariaLive: () => AriaLive.polite,
});

const ariaLabel = computed<string>(() => props.ariaLabel || props.value);
const role = computed<string>(() => props.role ?? 'text');

const fontFamily = computed<CSSProperties>(() => {
	switch (props.fontFamily) {
		case BoFontFamily.sans:
			return {
				fontFamily:
					"ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
			};
		case BoFontFamily.mono:
			return {
				fontFamily:
					"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
			};
		case BoFontFamily.serif:
			return {
				fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
			};
		case BoFontFamily.inherit:
		default:
			return {
				fontFamily: 'inherit',
			};
	}
});

const fontSize = computed<CSSProperties>(() => {
	switch (props.fontSize) {
		case BoFontSize.xs:
			return {
				fontSize: '0.625rem' /* 10px */,
				lineHeight: (1 / 0.625).toFixed(2),
			};
		case BoFontSize.sm:
			return {
				fontSize: '0.75rem' /* 12px */,
				lineHeight: (1 / 0.75).toFixed(2),
			};
		case BoFontSize.lg:
			return {
				fontSize: '1rem' /* 16px */,
				lineHeight: (1.5 / 1).toFixed(2),
			};
		case BoFontSize.xl:
			return {
				fontSize: '1.125rem' /* 18px */,
				lineHeight: (1.75 / 1.125).toFixed(2),
			};
		case BoFontSize['2xl']:
			return {
				fontSize: '1.25rem' /* 20px */,
				lineHeight: (1.75 / 1.25).toFixed(2),
			};
		case BoFontSize['3xl']:
			return {
				fontSize: '1.5rem' /* 24px */,
				lineHeight: (2 / 1.5).toFixed(2),
			};
		case BoFontSize['4xl']:
			return {
				fontSize: '1.875rem' /* 30px */,
				lineHeight: (2.25 / 1.875).toFixed(2),
			};
		case BoFontSize['5xl']:
			return {
				fontSize: '2.25rem' /* 36px */,
				lineHeight: (2.5 / 2.25).toFixed(2),
			};
		case BoFontSize['6xl']:
			return {
				fontSize: '3rem' /* 48px */,
				lineHeight: 1,
			};
		case BoFontSize['7xl']:
			return {
				fontSize: '3.75rem' /* 60px */,
				lineHeight: 1,
			};
		case BoFontSize.default:
		default:
			return {
				fontSize: '0.875rem' /* 14px */,
				lineHeight: (1.25 / 0.875).toFixed(2),
			};
	}
});

const fontWeight = computed<CSSProperties>(() => {
	switch (props.fontWeight) {
		case BoFontWeight.thin:
			return {
				fontWeight: 100,
			};
		case BoFontWeight.extra_light:
			return {
				fontWeight: 200,
			};
		case BoFontWeight.light:
			return {
				fontWeight: 300,
			};
		case BoFontWeight.medium:
			return {
				fontWeight: 500,
			};
		case BoFontWeight.semibold:
			return {
				fontWeight: 600,
			};
		case BoFontWeight.bold:
			return {
				fontWeight: 700,
			};
		case BoFontWeight.extra_bold:
			return {
				fontWeight: 800,
			};
		case BoFontWeight.black:
			return {
				fontWeight: 900,
			};
		case BoFontWeight.regular:
		default:
			return {
				fontWeight: 400,
			};
	}
});

const textColor = computed<CSSProperties>(() => {
	if (props.customColor) {
		if (
			props.customColor.startsWith('var') ||
			props.customColor.startsWith('#') ||
			props.customColor.startsWith('oklch') ||
			props.customColor.startsWith('oklcha') ||
			props.customColor.startsWith('rgb') ||
			props.customColor.startsWith('rgba')
		) {
			return {
				color: props.customColor,
			};
		} else if (props.customColor.startsWith('--')) {
			/** CSS variable */
			return {
				color: `var(${props.customColor})`,
			};
		} else if (props.customColor?.length === 6) {
			/** Hex color without the leading # */
			return {
				color: `#${props.customColor}`,
			};
		} else {
			console.warn(
				`The custom color "${props.customColor}" is not a valid color definition.\n` +
				"Valid color definitions are:\n" +
				"- a variable name (e.g. --my-color)\n" +
				"- a hex color (e.g. #ff0000)\n" +
				"- an rgb color (e.g. rgb(255, 0, 0))\n" +
				"- an rgba color (e.g. rgba(255, 0, 0, 0.5))\n" +
				"\nThe custom color will be ignored and currentColor will be used instead."
			);
			return {
				color: 'currentcolor',
			};
		}
	}

	switch (props.variant) {
		case BoTextVariant.default:
			return {
				color: 'var(--neutral-950)',
			};
		case BoTextVariant.primary:
			return {
				color: 'var(--blue-600)',
			};
		case BoTextVariant.secondary:
			return {
				color: 'var(--neutral-600)',
			};
		case BoTextVariant.disabled:
			return {
				color: 'var(--neutral-400)',
			};
		case BoTextVariant.success:
			return {
				color: 'var(--green-600)',
			};
		case BoTextVariant.warning:
			return {
				color: 'var(--yellow-500)',
			};
		case BoTextVariant.danger:
			return {
				color: 'var(--red-600)',
			};
		case BoTextVariant.light:
			return {
				color: 'var(--neutral-50)',
			};
		case BoTextVariant.current:
			return {
				color: 'currentcolor',
			};
		case BoTextVariant.inherit:
		default:
			return {
				color: 'inherit',
			};
	}
});

const textAlign = computed<CSSProperties>(() => {
	switch (props.textAlign) {
		case BoTextAlign.center:
			return {
				textAlign: 'center',
			};
		case BoTextAlign.right:
			return {
				textAlign: 'right',
			};
		case BoTextAlign.justify:
			return {
				textAlign: 'justify',
			};
		case BoTextAlign.left:
		default:
			return {
				textAlign: 'left',
			};
	}
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

	if (props.selectable) {
		return {
			cursor: 'text',
		};
	}

	return {
		cursor: 'default',
	};
});

const whiteSpace = computed<CSSProperties>(() => {
	switch (props.whiteSpace) {
		case BoTextWhiteSpace.nowrap:
			return {
				whiteSpace: 'nowrap',
			};
		case BoTextWhiteSpace.pre:
			return {
				whiteSpace: 'pre',
			};
		case BoTextWhiteSpace.pre_line:
			return {
				whiteSpace: 'pre-line',
			};
		case BoTextWhiteSpace.pre_wrap:
			return {
				whiteSpace: 'pre-wrap',
			};
		case BoTextWhiteSpace.break_spaces:
			return {
				whiteSpace: 'break-spaces',
			};
		case BoTextWhiteSpace.normal:
		default:
			return {
				whiteSpace: 'normal',
			};
	}
});

const maxLines = computed<CSSProperties>(() => {
	if (typeof props.maxLines === 'number') {
		return {
			overflow: 'hidden',
			display: '-webkit-box',
			WebkitBoxOrient: 'vertical',
			WebkitLineClamp: props.maxLines,
		};
	}

	return {};
});

const boTextStyle = computed<StyleValue>(() => {
	const style: StyleValue = {
		...fontFamily.value,
		...fontSize.value,
		...fontWeight.value,
		...textColor.value,
		...textAlign.value,
		...whiteSpace.value,
		...maxLines.value,
		...cursor.value,
	};

	return style;
});
</script>
