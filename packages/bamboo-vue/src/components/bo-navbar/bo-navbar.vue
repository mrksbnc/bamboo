<template>
	<nav
		:id="id"
		:data-testid="dataTestId"
		:aria-label="ariaLabel"
		:class="NAVBAR_MANIFEST.styles.base"
	>
		<div :class="NAVBAR_MANIFEST.styles.header">
			<div :class="NAVBAR_MANIFEST.styles.top">
				<slot name="header">
					<slot name="brand" />
				</slot>
				<slot name="top" />
			</div>
			<button
				ref="toggleRef"
				type="button"
				:aria-expanded="open ? 'true' : 'false'"
				:aria-controls="contentId"
				:class="NAVBAR_MANIFEST.styles.toggle"
				@click="toggle"
			>
				<span :class="NAVBAR_MANIFEST.styles.visuallyHidden">Toggle navigation</span>
				<bo-icon :icon="open ? 'x' : 'menu'" size="sm" aria-hidden="true" />
			</button>
		</div>
		<div
			:id="contentId"
			:data-state="open ? 'open' : 'closed'"
			:class="[NAVBAR_MANIFEST.styles.content, open ? NAVBAR_MANIFEST.styles.contentOpen : '']"
		>
			<div :class="NAVBAR_MANIFEST.styles.middle">
				<div :class="NAVBAR_MANIFEST.styles.nav">
					<slot name="content">
						<slot name="links" />
					</slot>
				</div>
				<slot name="middle" />
			</div>
			<div :class="NAVBAR_MANIFEST.styles.bottom">
				<slot name="footer">
					<div :class="NAVBAR_MANIFEST.styles.actions">
						<slot name="actions" />
					</div>
				</slot>
				<slot name="bottom" />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import type { BoNavbarProps } from '@workspace/bamboo-core';
import { generateComponentId, generateDataTestId, NAVBAR_MANIFEST } from '@workspace/bamboo-core';
import { computed, nextTick, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoNavbarProps>(), {
	id: () => generateComponentId('navbar'),
	dataTestId: () => generateDataTestId('navbar'),
	ariaLabel: 'Main navigation',
});

const open = defineModel<boolean>('open', { default: false });

const toggleRef = useTemplateRef<HTMLButtonElement>('toggleRef');

const contentId = computed(() => {
	return `${props.id}-content`;
});

function toggle(): void {
	open.value = !open.value;
}

function onKeydown(event: KeyboardEvent): void {
	if (event.key === 'Escape' && open.value) {
		open.value = false;
		void nextTick(() => toggleRef.value?.focus());
	}
}

onMounted(() => document.addEventListener('keydown', onKeydown));
onUnmounted(() => document.removeEventListener('keydown', onKeydown));
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/navbar.manifest.css';
</style>
