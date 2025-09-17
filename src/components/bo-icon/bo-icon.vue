<template>
	<component
		v-if="iconComponent"
		:is="iconComponent"
		v-bind="iconComponentPropConstruct"
		:class="[
			customCssClass,
			$style['bo-icon'],
			$style[`bo-icon--${size}`],
			$style[`bo-icon--${variant}`],
		]"
	/>
</template>

<script setup lang="ts">
	import { IdentityService } from '@/services'
	import { computed, type CSSProperties, type FunctionalComponent, type SVGAttributes } from 'vue'
	import { BoIconVariant, IconToComponentConstruct, type BoIconProps } from './bo-icon'

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: IdentityService.instance.getDataTestId('bo-icon'),
		size: 24,
		variant: () => BoIconVariant.default,
		decorative: true,
	})

	const iconComponent = computed<FunctionalComponent<SVGAttributes>>(() => {
		return IconToComponentConstruct[props.icon] ?? IconToComponentConstruct.none
	})

	const role = computed<string>(() => {
		return props.role ?? 'img'
	})

	const ariaHidden = computed<boolean | undefined>(() => {
		return props.decorative ? true : undefined
	})

	const ariaLabel = computed<string>(() => {
		return props.title ?? props.icon
	})

	const cursor = computed<CSSProperties>(() => {
		if (props.cursor) {
			return {
				cursor: props.cursor,
			}
		}

		return {
			cursor: 'default',
		}
	})

	const iconColorStyle = computed<CSSProperties>(() => {
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
				console.warn(`The custom color "${props.customColor}" is not a valid color definition.
				Valid color definitions are:
				- a variable name (e.g. --my-color)
				- a hex color (e.g. #ff0000)
				- an rgb color (e.g. rgb(255, 0, 0))
				- an rgba color (e.g. rgba(255, 0, 0, 0.5))

				The custom color will be ignored and currentColor will be used instead.
			`)
			}
		}

		return {
			color: 'currentColor',
		}
	})

	const iconComponentPropConstruct = {
		id: props.id ?? IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: props.dataTestId,
		role: role.value,
		style: {
			...cursor.value,
			...iconColorStyle.value,
		},
		'aria-hidden': ariaHidden.value,
		'aria-label': ariaLabel.value,
	}
</script>

<style module>
	.bo-icon {
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
	}

	.bo-icon--default {
		fill: currentColor;
	}

	.bo-icon--primary {
		fill: var(--blue-500);
	}

	.bo-icon--secondary {
		fill: var(--gray-500);
	}

	.bo-icon--success {
		fill: var(--green-500);
	}

	.bo-icon--warning {
		fill: var(--orange-500);
	}

	.bo-icon--danger {
		fill: var(--red-500);
	}

	.bo-icon--light {
		fill: var(--gray-100);
	}

	.bo-icon--dark {
		fill: var(--gray-900);
	}
</style>
