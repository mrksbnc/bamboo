<template>
	<button
		v-bind="props"
		:disabled="disabled || isLoading"
		:class="buttonClasses"
	>
		<div
			v-if="useSlot"
			class="bo-button__slot-container inline-flex items-center justify-center gap-1"
		>
			<slot name="content" />
		</div>
		<span
			v-else
			class="bo-button__content inline-flex items-center justify-center gap-1"
		>
			<bo-icon
				v-if="prefixIcon !== Icon.none || iconOnlyButton"
				:icon="iconOnlyIcon"
				:size="size"
				class="bo-button__prefix-icon"
			/>
			<span
				v-if="!!label && !iconOnlyButton"
				class="bo-button__label flex items-center justify-center"
			>
				<bo-text
					:text="label"
					:clickable="true"
					:weight="BoFontWeight.semibold"
					:size="buttonFontSize"
					class="bo-button__label"
				/>
			</span>
			<bo-icon
				v-if="suffixIcon && suffixIcon !== Icon.none && !isLoading && !iconOnlyButton"
				:icon="suffixIcon"
				:size="size"
				class="bo-button__suffix-icon"
			/>
			<bo-loading-spinner
				v-if="isLoading && loaderType === 'spinner'"
				:size="loaderSize"
				:variant="loaderVariant"
				class="ml-2"
			/>
			<bo-loading-pulse
				v-if="isLoading && loaderType === 'pulse'"
				:size="loaderSize"
				:variant="loaderVariant"
				class="ml-2"
			/>
		</span>
	</button>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoLoadingSpinner } from '@/components/bo_loading_spinner';
import { BoLoadingPulse } from '@/components/bo_loading_pulse';
import { BoFontSize, BoFontWeight, BoText } from '@/components/bo_text';
import { BoSize } from '@/shared/bo_size';
import { BoLoaderVariant } from '@/shared/bo_loader';
import { IdentityUtils, StringUtils, TailwindUtils } from '@/utils';
import { computed, toRefs } from 'vue';
import { BoButtonShape, BoButtonVariant, type BoButtonProps } from './bo_button';

const slots = defineSlots<{
	content(props: Record<string, unknown>): void;
}>();

const props = withDefaults(defineProps<BoButtonProps>(), {
	id: IdentityUtils.generateRandomIdWithPrefix('bo-button'),
	type: 'button',
	loaderType: 'spinner',
	size: () => BoSize.default,
	prefixIcon: () => Icon.none,
	suffixIcon: () => Icon.none,
	shape: () => BoButtonShape.default,
	variant: () => BoButtonVariant.primary,
	fullWidth: false,
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
} = toRefs(props);

const defaultButtonClasses = {
	default:
		/*tw*/ 'bo-button inline-flex items-center justify-center cursor-pointer max-h-fit font-semibold',
	disabled: /*tw*/ 'disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none',
};

const widthClasses = {
	default: /*tw*/ 'w-auto',
	fullWidth: /*tw*/ 'w-full',
};

const shapeClasses = {
	[BoButtonShape.pill]: /*tw*/ 'rounded-full',
	[BoButtonShape.link]: /*tw*/ 'rounded-none',
	[BoButtonShape.default]: /*tw*/ 'rounded-lg',
	[BoButtonShape.outline]: /*tw*/ 'rounded-lg',
};

const shadowClasses = {
	link: /*tw*/ 'shadow-none',
	default: /*tw*/ 'shadow-lg inset-shadow-sm inset-shadow-white/20',
};

const filledButtonClasses = {
	[BoButtonVariant.primary]:
		/*tw*/ 'bg-blue-600 dark:bg-blue-700 hover:opacity-80 focus:ring-transparent border border-blue-600 dark:border-blue-800 text-white',
	[BoButtonVariant.secondary]:
		/*tw*/ 'bg-gray-400 dark:bg-gray-700 hover:opacity-80 focus:ring-transparent border border-gray-400 dark:border-neutral-800 text-white',
	[BoButtonVariant.danger]:
		/*tw*/ 'bg-red-600 dark:bg-red-700 hover:opacity-80 focus:ring-transparent border border-red-600 dark:border-red-800 text-white',
	[BoButtonVariant.warning]:
		/*tw*/ 'bg-yellow-500 dark:bg-yellow-600 hover:opacity-80 focus:ring-transparent border border-yellow-500 dark:border-yellow-600 text-white',
	[BoButtonVariant.success]:
		/*tw*/ 'bg-green-600 dark:bg-green-700 hover:opacity-80 focus:ring-transparent border border-green-600 dark:border-green-800 text-white',
	[BoButtonVariant.light]:
		/*tw*/ 'bg-white dark:bg-white hover:opacity-80 focus:ring-transparent border border-white dark:border-white text-black',
	[BoButtonVariant.dark]:
		/*tw*/ 'bg-black dark:bg-black hover:opacity-80 focus:ring-transparent border border-black dark:border-black text-white',
};

const outlineButtonClasses = {
	[BoButtonVariant.primary]:
		/*tw*/ 'border border-blue-600 hover:bg-blue-700 focus:ring-transparent text-blue-600 hover:text-white',
	[BoButtonVariant.secondary]:
		/*tw*/ 'border border-gray-500 dark:border-neutral-300 hover:bg-gray-500 focus:ring-transparent text-gray-500 dark:text-neutral-300 hover:text-white',
	[BoButtonVariant.danger]:
		/*tw*/ 'border border-red-600 hover:bg-red-600 focus:ring-transparent text-red-600 hover:text-white',
	[BoButtonVariant.warning]:
		/*tw*/ 'border border-yellow-500 hover:bg-yellow-500 focus:ring-transparent text-yellow-500 hover:text-white',
	[BoButtonVariant.success]:
		/*tw*/ 'border border-green-600 hover:bg-green-600 focus:ring-transparent text-green-600 hover:text-white',
	[BoButtonVariant.light]:
		/*tw*/ 'border border-neutral-50 hover:bg-white focus:ring-transparent text-neutral-50 hover:border-neutral-500 hover:text-neutral-900',
	[BoButtonVariant.dark]:
		/*tw*/ 'border border-black hover:bg-black focus:ring-transparent text-black hover:text-white',
};

const linkButtonClasses = {
	[BoButtonVariant.primary]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-blue-700 dark:text-blue-600 hover:opacity-80',
	[BoButtonVariant.secondary]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-700 dark:text-neutral-400 hover:opacity-80',
	[BoButtonVariant.danger]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-red-600 hover:opacity-80',
	[BoButtonVariant.warning]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-yellow-500 hover:opacity-80',
	[BoButtonVariant.success]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-green-600 hover:opacity-80',
	[BoButtonVariant.light]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-neutral-500 dark:text-neutral-50 hover:opacity-80',
	[BoButtonVariant.dark]:
		/*tw*/ 'bg-transparent hover:bg-transparent focus:ring-transparent text-black hover:opacity-80',
};

const variantClasses = {
	[BoButtonShape.default]: {
		...filledButtonClasses,
	},
	[BoButtonShape.pill]: {
		...filledButtonClasses,
	},
	[BoButtonShape.outline]: {
		...outlineButtonClasses,
	},
	[BoButtonShape.link]: {
		...linkButtonClasses,
	},
};

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'px-3 py-1.5',
	[BoSize.small]: /*tw*/ 'px-3 py-2',
	[BoSize.default]: /*tw*/ 'px-4 py-2.5',
	[BoSize.large]: /*tw*/ 'px-5 py-3',
	[BoSize.extra_large]: /*tw*/ 'px-6 py-4',
};

const iconOnlySizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'p-2',
	[BoSize.small]: /*tw*/ 'p-2.5',
	[BoSize.default]: /*tw*/ 'p-3',
	[BoSize.large]: /*tw*/ 'p-3.5',
	[BoSize.extra_large]: /*tw*/ 'p-4',
};

const widthConstruct = computed<string>(() => {
	return fullWidth.value ? widthClasses.fullWidth : widthClasses.default;
});

const iconOnlyButton = computed<boolean>(() => {
	return StringUtils.isEmptyStr(label.value) && prefixIcon.value && prefixIcon.value !== Icon.none;
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

const buttonClasses = computed<string>(() => {
	return TailwindUtils.merge(
		widthConstruct.value,
		buttonSizeClasses.value,
		shapeClasses[shape.value],
		variantShadowClasses.value,
		defaultButtonClasses.default,
		defaultButtonClasses.disabled,
		variantClasses[shape.value][variant.value],
	);
});

const buttonFontSize = computed<BoFontSize>(() => {
	if (size.value === BoSize.extra_small || size.value === BoSize.small) {
		return BoFontSize.xs;
	} else if (size.value === BoSize.large) {
		return BoFontSize.base;
	} else if (size.value === BoSize.extra_large) {
		return BoFontSize.lg;
	} else {
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
	if (size.value === BoSize.default && loaderType.value === 'pulse') {
		return BoSize.extra_small;
	}

	switch (size.value) {
		case BoSize.extra_small:
		case BoSize.small:
			return BoSize.extra_small;
		case BoSize.default:
		default:
			return BoSize.small;
		case BoSize.large:
		case BoSize.extra_large:
			return BoSize.default;
	}
});
</script>
