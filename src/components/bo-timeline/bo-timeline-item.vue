<template>
	<li :class="componentBaseClasses" role="listitem">
		<div class="bo-timeline-item__marker" :style="markerStyle">
			<bo-icon v-if="icon" :icon="icon" :size="14" />
			<span
				v-else-if="isStart"
				class="bo-timeline-item__marker-dot bo-timeline-item__marker-dot--start"
			></span>
			<span
				v-else-if="isEnd"
				class="bo-timeline-item__marker-dot bo-timeline-item__marker-dot--end"
			></span>
			<span v-else class="bo-timeline-item__marker-dot"></span>
		</div>
		<div class="bo-timeline-item__content">
			<time v-if="timestamp" class="bo-timeline-item__timestamp" :datetime="timestamp">
				<bo-text
					:value="timestamp"
					:font-size="BoFontSize.xs"
					:font-weight="BoFontWeight.medium"
					:variant="BoTextVariant.inherit"
				/>
			</time>
			<bo-text
				v-if="title"
				:value="title"
				:font-size="BoFontSize.sm"
				:font-weight="BoFontWeight.semibold"
				:variant="BoTextVariant.inherit"
				custom-css-class="bo-timeline-item__title"
			/>
			<bo-text
				v-if="description"
				:value="description"
				:font-size="BoFontSize.sm"
				:variant="BoTextVariant.inherit"
				custom-css-class="bo-timeline-item__description"
			/>
			<slot />
		</div>
	</li>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { ColorService } from '@/services';
	import { BoVariant } from '@/shared/variant';
	import { computed, type CSSProperties, type StyleValue } from 'vue';
	import type { BoTimelineItemProps } from './bo-timeline';

	const props = withDefaults(defineProps<BoTimelineItemProps>(), {
		variant: BoVariant.primary,
		isStart: false,
		isEnd: false,
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-timeline-item',
			`bo-timeline-item--variant-${props.variant}`,
			props.isStart && 'bo-timeline-item--start',
			props.isEnd && 'bo-timeline-item--end',
		]
			.filter(Boolean)
			.join(' ');
	});

	const markerColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			const colorStyle = ColorService.instance.getValidCssColor(props.customColor);
			return {
				'--marker-color': colorStyle,
			};
		}
		return {};
	});

	const markerStyle = computed<StyleValue>(() => {
		return {
			...markerColor.value,
		};
	});
</script>

<style scoped lang="scss">
	.bo-timeline-item {
		position: relative;
		padding-bottom: 2rem;
		list-style: none;

		&:last-child {
			padding-bottom: 0;
		}

		&__marker {
			position: absolute;
			left: -1.75rem;
			top: 0.25rem;
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 9999px;
			background-color: var(--timeline-dot-bg);
			border: 3px solid var(--marker-color, var(--timeline-dot-border-active));
			display: flex;
			align-items: center;
			justify-content: center;
			z-index: 1;
			color: var(--marker-color, var(--timeline-dot-border-active));
		}

		&__marker-dot {
			width: 0.5rem;
			height: 0.5rem;
			border-radius: 9999px;
			background-color: var(--marker-color, var(--timeline-dot-border-active));

			&--start {
				width: 0.75rem;
				height: 0.75rem;
			}

			&--end {
				width: 0.75rem;
				height: 0.75rem;
				background-color: transparent;
				border: 2px solid var(--marker-color, var(--timeline-dot-border-active));
			}
		}

		&__content {
			padding-left: 0.5rem;
		}

		&__timestamp {
			display: block;
			color: var(--timeline-time-text);
			margin-bottom: 0.25rem;
		}

		&__title {
			color: var(--timeline-title-text);
			margin: 0 0 0.25rem;
		}

		&__description {
			color: var(--timeline-content-text);
			margin: 0;
		}

		/* Variant colors */
		&--variant-primary &__marker {
			--marker-color: var(--timeline-dot-bg-active);
		}

		&--variant-secondary &__marker {
			--marker-color: var(--timeline-dot-border);
		}

		&--variant-success &__marker {
			--marker-color: var(--icon-success);
		}

		&--variant-warning &__marker {
			--marker-color: var(--icon-warning);
		}

		&--variant-danger &__marker {
			--marker-color: var(--icon-danger);
		}

		&--variant-light &__marker {
			--marker-color: var(--icon-light);
		}

		&--variant-dark &__marker {
			--marker-color: var(--icon-dark);
		}

		/* Horizontal timeline support */
		.bo-timeline--horizontal & {
			padding-bottom: 0;
			padding-right: 2rem;
			flex: 1;
			min-width: 200px;

			&__marker {
				left: 50%;
				top: -1.75rem;
				transform: translateX(-50%);
			}

			&__content {
				padding-left: 0;
				padding-top: 0.5rem;
			}
		}
	}
</style>
