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

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-text': true,
			[`bo-text__variant--${props.variant}`]: true,
			[`bo-text__size--${props.fontSize}`]: true,
			[`bo-text__align--${props.textAlign}`]: true,
			[`bo-text__weight--${props.fontWeight}`]: true,
			[`bo-text__whitespace--${props.whiteSpace}`]: true,
			[`bo-text__font-family--${props.fontFamily}`]: true,
			[`bo-text__transform--${props.textTransform}`]: true,
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

		&__variant--default {
			color: currentcolor;
		}

		&__variant--primary {
			color: var(--blue-600);
		}

		&__variant--secondary {
			color: var(--neutral-600);
		}

		&__variant--disabled {
			color: var(--neutral-400);
		}

		&__variant--success {
			color: var(--green-600);
		}

		&__variant--warning {
			color: var(--yellow-500);
		}

		&__variant--danger {
			color: var(--red-600);
		}

		&__variant--light {
			color: var(--neutral-50);
		}

		&__variant--dark {
			color: var(--gray-950);
		}

		&__variant--current {
			color: currentcolor;
		}

		&__variant--inherit {
			color: inherit;
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
				font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
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
