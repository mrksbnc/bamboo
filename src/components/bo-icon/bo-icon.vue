<template>
	<component :is="iconComponent" v-bind="iconComponentPropConstruct" />
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

				return {
					color: 'currentcolor',
				}
			}
		} else {
			return {
				color: 'currentcolor',
			}
		}
	})

	const iconColorClass = computed<string>(() => {
		/** Custom color is defined as a style so in case it's defined, variant classes are ignored */
		if (props.customColor) {
			return ''
		}

		return `bo-icon--${props.variant}`
	})

	const iconClass = computed<string>(() => {
		return (
			['bo-icon', `bo-icon--${props.size}`, iconColorClass.value, props.customCssClass]
				/* Remove empty strings */
				.filter(Boolean)
				.join(' ')
		)
	})

	const iconComponentPropConstruct = {
		id: props.id ?? IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: props.dataTestId,
		role: role.value,
		class: iconClass.value,
		style: {
			...cursor.value,
			...iconColorStyle.value,
		},
		'aria-hidden': ariaHidden.value,
		'aria-label': ariaLabel.value,
	}
</script>
