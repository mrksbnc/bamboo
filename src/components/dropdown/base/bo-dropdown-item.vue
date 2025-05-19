<template>
	<div
		:class="itemClasses"
		@click="onItemSelect(id)"
	>
		<bo-icon
			v-if="icon"
			:icon="icon"
			:size="BoSize.small"
		/>
		<div class="flex-1">
			<bo-text
				v-if="label"
				:value="label"
				:size="BoFontSize.sm"
				:clickable="!disabled"
				:weight="BoFontWeight.semibold"
			/>
			<bo-text
				v-if="description"
				:value="description"
				:size="BoFontSize.xs"
				:clickable="!disabled"
				:weight="BoFontWeight.medium"
				:color="BoTextColor.secondary"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { BoDropdownItemProps } from './dropdown-defaults.js';

const props = withDefaults(defineProps<BoDropdownItemProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-dropdown-item'),
});

const emit = defineEmits<{
	(e: 'select', id: string): void;
}>();

const itemClassDefault: Record<'default' | 'disabled' | 'hover', string> = {
	default:
		/*tw*/ 'bo-dropdown-item flex items-center gap-3 py-1.5 px-2 rounded-md border border-transparent',
	disabled: /*tw*/ 'bo-dropdown-item--disabled cursor-not-allowed opacity-50',
	hover: /*tw*/ 'hover:bg-neutral-50 hover:border-blue-600 dark:hover:bg-neutral-700',
};

const itemClasses = TailwindService.instance.merge(
	itemClassDefault.hover,
	itemClassDefault.default,
	props.disabled ? itemClassDefault.disabled : 'cursor-pointer',
);

function onItemSelect(id: string): void {
	emit('select', id);
}
</script>
