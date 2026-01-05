<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:role="role"
		:class="classes"
		:disabled="disabled"
		:tabindex="tabIndex"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			<div class="bo-button__content">
				<bo-loading-spinner
					v-if="isLoading && loaderType === BoLoaderType.spinner"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-loading-ring
					v-else-if="isLoading && loaderType === BoLoaderType.ring"
					:size="loadingSpinnerSize"
					:variant="loadingSpinnerVariant"
					custom-container-css-class="bo-button__loader"
				/>
				<bo-icon
					v-if="prefixIcon && !isLoading"
					:icon="prefixIcon"
					:size="iconSize"
					:cursor="cursor"
					custom-css-class="bo-button__icon bo-button__icon--prefix"
				/>
				<bo-text
					v-if="label"
					:value="label"
					:font-size="fontSize"
					:cursor="cursor"
					:variant="BoTextVariant.inherit"
					:font-weight="BoFontWeight.semibold"
					custom-css-class="bo-button__label"
				/>
				<bo-icon
					v-if="suffixIcon"
					:icon="suffixIcon"
					:size="iconSize"
					:cursor="cursor"
					custom-css-class="bo-button__icon bo-button__icon--suffix"
				/>
			</div>
		</slot>
	</button>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
	import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
	import { BoFontSize, BoFontWeight, BoTextVariant } from '@/components/bo-text/bo-text.js';
	import BoText from '@/components/bo-text/bo-text.vue';
	import {
		IdentityService,
		type BoButtonProps,
		type BoLoaderSize,
		type BoLoaderType,
	} from '@bamboo/core';
	import { computed } from 'vue';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-button'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-button'),
		size: 'md',
		type: 'button',
		variant: 'primary',
		loaderType: 'spinner',
		ariaLive: 'polite',
	});


	const ariaLabel = computed<string | undefined>(() => {
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

	const tabIndex = computed<number | undefined>(() => {
		if (props.disabled || props.isLoading) {
			return -1;
		}

		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}

		return undefined;
	});

	const cursor = computed<string>(() => {
		if (props.disabled) {
			return 'not-allowed';
		}

		if (props.isLoading) {
			return 'wait';
		}

		return 'pointer';
	});

	const fontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoFontSize.xs;
			case BoSize.small:
				return BoFontSize.sm;
			case BoSize.large:
				return BoFontSize.lg;
			case BoSize.extra_large:
				return BoFontSize.xl;
			case BoSize.default:
			default:
				return BoFontSize.default;
		}

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

	const iconSize = computed<BoSize>(() => {
		switch (props.size) {
			case BoSize.extra_small:
				return BoSize.extra_small;
			case BoSize.large:
			case BoSize.extra_large:
				return BoSize.default;
			default:
			case BoSize.small:
			case BoSize.default:
				return BoSize.small;
		}

		if(props.size === 'lg' || props.size === 'xl') {
	});

	const loadingSpinnerVariant = computed<BoVariant>(() => {
		switch (props.variant) {
			case BoVariant.secondary:
				return BoVariant.secondary;
			case BoVariant.white:
				return BoVariant.white;
			case BoVariant.success:
			case BoVariant.warning:
			case BoVariant.danger:
			case BoVariant.black:
			case BoVariant.primary:
			default:
				return BoVariant.white;
		}
	});
</script>
