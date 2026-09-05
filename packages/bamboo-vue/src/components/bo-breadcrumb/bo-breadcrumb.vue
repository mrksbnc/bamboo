<template>
	<nav
		:id="id"
		:data-testid="dataTestId"
		:aria-label="ariaLabel ?? 'Breadcrumb'"
		:class="BREADCRUMB_MANIFEST.styles.nav"
	>
		<ol :class="BREADCRUMB_MANIFEST.styles.list">
			<li v-for="(item, index) in items" :key="index" :class="BREADCRUMB_MANIFEST.styles.item">
				<span v-if="index > 0" :class="BREADCRUMB_MANIFEST.styles.separator" aria-hidden="true">
					{{ separator }}
				</span>

				<component
					:is="item.href && index < items.length - 1 ? 'a' : 'span'"
					:href="item.href && index < items.length - 1 ? item.href : undefined"
					:class="
						index === items.length - 1
							? BREADCRUMB_MANIFEST.styles.current
							: BREADCRUMB_MANIFEST.styles.link
					"
					:aria-current="index === items.length - 1 ? 'page' : undefined"
				>
					<bo-icon
						v-if="item.icon"
						:icon="item.icon"
						size="sm"
						variant="inherit"
						:class="BREADCRUMB_MANIFEST.styles.icon"
					/>
					{{ item.label }}
				</component>
			</li>
		</ol>
	</nav>
</template>

<script setup lang="ts">
import {
	BREADCRUMB_MANIFEST,
	generateComponentId,
	generateDataTestId,
	type BoBreadcrumbProps,
} from '@workspace/bamboo-core';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoBreadcrumbProps>(), {
	id: () => generateComponentId('breadcrumb'),
	dataTestId: () => generateDataTestId('breadcrumb'),
	separator: () => BREADCRUMB_MANIFEST.defaults.separator,
});
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/breadcrumb.manifest.css';
</style>
