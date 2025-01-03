<template>
	<div class="flex flex-col gap-2">
		<span class="flex gap-2">
			<bo-button
				v-for="shape in shapes"
				:key="shape"
				:label="StringUtils.camelCaseToTitleCase(shape)"
				:shape="shape"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoButton, BoButtonShape } from '@/components/bo_button'
import { StringUtils } from '@/utils'

const shapes = Object.values(BoButtonShape)
</script>
