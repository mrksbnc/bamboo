import { computed, ShallowRef, StyleValue } from 'vue';
import { BoAvatarProps, BoAvatarType } from '../definitions/bo-avatar';
import { ComponentStyleComposable } from './types';
import { mergeTwClasses } from '../utils/tailwind-utils';
import { BoFontSize } from '../definitions/bo-text';
import { AVATAR_MANIFEST } from '../manifests/avatar.manifest';

export interface UseBoAvatar extends ComponentStyleComposable {
	indicatorClassValues: ShallowRef<string>;
	labelFontSize: ShallowRef<BoFontSize>;
	label: ShallowRef<string>;
	showDefaultAvatar: ShallowRef<boolean>;
	textColorClass: ShallowRef<string>;
	containerClassValues: ShallowRef<Record<BoAvatarType, string>>;
}

export interface UseBoAvatarOptions {
	props: BoAvatarProps;
	imgError?: boolean;
}

export const useBoAvatar = (args: UseBoAvatarOptions): UseBoAvatar => {
	const { props, imgError } = args;

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
		if (props.withDefaultImage || imgError) {
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
		if (props.color?.bgColor || props.withDefaultImage || (props.type === 'image' && !imgError)) {
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

		return mergeTwClasses(
			/*tw*/ 'absolute rounded-full border-2 border-white',
			AVATAR_MANIFEST.styles.indicator.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.indicator.status[props.indicator.status || 'none'],
			AVATAR_MANIFEST.styles.indicator.position[props.indicator.position || 'bottom-right'],
		);
	});

	const containerClassValues = computed<Record<BoAvatarType, string>>(() => {
		return {
			image: AVATAR_MANIFEST.styles.container.image,
			default: AVATAR_MANIFEST.styles.container.default,
			initials: AVATAR_MANIFEST.styles.container.initials,
		};
	});

	const classValues = computed<string>(() => {
		const cursorClass = props.clickable
			? /* tw*/ 'cursor-pointer hover:opacity-80'
			: /* tw*/ 'cursor-default';
		const shadowClass = !isOutlineShape.value
			? /* tw*/ 'shadow-sm dark:shadow-gray-800'
			: /* tw*/ '';

		return mergeTwClasses(
			cursorClass,
			shadowClass,
			bgConstruct.value,
			AVATAR_MANIFEST.styles.base,
			AVATAR_MANIFEST.styles.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.shape[props.shape || 'rounded'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {
			color: props.color?.textColor,
			backgroundColor: props.color?.bgColor,
		};
	});

	return {
		indicatorClassValues,
		labelFontSize,
		label,
		showDefaultAvatar,
		textColorClass,
		containerClassValues,
		classValues,
		styleValues,
	};
};
