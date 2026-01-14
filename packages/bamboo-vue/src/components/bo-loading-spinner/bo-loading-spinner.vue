<template>
	<div :id="id" :data-testid="dataTestId" :role="role" :class="containerClassValues">
		<div :class="classValues" :style="styleValues"></div>
		<div v-if="loaderText || $slots.default" class="bo-loading-spinner-text">
			<slot>
				<bo-text v-if="loaderText" :value="loaderText" :font-size="spinnerLabelFontSize" />
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoLoadingSpinner, type BoLoadingSpinnerProps } from '@bamboo/core';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: 'default',
		role: 'status',
		variant: 'primary',
		textPosition: 'after',
	});

	const { containerClassValues, classValues, styleValues, spinnerLabelFontSize } =
		useBoLoadingSpinner(props);
</script>
