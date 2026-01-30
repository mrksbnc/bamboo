<template>
	<div class="relative inline-block" ref="triggerRef">
		<slot />
		<Teleport to="body">
			<div
				v-if="isVisible"
				ref="tooltipRef"
				:id="id"
				:data-testid="dataTestId"
				:role="role"
				:class="tooltipClasses"
				:style="tooltipStyle"
			>
				{{ content }}
				<slot name="content" />
				<div v-if="arrow" :class="arrowClasses"></div>
			</div>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
	import {
		TOOLTIP_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoTooltipProps,
	} from '@workspace/bamboo-core';
	import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

	const props = withDefaults(defineProps<BoTooltipProps>(), {
		...TOOLTIP_MANIFEST.defaults,
	});

	const emit = defineEmits<{
		show: [];
		hide: [];
	}>();

	// Template refs
	const triggerRef = ref<HTMLElement>();
	const tooltipRef = ref<HTMLElement>();

	// State
	const isVisible = ref(false);
	const tooltipStyle = ref<Record<string, string | number>>({});

	// Computed
	const id = computed(() => props.id ?? generateComponentId('tooltip'));
	const dataTestId = computed(() => props.dataTestId ?? generateDataTestId('BoTooltip'));

	const tooltipClasses = computed(() =>
		mergeTwClasses(
			TOOLTIP_MANIFEST.styles.base,
			TOOLTIP_MANIFEST.styles.placement[props.placement!],
		),
	);

	const arrowClasses = computed(() =>
		mergeTwClasses(
			TOOLTIP_MANIFEST.styles.arrow,
			TOOLTIP_MANIFEST.styles.arrowPlacement[props.placement!],
		),
	);

	// Timers
	let showTimer: ReturnType<typeof setTimeout> | null = null;
	let hideTimer: ReturnType<typeof setTimeout> | null = null;

	// Methods
	const clearTimers = () => {
		if (showTimer) {
			clearTimeout(showTimer);
			showTimer = null;
		}
		if (hideTimer) {
			clearTimeout(hideTimer);
			hideTimer = null;
		}
	};

	const show = () => {
		if (props.disabled) return;

		clearTimers();
		showTimer = setTimeout(() => {
			isVisible.value = true;
			nextTick(() => {
				updatePosition();
				emit('show');
			});
		}, props.showDelay);
	};

	const hide = () => {
		clearTimers();
		hideTimer = setTimeout(() => {
			isVisible.value = false;
			emit('hide');
		}, props.hideDelay);
	};

	const updatePosition = () => {
		if (!triggerRef.value || !tooltipRef.value) return;

		const triggerRect = triggerRef.value.getBoundingClientRect();
		const tooltipRect = tooltipRef.value.getBoundingClientRect();
		const offset = props.offset!;

		let top = 0;
		let left = 0;

		switch (props.placement) {
			case 'top':
				top = triggerRect.top - tooltipRect.height - offset;
				left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
				break;
			case 'top-start':
				top = triggerRect.top - tooltipRect.height - offset;
				left = triggerRect.left;
				break;
			case 'top-end':
				top = triggerRect.top - tooltipRect.height - offset;
				left = triggerRect.right - tooltipRect.width;
				break;
			case 'bottom':
				top = triggerRect.bottom + offset;
				left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
				break;
			case 'bottom-start':
				top = triggerRect.bottom + offset;
				left = triggerRect.left;
				break;
			case 'bottom-end':
				top = triggerRect.bottom + offset;
				left = triggerRect.right - tooltipRect.width;
				break;
			case 'left':
				top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
				left = triggerRect.left - tooltipRect.width - offset;
				break;
			case 'left-start':
				top = triggerRect.top;
				left = triggerRect.left - tooltipRect.width - offset;
				break;
			case 'left-end':
				top = triggerRect.bottom - tooltipRect.height;
				left = triggerRect.left - tooltipRect.width - offset;
				break;
			case 'right':
				top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
				left = triggerRect.right + offset;
				break;
			case 'right-start':
				top = triggerRect.top;
				left = triggerRect.right + offset;
				break;
			case 'right-end':
				top = triggerRect.bottom - tooltipRect.height;
				left = triggerRect.right + offset;
				break;
		}

		// Keep tooltip within viewport
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		if (left < 0) left = 8;
		if (left + tooltipRect.width > viewportWidth) left = viewportWidth - tooltipRect.width - 8;
		if (top < 0) top = 8;
		if (top + tooltipRect.height > viewportHeight) top = viewportHeight - tooltipRect.height - 8;

		tooltipStyle.value = {
			position: 'fixed',
			top: `${top}px`,
			left: `${left}px`,
		};
	};

	// Event handlers
	const handleMouseEnter = () => {
		if (props.trigger === 'hover') show();
	};

	const handleMouseLeave = () => {
		if (props.trigger === 'hover') hide();
	};

	const handleFocus = () => {
		if (props.trigger === 'focus') show();
	};

	const handleBlur = () => {
		if (props.trigger === 'focus') hide();
	};

	const handleClick = () => {
		if (props.trigger === 'click') {
			if (isVisible.value) hide();
			else show();
		}
	};

	// Watch for manual visibility changes
	const handleVisibilityChange = () => {
		if (props.trigger === 'manual') {
			if (props.visible) show();
			else hide();
		}
	};

	// Lifecycle
	onMounted(() => {
		if (!triggerRef.value) return;

		const trigger = triggerRef.value;

		if (props.trigger === 'hover') {
			trigger.addEventListener('mouseenter', handleMouseEnter);
			trigger.addEventListener('mouseleave', handleMouseLeave);
		}

		if (props.trigger === 'focus') {
			trigger.addEventListener('focus', handleFocus);
			trigger.addEventListener('blur', handleBlur);
		}

		if (props.trigger === 'click') {
			trigger.addEventListener('click', handleClick);
		}

		// Handle manual visibility
		if (props.trigger === 'manual' && props.visible) {
			show();
		}
	});

	onUnmounted(() => {
		clearTimers();

		if (!triggerRef.value) return;

		const trigger = triggerRef.value;
		trigger.removeEventListener('mouseenter', handleMouseEnter);
		trigger.removeEventListener('mouseleave', handleMouseLeave);
		trigger.removeEventListener('focus', handleFocus);
		trigger.removeEventListener('blur', handleBlur);
		trigger.removeEventListener('click', handleClick);
	});

	// Watch for prop changes
	watch(() => props.visible, handleVisibilityChange, { immediate: true });
</script>
