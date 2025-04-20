<template>
	<bo-button use-slot>
		<template #content>
			<bo-icon :icon="Icon.user" />
		</template>
	</bo-button>
</template>

<script setup lang="ts">
import { BoButton } from '@/components/bo-button';
import { BoIcon, Icon } from '@/components/bo-icon';
</script>
