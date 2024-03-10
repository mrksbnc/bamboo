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
			<bo-icon
				v-if="!$slots.prefix"
				:icon="prefixIcon"
				:size="iconSize"
			/>
			<slot name="prefix"></slot>
		</span>
		<span class="bo-button__label mx-1 font-medium shadow-none">
			{{ label }}
		</span>
		<span
			class="bo-button__suffix"
			v-if="suffixIcon || $slots.suffix"
		>
			<bo-icon
				v-if="!$slots.suffix"
				:icon="suffixIcon"
				:size="iconSize"
			/>
			<slot name="suffix"></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { BoButtonType } from '@/components/BoButton';
import { BoIcon, type Icon } from '@/components/BoIcon';
import { BoSize } from '@/constants';

import { useBoButtonStyle, BoButtonVariant } from '@/components/BoButton';

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

const classes = computed(() => useBoButtonStyle(toRefs(props)).classes);
const iconSize = computed(() => useBoButtonStyle(toRefs(props)).iconSize);
</script>
