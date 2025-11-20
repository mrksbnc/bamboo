<template>
	<a
		:id="id"
		:href="computedHref"
		:target="target"
		:rel="computedRel"
		:role="computedRole"
		:tabindex="computedTabIndex"
		:class="[componentBaseClasses, customCssClass]"
		:style="linkStyle"
		:aria-live="ariaLive"
		:aria-label="computedAriaLabel"
		:data-testid="dataTestId"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
		:aria-disabled="disabled"
		@click="handleClick"
	>
		<slot>
			<bo-text
				v-if="label"
				:value="label"
				:font-size="textFontSize"
				:variant="BoTextVariant.current"
				:font-weight="BoFontWeight.medium"
				custom-css-class="bo-link__label"
			/>
		</slot>
	</a>
</template>

<script lang="ts" setup>
	import { BoFontSize, BoFontWeight, BoTextVariant } from '@/components/bo-text';
	import BoText from '@/components/bo-text/bo-text.vue';
	import { ColorService } from '@/services';
	import { IdentityService } from '@/services/identity-service';
	import { AriaLive } from '@/shared/accessibility';
	import type { ConditionalCssProperties } from '@/shared/css';
	import { BoSize } from '@/shared/size';
	import { BoVariant } from '@/shared/variant';
	import { computed, type CSSProperties, type StyleValue } from 'vue';
	import { BoLinkBehavior, type BoLinkProps } from './bo-link';

	const props = withDefaults(defineProps<BoLinkProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-link'),
		behavior: BoLinkBehavior.default,
		target: '_self',
		size: BoSize.md,
		variant: BoVariant.primary,
		ariaLive: AriaLive.polite,
	});

	const emit = defineEmits<{
		click: [event: MouseEvent];
	}>();

	const computedRel = computed<string | undefined>(() => {
		if (props.rel) {
			return props.rel;
		}

		// WCAG 2.2: Security best practice for external links
		if (props.target === '_blank') {
			return 'noopener noreferrer';
		}

		return undefined;
	});

	const computedAriaLabel = computed<string | undefined>(() => {
		if (props.ariaLabel) {
			// WCAG 2.2: If link opens in new window, announce it
			if (props.target === '_blank') {
				return `${props.ariaLabel} (opens in new window)`;
			}
			return props.ariaLabel;
		}

		if (props.label) {
			if (props.target === '_blank') {
				return `${props.label} (opens in new window)`;
			}
			return props.label;
		}

		if (props.ariaLabelledBy) {
			return undefined;
		}

		// WCAG 2.2: Links must have accessible names
		return undefined;
	});

	const linkColor = computed<CSSProperties>(() => {
		if (props.customColor) {
			return ColorService.instance.getValidCssColor(props.customColor);
		}
		return {};
	});

	const linkStyle = computed<StyleValue>(() => {
		return {
			...linkColor.value,
		};
	});

	const textFontSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.md:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.default;
			case BoSize.xl:
				return BoFontSize.lg;
			default:
				return BoFontSize.sm;
		}
	});

	const componentBaseClasses = computed<ConditionalCssProperties>(() => {
		return {
			'bo-link': true,
			[`bo-link--size-${props.size}`]: true,
			[`bo-link--variant-${props.variant}`]: true,
			[`bo-link--behavior-${props.behavior}`]: true,
			'bo-link--disabled': props.disabled,
		};
	});

	const computedHref = computed<string | undefined>(() => {
		if (props.disabled || props.behavior === BoLinkBehavior.button) {
			return undefined;
		}
		return props.href;
	});

	const computedRole = computed<string | undefined>(() => {
		if (props.role) {
			return props.role;
		}
		if (props.behavior === BoLinkBehavior.button) {
			return 'button';
		}
		return undefined;
	});

	const computedTabIndex = computed<number | undefined>(() => {
		if (props.tabIndex !== undefined) {
			return props.tabIndex;
		}
		if (props.disabled) {
			return -1;
		}
		return undefined;
	});

	const handleClick = (event: MouseEvent) => {
		if (props.disabled) {
			event.preventDefault();
			return;
		}
		emit('click', event);
	};
</script>

<style scoped lang="scss">
	a {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		font-family: inherit;
		text-decoration: none;
		cursor: pointer;
		text-align: center;
		vertical-align: middle;
		transition: all 0.2s ease-in-out;
	}

	.bo-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		user-select: none;

		&:focus-visible {
			outline: 2px solid var(--focus-ring-color);
			outline-offset: 2px;
			border-radius: 0.125rem;
		}

		/* BEM Element: label */
		&__label {
			text-decoration: inherit;
		}

		/* BEM Modifier: disabled state */
		&--disabled {
			opacity: 0.5;
			cursor: not-allowed;
			pointer-events: none;
		}

		/* BEM Modifier: button behavior */
		&--behavior-button {
			text-decoration: none;

			&:hover {
				text-decoration: none;
			}
		}

		/* BEM Modifier: primary variant */
		&--variant-primary {
			color: var(--link-primary);

			&:hover {
				color: var(--link-primary-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-primary-active);
			}

			&:visited {
				color: var(--link-primary-visited);
			}

			&:focus-visible {
				outline-color: var(--link-primary-focus);
			}
		}

		/* BEM Modifier: secondary variant */
		&--variant-secondary {
			color: var(--link-secondary);

			&:hover {
				color: var(--link-secondary-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-secondary-active);
			}

			&:visited {
				color: var(--link-secondary-visited);
			}

			&:focus-visible {
				outline-color: var(--link-secondary-focus);
			}
		}

		/* BEM Modifier: success variant */
		&--variant-success {
			color: var(--link-success);

			&:hover {
				color: var(--link-success-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-success-active);
			}

			&:visited {
				color: var(--link-success-visited);
			}

			&:focus-visible {
				outline-color: var(--link-success-focus);
			}
		}

		/* BEM Modifier: warning variant */
		&--variant-warning {
			color: var(--link-warning);

			&:hover {
				color: var(--link-warning-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-warning-active);
			}

			&:visited {
				color: var(--link-warning-visited);
			}

			&:focus-visible {
				outline-color: var(--link-warning-focus);
			}
		}

		/* BEM Modifier: danger variant */
		&--variant-danger {
			color: var(--link-danger);

			&:hover {
				color: var(--link-danger-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-danger-active);
			}

			&:visited {
				color: var(--link-danger-visited);
			}

			&:focus-visible {
				outline-color: var(--link-danger-focus);
			}
		}

		/* BEM Modifier: light variant */
		&--variant-light {
			color: var(--link-light);

			&:hover {
				color: var(--link-light-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-light-active);
			}

			&:visited {
				color: var(--link-light-visited);
			}

			&:focus-visible {
				outline-color: var(--link-light-focus);
			}
		}

		/* BEM Modifier: dark variant */
		&--variant-dark {
			color: var(--link-dark);

			&:hover {
				color: var(--link-dark-hover);
				text-decoration: underline;
			}

			&:active {
				color: var(--link-dark-active);
			}

			&:visited {
				color: var(--link-dark-visited);
			}

			&:focus-visible {
				outline-color: var(--link-dark-focus);
			}
		}

		/* BEM Modifier: size variants - typography handled by bo-text component */
		&--size-xs,
		&--size-sm,
		&--size-md,
		&--size-lg,
		&--size-xl {
			/* Size-specific typography is handled by bo-text component */
		}
	}
</style>
