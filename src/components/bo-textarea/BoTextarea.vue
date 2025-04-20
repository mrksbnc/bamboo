<template>
	<div class="bo-textarea">
		<label
			v-if="label"
			:for="textareaId"
			class="mb-2 block"
			:class="required ? 'after:ml-0.5 after:text-red-500 after:content-[\'*\']' : ''"
		>
			<bo-text
				:value="label"
				:weight="BoFontWeight.semibold"
			/>
		</label>
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
				:name="name"
				:value="modelValue"
				:class="textareaClasses"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readonly"
				:required="required"
				:rows="rows"
				:maxlength="maxlength"
				:aria-label="ariaLabel || label"
				:aria-invalid="state === BoTextareaState.error"
				:aria-describedby="descriptionId"
				:autofocus="autofocus"
				:style="{ resize: resizable ? 'vertical' : 'none' }"
				@input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
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
		<p
			v-if="description || statusMessage"
			:id="descriptionId"
			class="mt-2 text-sm"
			:class="descriptionTextClasses"
		>
			{{ statusMessage || description }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontWeight, BoText } from '@/components/bo-text';
import { TailwindService } from '@/services';
import { BoSize } from '@/shared';
import { computed, toRefs } from 'vue';
import {
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	type BoTextareaProps,
} from './bo-textarea';

const props = withDefaults(defineProps<BoTextareaProps>(), {
	modelValue: '',
	placeholder: '',
	variant: () => BoTextareaVariant.default,
	state: () => BoTextareaState.default,
	size: () => BoTextareaSize.default,
	disabled: false,
	required: false,
	id: () => Symbol('bo-textarea').toString(),
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	rows: 3,
	resizable: false,
});

const emit = defineEmits<{
	'update:modelValue': [value: string];
}>();

const {
	modelValue,
	variant,
	state,
	size,
	label,
	disabled,
	required,
	description,
	errorMessage,
	warningMessage,
	successMessage,
	prefixIcon,
	suffixIcon,
	id,
	resizable,
} = toRefs(props);

const textareaId = computed<string>(() => {
	return id.value;
});

const descriptionId = computed<string>(() => {
	return `${textareaId.value}-description`;
});

const statusMessage = computed<string | undefined>(() => {
	switch (state.value) {
		case BoTextareaState.error:
			return errorMessage.value;
		case BoTextareaState.success:
			return successMessage.value;
		case BoTextareaState.warning:
			return warningMessage.value;
		default:
			return undefined;
	}
});

const baseTextareaClasses = {
	common: 'bo-textarea__field w-full focus:outline-none transition-colors duration-200',
	disabled: 'disabled:cursor-not-allowed disabled:opacity-50',
};

const sizeClasses = {
	[BoTextareaSize.small]: 'py-1.5 text-sm',
	[BoTextareaSize.default]: 'py-2 text-base',
	[BoTextareaSize.large]: 'py-2.5 text-lg',
};

const iconPaddingClasses = {
	prefix: {
		[BoTextareaSize.small]: 'pl-8',
		[BoTextareaSize.default]: 'pl-10',
		[BoTextareaSize.large]: 'pl-11',
	},
	suffix: {
		[BoTextareaSize.small]: 'pr-8',
		[BoTextareaSize.default]: 'pr-10',
		[BoTextareaSize.large]: 'pr-11',
	},
	both: {
		[BoTextareaSize.small]: 'pl-8 pr-8',
		[BoTextareaSize.default]: 'pl-10 pr-10',
		[BoTextareaSize.large]: 'pl-11 pr-11',
	},
	none: {
		[BoTextareaSize.small]: 'px-3',
		[BoTextareaSize.default]: 'px-4',
		[BoTextareaSize.large]: 'px-4',
	},
};

const variantClasses = {
	[BoTextareaVariant.default]: {
		[BoTextareaState.default]:
			'bg-transparent outline outline-1 outline-neutral-300 focus:outline-2 focus:outline-blue-500 dark:outline-neutral-600 dark:text-white',
		[BoTextareaState.error]:
			'bg-transparent outline outline-1 outline-red-500 focus:outline-2 focus:outline-red-500 dark:outline-red-500 dark:text-white',
		[BoTextareaState.success]:
			'bg-transparent outline outline-1 outline-green-500 focus:outline-2 focus:outline-green-500 dark:outline-green-500 dark:text-white',
		[BoTextareaState.warning]:
			'bg-transparent outline outline-1 outline-yellow-500 focus:outline-2 focus:outline-yellow-500 dark:outline-yellow-500 dark:text-white',
	},
	[BoTextareaVariant.filled]: {
		[BoTextareaState.default]:
			'bg-neutral-100 outline outline-1 outline-neutral-300 focus:outline-2 focus:outline-blue-500 dark:bg-neutral-700 dark:outline-neutral-600 dark:text-white',
		[BoTextareaState.error]:
			'bg-neutral-100 outline outline-1 outline-red-500 focus:outline-2 focus:outline-red-500 dark:bg-neutral-700 dark:outline-red-500 dark:text-white',
		[BoTextareaState.success]:
			'bg-neutral-100 outline outline-1 outline-green-500 focus:outline-2 focus:outline-green-500 dark:bg-neutral-700 dark:outline-green-500 dark:text-white',
		[BoTextareaState.warning]:
			'bg-neutral-100 outline outline-1 outline-yellow-500 focus:outline-2 focus:outline-yellow-500 dark:bg-neutral-700 dark:outline-yellow-500 dark:text-white',
	},
	[BoTextareaVariant.underlined]: {
		[BoTextareaState.default]:
			'bg-transparent border-b border-neutral-300 focus:border-blue-500 rounded-none focus:outline-none dark:border-neutral-600 dark:text-white',
		[BoTextareaState.error]:
			'bg-transparent border-b border-red-500 focus:border-red-500 rounded-none focus:outline-none dark:border-red-500 dark:text-white',
		[BoTextareaState.success]:
			'bg-transparent border-b border-green-500 focus:border-green-500 rounded-none focus:outline-none dark:border-green-500 dark:text-white',
		[BoTextareaState.warning]:
			'bg-transparent border-b border-yellow-500 focus:border-yellow-500 rounded-none focus:outline-none dark:border-yellow-500 dark:text-white',
	},
};

const descriptionTextClasses = {
	[BoTextareaState.default]: 'text-neutral-600 dark:text-neutral-400',
	[BoTextareaState.error]: 'text-red-500 dark:text-red-400',
	[BoTextareaState.success]: 'text-green-500 dark:text-green-400',
	[BoTextareaState.warning]: 'text-yellow-600 dark:text-yellow-500',
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
		return iconPaddingClasses.both[size.value];
	} else if (hasPrefixIcon) {
		return iconPaddingClasses.prefix[size.value];
	} else if (hasSuffixIcon) {
		return iconPaddingClasses.suffix[size.value];
	} else {
		return iconPaddingClasses.none[size.value];
	}
});

const roundedClasses = computed<string>(() => {
	return variant.value === BoTextareaVariant.underlined ? '' : 'rounded-lg';
});

const textareaClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		baseTextareaClasses.common,
		baseTextareaClasses.disabled,
		sizeClasses[size.value],
		variantClasses[variant.value][state.value],
		iconPadding.value,
		roundedClasses.value,
	);
});
</script>
