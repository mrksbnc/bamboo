<template>
	<aside
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="outerClasses"
		:style="outerStyle"
	>
		<div :class="panelClasses" :style="panelStyle">
			<div v-if="$slots.header" :class="headerClasses">
				<slot name="header" />
			</div>

			<div :class="contentClasses">
				<slot />
			</div>

			<div v-if="$slots.footer" :class="footerClasses">
				<slot name="footer" />
			</div>
		</div>
	</aside>
</template>

<script setup lang="ts">
	import {
		SIDEBAR_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoSidebarProps,
	} from '@workspace/bamboo-core';
	import { computed } from 'vue';

	const props = withDefaults(defineProps<BoSidebarProps>(), {
		id: () => generateComponentId('sidebar'),
		dataTestId: () => generateDataTestId('sidebar'),
		variant: () => SIDEBAR_MANIFEST.defaults.variant,
		position: () => SIDEBAR_MANIFEST.defaults.position,
		side: () => SIDEBAR_MANIFEST.defaults.side,
		width: () => SIDEBAR_MANIFEST.defaults.width,
		collapsedWidth: () => SIDEBAR_MANIFEST.defaults.collapsedWidth,
		collapsed: () => SIDEBAR_MANIFEST.defaults.collapsed,
		maxWidth: () => SIDEBAR_MANIFEST.defaults.maxWidth,
		padding: () => SIDEBAR_MANIFEST.defaults.padding,
		offset: () => SIDEBAR_MANIFEST.defaults.offset,
		rounded: () => SIDEBAR_MANIFEST.defaults.rounded,
		shadow: () => SIDEBAR_MANIFEST.defaults.shadow,
		border: () => SIDEBAR_MANIFEST.defaults.border,
		scrollable: () => SIDEBAR_MANIFEST.defaults.scrollable,
		role: () => SIDEBAR_MANIFEST.defaults.role,
	});

	const offsetToPx: Record<NonNullable<BoSidebarProps['offset']>, number> = {
		none: 0,
		sm: 8,
		md: 16,
		lg: 24,
	};

	const outerStyle = computed(() => {
		if (props.position === 'sticky' || props.position === 'fixed') {
			const px = offsetToPx[props.offset || SIDEBAR_MANIFEST.defaults.offset];
			return { top: `${px}px` };
		}
		return {};
	});

	const widthClass = computed(() => {
		if (props.collapsed) {
			return SIDEBAR_MANIFEST.styles.collapsedWidth[
				props.collapsedWidth || SIDEBAR_MANIFEST.defaults.collapsedWidth
			];
		}

		return SIDEBAR_MANIFEST.styles.width[props.width || SIDEBAR_MANIFEST.defaults.width];
	});

	const outerClasses = computed(() => {
		return mergeTwClasses(
			SIDEBAR_MANIFEST.styles.outer,
			SIDEBAR_MANIFEST.styles.position[props.position || SIDEBAR_MANIFEST.defaults.position],
			SIDEBAR_MANIFEST.styles.side[props.side || SIDEBAR_MANIFEST.defaults.side],
			SIDEBAR_MANIFEST.styles.offset[props.offset || SIDEBAR_MANIFEST.defaults.offset],
			widthClass.value,
		);
	});

	const panelClasses = computed(() => {
		return mergeTwClasses(
			SIDEBAR_MANIFEST.styles.panel,
			SIDEBAR_MANIFEST.styles.variant[props.variant || SIDEBAR_MANIFEST.defaults.variant],
			SIDEBAR_MANIFEST.styles.maxWidth[props.maxWidth || SIDEBAR_MANIFEST.defaults.maxWidth],
			SIDEBAR_MANIFEST.styles.padding[props.padding || SIDEBAR_MANIFEST.defaults.padding],
			SIDEBAR_MANIFEST.styles.text,
			props.rounded ? SIDEBAR_MANIFEST.styles.rounded : '',
			props.shadow ? SIDEBAR_MANIFEST.styles.shadow : '',
			props.border ? SIDEBAR_MANIFEST.styles.border : '',
		);
	});

	const panelStyle = computed(() => {
		const px = offsetToPx[props.offset || SIDEBAR_MANIFEST.defaults.offset];
		// Subtract offset plus a small breathing room to avoid overlapping footers.
		const safety = 24;
		return { maxHeight: `calc(100vh - ${px + safety}px)` };
	});

	const headerClasses = computed(() => SIDEBAR_MANIFEST.styles.header);
	const contentClasses = computed(() =>
		mergeTwClasses(
			SIDEBAR_MANIFEST.styles.content,
			props.scrollable ? SIDEBAR_MANIFEST.styles.scrollable : '',
		),
	);
	const footerClasses = computed(() => SIDEBAR_MANIFEST.styles.footer);
</script>
