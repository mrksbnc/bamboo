<template>
	<div
		:id="id"
		:class="['bo-tooltip__trigger', customCssClass]"
		:data-testid="dataTestId"
		ref="triggerRef"
		@mouseenter="handleMouseEnter"
		@mouseleave="handleMouseLeave"
		@focus="handleFocus"
		@blur="handleBlur"
	>
		<slot />
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService } from '@/services/identity-service';
	import { TooltipService } from '@/services/tooltip-service';
	import { AriaLive } from '@/shared/accessibility';
	import { onUnmounted, ref } from 'vue';
	import type { BoTooltipProps } from './bo-tooltip';

	const props = withDefaults(defineProps<BoTooltipProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-tooltip'),
		position: 'top',
		delay: 200,
		disabled: false,
		ariaLive: AriaLive.polite,
	});

	const triggerRef = ref<HTMLElement | null>(null);
	const tooltipService = TooltipService.instance;

	function handleMouseEnter(): void {
		if (props.disabled || !triggerRef.value || !props.content) {
			return;
		}

		tooltipService.show(triggerRef.value, {
			content: props.content,
			position: props.position,
			delay: props.delay,
			customComponent: props.customComponent,
			customProps: props.customProps,
		});
	}

	function handleMouseLeave(): void {
		if (props.disabled) {
			return;
		}
		tooltipService.hide();
	}

	function handleFocus(): void {
		if (props.disabled || !triggerRef.value || !props.content) {
			return;
		}

		tooltipService.show(triggerRef.value, {
			content: props.content,
			position: props.position,
			delay: props.delay,
			customComponent: props.customComponent,
			customProps: props.customProps,
		});
	}

	function handleBlur(): void {
		if (props.disabled) {
			return;
		}
		tooltipService.hide();
	}

	onUnmounted(() => {
		tooltipService.hide();
	});
</script>

<style scoped lang="scss">
	.bo-tooltip__trigger {
		display: inline-block;
	}
</style>
