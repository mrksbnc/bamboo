<template>
	<div :id="id" :data-testid="dataTestId" :style="containerStyle" :class="containerClass">
		<span class="bo-loading-spinner__spinner"></span>
		<bo-text
			v-if="loaderText"
			:value="loaderText"
			:font-size="BoFontSize.xs"
			:variant="BoTextVariant.secondary"
		/>
	</div>
</template>

<script lang="ts" setup>
	import BoText from '@/components/bo-text/bo-text.vue'
	import type { ConditionalCssProperties } from '@/core/css.js'
	import { BoSize } from '@/core/size.js'
	import { IdentityService } from '@/services/identity-service.js'
	import { computed, type StyleValue } from 'vue'
	import { BoFontSize, BoTextVariant } from '../bo-text/bo-text.js'
	import { BoLoaderVariant, type BoLoadingSpinnerProps } from './bo-loading-spinner.js'

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: BoSize.default,
		variant: BoLoaderVariant.primary,
	})

	const containerClass = computed<ConditionalCssProperties>(() => {
		return {
			'bo-loading-spinner__container': true,
			[`bo-loading-spinner__size--${props.size}`]: true,
			[`bo-loading-spinner__variant--${props.variant}`]: true,
		}
	})

	const containerStyle = computed<StyleValue>(() => {
		return {}
	})
</script>

<style scoped lang="scss">
	.bo-loading-spinner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: fit-content;
	}
</style>
