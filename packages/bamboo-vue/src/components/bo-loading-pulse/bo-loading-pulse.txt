<template>
	<div :id="id" :data-testid="dataTestId" :role="role" :class="containerClassValues">
		<span :class="outerPulseContainerClassValues">
			<span :style="styleValues" :class="outerPulseClassValues" />
			<span :class="innerPulseClassValues" :style="styleValues" />
		</span>
		<span v-if="loaderText || $slots.default" class="bo-loading-pulse__text">
			<slot>
				<bo-text
					v-if="loaderText"
					data-testid="bo-loading-pulse-text"
					role="text"
					variant="secondary"
					:value="loaderText"
					:font-size="pulseLabelFontSize"
				/>
			</slot>
		</span>
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoPulseLoader, type BoPulseLoaderProps } from '@mrksbnc/bamboo-core';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoPulseLoaderProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-loading-pulse'),
		size: 'default',
		role: 'status',
		variant: 'primary',
		textPosition: 'after',
	});

	const {
		containerClassValues,
		outerPulseContainerClassValues,
		outerPulseClassValues,
		innerPulseClassValues,
		styleValues,
		pulseLabelFontSize,
	} = useBoPulseLoader(props);
</script>
