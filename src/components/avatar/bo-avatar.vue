<template>
	<div
		:role="avatarAccessibility.container.role"
		:id="avatarAccessibility.container.id"
		:style="containerStyle"
		:class="avatarContainerClasses"
		:aria-label="avatarAccessibility.container.ariaLabel"
		:aria-describedby="avatarAccessibility.container.ariaDescribedBy"
		:data-testid="constructAttribute(id, 'avatar')"
		@click="onClick"
	>
		<div
			v-if="showFallbackImage"
			:class="AVATAR_STYLE.layout.fallbackContainer"
			:data-testid="constructAttribute(id, 'avatar-fallback')"
		>
			<img
				:alt="avatarAccessibility.image.alt"
				:aria-hidden="avatarAccessibility.image.ariaHidden"
				ref="fallbackImage"
				:src="DefaultAvatarSvg"
				:class="AVATAR_STYLE.layout.image"
				:data-testid="constructAttribute(id, 'avatar-fallback-image')"
				@error="onImageError"
			/>
		</div>
		<div
			v-else-if="type === BoAvatarType.image"
			:class="AVATAR_STYLE.layout.imageContainer"
			:data-testid="constructAttribute(id, 'avatar-image-container')"
		>
			<img
				ref="imageElement"
				:src="data?.src"
				:alt="avatarAccessibility.image.alt"
				:aria-hidden="avatarAccessibility.image.ariaHidden"
				:class="AVATAR_STYLE.layout.image"
				:data-testid="constructAttribute(id, 'avatar-image')"
				@error="onImageError"
				@load="onImageLoad"
			/>
		</div>
		<div
			v-else
			:class="[AVATAR_STYLE.layout.initialsContainer, textColorClass]"
			:data-testid="constructAttribute(id, 'avatar-initials')"
			:aria-hidden="!avatarAccessibility.interactive.isClickable"
		>
			<bo-text
				:value="label"
				:size="labelSize"
				:color="BoTextColor.current"
				:weight="BoFontWeight.medium"
				:data-testid="constructAttribute(id, 'avatar-label')"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import DefaultAvatarSvg from '@/assets/img/avatar.png?url';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { StringService } from '@/services/string-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref, type StyleValue } from 'vue';
import {
	BoAvatarShape,
	BoAvatarType,
	BoAvatarVariant,
	type BoAvatarAccessibilityConstruct,
	type BoAvatarProps,
} from './bo-avatar.js';

const props = withDefaults(defineProps<BoAvatarProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	type: () => BoAvatarType.initials,
	shape: () => BoAvatarShape.rounded,
	variant: () => BoAvatarVariant.primary,
});

const emit = defineEmits<{
	(e: 'click', payload: { id: string }): void;
	(e: 'image-load', payload: { id: string; src: string }): void;
	(e: 'image-error', payload: { id: string; error: Event }): void;
}>();

const { constructAttribute } = useAttributes();

const imgError = ref<boolean>(false);
const imgLoaded = ref<boolean>(false);
const fallbackImage = ref<HTMLImageElement>();
const imageElement = ref<HTMLImageElement>();

const AVATAR_STYLE = {
	layout: {
		container:
			/*tw*/ 'bo-avatar relative flex items-center justify-center overflow-hidden object-cover',
		fallbackContainer: /*tw*/ 'bo-avatar__fallback-img flex items-center justify-center',
		imageContainer: /*tw*/ 'bo-avatar__image-container',
		image: /*tw*/ 'bo-avatar__image object-cover',
		initialsContainer: /*tw*/ 'bo-avatar__initials flex items-center justify-center',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'bo-avatar--extra-small size-6',
		[BoSize.small]: /*tw*/ 'bo-avatar--small size-8',
		[BoSize.default]: /*tw*/ 'bo-avatar--default size-10',
		[BoSize.large]: /*tw*/ 'bo-avatar--large size-14',
		[BoSize.extra_large]: /*tw*/ 'bo-avatar--extra-large size-20',
	},
	shape: {
		[BoAvatarShape.circle]: /*tw*/ 'bo-avatar--circle rounded-full',
		[BoAvatarShape.rounded]: /*tw*/ 'bo-avatar--rounded rounded-md',
		[BoAvatarShape.flat]: /*tw*/ 'bo-avatar--flat rounded-none',
		[BoAvatarShape.outline_circle]: /*tw*/ 'bo-avatar--outline-circle rounded-full border',
		[BoAvatarShape.outline_rounded]: /*tw*/ 'bo-avatar--outline-rounded rounded-md border',
		[BoAvatarShape.outline_flat]: /*tw*/ 'bo-avatar--outline-flat rounded-none border',
	},
	interactive: {
		default: /*tw*/ 'cursor-default',
		clickable:
			/*tw*/ 'cursor-pointer hover:opacity-80 transition-all duration-200 transform hover:scale-105',
		focus: /*tw*/ 'focus:outline-none',
		active: /*tw*/ 'active:scale-95 active:opacity-90',
		disabled: /*tw*/ 'opacity-50 cursor-not-allowed',
	},
	appearance: {
		shadow: /*tw*/ 'shadow-md',
		noShadow: /*tw*/ 'shadow-none',
	},
	variant: {
		[BoAvatarVariant.primary]: /*tw*/ 'bo-avatar--primary bg-blue-500 dark:bg-blue-700 text-white',
		[BoAvatarVariant.secondary]:
			/*tw*/ 'bo-avatar--secondary bg-gray-400 dark:bg-gray-700 text-white',
		[BoAvatarVariant.danger]: /*tw*/ 'bo-avatar--danger bg-red-500 dark:bg-red-700 text-white',
		[BoAvatarVariant.warning]:
			/*tw*/ 'bo-avatar--warning bg-yellow-500 dark:bg-yellow-600 text-white',
		[BoAvatarVariant.success]:
			/*tw*/ 'bo-avatar--success bg-green-600 dark:bg-green-700 text-white',
		[BoAvatarVariant.dark]: /*tw*/ 'bo-avatar--dark bg-black dark:bg-black text-white',
	},
	outlineVariant: {
		[BoAvatarVariant.primary]:
			/*tw*/ 'bo-avatar--outline-primary bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
		[BoAvatarVariant.secondary]:
			'bo-avatar--outline-secondary bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
		[BoAvatarVariant.danger]:
			/*tw*/ 'bo-avatar--outline-danger bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
		[BoAvatarVariant.warning]:
			/*tw*/ 'bo-avatar--outline-warning bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
		[BoAvatarVariant.success]:
			/*tw*/ 'bo-avatar--outline-success bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
		[BoAvatarVariant.dark]:
			/*tw*/ 'bo-avatar--outline-dark bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
	},
	variantText: {
		[BoAvatarVariant.primary]: /*tw*/ 'text-white dark:text-white',
		[BoAvatarVariant.secondary]: /*tw*/ 'text-white dark:text-white',
		[BoAvatarVariant.danger]: /*tw*/ 'text-white dark:text-white',
		[BoAvatarVariant.warning]: /*tw*/ 'text-white dark:text-white',
		[BoAvatarVariant.success]: /*tw*/ 'text-white dark:text-white',
		[BoAvatarVariant.dark]: /*tw*/ 'text-white dark:text-white',
	},
	outlineVariantText: {
		[BoAvatarVariant.primary]: /*tw*/ 'text-blue-500 dark:text-blue-400',
		[BoAvatarVariant.secondary]: /*tw*/ 'text-gray-500 dark:text-neutral-300',
		[BoAvatarVariant.danger]: /*tw*/ 'text-red-500 dark:text-red-400',
		[BoAvatarVariant.warning]: /*tw*/ 'text-yellow-500 dark:text-yellow-400',
		[BoAvatarVariant.success]: /*tw*/ 'text-green-500 dark:text-green-400',
		[BoAvatarVariant.dark]: /*tw*/ 'text-black dark:text-neutral-300',
	},
} as const;

const label = computed<string>(() => {
	const safeStr = StringService.instance.safeString(props?.data?.label);

	// Split by spaces and take first letter of each word, max 2 letters
	const words = safeStr.trim().split(/\s+/);
	if (words.length >= 2) {
		return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
	}

	if (safeStr.length > 2) {
		return safeStr.slice(0, 2).toUpperCase();
	}

	return safeStr.toUpperCase();
});

const bgConstruct = computed<string>(() => {
	if (
		!StringService.instance.isEmptyStr(props?.color?.bgColorHex) ||
		(props.type === BoAvatarType.image && !imgError.value)
	) {
		return /*tw*/ 'bg-transparent';
	}

	const isOutlineShape = props?.shape.includes('outline');

	if (isOutlineShape) {
		return props?.variant in AVATAR_STYLE.outlineVariant
			? AVATAR_STYLE.outlineVariant[props?.variant]
			: getRandomOutlineColor();
	}

	return props?.variant in AVATAR_STYLE.variant
		? AVATAR_STYLE.variant[props?.variant]
		: getRandomColor();
});

const textColorClass = computed<string>(() => {
	if (!StringService.instance.isEmptyStr(props?.color?.colorHex)) {
		return '';
	}

	const isOutlineShape = props?.shape.includes('outline');

	if (isOutlineShape && props?.variant in AVATAR_STYLE.outlineVariantText) {
		return AVATAR_STYLE.outlineVariantText[props?.variant];
	}

	if (props?.variant in AVATAR_STYLE.variantText) {
		return AVATAR_STYLE.variantText[props?.variant];
	}

	return /*tw*/ 'text-gray-600 dark:text-gray-300';
});

const cursorClassConstruct = computed<string>(() => {
	if (!props.clickable) {
		return AVATAR_STYLE.interactive.default;
	}

	return TailwindService.instance.merge(
		AVATAR_STYLE.interactive.clickable,
		AVATAR_STYLE.interactive.active,
	);
});

const labelSize = computed<BoFontSize>(() => {
	switch (props.size) {
		case BoSize.extra_small:
			return BoFontSize.xs;
		case BoSize.small:
			return BoFontSize.sm;
		case BoSize.large:
			return BoFontSize.lg;
		case BoSize.extra_large:
			return BoFontSize.xl;
		case BoSize.default:
		default:
			return BoFontSize.base;
	}
});

const containerStyle = computed<StyleValue>(() => {
	return {
		backgroundColor: props?.color?.bgColorHex,
		color: props?.color?.colorHex,
	};
});

const avatarContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		AVATAR_STYLE.layout.container,
		AVATAR_STYLE.size[props.size],
		AVATAR_STYLE.shape[props?.shape],
		bgConstruct.value,
		cursorClassConstruct.value,
		!props?.shape.includes('outline')
			? AVATAR_STYLE.appearance.shadow
			: AVATAR_STYLE.appearance.noShadow,
	);
});

/**
 * 1. Show fallback if no data at all
 * 2. For image type, show fallback if no src or image error
 * 3. For initials type, show fallback if no label
 */
const showFallbackImage = computed<boolean>(() => {
	if (!props?.data) {
		return true;
	}

	if (props?.type === BoAvatarType.image) {
		return !props?.data?.src || imgError.value;
	}

	if (props?.type === BoAvatarType.initials) {
		return !props?.data?.label;
	}

	return false;
});

function onClick(): void {
	if (props.clickable) {
		emit('click', { id: props.id });
	}
}

function onImageError(e: Event): void {
	imgError.value = true;

	if (imageElement.value) {
		imageElement.value.src = DefaultAvatarSvg;
	}

	emit('image-error', { id: props.id, error: e });
	console.error('Error loading image', e);
}

function onImageLoad(e: Event): void {
	imgLoaded.value = true;
	const src = (e.target as HTMLImageElement)?.src;
	if (src) {
		emit('image-load', { id: props.id, src });
	}
}

function getRandomColor(): string {
	const colors: string[] = [
		/*tw*/ 'bg-blue-500 dark:bg-blue-600 text-white',
		/*tw*/ 'bg-gray-400 dark:bg-gray-600 text-white',
		/*tw*/ 'bg-red-500 dark:bg-red-600 text-white',
		/*tw*/ 'bg-yellow-500 dark:bg-yellow-600 text-white',
		/*tw*/ 'bg-green-500 dark:bg-green-600 text-white',
		/*tw*/ 'bg-black dark:bg-black text-white',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomOutlineColor(): string {
	const colors = [
		/*tw*/ 'bg-transparent border-blue-500 text-blue-500 dark:border-blue-400 dark:text-blue-400',
		/*tw*/ 'bg-transparent border-gray-500 text-gray-500 dark:border-neutral-300 dark:text-neutral-300',
		/*tw*/ 'bg-transparent border-red-500 text-red-500 dark:border-red-400 dark:text-red-400',
		/*tw*/ 'bg-transparent border-yellow-500 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400',
		/*tw*/ 'bg-transparent border-green-500 text-green-500 dark:border-green-400 dark:text-green-400',
		/*tw*/ 'bg-transparent border-black text-black dark:border-neutral-700 dark:text-neutral-300',
	];

	return colors[Math.floor(Math.random() * colors.length)];
}

const avatarAccessibility = computed<BoAvatarAccessibilityConstruct>(() => {
	return {
		container: {
			id: props.id,
			role: props.clickable ? 'button' : 'img',
			ariaLabel: props.ariaLabel || computedAriaLabel.value,
			ariaDescribedBy: props.ariaDescribedBy,
		},
		image: {
			alt: computedImageAlt.value,
			ariaHidden: props.clickable ? true : undefined,
		},
		interactive: {
			isClickable: Boolean(props.clickable),
			hasKeyboardSupport: Boolean(props.clickable),
		},
	};
});

const computedAriaLabel = computed<string>(() => {
	if (props.type === BoAvatarType.image && props.data?.alt) {
		return props.clickable ? `${props.data.alt} button` : props.data.alt;
	}

	if (props.type === BoAvatarType.initials && props.data?.label) {
		const baseLabel = `Avatar for ${props.data.label}`;
		return props.clickable ? `${baseLabel}, button` : baseLabel;
	}

	return props.clickable ? 'Avatar button' : 'Avatar';
});

const computedImageAlt = computed<string>(() => {
	// When avatar is clickable, the alt text should be empty since the container has aria-label
	if (props.clickable) {
		return '';
	}

	if (props.type === BoAvatarType.image && props.data?.alt) {
		return props.data.alt;
	}

	if (props.type === BoAvatarType.initials && props.data?.label) {
		return `Avatar for ${props.data.label}`;
	}

	return 'avatar';
});
</script>
