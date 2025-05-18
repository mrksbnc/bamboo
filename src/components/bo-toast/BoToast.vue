<template>
	<div
		:class="[
			'toast',
			typeClasses[type],
			sizeClasses[size],
			variant === 'minimal' ? 'minimal' : '',
			positionClasses[position],
		]"
		:data-testid="`bo-toast-${id}`"
		role="alert"
	>
		<div class="toast-content">
			<bo-icon
				v-if="variant !== 'minimal'"
				:icon="typeIcons[type]"
				:size="size"
			/>
			<span class="message">{{ message }}</span>
		</div>
		<button
			v-if="closable"
			type="button"
			class="close-button"
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
import { BoIcon, Icon } from '@/components/bo-icon';
import { IdentityService } from '@/services';
import { BoSize } from '@/shared';
import { onMounted, onUnmounted } from 'vue';
import { BoToastProps, BoToastVariant } from './bo-toast';

const props = withDefaults(defineProps<BoToastProps>(), {
	id: IdentityService.instance.uuid(),
	type: 'info',
	duration: 3000,
	closable: true,
	position: 'top-right',
	size: BoSize.default,
	variant: BoToastVariant.default,
});

const emit = defineEmits<{
	close: [];
}>();

const typeClasses = {
	success: 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200',
	error: 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200',
	warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
	info: 'bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};

const typeIcons = {
	success: Icon.checkCircle,
	error: Icon.xCircle,
	warning: Icon.exclamationCircle,
	info: Icon.informationCircle,
};

const sizeClasses = {
	[BoSize.extra_small]: 'text-xs',
	[BoSize.small]: 'text-sm',
	[BoSize.default]: 'text-base',
	[BoSize.large]: 'text-lg',
	[BoSize.extra_large]: 'text-xl',
};

const positionClasses = {
	'top-left': 'top-4 left-4',
	'top-right': 'top-4 right-4',
	'bottom-left': 'bottom-4 left-4',
	'bottom-right': 'bottom-4 right-4',
};

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

<style scoped>
.toast {
	@apply fixed z-50 flex items-center justify-between gap-4 rounded-lg p-4 shadow-lg transition-all;
}

.toast.minimal {
	@apply bg-white text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200;
}

.toast-content {
	@apply flex items-center gap-2;
}

.close-button {
	@apply rounded-lg p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700;
}

.message {
	@apply font-medium;
}
</style>
