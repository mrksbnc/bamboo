<template>
	<div
		:class="[
			'bo-radio',
			{
				'cursor-pointer': !disabled,
				'cursor-not-allowed opacity-60': disabled,
			},
		]"
		:data-testid="`bo-radio-${id}`"
	>
		<input
			:id="id"
			:name="name"
			type="radio"
			:value="value"
			:checked="modelValue === value"
			:disabled="disabled"
			:required="required"
			:class="[
				'bo-radio__input',
				{
					'cursor-pointer': !disabled,
					'cursor-not-allowed': disabled,
				},
			]"
			:aria-label="ariaLabel"
			:aria-describedby="helperTextId"
			:aria-invalid="state === BoRadioState.error"
			@change="onChange"
			:data-testid="`bo-radio-input-${id}`"
		/>
		<label
			:for="id"
			class="bo-radio__label"
			:class="[
				{
					'cursor-pointer': !disabled,
					'cursor-not-allowed': disabled,
				},
			]"
			:data-testid="`bo-radio-label-${id}`"
		>
			<bo-text
				:value="label"
				:size="BoFontSize.sm"
				:weight="BoFontWeight.medium"
				:data-testid="`bo-radio-text-${id}`"
			/>
		</label>

		<!-- Helper text/error container -->
		<div
			v-if="showHelperContainer"
			class="mt-1 flex flex-col gap-1"
			:data-testid="`bo-radio-helper-${id}`"
		>
			<div
				v-if="error"
				class="flex items-center gap-1"
				:data-testid="`bo-radio-error-${id}`"
			>
				<bo-icon
					:size="BoSize.small"
					:icon="Icon.alert_circle"
					:color="BoColor.red_600"
				/>
				<bo-text
					:id="helperTextId"
					:size="BoFontSize.sm"
					:class="helperTextClasses"
					:value="error"
					:data-testid="`bo-radio-error-text-${id}`"
				/>
			</div>
			<bo-text
				v-if="description && !error"
				:id="helperTextId"
				:value="description"
				:size="BoFontSize.sm"
				:class="helperTextClasses"
				:data-testid="`bo-radio-description-${id}`"
			/>
		</div>
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
