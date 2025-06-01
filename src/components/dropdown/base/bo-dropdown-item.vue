<template>
	<div
		:class="itemClasses"
		:data-testid="constructAttribute(id, 'dropdown-item')"
		role="menuitem"
		:tabindex="disabled ? -1 : 0"
		:aria-disabled="disabled"
		@click="onItemSelect(id)"
		@keydown="onKeyDown"
	>
		<bo-icon
			v-if="icon"
			:icon="icon"
			:size="BoSize.small"
			:class="DROPDOWN_ITEM_STYLE.layout.icon"
			:data-testid="constructAttribute(id, 'dropdown-item-icon')"
		/>
		<div :class="DROPDOWN_ITEM_STYLE.layout.textContainer">
			<bo-text
				v-if="label"
				:value="label"
				:size="BoFontSize.sm"
				:clickable="!disabled"
				:weight="BoFontWeight.semibold"
				:class="DROPDOWN_ITEM_STYLE.layout.label"
				:data-testid="constructAttribute(id, 'dropdown-item-label')"
			/>
			<bo-text
				v-if="description"
				:value="description"
				:size="BoFontSize.xs"
				:clickable="!disabled"
				:weight="BoFontWeight.medium"
				:color="BoTextColor.secondary"
				:class="DROPDOWN_ITEM_STYLE.layout.description"
				:data-testid="constructAttribute(id, 'dropdown-item-description')"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoDropdownItemProps } from './dropdown-defaults.js';

const props = withDefaults(defineProps<BoDropdownItemProps>(), {
	id: () => IdentityService.instance.getComponentId(),
});

const emit = defineEmits<{
	(e: 'select', id: string): void;
}>();

const { constructAttribute } = useAttributes();

const DROPDOWN_ITEM_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-dropdown-item flex items-center gap-3 py-1.5 px-2 rounded-md border border-transparent',
		icon: /*tw*/ 'bo-dropdown-item__icon flex-shrink-0',
		textContainer: /*tw*/ 'bo-dropdown-item__text-container flex-1',
		label: /*tw*/ 'bo-dropdown-item__label',
		description: /*tw*/ 'bo-dropdown-item__description',
	},
	interactive: {
		default:
			/*tw*/ 'cursor-pointer hover:bg-neutral-50 hover:border-blue-600 dark:hover:bg-neutral-700',
		disabled: /*tw*/ 'bo-dropdown-item--disabled cursor-not-allowed opacity-50',
	},
} as const;

const itemClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		DROPDOWN_ITEM_STYLE.layout.container,
		props.disabled
			? DROPDOWN_ITEM_STYLE.interactive.disabled
			: DROPDOWN_ITEM_STYLE.interactive.default,
	);
});

function onItemSelect(id: string): void {
	if (props.disabled) {
		return;
	}
	emit('select', id);
}

function onKeyDown(event: KeyboardEvent): void {
	if (props.disabled) {
		return;
	}

	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onItemSelect(props.id!);
	}
}
</script>
