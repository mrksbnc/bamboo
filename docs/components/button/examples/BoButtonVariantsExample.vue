<template>
	<div class="flex flex-col gap-2">
		<span class="flex gap-2">
			<bo-button
				v-for="variant in variants"
				:key="variant"
				:label="StringUtils.camelCaseToTitleCase(variant)"
				:variant="variant"
			/>
		</span>
		<span class="flex gap-2">
			<bo-button
				v-for="variant in linkVariants"
				:key="variant"
				:label="StringUtils.camelCaseToTitleCase(variant.replace('_', ' '))"
				:variant="variant"
			/>
		</span>
	</div>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo_button'
import { StringUtils } from '@/utils'

const variants = Object.values(BoButtonVariant).filter((v) => !v.includes('link'))

const linkVariants = Object.values(BoButtonVariant).filter((v) => v.includes('link'))
</script>
