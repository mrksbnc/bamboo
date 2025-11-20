<template>
	<ul
		:id="id"
		:class="componentBaseClasses"
		:data-testid="dataTestId"
		role="list"
		aria-label="Timeline"
	>
		<slot />
	</ul>
</template>

<script lang="ts" setup>
	import { IdentityService } from '@/services/identity-service';
	import { computed } from 'vue';
	import type { BoTimelineProps } from './bo-timeline';

	const props = withDefaults(defineProps<BoTimelineProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-timeline'),
		orientation: 'vertical',
		position: 'start',
		showLine: true,
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-timeline',
			`bo-timeline--${props.orientation}`,
			`bo-timeline--position-${props.position}`,
			!props.showLine && 'bo-timeline--no-line',
			props.customCssClass,
		]
			.filter(Boolean)
			.join(' ');
	});
</script>

<style scoped lang="scss">
	.bo-timeline {
		list-style: none;
		padding: 0;
		margin: 0;

		/* Vertical timeline (default) */
		&--vertical {
			position: relative;

			&.bo-timeline--position-start {
				padding-left: 2rem;

				&::before {
					content: '';
					position: absolute;
					left: 0.5rem;
					top: 0;
					bottom: 0;
					width: 2px;
					background-color: var(--timeline-line);
				}

				&.bo-timeline--no-line::before {
					display: none;
				}
			}

			&.bo-timeline--position-end {
				padding-right: 2rem;
				text-align: right;

				&::after {
					content: '';
					position: absolute;
					right: 0.5rem;
					top: 0;
					bottom: 0;
					width: 2px;
					background-color: var(--timeline-line);
				}

				&.bo-timeline--no-line::after {
					display: none;
				}
			}

			&.bo-timeline--position-alternate {
				padding: 0 2rem;

				&::before {
					content: '';
					position: absolute;
					left: 50%;
					top: 0;
					bottom: 0;
					width: 2px;
					background-color: var(--timeline-line);
					transform: translateX(-50%);
				}

				&.bo-timeline--no-line::before {
					display: none;
				}
			}
		}

		/* Horizontal timeline */
		&--horizontal {
			display: flex;
			gap: 2rem;
			padding-top: 2rem;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				top: 0.5rem;
				left: 0;
				right: 0;
				height: 2px;
				background-color: var(--timeline-line);
			}

			&.bo-timeline--no-line::before {
				display: none;
			}
		}
	}
</style>
