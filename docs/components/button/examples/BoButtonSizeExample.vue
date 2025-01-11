<template>
	<span class="ml-2">
		<bo-button
			:label="StringUtils.camelCaseToTitleCase(BoSize.extra_small.replace('_', ' '))"
			:size="BoSize.extra_small"
		/>
	</span>
	<span class="ml-2">
		<bo-button
			:label="StringUtils.camelCaseToTitleCase(BoSize.small.replace('_', ' '))"
			:size="BoSize.small"
		/>
	</span>
	<span class="ml-2">
		<bo-button
			:label="StringUtils.camelCaseToTitleCase(BoSize.default.replace('_', ' '))"
			:size="BoSize.default"
		/>
	</span>
	<span class="ml-2">
		<bo-button
			:label="StringUtils.camelCaseToTitleCase(BoSize.large.replace('_', ' '))"
			:size="BoSize.large"
		/>
	</span>
	<span class="ml-2">
		<bo-button
			:label="StringUtils.camelCaseToTitleCase(BoSize.extra_large.replace('_', ' '))"
			:size="BoSize.extra_large"
		/>
	</span>
</template>

<script setup lang="ts">
import { BoButton } from '@/components/bo_button';
import { BoSize } from '@/shared';
import { StringUtils } from '@/utils';

const sizes = Object.values(BoSize);
</script>
