<template>
	<div class="bo-popover-container relative inline-block">
		<div
			ref="triggerRef"
			class="bo-popover-trigger inline-block"
			@blur="onTriggerBlur"
			@click="onTriggerClick"
			@focus="onTriggerFocus"
			@mouseenter="onTriggerMouseEnter"
			@mouseleave="onTriggerMouseLeave"
			:data-testid="constructAttribute(id, 'popover-trigger')"
		>
			<slot name="trigger"></slot>
		</div>
		<Teleport to="body">
			<div
				v-if="isOpen"
				ref="popoverRef"
				:id="constructAttribute(id, 'popover')"
				role="dialog"
				:class="popoverClasses"
				:tabindex="interactive ? 0 : -1"
				@mouseenter="onPopoverMouseEnter"
				@mouseleave="onPopoverMouseLeave"
				@click.stop
				:data-testid="constructAttribute(id, 'popover-content')"
			>
				<i
					v-if="arrow"
					:class="arrowClasses"
					:data-testid="constructAttribute(id, 'popover-arrow')"
				></i>
				<div class="bo-popover-content relative">
					<slot>
						<div
							v-if="title"
							class="bo-popover-title"
							:data-testid="constructAttribute(id, 'popover-title')"
						>
							<bo-text
								v-if="title"
								:value="title"
								:size="BoFontSize.base"
								:color="BoTextColor.default"
								:weight="BoFontWeight.semibold"
							/>
						</div>
						<div
							v-if="content"
							class="bo-popover-body"
							:data-testid="constructAttribute(id, 'popover-body')"
						>
							<bo-text
								v-if="content"
								:value="content"
								:size="BoFontSize.sm"
								:weight="BoFontWeight.regular"
								:color="BoTextColor.secondary"
							/>
						</div>
					</slot>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { onClickOutside, useEventListener } from '@vueuse/core';
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue';
import { BoPopoverPlacement, BoPopoverTrigger, type BoPopoverProps } from './bo-popover.js';

const props = withDefaults(defineProps<BoPopoverProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	placement: BoPopoverPlacement.bottom,
	offset: 8,
	arrow: true,
	shadow: true,
	border: true,
	interactive: true,
	closeOnOutsideClick: true,
	size: BoSize.default,
	trigger: BoPopoverTrigger.click,
});

const modelValue = defineModel<boolean>({
	default: false,
});

const emit = defineEmits<{
	(e: 'opened'): void;
	(e: 'closed'): void;
}>();

const { constructAttribute } = useAttributes();

const isOpen = ref(modelValue.value);

const triggerRef = ref<HTMLElement>();
const popoverRef = ref<HTMLElement>();

const hoverTimeout = ref<NodeJS.Timeout>();

const POPOVER_STYLE = {
	layout: {
		backdrop:
			/*tw*/ 'bo-popover max-w-80 fixed z-40 rounded-lg bg-white font-sans text-base font-normal text-gray-900 shadow-none outline-none transition-opacity dark:bg-gray-800 dark:text-white',
		arrow: /*tw*/ 'bo-popover-arrow absolute h-2 w-2 rotate-45 transform bg-white dark:bg-gray-800',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'text-xs p-1',
		[BoSize.small]: /*tw*/ 'text-xs p-2',
		[BoSize.default]: /*tw*/ 'text-sm p-4',
		[BoSize.large]: /*tw*/ 'text-base p-6',
		[BoSize.extra_large]: /*tw*/ 'text-lg p-8',
	},
	state: {
		shadow: /*tw*/ 'shadow-lg',
		border: /*tw*/ 'border border-gray-200 dark:border-gray-700',
		visible: /*tw*/ 'opacity-100 visible fade-in',
		hidden: /*tw*/ 'opacity-0 invisible fade-out',
	},
	placement: {
		arrow: {
			top: {
				position: /*tw*/ '-bottom-1',
				border: /*tw*/ 'border-r border-b border-gray-200 dark:border-gray-700',
			},
			right: {
				position: /*tw*/ '-left-1',
				border: /*tw*/ 'border-t border-l border-gray-200 dark:border-gray-700',
			},
			bottom: {
				position: /*tw*/ '-top-1',
				border: /*tw*/ 'border-t border-l border-gray-200 dark:border-gray-700',
			},
			left: {
				position: /*tw*/ '-right-1',
				border: /*tw*/ 'border-r border-b border-gray-200 dark:border-gray-700',
			},
		},
	},
} as const;

const popoverClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		POPOVER_STYLE.layout.backdrop,
		props.shadow ? POPOVER_STYLE.state.shadow : '',
		props.border ? POPOVER_STYLE.state.border : '',
		POPOVER_STYLE.size[props.size],
		props.popoverClass,
		isOpen.value ? POPOVER_STYLE.state.visible : POPOVER_STYLE.state.hidden,
	);
});

const arrowClasses = computed<string>(() => {
	const baseArrowClasses = POPOVER_STYLE.layout.arrow;

	if (props.placement.startsWith('top')) {
		const position = POPOVER_STYLE.placement.arrow.top.position;
		const border = props.border ? POPOVER_STYLE.placement.arrow.top.border : '';
		const left =
			props.placement === BoPopoverPlacement.top_start
				? /*tw*/ 'left-3'
				: props.placement === BoPopoverPlacement.top_end
					? /*tw*/ 'left-[calc(100%_-_12px)]'
					: /*tw*/ 'left-2/4';
		const transform =
			props.placement === BoPopoverPlacement.top_start
				? /*tw*/ 'translate-x-0 rotate-45'
				: props.placement === BoPopoverPlacement.top_end
					? /*tw*/ '-translate-x-full rotate-45'
					: /*tw*/ '-translate-x-2/4 rotate-45';

		return TailwindService.instance.merge(baseArrowClasses, position, left, transform, border);
	} else if (props.placement.startsWith('right')) {
		const position = POPOVER_STYLE.placement.arrow.right.position;
		const border = props.border ? POPOVER_STYLE.placement.arrow.right.border : '';
		const top =
			props.placement === BoPopoverPlacement.right_start
				? /*tw*/ 'top-3'
				: props.placement === BoPopoverPlacement.right_end
					? /*tw*/ 'top-[calc(100%_-_12px)]'
					: /*tw*/ 'top-2/4';
		const transform =
			props.placement === BoPopoverPlacement.right_start
				? /*tw*/ 'translate-y-0 rotate-45'
				: props.placement === BoPopoverPlacement.right_end
					? /*tw*/ '-translate-y-full -rotate-45'
					: /*tw*/ '-translate-y-2/4 -rotate-45';

		return TailwindService.instance.merge(baseArrowClasses, position, top, transform, border);
	} else if (props.placement.startsWith('bottom')) {
		const position = POPOVER_STYLE.placement.arrow.bottom.position;
		const border = props.border ? POPOVER_STYLE.placement.arrow.bottom.border : '';
		const left =
			props.placement === BoPopoverPlacement.bottom_start
				? /*tw*/ 'left-3'
				: props.placement === BoPopoverPlacement.bottom_end
					? /*tw*/ 'left-[calc(100%_-_12px)]'
					: /*tw*/ 'left-2/4';
		const transform =
			props.placement === BoPopoverPlacement.bottom_start
				? /*tw*/ 'translate-x-0 rotate-45'
				: props.placement === BoPopoverPlacement.bottom_end
					? /*tw*/ '-translate-x-full rotate-45'
					: /*tw*/ '-translate-x-2/4 rotate-45';

		return TailwindService.instance.merge(baseArrowClasses, position, left, transform, border);
	} else if (props.placement.startsWith('left')) {
		const position = POPOVER_STYLE.placement.arrow.left.position;
		const border = props.border ? POPOVER_STYLE.placement.arrow.left.border : '';
		const top =
			props.placement === BoPopoverPlacement.left_start
				? /*tw*/ 'top-3'
				: props.placement === BoPopoverPlacement.left_end
					? /*tw*/ 'top-[calc(100%_-_12px)]'
					: /*tw*/ 'top-2/4';
		const transform =
			props.placement === BoPopoverPlacement.left_start
				? /*tw*/ 'translate-y-0 -rotate-45'
				: props.placement === BoPopoverPlacement.left_end
					? /*tw*/ '-translate-y-full -rotate-45'
					: /*tw*/ '-translate-y-2/4 -rotate-45';

		return TailwindService.instance.merge(baseArrowClasses, position, top, transform, border);
	}

	return '';
});

function positionPopover(): void {
	if (!triggerRef.value || !popoverRef.value || !isOpen.value) {
		return;
	}

	// Wait for the next frame to ensure the popover is rendered
	requestAnimationFrame(() => {
		if (!triggerRef.value || !popoverRef.value || !isOpen.value) {
			return;
		}

		const triggerRect = triggerRef.value.getBoundingClientRect();
		const popoverRect = popoverRef.value.getBoundingClientRect();

		let top: number, left: number;

		switch (props.placement) {
			case BoPopoverPlacement.top:
				top = triggerRect.top - popoverRect.height - props.offset;
				left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
				break;
			case BoPopoverPlacement.top_start:
				top = triggerRect.top - popoverRect.height - props.offset;
				left = triggerRect.left;
				break;
			case BoPopoverPlacement.top_end:
				top = triggerRect.top - popoverRect.height - props.offset;
				left = triggerRect.right - popoverRect.width;
				break;
			case BoPopoverPlacement.right:
				top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
				left = triggerRect.right + props.offset;
				break;
			case BoPopoverPlacement.right_start:
				top = triggerRect.top;
				left = triggerRect.right + props.offset;
				break;
			case BoPopoverPlacement.right_end:
				top = triggerRect.bottom - popoverRect.height;
				left = triggerRect.right + props.offset;
				break;
			case BoPopoverPlacement.bottom:
				top = triggerRect.bottom + props.offset;
				left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
				break;
			case BoPopoverPlacement.bottom_start:
				top = triggerRect.bottom + props.offset;
				left = triggerRect.left;
				break;
			case BoPopoverPlacement.bottom_end:
				top = triggerRect.bottom + props.offset;
				left = triggerRect.right - popoverRect.width;
				break;
			case BoPopoverPlacement.left:
				top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
				left = triggerRect.left - popoverRect.width - props.offset;
				break;
			case BoPopoverPlacement.left_start:
				top = triggerRect.top;
				left = triggerRef.value.offsetLeft - popoverRect.width - props.offset;
				break;
			case BoPopoverPlacement.left_end:
				top = triggerRect.bottom - popoverRect.height;
				left = triggerRect.left - popoverRect.width - props.offset;
				break;
			default:
				top = triggerRect.bottom + props.offset;
				left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
		}

		if (typeof window !== 'undefined') {
			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			// Constrain to viewport with some padding
			if (left < 10) {
				left = 10;
			} else if (left + popoverRect.width > viewportWidth - 10) {
				left = viewportWidth - popoverRect.width - 10;
			}

			if (top < 10) {
				top = 10;
			} else if (top + popoverRect.height > viewportHeight - 10) {
				top = viewportHeight - popoverRect.height - 10;
			}
		}

		if (popoverRef.value) {
			popoverRef.value.style.top = `${top}px`;
			popoverRef.value.style.left = `${left}px`;
		}
	});
}

function onTriggerClick(): void {
	if (props.trigger === BoPopoverTrigger.click) {
		isOpen.value = !isOpen.value;
	}
}

function onTriggerMouseEnter(): void {
	if (props.trigger === BoPopoverTrigger.hover) {
		clearTimeout(hoverTimeout.value);
		isOpen.value = true;
	}
}

function onTriggerMouseLeave(): void {
	if (props.trigger === BoPopoverTrigger.hover && !props.interactive) {
		hoverTimeout.value = setTimeout(() => {
			isOpen.value = false;
		}, 100);
	}
}

function onTriggerFocus(): void {
	if (props.trigger === BoPopoverTrigger.focus) {
		isOpen.value = true;
	}
}

function onTriggerBlur(): void {
	if (props.trigger === BoPopoverTrigger.focus) {
		isOpen.value = false;
	}
}

function onPopoverMouseEnter(): void {
	if (props.trigger === BoPopoverTrigger.hover && props.interactive) {
		clearTimeout(hoverTimeout.value);
	}
}

function onPopoverMouseLeave(): void {
	if (props.trigger === BoPopoverTrigger.hover && props.interactive) {
		hoverTimeout.value = setTimeout(() => {
			isOpen.value = false;
		}, 100);
	}
}

watch(modelValue, (val) => {
	isOpen.value = val;
});

watch(isOpen, (val) => {
	modelValue.value = val;
	if (val) {
		emit('opened');
		nextTick(() => {
			positionPopover();
		});
	} else {
		emit('closed');
	}
});

onClickOutside(popoverRef, () => {
	if (props.closeOnOutsideClick && isOpen.value) {
		isOpen.value = false;
	}
});

// Only add window event listeners in the browser
if (typeof window !== 'undefined') {
	useEventListener(window, 'resize', positionPopover);
	useEventListener(window, 'scroll', positionPopover);
}

onBeforeUnmount(() => {
	clearTimeout(hoverTimeout.value);
});
</script>
