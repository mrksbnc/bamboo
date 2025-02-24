<template>
	<span
		class="flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white p-2 cursor-pointer rounded-md"
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
import { toRefs } from 'vue';
import { BoFontSize, BoFontWeight, BoText, BoTextColor } from '@/components/bo_text';
import type { BaseDropdownOption } from '@/components/bo_dropdown';
import { Icon, BoIcon } from '@/components/bo_icon';

const props = withDefaults(defineProps<BaseDropdownOption>(), {
	icon: () => Icon.none,
	label: () => '',
});

const { icon, label } = toRefs(props);
</script>
