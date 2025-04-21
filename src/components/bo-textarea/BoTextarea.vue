<template>
	<div class="bo-textarea w-full">
		<div class="flex items-center gap-1">
			<bo-text
				v-if="label"
				:for="textareaId"
				:value="label"
				:size="BoFontSize.sm"
				class="mb-1"
			/>
			<span
				v-if="required"
				class="pl-0.5 text-red-500"
			>
				*
			</span>
		</div>
		<div class="relative">
			<div
				v-if="prefixIcon && prefixIcon !== Icon.none"
				class="pointer-events-none absolute top-3 left-0 flex items-start pl-3"
			>
				<bo-icon
					:icon="prefixIcon"
					:size="iconSize"
					class="bo-textarea__prefix-icon"
					aria-hidden="true"
				/>
			</div>
			<textarea
				:id="textareaId"
				:rows="rows"
				:name="name"
				:value="modelValue"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:maxlength="maxlength"
				:autofocus="autofocus"
				:placeholder="placeholder"
				:style="textAreaStyle"
				:class="textareaClasses"
				:aria-label="ariaLabel || label"
				:aria-describedby="descriptionId"
				:aria-invalid="state === BoTextareaState.error"
				@input="onInput"
			></textarea>
			<div
				v-if="suffixIcon && suffixIcon !== Icon.none"
				class="pointer-events-none absolute top-3 right-0 flex items-start pr-3"
			>
				<bo-icon
					:icon="suffixIcon"
					:size="iconSize"
					class="bo-textarea__suffix-icon"
					aria-hidden="true"
				/>
			</div>
		</div>
		<div
			v-if="error"
			class="flex items-center gap-1 pt-1.5"
		>
			<bo-icon
				:size="BoSize.small"
				:icon="Icon.alert_circle"
				:color="BoColor.red_600"
			/>
			<bo-text
				:id="descriptionId"
				:size="BoFontSize.sm"
				:class="descriptionClasses"
				:value="error"
			/>
		</div>
		<bo-text
			v-if="description"
			:id="descriptionId"
			:value="description"
			:size="BoFontSize.sm"
			:class="descriptionClasses"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoText } from '@/components/bo-text';
import { IdentityService, TailwindService } from '@/services';
import { BoColor, BoSize } from '@/shared';
import { computed, toRefs, type StyleValue } from 'vue';
import {
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	type BoTextareaProps,
} from './bo-textarea';

const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const props = withDefaults(defineProps<BoTextareaProps>(), {
	id: () => IdentityService.instance.generateId(),
	variant: () => BoTextareaVariant.default,
	state: () => BoTextareaState.default,
	size: () => BoTextareaSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	rows: 3,
	resizable: false,
});

const {
	modelValue,
	variant,
	state,
	size,
	label,
	disabled,
	required,
	description,
	error,
	prefixIcon,
	suffixIcon,
	id,
	resizable,
} = toRefs(props);

const textareaId = computed<string>(() => {
	return id.value;
});

const descriptionId = computed<string>(() => {
	return IdentityService.instance.generateId(`${textareaId.value}-description`);
});

const baseTextareaClasses = {
	common: /*tw*/ 'bo-textarea__field w-full transition-colors duration-200 rounded-lg text-sm p-2',
	disabled: /*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50',
};

const variantClasses: Record<BoTextareaVariant, Record<BoTextareaState, string>> = {
	[BoTextareaVariant.default]: {
		[BoTextareaState.default]:
			/*tw*/ 'bg-transparent border border-neutral-300 focus:border-blue-500',
		[BoTextareaState.error]: /*tw*/ 'bg-transparent border border-red-500 focus:border-red-500',
		[BoTextareaState.success]:
			/*tw*/ 'bg-transparent border border-green-600 focus:border-green-600',
	},
	[BoTextareaVariant.filled]: {
		[BoTextareaState.default]: /*tw*/ 'bg-neutral-100 focus:border-blue-500',
		[BoTextareaState.error]: /*tw*/ 'bg-neutral-100 focus:border-red-500',
		[BoTextareaState.success]: /*tw*/ 'bg-neutral-100 focus:border-green-600',
	},
};

const helperTextColorClasses: Record<BoTextareaState, string> = {
	[BoTextareaState.default]: /*tw*/ 'text-neutral-600 dark:text-neutral-500',
	[BoTextareaState.error]: /*tw*/ 'text-red-500 dark:text-red-500',
	[BoTextareaState.success]: /*tw*/ 'text-green-600 dark:text-green-600',
};

const iconSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoTextareaSize.small:
			return BoSize.small;
		case BoTextareaSize.default:
			return BoSize.default;
		case BoTextareaSize.large:
			return BoSize.large;
		default:
			return BoSize.default;
	}
});

const iconPadding = computed<string>(() => {
	const hasPrefixIcon = prefixIcon.value && prefixIcon.value !== Icon.none;
	const hasSuffixIcon = suffixIcon.value && suffixIcon.value !== Icon.none;

	if (hasPrefixIcon && hasSuffixIcon) {
		return /*tw*/ 'px-8';
	}

	if (hasPrefixIcon) {
		if (size.value === BoTextareaSize.small) {
			return /*tw*/ 'pl-8 pr-2';
		}
		return /*tw*/ 'pl-8 pr-4';
	}

	if (hasSuffixIcon) {
		if (size.value === BoTextareaSize.small) {
			return /*tw*/ 'pl-2 pr-8';
		}
		return /*tw*/ 'pl-4 pr-8';
	}

	return /*tw*/ 'px-3';
});

const textareaClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		iconPadding.value,
		baseTextareaClasses.common,
		baseTextareaClasses.disabled,
		helperTextColorClasses[state.value],
		variantClasses[variant.value][state.value],
	);
});

const textAreaStyle = computed<StyleValue>(() => {
	return {
		resize: resizable.value ? 'vertical' : 'none',
	};
});

const descriptionClasses = computed<string>(() => {
	return helperTextColorClasses[state.value];
});

const onInput = (event: Event) => {
	emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
};
</script>
