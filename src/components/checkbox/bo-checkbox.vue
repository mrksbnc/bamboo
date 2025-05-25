<template>
	<div
		v-bind="$attrs"
		:class="wrapperClasses"
		:tabindex="isDisabled ? -1 : 0"
		@click="onClick"
		@keydown="onKeyDown"
	>
		<input
			ref="inputRef"
			type="checkbox"
			:id="id"
			:name="inputName"
			:checked="isChecked"
			:disabled="isDisabled"
			:value="value"
			:class="inputClasses"
			:aria-describedby="description ? `${id}-description` : undefined"
			:data-testid="`bo-checkbox-input-${id}`"
		/>
		<div :class="textWrapperClasses">
			<slot name="label">
				<bo-text
					v-if="label"
					:value="label"
					:size="BoFontSize.base"
					:weight="BoFontWeight.medium"
					:color="BoTextColor.default"
					:cursor="!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed'"
					class="bo-checkbox__label"
					:data-testid="`bo-checkbox-label-${id}`"
				/>
				<bo-text
					v-if="description"
					:id="`${id}-description`"
					:value="description"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:cursor="!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed'"
					class="bo-checkbox__description"
					:data-testid="`bo-checkbox-description-${id}`"
				/>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, inject, onMounted, ref } from 'vue';
import { type BoCheckboxGroup } from './bo-checkbox-group.js';
import { type BoCheckboxProps } from './bo-checkbox.js';

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-checkbox'),
});

const emit = defineEmits<{
	(e: 'change', event: Event): void;
	(e: 'update:modelValue', value: boolean): void;
}>();

const modelValue = defineModel<boolean>({
	default: false,
});

const inputRef = ref<HTMLInputElement>();
const checkboxGroup = inject<BoCheckboxGroup>(InjectKey.CheckboxGroup);

const inputName = computed<string>(() => props.name ?? checkboxGroup?.name ?? '');

const isDisabled = computed<boolean>(() => props.disabled || checkboxGroup?.disabled || false);

const isChecked = computed<boolean>(() => {
	if (checkboxGroup && props.value) {
		return checkboxGroup.selectedValues.includes(props.value);
	}
	return modelValue.value;
});

const inputClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-checkbox__input size-4 rounded border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
		'accent-blue-600 focus:ring-blue-500',
		isDisabled.value ? /*tw*/ 'cursor-not-allowed opacity-50' : /*tw*/ 'cursor-pointer',
		/*tw*/ 'focus:ring-2 focus:ring-offset-0',
	);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-checkbox__wrapper',
		/*tw*/ 'flex items-center gap-2',
		isDisabled.value ? /*tw*/ 'cursor-not-allowed' : /*tw*/ 'cursor-pointer',
	);
});

const textWrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-checkbox__text-wrapper',
		/*tw*/ 'flex flex-col',
		isDisabled.value ? /*tw*/ 'opacity-50' : /*tw*/ '',
	);
});

function onClick(): void {
	if (isDisabled.value) {
		return;
	}

	if (checkboxGroup && props.value) {
		checkboxGroup.select(props.value);
		return;
	}

	const newValue = !modelValue.value;
	modelValue.value = newValue;

	const syntheticEvent = new Event('change', { bubbles: true });

	emit('update:modelValue', newValue);
	emit('change', syntheticEvent);
}

function onKeyDown(event: KeyboardEvent): void {
	if (event.key === 'Space' || event.key === 'Enter') {
		event.preventDefault();
		onClick();
	}
}

onMounted(() => {
	if (checkboxGroup && props.value) {
		checkboxGroup.registerItem(props.value);
	}
});

defineExpose({
	isChecked,
});
</script>
