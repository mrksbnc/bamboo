<template>
	<div class="bo-avatar__container">
		<img
			v-if="type === AvatarType.Image"
			alt="Avatar"
			:src="avatarSrc"
			:class="['bo-avatar', avatarClasses]"
		/>
		<div
			v-if="type === AvatarType.Initial && initial !== null"
			:style="initialStyle"
			:class="['bo-avatar', avatarClasses]"
		>
			<span> {{ initial }} </span>
		</div>
		<span
			v-if="showIndicator"
			:style="indicatorStyle"
			:class="['indicator', indicatorClasses]"
		/>
	</div>
</template>

<script setup lang="ts">
import avatarPlaceholder from '@/assets/img/avatar.png';
import { toRefs, type PropType, computed } from 'vue';
import {
	AvatarSize,
	AvatarType,
	AvatarVariant,
	AvatarIndicatorPosition,
	type AvatarIndicatorProps,
} from '@/components/Avatar';
import type { OptionalCss } from '@/types';
import type { AvatarInitialProps } from './types';

const props = defineProps({
	src: {
		type: String,
		default: null,
	},
	initial: {
		type: String,
		default: null,
	},
	type: {
		type: String as PropType<AvatarType>,
		default: () => AvatarType.Image,
	},
	variant: {
		type: String as PropType<AvatarVariant>,
		default: () => AvatarVariant.Rounded,
	},
	size: {
		type: String as PropType<AvatarSize>,
		default: () => AvatarSize.MD,
	},
	indicatorProps: {
		type: Object as PropType<AvatarIndicatorProps>,
		default: () => null,
	},
	initialProps: {
		type: Object as PropType<AvatarInitialProps>,
		default: () => null,
	},
});

const { src, initial, type, variant, size, indicatorProps, initialProps } =
	toRefs(props);

const avatarSrc = computed<string>(() => {
	return src.value ?? avatarPlaceholder;
});

const avatarClasses = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	switch (type.value) {
		case AvatarType.Image:
			classes['image'] = true;
			break;
		case AvatarType.Initial:
			classes['initial'] = true;
			break;
	}

	switch (variant.value) {
		case AvatarVariant.Rounded:
			classes['rounded'] = true;
			break;
		case AvatarVariant.Square:
			classes['square'] = true;
			break;
	}

	switch (size.value) {
		case AvatarSize.XS:
			classes['xs'] = true;
			break;
		case AvatarSize.SM:
			classes['sm'] = true;
			break;
		case AvatarSize.MD:
			classes['md'] = true;
			break;
		case AvatarSize.LG:
			classes['lg'] = true;
			break;
		case AvatarSize.XL:
			classes['xl'] = true;
			break;
	}

	return classes;
});

const showIndicator = computed<boolean>(() => {
	return indicatorProps.value != null;
});

const indicatorStyle = computed<Record<string, string>>(() => {
	return {
		background: indicatorProps.value?.color ?? 'var(--black)',
	};
});

const initialStyle = computed<Record<string, string>>(() => {
	return {
		'background-color':
			initialProps.value?.backgroundColor ?? 'var(--gray-300)',
		color: initialProps?.value?.fontColor ?? 'var(--gray-800)',
	};
});

const indicatorClasses = computed<OptionalCss>(() => {
	const classes: OptionalCss = {};

	if (indicatorProps.value != null) {
		switch (indicatorProps.value.position) {
			case AvatarIndicatorPosition.Bottom:
				classes['bottom'] = true;
				break;
			case AvatarIndicatorPosition.Top:
			default:
				classes['top'] = true;
				break;
		}
	}

	return classes;
});
</script>

<style scoped lang="scss">
@import './avatar.scss';
</style>
