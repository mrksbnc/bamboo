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
		{{ formattedValue }}
	</p>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoText, type BoTextProps } from '@bamboo/core';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => IdentityService.instance.getComponentId('text'),
		dataTestId: () => IdentityService.instance.getDataTestId('text'),
		lang: 'en',
		maxLines: 'none',
		fontSize: 'default',
		fontFamily: 'sans',
		variant: 'default',
		fontWeight: 'regular',
		textTransform: 'none',
		whiteSpace: 'normal',
		role: 'text',
		textAlign: 'left',
		cursor: 'cursor-auto',
		ariaLive: 'polite',
	});

	const { classValues, styleValues, formattedValue, ariaLabel, role } = useBoText(props);
</script>
