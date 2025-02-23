<template>
	<bo-button use-slot>
		<template #content>
			<bo-icon :icon="Icon.user" />
		</template>
	</bo-button>
</template>

<script setup lang="ts">
import { BoButton } from '@/components/bo_button';
import { Icon, BoIcon } from '@/components/bo_icon';
</script>
