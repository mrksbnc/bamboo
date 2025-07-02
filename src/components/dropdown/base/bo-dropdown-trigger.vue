<template>
	<button
		role="button"
		:disabled="disabled"
		:aria-haspopup="true"
		:aria-expanded="isOpen"
		:class="buttonClasses"
		:data-testid="constructAttribute(id, 'dropdown-trigger')"
		@click="onTriggerClick"
		@keydown="onKeyDown"
	>
		<div :class="DROPDOWN_TRIGGER_STYLE.layout.content">
			<bo-icon
				v-if="prefixIcon"
				:icon="prefixIcon"
				:size="iconSize"
				:class="DROPDOWN_TRIGGER_STYLE.layout.prefixIcon"
			/>
			<bo-text
				v-if="label"
				:value="label"
				:size="buttonFontSize"
				:weight="BoFontWeight.semibold"
				:class="DROPDOWN_TRIGGER_STYLE.layout.label"
				:cursor="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
			/>
			<bo-icon
				v-if="suffixIcon"
				:icon="suffixIcon"
				:size="iconSize"
				:class="DROPDOWN_TRIGGER_STYLE.layout.suffixIcon"
			/>
			<bo-icon
				v-else
				:icon="toggleIcon"
				:size="iconSize"
				:class="[
					DROPDOWN_TRIGGER_STYLE.layout.suffixIcon,
					isOpen ? DROPDOWN_TRIGGER_STYLE.state.iconRotated : '',
				]"
			/>
		</div>
	</button>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoDropdownTriggerProps } from './dropdown-defaults.js';

const props = withDefaults(defineProps<BoDropdownTriggerProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	isOpen: false,
});

const emit = defineEmits<{
	(e: 'trigger-click'): void;
}>();

const { constructAttribute } = useAttributes();

const DROPDOWN_TRIGGER_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-dropdown-trigger flex items-center justify-center border rounded-md min-w-[100px] max-w-fit transition-all duration-200',
		content: /*tw*/ 'bo-dropdown-trigger__content flex items-center gap-2',
		prefixIcon: /*tw*/ 'bo-dropdown-trigger__prefix-icon',
		suffixIcon: /*tw*/ 'bo-dropdown-trigger__suffix-icon transition-transform duration-200',
		label: /*tw*/ 'bo-dropdown-trigger__label',
	},
	size: {
		container: {
			[BoSize.extra_small]: /*tw*/ 'bo-dropdown-trigger--extra-small px-1.5 py-1 text-xs',
			[BoSize.small]: /*tw*/ 'bo-dropdown-trigger--small px-2 py-1.5 text-sm',
			[BoSize.default]: /*tw*/ 'bo-dropdown-trigger--default px-3 py-2 text-sm',
			[BoSize.large]: /*tw*/ 'bo-dropdown-trigger--large px-4 py-2.5 text-base',
			[BoSize.extra_large]: /*tw*/ 'bo-dropdown-trigger--extra-large px-5 py-3 text-lg',
		},
	},
	appearance: {
		default:
			/*tw*/ 'bg-white border-gray-300 text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white',
		hover:
			/*tw*/ 'hover:border-gray-400 hover:bg-gray-50 dark:hover:border-gray-500 dark:hover:bg-gray-700',
	},
	state: {
		disabled: /*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
		open: /*tw*/ 'bo-dropdown-trigger--open border-blue-500',
		iconRotated: /*tw*/ 'rotate-180',
	},
} as const;

const toggleIcon = computed<Icon>(() => {
	if (props.triggerIcon) {
		return props.triggerIcon;
	}

	return Icon.chevron_down;
});

const iconSize = computed<BoSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.extra_small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.small;
		case BoSize.default:
		default:
			return BoSize.extra_small;
	}
});

const buttonClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		DROPDOWN_TRIGGER_STYLE.state.disabled,
		DROPDOWN_TRIGGER_STYLE.layout.container,
		DROPDOWN_TRIGGER_STYLE.appearance.hover,
		DROPDOWN_TRIGGER_STYLE.appearance.default,
		DROPDOWN_TRIGGER_STYLE.size.container[props.size],
		props.isOpen ? DROPDOWN_TRIGGER_STYLE.state.open : '',
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

function onTriggerClick(): void {
	if (props.disabled) {
		return;
	}
	emit('trigger-click');
}

function onKeyDown(event: KeyboardEvent): void {
	if (props.disabled) {
		return;
	}

	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		onTriggerClick();
	}
}
</script>
