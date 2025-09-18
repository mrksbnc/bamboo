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
			$style[`bo-text__transform--${props.textTransform}`],
			customCssClass,
		]"
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
	import { useColor } from '@/composables'
	import { AriaLive } from '@/lib/accessibility'
	import { IdentityService } from '@/services/identity-service.js'
	import { computed, type CSSProperties, type StyleValue } from 'vue'
	import {
		BoFontFamily,
		BoFontSize,
		BoFontWeight,
		type BoTextProps,
		BoTextTransform,
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
		textTransform: () => BoTextTransform.none,
		whiteSpace: () => BoTextWhiteSpace.normal,
		ariaLive: () => AriaLive.polite,
	})

	const { getCustomColorStyle } = useColor()

	const ariaLabel = computed<string>(() => props.ariaLabel || props.value)
	const role = computed<string>(() => props.role ?? 'text')

	const processedValue = computed<string>(() => {
		switch (props.textTransform) {
			case BoTextTransform.capitalize:
				return props.value.replace(/\b\w/g, (char) => char.toUpperCase())
			case BoTextTransform.uppercase:
				return props.value.toUpperCase()
			case BoTextTransform.lowercase:
				return props.value.toLowerCase()
			case BoTextTransform.none:
			default:
				return props.value
		}
	})

	const textColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			return getCustomColorStyle(props.customColor)
		}

		return {
			color: 'currentColor',
		}
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

		return {
			cursor: 'default',
		}
	})

	const maxLines = computed<CSSProperties>(() => {
		if (typeof props.maxLines === 'number') {
			return {
				overflow: 'hidden',
				display: '-webkit-box',
				textOverflow: 'ellipsis',
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

<style module lang="scss">
	.bo-text {
		box-sizing: border-box;
		vertical-align: middle;

		&__color {
			&--default {
				color: var(--neutral-900);
			}

			&--primary {
				color: var(--blue-600);
			}

			&--secondary {
				color: var(--neutral-600);
			}

			&--disabled {
				color: var(--neutral-400);
			}

			&--success {
				color: var(--green-600);
			}

			&--warning {
				color: var(--yellow-500);
			}

			&--danger {
				color: var(--red-600);
			}

			&--light {
				color: var(--neutral-50);
			}

			&--dark {
				color: var(--gray-950);
			}

			&--current {
				color: currentColor;
			}

			&--inherit {
				color: inherit;
			}
		}

		&__size {
			&--xs {
				font-size: 0.625rem;
				line-height: 1.25;
			}

			&--sm {
				font-size: 0.75rem;
				line-height: 1.25;
			}

			&--lg {
				font-size: 1rem;
				line-height: 1.5;
			}

			&--xl {
				font-size: 1.125rem;
				line-height: 1.75;
			}

			&--2xl {
				font-size: 1.25rem;
				line-height: 1.75;
			}

			&--3xl {
				font-size: 1.5rem;
				line-height: 2;
			}

			&--4xl {
				font-size: 1.875rem;
				line-height: 2.25;
			}

			&--5xl {
				font-size: 2.25rem;
				line-height: 2.5;
			}

			&--6xl {
				font-size: 3rem;
				line-height: 1;
			}

			&--7xl {
				font-size: 3.75rem;
				line-height: 1;
			}
		}

		&__weight {
			&--thin {
				font-weight: 100;
			}

			&--extra-light {
				font-weight: 200;
			}

			&--light {
				font-weight: 300;
			}

			&--medium {
				font-weight: 500;
			}

			&--semibold {
				font-weight: 600;
			}

			&--bold {
				font-weight: 700;
			}

			&--extra-bold {
				font-weight: 800;
			}

			&--black {
				font-weight: 900;
			}
		}

		&__align {
			&--center {
				text-align: center;
			}

			&--right {
				text-align: right;
			}

			&--justify {
				text-align: justify;
			}

			&--left {
				text-align: left;
			}
		}

		&__whitespace {
			&--normal {
				white-space: normal;
			}

			&--nowrap {
				white-space: nowrap;
			}

			&--pre {
				white-space: pre;
			}

			&--pre-line {
				white-space: pre-line;
			}

			&--pre-wrap {
				white-space: pre-wrap;
			}

			&--break-spaces {
				white-space: break-spaces;
			}
		}

		&__font-family {
			&--sans {
				font-family:
					ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
					'Segoe UI Symbol', 'Noto Color Emoji';
			}

			&--mono {
				font-family:
					ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
					monospace;
			}

			&--serif {
				font-family: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";
			}

			&--inherit {
				font-family: inherit;
			}
		}

		&__transform {
			&--none {
				text-transform: none;
			}

			&--capitalize {
				text-transform: capitalize;
			}

			&--uppercase {
				text-transform: uppercase;
			}

			&--lowercase {
				text-transform: lowercase;
			}
		}
	}
</style>
