import { computed, ShallowRef, StyleValue } from 'vue';
import { BoAvatarProps } from '../definitions/bo-avatar';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../definitions/bo-text';
import { AVATAR_MANIFEST } from '../manifests/avatar.manifest';

export interface UseBoAvatar extends ComponentStyleComposable {
	indicatorClassValues: ShallowRef<string>;
	labelFontSize: ShallowRef<BoFontSize>;
	label: ShallowRef<string>;
	showDefaultAvatar: ShallowRef<boolean>;
	textColorClass: ShallowRef<string>;
	defaultAvatarClassValues: ShallowRef<string>;
	initialsContainerClassValues: ShallowRef<string>;
	imageContainerClassValues: ShallowRef<string>;
}

export const useBoAvatar = (
	props: BoAvatarProps,
	options?: { imgError?: boolean },
): UseBoAvatar => {
	const { merge } = useTailwind();

	const isOutlineShape = computed<boolean>(() => {
		return props.shape?.includes('outline') ?? false;
	});

	const label = computed<string>(() => {
		const safeStr = props.data?.label || '';
		if (safeStr.length > 2) {
			return safeStr.slice(0, 2).toUpperCase();
		}
		return safeStr.toUpperCase();
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return AVATAR_MANIFEST.styles.labelSize[props.size || 'default'];
	});

	const showDefaultAvatar = computed<boolean>(() => {
		if (props.withDefaultImage || options?.imgError) {
			return true;
		}
		return props.data?.src === undefined && !!props.data?.label;
	});

	const textColorClass = computed<string>(() => {
		if (props.color?.textColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineShape.value) {
			return AVATAR_MANIFEST.styles.textColor.outline[variant];
		}

		return AVATAR_MANIFEST.styles.textColor.filled[variant];
	});

	const bgConstruct = computed<string>(() => {
		if (
			props.color?.bgColor ||
			props.withDefaultImage ||
			(props.type === 'image' && !options?.imgError)
		) {
			return 'bg-transparent';
		}

		const variant = props.variant || 'primary';

		if (isOutlineShape.value) {
			return AVATAR_MANIFEST.styles.variants.outline[variant];
		}

		return AVATAR_MANIFEST.styles.variants.filled[variant];
	});

	const indicatorClassValues = computed<string>(() => {
		if (!props.indicator || props.indicator.status === 'none') {
			return '';
		}

		return merge(
			'absolute rounded-full border-2 border-white',
			AVATAR_MANIFEST.styles.indicator.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.indicator.status[props.indicator.status || 'none'],
			AVATAR_MANIFEST.styles.indicator.position[props.indicator.position || 'bottom-right'],
		);
	});

	const defaultAvatarClassValues = computed<string>(() => {
		return merge(AVATAR_MANIFEST.styles.containers.default);
	});

	const initialsContainerClassValues = computed<string>(() => {
		return merge(AVATAR_MANIFEST.styles.containers.initials);
	});

	const imageContainerClassValues = computed<string>(() => {
		return merge(AVATAR_MANIFEST.styles.containers.image);
	});

	const classValues = computed<string>(() => {
		const cursorClass = props.clickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default';
		const shadowClass = !isOutlineShape.value ? 'shadow-sm dark:shadow-gray-800' : '';

		return merge(
			AVATAR_MANIFEST.styles.base,
			AVATAR_MANIFEST.styles.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.shape[props.shape || 'rounded'],
			bgConstruct.value,
			cursorClass,
			shadowClass,
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {
			backgroundColor: props.color?.bgColor,
			color: props.color?.textColor,
		};
	});

	return {
		indicatorClassValues,
		labelFontSize,
		label,
		showDefaultAvatar,
		textColorClass,
		defaultAvatarClassValues,
		initialsContainerClassValues,
		imageContainerClassValues,
		classValues,
		styleValues,
	};
};
