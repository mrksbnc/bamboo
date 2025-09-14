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
import { computed, StyleValue } from 'vue';
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
	fontSize: () => BoFontSize.Default,
	fontFamily: () => BoFontFamily.Sans,
	variant: () => BoTextVariant.Default,
	fontWeight: () => BoFontWeight.Regular,
	whiteSpace: () => BoTextWhiteSpace.Normal,
	ariaLive: () => AriaLive.Polite,
});

const ariaLabel = computed<string>(() => props.ariaLabel || props.value);
const role = computed<string>(() => props.role ?? 'text');

const fontFamily = computed<StyleValue>(() => {
	switch (props.fontFamily) {
		case BoFontFamily.Sans:
			return {
				fontFamily:
					"ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
			};
		case BoFontFamily.Mono:
			return {
				fontFamily:
					"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
			};
		case BoFontFamily.Serif:
			return {
				fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
			};
		case BoFontFamily.Inherit:
		default:
			return {
				fontFamily: 'inherit',
			};
	}
});

const fontSize = computed<StyleValue>(() => {
	switch (props.fontSize) {
		case BoFontSize.XS:
			return {
				fontSize: '0.625rem' /* 10px */,
				lineHeight: (1 / 0.625).toFixed(2),
			};
		case BoFontSize.SM:
			return {
				fontSize: '0.75rem' /* 12px */,
				lineHeight: (1 / 0.75).toFixed(2),
			};
		case BoFontSize.LG:
			return {
				fontSize: '1rem' /* 16px */,
				lineHeight: (1.5 / 1).toFixed(2),
			};

		case BoFontSize.XL:
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
		case BoFontSize.Default:
		default:
			return {
				fontSize: '0.875rem' /* 14px */,
				lineHeight: (1.25 / 0.875).toFixed(2),
			};
	}
});

const fontWeight = computed<StyleValue>(() => {
	switch (props.fontWeight) {
		case BoFontWeight.Thin:
			return {
				fontWeight: 100,
			};
		case BoFontWeight.ExtraLight:
			return {
				fontWeight: 200,
			};
		case BoFontWeight.Light:
			return {
				fontWeight: 300,
			};
		case BoFontWeight.Medium:
			return {
				fontWeight: 500,
			};
		case BoFontWeight.Semibold:
			return {
				fontWeight: 600,
			};
		case BoFontWeight.Bold:
			return {
				fontWeight: 700,
			};
		case BoFontWeight.Extrabold:
			return {
				fontWeight: 800,
			};
		case BoFontWeight.Black:
			return {
				fontWeight: 900,
			};
		case BoFontWeight.Regular:
		default:
			return {
				fontWeight: 400,
			};
	}
});

const textColor = computed<StyleValue>(() => {
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
			console.warn(`
				The custom color "${props.customColor}" is not a valid color definition.
				Valid color definitions are:
				- a variable name (e.g. --my-color)
				- a hex color (e.g. #ff0000)
				- an rgb color (e.g. rgb(255, 0, 0))
				- an rgba color (e.g. rgba(255, 0, 0, 0.5))

				The custom color will be ignored and currentColor will be used instead.
			`);

			return {
				color: 'currentcolor',
			};
		}
	}

	switch (props.variant) {
		case BoTextVariant.Default:
			return {
				color: 'var(--neutral-950)',
			};
		case BoTextVariant.Primary:
			return {
				color: 'var(--blue-600)',
			};
		case BoTextVariant.Secondary:
			return {
				color: 'var(--neutral-600)',
			};
		case BoTextVariant.Disabled:
			return {
				color: 'var(--neutral-400)',
			};
		case BoTextVariant.Success:
			return {
				color: 'var(--green-600)',
			};
		case BoTextVariant.Warning:
			return {
				color: 'var(--yellow-500)',
			};
		case BoTextVariant.Danger:
			return {
				color: 'var(--red-600)',
			};
		case BoTextVariant.Light:
			return {
				color: 'var(--neutral-50)',
			};
		case BoTextVariant.Current:
			return {
				color: 'currentColor',
			};
		case BoTextVariant.Inherit:
		default:
			return {
				color: 'inherit',
			};
	}
});

const textAlign = computed<StyleValue>(() => {
	switch (props.textAlign) {
		case BoTextAlign.Center:
			return {
				textAlign: 'center',
			};
		case BoTextAlign.Right:
			return {
				textAlign: 'right',
			};
		case BoTextAlign.Justify:
			return {
				textAlign: 'justify',
			};
		case BoTextAlign.Left:
		default:
			return {
				textAlign: 'left',
			};
	}
});

const cursor = computed<StyleValue>(() => {
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

const whiteSpace = computed<StyleValue>(() => {
	switch (props.whiteSpace) {
		case BoTextWhiteSpace.Nowrap:
			return {
				whiteSpace: 'nowrap',
			};
		case BoTextWhiteSpace.Pre:
			return {
				whiteSpace: 'pre',
			};
		case BoTextWhiteSpace.PreLine:
			return {
				whiteSpace: 'pre-line',
			};
		case BoTextWhiteSpace.PreWrap:
			return {
				whiteSpace: 'pre-wrap',
			};
		case BoTextWhiteSpace.BreakSpaces:
			return {
				whiteSpace: 'break-spaces',
			};
		case BoTextWhiteSpace.Normal:
		default:
			return {
				whiteSpace: 'normal',
			};
	}
});

const maxLines = computed<StyleValue>(() => {
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
	return {
		...fontFamily,
		...fontSize,
		...fontWeight,
		...textColor,
		...textAlign,
		...whiteSpace,
		...maxLines,
		...cursor,
	};
});
</script>
