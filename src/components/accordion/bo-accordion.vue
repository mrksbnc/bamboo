<template>
	<div
		role="group"
		ref="accordionRef"
		:class="containerClasses"
		:data-testid="constructAttribute(id, 'accordion')"
	>
		<div
			tabindex="0"
			role="button"
			:class="headerClass"
			:aria-expanded="isOpen"
			:aria-disabled="disabled"
			:id="constructAttribute(id, 'accordion-header')"
			:aria-controls="constructAttribute(id, 'accordion-body')"
			:data-testid="constructAttribute(id, 'accordion-header')"
			@click="onAccordionToggle"
			@keydown.enter="onAccordionToggle"
			@keydown.space="onAccordionToggle"
		>
			<div class="flex items-center gap-2">
				<bo-icon
					v-if="prefixIcon !== Icon.none"
					:icon="prefixIcon"
					aria-hidden="true"
					class="bo-accordion__prefix-icon"
					:data-testid="constructAttribute(id, 'accordion-prefix-icon')"
				/>
				<bo-text
					v-if="title"
					:value="title"
					:size="BoFontSize.base"
					:weight="BoFontWeight.semibold"
					class="bo-accordion__title cursor-pointer"
					:data-testid="constructAttribute(id, 'accordion-title')"
				/>
			</div>
			<div :class="ACCORDION_STYLE.animation.icon">
				<bo-icon
					:icon="customIcon"
					aria-hidden="true"
					:data-testid="constructAttribute(id, 'accordion-toggle-icon')"
				/>
			</div>
		</div>
		<div
			v-show="isOpen"
			role="region"
			ref="accordionBodyRef"
			:class="bodyClasses"
			:id="constructAttribute(id, 'accordion-body')"
			:data-testid="constructAttribute(id, 'accordion-content')"
			:aria-labelledby="constructAttribute(id, 'accordion-header')"
		>
			<div :class="slotClasses">
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
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, inject, onMounted, ref, watch } from 'vue';
import type { AccordionGroup, BoAccordionProps } from './bo-accordion.js';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	prefixIcon: () => Icon.none,
	customToggleIcon: () => Icon.none,
});

const emit = defineEmits<{
	(e: 'toggle', payload: { id: string; open: boolean }): void;
}>();

const { constructAttribute } = useAttributes();

/**
 * Injected from parent BoAccordionContainer if present
 * unused if not in a group
 */
const accordionGroup = inject<AccordionGroup | null>(InjectKey.AccordionGroup, null);

const ACCORDION_STYLE = {
	layout: {
		container: /*tw*/ 'bo-accordion w-full first:rounded-t-lg last:rounded-b-lg',
		header: /*tw*/ 'bo-accordion__header flex items-center justify-between p-3 sm:p-4',
		content: /*tw*/ 'bo-accordion__content p-3 sm:p-4 md:p-6',
		body: /*tw*/ 'bo-accordion__body overflow-hidden',
	},
	appearance: {
		text: /*tw*/ 'text-neutral-700 dark:text-neutral-200',
		background: /*tw*/ 'bg-neutral-50 dark:bg-neutral-800',
		bodyBackground: /*tw*/ 'bg-white dark:bg-neutral-900',
		contentText: /*tw*/ 'text-neutral-800 dark:text-neutral-100 text-sm sm:text-base',
		border: /*tw*/ 'border-b border-neutral-200 dark:border-neutral-700 last:border-b-0',
	},
	interactive: {
		header:
			/*tw*/ 'cursor-pointer transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700',
		disabled: /*tw*/ 'cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent',
	},
	animation: {
		icon: /*tw*/ 'bo-accordion__collapse-icon transition-transform duration-200',
		body: /*tw*/ 'transition-all duration-300 ',
	},
} as const;

const isOpen = ref<boolean>(props.open ?? false);
const accordionRef = ref<HTMLElement>();
const accordionBodyRef = ref<HTMLElement>();

const containerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.container,
		ACCORDION_STYLE.appearance.border,
	);
});

const headerClass = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.header,
		ACCORDION_STYLE.appearance.text,
		ACCORDION_STYLE.appearance.background,
		ACCORDION_STYLE.interactive.header,
		props.disabled ? ACCORDION_STYLE.interactive.disabled : '',
	);
});

const bodyClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.body,
		ACCORDION_STYLE.animation.body,
		ACCORDION_STYLE.appearance.bodyBackground,
	);
});

const slotClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.content,
		ACCORDION_STYLE.appearance.contentText,
	);
});

const customIcon = computed<Icon>(() => {
	if (props.customToggleIcon && props.customToggleIcon !== Icon.none) {
		return props.customToggleIcon;
	}

	return isOpen.value ? Icon.chevron_up : Icon.chevron_down;
});

function onAccordionToggle(): void {
	if (props.disabled) {
		return;
	}

	if (accordionGroup) {
		accordionGroup.toggle(props.id);
		return;
	}

	isOpen.value = !isOpen.value;
	emit('toggle', { id: props.id, open: isOpen.value });
}

watch(
	() => props.open,
	(val) => {
		isOpen.value = val ?? false;
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
		accordionGroup.registerItem(props.id, props.open ?? false);
	}
});
</script>
