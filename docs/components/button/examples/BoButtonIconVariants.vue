<template>
	<div class="mb-2 flex flex-row gap-2">
		<bo-button
			label="Prefix icon"
			:prefix-icon="Icon.bell"
		/>
		<bo-button
			label="Suffix icon"
			:suffix-icon="Icon.bell"
		/>
		<bo-button
			label="Prefix and suffix icon"
			:prefix-icon="Icon.bell"
			:suffix-icon="Icon.bell"
		/>
	</div>
	<div class="mb-2 flex gap-2">
		<bo-button
			label="Prefix icon"
			:prefix-icon="Icon.bell"
			:shape="BoButtonShape.outline"
		/>
		<bo-button
			label="Suffix icon"
			:suffix-icon="Icon.bell"
			:shape="BoButtonShape.outline"
		/>
		<bo-button
			label="Prefix and suffix icon"
			:prefix-icon="Icon.bell"
			:suffix-icon="Icon.bell"
			:shape="BoButtonShape.outline"
		/>
	</div>
</template>

<script setup lang="ts">
import { Icon } from '@/components/bo_icon'

import { BoButton, BoButtonShape } from '@/components/bo_button'
</script>
