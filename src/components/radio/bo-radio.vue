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
			type="radio"
			:id="id"
			:name="inputName"
			:checked="isChecked"
			:disabled="isDisabled"
			:value="value"
			:class="inputClasses"
			:aria-describedby="description ? `${id}-description` : undefined"
			:data-testid="`bo-radio-input-${id}`"
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
					class="bo-radio__label"
					:data-testid="`bo-radio-label-${id}`"
				/>
				<bo-text
					v-if="description"
					:id="`${id}-description`"
					:value="description"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:cursor="!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed'"
					class="bo-radio__description"
					:data-testid="`bo-radio-description-${id}`"
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
import { type BoRadioGroup } from './bo-radio-group.js';
import { type BoRadioProps } from './bo-radio.js';

const props = withDefaults(defineProps<BoRadioProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-radio'),
});

const inputRef = ref<HTMLInputElement>();
const radioGroup = inject<BoRadioGroup>(InjectKey.RadioGroup);

const inputName = computed<string>(() => props.name ?? radioGroup?.name ?? '');

const isDisabled = computed<boolean>(() => props.disabled || radioGroup?.disabled || false);

const isChecked = computed<boolean>(() => {
	if (radioGroup && props.value) {
		return radioGroup.selectedValue === props.value;
	}
	return false;
});

const inputClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-radio__input size-4',
		isDisabled.value ? /*tw*/ 'cursor-not-allowed opacity-50' : /*tw*/ 'cursor-pointer',
	);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-radio__wrapper',
		/*tw*/ 'flex items-center gap-2',
		isDisabled.value ? /*tw*/ 'cursor-not-allowed' : /*tw*/ 'cursor-pointer',
	);
});

const textWrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		'bo-radio__text-wrapper',
		/*tw*/ 'flex flex-col',
		isDisabled.value ? /*tw*/ 'opacity-50' : /*tw*/ '',
	);
});

function onClick(): void {
	if (isDisabled.value || !props.value) {
		return;
	}

	if (radioGroup) {
		radioGroup.select(props.value);
	}
}

function onKeyDown(event: KeyboardEvent): void {
	if (isDisabled.value || !props.value) {
		return;
	}

	if (event.key === 'Space' || event.key === 'Enter') {
		if (radioGroup) {
			radioGroup.select(props.value);
		}
	}
}

onMounted(() => {
	if (radioGroup && props.value) {
		radioGroup.registerItem(props.value, false);
	}
});

defineExpose({
	isChecked,
});
</script>
