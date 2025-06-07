<template>
	<div
		:role="accordionAccessibility.container.role"
		ref="accordionRef"
		:class="containerClasses"
		:data-testid="accessibilityTesting.testId"
		:aria-label="accordionAccessibility.container.ariaLabel"
	>
		<div
			:tabindex="accordionAccessibility.header.tabIndex"
			:role="accordionAccessibility.header.role"
			:id="accordionAccessibility.header.id"
			:class="headerClass"
			:aria-expanded="accordionAccessibility.header.ariaExpanded"
			:aria-disabled="accordionAccessibility.header.ariaDisabled"
			:aria-label="accordionAccessibility.header.ariaLabel"
			:aria-controls="accordionAccessibility.header.ariaControls"
			:data-testid="constructAttribute(id, 'accordion-header')"
			:style="headerStyle"
			@click="onAccordionToggle"
			@keydown.enter.prevent="onAccordionToggle"
			@keydown.space.prevent="onAccordionToggle"
			@keydown.arrow-down.prevent="onArrowNavigation(NavigationDirection.down)"
			@keydown.arrow-up.prevent="onArrowNavigation(NavigationDirection.up)"
		>
			<div :class="ACCORDION_STYLE.layout.icon">
				<bo-icon
					v-if="prefixIcon !== Icon.none"
					:icon="prefixIcon"
					:aria-hidden="true"
					:data-testid="constructAttribute(id, 'accordion-prefix-icon')"
				/>
			</div>
			<div :class="ACCORDION_STYLE.layout.title">
				<bo-text
					v-if="title"
					:value="title"
					:size="BoFontSize.base"
					:weight="BoFontWeight.semibold"
					:data-testid="constructAttribute(id, 'accordion-title')"
				/>
			</div>
			<div :class="ACCORDION_STYLE.layout.toggleIcon">
				<bo-icon
					:icon="customIcon"
					:aria-hidden="true"
					:data-testid="constructAttribute(id, 'accordion-toggle-icon')"
					:style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }"
				/>
			</div>
		</div>
		<div
			v-show="accordionAccessibility.content.isVisible"
			:role="accordionAccessibility.content.role"
			ref="accordionBodyRef"
			:class="bodyClasses"
			:id="accordionAccessibility.content.id"
			:data-testid="constructAttribute(id, 'accordion-content')"
			:aria-labelledby="accordionAccessibility.content.ariaLabelledBy"
			:style="bodyStyle"
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
import { BoFontSize, BoFontWeight } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { InjectKey } from '@/shared/injection-key.js';
import {
	NavigationDirection,
	NavigationOrientation,
	TabBehavior,
	type AccessibilityTesting,
	type AccordionAccessibilityConstruct,
	type KeyboardNavigationConstruct,
} from '@/types/accessibility.js';
import { computed, inject, onMounted, ref, watch } from 'vue';
import {
	BoAccordionTitlePosition,
	type AccordionGroup,
	type BoAccordionProps,
} from './bo-accordion.js';

const props = withDefaults(defineProps<BoAccordionProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	index: 0,
	total: 1,
	size: () => BoSize.default,
	titlePosition: () => BoAccordionTitlePosition.start,
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

const isOpen = ref<boolean>(props.open ?? false);
const accordionRef = ref<HTMLElement>();
const accordionBodyRef = ref<HTMLElement>();

const ACCORDION_STYLE = {
	layout: {
		container: /*tw*/ 'bo-accordion w-full',
		header:
			/*tw*/ 'bo-accordion__header flex items-center p-3 sm:p-4 border-x border-t border-neutral-200 dark:border-neutral-700',
		content: /*tw*/ 'bo-accordion__content p-3 sm:p-4 md:p-6',
		body: /*tw*/ 'bo-accordion__body overflow-hidden border-x border-b border-neutral-200 dark:border-neutral-700',
		icon: /*tw*/ 'bo-accordion__icon flex items-center gap-2',
		title: {
			[BoAccordionTitlePosition.start]:
				/*tw*/ 'bo-accordion__title bo-accordion__title--start justify-start flex-1',
			[BoAccordionTitlePosition.center]:
				/*tw*/ 'bo-accordion__title bo-accordion__title--center justify-center flex-1',
			[BoAccordionTitlePosition.end]:
				/*tw*/ 'bo-accordion__title bo-accordion__title--end justify-end flex-1',
		},
		prefixIcon: /*tw*/ 'bo-accordion__icon bo-accordion__icon--prefix',
		toggleIcon: /*tw*/ 'bo-accordion__icon bo-accordion__icon--toggle ml-auto',
	},
	position: {
		first: /*tw*/ 'rounded-t-lg',
		middle: /*tw*/ 'border-t-0',
		last: /*tw*/ 'rounded-b-lg',
		single: /*tw*/ 'rounded-lg',
	},
	state: {
		expanded: /*tw*/ 'bo-accordion--expanded',
		collapsed: /*tw*/ 'bo-accordion--collapsed',
		disabled: /*tw*/ 'bo-accordion--disabled cursor-not-allowed opacity-50',
	},
	appearance: {
		text: /*tw*/ 'bo-accordion__text text-neutral-700 dark:text-neutral-200',
		background: /*tw*/ 'bo-accordion--background bg-neutral-50 dark:bg-neutral-800',
		bodyBackground: /*tw*/ 'bo-accordion__body--background bg-white dark:bg-neutral-900',
		contentText:
			/*tw*/ 'bo-accordion__content--text text-neutral-800 dark:text-neutral-100 text-sm sm:text-base',
		shadow: /*tw*/ 'bo-accordion--shadow shadow-sm dark:shadow-neutral-900/50',
	},
	interactive: {
		header:
			/*tw*/ 'bo-accordion__header--interactive cursor-pointer transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none',
		disabled:
			/*tw*/ 'bo-accordion--disabled cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent',
	},
	animation: {
		icon: /*tw*/ 'bo-accordion__icon--animated transition-transform duration-200 ease-in-out',
		body: /*tw*/ 'bo-accordion__body--animated transition-all duration-300 ease-in-out',
		container: /*tw*/ 'bo-accordion--animated transition-shadow duration-200',
	},
} as const;

const accordionAccessibility = computed<AccordionAccessibilityConstruct>(() => {
	return {
		header: {
			id: constructAttribute(props.id, 'accordion-header'),
			ariaExpanded: isOpen.value,
			ariaDisabled: props.disabled,
			ariaLabel: props.ariaLabel ?? props.title,
			ariaControls: constructAttribute(props.id, 'accordion-body'),
			role: 'button' as const,
			tabIndex: props.disabled ? -1 : 0,
		},
		content: {
			id: constructAttribute(props.id, 'accordion-body'),
			ariaLabelledBy: constructAttribute(props.id, 'accordion-header'),
			role: 'region' as const,
			isVisible: isOpen.value,
		},
		container: {
			role: 'group' as const,
			ariaLabel: props.ariaLabel || props.title || 'Accordion',
		},
	};
});

const keyboardNavigation = computed<KeyboardNavigationConstruct>(() => {
	return {
		currentIndex: 0,
		totalItems: 0,
		orientation: NavigationOrientation.vertical,
		wrap: true,
		homeEndEnabled: false,
		arrowKeysEnabled: !!accordionGroup,
		tabBehavior: TabBehavior.exit,
	};
});

const accessibilityTesting = computed<AccessibilityTesting>(() => {
	return {
		testId: constructAttribute(props.id, 'accordion'),
		role: 'group',
		accessibleName: props.ariaLabel ?? props.title ?? 'Accordion',
		accessibleDescription: `${isOpen.value ? 'Expanded' : 'Collapsed'} accordion section`,
	};
});

const accordionPositionClasses = computed<string>(() => {
	if (props.total === 1) return ACCORDION_STYLE.position.single;
	if (props.index === 0) return ACCORDION_STYLE.position.first;
	if (props.index === props.total - 1) return ACCORDION_STYLE.position.last;
	return ACCORDION_STYLE.position.middle;
});

const containerClasses = computed<string>(() => {
	const stateClasses = [
		isOpen.value ? ACCORDION_STYLE.state.expanded : ACCORDION_STYLE.state.collapsed,
		props.disabled ? ACCORDION_STYLE.state.disabled : '',
	].filter(Boolean);

	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.container,
		accordionPositionClasses.value,
		ACCORDION_STYLE.animation.container,
		ACCORDION_STYLE.appearance.shadow,
		...stateClasses,
	);
});

const headerClass = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.header,
		ACCORDION_STYLE.appearance.text,
		ACCORDION_STYLE.interactive.header,
		ACCORDION_STYLE.appearance.background,
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

const titleClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		ACCORDION_STYLE.layout.title[props.titlePosition],
		ACCORDION_STYLE.interactive.header,
		props.disabled ? ACCORDION_STYLE.interactive.disabled : '',
	);
});

const headerStyle = computed(() => {
	return props.headerBackground ? { backgroundColor: props.headerBackground } : {};
});

const bodyStyle = computed(() => {
	return props.bodyBackground ? { backgroundColor: props.bodyBackground } : {};
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

function onArrowNavigation(direction: NavigationDirection): void {
	if (!keyboardNavigation.value.arrowKeysEnabled || !accordionGroup) return;

	// Validate that direction is a valid NavigationDirection enum value
	if (!Object.values(NavigationDirection).includes(direction)) return;

	const accordionSelector = '[role="button"][aria-controls*="accordion-body"]';
	const accordionElements = document.querySelectorAll(accordionSelector);

	const currentIndex = Array.from(accordionElements).findIndex(
		(element) => element.id === accordionAccessibility.value.header.id,
	);

	if (currentIndex === -1) {
		return;
	}

	let nextIndex: number;
	const totalItems = accordionElements.length;

	switch (direction) {
		case NavigationDirection.down:
			nextIndex = keyboardNavigation.value.wrap
				? currentIndex === totalItems - 1
					? 0
					: currentIndex + 1
				: Math.min(currentIndex + 1, totalItems - 1);
			break;
		case NavigationDirection.up:
			nextIndex = keyboardNavigation.value.wrap
				? currentIndex === 0
					? totalItems - 1
					: currentIndex - 1
				: Math.max(currentIndex - 1, 0);
			break;
		default:
			return;
	}

	const nextElement = accordionElements[nextIndex] as HTMLElement;
	if (nextElement && typeof nextElement.focus === 'function') {
		if (nextElement.getAttribute('tabindex') === '-1') {
			nextElement.setAttribute('tabindex', '0');
		}

		nextElement.focus();

		if (document.activeElement !== nextElement) {
			if (typeof nextElement.scrollIntoView === 'function') {
				nextElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
			}
			setTimeout(() => nextElement.focus(), 100);
		}
	}
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
	} else {
		console.debug(
			'Accordion is not member of a group. If you want to use keyboard navigation, please wrap the accordion in a BoAccordionContainer.',
		);
	}
});
</script>
