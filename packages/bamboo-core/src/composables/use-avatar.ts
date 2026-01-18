import { computed, ShallowRef, StyleValue } from 'vue';
import { BoAvatarProps } from '../definitions/bo-avatar';
import { ComponentStyleComposable } from './types';
import { mergeTwClasses } from '../utils/tailwind-utils';
import { BoFontSize } from '../definitions/bo-text';
import { AVATAR_MANIFEST } from '../manifests/avatar.manifest';

export interface UseBoAvatar extends ComponentStyleComposable {
	label: ShallowRef<string>;
	renderWithImage: ShallowRef<boolean>;
	labelFontSize: ShallowRef<BoFontSize>;
	containerClassValues: ShallowRef<string>;
	indicatorClassValues: ShallowRef<string>;
	renderWithAbbreviatedLabel: ShallowRef<boolean>;
}

export interface UseBoAvatarOptions {
	props: BoAvatarProps;
	imgError: ShallowRef<boolean>;
}

export const useBoAvatar = (args: UseBoAvatarOptions): UseBoAvatar => {
	const { props, imgError } = args;

	const isOutlineKind = computed<boolean>(() => {
		return props.kind?.includes('outline') ?? false;
	});

	const renderWithImage = computed<boolean>(() => {
		return !!props.src && !imgError.value;
	});

	const renderWithAbbreviatedLabel = computed<boolean>(() => {
		return !!props.label && !renderWithImage.value;
	});

	const label = computed<string>(() => {
		const safeStr = props?.label || '';

		if (safeStr.length > 2) {
			return safeStr.slice(0, 2).toUpperCase();
		}
		return safeStr.toUpperCase();
	});

	const labelFontSize = computed<BoFontSize>(() => {
		return AVATAR_MANIFEST.styles.labelSize[props.size || 'default'];
	});

	const fontColor = computed<string>(() => {
		if (props.color?.textColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return AVATAR_MANIFEST.styles.textColor.outline[variant];
		}

		return AVATAR_MANIFEST.styles.textColor.filled[variant];
	});

	const backgroundClassValues = computed<string>(() => {
		if (props.color?.bgColor) {
			return '';
		}

		const variant = props.variant || 'primary';

		if (isOutlineKind.value) {
			return AVATAR_MANIFEST.styles.variants.outline[variant];
		}

		return AVATAR_MANIFEST.styles.variants.filled[variant];
	});

	const indicatorClassValues = computed<string>(() => {
		if (!props.indicatorKind || props.indicatorKind === 'none') {
			return '';
		}

		return mergeTwClasses(
			/*tw*/ 'absolute rounded-full border-2 border-white',
			AVATAR_MANIFEST.styles.indicator.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.indicator.status[props.indicatorKind || 'none'],
			AVATAR_MANIFEST.styles.indicator.position[props.indicatorPosition || 'top-right'],
		);
	});

	const containerClassValues = computed<string>(() => {
		const cursorClass = props.clickable
			? /* tw*/ 'cursor-pointer hover:opacity-80'
			: /* tw*/ 'cursor-default';
		const shadowClass = !isOutlineKind.value
			? /* tw*/ 'shadow-xs dark:shadow-gray-800'
			: /* tw*/ '';

		return mergeTwClasses(
			cursorClass,
			shadowClass,
			fontColor.value,
			AVATAR_MANIFEST.styles.base,
			backgroundClassValues.value,
			AVATAR_MANIFEST.styles.size[props.size || 'default'],
			AVATAR_MANIFEST.styles.kind[props.kind || 'default'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {
			color: props.color?.textColor,
			backgroundColor: props.color?.bgColor,
		};
	});

	return {
		label,
		styleValues,
		labelFontSize,
		renderWithImage,
		containerClassValues,
		indicatorClassValues,
		renderWithAbbreviatedLabel,
	};
};
