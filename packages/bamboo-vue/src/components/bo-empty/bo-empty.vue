<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="EMPTY_MANIFEST.styles.base"
	>
		<div v-if="$slots['media']" :class="EMPTY_MANIFEST.styles.media">
			<slot name="media" />
		</div>

		<div v-if="title || description || $slots['default']" :class="EMPTY_MANIFEST.styles.content">
			<slot>
				<bo-text
					v-if="title"
					:class="EMPTY_MANIFEST.styles.title"
					font-size="default"
					font-weight="semibold"
					variant="default"
				>
					{{ title }}
				</bo-text>
				<bo-text
					v-if="description"
					:class="EMPTY_MANIFEST.styles.description"
					font-size="sm"
					variant="secondary"
				>
					{{ description }}
				</bo-text>
			</slot>
		</div>

		<div v-if="$slots['action']" :class="EMPTY_MANIFEST.styles.action">
			<slot name="action" />
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	EMPTY_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoEmptyProps,
} from '@workspace/bamboo-core';
import { BoText } from '../bo-text';

const props = withDefaults(defineProps<BoEmptyProps>(), {
	id: () => generateComponentId('empty'),
	dataTestId: () => generateDataTestId('empty'),
});

defineSlots<{
	media?: () => unknown;
	default?: () => unknown;
	action?: () => unknown;
}>();
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/empty.manifest.css';
</style>
