<template>
	<i
		v-html="svg"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:style="iconStyle"
		:class="iconClass"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:title="title"
	></i>
</template>

<script lang="ts" setup>
	import type { ConditionalCssProperties } from '@/core/css.js';
	import { BoSize } from '@/core/size.js';
	import { iconRegistry } from '@/core/svg.js';
	import { ColorService } from '@/services/color-service.js';
	import { IdentityService } from '@/services/identity-service.js';
	import { computed, type CSSProperties, type HTMLAttributes, type StyleValue } from 'vue';
	import { type BoIconProps, BoIconVariant, Icon } from './bo-icon.js';

	const props = withDefaults(defineProps<BoIconProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-icon'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-icon'),
		size: () => BoSize.default,
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

	const iconStyle = computed<StyleValue>(() => {
		const style: StyleValue = {
			...iconColorStyle.value,
			...cursor.value,
		};

		return style;
	});

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-icon': true,
			[`bo-icon--${props.variant}`]: true,
			[`bo-icon--size-${props.size}`]: true,
		};
	});

	const iconClass = computed<HTMLAttributes['class']>(() => {
		return [componentBaseClasses.value, props.customCssClass];
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

		&--size-extra-small {
			width: var(--size-xs);
			height: var(--size-xs);
		}

		&--size-small {
			width: var(--size-sm);
			height: var(--size-sm);
		}

		&--size-default {
			width: var(--size-md);
			height: var(--size-md);
		}

		&--size-large {
			width: var(--size-lg);
			height: var(--size-lg);
		}

		&--size-extra-large {
			width: var(--size-xl);
			height: var(--size-xl);
		}
	}
</style>
