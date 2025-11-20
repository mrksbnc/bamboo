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
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { computed, type CSSProperties, ref, type StyleValue, watchEffect } from 'vue';
	import { type BoIconProps, BoIconVariant, Icon, svgPromiseRecord } from './bo-icon';

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-icon'),
		size: 24,
		variant: () => BoIconVariant.default,
		decorative: true,
	});

	const svg = ref<string>('');

	/**
	 * This is a map of all the icons that are available in the library.
	 *
	 * - The key is the name of the icon and the value is the actual SVG.
	 * - A promise which resolves to the SVG string
	 */
	const iconMap = Object.keys(svgPromiseRecord).reduce(
		(acc, key) => {
			const splitted = key.split('/');
			const icon = splitted[splitted.length - 1]?.split('.')?.[0];

			if (!icon || !svgPromiseRecord[key]) {
				return acc;
			}

			acc[icon] = svgPromiseRecord[key];
			return acc;
		},
		{} as Record<string, () => Promise<string>>,
	);

	const role = computed<string | undefined>(() => {
		// Decorative icons should not have a role
		if (props.decorative) {
			return undefined;
		}
		return props.role ?? 'img';
	});

	const ariaHidden = computed<boolean | undefined>(() => {
		// Decorative icons should be hidden from screen readers
		return props.decorative ? true : undefined;
	});

	const ariaLabel = computed<string | undefined>(() => {
		// Only provide aria-label for non-decorative icons
		if (props.decorative) {
			return undefined;
		}

		if (props.ariaLabel) {
			return props.ariaLabel;
		}

		return props.title ?? props.icon;
	});

	const cursor = computed<CSSProperties>(() => {
		if (props.cursor) {
			return {
				cursor: props.cursor,
			};
		}

		return {
			cursor: 'default',
		};
	});

	const iconColorStyle = computed<CSSProperties>(() => {
		if (props.customColor) {
			return {
				color: ColorService.instance.getValidCssColor(props.customColor),
			};
		}

		return {};
	});

	const iconSize = computed<CSSProperties>(() => {
		return {
			width: `${props.size}px`,
			height: `${props.size}px`,
		};
	});

	const iconStyle = computed<StyleValue>(() => {
		const style: StyleValue = {
			...iconSize.value,
			...iconColorStyle.value,
			...cursor.value,
		};

		return style;
	});

	const componentBaseClasses = computed<string>(() => {
		return ['bo-icon', `bo-icon--variant-${props.variant}`].filter(Boolean).join(' ');
	});

	async function load(icon: Icon): Promise<void> {
		try {
			const svgContent = await iconMap[icon]?.();
			if (svgContent) {
				svg.value = svgContent;
			}
		} catch (e) {
			console.error(`Could not find icon of name ${icon}\n${e}`);
		}
	}

	watchEffect(() => {
		load(props.icon);
	});
</script>

<style scoped lang="scss">
	.bo-icon {
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;

		&--variant-default {
			color: currentcolor;
		}

		&--variant-primary {
			color: var(--icon-primary);
		}

		&--variant-secondary {
			color: var(--icon-secondary);
		}

		&--variant-disabled {
			color: var(--icon-disabled);
		}

		&--variant-success {
			color: var(--icon-success);
		}

		&--variant-warning {
			color: var(--icon-warning);
		}

		&--variant-danger {
			color: var(--icon-danger);
		}

		&--variant-light {
			color: var(--icon-light);
		}

		&--variant-dark {
			color: var(--icon-dark);
		}

		&--variant-current {
			color: currentcolor;
		}

		&--variant-inherit {
			color: inherit;
		}
	}
</style>
