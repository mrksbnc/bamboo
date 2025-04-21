<template>
	<button
		v-bind="props"
		:disabled="isDisabled"
		:class="buttonClass"
		:aria-busy="isLoading"
		:aria-pressed="pressed"
		:aria-disabled="isDisabled"
		:aria-label="computedAriaLabel"
		:data-testid="`bo-button-${id}`"
	>
		<slot>
			<span
				class="bo-button__content flex items-center justify-center gap-3"
				:data-testid="`bo-button-content-${id}`"
			>
				<bo-icon
					v-if="prefixIcon !== Icon.none || iconOnlyButton"
					:icon="iconOnlyIcon"
					:size="size"
					class="bo-button__prefix-icon"
					aria-hidden="true"
					:data-testid="`bo-button-prefix-icon-${id}`"
				/>
				<span
					v-if="!!label && !iconOnlyButton"
					class="bo-button__label flex items-center justify-center"
				>
					<bo-text
						:value="label"
						:clickable="true"
						:size="buttonFontSize"
						:weight="BoFontWeight.semibold"
						class="bo-button__label"
					/>
				</span>
				<bo-icon
					v-if="suffixIcon && suffixIcon !== Icon.none && !isLoading && !iconOnlyButton"
					:icon="suffixIcon"
					:size="size"
					class="bo-button__suffix-icon"
					aria-hidden="true"
					:data-testid="`bo-button-suffix-icon-${id}`"
				/>
				<bo-loading-spinner
					v-if="isLoading && loaderType === 'spinner'"
					:size="loaderSize"
					:variant="loaderVariant"
					class="bo-button__loader"
					aria-hidden="true"
				/>
				<bo-loading-pulse
					v-if="isLoading && loaderType === 'pulse'"
					:size="loaderSize"
					:variant="loaderVariant"
					class="bo-button__loader"
					aria-hidden="true"
				/>
			</span>
		</slot>
	</button>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo-icon';
import { BoLoadingPulse } from '@/components/bo-loading-pulse';
import { BoLoadingSpinner } from '@/components/bo-loading-spinner';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo-text';
import { IdentityService, StringService, TailwindService } from '@/services';
import { BoLoaderType, BoLoaderVariant, BoSize, HtmlButtonType } from '@/shared';
import { computed, toRefs } from 'vue';
import { BoButtonShape, BoButtonVariant, type BoButtonProps } from './bo-button';

const slots = defineSlots<{
	default?: (props: Record<string, unknown>) => void;
}>();

const props = withDefaults(defineProps<BoButtonProps>(), {
	id: IdentityService.instance.generateId(),
	loaderType: BoLoaderType.spinner,
	size: () => BoSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	type: () => HtmlButtonType.button,
	shape: () => BoButtonShape.default,
	variant: () => BoButtonVariant.primary,
	ariaLabel: 'Button',
});

const {
	label,
	variant,
	size,
	prefixIcon,
	suffixIcon,
	shape,
	disabled,
	loaderType,
	isLoading,
	fullWidth,
	pressed,
	ariaLabel,
} = toRefs(props);

const defaultButtonClasses = {
	default:
		/*tw*/ 'bo-button flex items-center justify-center cursor-pointer max-h-fit font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
	disabled:
		/*tw*/ 'bo-button--disabled disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
	loading: /*tw*/ 'bo-button--loading',
	pressed: /*tw*/ 'bo-button--pressed',
	fullWidth: /*tw*/ 'bo-button--full-width w-full',
};

const widthClasses = {
	default: /*tw*/ 'w-auto max-w-fit',
	fullWidth: /*tw*/ 'bo-button--full-width w-full',
};

const shapeClasses = {
	[BoButtonShape.pill]: /*tw*/ 'bo-button--pill rounded-full',
	[BoButtonShape.link]: /*tw*/ 'bo-button--link rounded-none',
	[BoButtonShape.default]: /*tw*/ 'bo-button--default rounded-lg',
	[BoButtonShape.outline]: /*tw*/ 'bo-button--outline rounded-lg',
};

const shadowClasses = {
	link: /*tw*/ 'shadow-none',
	default: /*tw*/ 'shadow-lg',
};

const variantClasses = {
	[BoButtonShape.default]: {
		[BoButtonVariant.primary]:
			/*tw*/ 'bo-button--primary bg-blue-600 dark:bg-blue-700 hover:opacity-80 focus:ring-transparent border border-blue-600 dark:border-blue-700 text-white',
		[BoButtonVariant.secondary]:
			/*tw*/ 'bo-button--secondary bg-neutral-400 dark:bg-neutral-700 hover:opacity-80 focus:ring-transparent border border-neutral-400 dark:border-neutral-700 text-white',
		[BoButtonVariant.danger]:
			/*tw*/ 'bo-button--danger bg-red-600 dark:bg-red-700 hover:opacity-80 focus:ring-transparent border border-red-600 dark:border-red-700 text-white',
		[BoButtonVariant.warning]:
			/*tw*/ 'bo-button--warning bg-yellow-500 dark:bg-yellow-600 hover:opacity-80 focus:ring-transparent border border-yellow-500 dark:border-yellow-600 text-white',
		[BoButtonVariant.success]:
			/*tw*/ 'bo-button--success bg-green-600 dark:bg-green-700 hover:opacity-80 focus:ring-transparent border border-green-600 dark:border-green-700 text-white',
		[BoButtonVariant.light]:
			/*tw*/ 'bo-button--light bg-white dark:bg-white hover:opacity-80 focus:ring-transparent border border-white dark:border-white text-black',
		[BoButtonVariant.dark]:
			/*tw*/ 'bo-button--dark bg-black dark:bg-black hover:opacity-80 focus:ring-transparent border border-black dark:border-black text-white',
	},
	[BoButtonShape.pill]: {
		[BoButtonVariant.primary]:
			/*tw*/ 'bo-button--primary bg-blue-600 dark:bg-blue-700 hover:opacity-80 focus:ring-transparent border border-blue-600 dark:border-blue-700 text-white',
		[BoButtonVariant.secondary]:
			/*tw*/ 'bo-button--secondary bg-neutral-400 dark:bg-neutral-700 hover:opacity-80 focus:ring-transparent border border-neutral-400 dark:border-neutral-700 text-white',
		[BoButtonVariant.danger]:
			/*tw*/ 'bo-button--danger bg-red-600 dark:bg-red-700 hover:opacity-80 focus:ring-transparent border border-red-600 dark:border-red-700 text-white',
		[BoButtonVariant.warning]:
			/*tw*/ 'bo-button--warning bg-yellow-500 dark:bg-yellow-600 hover:opacity-80 focus:ring-transparent border border-yellow-500 dark:border-yellow-600 text-white',
		[BoButtonVariant.success]:
			/*tw*/ 'bo-button--success bg-green-600 dark:bg-green-700 hover:opacity-80 focus:ring-transparent border border-green-600 dark:border-green-700 text-white',
		[BoButtonVariant.light]:
			/*tw*/ 'bo-button--light bg-white dark:bg-white hover:opacity-80 focus:ring-transparent border border-white dark:border-white text-black',
		[BoButtonVariant.dark]:
			/*tw*/ 'bo-button--dark bg-black dark:bg-black hover:opacity-80 focus:ring-transparent border border-black dark:border-black text-white',
	},
	[BoButtonShape.outline]: {
		[BoButtonVariant.primary]:
			/*tw*/ 'bo-button--primary border border-blue-600 bg-transparent hover:bg-blue-700 focus:ring-transparent text-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500',
		[BoButtonVariant.secondary]:
			/*tw*/ 'bo-button--secondary border border-neutral-500 bg-transparent dark:border-neutral-300 hover:bg-neutral-500 focus:ring-transparent text-neutral-500 dark:text-neutral-300 hover:text-white',
		[BoButtonVariant.danger]:
			/*tw*/ 'bo-button--danger border border-red-600 bg-transparent hover:bg-red-600 focus:ring-transparent text-red-600 hover:text-white dark:border-red-500 dark:text-red-500',
		[BoButtonVariant.warning]:
			/*tw*/ 'bo-button--warning border border-yellow-500 bg-transparent hover:bg-yellow-500 focus:ring-transparent text-yellow-500 hover:text-white dark:border-yellow-400 dark:text-yellow-400',
		[BoButtonVariant.success]:
			/*tw*/ 'bo-button--success border border-green-600 bg-transparent hover:bg-green-600 focus:ring-transparent text-green-600 hover:text-white dark:border-green-500 dark:text-green-500',
		[BoButtonVariant.light]:
			/*tw*/ 'bo-button--light border border-neutral-50 bg-transparent hover:bg-white focus:ring-transparent text-neutral-50 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-200 dark:text-neutral-200',
		[BoButtonVariant.dark]:
			/*tw*/ 'bo-button--dark border border-black bg-transparent hover:bg-black focus:ring-transparent text-black hover:text-white dark:border-neutral-700 dark:text-neutral-300',
	},
	[BoButtonShape.link]: {
		[BoButtonVariant.primary]:
			/*tw*/ 'bo-button--primary bg-transparent hover:bg-transparent focus:ring-transparent text-blue-700 dark:text-blue-500 hover:opacity-80',
		[BoButtonVariant.secondary]:
			/*tw*/ 'bo-button--secondary bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-700 dark:text-neutral-400 hover:opacity-80',
		[BoButtonVariant.danger]:
			/*tw*/ 'bo-button--danger bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 dark:text-red-500 hover:opacity-80',
		[BoButtonVariant.warning]:
			/*tw*/ 'bo-button--warning bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-500 dark:text-yellow-400 hover:opacity-80',
		[BoButtonVariant.success]:
			/*tw*/ 'bo-button--success bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 dark:text-green-500 hover:opacity-80',
		[BoButtonVariant.light]:
			/*tw*/ 'bo-button--light bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-500 dark:text-neutral-200 hover:opacity-80',
		[BoButtonVariant.dark]:
			/*tw*/ 'bo-button--dark bg-transparent hover:bg-transparent focus:ring-transparent text-black dark:text-neutral-300 hover:opacity-80',
	},
};

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small px-2 py-1',
	[BoSize.small]: /*tw*/ 'bo-button--small px-3 py-1.5',
	[BoSize.default]: /*tw*/ 'bo-button--default px-4 py-2',
	[BoSize.large]: /*tw*/ 'bo-button--large px-5 py-2.5',
	[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large px-6 py-3',
};

const iconOnlySizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'bo-button--extra-small p-1',
	[BoSize.small]: /*tw*/ 'bo-button--small p-1.5',
	[BoSize.default]: /*tw*/ 'bo-button--default p-2.5',
	[BoSize.large]: /*tw*/ 'bo-button--large p-2.5',
	[BoSize.extra_large]: /*tw*/ 'bo-button--extra-large p-3',
};

const isDisabled = computed<boolean>(() => {
	return disabled.value || isLoading.value;
});

const computedAriaLabel = computed<string | undefined>(() => {
	return (
		ariaLabel.value ??
		(label.value ? undefined : iconOnlyButton.value ? 'Button with icon' : undefined)
	);
});

const widthConstruct = computed<string>(() => {
	return fullWidth.value ? widthClasses.fullWidth : widthClasses.default;
});

const iconOnlyButton = computed<boolean>(() => {
	return (
		StringService.instance.isEmptyStr(label.value) &&
		prefixIcon.value &&
		prefixIcon.value !== Icon.none
	);
});

const buttonSizeClasses = computed<string>(() => {
	if (iconOnlyButton.value) {
		return iconOnlySizeClasses[size.value];
	}

	return sizeClasses[size.value];
});

const iconOnlyIcon = computed<Icon>(() => {
	return prefixIcon.value ?? suffixIcon.value ?? Icon.none;
});

const variantShadowClasses = computed<string>(() => {
	if (shape.value === BoButtonShape.link) {
		return shadowClasses.link;
	}

	return shadowClasses.default;
});

const buttonClass = computed<string>(() => {
	return TailwindService.instance.merge(
		widthConstruct.value,
		buttonSizeClasses.value,
		shapeClasses[shape.value],
		variantShadowClasses.value,
		defaultButtonClasses.default,
		defaultButtonClasses.disabled,
		defaultButtonClasses.loading,
		defaultButtonClasses.pressed,
		defaultButtonClasses.fullWidth,
		variantClasses[shape.value][variant.value],
	);
});

const buttonFontSize = computed<BoFontSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoFontSize.xs;
		case BoSize.large:
		case BoSize.extra_large:
			return BoFontSize.base;
		case BoSize.default:
		default:
			return BoFontSize.sm;
	}
});

const loaderVariant = computed<BoLoaderVariant>(() => {
	if (shape.value === BoButtonShape.outline || shape.value === BoButtonShape.link) {
		switch (variant.value) {
			case BoButtonVariant.secondary:
				return BoLoaderVariant.secondary;
			case BoButtonVariant.danger:
				return BoLoaderVariant.danger;
			case BoButtonVariant.warning:
				return BoLoaderVariant.warning;
			case BoButtonVariant.success:
				return BoLoaderVariant.success;
			case BoButtonVariant.dark:
				return BoLoaderVariant.dark;
			case BoButtonVariant.primary:
			default:
				return BoLoaderVariant.primary;
		}
	}

	switch (variant.value) {
		case BoButtonVariant.primary:
		case BoButtonVariant.secondary:
		case BoButtonVariant.danger:
		case BoButtonVariant.warning:
		case BoButtonVariant.success:
		case BoButtonVariant.dark:
		default:
			return BoLoaderVariant.white;
	}
});

const loaderSize = computed<BoSize>(() => {
	switch (size.value) {
		case BoSize.extra_small:
			return BoSize.extra_small;
		case BoSize.small:
			return BoSize.small;
		case BoSize.default:
			return loaderType.value === 'pulse' ? BoSize.small : BoSize.default;
		case BoSize.large:
			return BoSize.default;
		case BoSize.extra_large:
			return BoSize.large;
		default:
			return BoSize.small;
	}
});
</script>
