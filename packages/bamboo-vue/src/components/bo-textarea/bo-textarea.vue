<template>
	<div :class="classValues">
		<div v-if="label || required" :class="labelContainerClassValues">
			<bo-text v-if="label" :value="label" :font-size="labelFontSize" />
			<span v-if="required" :class="requiredIndicatorClassValues">*</span>
		</div>

		<div :class="[containerClassValues, expand ? 'grow' : '']">
			<div v-if="prefixIcon && prefixIcon !== 'none'" :class="prefixIconClassValues">
				<bo-icon :icon="prefixIcon" :size="iconSize" aria-hidden="true" />
			</div>

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

			<div v-if="suffixIcon && suffixIcon !== 'none'" :class="suffixIconClassValues">
				<bo-icon :icon="suffixIcon" :size="iconSize" aria-hidden="true" />
			</div>
		</div>

		<div v-if="error" :class="errorClassValues">
			<bo-icon icon="alert_circle" size="sm" variant="destructive" />
			<bo-text :value="error" :font-size="hintFontSize" variant="destructive" />
		</div>

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
	import {
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		TEXTAREA_MANIFEST,
		type BoFontSize,
		type BoIconSize,
		type BoTextareaProps,
	} from '@workspace/bamboo-core';
	import { computed, onMounted, ref, type StyleValue } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoText } from '../bo-text';

	interface Props extends BoTextareaProps {
		modelValue?: string;
	}

	const props = withDefaults(defineProps<Props>(), {
		id: () => generateComponentId('textarea'),
		dataTestId: () => generateDataTestId('textarea'),
		size: 'md',
		state: 'default',
		variant: 'default',
		rows: 4,
		expand: false,
		resizable: false,
	});

	const emit = defineEmits<{
		'update:modelValue': [value: string];
		blur: [event: FocusEvent];
		focus: [];
	}>();

	const textareaRef = ref<HTMLTextAreaElement | null>(null);

	const iconSize = computed<BoIconSize>(() => {
		return TEXTAREA_MANIFEST.styles.icons.size[props.size || 'md'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.styles.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return TEXTAREA_MANIFEST.styles.helpers.fontSize;
	});

	const helperTextId = computed<string>(() => `${props.id}-helper`);

	const containerClassValues = computed<string>(() => {
		const classes: string[] = [
			TEXTAREA_MANIFEST.styles.container.base,
			TEXTAREA_MANIFEST.styles.variant[props.variant || 'default'],
			TEXTAREA_MANIFEST.styles.state[props.state || 'default'],
		];

		if (props.disabled) {
			classes.push(TEXTAREA_MANIFEST.styles.container.disabled as string);
		}

		if (props.expand) {
			classes.push(TEXTAREA_MANIFEST.styles.container.expand as string);
		}

		return mergeTwClasses(...classes);
	});

	const textareaClassValues = computed<string>(() => {
		const classes: string[] = [
			TEXTAREA_MANIFEST.styles.textarea.base,
			TEXTAREA_MANIFEST.styles.padding[props.size || 'md'],
		];

		if (props.prefixIcon && props.prefixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.withPrefixIcon as string);
		}

		if (props.suffixIcon && props.suffixIcon !== 'none') {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.withSuffixIcon as string);
		}

		if (props.expand) {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.expand as string);
		}

		if (props.resizable) {
			classes.push(TEXTAREA_MANIFEST.styles.textarea.resizable as string);
		}

		return mergeTwClasses(...classes);
	});

	const prefixIconClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.icons.prefix[props.size || 'md']);
	});

	const suffixIconClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.icons.suffix[props.size || 'md']);
	});

	const labelContainerClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.labels.container);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.labels.required);
	});

	const errorClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.helpers.error);
	});

	const hintClassValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.helpers.hint);
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(TEXTAREA_MANIFEST.styles.base);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

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
