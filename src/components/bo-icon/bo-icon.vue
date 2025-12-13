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
	import type { ConditionalCssProperties } from '@/core';
	import { BoSize } from '@/core/size';
	import { iconRegistry } from '@/core/svg';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { computed, type CSSProperties, type StyleValue } from 'vue';
	import { type BoIconProps, BoIconVariant, Icon } from './bo-icon';

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-icon'),
		size: BoSize.default,
		variant: () => BoIconVariant.default,
		decorative: true,
	});

	const svg = computed<string>(() => {
		return iconRegistry[props.icon] || iconRegistry[Icon.none]!;
	});

	const role = computed<string>(() => {
		return props.role ?? 'img';
	});

	const ariaHidden = computed<boolean | undefined>(() => {
		return props.decorative ? true : undefined;
	});

	const ariaLabel = computed<string | undefined>(() => {
		// Only provide aria-label for non-decorative icons
		if (props.decorative) {
			return undefined;
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
			return ColorService.instance.getCustomColorStyle(props.customColor);
		}

		return {};
	});

	const sizeToPixels = computed<number>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return 16;
			case BoSize.small:
				return 20;
			case BoSize.large:
				return 32;
			case BoSize.extra_large:
				return 40;
			case BoSize.default:
			default:
				return 24;
		}
	});

	const iconSize = computed<CSSProperties>(() => {
		return {
			width: `${sizeToPixels.value}px`,
			height: `${sizeToPixels.value}px`,
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

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-icon': true,
			[`bo-icon--${props.variant}`]: true,
		};
	});
</script>

<style scoped lang="scss">
	.bo-icon {
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;

		&--default {
			color: var(--bo-icon-color-default);
		}

		&--primary {
			color: var(--bo-icon-color-primary);
		}

		&--secondary {
			color: var(--bo-icon-color-secondary);
		}

		&--disabled {
			color: var(--bo-icon-color-disabled);
		}

		&--success {
			color: var(--bo-icon-color-success);
		}

		&--warning {
			color: var(--bo-icon-color-warning);
		}

		&--danger {
			color: var(--bo-icon-color-danger);
		}

		&--white {
			color: var(--bo-icon-color-white);
		}

		&--black {
			color: var(--bo-icon-color-black);
		}

		&--current {
			color: var(--bo-icon-color-current);
		}

		&--inherit {
			color: var(--bo-icon-color-inherit);
		}
	}
</style>
