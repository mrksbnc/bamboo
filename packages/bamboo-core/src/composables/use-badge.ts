import { computed, ShallowRef } from 'vue';
import { ComponentStyleComposable } from './types';
import { mergeTwClasses } from '../utils/tailwind-utils.js';
import { Icon, type BoBadgeProps, type BoFontSize, type BoIconSize } from '../definitions/index.js';
import { BADGE_MANIFEST } from '../manifests/index.js';

export interface UseBoBadge extends ComponentStyleComposable {
	isCircle: ShallowRef<boolean>;
	isIconOnly: ShallowRef<boolean>;
	iconSize: ShallowRef<BoIconSize>;
	renderLabel: ShallowRef<boolean>;
	iconOnlyComponent: ShallowRef<Icon>;
	badgeFontSize: ShallowRef<BoFontSize>;
	prefixIconContainerClassValues: ShallowRef<string>;
	suffixIconContainerClassValues: ShallowRef<string>;
}

export const useBoBadge = (props: BoBadgeProps): UseBoBadge => {
	const isIconOnly = computed<boolean>(() => {
		const hasIcon =
			(props.icon?.prefix && props.icon.prefix !== 'none') ||
			(props.icon?.suffix && props.icon.suffix !== 'none');
		return (hasIcon ?? false) && !!props.label;
	});

	const iconOnlyComponent = computed<Icon>(() => {
		return props.icon?.prefix ?? props.icon?.suffix ?? 'none';
	});

	const isCircle = computed<boolean>(() => {
		return props.shape === 'circle' && isIconOnly.value;
	});

	const renderLabel = computed<boolean>(() => {
		return !!props.label && !isIconOnly.value;
	});

	const badgeFontSize = computed<BoFontSize>(() => {
		return BADGE_MANIFEST.styles.fontSize[props.size || 'default'];
	});

	const iconSize = computed<BoIconSize>(() => {
		return BADGE_MANIFEST.styles.iconSize[props.size || 'default'];
	});

	const sizeClasses = computed<string>(() => {
		return props.shape === 'circle'
			? BADGE_MANIFEST.styles.size.circle[props.size || 'default']
			: BADGE_MANIFEST.styles.size.default[props.size || 'default'];
	});

	const prefixIconContainerClassValues = computed<string>(() => {
		return BADGE_MANIFEST.styles.containers.prefixIcon;
	});

	const suffixIconContainerClassValues = computed<string>(() => {
		return BADGE_MANIFEST.styles.containers.suffixIcon;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			sizeClasses.value,
			BADGE_MANIFEST.styles.base,
			BADGE_MANIFEST.styles.shape[props.shape || 'default'],
			BADGE_MANIFEST.styles.variants[props.type || 'default'][props.variant || 'primary'],
		);
	});

	return {
		isIconOnly,
		iconOnlyComponent,
		iconSize,
		isCircle,
		renderLabel,
		classValues,
		badgeFontSize,
		prefixIconContainerClassValues,
		suffixIconContainerClassValues,
	};
};
