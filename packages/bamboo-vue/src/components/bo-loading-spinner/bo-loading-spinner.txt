<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:class="containerClassValues"
		:aria-label="ariaLabel"
		:aria-live="ariaLive"
		:aria-busy="ariaBusy"
	>
		<div :class="classValues" :style="styleValues"></div>
		<div v-if="loaderText || $slots.default" :class="textClassValues">
			<slot>
				<bo-text v-if="loaderText" :value="loaderText" :font-size="spinnerLabelFontSize" />
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		IdentityService,
		useBoLoadingSpinner,
		type BoLoadingSpinnerProps,
	} from '@mrksbnc/bamboo-core';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: 'default',
		role: 'status',
		variant: 'primary',
		textPosition: 'after',
	});

	const { containerClassValues, textClassValues, classValues, styleValues, spinnerLabelFontSize } =
		useBoLoadingSpinner(props);
</script>
