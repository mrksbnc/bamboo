<template>
	<p
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:lang="lang"
		:style="styleValues"
		:class="classValues"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		{{ value }}
	</p>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoText, type BoTextProps } from '@bamboo/core';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => IdentityService.instance.getComponentId('text'),
		dataTestId: () => IdentityService.instance.getDataTestId('text'),
	});

	const { classValues, styleValues, ariaLabel, role } = useBoText(props);
</script>
