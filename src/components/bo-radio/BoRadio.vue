<template>
	<div
		:class="containerClasses"
		class="bo-radio"
	>
		<input
			:id="id"
			:name="name"
			type="radio"
			:value="value"
			:checked="modelValue === value"
			:disabled="disabled"
			class="bo-radio__input"
			@change="handleChange"
		/>
		<label
			:for="id"
			class="bo-radio__label"
		>
			<span
				:class="radioClasses"
				class="bo-radio__custom"
			>
				<span class="bo-radio__dot" />
			</span>
			<span
				v-if="label || $slots.default"
				class="bo-radio__content"
			>
				<slot>
					<bo-text
						:value="label"
						:size="textSize"
					/>
				</slot>
			</span>
		</label>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoText } from '@/components/bo-text';
import { IdentityService, StringService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import { BoRadioVariant, type BoRadioProps } from './bo-radio';

const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(defineProps<BoRadioProps>(), {
	id: () => IdentityService.instance.generateId('bo-radio'),
	size: () => BoSize.default,
	variant: () => BoRadioVariant.primary,
});

const { id, name, value, modelValue, disabled, label, size, variant, customColor } = toRefs(props);

const radioSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-3',
	[BoSize.small]: /*tw*/ 'size-4',
	[BoSize.default]: /*tw*/ 'size-5',
	[BoSize.large]: /*tw*/ 'size-6',
	[BoSize.extra_large]: /*tw*/ 'size-7',
};

const radioTextSizeMap = {
	[BoSize.extra_small]: BoFontSize.xs,
	[BoSize.small]: BoFontSize.sm,
	[BoSize.default]: BoFontSize.base,
	[BoSize.large]: BoFontSize.lg,
	[BoSize.extra_large]: BoFontSize.xl,
};

const radioVariantClasses = {
	[BoRadioVariant.primary]:
		/*tw*/ 'peer-checked:border-blue-500 peer-checked:before:bg-blue-500 dark:border-gray-600 dark:peer-checked:border-blue-500 dark:peer-checked:before:bg-blue-500',
	[BoRadioVariant.secondary]:
		/*tw*/ 'peer-checked:border-gray-500 peer-checked:before:bg-gray-500 dark:border-gray-600 dark:peer-checked:border-gray-500 dark:peer-checked:before:bg-gray-500',
	[BoRadioVariant.success]:
		/*tw*/ 'peer-checked:border-green-500 peer-checked:before:bg-green-500 dark:border-gray-600 dark:peer-checked:border-green-500 dark:peer-checked:before:bg-green-500',
	[BoRadioVariant.danger]:
		/*tw*/ 'peer-checked:border-red-500 peer-checked:before:bg-red-500 dark:border-gray-600 dark:peer-checked:border-red-500 dark:peer-checked:before:bg-red-500',
	[BoRadioVariant.warning]:
		/*tw*/ 'peer-checked:border-amber-500 peer-checked:before:bg-amber-500 dark:border-gray-600 dark:peer-checked:border-amber-500 dark:peer-checked:before:bg-amber-500',
	[BoRadioVariant.dark]:
		/*tw*/ 'peer-checked:border-black peer-checked:before:bg-black dark:border-gray-600 dark:peer-checked:border-neutral-300 dark:peer-checked:before:bg-neutral-300',
};

const containerClasses = computed(() => {
	return TailwindService.instance.merge(
		'relative flex items-start',
		disabled.value ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
	);
});

const radioClasses = computed(() => {
	return TailwindService.instance.merge(
		'peer-checked:after:border-blue-500 border-gray-300 dark:border-gray-600 mr-2 flex items-center justify-center rounded-full border bg-white dark:bg-gray-800',
		radioSizeClasses[size.value],
		'relative after:absolute after:size-3/5 after:rounded-full after:opacity-0 after:content-[""] peer-checked:after:opacity-100',
		!StringService.instance.isEmptyStr(customColor.value) ? '' : radioVariantClasses[variant.value],
		'peer hidden',
	);
});

const textSize = computed(() => {
	return radioTextSizeMap[size.value] || BoFontSize.base;
});

function handleChange(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.value);
	emit('change', target.value);
}
</script>

<style scoped>
.bo-radio__input {
	@apply hidden;
}

.bo-radio__input:checked + .bo-radio__label .bo-radio__custom .bo-radio__dot {
	@apply opacity-100;
}

.bo-radio__input:disabled + .bo-radio__label {
	@apply cursor-not-allowed opacity-60;
}

.bo-radio__label {
	@apply flex cursor-pointer items-center;
}

.bo-radio__custom {
	@apply relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors dark:border-gray-600 dark:bg-gray-800;
}

.bo-radio__dot {
	@apply absolute size-3/5 rounded-full opacity-0 transition-opacity;
}

.bo-radio__content {
	@apply ml-2;
}

.bo-radio__input:checked + .bo-radio__label .bo-radio__custom {
	@apply border-blue-500 dark:border-blue-500;
}

.bo-radio__input:checked + .bo-radio__label .bo-radio__dot {
	@apply bg-blue-500 dark:bg-blue-500;
}
</style>
