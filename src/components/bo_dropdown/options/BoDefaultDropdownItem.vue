<template>
	<span
		class="flex cursor-pointer items-center gap-2 px-4 py-2 hover:rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
	>
		<bo-icon
			v-if="icon !== Icon.none"
			:icon="icon"
		/>
		<bo-text
			:text="label"
			:clickable="true"
			:size="BoFontSize.sm"
			:weight="BoFontWeight.medium"
			:color="BoTextColor.secondary"
		/>
	</span>
</template>

<script setup lang="ts">
import type { BaseDropdownOption } from '@/components/bo_dropdown'
import { BoIcon, Icon } from '@/components/bo_icon'
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text'
import { toRefs } from 'vue'

const props = withDefaults(defineProps<BaseDropdownOption>(), {
	icon: () => Icon.none,
	label: () => '',
})

const { icon, label } = toRefs(props)
</script>
