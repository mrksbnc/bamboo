<template>
	<div class="flex flex-col transition-all duration-200">
		<!-- Label section -->
		<div
			v-if="label || required"
			class="flex items-center justify-start pb-2"
			:data-testid="`bo-textarea-top-${id}`"
		>
			<bo-text
				v-if="label"
				:id="id"
				:for="id"
				class="text-neutral-800"
				:size="BoFontSize.sm"
				:value="label"
				:data-testid="`bo-textarea-label-${id}`"
			/>
			<label
				:for="id"
				class="text-error-600 text-sm font-medium"
				v-if="required"
			>
				<span
					v-if="label"
					class="text-error-600"
					>&ensp;-</span
				>
				Required
			</label>
		</div>

		<!-- Textarea container -->
		<div
			class="relative flex w-full rounded-md border shadow-[inset_-2px_-2px_6px_0px_rgba(245,245,245,0.25),0px_1px_2px_0px_rgba(16,16,16,0.05)] transition-all duration-200"
			:class="[
				{ 'flex-grow': expand },
				error ? 'border-error-600' : invalidField ? 'border-error-100' : 'border-neutral-300',
				disabled ? 'bg-grey-50 cursor-not-allowed border-neutral-200' : 'bg-white',
			]"
			:data-testid="`bo-textarea-container-${id}`"
		>
			<!-- Prefix icon -->
			<div
				v-if="prefixIcon"
				class="absolute text-neutral-500"
				:class="iconPositionClasses"
			>
				<bo-icon
					class="prefix-icon"
					:icon="prefixIcon"
					:size="iconSize"
					aria-hidden="true"
				/>
			</div>

			<!-- Textarea input -->
			<textarea
				:id="id"
				:name="name"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:required="required"
				:rows="rows"
				:maxlength="maxLength"
				class="w-full resize-none rounded-md border-none bg-transparent text-base font-normal text-neutral-800 transition-all duration-200 outline-none"
				:class="[
					containerPadding,
					prefixIcon ? 'pl-10' : '',
					suffixIcon ? 'pr-10' : '',
					expand ? 'flex-grow' : '',
				]"
				@input="onInput"
				@blur="onBlur"
				:data-testid="`bo-textarea-field-${id}`"
			></textarea>

			<!-- Suffix icon -->
			<div
				v-if="suffixIcon"
				class="absolute h-full text-neutral-500"
				:class="suffixIconPositionClasses"
			>
				<bo-icon
					class="suffix-icon"
					:icon="suffixIcon"
					:size="iconSize"
					aria-hidden="true"
				/>
			</div>
		</div>

		<!-- Error message -->
		<div
			v-if="error"
			class="text-error-600 mt-1 flex items-center gap-1 text-sm font-normal"
			:data-testid="`bo-textarea-error-${id}`"
		>
			<bo-icon
				:icon="Icon.alert_circle"
				:size="BoSize.small"
			/>
			<span>{{ error }}</span>
		</div>

		<!-- Hint message -->
		<div
			v-else-if="hint"
			class="mt-1 flex w-full text-sm font-normal text-neutral-500"
		>
			{{ hint }}
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoFontSize, BoText } from '@/components/bo-text';
import { BoSize } from '@/shared';
import { computed } from 'vue';

// Define the size enum to match other components
enum BoTextareaSize {
	small = 'small',
	default = 'default',
	large = 'large',
}

const props = withDefaults(
	defineProps<{
		id?: string;
		name?: string;
		modelValue?: string;
		label?: string;
		placeholder?: string;
		hint?: string;
		error?: string;
		invalidField?: boolean;
		disabled?: boolean;
		required?: boolean;
		rows?: number;
		maxLength?: number;
		prefixIcon?: Icon;
		suffixIcon?: Icon;
		expand?: boolean;
		size?: BoTextareaSize;
	}>(),
	{
		id: () => `textarea-${Math.random().toString(36).substring(2, 9)}`,
		rows: 4,
		expand: false,
		size: () => BoTextareaSize.default,
	},
);

const emit = defineEmits<{
	'update:modelValue': [value: string];
	blur: [event: FocusEvent];
}>();

// Computed properties for consistent sizing with Flowbite
const containerPadding = computed<string>(() => {
	switch (props.size) {
		case BoTextareaSize.small:
			return 'p-2';
		case BoTextareaSize.large:
			return 'p-4';
		case BoTextareaSize.default:
		default:
			return 'p-3';
	}
});

const iconPositionClasses = computed<string>(() => {
	switch (props.size) {
		case BoTextareaSize.small:
			return 'left-3 top-2.5';
		case BoTextareaSize.large:
			return 'left-3.5 top-4';
		case BoTextareaSize.default:
		default:
			return 'left-3 top-3';
	}
});

const suffixIconPositionClasses = computed<string>(() => {
	switch (props.size) {
		case BoTextareaSize.small:
			return 'right-3 top-2.5';
		case BoTextareaSize.large:
			return 'right-3.5 top-4';
		case BoTextareaSize.default:
		default:
			return 'right-3 top-3';
	}
});

const iconSize = computed(() => {
	switch (props.size) {
		case BoTextareaSize.small:
			return BoSize.small;
		case BoTextareaSize.large:
			return BoSize.large;
		case BoTextareaSize.default:
		default:
			return BoSize.default;
	}
});

function onInput(event: Event) {
	const target = event.target as HTMLTextAreaElement;
	emit('update:modelValue', target.value);
}

function onBlur(event: FocusEvent) {
	emit('blur', event);
}
</script>

<style>
textarea:focus {
	outline: none;
	border-color: #dbeafe; /* blue-100 */
	box-shadow:
		inset -2px -2px 6px 0px rgba(245, 245, 245, 0.25),
		0px 1px 2px 0px rgba(16, 16, 16, 0.05);
}
</style>
