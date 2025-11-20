<template>
	<div :id="id" :class="componentBaseClasses" :data-testid="dataTestId" @click="handleClick">
		<figure v-if="$slots.image" class="bo-card__image">
			<slot name="image" />
		</figure>
		<div class="bo-card__content">
			<div v-if="title || subtitle || $slots.header" class="bo-card__header">
				<slot name="header">
					<bo-text
						v-if="title"
						:value="title"
						:font-size="BoFontSize.xl"
						:font-weight="BoFontWeight.semibold"
						:variant="BoTextVariant.inherit"
						custom-css-class="bo-card__title"
					/>
					<bo-text
						v-if="subtitle"
						:value="subtitle"
						:font-size="BoFontSize.sm"
						:variant="BoTextVariant.inherit"
						custom-css-class="bo-card__subtitle"
					/>
				</slot>
			</div>
			<div class="bo-card__body">
				<slot />
			</div>
			<div v-if="$slots.actions" class="bo-card__actions">
				<slot name="actions" />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import { computed } from 'vue';
	import type { BoCardProps } from './bo-card';

	const props = withDefaults(defineProps<BoCardProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-card'),
		hoverable: false,
		clickable: false,
		compact: false,
		side: false,
		bordered: true,
		glass: false,
	});

	const emit = defineEmits<{
		click: [event: MouseEvent];
	}>();

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-card',
			props.hoverable && 'bo-card--hoverable',
			props.clickable && 'bo-card--clickable',
			props.compact && 'bo-card--compact',
			props.side && 'bo-card--side',
			props.bordered && 'bo-card--bordered',
			props.glass && 'bo-card--glass',
			props.customCssClass,
		]
			.filter(Boolean)
			.join(' ');
	});

	function handleClick(event: MouseEvent): void {
		if (props.clickable) {
			emit('click', event);
		}
	}
</script>

<style scoped lang="scss">
	.bo-card {
		display: flex;
		flex-direction: column;
		background-color: var(--card-bg);
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: var(--card-shadow);
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;

		&--bordered {
			border: 1px solid var(--card-border);
		}

		&--hoverable:hover {
			box-shadow: var(--card-shadow-hover);
			transform: translateY(-2px);
		}

		&--clickable {
			cursor: pointer;
		}

		&--compact {
			.bo-card__header,
			.bo-card__body,
			.bo-card__actions {
				padding: 1rem;
			}
		}

		&--side {
			flex-direction: row;

			.bo-card__image {
				width: 40%;
				flex-shrink: 0;
			}

			.bo-card__content {
				width: 60%;
			}

			@media (width <= 768px) {
				flex-direction: column;

				.bo-card__image,
				.bo-card__content {
					width: 100%;
				}
			}
		}

		&--glass {
			background-color: var(--card-glass-bg);
			backdrop-filter: blur(16px);
			border: 1px solid var(--card-glass-border);
		}

		&__image {
			margin: 0;
			width: 100%;
			overflow: hidden;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: block;
			}
		}

		&__content {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		&__header {
			padding: 1.5rem;
		}

		&__title {
			margin: 0;
			color: var(--card-title);
		}

		&__subtitle {
			margin: 0.25rem 0 0;
			color: var(--card-subtitle);
		}

		&__body {
			padding: 0 1.5rem 1.5rem;
			flex: 1;
			color: var(--card-text);
		}

		&__actions {
			padding: 0 1.5rem 1.5rem;
			display: flex;
			gap: 0.5rem;
			justify-content: flex-end;
		}
	}
</style>
