<template></template>

<script lang="ts" setup>
	const spinnerLabelFontSize = computed<BoFontSize>(() => {
		return LOADING_SPINNER_MANIFEST.styles.labelFontSize[props.size || 'default'];
	});

	const containerClassValues = computed<string>(() => {
		return mergeTwClasses(
			LOADING_SPINNER_MANIFEST.styles.container,
			LOADING_SPINNER_MANIFEST.styles.size[props.size || 'default'],
			LOADING_SPINNER_MANIFEST.styles.variant[props.variant || 'primary'],
			LOADING_SPINNER_MANIFEST.styles.textPosition[props.textPosition || 'after'],
		);
	});

	const textClassValues = computed<string>(() => {
		return LOADING_SPINNER_MANIFEST.styles.text;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(LOADING_SPINNER_MANIFEST.styles.base);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor) {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});
</script>
