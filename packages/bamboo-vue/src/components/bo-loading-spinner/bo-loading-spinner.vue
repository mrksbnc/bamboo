<template>
	<div :id="id" :data-testid="dataTestId" :role="role" :class="containerClassValues">
		<div :class="classValues" :style="styleValues"></div>
		<div v-if="showDefaultLoaderText || $slots.default" class="bo-loading-spinner__text">
			<slot>
				<bo-text :value="loaderText" :font-size="fontSize" />
			</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {
		IdentityService,
		useBoLoadingSpinner,
		type BoFontSize,
		type BoLoadingSpinnerProps,
	} from '@bamboo/core';
	import { computed } from 'vue';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoLoadingSpinnerProps>(), {
		id: () => IdentityService.instance.getComponentId(),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-loading-spinner'),
		size: 'default',
		role: 'status',
		variant: 'primary',
		textPosition: 'after',
	});

	const { containerClassValues, classValues, styleValues } = useBoLoadingSpinner(props);

	const loaderText = computed<string>(() => {
		if (props.loaderText) {
			return props.loaderText;
		}

		return 'Loading...';
	});

	const fontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case 'xs':
				return 'xs';
			case 'lg':
			case 'xl':
				return 'default';
			case 'sm':
			case 'default':
			default:
				return 'sm';
		}
	});
</script>
