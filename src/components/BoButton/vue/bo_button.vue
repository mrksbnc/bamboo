<template>
	<button
		type="button"
		role="button"
		:disabled="disabled"
		:class="[classes, `bo-button--${variant} bo-button--${type}`]"
	>
		<span
			class="bo-button__prefix"
			v-if="prefixIcon || $slots.prefix"
		>
			<div v-if="!$slots.prefix">
				<bo-icon
					role="img"
					:size="iconSize"
					:icon="prefixIcon"
				/>
			</div>
			<div v-else>
				<slot name="prefix"></slot>
			</div>
		</span>
		<span
			role="text"
			class="bo-button__label font-medium shadow-none"
		>
			{{ label }}
		</span>
		<span
			class="bo-button__suffix"
			v-if="suffixIcon || $slots.suffix"
		>
			<div v-if="!$slots.suffix">
				<bo-icon
					role="img"
					:size="iconSize"
					:icon="suffixIcon"
				/>
			</div>
			<div v-else>
				<slot name="suffix"></slot>
			</div>
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoIcon, type Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';
import {
	useBoButton,
	BoButtonVariant,
	BoButtonType,
} from '@/components/BoButton';

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	variant: {
		type: String as PropType<BoButtonVariant>,
		default: BoButtonVariant.primary,
	},
	type: {
		type: String as PropType<BoButtonType>,
		default: BoButtonType.default,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	size: {
		type: String as PropType<BoSize>,
		default: BoSize.default,
	},
	prefixIcon: {
		type: String as PropType<Icon>,
		default: null,
	},
	suffixIcon: {
		type: String as PropType<Icon>,
		default: null,
	},
});

const classes = computed(() => useBoButton(toRefs(props)).classes);
const iconSize = computed(() => useBoButton(toRefs(props)).iconSize);
</script>
