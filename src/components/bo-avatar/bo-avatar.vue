<template>
	<div
		:id="id"
		:class="[componentBaseClasses, customCssClass]"
		:style="avatarColorStyles"
		:data-testid="dataTestId"
		role="img"
		:aria-label="computedAriaLabel"
	>
		<img
			v-if="src"
			:src="src"
			:alt="alt"
			aria-hidden="true"
			:class="imageClasses"
			@error="onImageError"
		/>
		<bo-text
			v-else-if="text"
			:value="displayText"
			:font-size="textFontSize"
			:variant="BoTextVariant.inherit"
			:font-weight="BoFontWeight.semibold"
			class="bo-avatar__text"
		/>
		<span v-if="showIndicator" :class="indicatorClasses" class="bo-avatar__indicator" />
	</div>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoText, BoTextVariant } from '@/components/bo-text';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed, onMounted, type StyleValue } from 'vue';
	import { BoAvatarShape, type BoAvatarProps } from './bo-avatar';

	const props = withDefaults(defineProps<BoAvatarProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-avatar'),
		size: BoSize.md,
		shape: BoAvatarShape.circle,
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

		if (props.customBorderColor) {
			style = {
				...style,
				borderColor: ColorService.instance.getValidCssColor(props.customBorderColor),
			};
		}

		if (props.customBackgroundColor) {
			style = {
				...style,
				backgroundColor: ColorService.instance.getValidCssColor(props.customBackgroundColor),
			};
		}

		if (props.customTextColor) {
			style = {
				...style,
				color: ColorService.instance.getValidCssColor(props.customTextColor),
			};
		}

		return style;
	});

	const imageClasses = computed<ConditionalCssProperties>(() => ({
		'bo-avatar__image': true,
		[`bo-avatar__image--shape-${props.shape}`]: true,
	}));

	const indicatorClasses = computed<ConditionalCssProperties>(() => ({
		'bo-avatar__indicator': true,
		[`bo-avatar__indicator--${props.indicatorVariant}`]: true,
		[`bo-avatar__indicator--shape-${props.shape}`]: true,
	}));

	const componentBaseClasses = computed<ConditionalCssProperties>(() => ({
		'bo-avatar': true,
		[`bo-avatar--size-${props.size}`]: true,
		[`bo-avatar--shape-${props.shape}`]: true,
		'bo-avatar--with-indicator': props.showIndicator,
	}));

	const computedAriaLabel = computed<string>(() => {
		return props.ariaLabel || props.alt || props.text || 'Avatar';
	});

	function onImageError(event: Event): void {
		console.error('Avatar image failed to load:', event);
	}

	onMounted(() => {
		if (!props.src && !props.text) {
			console.warn(
				'[BoAvatar]: Missing both "src" and "text" props. Please provide at least one to display the avatar content.',
			);
		}
	});
</script>

<style scoped lang="scss">
	.bo-avatar {
		user-select: none;
		overflow: visible;
		position: relative;
		align-items: center;
		display: inline-flex;
		justify-content: center;
		color: var(--avatar-text);
		box-shadow: var(--shadow-sm);
		background-color: var(--avatar-bg);
		border: 1px solid var(--avatar-border);

		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
			overflow: hidden;
			border-radius: inherit;

			&--shape-circle {
				border-radius: 9999px;
			}

			&--shape-rounded {
				border-radius: 0.5rem; /* 8px */
			}

			&--shape-square {
				border-radius: 0;
			}
		}

		&__text {
			border-radius: inherit;
		}

		&__indicator {
			position: absolute;
			min-width: 0.75rem; /* 12px */
			min-height: 0.75rem; /* 12px */
			border-radius: 9999px;
			border: 2px solid var(--avatar-indicator-border);
			top: 0;
			right: 0;
			transform: translate(25%, -25%);

			&--shape-circle {
				transform: none;
			}

			&--primary {
				background-color: var(--avatar-indicator-primary);
			}

			&--secondary {
				background-color: var(--avatar-indicator-secondary);
			}

			&--success {
				background-color: var(--avatar-indicator-success);
			}

			&--warning {
				background-color: var(--avatar-indicator-warning);
			}

			&--danger {
				background-color: var(--avatar-indicator-danger);
			}

			&--light {
				background-color: var(--avatar-indicator-light);
			}

			&--dark {
				background-color: var(--avatar-indicator-dark);
			}
		}

		&--with-indicator {
			isolation: isolate;
		}

		&--size-xs {
			width: 1.5rem; /* 24px */
			height: 1.5rem;
		}

		&--size-sm {
			width: 2rem; /* 32px */
			height: 2rem;
		}

		&--size-md {
			width: 2.5rem; /* 40px */
			height: 2.5rem;
		}

		&--size-lg {
			width: 3rem; /* 48px */
			height: 3rem;
		}

		&--size-xl {
			width: 4rem; /* 64px */
			height: 4rem;
		}

		&--size-xxl {
			width: 5rem; /* 80px */
			height: 5rem;
		}

		&--shape-circle {
			border-radius: 9999px;
		}

		&--shape-rounded {
			border-radius: 0.5rem; /* 8px */
		}

		&--shape-square {
			border-radius: 0;
		}
	}
</style>
