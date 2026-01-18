<template>
	<p
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:lang="lang"
		:class="classValues"
		:style="styleValues"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			{{ value }}
		</slot>
	</p>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		TEXT_MANIFEST,
		useBoText,
		type BoTextProps,
	} from '@workspace/bamboo-core';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => generateComponentId('text'),
		dataTestId: () => generateDataTestId('text'),
		role: () => TEXT_MANIFEST.defaults.role,
		cursor: () => TEXT_MANIFEST.defaults.cursor,
		variant: () => TEXT_MANIFEST.defaults.variant,
		fontSize: () => TEXT_MANIFEST.defaults.fontSize,
		ariaLive: () => TEXT_MANIFEST.defaults.ariaLive,
		lineClamp: () => TEXT_MANIFEST.defaults.lineClamp,
		textAlign: () => TEXT_MANIFEST.defaults.textAlign,
		fontWeight: () => TEXT_MANIFEST.defaults.fontWeight,
		fontFamily: () => TEXT_MANIFEST.defaults.fontFamily,
		whiteSpace: () => TEXT_MANIFEST.defaults.whiteSpace,
		textTransform: () => TEXT_MANIFEST.defaults.textTransform,
	});

	const { classValues, styleValues } = useBoText(props);
</script>
