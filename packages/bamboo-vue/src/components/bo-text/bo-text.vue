<template>
	<span
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
	</span>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		useBoText,
		type BoTextProps,
	} from '@workspace/bamboo-core';
	import { onMounted, useSlots } from 'vue';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => generateComponentId('text'),
		dataTestId: () => generateDataTestId('text'),
		lineClamp: 'none',
		textAlign: 'left',
		variant: 'default',
		fontSize: 'default',
		textTransform: 'none',
		fontFamily: 'inherit',
		fontWeight: 'regular',
		cursor: 'cursor-auto',
		whiteSpace: 'normal',
		role: 'paragraph',
		ariaLive: 'polite',
	});

	const slots = useSlots();

	const { classValues, styleValues, validateComponentOnMount } = useBoText(props);

	onMounted(() => validateComponentOnMount?.(slots));
</script>
