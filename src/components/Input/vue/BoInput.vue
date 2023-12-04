<template>
	<div class="bo-input__container">
		<label
			v-if="label != null"
			class="bo-input__label"
			:for="id"
		>
			{{ label }}
		</label>
		<div class="bo-input__field-container">
			<input
				v-bind="$attrs"
				ref="boInputRef"
				class="bo-input__field-container__input"
				@blur="onBlur"
				@input="onInput"
				@focus="onFocus"
				@change="onChange"
				:id="id"
				:type="inputType"
				:value="modelValue"
				:disabled="disabled"
				:class="inputFieldCss"
				:readonly="isReadonly"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
			/>
			<div class="bo-input__field-container__suffix-container">
				<div class="bo-input__field-container__icon-container__icon">
					<BoSpinner
						v-if="isLoading"
						:variant="SpinnerVariant.Default"
						:size="LoaderSize.XS"
					/>
					<BoIcon
						v-if="hasShowPasswordIcon && !isLoading"
						@click="togglePassword"
						:name="eyeIcon"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="showErrorMsg || !isValid"
			class="bo-input__error-container"
		>
			<BoIcon
				v-if="showErrorMsg"
				:size="IconSize.MD"
				:name="Icon.alert_triangle"
				:color="BambooColor['red-600']"
				class="bo-input__error-container__icon"
			/>
			<span class="bo-input__error-container__msg">{{ errorMsg }}</span>
		</div>
		<span
			v-if="!!hint && !errorMsg"
			class="bo-input__description"
		>
			{{ hint }}
		</span>
	</div>
</template>

<script setup lang="ts">
import { type PropType, toRefs, ref, computed } from 'vue';
import {
	HTMLAutocompleteAttribute,
	HTMLInputType,
	InputFieldEvent,
	InputSize,
	validTextInputFieldTypes,
} from '@/components/Input';
import { Icon, BoIcon, IconSize } from '@/components/Icon';
import type { OptionalCss } from '@/types';
import { BoSpinner, LoaderSize, SpinnerVariant } from '@/components/Loader';
import { BambooColor } from '@/constants';

const emits = defineEmits<{
	(event: InputFieldEvent.Focus): void;
	(event: InputFieldEvent.Blur, value: Event): void;
	(event: InputFieldEvent.Input, value: string | null): void;
	(event: InputFieldEvent.Change, value: string | null): void;
}>();

const props = defineProps({
	id: {
		type: String,
		default: () => 'bo-input__no-id',
	},
	label: {
		type: String,
		required: false,
	},
	modelValue: {
		type: String,
		required: true,
	},
	type: {
		type: String as PropType<HTMLInputType>,
		default: () => HTMLInputType.Text,
		validator: (value: HTMLInputType): boolean => {
			return validTextInputFieldTypes.includes(value);
		},
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		required: false,
	},
	hint: {
		type: String,
		requited: false,
	},
	isValid: {
		type: Boolean,
		default: true,
	},
	errorMsg: {
		type: String,
		required: false,
	},
	isLoading: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<InputSize>,
		default: () => InputSize.MD,
	},
	autocomplete: {
		type: String as PropType<HTMLAutocompleteAttribute>,
		default: () => HTMLAutocompleteAttribute.Off,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
});

const {
	id,
	label,
	modelValue,
	type,
	disabled,
	placeholder,
	hint,
	isValid,
	errorMsg,
	isLoading,
	size,
	autocomplete,
	readonly,
} = toRefs(props);

const showPassword = ref<boolean>(false);
const boInputRef = ref<HTMLInputElement | null>(null);

const showErrorMsg = computed<boolean>(() => {
	return !!errorMsg?.value;
});

const isReadonly = computed<boolean>(() => {
	return readonly.value || disabled.value || isLoading.value;
});

const inputType = computed<HTMLInputType>(() => {
	return showPassword.value && type.value === HTMLInputType.Password
		? HTMLInputType.Text
		: type.value;
});

const eyeIcon = computed<Icon.eye | Icon.eye_off>(() => {
	return showPassword.value ? Icon.eye_off : Icon.eye;
});

const inputFieldCss = computed<OptionalCss>(() => {
	const optionalCss: OptionalCss = {};

	if (showErrorMsg.value || !isValid.value) {
		optionalCss['error'] = true;
	} else {
		optionalCss['default'] = true;
	}

	switch (size.value) {
		case InputSize.SM:
			optionalCss['sm'] = true;
			break;
		case InputSize.MD:
			optionalCss['md'] = true;
			break;
		case InputSize.LG:
			optionalCss['lg'] = true;
			break;
	}

	return optionalCss;
});

const hasShowPasswordIcon = computed<boolean>(() => {
	return (
		type.value === HTMLInputType.Password &&
		!disabled.value &&
		!isLoading.value &&
		modelValue.value != null &&
		modelValue.value !== ''
	);
});

const onFocus = (): void => {
	emits(InputFieldEvent.Focus);

	if (boInputRef.value != null) {
		boInputRef.value.focus();
	}
};

const onInput = (): void => {
	emits(InputFieldEvent.Input, modelValue.value);
};

const onChange = (): void => {
	emits(InputFieldEvent.Change, modelValue.value);
};

const onBlur = (event: Event): void => {
	emits(InputFieldEvent.Blur, event);
};

const togglePassword = (): void => {
	showPassword.value = !showPassword.value;
};
</script>

<style scoped lang="scss">
@import '@/components/Input/css/input.scss';
</style>
