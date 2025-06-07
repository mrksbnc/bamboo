<template>
	<div
		v-bind="$attrs"
		:class="wrapperClasses"
		:tabindex="isDisabled ? -1 : 0"
		:data-testid="constructAttribute(id, 'radio')"
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
			:aria-describedby="description ? constructAttribute(id, 'radio-description') : undefined"
			:data-testid="constructAttribute(id, 'radio-input')"
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
					:class="RADIO_STYLE.layout.label"
					:data-testid="constructAttribute(id, 'radio-label')"
				/>
				<bo-text
					v-if="description"
					:id="`${id}-description`"
					:value="description"
					:size="BoFontSize.sm"
					:color="BoTextColor.secondary"
					:cursor="!isDisabled ? 'cursor-pointer' : 'cursor-not-allowed'"
					:class="RADIO_STYLE.layout.description"
					:data-testid="constructAttribute(id, 'radio-description')"
				/>
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes.js';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { InjectKey } from '@/shared/injection-key.js';
import { computed, inject, onMounted, ref } from 'vue';
import { type BoRadioGroup } from './bo-radio-group.js';
import { type BoRadioProps } from './bo-radio.js';

const props = withDefaults(defineProps<BoRadioProps>(), {
	id: () => IdentityService.instance.getComponentId('bo-radio'),
});

const { constructAttribute } = useAttributes();

const inputRef = ref<HTMLInputElement>();
const radioGroup = inject<BoRadioGroup>(InjectKey.RadioGroup);

const RADIO_STYLE = {
	layout: {
		wrapper: /*tw*/ 'bo-radio flex items-center gap-2',
		input: /*tw*/ 'bo-radio__input size-4',
		textWrapper: /*tw*/ 'bo-radio__text-wrapper flex flex-col',
		label: /*tw*/ 'bo-radio__label',
		description: /*tw*/ 'bo-radio__description',
	},
	state: {
		enabled: /*tw*/ 'cursor-pointer',
		disabled: /*tw*/ 'cursor-not-allowed opacity-50',
	},
} as const;

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
		RADIO_STYLE.layout.input,
		isDisabled.value ? RADIO_STYLE.state.disabled : RADIO_STYLE.state.enabled,
	);
});

const wrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		RADIO_STYLE.layout.wrapper,
		isDisabled.value ? RADIO_STYLE.state.disabled : RADIO_STYLE.state.enabled,
	);
});

const textWrapperClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		RADIO_STYLE.layout.textWrapper,
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
		event.preventDefault();
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
