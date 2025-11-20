<template>
	<span
		:id="id"
		:role="role"
		:class="[componentBaseClasses, customCssClass]"
		:style="badgeStyle"
		:aria-label="computedAriaLabel"
		:data-testid="dataTestId"
	>
		<span v-if="showDot" class="bo-badge__dot"></span>
		<bo-icon v-if="prefixIcon" :icon="prefixIcon" :size="iconSize" />
		<slot>
			<bo-text
				v-if="label"
				:value="label"
				:font-size="textSize"
				:font-weight="BoFontWeight.medium"
			/>
		</slot>
		<bo-icon v-if="suffixIcon" :icon="suffixIcon" :size="iconSize" />
	</span>
</template>

<script lang="ts" setup>
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed, type CSSProperties, type StyleValue } from 'vue';
	import { BoBadgeShape, BoBadgeStyle, type BoBadgeProps } from './bo-badge';

	const props = withDefaults(defineProps<BoBadgeProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-badge'),
		size: BoSize.md,
		variant: BoVariant.primary,
		badgeStyle: BoBadgeStyle.default,
		shape: BoBadgeShape.default,
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			return props.ariaLabel;
		}

		if (props.label) {
			return props.label;
		}

		return undefined;
	});

	const textSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.xs;
			case BoSize.lg:
				return BoFontSize.sm;
			case BoSize.xl:
				return BoFontSize.default;
			case BoSize.md:
			default:
				return BoFontSize.sm;
		}
	});

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoSize.xs:
				return 12;
			case BoSize.sm:
				return 12;
			case BoSize.lg:
				return 14;
			case BoSize.xl:
				return 16;
			case BoSize.md:
			default:
				return 14;
		}
	});

	const badgeColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			const validatedCustomColor = ColorService.instance.getValidCssColor(props.customColor);
			return {
				backgroundColor: validatedCustomColor,
				borderColor: validatedCustomColor,
			};
		}
		return {};
	});

	const badgeStyle = computed<StyleValue>(() => {
		return {
			...badgeColor.value,
		};
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-badge',
			props.showDot && 'bo-badge--with-dot',
			`bo-badge--size-${props.size}`,
			props.neutral ? 'bo-badge--neutral' : `bo-badge--variant-${props.variant}`,
			`bo-badge--style-${props.badgeStyle}`,
			`bo-badge--shape-${props.shape}`,
			props.responsive && 'bo-badge--responsive',
		]
			.filter(Boolean)
			.join(' ');
	});
</script>

<style scoped lang="scss">
	.bo-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		border: 1px solid transparent;
		white-space: nowrap;
		transition:
			color 0.2s ease-in-out,
			background-color 0.2s ease-in-out,
			border-color 0.2s ease-in-out;

		&__dot {
			width: 0.375rem;
			height: 0.375rem;
			border-radius: 50%;
			flex-shrink: 0;
		}

		/* Shape variants */
		&--shape-default {
			border-radius: 0.375rem; /* 6px - rounded but not full pill */
		}

		&--shape-pill {
			border-radius: 9999px; /* Full pill shape */
		}

		&--shape-square {
			border-radius: 0.125rem; /* 2px - minimal rounding */
		}

		/* Neutral badge */
		&--neutral {
			&.bo-badge--style-default {
				background-color: var(--badge-bg-neutral);
				color: var(--badge-text-neutral);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-neutral);
				}
			}

			&.bo-badge--style-outline {
				background-color: transparent;
				color: var(--badge-text-neutral);
				border-color: var(--badge-border-neutral);

				.bo-badge__dot {
					background-color: var(--badge-text-neutral);
				}
			}

			&.bo-badge--style-ghost {
				background-color: transparent;
				color: var(--badge-text-neutral);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-neutral);
				}
			}
		}

		/* Variant styles - Default */
		&--style-default {
			&.bo-badge--variant-primary {
				background-color: var(--badge-bg-primary);
				color: var(--badge-text-primary);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-primary);
				}
			}

			&.bo-badge--variant-secondary {
				background-color: var(--badge-bg-secondary);
				color: var(--badge-text-secondary);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-secondary);
				}
			}

			&.bo-badge--variant-success {
				background-color: var(--badge-bg-success);
				color: var(--badge-text-success);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-success);
				}
			}

			&.bo-badge--variant-warning {
				background-color: var(--badge-bg-warning);
				color: var(--badge-text-warning);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-warning);
				}
			}

			&.bo-badge--variant-danger {
				background-color: var(--badge-bg-danger);
				color: var(--badge-text-danger);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-danger);
				}
			}

			&.bo-badge--variant-light {
				background-color: var(--badge-bg-light);
				color: var(--badge-text-light);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-light);
				}
			}

			&.bo-badge--variant-dark {
				background-color: var(--badge-bg-dark);
				color: var(--badge-text-dark);
				border-color: transparent;

				.bo-badge__dot {
					background-color: var(--badge-text-dark);
				}
			}
		}

		/* Variant styles - Outline */
		&--style-outline {
			background-color: transparent;

			&.bo-badge--variant-primary {
				color: var(--badge-text-outline-primary);
				border-color: var(--badge-border-primary);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-primary);
				}
			}

			&.bo-badge--variant-secondary {
				color: var(--badge-text-outline-secondary);
				border-color: var(--badge-border-secondary);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-secondary);
				}
			}

			&.bo-badge--variant-success {
				color: var(--badge-text-outline-success);
				border-color: var(--badge-border-success);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-success);
				}
			}

			&.bo-badge--variant-warning {
				color: var(--badge-text-outline-warning);
				border-color: var(--badge-border-warning);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-warning);
				}
			}

			&.bo-badge--variant-danger {
				color: var(--badge-text-outline-danger);
				border-color: var(--badge-border-danger);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-danger);
				}
			}

			&.bo-badge--variant-light {
				color: var(--badge-text-outline-light);
				border-color: var(--badge-border-light);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-light);
				}
			}

			&.bo-badge--variant-dark {
				color: var(--badge-text-outline-dark);
				border-color: var(--badge-border-dark);

				.bo-badge__dot {
					background-color: var(--badge-text-outline-dark);
				}
			}
		}

		/* Variant styles - Ghost */
		&--style-ghost {
			background-color: transparent;
			border-color: transparent;

			&.bo-badge--variant-primary {
				color: var(--badge-text-ghost-primary);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-primary);
				}
			}

			&.bo-badge--variant-secondary {
				color: var(--badge-text-ghost-secondary);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-secondary);
				}
			}

			&.bo-badge--variant-success {
				color: var(--badge-text-ghost-success);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-success);
				}
			}

			&.bo-badge--variant-warning {
				color: var(--badge-text-ghost-warning);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-warning);
				}
			}

			&.bo-badge--variant-danger {
				color: var(--badge-text-ghost-danger);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-danger);
				}
			}

			&.bo-badge--variant-light {
				color: var(--badge-text-ghost-light);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-light);
				}
			}

			&.bo-badge--variant-dark {
				color: var(--badge-text-ghost-dark);

				.bo-badge__dot {
					background-color: var(--badge-text-ghost-dark);
				}
			}
		}

		/* Size variants */
		&--size-xs {
			padding: 0.125rem 0.375rem;
			gap: 0.25rem;
		}

		&--size-sm {
			padding: 0.125rem 0.5rem;
			gap: 0.25rem;
		}

		&--size-md {
			padding: 0.25rem 0.625rem;
			gap: 0.375rem;
		}

		&--size-lg {
			padding: 0.375rem 0.75rem;
			gap: 0.375rem;
		}

		&--size-xl {
			padding: 0.5rem 1rem;
			gap: 0.5rem;
		}

		/* Responsive */
		&--responsive {
			@media (width <= 768px) {
				padding: 0.125rem 0.5rem;
				gap: 0.25rem;
			}
		}
	}
</style>
