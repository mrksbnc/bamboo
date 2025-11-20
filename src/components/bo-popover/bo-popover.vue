<template>
	<div :id="id" class="bo-popover__wrapper" :data-testid="dataTestId">
		<div
			ref="triggerRef"
			class="bo-popover__trigger"
			@click="handleTriggerClick"
			@mouseenter="handleMouseEnter"
			@mouseleave="handleMouseLeave"
			@focus="handleFocus"
			@blur="handleBlur"
		>
			<slot name="trigger" />
		</div>
		<Teleport to="body">
			<div
				v-if="isOpen"
				ref="popoverRef"
				:class="['bo-popover', `bo-popover--${placement}`, customCssClass]"
				:style="popoverStyle"
			>
				<bo-text
					v-if="title"
					:value="title"
					:font-size="BoFontSize.sm"
					:font-weight="BoFontWeight.semibold"
					:variant="BoTextVariant.inherit"
					custom-css-class="bo-popover__title"
				/>
				<div class="bo-popover__content">
					<slot>
						<bo-text
							v-if="content"
							:value="content"
							:font-size="BoFontSize.sm"
							:variant="BoTextVariant.inherit"
						/>
					</slot>
				</div>
			</div>
		</Teleport>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import { nextTick, onMounted, onUnmounted, ref, watch, type CSSProperties } from 'vue';
	import type { BoPopoverProps } from './bo-popover';

	const props = withDefaults(defineProps<BoPopoverProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-popover'),
		placement: 'top',
		trigger: 'click',
		modelValue: false,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: boolean];
	}>();

	const isOpen = ref(props.modelValue);
	const triggerRef = ref<HTMLElement | null>(null);
	const popoverRef = ref<HTMLElement | null>(null);
	const popoverStyle = ref<CSSProperties>({});

	watch(
		() => props.modelValue,
		async (value) => {
			isOpen.value = value;
			if (value) {
				await nextTick();
				updatePosition();
			}
		},
	);

	watch(isOpen, (value) => {
		emit('update:modelValue', value);
		if (value) {
			nextTick(() => updatePosition());
		}
	});

	function handleTriggerClick(): void {
		if (props.trigger === 'click') {
			isOpen.value = !isOpen.value;
		}
	}

	function handleMouseEnter(): void {
		if (props.trigger === 'hover') {
			isOpen.value = true;
		}
	}

	function handleMouseLeave(): void {
		if (props.trigger === 'hover') {
			isOpen.value = false;
		}
	}

	function handleFocus(): void {
		if (props.trigger === 'focus') {
			isOpen.value = true;
		}
	}

	function handleBlur(): void {
		if (props.trigger === 'focus') {
			isOpen.value = false;
		}
	}

	function updatePosition(): void {
		if (!triggerRef.value || !isOpen.value) return;

		const triggerRect = triggerRef.value.getBoundingClientRect();
		const offset = 8;

		let top = 0;
		let left = 0;

		switch (props.placement) {
			case 'top':
				top = triggerRect.top - offset;
				left = triggerRect.left + triggerRect.width / 2;
				break;
			case 'bottom':
				top = triggerRect.bottom + offset;
				left = triggerRect.left + triggerRect.width / 2;
				break;
			case 'left':
				top = triggerRect.top + triggerRect.height / 2;
				left = triggerRect.left - offset;
				break;
			case 'right':
				top = triggerRect.top + triggerRect.height / 2;
				left = triggerRect.right + offset;
				break;
		}

		popoverStyle.value = {
			position: 'fixed',
			top: `${top}px`,
			left: `${left}px`,
			zIndex: 9999,
		};
	}

	function handleClickOutside(event: MouseEvent): void {
		if (
			isOpen.value &&
			triggerRef.value &&
			popoverRef.value &&
			!triggerRef.value.contains(event.target as Node) &&
			!popoverRef.value.contains(event.target as Node)
		) {
			isOpen.value = false;
		}
	}

	onMounted(() => {
		document.addEventListener('click', handleClickOutside);
		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);
	});

	onUnmounted(() => {
		document.removeEventListener('click', handleClickOutside);
		window.removeEventListener('scroll', updatePosition);
		window.removeEventListener('resize', updatePosition);
	});
</script>

<style scoped lang="scss">
	.bo-popover {
		background-color: var(--popover-bg);
		border: 1px solid var(--popover-border);
		border-radius: 0.5rem;
		padding: 0.75rem;
		box-shadow: var(--popover-shadow);
		max-width: 20rem;
		color: var(--popover-text);
		animation: fadeIn 0.15s ease-in-out;

		&__wrapper {
			display: inline-block;
		}

		&__trigger {
		}

		&--top {
			transform: translate(-50%, -100%);
		}

		&--bottom {
			transform: translate(-50%, 0);
		}

		&--left {
			transform: translate(-100%, -50%);
		}

		&--right {
			transform: translate(0, -50%);
		}

		&__title {
			margin-bottom: 0.5rem;
		}

		&__content {
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
