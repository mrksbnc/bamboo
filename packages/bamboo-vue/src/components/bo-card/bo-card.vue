<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="CARD_MANIFEST.styles.base"
	>
		<div v-if="title || description || $slots['header']" :class="CARD_MANIFEST.styles.header">
			<slot name="header">
				<bo-text
					v-if="title"
					:class="CARD_MANIFEST.styles.title"
					font-size="lg"
					font-weight="semibold"
				>
					{{ title }}
				</bo-text>
				<bo-text
					v-if="description"
					:class="CARD_MANIFEST.styles.description"
					font-size="sm"
					variant="secondary"
				>
					{{ description }}
				</bo-text>
			</slot>
		</div>

		<div v-if="$slots['media']" :class="CARD_MANIFEST.styles.media">
			<slot name="media" />
		</div>

		<div :class="CARD_MANIFEST.styles.body">
			<slot />
		</div>

		<div v-if="$slots['footer']" :class="CARD_MANIFEST.styles.footer">
			<slot name="footer" />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	CARD_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoCardProps,
} from '@workspace/bamboo-core';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoCardProps>(), {
	id: () => generateComponentId('card'),
	dataTestId: () => generateDataTestId('card'),
});

defineSlots<{
	header?: () => unknown;
	media?: () => unknown;
	default?: () => unknown;
	footer?: () => unknown;
}>();
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/card.manifest.css';
</style>
