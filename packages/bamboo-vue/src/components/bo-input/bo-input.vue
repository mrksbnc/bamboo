<template></template>

<script lang="ts" setup>
	const iconSize = computed<BoIconSize>(() => {
		return INPUT_MANIFEST.styles.icons.size[props.size || 'md'];
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.styles.labels.fontSize;
	});

	const hintFontSize = computed<BoFontSize>(() => {
		return INPUT_MANIFEST.styles.helpers.fontSize;
	});

	const showPasswordToggle = computed<boolean>(() => {
		return (
			props.type === 'password' &&
			!props.disabled &&
			!!options?.modelValue &&
			!!props.revealPassword
		);
	});

	const containerClassValues = computed<string>(() => {
		const baseClasses = [
			INPUT_MANIFEST.styles.container.base,
			INPUT_MANIFEST.styles.variant[props.variant || 'default'],
			INPUT_MANIFEST.styles.state[props.state || 'default'],
		];

		// if (props.disabled) {
		// 	baseClasses.push(INPUT_MANIFEST.styles.container.disabled);
		// }

		// if (!hasPills.value) {
		// 	baseClasses.push(INPUT_MANIFEST.styles.size[props.size || 'md']);
		// } else {
		// 	baseClasses.push('h-auto min-h-10');
		// }

		return mergeTwClasses(...baseClasses);
	});

	const inputClassValues = computed<string>(() => {
		const classes = [INPUT_MANIFEST.styles.input.base];

		// if (hasPills.value) {
		// 	classes.push(INPUT_MANIFEST.styles.input.withPills);
		// }

		return mergeTwClasses(...classes);
	});

	const inputContainerClassValues = computed<string>(() => {
		const classes = [
			INPUT_MANIFEST.styles.inputContainer.base,
			INPUT_MANIFEST.styles.padding[props.size || 'md'],
		];

		// if (props.horizontalScroll) {
		// 	classes.push(INPUT_MANIFEST.styles.inputContainer.horizontalScroll);
		// } else {
		// 	classes.push(INPUT_MANIFEST.styles.inputContainer.flexWrap);
		// }

		// if (props.prefixIcon && props.prefixIcon !== 'none') {
		// 	classes.push(INPUT_MANIFEST.styles.inputContainer.withPrefixIcon);
		// }

		// if ((props.suffixIcon && props.suffixIcon !== 'none') || showPasswordToggle.value) {
		// 	classes.push(INPUT_MANIFEST.styles.inputContainer.withSuffixIcon);
		// }

		return mergeTwClasses(...classes);
	});

	const prefixIconClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.prefix);
	});

	const suffixIconClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.icons.suffix);
	});

	const labelContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.container);
	});

	const labelClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.label);
	});

	const requiredIndicatorClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.labels.required);
	});

	const helperContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.container);
	});

	const errorContainerClassValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.helpers.error);
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(INPUT_MANIFEST.styles.base);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});
</script>
