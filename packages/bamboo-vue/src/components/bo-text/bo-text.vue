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
		<slot>
			{{ value }}
		</slot>
	</p>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoText, type BoTextProps } from '@mrksbnc/bamboo-core';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => IdentityService.instance.getComponentId('text'),
		dataTestId: () => IdentityService.instance.getDataTestId('text'),
		fontSize: 'default',
		fontWeight: 'regular',
		fontFamily: 'inherit',
		whiteSpace: 'normal',
		variant: 'default',
		role: 'text',
		value: '',
		ariaLive: 'polite',
	});

	const { classValues, styleValues, ariaLabel, role } = useBoText(props);
</script>
