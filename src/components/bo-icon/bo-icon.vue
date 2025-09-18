<template>
	<i
		v-if="svg"
		v-html="svg"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:style="iconStyle"
		:class="[componentBaseClasses, customCssClass]"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:title="title"
	></i>
</template>

<script lang="ts" setup>
	import { useColor } from '@/composables'
	import type { ConditionalCssProperties } from '@/lib'
	import { IdentityService } from '@/services/identity-service'
	import { computed, type CSSProperties, ref, type StyleValue, watchEffect } from 'vue'
	import { type BoIconProps, BoIconVariant, Icon, LazyIconMap } from './bo-icon'

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: IdentityService.instance.getDataTestId('bo-icon'),
		size: 24,
		variant: () => BoIconVariant.default,
		decorative: true,
	})

	const { getCustomColorStyle } = useColor()

	const svg = ref<string>('')
	/**
	 * This is a map of all the icons that are available in the library.
	 *
	 * - The key is the name of the icon and the value is the actual SVG.
	 * - A promise which resolves to the SVG string
	 */
	const iconMap = Object.keys(LazyIconMap).reduce(
		(acc, key) => {
			const splitted = key.split('/')
			const icon = splitted[splitted.length - 1].split('.')[0]
			acc[icon] = LazyIconMap[key]
			return acc
		},
		{} as Record<string, () => Promise<string>>,
	)

	const role = computed<string>(() => {
		return props.role ?? 'img'
	})

	const ariaHidden = computed<boolean | undefined>(() => {
		return props.decorative ? true : undefined
	})

	const ariaLabel = computed<string | undefined>(() => {
		// Only provide aria-label for non-decorative icons
		if (props.decorative) {
			return undefined
		}
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

		return {}
	})

	const iconSize = computed<CSSProperties>(() => {
		return {
			width: `${props.size}px`,
			height: `${props.size}px`,
		}
	})

	const iconStyle = computed<StyleValue>(() => {
		const style: StyleValue = {
			...iconSize.value,
			...iconColorStyle.value,
			...cursor.value,
		}

		return style
	})

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-icon': true,
			[`bo-icon__size--${props.size}`]: true,
			[`bo-icon__variant--${props.variant}`]: true,
		}
	})

	async function load(icon: Icon): Promise<void> {
		try {
			await iconMap[icon]().then((val) => {
				svg.value = val
			})
		} catch (e) {
			console.error(`Could not find icon of name ${icon}`)
		}
	}

	watchEffect(() => {
		load(props.icon)
	})
</script>

<style scoped lang="scss">
	.bo-icon {
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;

		&__variant {
			&--default {
				color: currentColor;
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
	}
</style>
