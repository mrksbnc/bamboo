<template>
	<div
		class="bo-accordion w-full"
		ref="accordionRef"
	>
		<div
			tabindex="0"
			:class="headerClass"
			:aria-expanded="isOpen"
			:aria-disabled="disabled"
			:id="`accordion-header-${id}`"
			:aria-controls="`accordion-body-${id}`"
			@click="toggleAccordion"
			@keydown.enter="toggleAccordion"
			@keydown.space="toggleAccordion"
		>
			<div class="flex items-center gap-2">
				<bo-icon
					v-if="prefixIcon !== Icon.none"
					:icon="prefixIcon"
					class="bo-accordion__prefix-icon"
					aria-hidden="true"
				/>
				<bo-text
					v-if="title"
					:value="title"
					:size="BoFontSize.base"
					:weight="BoFontWeight.semibold"
					class="bo-accordion__title"
				/>
			</div>
			<div class="bo-accordion__collapse-icon transition-transform duration-200">
				<bo-icon
					:icon="customIcon"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-show="isOpen"
			ref="accordionBodyRef"
			:id="`accordion-body-${id}`"
			role="region"
			:aria-labelledby="`accordion-header-${id}`"
			:class="bodyClasses"
		>
			<div class="bo-accordion__content p-4 text-neutral-800 dark:text-white">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo-text';
import { IdentityService, TailwindService } from '@/services';
import { InjectKey } from '@/shared/injection-key';
import { computed, inject, onMounted, ref, watch } from 'vue';
import type { AccordionGroup, BoAccordionProps } from './bo-accordion';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.generateId(),
	open: false,
	disabled: false,
	prefixIcon: () => Icon.none,
	customIcon: () => Icon.none,
	className: '',
});

const emit = defineEmits<{
	(e: 'toggle', payload: { id: string; open: boolean }): void;
}>();

// Injected from parent BoAccordionContainer if present
const accordionGroup = inject<AccordionGroup | null>(InjectKey.AccordionGroup, null);

const headerClasses: Record<string, string> = {
	default:
		/*tw*/ 'bo-accordion__header pointer flex cursor-pointer items-center justify-between p-4 transition-colors',
	text: /*tw*/ 'text-blue-gray-700 dark:text-white',
	hover: /*tw*/ 'hover:bg-blue-50 dark:hover:bg-blue-600',
	background: /*tw*/ 'bg-neutral-50 dark:bg-neutral-800',
	state: /*tw*/ 'hover:bg-neutral-50 dark:hover:bg-neutral-600',
	disabled: /*tw*/ 'cursor-not-allowed opacity-50',
};

const defaultBodyClasses: Record<string, string> = {
	default: /*tw*/ 'bo-accordion__body overflow-hidden',
	animation: /*tw*/ 'transition-all duration-300',
	background: /*tw*/ 'bg-neutral-50 dark:bg-neutral-700',
};

const isOpen = ref(props.open);
const accordionRef = ref<HTMLElement | null>(null);
const accordionBodyRef = ref<HTMLElement | null>(null);

const headerClass = computed<string>(() => {
	return TailwindService.instance.merge(
		headerClasses.default,
		headerClasses.text,
		headerClasses.hover,
		headerClasses.background,
		headerClasses.state,
		props.disabled ? headerClasses.disabled : '',
	);
});

const bodyClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		defaultBodyClasses.default,
		defaultBodyClasses.animation,
		defaultBodyClasses.background,
	);
});

const customIcon = computed<Icon>(() => {
	if (props.customToggleIcon && props.customToggleIcon !== Icon.none) {
		return props.customToggleIcon;
	}

	return isOpen.value ? Icon.chevron_up : Icon.chevron_down;
});

function toggleAccordion(): void {
	if (props.disabled) return;

	if (accordionGroup) {
		accordionGroup.toggle(props.id);
	} else {
		isOpen.value = !isOpen.value;
		emit('toggle', { id: props.id, open: isOpen.value });
	}
}

watch(
	() => props.open,
	(val) => {
		isOpen.value = val;
	},
);

watch(
	() => accordionGroup?.openItems,
	(openItems) => {
		if (accordionGroup && openItems) {
			isOpen.value = openItems.has(props.id);
		}
	},
	{ deep: true },
);

onMounted(() => {
	if (accordionGroup) {
		accordionGroup.registerItem(props.id, props.open);
	}
});
</script>
