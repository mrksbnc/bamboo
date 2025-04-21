<template>
	<div
		:id="id"
		:class="groupClasses"
		class="bo-button-group"
		role="group"
		:aria-disabled="disabled"
		:data-testid="`bo-button-group-${id}`"
	>
		<component
			v-for="(buttonProp, index) in contentComponentProps"
			:key="`${id}-${index}`"
			:is="contentComponent"
			v-bind="buttonProp"
			:class="[
				// Remove shadows from all buttons in group
				'rounded-none shadow-none',
				// Add negative margin to create connected appearance
				index > 0
					? orientation === BoButtonGroupOrientation.horizontal
						? '-ml-[1px]'
						: '-mt-[1px]'
					: '',
				// First item border radius
				index === 0 && style === BoButtonGroupStyle.default
					? orientation === BoButtonGroupOrientation.horizontal
						? 'rounded-l-lg'
						: 'rounded-t-lg'
					: '',
				index === 0 && style === BoButtonGroupStyle.pill
					? orientation === BoButtonGroupOrientation.horizontal
						? 'rounded-l-full'
						: 'rounded-t-full'
					: '',
				// Last item border radius
				contentComponentProps &&
				index === contentComponentProps?.length - 1 &&
				style === BoButtonGroupStyle.default
					? orientation === BoButtonGroupOrientation.horizontal
						? 'rounded-r-lg'
						: 'rounded-b-lg'
					: '',
				contentComponentProps &&
				index === contentComponentProps.length - 1 &&
				style === BoButtonGroupStyle.pill
					? orientation === BoButtonGroupOrientation.horizontal
						? 'rounded-r-full'
						: 'rounded-b-full'
					: '',
				// First and last item when vertical
				orientation === BoButtonGroupOrientation.vertical && index === 0
					? '!rounded-tr-lg rounded-bl-none'
					: '',
				orientation === BoButtonGroupOrientation.vertical &&
				contentComponentProps &&
				index === contentComponentProps.length - 1
					? 'rounded-tr-none !rounded-bl-lg'
					: '',
			]"
			:data-testid="`bo-button-group-item-${id}-${index}`"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoButtonVariant, type BoButtonProps } from '@/components/bo-button';
import { IdentityService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import {
	BoButtonGroupOrientation,
	BoButtonGroupStyle,
	type BoButtonGroupProps,
} from './bo-button-group';

const props = withDefaults(defineProps<BoButtonGroupProps>(), {
	id: () => IdentityService.instance.generateId('bo-button-group'),
	size: () => BoSize.default,
	variant: () => BoButtonVariant.primary,
	style: () => BoButtonGroupStyle.default,
	orientation: () => BoButtonGroupOrientation.horizontal,
	fullWidth: false,
	disabled: false,
});

const {
	id,
	variant,
	style,
	orientation,
	size,
	fullWidth,
	cssClass,
	disabled,
	contentComponent,
	contentComponentProps,
} = toRefs(props);

const defaultClasses = /*tw*/ 'inline-flex overflow-hidden';

const orientationClasses = computed(() => {
	return orientation.value === BoButtonGroupOrientation.vertical
		? /*tw*/ 'flex-col'
		: /*tw*/ 'flex-row';
});

const widthClasses = computed(() => {
	return fullWidth.value ? /*tw*/ 'w-full' : /*tw*/ 'max-w-fit';
});

const sizeClasses = computed(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return /*tw*/ 'text-xs';
		case BoSize.small:
			return /*tw*/ 'text-sm';
		case BoSize.large:
			return /*tw*/ 'text-lg';
		case BoSize.extra_large:
			return /*tw*/ 'text-xl';
		case BoSize.default:
		default:
			return /*tw*/ 'text-base';
	}
});

const variantClasses = computed(() => {
	switch (variant.value) {
		case BoButtonVariant.secondary:
			return /*tw*/ 'bg-neutral-400 dark:bg-neutral-700 text-white';
		case BoButtonVariant.danger:
			return /*tw*/ 'bg-red-600 dark:bg-red-700 text-white';
		case BoButtonVariant.warning:
			return /*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white';
		case BoButtonVariant.success:
			return /*tw*/ 'bg-green-600 dark:bg-green-700 text-white';
		case BoButtonVariant.light:
			return /*tw*/ 'bg-white dark:bg-white text-black';
		case BoButtonVariant.dark:
			return /*tw*/ 'bg-black dark:bg-black text-white';
		case BoButtonVariant.primary:
		default:
			return /*tw*/ 'bg-blue-600 dark:bg-blue-700 text-white';
	}
});

const styleClasses = computed(() => {
	switch (style.value) {
		case BoButtonGroupStyle.outlined:
			return /*tw*/ 'bg-transparent border border-current';
		case BoButtonGroupStyle.filled:
			return /*tw*/ 'shadow-lg';
		case BoButtonGroupStyle.pill:
			return /*tw*/ 'rounded-full overflow-hidden';
		case BoButtonGroupStyle.default:
		default:
			return /*tw*/ 'rounded-lg overflow-hidden';
	}
});

const groupClasses = computed(() => {
	return TailwindService.instance.merge(
		defaultClasses,
		orientationClasses.value,
		widthClasses.value,
		sizeClasses.value,
		style.value !== BoButtonGroupStyle.outlined ? variantClasses.value : '',
		styleClasses.value,
		cssClass.value || '',
		disabled.value ? /*tw*/ 'opacity-50 cursor-not-allowed pointer-events-none' : '',
	);
});

/**
 * Get button props with defaults from the group
 */
function getButtonProps(buttonProps: BoButtonProps): BoButtonProps {
	return {
		...buttonProps,
		disabled: disabled.value || buttonProps.disabled,
		size: buttonProps.size || size.value,
	};
}
</script>
