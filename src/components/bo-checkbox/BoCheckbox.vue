<template>
	<div
		:class="containerClasses"
		class="bo-checkbox"
	>
		<input
			:id="id"
			:name="name"
			type="checkbox"
			:checked="modelValue"
			:value="value"
			:disabled="disabled"
			class="bo-checkbox__input peer"
			@change="handleChange"
		/>
		<label
			:for="id"
			class="bo-checkbox__label"
		>
			<span
				:class="checkboxClasses"
				class="bo-checkbox__custom"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="bo-checkbox__check"
				>
					<polyline points="6 12 10 16 18 8"></polyline>
				</svg>
			</span>
			<span
				v-if="hasContent"
				class="bo-checkbox__content"
			>
				<slot>
					<span class="flex flex-col gap-1">
						<bo-text
							v-if="label"
							:value="label"
							:size="textSize"
						/>
						<bo-text
							v-if="description"
							:value="description"
							:size="descriptionSize"
							:color="BoTextColor.secondary"
						/>
					</span>
				</slot>
			</span>
		</label>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoText, BoTextColor } from '@/components/bo-text';
import { IdentityService, StringService, TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import { BoCheckboxVariant, type BoCheckboxProps } from './bo-checkbox';

const emit = defineEmits(['update:modelValue', 'change']);

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	id: () => IdentityService.instance.generateId('bo-checkbox'),
	size: () => BoSize.default,
	variant: () => BoCheckboxVariant.primary,
	modelValue: () => false,
});

const { id, name, value, modelValue, disabled, label, description, size, variant, customColor } =
	toRefs(props);

const checkboxSizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-3',
	[BoSize.small]: /*tw*/ 'size-4',
	[BoSize.default]: /*tw*/ 'size-5',
	[BoSize.large]: /*tw*/ 'size-6',
	[BoSize.extra_large]: /*tw*/ 'size-7',
};

const checkboxTextSizeMap = {
	[BoSize.extra_small]: BoFontSize.xs,
	[BoSize.small]: BoFontSize.sm,
	[BoSize.default]: BoFontSize.base,
	[BoSize.large]: BoFontSize.lg,
	[BoSize.extra_large]: BoFontSize.xl,
};

const checkboxVariantClasses = {
	[BoCheckboxVariant.primary]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-blue-500 peer-checked:bg-blue-500 dark:peer-checked:border-blue-500 dark:peer-checked:bg-blue-500',
	[BoCheckboxVariant.secondary]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-gray-500 peer-checked:bg-gray-500 dark:peer-checked:border-gray-500 dark:peer-checked:bg-gray-500',
	[BoCheckboxVariant.success]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-green-500 peer-checked:bg-green-500 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-500',
	[BoCheckboxVariant.danger]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-red-500 peer-checked:bg-red-500 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-500',
	[BoCheckboxVariant.warning]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-amber-500 peer-checked:bg-amber-500 dark:peer-checked:border-amber-500 dark:peer-checked:bg-amber-500',
	[BoCheckboxVariant.dark]:
		/*tw*/ 'border-gray-300 dark:border-gray-600 peer-checked:border-black peer-checked:bg-black dark:peer-checked:border-neutral-300 dark:peer-checked:bg-neutral-300',
};

const containerClasses = computed(() => {
	return TailwindService.instance.merge(
		'relative flex items-start',
		disabled.value ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
	);
});

const checkboxClasses = computed(() => {
	return TailwindService.instance.merge(
		'flex items-center justify-center border rounded mr-2 bg-white dark:bg-gray-800',
		checkboxSizeClasses[size.value],
		!StringService.instance.isEmptyStr(customColor.value)
			? ''
			: checkboxVariantClasses[variant.value],
	);
});

const hasContent = computed(() => {
	return !!label.value || !!description.value || !!slots.default;
});

const textSize = computed(() => {
	return checkboxTextSizeMap[size.value] || BoFontSize.base;
});

const descriptionSize = computed(() => {
	const currentSize = checkboxTextSizeMap[size.value] || BoFontSize.base;
	// Return a size smaller than the current text size
	if (currentSize === BoFontSize.xs) return BoFontSize.xs;
	if (currentSize === BoFontSize.sm) return BoFontSize.xs;
	if (currentSize === BoFontSize.base) return BoFontSize.xs;
	if (currentSize === BoFontSize.lg) return BoFontSize.sm;
	if (currentSize === BoFontSize.xl) return BoFontSize.base;
	return BoFontSize.xs;
});

function handleChange(event: Event) {
	const target = event.target as HTMLInputElement;
	emit('update:modelValue', target.checked);
	emit('change', target.checked);
}

const slots = defineSlots<{
	default?: () => any;
}>();
</script>

<style scoped>
.bo-checkbox__input {
	@apply absolute h-0 w-0 opacity-0;
}

.bo-checkbox__label {
	@apply flex cursor-pointer items-start;
}

.bo-checkbox__custom {
	@apply relative transition-colors;
}

.bo-checkbox__check {
	@apply h-full w-full p-0.5 text-white opacity-0 transition-opacity;
}

.bo-checkbox__content {
	@apply ml-2;
}

.bo-checkbox__input:checked + .bo-checkbox__label .bo-checkbox__custom .bo-checkbox__check {
	@apply opacity-100;
}

.bo-checkbox__input:disabled + .bo-checkbox__label {
	@apply cursor-not-allowed opacity-60;
}

/* Focus state */
.bo-checkbox__input:focus + .bo-checkbox__label .bo-checkbox__custom {
	@apply ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900;
}
</style>
