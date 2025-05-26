<template>
	<button
		:class="itemClasses"
		:disabled="disabled"
		:aria-pressed="active ? 'true' : 'false'"
		:aria-label="computedAriaLabel"
		:data-testid="constructAttribute(id, 'button-group-item')"
		@click="onSelect"
	>
		<bo-icon
			v-if="prefixIcon !== Icon.none"
			:icon="prefixIcon"
			:aria-hidden="true"
			:class="BUTTON_GROUP_ITEM_STYLE.layout.prefixIcon"
			:data-testid="constructAttribute(id, 'button-group-item-prefix-icon')"
		/>
		<bo-text
			v-if="label"
			:size="fontSize"
			:clickable="!disabled"
			:weight="BoFontWeight.medium"
			:value="StringService.instance.safeString(label)"
			:cursor="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
			:data-testid="constructAttribute(id, 'button-group-item-label')"
		/>
		<bo-icon
			v-if="suffixIcon !== Icon.none"
			:icon="suffixIcon"
			:aria-hidden="true"
			:class="BUTTON_GROUP_ITEM_STYLE.layout.suffixIcon"
			:data-testid="constructAttribute(id, 'button-group-item-suffix-icon')"
		/>
	</button>
</template>

<script setup lang="ts">
import { BoButtonVariant } from '@/components/button/bo-button.js';
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import {
	BoButtonGroupItemProps,
	BoButtonGroupOrientation,
	BoButtonGroupShape,
} from './bo-button-group.js';

const props = withDefaults(defineProps<BoButtonGroupItemProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	shape: () => BoButtonGroupShape.rounded,
	variant: () => BoButtonVariant.secondary,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	position: () => ({
		index: -1,
		length: -1,
		isLast: false,
		isFirst: false,
		activeIndex: -1,
	}),
});

const emits = defineEmits<{
	(e: 'select', index: number): void;
}>();

const { constructAttribute } = useAttributes();

const BUTTON_GROUP_ITEM_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-button-group-item flex items-center justify-center max-h-fit duration-60 transition-colors',
		prefixIcon: /*tw*/ 'bo-button-group-item__prefix-icon',
		suffixIcon: /*tw*/ 'bo-button-group-item__suffix-icon',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'bo-button-group-item--extra-small px-2 py-1',
		[BoSize.small]: /*tw*/ 'bo-button-group-item--small px-3 py-1.5',
		[BoSize.default]: /*tw*/ 'bo-button-group-item--default px-4 py-2',
		[BoSize.large]: /*tw*/ 'bo-button-group-item--large px-4 py-2',
		[BoSize.extra_large]: /*tw*/ 'bo-button-group-item--extra-large px-5 py-2.5',
	},
	variant: {
		inactive: /*tw*/ 'bo-button-group-item--inactive text-neutral-700 dark:text-neutral-300',
		active: {
			[BoButtonVariant.primary]:
				/*tw*/ 'bo-button-group-item--active-primary bg-blue-600 dark:bg-blue-700 text-white dark:text-white',
			[BoButtonVariant.secondary]:
				/*tw*/ 'bo-button-group-item--active-secondary bg-neutral-700 dark:bg-neutral-600 text-white dark:text-neutral-400',
			[BoButtonVariant.danger]:
				/*tw*/ 'bo-button-group-item--active-danger bg-red-600 dark:bg-red-700 text-white dark:text-white',
			[BoButtonVariant.success]:
				/*tw*/ 'bo-button-group-item--active-success bg-green-600 dark:bg-green-700 text-white dark:text-white',
			[BoButtonVariant.warning]:
				/*tw*/ 'bo-button-group-item--active-warning bg-yellow-500 dark:bg-yellow-600 text-white dark:text-white',
			[BoButtonVariant.light]:
				/*tw*/ 'bo-button-group-item--active-light bg-gray-100 dark:bg-gray-200 text-gray-900 dark:text-gray-900',
			[BoButtonVariant.dark]:
				/*tw*/ 'bo-button-group-item--active-dark bg-gray-900 dark:bg-black text-white dark:text-white',
		},
	},
	hover: {
		[BoButtonVariant.primary]:
			/*tw*/ 'hover:bg-blue-700 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white',
		[BoButtonVariant.secondary]:
			/*tw*/ 'hover:bg-neutral-700 dark:hover:bg-neutral-600 hover:text-neutral-300 dark:hover:text-neutral-700',
		[BoButtonVariant.danger]:
			/*tw*/ 'hover:bg-red-700 dark:hover:bg-red-800 hover:text-white dark:hover:text-white',
		[BoButtonVariant.success]:
			/*tw*/ 'hover:bg-green-700 dark:hover:bg-green-800 hover:text-white dark:hover:text-white',
		[BoButtonVariant.warning]:
			/*tw*/ 'hover:bg-yellow-600 dark:hover:bg-yellow-700 hover:text-white dark:hover:text-white',
		[BoButtonVariant.light]:
			/*tw*/ 'hover:bg-gray-200 dark:hover:bg-gray-300 hover:text-gray-900 dark:hover:text-gray-900',
		[BoButtonVariant.dark]:
			/*tw*/ 'hover:bg-black dark:hover:bg-gray-800 hover:text-white dark:hover:text-white',
	},
	border: {
		[BoButtonVariant.primary]: /*tw*/ 'border-blue-600 dark:border-blue-600',
		[BoButtonVariant.secondary]: /*tw*/ 'border-neutral-600 dark:border-neutral-600',
		[BoButtonVariant.danger]: /*tw*/ 'border-red-600 dark:border-red-600',
		[BoButtonVariant.success]: /*tw*/ 'border-green-600 dark:border-green-600',
		[BoButtonVariant.warning]: /*tw*/ 'border-yellow-600 dark:border-yellow-600',
		[BoButtonVariant.light]: /*tw*/ 'border-gray-200 dark:border-gray-200',
		[BoButtonVariant.dark]: /*tw*/ 'border-gray-800 dark:border-gray-800',
	},
	shape: {
		[BoButtonGroupShape.square]: /*tw*/ 'bo-button-group-item--square rounded-none',
		[BoButtonGroupShape.rounded]: /*tw*/ 'bo-button-group-item--rounded',
	},
	interactive: {
		default: /*tw*/ 'cursor-pointer',
		disabled: /*tw*/ 'cursor-not-allowed opacity-50',
	},
} as const;

const fontSize = computed<BoFontSize>(() => {
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

const computedAriaLabel = computed<string>(() => {
	if (props.ariaLabel && !StringService.instance.isEmptyStr(props.ariaLabel)) {
		return props.ariaLabel;
	}

	if (StringService.instance.isEmptyStr(props.label)) {
		return 'Button';
	}

	return props.label ?? 'Button';
});

const variantClasses = computed<string>(() => {
	if (props.active && props.variant) {
		return BUTTON_GROUP_ITEM_STYLE.variant.active[props.variant];
	}
	return BUTTON_GROUP_ITEM_STYLE.variant.inactive;
});

const hoverClasses = computed<string>(() => {
	if (props.disabled || !props.variant) {
		return '';
	}
	return BUTTON_GROUP_ITEM_STYLE.hover[props.variant];
});

const borderRadiusClasses = computed<string>(() => {
	if (props.shape === BoButtonGroupShape.square) {
		return BUTTON_GROUP_ITEM_STYLE.shape[BoButtonGroupShape.square];
	}

	let classes: string[] = [BUTTON_GROUP_ITEM_STYLE.shape[BoButtonGroupShape.rounded]];

	if (props.orientation === BoButtonGroupOrientation.vertical) {
		if (props.position.isFirst && props.position.isLast) {
			classes.push(/*tw*/ 'rounded-md');
		} else if (props.position.isFirst) {
			classes.push(/*tw*/ 'rounded-t-md');
		} else if (props.position.isLast) {
			classes.push(/*tw*/ 'rounded-b-md');
		} else {
			classes.push(/*tw*/ 'rounded-none');
		}
	} else {
		if (props.position.isFirst && props.position.isLast) {
			classes.push(/*tw*/ 'rounded-md');
		} else if (props.position.isFirst) {
			classes.push(/*tw*/ 'rounded-l-md');
		} else if (props.position.isLast) {
			classes.push(/*tw*/ 'rounded-r-md');
		} else {
			classes.push(/*tw*/ 'rounded-none');
		}
	}

	return TailwindService.instance.merge(...classes);
});

const borderClasses = computed<string>(() => {
	const { isFirst, isLast, activeIndex, index, length } = props.position;
	const isOnlyItem = isFirst && isLast;

	if (isOnlyItem || props.active) {
		return 'border';
	}

	const prevItemActive = index - 1 === activeIndex;
	const nextItemActive = index + 1 === activeIndex;

	let classes = [];

	if (length === 2 && !nextItemActive) {
		classes.push('border-r');
	}

	if (props.orientation === BoButtonGroupOrientation.vertical) {
		classes.push('border-x');

		if (isFirst) {
			classes.push('border-t');
		} else if (isLast) {
			classes.push('border-b');
		} else {
			if (!prevItemActive && !nextItemActive) {
				classes.push('border-y');
			} else if (prevItemActive) {
				classes.push('border-t-0 border-b');
			} else if (nextItemActive) {
				classes.push('border-b-0 border-t');
			}
		}

		return TailwindService.instance.merge(...classes);
	} else {
		classes.push('border-y');
	}

	if (isFirst) {
		classes.push('border-l');
	} else if (isLast) {
		classes.push('border-r');
	} else {
		if (!prevItemActive && !nextItemActive) {
			classes.push('border-x');
		} else if (prevItemActive) {
			classes.push('border-l-0 border-r');
		} else if (nextItemActive) {
			classes.push('border-r-0 border-l');
		}
	}

	return TailwindService.instance.merge(...classes);
});

const interactiveClasses = computed<string>(() => {
	return props.disabled
		? BUTTON_GROUP_ITEM_STYLE.interactive.disabled
		: BUTTON_GROUP_ITEM_STYLE.interactive.default;
});

const itemClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		hoverClasses.value,
		borderClasses.value,
		variantClasses.value,
		interactiveClasses.value,
		borderRadiusClasses.value,
		BUTTON_GROUP_ITEM_STYLE.layout.container,
		BUTTON_GROUP_ITEM_STYLE.size[props.size],
		BUTTON_GROUP_ITEM_STYLE.border[props.variant],
	);
});

function onSelect() {
	if (props.disabled) {
		return;
	}
	emits('select', props.position.index);
}
</script>
