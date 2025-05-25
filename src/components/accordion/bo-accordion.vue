<template>
	<div
		class="bo-accordion w-full"
		ref="accordionRef"
		:data-testid="`bo-accordion-${id}`"
		role="group"
	>
		<div
			tabindex="0"
			role="button"
			:class="headerClass"
			:aria-expanded="isOpen"
			:aria-disabled="disabled"
			:id="`accordion-header-${id}`"
			:aria-controls="`accordion-body-${id}`"
			:data-testid="`bo-accordion-header-${id}`"
			@click="toggleAccordion"
			@keydown.enter="toggleAccordion"
			@keydown.space="toggleAccordion"
		>
			<div class="flex items-center gap-2">
				<bo-icon
					v-if="prefixIcon !== Icon.none"
					:icon="prefixIcon"
					class="bo-accordion__prefix-icon"
					:data-testid="`bo-accordion-prefix-icon-${id}`"
					aria-hidden="true"
				/>
				<bo-text
					v-if="title"
					:value="title"
					:size="BoFontSize.base"
					:weight="BoFontWeight.semibold"
					class="bo-accordion__title cursor-pointer"
					:data-testid="`bo-accordion-title-${id}`"
				/>
			</div>
			<div class="bo-accordion__collapse-icon transition-transform duration-200">
				<bo-icon
					:icon="customIcon"
					:data-testid="`bo-accordion-toggle-icon-${id}`"
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
			:data-testid="`bo-accordion-content-${id}`"
		>
			<div class="bo-accordion__content p-4 text-neutral-800 dark:text-white">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import BoText from '@/components/text/bo-text.vue';
import { BoFontSize, BoFontWeight } from '@/components/text/index.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, inject, onMounted, ref, watch } from 'vue';
import type { AccordionGroup, BoAccordionProps } from './bo-accordion.js';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	prefixIcon: () => Icon.none,
	customIcon: () => Icon.none,
});

const emit = defineEmits<{
	(e: 'toggle', payload: { id: string; open: boolean }): void;
}>();

// Injected from parent BoAccordionContainer if present
const accordionGroup = inject<AccordionGroup | null>(InjectKey.AccordionGroup, null);

const headerClasses: Record<string, string> = {
	default:
		/*tw*/ 'bo-accordion__header flex cursor-pointer items-center justify-between p-4 transition-colors',
	text: /*tw*/ 'text-blue-gray-700 dark:text-white',
	background: /*tw*/ 'bg-neutral-50 dark:bg-neutral-800',
	disabled: /*tw*/ 'cursor-not-allowed opacity-50',
};

const defaultBodyClasses: Record<string, string> = {
	default: /*tw*/ 'bo-accordion__body overflow-hidden',
	animation: /*tw*/ 'transition-all duration-300',
	background: /*tw*/ 'bg-neutral-50 dark:bg-neutral-700',
};

const isOpen = ref<boolean>(props.open);
const accordionRef = ref<HTMLElement>();
const accordionBodyRef = ref<HTMLElement>();

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
