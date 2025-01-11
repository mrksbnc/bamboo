<template>
	<span class="ml-2 flex gap-2">
		<bo-button
			:variant="BoButtonVariant.primary"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
		<bo-button
			:variant="BoButtonVariant.secondary"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
		<bo-button
			:variant="BoButtonVariant.danger"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
		<bo-button
			:variant="BoButtonVariant.warning"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
		<bo-button
			:variant="BoButtonVariant.success"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
		<bo-button
			:variant="BoButtonVariant.dark"
			:size="BoSize.default"
			:prefix-icon="Icon.alert_circle"
		/>
	</span>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo_button';
import { Icon } from '@/components/bo_icon';

import { BoSize } from '@/shared';
</script>
