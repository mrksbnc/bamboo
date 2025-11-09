<template>
	<div
		:id="id"
		:class="[componentBaseClasses, customCssClass]"
		:style="avatarColorStyles"
		:data-testid="dataTestId"
	>
		<img v-if="src" :src="src" :alt="alt" class="bo-avatar__image" @error="onImageError" />
		<bo-text
			v-else-if="text"
			:value="displayText"
			:font-size="textFontSize"
			:variant="BoTextVariant.inherit"
			:font-weight="BoFontWeight.semibold"
			class="bo-avatar__text"
		/>
		<span
			v-if="showIndicator"
			:class="indicatorClasses"
			:style="indicatorStyles"
			class="bo-avatar__indicator"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize, BoVariant } from '@/shared';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { computed, type StyleValue } from 'vue';
	import { BoAvatarIndicatorPosition, BoAvatarShape, type BoAvatarProps } from './bo-avatar';
	import './bo-avatar.css';

	const props = withDefaults(defineProps<BoAvatarProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-avatar'),
		size: BoSize.md,
		shape: BoAvatarShape.circle,
		indicatorPosition: BoAvatarIndicatorPosition.topRight,
		indicatorVariant: BoVariant.secondary,
	});

	const textFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.lg;
			case BoSize.xl:
				return BoFontSize.xl;
			case BoSize.md:
			default:
				return BoFontSize.default;
		}
	});

	const displayText = computed<string>(() => {
		if (!props.text) {
			return '';
		}

		return props.text.substring(0, 2).toUpperCase();
	});

	const avatarColorStyles = computed<StyleValue>(() => {
		let style: StyleValue = {};

		if (props.customBackgroundColor) {
			style = {
				...style,
				...ColorService.instance.getCustomBackgroundColorStyle(props.customBackgroundColor),
			};
		}

		if (props.customTextColor) {
			style = {
				...style,
				...ColorService.instance.getCustomColorStyle(props.customTextColor),
			};
		}

		return style;
	});

	const indicatorClasses = computed<ConditionalCssProperties>(() => ({
		'bo-avatar__indicator': true,
		[`bo-avatar__indicator--${props.indicatorVariant}`]: true,
		[`bo-avatar__indicator--${props.indicatorPosition}`]: true,
	}));

	const indicatorStyles = computed<StyleValue>(() => {
		const offset = 2;

		switch (props.indicatorPosition) {
			case BoAvatarIndicatorPosition.topRight:
				return {
					top: `${offset}px`,
					right: `${offset}px`,
					transform: 'translate(50%, -50%)',
				};
			case BoAvatarIndicatorPosition.topLeft:
				return {
					top: `${offset}px`,
					left: `${offset}px`,
					transform: 'translate(-50%, -50%)',
				};
			case BoAvatarIndicatorPosition.bottomRight:
				return {
					bottom: `${offset}px`,
					right: `${offset}px`,
					transform: 'translate(50%, 50%)',
				};
			case BoAvatarIndicatorPosition.bottomLeft:
				return {
					bottom: `${offset}px`,
					left: `${offset}px`,
					transform: 'translate(-50%, 50%)',
				};
			default:
				return {
					top: `${offset}px`,
					right: `${offset}px`,
					transform: 'translate(50%, -50%)',
				};
		}
	});

	const componentBaseClasses = computed<ConditionalCssProperties>(() => ({
		'bo-avatar': true,
		[`bo-avatar--size-${props.size}`]: true,
		[`bo-avatar--shape-${props.shape}`]: true,
		'bo-avatar--with-indicator': props.showIndicator,
	}));

	function onImageError(event: Event): void {
		console.error('Avatar image failed to load:', event);
	}
</script>

<style lang="scss" scoped>
	.bo-avatar {
		user-select: none;
		overflow: visible;
		position: relative;
		align-items: center;
		display: inline-flex;
		justify-content: center;
		color: var(--avatar-color);
		background-color: var(--avatar-bg);

		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: inherit;
		}

		&__text {
			font-size: inherit;
			line-height: 1;
			border-radius: inherit;
		}

		&__indicator {
			position: absolute;
			min-width: var(--spacing-3);
			min-height: var(--spacing-3);
			border: 2px solid var(--border-on-color);
			border-radius: var(--radius-full);

			&--primary {
				background-color: var(--variant-primary-bg);
			}

			&--secondary {
				background-color: var(--variant-secondary-text);
			}

			&--success {
				background-color: var(--variant-success-bg);
			}

			&--warning {
				background-color: var(--variant-warning-bg);
			}

			&--danger {
				background-color: var(--variant-danger-bg);
			}

			&--light {
				background-color: var(--variant-light-bg-active);
			}

			&--dark {
				background-color: var(--variant-dark-bg);
			}
		}

		&--with-indicator {
			isolation: isolate;
		}

		&--size-xs {
			width: var(--spacing-6); /* 24px */
			height: var(--spacing-6);
			font-size: var(--font-size-xs);
		}

		&--size-sm {
			width: var(--spacing-8); /* 32px */
			height: var(--spacing-8);
			font-size: var(--font-size-sm);
		}

		&--size-md {
			width: var(--spacing-10); /* 40px */
			height: var(--spacing-10);
			font-size: var(--font-size-base);
		}

		&--size-lg {
			width: var(--spacing-12); /* 48px */
			height: var(--spacing-12);
			font-size: var(--font-size-lg);
		}

		&--size-xl {
			width: var(--spacing-16); /* 64px */
			height: var(--spacing-16);
			font-size: var(--font-size-xl);
		}

		&--size-xxl {
			width: 5rem; /* 80px */
			height: 5rem;
			font-size: var(--font-size-2xl);
		}

		&--shape-circle {
			border-radius: var(--radius-full);

			.bo-avatar__image {
				overflow: hidden;
			}

			.bo-avatar__indicator {
				transform: none !important;

				&--top-right {
					top: 0 !important;
					right: 0 !important;
				}

				&--top-left {
					top: 0 !important;
					left: 0 !important;
				}

				&--bottom-right {
					bottom: 0 !important;
					right: 0 !important;
				}

				&--bottom-left {
					bottom: 0 !important;
					left: 0 !important;
				}
			}
		}

		&--shape-rounded {
			border-radius: var(--radius-lg);

			.bo-avatar__image {
				overflow: hidden;
			}
		}

		&--shape-square {
			border-radius: var(--radius-none);

			.bo-avatar__image {
				overflow: hidden;
			}
		}
	}
</style>
