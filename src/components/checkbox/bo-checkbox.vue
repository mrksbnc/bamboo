<template>
	<div
		:class="wrapperClasses"
		:tabindex="isDisabled ? -1 : 0"
		:data-testid="constructAttribute(id, 'checkbox')"
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
			:aria-describedby="description ? constructAttribute(id, 'checkbox-description') : undefined"
			:data-testid="constructAttribute(id, 'checkbox-input')"
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
					:class="CHECKBOX_STYLE.layout.label"
					:data-testid="constructAttribute(id, 'checkbox-label')"
				/>
				<bo-text
					v-if="description"
					:id="constructAttribute(id, 'checkbox-description')"
					:value="description"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:cursor="!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed'"
					:class="CHECKBOX_STYLE.layout.description"
					:data-testid="constructAttribute(id, 'checkbox-description')"
				/>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, inject, onMounted, ref } from 'vue';
import { type BoCheckboxGroup } from './bo-checkbox-group.js';
import { type BoCheckboxProps } from './bo-checkbox.js';

const props = withDefaults(defineProps<BoCheckboxProps>(), {
	id: () => IdentityService.instance.getComponentId(),
});

const emit = defineEmits<{
	(e: 'change', event: Event): void;
	(e: 'update:modelValue', value: boolean): void;
}>();

const modelValue = defineModel<boolean>({
	default: false,
});

const { constructAttribute } = useAttributes();

const inputRef = ref<HTMLInputElement>();
const checkboxGroup = inject<BoCheckboxGroup>(InjectKey.CheckboxGroup);

const CHECKBOX_STYLE = {
	layout: {
		wrapper: /*tw*/ 'bo-checkbox flex items-center gap-2',
		input:
			/*tw*/ 'bo-checkbox__input size-4 rounded border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
		textWrapper: /*tw*/ 'bo-checkbox__text-wrapper flex flex-col',
		label: /*tw*/ 'bo-checkbox__label',
		description: /*tw*/ 'bo-checkbox__description',
	},
	appearance: {
		accent: /*tw*/ 'accent-blue-600 focus:ring-blue-500',
		focus: /*tw*/ 'focus:ring-2 focus:ring-offset-0',
	},
	interactive: {
		default: /*tw*/ 'cursor-pointer',
		disabled: /*tw*/ 'cursor-not-allowed opacity-50',
	},
} as const;

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
		CHECKBOX_STYLE.layout.input,
		CHECKBOX_STYLE.appearance.accent,
		CHECKBOX_STYLE.appearance.focus,
		isDisabled.value ? CHECKBOX_STYLE.interactive.disabled : CHECKBOX_STYLE.interactive.default,
	);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		CHECKBOX_STYLE.layout.wrapper,
		isDisabled.value ? CHECKBOX_STYLE.interactive.disabled : CHECKBOX_STYLE.interactive.default,
	);
});

const textWrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		CHECKBOX_STYLE.layout.textWrapper,
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
