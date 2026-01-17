import { computed, ShallowRef, StyleValue } from 'vue';
import { BoBadgeProps } from '../definitions/bo-badge';
import { ComponentStyleComposable } from './types';
import { useTailwind } from './use-tailwind';
import { BoFontSize } from '../definitions/bo-text';
import { BoIconSize } from '../definitions/bo-icon';
import { Icon } from '../definitions/bo-icon-registry';
import { BADGE_MANIFEST } from '../manifests/badge.manifest';

export interface UseBoBadge extends ComponentStyleComposable {
	badgeFontSize: ShallowRef<BoFontSize>;
	iconSize: ShallowRef<BoIconSize>;
	isIconOnly: ShallowRef<boolean>;
	isCircle: ShallowRef<boolean>;
	renderLabel: ShallowRef<boolean>;
	prefixOrIconOnlySrc: ShallowRef<Icon>;
	prefixIconContainerClassValues: ShallowRef<string>;
	suffixIconContainerClassValues: ShallowRef<string>;
}

const isEmptyStr = (str?: string): boolean => {
	return str === undefined || str === null || str.trim() === '';
};

export const useBoBadge = (props: BoBadgeProps): UseBoBadge => {
	const { merge } = useTailwind();

	const isIconOnly = computed<boolean>(() => {
		const hasIcon =
			(props.icon?.prefix && props.icon.prefix !== 'none') ||
			(props.icon?.suffix && props.icon.suffix !== 'none');
		return (hasIcon ?? false) && isEmptyStr(props.label);
	});

	const prefixOrIconOnlySrc = computed<Icon>(() => {
		if (isIconOnly.value) {
			return props.icon?.prefix ?? props.icon?.suffix ?? 'none';
		}
		return props.icon?.prefix ?? 'none';
	});

	const isCircle = computed<boolean>(() => {
		return props.shape === 'circle' && isIconOnly.value;
	});

	const renderLabel = computed<boolean>(() => {
		return !isEmptyStr(props.label) && !isIconOnly.value;
	});

	const badgeFontSize = computed<BoFontSize>(() => {
		return BADGE_MANIFEST.styles.fontSize[props.size || 'default'];
	});

	const iconSize = computed<BoIconSize>(() => {
		return BADGE_MANIFEST.styles.iconSize[props.size || 'default'];
	});

	const sizeClasses = computed<string>(() => {
		if (props.shape === 'circle') {
			return BADGE_MANIFEST.styles.size.circle[props.size || 'default'];
		}
		return BADGE_MANIFEST.styles.size.default[props.size || 'default'];
	});

	const prefixIconContainerClassValues = computed<string>(() => {
		return merge(BADGE_MANIFEST.styles.containers.prefixIcon);
	});

	const suffixIconContainerClassValues = computed<string>(() => {
		return merge(BADGE_MANIFEST.styles.containers.suffixIcon);
	});

	const classValues = computed<string>(() => {
		const type = props.type || 'default';
		const variant = props.variant || 'primary';
		const shape = props.shape || 'default';

		return merge(
			BADGE_MANIFEST.styles.base,
			sizeClasses.value,
			BADGE_MANIFEST.styles.shape[shape],
			BADGE_MANIFEST.styles.variants[type][variant],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		return {};
	});

	return {
		badgeFontSize,
		iconSize,
		isIconOnly,
		isCircle,
		renderLabel,
		prefixOrIconOnlySrc,
		prefixIconContainerClassValues,
		suffixIconContainerClassValues,
		classValues,
		styleValues,
	};
};
