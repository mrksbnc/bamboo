<template>
	<div class="bo-popover-container">
		<!-- Trigger element -->
		<div
			ref="triggerRef"
			class="bo-popover-trigger inline-block"
			@click="onTriggerClick"
			@mouseenter="onTriggerMouseEnter"
			@mouseleave="onTriggerMouseLeave"
			@focus="onTriggerFocus"
			@blur="onTriggerBlur"
		>
			<slot name="trigger"></slot>
		</div>

		<!-- Popover content -->
		<Teleport to="body">
			<div
				v-if="isOpen"
				ref="popoverRef"
				:id="popoverId"
				role="dialog"
				:class="popoverClasses"
				:style="{
					maxWidth: '20rem',
					visibility: isOpen ? 'visible' : 'hidden',
					opacity: isOpen ? '1' : '0',
					transform: isOpen && animation !== 'fade' ? 'scale(1) translate(0, 0)' : '',
				}"
				:tabindex="interactive ? 0 : -1"
				@mouseenter="onPopoverMouseEnter"
				@mouseleave="onPopoverMouseLeave"
				@click.stop
			>
				<!-- Arrow -->
				<div
					v-if="arrow"
					class="bo-popover-arrow absolute h-2 w-2 rotate-45 transform bg-white dark:bg-gray-800"
					:style="arrowStyles"
				></div>

				<!-- Popover content -->
				<div class="bo-popover-content relative z-10">
					<slot>
						<div
							v-if="title"
							class="bo-popover-title"
						>
							{{ title }}
						</div>
						<div
							v-if="content"
							class="bo-popover-body"
						>
							{{ content }}
						</div>
					</slot>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import { IdentityService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, nextTick, onBeforeUnmount, onMounted, ref, toRefs, watch } from 'vue';
import { BoPopoverPlacement, BoPopoverTrigger, type BoPopoverProps } from './bo-popover';

const props = withDefaults(defineProps<BoPopoverProps>(), {
	id: () => IdentityService.instance.generateId('popover'),
	modelValue: false,
	placement: () => BoPopoverPlacement.bottom,
	offset: 8,
	trigger: () => BoPopoverTrigger.click,
	interactive: true,
	title: undefined,
	content: undefined,
	size: () => BoSize.default,
	popoverClass: '',
	arrow: true,
	animationDuration: 300,
	animation: 'fade',
	shadow: true,
	border: true,
	closeOnOutsideClick: true,
});

const emit = defineEmits<{
	'update:modelValue': [value: boolean];
	opened: [];
	closed: [];
}>();

const {
	id,
	modelValue,
	placement,
	offset,
	trigger,
	interactive,
	title,
	content,
	size,
	popoverClass,
	arrow,
	animationDuration,
	animation,
	shadow,
	border,
	closeOnOutsideClick,
} = toRefs(props);

const triggerRef = ref<HTMLElement | null>(null);
const popoverRef = ref<HTMLElement | null>(null);
const isOpen = ref(modelValue.value);
const popoverId = ref(id.value);
const hoverTimeout = ref<number | undefined>(undefined);

// Watch for changes in modelValue to update isOpen
watch(modelValue, (newValue) => {
	isOpen.value = newValue;
});

// Watch for changes in isOpen to emit events
watch(isOpen, (newValue) => {
	emit('update:modelValue', newValue);
	if (newValue) {
		emit('opened');
		nextTick(() => {
			positionPopover();
		});
	} else {
		emit('closed');
	}
});

// Computed styles and classes
const popoverClasses = computed(() => {
	return TailwindService.instance.merge(
		'bo-popover fixed z-[9999] rounded-lg bg-white p-4 font-sans text-base font-normal text-gray-900 shadow-none outline-none transition-opacity dark:bg-gray-800 dark:text-white',
		shadow.value ? 'shadow-lg' : '',
		border.value ? 'border border-gray-200 dark:border-gray-700' : '',
		animation.value === 'fade' ? 'transition-opacity duration-300' : '',
		animation.value === 'scale' ? 'transition-transform duration-300 scale-95 origin-center' : '',
		animation.value === 'shift' ? 'transition-transform duration-300 -translate-y-2' : '',
		sizeClasses.value,
		popoverClass.value,
	);
});

const arrowStyles = computed(() => {
	const placementVal = placement.value;

	if (placementVal.startsWith('top')) {
		return {
			bottom: '-4px',
			left:
				placementVal === BoPopoverPlacement.topStart
					? '12px'
					: placementVal === BoPopoverPlacement.topEnd
						? 'calc(100% - 12px)'
						: '50%',
			transform:
				placementVal === BoPopoverPlacement.topStart
					? 'translateX(0) rotate(45deg)'
					: placementVal === BoPopoverPlacement.topEnd
						? 'translateX(-100%) rotate(45deg)'
						: 'translateX(-50%) rotate(45deg)',
			'border-right': border.value ? '1px solid #e5e7eb' : '',
			'border-bottom': border.value ? '1px solid #e5e7eb' : '',
		};
	} else if (placementVal.startsWith('right')) {
		return {
			left: '-4px',
			top:
				placementVal === BoPopoverPlacement.rightStart
					? '12px'
					: placementVal === BoPopoverPlacement.rightEnd
						? 'calc(100% - 12px)'
						: '50%',
			transform:
				placementVal === BoPopoverPlacement.rightStart
					? 'translateY(0) rotate(45deg)'
					: placementVal === BoPopoverPlacement.rightEnd
						? 'translateY(-100%) rotate(45deg)'
						: 'translateY(-50%) rotate(45deg)',
			'border-left': border.value ? '1px solid #e5e7eb' : '',
			'border-top': border.value ? '1px solid #e5e7eb' : '',
		};
	} else if (placementVal.startsWith('bottom')) {
		return {
			top: '-4px',
			left:
				placementVal === BoPopoverPlacement.bottomStart
					? '12px'
					: placementVal === BoPopoverPlacement.bottomEnd
						? 'calc(100% - 12px)'
						: '50%',
			transform:
				placementVal === BoPopoverPlacement.bottomStart
					? 'translateX(0) rotate(45deg)'
					: placementVal === BoPopoverPlacement.bottomEnd
						? 'translateX(-100%) rotate(45deg)'
						: 'translateX(-50%) rotate(45deg)',
			'border-left': border.value ? '1px solid #e5e7eb' : '',
			'border-top': border.value ? '1px solid #e5e7eb' : '',
		};
	} else if (placementVal.startsWith('left')) {
		return {
			right: '-4px',
			top:
				placementVal === BoPopoverPlacement.leftStart
					? '12px'
					: placementVal === BoPopoverPlacement.leftEnd
						? 'calc(100% - 12px)'
						: '50%',
			transform:
				placementVal === BoPopoverPlacement.leftStart
					? 'translateY(0) rotate(45deg)'
					: placementVal === BoPopoverPlacement.leftEnd
						? 'translateY(-100%) rotate(45deg)'
						: 'translateY(-50%) rotate(45deg)',
			'border-right': border.value ? '1px solid #e5e7eb' : '',
			'border-bottom': border.value ? '1px solid #e5e7eb' : '',
		};
	}

	return {};
});

const sizeClasses = computed(() => {
	switch (size.value) {
		case BoSize.small:
			return 'text-xs p-2';
		case BoSize.large:
			return 'text-base p-6';
		default:
			return 'text-sm p-4';
	}
});

// Methods
const positionPopover = () => {
	if (!triggerRef.value || !popoverRef.value) return;

	const triggerRect = triggerRef.value.getBoundingClientRect();
	const popoverRect = popoverRef.value.getBoundingClientRect();
	const placementVal = placement.value;
	const offsetVal = offset.value;

	// Calculate position based on placement
	let top: number, left: number;

	switch (placementVal) {
		case BoPopoverPlacement.top:
			top = triggerRect.top - popoverRect.height - offsetVal;
			left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
			break;
		case BoPopoverPlacement.topStart:
			top = triggerRect.top - popoverRect.height - offsetVal;
			left = triggerRect.left;
			break;
		case BoPopoverPlacement.topEnd:
			top = triggerRect.top - popoverRect.height - offsetVal;
			left = triggerRect.right - popoverRect.width;
			break;
		case BoPopoverPlacement.right:
			top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
			left = triggerRect.right + offsetVal;
			break;
		case BoPopoverPlacement.rightStart:
			top = triggerRect.top;
			left = triggerRect.right + offsetVal;
			break;
		case BoPopoverPlacement.rightEnd:
			top = triggerRect.bottom - popoverRect.height;
			left = triggerRect.right + offsetVal;
			break;
		case BoPopoverPlacement.bottom:
			top = triggerRect.bottom + offsetVal;
			left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
			break;
		case BoPopoverPlacement.bottomStart:
			top = triggerRect.bottom + offsetVal;
			left = triggerRect.left;
			break;
		case BoPopoverPlacement.bottomEnd:
			top = triggerRect.bottom + offsetVal;
			left = triggerRect.right - popoverRect.width;
			break;
		case BoPopoverPlacement.left:
			top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
			left = triggerRect.left - popoverRect.width - offsetVal;
			break;
		case BoPopoverPlacement.leftStart:
			top = triggerRect.top;
			left = triggerRect.left - popoverRect.width - offsetVal;
			break;
		case BoPopoverPlacement.leftEnd:
			top = triggerRect.bottom - popoverRect.height;
			left = triggerRect.left - popoverRect.width - offsetVal;
			break;
		default:
			top = triggerRect.bottom + offsetVal;
			left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
	}

	// Adjust for viewport boundaries
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	// Ensure the popover stays within viewport horizontally
	if (left < 10) {
		left = 10;
	} else if (left + popoverRect.width > viewportWidth - 10) {
		left = viewportWidth - popoverRect.width - 10;
	}

	// Ensure the popover stays within viewport vertically
	if (top < 10) {
		top = 10;
	} else if (top + popoverRect.height > viewportHeight - 10) {
		top = viewportHeight - popoverRect.height - 10;
	}

	// Apply position
	if (popoverRef.value) {
		popoverRef.value.style.top = `${top}px`;
		popoverRef.value.style.left = `${left}px`;
	}
};

const onTriggerClick = () => {
	if (trigger.value === BoPopoverTrigger.click) {
		isOpen.value = !isOpen.value;
	}
};

const onTriggerMouseEnter = () => {
	if (trigger.value === BoPopoverTrigger.hover) {
		clearTimeout(hoverTimeout.value);
		isOpen.value = true;
	}
};

const onTriggerMouseLeave = () => {
	if (trigger.value === BoPopoverTrigger.hover && !interactive.value) {
		hoverTimeout.value = window.setTimeout(() => {
			isOpen.value = false;
		}, 100);
	}
};

const onTriggerFocus = () => {
	if (trigger.value === BoPopoverTrigger.focus) {
		isOpen.value = true;
	}
};

const onTriggerBlur = () => {
	if (trigger.value === BoPopoverTrigger.focus) {
		isOpen.value = false;
	}
};

const onPopoverMouseEnter = () => {
	if (trigger.value === BoPopoverTrigger.hover && interactive.value) {
		clearTimeout(hoverTimeout.value);
	}
};

const onPopoverMouseLeave = () => {
	if (trigger.value === BoPopoverTrigger.hover && interactive.value) {
		hoverTimeout.value = window.setTimeout(() => {
			isOpen.value = false;
		}, 100);
	}
};

const onClickOutside = (event: MouseEvent) => {
	if (
		closeOnOutsideClick.value &&
		isOpen.value &&
		triggerRef.value &&
		popoverRef.value &&
		!triggerRef.value.contains(event.target as Node) &&
		!popoverRef.value.contains(event.target as Node)
	) {
		isOpen.value = false;
	}
};

// Lifecycle hooks
onMounted(() => {
	if (closeOnOutsideClick.value) {
		document.addEventListener('click', onClickOutside);
	}

	window.addEventListener('resize', positionPopover);
	window.addEventListener('scroll', positionPopover);
});

onBeforeUnmount(() => {
	if (closeOnOutsideClick.value) {
		document.removeEventListener('click', onClickOutside);
	}

	window.removeEventListener('resize', positionPopover);
	window.removeEventListener('scroll', positionPopover);

	clearTimeout(hoverTimeout.value);
});
</script>

<style scoped>
.bo-popover-container {
	position: relative;
	display: inline-block;
}

.bo-popover-title {
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.bo-popover-body {
	font-weight: normal;
}
</style>
