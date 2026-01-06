<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:role="role"
		:class="buttonClasses"
		:style="styleValues"
		:disabled="disabled"
		:tabindex="tabIndex"
		:aria-live="ariaLive"
		:aria-label="computedAriaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			<div class="bo-button__content flex items-center justify-center gap-2">
				<bo-loading-spinner
					v-if="isLoading && loaderType === 'spinner'"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-loading-ring
					v-else-if="isLoading && loaderType === 'ring'"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-icon
					v-if="prefixIcon && !isLoading"
					:icon="prefixIcon"
					:size="iconSize"
					variant="inherit"
					class="bo-button__icon bo-button__icon--prefix"
				/>
				<bo-text v-if="label" :value="label" font-size="" />
				<bo-icon
					v-if="suffixIcon"
					:icon="suffixIcon"
					:size="iconSize"
					variant="inherit"
					class="bo-button__icon bo-button__icon--suffix"
				/>
			</div>
		</slot>
	</button>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
	import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
	import {
		IdentityService,
		useBoButton,
		useTailwind,
		type BoButtonProps,
		type BoIconSize,
		type BoLoaderSize,
		type BoLoaderVariant,
	} from '@bamboo/core';
	import { computed, type HTMLAttributes } from 'vue';
import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-button'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-button'),
		size: 'md',
		type: 'button',
		variant: 'primary',
		loaderType: 'spinner',
		ariaLive: 'polite',
	});

	const { classValues, styleValues } = useBoButton(props);
	const { merge } = useTailwind();

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabelledBy) {
			return undefined;
		}
		if (props.ariaLabel) {
			return props.ariaLabel;
		}
		if (props.label) {
			return props.label;
		}
		return undefined;
	});

	const tabIndex = computed<HTMLAttributes['tabindex']>(() => {
		if (props.disabled || props.isLoading) {
			return -1;
		}
		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}
		return undefined;
	});

	const cursorClass = computed<BoCursor>(() => {
		if (props.disabled) {
			return 'cursor-not-allowed';
		}
		if (props.isLoading) {
			return 'cursor-wait';
		}
		return 'cursor-pointer';
	});

	const loadingSpinnerSize = computed<BoLoaderSize>(() => {
		if (props.size === 'xs') {
			return 'xs';
		}
		if (props.size === 'lg' || props.size === 'xl') {
			return 'md';
		}
		return 'sm';
	});

	const iconSize = computed<BoIconSize>(() => {
		switch (props.size) {
			case 'xs':
				return 'xs';
			case 'lg':
			case 'xl':
				return 'md';
			default:
				return 'sm';
		}
	});

	const loadingSpinnerVariant = computed<BoLoaderVariant>(() => {
		switch (props.variant) {
			case 'secondary':
				return 'secondary';
			default:
				return 'white';
		}
	});

	const buttonClasses = computed<string>(() => {
		return merge(
			'bo-button',
			'inline-flex items-center justify-center rounded-md font-medium transition-colors',
			'focus:outline-none focus:ring-2 focus:ring-offset-2',
			'disabled:opacity-50 disabled:pointer-events-none',
			props.fullWidth ? 'w-full' : '',
			cursorClass.value,
			classValues.value,
			props.customCssClass ?? '',
		);
	});
</script>
