<template>
	<form :class="componentClasses" @submit.prevent="handleSubmit">
		<bo-input
			v-model="modelValue"
			:id="id"
			:data-testid="dataTestId"
			:type="BoInputType.search"
			:size="size"
			:placeholder="placeholder"
			:disabled="disabled"
			:prefix-icon="Icon.search"
			:action-text="actionText"
			:action-disabled="actionDisabled"
			:clearable="true"
			custom-css-class="bo-search-input__input"
			@action="handleSubmit"
		/>
	</form>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import { BoInputSize, BoInputType } from '@/components/bo-input';
	import BoInput from '@/components/bo-input/bo-input.vue';
	import { IdentityService } from '@/services/identity-service';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, watch } from 'vue';
	import type { BoSearchInputProps } from './bo-search-input';

	const props = withDefaults(defineProps<BoSearchInputProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-search-input'),
		placeholder: 'Search...',
		size: BoInputSize.md,
		actionText: 'Search',
	});

	const modelValue = defineModel<string>({ default: '' });

	const emit = defineEmits<{
		search: [value: string];
		submit: [value: string];
	}>();

	const componentClasses = computed<ConditionalCssProperties>(() => ({
		'bo-search-input': true,
		'bo-search-input--disabled': props.disabled,
		[`bo-search-input--size-${props.size}`]: true,
		[props.customCssClass || '']: !!props.customCssClass,
	}));

	// Emit search event on every input change (real-time search)
	watch(modelValue, (newValue) => {
		emit('search', newValue);
	});

	function handleSubmit(): void {
		emit('submit', modelValue.value);
	}
</script>

<style scoped lang="scss">
	.bo-search-input {
		width: 100%;

		&--disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}

		&__input {
			width: 100%;
		}

		/* Size variants */
		&--size-xs,
		&--size-sm,
		&--size-md,
		&--size-lg,
		&--size-xl {
			/* Size is handled by the nested bo-input component */
		}
	}
</style>
