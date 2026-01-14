<template>
	<button
		:id="id"
		:data-testid="dataTestId"
		:type="type"
		:role="role"
		:class="classValues"
		:style="styleValues"
		:disabled="isDisabled"
		:tabindex="tabIndex"
		:aria-busy="isLoading"
		:aria-disabled="isDisabled"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			<span class="bo-button-content inline-flex items-center justify-center gap-3">
				<bo-icon
					v-if="renderPrefixIcon"
					:icon="iconOnlyIcon"
					:size="iconSize"
					class="bo-button-prefix-icon"
					aria-hidden="true"
				/>
				<span
					v-if="!!label && !isIconOnlyButton"
					class="bo-button-label flex items-center justify-center"
				>
					<bo-text :value="label" :clickable="true" weight="semibold" :font-size="buttonFontSize" />
				</span>
				<bo-icon
					v-if="suffixIcon && suffixIcon !== 'none' && !isLoading && !isIconOnlyButton"
					:icon="suffixIcon"
					:size="iconSize"
					class="bo-button-suffix-icon"
					aria-hidden="true"
				/>
				<bo-loading-spinner
					v-if="isLoading && loaderType === 'spinner'"
					:size="loaderSize"
					:variant="loaderVariant"
					class="bo-button-loader ml-2"
					aria-hidden="true"
				/>
				<bo-loading-pulse
					v-if="isLoading && loaderType === 'pulse'"
					:size="loaderSize"
					:variant="loaderVariant"
					class="bo-button-loader ml-2"
					aria-hidden="true"
				/>
			</span>
		</slot>
	</button>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoButton, type BoButtonProps } from '@mrksbnc/bamboo-core';
	import { computed } from 'vue';
	import { BoIcon } from '../bo-icon';
	import { BoLoadingPulse } from '../bo-loading-pulse';
	import { BoLoadingSpinner } from '../bo-loading-spinner';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoButtonProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-button'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-button'),
		size: 'default',
		type: 'button',
		variant: 'primary',
		shape: 'default',
		loaderType: 'spinner',
		prefixIcon: 'none',
		suffixIcon: 'none',
		ariaLive: 'polite',
	});

	const {
		isDisabled,
		isIconOnlyButton,
		iconOnlyIcon,
		buttonFontSize,
		iconSize,
		loaderSize,
		loaderVariant,
		classValues,
		styleValues,
	} = useBoButton(props);

	const renderPrefixIcon = computed<boolean>(() => {
		return (
			(!!props.prefixIcon && props.prefixIcon !== 'none') ||
			(isIconOnlyButton.value && !props.isLoading)
		);
	});
</script>
