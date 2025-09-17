<template>
	<p
		:id="id"
		:role="role"
		:lang="lang"
		:style="boTextStyle"
		:class="[
			$style['bo-text'],
			$style[`bo-text__color--${props.variant}`],
			$style[`bo-text__size--${props.fontSize}`],
			$style[`bo-text__align--${props.textAlign}`],
			$style[`bo-text__weight--${props.fontWeight}`],
			$style[`bo-text__whitespace--${props.whiteSpace}`],
			$style[`bo--text__font-family--${props.fontFamily}`],
			customCssClass,
		]"
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
	import { AriaLive } from '@/lib/accessibility'
	import { IdentityService } from '@/services/identity-service.js'
	import { computed, type CSSProperties, type StyleValue } from 'vue'
	import {
		BoFontFamily,
		BoFontSize,
		BoFontWeight,
		type BoTextProps,
		BoTextVariant,
		BoTextWhiteSpace,
	} from './bo-text'

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
	})

	const ariaLabel = computed<string>(() => props.ariaLabel || props.value)
	const role = computed<string>(() => props.role ?? 'text')

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
				}
			} else if (props.customColor.startsWith('--')) {
				/** CSS variable */
				return {
					color: `var(${props.customColor})`,
				}
			} else if (props.customColor?.length === 6) {
				/** Hex color without the leading # */
				return {
					color: `#${props.customColor}`,
				}
			} else {
				console.warn(
					`The custom color "${props.customColor}" is not a valid color definition.\n
					Valid color definitions are:\n
					- a variable name (e.g. --my-color)\n
					- a hex color (e.g. #ff0000)\n
					- an rgb color (e.g. rgb(255, 0, 0))\n
					- an rgba color (e.g. rgba(255, 0, 0, 0.5))\n
					\nThe custom color will be ignored and --neutral-950 will be used instead.`,
				)
				return {}
			}
		}

		return {}
	})

	const cursor = computed<CSSProperties>(() => {
		if (props.cursor) {
			return {
				cursor: props.cursor,
			}
		}

		if (props.clickable) {
			return {
				cursor: 'pointer',
			}
		}

		if (props.selectable) {
			return {
				cursor: 'text',
			}
		}

		return {
			cursor: 'default',
		}
	})

	const maxLines = computed<CSSProperties>(() => {
		if (typeof props.maxLines === 'number') {
			return {
				overflow: 'hidden',
				display: '-webkit-box',
				WebkitBoxOrient: 'vertical',
				WebkitLineClamp: props.maxLines,
			}
		}

		return {}
	})

	const boTextStyle = computed<StyleValue>(() => {
		const style: StyleValue = {
			...textColor.value,
			...maxLines.value,
			...cursor.value,
		}

		return style
	})
</script>

<style module>
	.bo-text {
		box-sizing: border-box;
		vertical-align: middle;
	}

	.bo-text__color--default {
		color: var(--neutral-950);
	}

	.bo-text__color--primary {
		color: var(--blue-600);
	}

	.bo-text__color--secondary {
		color: var(--neutral-600);
	}

	.bo-text__color--disabled {
		color: var(--neutral-400);
	}

	.bo-text__color--success {
		color: var(--green-600);
	}

	.bo-text__color--warning {
		color: var(--yellow-500);
	}

	.bo-text__color--danger {
		color: var(--red-600);
	}

	.bo-text__color--light {
		color: var(--neutral-50);
	}

	.bo-text__color--current {
		color: currentColor;
	}

	.bo-text__color--inherit {
		color: inherit;
	}

	.bo-text__size--xs {
		font-size: 0.625rem;
		line-height: 1.25;
	}

	.bo-text__size--sm {
		font-size: 0.75rem;
		line-height: 1.25;
	}

	.bo-text__size--lg {
		font-size: 1rem;
		line-height: 1.5;
	}

	.bo-text__size--xl {
		font-size: 1.125rem;
		line-height: 1.75;
	}

	.bo-text__size--2xl {
		font-size: 1.25rem;
		line-height: 1.75;
	}

	.bo-text__size--3xl {
		font-size: 1.5rem;
		line-height: 2;
	}

	.bo-text__size--4xl {
		font-size: 1.875rem;
		line-height: 2.25;
	}

	.bo-text__size--5xl {
		font-size: 2.25rem;
		line-height: 2.5;
	}

	.bo-text__size--6xl {
		font-size: 3rem;
		line-height: 1;
	}

	.bo-text__size--7xl {
		font-size: 3.75rem;
		line-height: 1;
	}

	.bo-text__weight--thin {
		font-weight: 100;
	}

	.bo-text__weight--extra-light {
		font-weight: 200;
	}

	.bo-text__weight--light {
		font-weight: 300;
	}

	.bo-text__weight--medium {
		font-weight: 500;
	}

	.bo-text__weight--semibold {
		font-weight: 600;
	}

	.bo-text__weight--bold {
		font-weight: 700;
	}

	.bo-text__weight--extra-bold {
		font-weight: 800;
	}

	.bo-text__weight--black {
		font-weight: 900;
	}

	.bo-text__align--center {
		text-align: center;
	}

	.bo-text__align--right {
		text-align: right;
	}

	.bo-text__align--justify {
		text-align: justify;
	}

	.bo-text__align--left {
		text-align: left;
	}

	.bo-text__whitespace--normal {
		white-space: normal;
	}

	.bo-text__whitespace--nowrap {
		white-space: nowrap;
	}

	.bo-text__whitespace--pre {
		white-space: pre;
	}

	.bo-text__whitespace--pre-line {
		white-space: pre-line;
	}

	.bo-text__whitespace--pre-wrap {
		white-space: pre-wrap;
	}

	.bo-text__whitespace--break-spaces {
		white-space: break-spaces;
	}

	.bo-text__font-family--sans {
		font-family:
			ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}

	.bo-text__font-family--mono {
		font-family:
			ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
			monospace;
	}

	.bo-text__font-family--serif {
		font-family: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
	}

	.bo-text__font-family--inherit {
		font-family: inherit;
	}
</style>
