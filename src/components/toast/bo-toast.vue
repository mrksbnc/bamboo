<template>
	<div
		:class="toastContainerClasses"
		:data-testid="`bo-toast-${id}`"
		role="alert"
	>
		<div class="flex items-center gap-2">
			<bo-icon
				v-if="variant !== BoToastVariant.minimal"
				:icon="typeIcons[type]"
				:size="size"
			/>
			<span class="message">
				<bo-text
					:value="message"
					:size="BoFontSize.sm"
					:weight="BoFontWeight.medium"
					class="whitespace-pre-wrap"
				/>
			</span>
		</div>
		<button
			v-if="closable"
			type="button"
			class="rounded-lg p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700"
			@click="close"
			aria-label="Close toast"
		>
			<bo-icon
				:icon="Icon.x"
				:size="size"
			/>
		</button>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import boText from '@/components/text/bo-text.vue';
import { IdentityService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, onMounted, onUnmounted } from 'vue';
import { BoFontSize, BoFontWeight } from '../text';
import { BoToastPosition, BoToastProps, BoToastType, BoToastVariant } from './bo-toast';

const props = withDefaults(defineProps<BoToastProps>(), {
	id: IdentityService.instance.getComponentId(),
	type: BoToastType.info,
	duration: 3000,
	closable: true,
	position: BoToastPosition.top_right,
	size: BoSize.default,
	variant: BoToastVariant.default,
});

const emit = defineEmits<{
	close: [];
}>();

const positionClasses: Record<BoToastPosition, string> = {
	[BoToastPosition.top_left]: 'top-4 left-4',
	[BoToastPosition.top_right]: 'top-4 right-4',
	[BoToastPosition.bottom_left]: 'bottom-4 left-4',
	[BoToastPosition.bottom_right]: 'bottom-4 right-4',
};

const typeClasses: Record<BoToastType, string> = {
	[BoToastType.success]: 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200',
	[BoToastType.error]: 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200',
	[BoToastType.warning]: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
	[BoToastType.info]: 'bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};

const typeIcons: Record<BoToastType, Icon> = {
	[BoToastType.success]: Icon.check_circle,
	[BoToastType.error]: Icon.x_circle,
	[BoToastType.warning]: Icon.alert_triangle,
	[BoToastType.info]: Icon.alert_circle,
};

const sizeClasses: Record<BoSize, string> = {
	[BoSize.extra_small]: 'text-xs',
	[BoSize.small]: 'text-sm',
	[BoSize.default]: 'text-base',
	[BoSize.large]: 'text-lg',
	[BoSize.extra_large]: 'text-xl',
};

const toastContainerClasses = computed<string>(() => {
	const containerClasses =
		'fixed z-50 flex items-center justify-between gap-4 rounded-lg p-4 shadow-lg transition-all';

	return TailwindService.instance.merge(
		containerClasses,
		typeClasses[props.type],
		sizeClasses[props.size],
		positionClasses[props.position],
		props.variant === BoToastVariant.minimal
			? 'bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200'
			: '',
	);
});

let timeoutId: number;

const close = () => {
	emit('close');
};

onMounted(() => {
	if (props.duration > 0) {
		timeoutId = window.setTimeout(close, props.duration);
	}
});

onUnmounted(() => {
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
});
</script>
