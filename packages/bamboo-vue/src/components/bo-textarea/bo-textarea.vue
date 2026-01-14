<template>
	<div :class="classValues">
		<!-- Label section -->
		<div v-if="label || required" :class="labelContainerClassValues">
			<bo-text v-if="label" :value="label" :font-size="labelFontSize" />
			<span v-if="required" :class="requiredIndicatorClassValues">
				<span v-if="label">&ensp;-</span>
				Required
			</span>
		</div>

		<!-- Textarea container -->
		<div :class="[containerClassValues, expand ? 'flex-grow' : '']">
			<!-- Prefix icon -->
			<div v-if="prefixIcon && prefixIcon !== 'none'" :class="iconPositionClasses">
				<bo-icon :icon="prefixIcon" :size="iconSize" aria-hidden="true" />
			</div>

			<!-- Textarea input -->
			<textarea
				ref="textareaRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				:value="modelValue"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:rows="rows"
				:maxlength="maxLength"
				:autofocus="autofocus"
				:class="textareaClassValues"
				:aria-label="ariaLabel"
				:aria-describedby="helperTextId"
				:aria-invalid="state === 'invalid'"
				@input="onInput"
				@blur="onBlur"
				@focus="emit('focus')"
			></textarea>

			<!-- Suffix icon -->
			<div v-if="suffixIcon && suffixIcon !== 'none'" :class="suffixIconPositionClasses">
				<bo-icon :icon="suffixIcon" :size="iconSize" aria-hidden="true" />
			</div>
		</div>

		<!-- Error message -->
		<div v-if="error" :class="errorContainerClassValues">
			<bo-icon icon="alert-circle" size="sm" variant="danger" />
			<bo-text :value="error" :font-size="hintFontSize" variant="danger" />
		</div>

		<!-- Hint message -->
		<bo-text
			v-else-if="hint"
			:id="helperTextId"
			:value="hint"
			:font-size="hintFontSize"
			variant="secondary"
			:class="hintClassValues"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoTextarea, type BoTextareaProps } from '@bamboo/core';
	import { computed, onMounted, ref } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoText } from '../bo-text';

	interface Props extends BoTextareaProps {
		modelValue?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		id: () => IdentityService.instance.getComponentId('bo-textarea'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-textarea'),
		size: 'md',
		state: 'default',
		variant: 'default',
		rows: 4,
		expand: false,
		resizable: false,
		prefixIcon: 'none',
		suffixIcon: 'none',
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		blur: [event: FocusEvent];
		focus: [];
	}>();

	const textareaRef = ref<HTMLTextAreaElement | null>(null);

	const {
		containerClassValues,
		textareaClassValues,
		iconSize,
		labelFontSize,
		hintFontSize,
		iconPositionClasses,
		suffixIconPositionClasses,
		labelContainerClassValues,
		requiredIndicatorClassValues,
		errorContainerClassValues,
		hintClassValues,
		classValues,
	} = useBoTextarea(props);

	const helperTextId = computed<string>(() => `${props.id}-helper`);

	function onInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		emit('update:modelValue', target.value);
	}

	function onBlur(event: FocusEvent) {
		emit('blur', event);
	}

	function focus(): void {
		textareaRef.value?.focus();
	}

	defineExpose({ focus });

	onMounted(() => {
		if (props.autofocus) {
			setTimeout(() => textareaRef.value?.focus(), 200);
		}
	});
</script>

<style>
	textarea:focus {
		outline: none;
	}
</style>
