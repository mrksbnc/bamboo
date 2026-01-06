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
		role: 'text',
		maxLines: 'none',
		textAlign: 'left',
		variant: 'default',
		ariaLive: 'polite',
		fontFamily: 'sans',
		fontSize: 'default',
		whiteSpace: 'normal',
		fontWeight: 'regular',
		textTransform: 'none',
		cursor: 'cursor-auto',
	});

	const { classValues, styleValues, formattedValue, ariaLabel, role } = useBoText(props);
</script>
