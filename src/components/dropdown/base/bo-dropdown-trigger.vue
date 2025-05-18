<template>
	<button
		:class="buttonClasses"
		:disabled="disabled"
	>
		<div class="flex items-center gap-2">
			<bo-icon
				v-if="prefixIcon"
				:icon="prefixIcon"
				:size="size"
				class="bo-dropdown-trigger__prefix-icon"
			/>
			<bo-text
				v-if="label"
				:value="label"
				:size="buttonFontSize"
				:weight="BoFontWeight.semibold"
				class="bo-dropdown-trigger__label"
				:cursor="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
			/>
			<bo-icon
				v-if="suffixIcon"
				:icon="suffixIcon"
				:size="size"
				class="bo-dropdown-trigger__suffix-icon"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoDropdownTriggerProps } from './dropdown-defaults.js';

const props = withDefaults(defineProps<BoDropdownTriggerProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-dropdown-trigger'),
	size: () => BoSize.default,
});

const buttonDefaultClasses = {
	default:
		/*tw*/ 'bo-dropdown-trigger flex items-center justify-center border rounded-md min-w-[100px] max-w-fit',
	disabled: /*tw*/ 'bo-dropdown-trigger--disabled disabled:cursor-not-allowed disabled:opacity-50',
	hover: /*tw*/ 'hover:border-neutral-600 dark:hover:border-neutral-500',
};

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small px-1.5 py-1',
	[BoSize.small]: /*tw*/ 'bo-button--small px-2 py-1.5',
	[BoSize.default]: /*tw*/ 'bo-button--default px-3 py-2',
	[BoSize.large]: /*tw*/ 'bo-button--large px-4 py-2.5',
	[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large px-5 py-3',
};

const iconOnlySizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small p-1',
	[BoSize.small]: /*tw*/ 'bo-button--small p-1.5',
	[BoSize.default]: /*tw*/ 'bo-button--default p-2.5',
	[BoSize.large]: /*tw*/ 'bo-button--large p-2.5',
	[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large p-3',
};

const buttonClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		buttonDefaultClasses.default,
		buttonDefaultClasses.disabled,
		buttonDefaultClasses.hover,
		sizeClasses[props.size],
		iconOnlySizeClasses[props.size],
	);
});

const buttonFontSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoFontSize.xs;
		case BoSize.large:
		case BoSize.extra_large:
			return BoFontSize.base;
		case BoSize.default:
		default:
			return BoFontSize.sm;
	}
});
</script>
