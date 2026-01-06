<template>
	<div :class="containerClasses">
		<label
			v-if="label"
			:for="id"
			class="bo-input__label mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
		>
			{{ label }}
			<span v-if="required" class="text-red-500">*</span>
		</label>
		<div class="bo-input__wrapper relative flex items-center">
			<bo-icon
				v-if="prefixIcon"
				:icon="prefixIcon"
				size="sm"
				variant="secondary"
				class="bo-input__icon bo-input__icon--prefix pointer-events-none absolute left-3"
			/>
			<input
				:id="id"
				:data-testid="dataTestId"
				:type="type"
				:name="name"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:role="role"
				:class="inputClasses"
				:style="styleValues"
				@input="onInput"
				@focus="onFocus"
				@blur="onBlur"
			/>
			<bo-icon
				v-if="suffixIcon"
				:icon="suffixIcon"
				size="sm"
				variant="secondary"
				class="bo-input__icon bo-input__icon--suffix pointer-events-none absolute right-3"
			/>
		</div>
		<p v-if="hint" :class="hintClasses" class="bo-input__hint mt-1 text-sm">
			{{ hint }}
		</p>
	</div>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { IdentityService, useBoInput, useTailwind, type BoInputProps } from '@bamboo/core';
	import { computed } from 'vue';

	interface Props extends BoInputProps {
		modelValue?: string | number;
	}

	const props = withDefaults(defineProps<Props>(), {
		id: () => IdentityService.instance.getComponentId('bo-input'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-input'),
		size: 'md',
		state: 'default',
		type: 'text',
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		focus: [event: FocusEvent];
		blur: [event: FocusEvent];
	}>();

	const { classValues, styleValues } = useBoInput(props);
	const { merge } = useTailwind();

	const onInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		emit('update:modelValue', target.value);
	};

	const onFocus = (event: FocusEvent) => {
		emit('focus', event);
	};

	const onBlur = (event: FocusEvent) => {
		emit('blur', event);
	};

	const containerClasses = computed<string>(() => {
		return merge('bo-input', props.fullWidth ? 'w-full' : '', props.customCssClass ?? '');
	});

	const inputClasses = computed<string>(() => {
		return merge(
			'bo-input__field',
			'disabled:opacity-50 disabled:cursor-not-allowed',
			'read-only:bg-slate-50 dark:read-only:bg-slate-900',
			props.prefixIcon ? 'pl-10' : '',
			props.suffixIcon ? 'pr-10' : '',
			classValues.value,
		);
	});

	const hintClasses = computed<string>(() => {
		switch (props.state) {
			case 'valid':
				return 'text-green-600 dark:text-green-400';
			case 'invalid':
				return 'text-red-600 dark:text-red-400';
			default:
				return 'text-neutral-500 dark:text-neutral-400';
		}
	});
</script>
