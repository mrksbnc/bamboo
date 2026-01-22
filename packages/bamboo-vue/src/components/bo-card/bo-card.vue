<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:class="cardClasses"
		:style="cardStyles"
	>
		<div :class="contentClasses">
			<slot name="content">
				<div v-if="title || description" class="flex flex-col gap-2">
					<bo-text
						v-if="title"
						variant="inherit"
						font-size="2xl"
						font-weight="semibold"
						:cursor="clickable ? 'cursor-pointer' : 'cursor-default'"
					>
						{{ title }}
					</bo-text>
					<bo-text
						v-if="description"
						variant="secondary"
						font-size="default"
						:cursor="clickable ? 'cursor-pointer' : 'cursor-default'"
					>
						{{ description }}
					</bo-text>
				</div>
				<slot />
			</slot>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		CARD_MANIFEST,
		generateComponentId,
		generateDataTestId,
		mergeTwClasses,
		type BoCardProps,
	} from '@workspace/bamboo-core';
	import { computed, type StyleValue } from 'vue';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoCardProps>(), {
		id: () => generateComponentId('card'),
		dataTestId: () => generateDataTestId('card'),
		variant: 'default',
		size: 'default',
		clickable: false,
		padding: () => ({
			top: true,
			right: true,
			bottom: true,
			left: true,
		}),
	});

	// Build card classes
	const cardClasses = computed(() => {
		const classes = [
			CARD_MANIFEST.styles.base,
			CARD_MANIFEST.styles.variants[props.variant || 'default'],
			CARD_MANIFEST.styles.size[props.size || 'default'],
			paddingClasses.value,
			widthClasses.value,
		];

		if (props.clickable) {
			classes.push(CARD_MANIFEST.styles.clickable);
		}

		return mergeTwClasses(...classes);
	});

	// Build content classes
	const contentClasses = computed(() => {
		return mergeTwClasses(CARD_MANIFEST.styles.content);
	});

	// Build padding classes
	const paddingClasses = computed(() => {
		const padding = props.padding || {};
		const classes = [];

		if (padding.top !== false) classes.push('pt-4');
		if (padding.right !== false) classes.push('pr-4');
		if (padding.bottom !== false) classes.push('pb-4');
		if (padding.left !== false) classes.push('pl-4');

		return mergeTwClasses(...classes);
	});

	// Build width classes
	const widthClasses = computed(() => {
		if (props.widthAsTailwindClass) {
			return props.widthAsTailwindClass;
		}
		return 'w-fit max-w-md';
	});

	// Build card styles for custom width
	const cardStyles = computed<StyleValue>(() => {
		const styles: StyleValue = {};

		if (props.widthInPercent) {
			styles.width = `${props.widthInPercent}%`;
		} else if (props.widthInPx) {
			styles.width = `${props.widthInPx}px`;
		}

		return styles;
	});
</script>
