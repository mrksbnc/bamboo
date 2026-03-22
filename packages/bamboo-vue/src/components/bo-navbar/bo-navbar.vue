<template>
	<nav
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="outerClasses"
		:style="outerStyle"
	>
		<div :class="shellClasses">
			<div v-if="$slots.brand" :class="brandClasses">
				<slot name="brand" />
			</div>

			<div :class="navClasses">
				<slot />
			</div>

			<div v-if="$slots.actions" :class="actionsClasses">
				<slot name="actions" />
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
import {
	NAVBAR_MANIFEST,
	generateComponentId,
	generateDataTestId,
	mergeTwClasses,
	type BoNavbarProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';

const props = withDefaults(defineProps<BoNavbarProps>(), {
	id: () => generateComponentId('navbar'),
	dataTestId: () => generateDataTestId('navbar'),
	variant: () => NAVBAR_MANIFEST.defaults.variant,
	position: () => NAVBAR_MANIFEST.defaults.position,
	padding: () => NAVBAR_MANIFEST.defaults.padding,
	maxWidth: () => NAVBAR_MANIFEST.defaults.maxWidth,
	offset: () => NAVBAR_MANIFEST.defaults.offset,
	rounded: () => NAVBAR_MANIFEST.defaults.rounded,
	shadow: () => NAVBAR_MANIFEST.defaults.shadow,
	border: () => NAVBAR_MANIFEST.defaults.border,
	role: () => NAVBAR_MANIFEST.defaults.role,
});


const offsetToPx: Record<NonNullable<BoNavbarProps['offset']>, number> = {
	none: 0,
	sm: 8,
	md: 16,
	lg: 24,
};


const outerStyle = computed(() => {
	if (props.position === 'sticky' || props.position === 'fixed') {
		const px = offsetToPx[props.offset || NAVBAR_MANIFEST.defaults.offset];
		return { top: `${px}px` };
	}
	return {};
});


const outerClasses = computed(() => {
	return mergeTwClasses(
		NAVBAR_MANIFEST.styles.outer,
		NAVBAR_MANIFEST.styles.position[props.position || NAVBAR_MANIFEST.defaults.position],
		NAVBAR_MANIFEST.styles.offset[props.offset || NAVBAR_MANIFEST.defaults.offset],
	);
});


const shellClasses = computed(() => {
	return mergeTwClasses(
		NAVBAR_MANIFEST.styles.shell,
		NAVBAR_MANIFEST.styles.variant[props.variant || NAVBAR_MANIFEST.defaults.variant],
		NAVBAR_MANIFEST.styles.padding[props.padding || NAVBAR_MANIFEST.defaults.padding],
		NAVBAR_MANIFEST.styles.width[props.maxWidth || NAVBAR_MANIFEST.defaults.maxWidth],
		NAVBAR_MANIFEST.styles.text,
		props.rounded ? NAVBAR_MANIFEST.styles.rounded : '',
		props.shadow ? NAVBAR_MANIFEST.styles.shadow : '',
		props.border ? NAVBAR_MANIFEST.styles.border : '',
	);
});


const brandClasses = computed(() => NAVBAR_MANIFEST.styles.sections.brand);
const navClasses = computed(() => NAVBAR_MANIFEST.styles.sections.nav);
const actionsClasses = computed(() => NAVBAR_MANIFEST.styles.sections.actions);
</script>
