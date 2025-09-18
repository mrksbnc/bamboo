<template>
	<component
		v-if="iconComponent"
		:is="iconComponent"
		v-bind="iconComponentPropConstruct"
		:class="[customCssClass, $style['bo-icon'], `bo-icon--${variant}`, `bo-icon__size--${size}`]"
	/>
</template>

<script setup lang="ts">
	import { useColor } from '@/composables/useColor'
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

	const { getCustomColorStyle } = useColor()

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
			return getCustomColorStyle(props.customColor)
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

<style module lang="scss">
	.bo-icon {
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;

		&--default {
			fill: currentColor;
		}

		&--primary {
			fill: var(--blue-600);
		}

		&--secondary {
			fill: var(--neutral-600);
		}

		&--disabled {
			fill: var(--neutral-400);
		}

		&--success {
			fill: var(--green-600);
		}

		&--warning {
			fill: var(--yellow-500);
		}

		&--danger {
			fill: var(--red-600);
		}

		&--light {
			fill: var(--neutral-50);
		}

		&--dark {
			fill: var(--gray-950);
		}
	}
</style>
