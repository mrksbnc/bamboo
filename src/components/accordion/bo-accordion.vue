<template>
	<div
		role="group"
		ref="accordionRef"
		:class="rootClasses"
		:data-testid="constructAttribute(id, 'accordion')"
	>
		<div
			tabindex="0"
			role="button"
			:id="accessibility.headerId"
			:class="headerClasses"
			:aria-expanded="accessibility.ariaExpanded"
			:aria-disabled="accessibility.ariaDisabled"
			:aria-label="accessibility.ariaLabel"
			:aria-controls="accessibility.ariaControls"
			:data-testid="constructAttribute(id, 'accordion-header')"
			@click="onAccordionToggle"
			@keydown.enter="onAccordionToggle"
			@keydown.space="onAccordionToggle"
			@keydown.prevent.arrow-down="onArrowNavigation('down')"
			@keydown.prevent.arrow-up="onArrowNavigation('up')"
		>
			<template v-if="$slots.header">
				<slot
					name="header"
					:is-open="isOpen"
					:toggle="onAccordionToggle"
					:props="props"
				/>
			</template>
			<template v-else>
				<div :class="headerContentClasses">
					<bo-icon
						v-if="prefixIcon !== Icon.none"
						:icon="prefixIcon"
						:aria-hidden="true"
						:class="prefixIconClasses"
						:data-testid="constructAttribute(id, 'accordion-prefix-icon')"
					/>
					<bo-text
						v-if="title"
						:value="title"
						:size="BoFontSize.base"
						:weight="BoFontWeight.semibold"
						:class="titleClasses"
						:data-testid="constructAttribute(id, 'accordion-title')"
					/>
				</div>
				<div :class="toggleIconClasses">
					<bo-icon
						:icon="customIcon"
						:aria-hidden="true"
						:data-testid="constructAttribute(id, 'accordion-toggle-icon')"
					/>
				</div>
			</template>
		</div>
		<div
			v-show="isOpen"
			role="region"
			ref="accordionBodyRef"
			:class="bodyClasses"
			:id="accessibility.bodyId"
			:data-testid="constructAttribute(id, 'accordion-content')"
			:aria-labelledby="accessibility.ariaLabelledBy"
		>
			<div :class="contentClasses">
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
import { type AccessibilityConstruct } from '@/types/accessibility';
import { computed, inject, onMounted, ref, watch } from 'vue';
import { BoAccordionShape, type AccordionGroup, type BoAccordionProps } from './bo-accordion.js';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	prefixIcon: () => Icon.none,
	customToggleIcon: () => Icon.none,
	shape: () => BoAccordionShape.rounded,
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
	base: {
		accordion: 'w-full',
		header:
			'flex items-center justify-between border border-neutral-200 p-3 sm:p-4 dark:border-neutral-700',
		headerContent: 'flex items-center gap-2',
		title: 'cursor-pointer',
		prefixIcon: 'flex-shrink-0',
		toggleIcon: 'flex-shrink-0 transition-transform duration-200',
		body: 'border-x border-b border-neutral-200 dark:border-neutral-700',
		content: 'p-3 sm:p-4 md:p-6',
	},
	appearance: {
		text: 'text-neutral-700 dark:text-neutral-200',
		background: 'bg-neutral-50 dark:bg-neutral-800',
		bodyBackground: 'bg-white dark:bg-neutral-900',
		contentText: 'text-neutral-800 dark:text-neutral-100 text-sm sm:text-base',
	},
	state: {
		open: {
			toggleIcon: 'rotate-180',
			rounded: {
				self: 'rounded-t-lg',
				lastBody: 'rounded-b-lg',
			},
		},
		disabled: {
			accordion: 'cursor-not-allowed opacity-50',
			header: 'hover:bg-transparent dark:hover:bg-transparent',
		},
		rounded: {
			first: 'rounded-t-lg',
			last: 'rounded-b-lg',
		},
	},
} as const;

const accordionRef = ref<HTMLElement>();
const accordionBodyRef = ref<HTMLElement>();

const isOpen = ref<boolean>(props.open ?? false);

const accessibility = computed<AccessibilityConstruct>(() => {
	return {
		ariaExpanded: isOpen.value,
		ariaDisabled: props.disabled,
		ariaLabel: props.ariaLabel ?? props.title,
		ariaControls: constructAttribute(props.id, 'accordion-body'),
		ariaLabelledBy: constructAttribute(props.id, 'accordion-header'),
		headerId: constructAttribute(props.id, 'accordion-header'),
		bodyId: constructAttribute(props.id, 'accordion-body'),
	};
});

const rootClasses = computed<string>(() => {
	const classes = ['bo-accordion', ACCORDION_STYLE.base.accordion];

	if (isOpen.value) {
		classes.push('bo-accordion--open');
		if (props.shape === BoAccordionShape.rounded) {
			classes.push(ACCORDION_STYLE.state.open.rounded.self);
		}
	}

	if (props.disabled) {
		classes.push('bo-accordion--disabled');
		classes.push(ACCORDION_STYLE.state.disabled.accordion);
	}

	if (props.shape === BoAccordionShape.rounded) {
		classes.push('bo-accordion--rounded');
		if (props.isFirst) {
			classes.push(ACCORDION_STYLE.state.rounded.first);
		}
		if (props.isLast && !isOpen.value) {
			classes.push(ACCORDION_STYLE.state.rounded.last);
		}
	}

	return TailwindService.instance.merge(...classes);
});

const headerClasses = computed<string>(() => {
	const customBg = props.headerBackgroundColor ?? ACCORDION_STYLE.appearance.background;
	const customText = props.headerTextColor ?? ACCORDION_STYLE.appearance.text;
	const classes = ['bo-accordion__header', ACCORDION_STYLE.base.header, customText, customBg];

	if (props.disabled) {
		classes.push(ACCORDION_STYLE.state.disabled.header);
	}

	return TailwindService.instance.merge(...classes);
});

const headerContentClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-accordion__header-content',
		ACCORDION_STYLE.base.headerContent,
	);
});

const titleClasses = computed<string>(() => {
	return TailwindService.instance.merge('bo-accordion__title', ACCORDION_STYLE.base.title);
});

const prefixIconClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-accordion__prefix-icon',
		ACCORDION_STYLE.base.prefixIcon,
	);
});

const toggleIconClasses = computed<string>(() => {
	const classes = ['bo-accordion__toggle-icon', ACCORDION_STYLE.base.toggleIcon];

	if (isOpen.value) {
		classes.push(ACCORDION_STYLE.state.open.toggleIcon);
	}

	return TailwindService.instance.merge(...classes);
});

const bodyClasses = computed<string>(() => {
	const customBg = props.bodyBackgroundColor ?? ACCORDION_STYLE.appearance.bodyBackground;
	const customText = props.bodyTextColor ?? ACCORDION_STYLE.appearance.contentText;
	const classes = ['bo-accordion__body', ACCORDION_STYLE.base.body, customBg, customText];

	if (props.shape === BoAccordionShape.rounded && props.isLast && isOpen.value) {
		classes.push(ACCORDION_STYLE.state.open.rounded.lastBody);
	}

	return TailwindService.instance.merge(...classes);
});

const contentClasses = computed<string>(() => {
	return TailwindService.instance.merge('bo-accordion__content', ACCORDION_STYLE.base.content);
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

function onArrowNavigation(direction: 'up' | 'down'): void {
	if (!accordionGroup) return;

	const accordionElements = document.querySelectorAll(
		'[role="button"][aria-controls*="accordion-body"]',
	);
	const currentIndex = Array.from(accordionElements).findIndex(
		(element) => element.id === accessibility.value.headerId,
	);

	if (currentIndex === -1) return;

	let nextIndex: number;
	if (direction === 'down') {
		nextIndex = currentIndex === accordionElements.length - 1 ? 0 : currentIndex + 1;
	} else {
		nextIndex = currentIndex === 0 ? accordionElements.length - 1 : currentIndex - 1;
	}

	(accordionElements[nextIndex] as HTMLElement)?.focus();
}

watch(
	() => props.open,
	(val) => {
		isOpen.value = val ?? false;
	},
	{ immediate: true },
);

watch(
	() => accordionGroup?.openItems,
	(openItems) => {
		if (accordionGroup && openItems) {
			isOpen.value = openItems.has(props.id);
		}
	},
	{ deep: true, immediate: true },
);

onMounted(() => {
	if (accordionGroup) {
		accordionGroup.registerItem(props.id, props.open ?? false);
	}
});
</script>
