<template>
	<div :class="TEXTAREA_MANIFEST.styles.base">
		<div v-if="label || required || description" :class="TEXTAREA_MANIFEST.styles.labels.container">
			<label :for="id" :class="TEXTAREA_MANIFEST.styles.labels.label">
				<bo-text v-if="label" :font-size="TEXTAREA_MANIFEST.styles.labels.fontSize">{{
					label
				}}</bo-text>
				<span v-if="required" :class="TEXTAREA_MANIFEST.styles.labels.required">*</span>
			</label>
			<span
				v-if="description"
				:id="descriptionId"
				:class="TEXTAREA_MANIFEST.styles.labels.description"
			>
				{{ description }}
			</span>
		</div>

		<div :class="containerClasses">
			<div v-if="prefixIcon && prefixIcon !== 'none'" :class="prefixIconClasses">
				<bo-icon :icon="prefixIcon" :size="iconSize" aria-hidden="true" />
			</div>

			<textarea
				ref="textareaRef"
				:id="id"
				:data-testid="dataTestId"
				:name="name"
				v-model="model"
				:placeholder="placeholder"
				:disabled="disabled"
				:readonly="readOnly"
				:required="required"
				:rows="rows"
				:maxlength="maxLength"
				:autofocus="autofocus"
				:class="textareaClasses"
				:role="role"
				:aria-label="ariaLabel"
				:aria-describedby="describedBy"
				:aria-invalid="state === 'invalid' ? 'true' : undefined"
				@input="onInput"
				@blur="onBlur"
				@focus="emit('focus')"
				@change="emit('change', $event)"
			></textarea>

			<div v-if="suffixIcon && suffixIcon !== 'none'" :class="suffixIconClasses">
				<bo-icon :icon="suffixIcon" :size="iconSize" aria-hidden="true" />
			</div>
		</div>

		<div v-if="error" :id="helperTextId" :class="TEXTAREA_MANIFEST.styles.helpers.error">
			<bo-icon icon="alert_circle" size="sm" variant="destructive" />
			<bo-text :font-size="TEXTAREA_MANIFEST.styles.helpers.fontSize" variant="destructive">{{
				error
			}}</bo-text>
		</div>

		<bo-text
			v-else-if="hint"
			:id="helperTextId"
			:font-size="TEXTAREA_MANIFEST.styles.helpers.fontSize"
			variant="secondary"
			:class="TEXTAREA_MANIFEST.styles.helpers.hint"
			>{{ hint }}</bo-text
		>
	</div>
</template>

<script lang="ts" setup>
import {
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	TEXTAREA_MANIFEST,
	type BoIconSize,
	type BoTextareaProps,
} from '@workspace/bamboo-core';
import { computed, onMounted, useTemplateRef } from 'vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoTextareaProps>(), {
	id: () => generateComponentId('textarea'),
	dataTestId: () => generateDataTestId('textarea'),
	size: 'default',
	state: 'default',
	variant: 'default',
	rows: 4,
	expand: false,
	resizable: false,
});

const emit = defineEmits<{
	(eventName: 'blur', event: FocusEvent): void;
	(event: 'focus'): void;
	(eventName: 'change', event: Event): void;
}>();

const model = defineModel<string>({ default: '' });

const textareaRef = useTemplateRef<HTMLTextAreaElement>('textareaRef');

const iconSize = computed<BoIconSize>(() => {
	return TEXTAREA_MANIFEST.styles.icons.size[props.size || 'default'];
});

const helperTextId = computed<string>(() => {
	return `${props.id}-helper`;
});
const descriptionId = computed<string>(() => {
	return `${props.id}-description`;
});
const describedBy = computed<string | undefined>(() => {
	const ids: string[] = [];

	if (props.description) ids.push(descriptionId.value);
	if (props.error || props.hint) ids.push(helperTextId.value);

	return ids.length ? ids.join(' ') : undefined;
});

const containerClasses = computed<string>(() => {
	const classes: string[] = [
		TEXTAREA_MANIFEST.styles.container.base,
		TEXTAREA_MANIFEST.styles.state[props.state || 'default'],
		TEXTAREA_MANIFEST.styles.variant[props.variant || 'default'],
	];

	if (props.disabled) {
		classes.push(TEXTAREA_MANIFEST.styles.container.disabled);
	}

	if (props.expand) {
		classes.push(TEXTAREA_MANIFEST.styles.container.expand);
	}

	return mergeTwClasses(...classes);
});

const textareaClasses = computed<string>(() => {
	const classes: string[] = [
		TEXTAREA_MANIFEST.styles.textarea.base,
		TEXTAREA_MANIFEST.styles.padding[props.size || 'default'],
	];

	if (props.prefixIcon && props.prefixIcon !== 'none') {
		classes.push(TEXTAREA_MANIFEST.styles.textarea.withPrefixIcon);
	}

	if (props.suffixIcon && props.suffixIcon !== 'none') {
		classes.push(TEXTAREA_MANIFEST.styles.textarea.withSuffixIcon);
	}

	if (props.expand) {
		classes.push(TEXTAREA_MANIFEST.styles.textarea.expand);
	}

	if (props.resizable) {
		classes.push(TEXTAREA_MANIFEST.styles.textarea.resizable);
	}

	return mergeTwClasses(...classes);
});

const prefixIconClasses = computed<string>(() => {
	return TEXTAREA_MANIFEST.styles.icons.prefix[props.size || 'default'];
});

const suffixIconClasses = computed<string>(() => {
	return TEXTAREA_MANIFEST.styles.icons.suffix[props.size || 'default'];
});

function onInput(event: Event) {
	model.value = (event.target as HTMLTextAreaElement).value;
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
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/textarea.manifest.css';
</style>
