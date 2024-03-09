<template>
	<div
		class="bo-badge inline-flex cursor-default select-none space-x-1 shadow-md"
		:class="[`badge-${variant}`, styleClasses]"
	>
		<bo-icon
			v-if="hasPrefixIcon"
			:size="iconSize"
			:icon="iconProps.prefix"
			class="bo-bade__icon-prefix"
		/>
		<div>
			<span
				v-if="showLabel"
				class="bo-badge__label truncate font-medium"
			>
				{{ label }}
			</span>
			<bo-icon
				v-if="iconOnly"
				:size="iconSize"
				:icon="iconProps.icon"
				class="bo-bade__icon-only"
			/>
		</div>
		<bo-icon
			v-if="hasSuffixIcon"
			:size="iconSize"
			:icon="iconProps.suffix"
			class="bo-bade__icon-suffix"
		/>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/BoIcon';
import { BoSize, BoVariant } from '@/constants';
import { TailwindUtils } from '@/utils';
import { computed, toRefs, type PropType } from 'vue';
import {
	BoBadgeType,
	BoBadgeSize,
	type BoBadgeIcon,
} from '@/components/BoBadge';
import { StringUtils } from '@/utils/string_utils';

const props = defineProps({
	label: {
		type: String,
		default: null,
	},
	variant: {
		type: String as PropType<BoVariant>,
		default: BoVariant.default,
	},
	size: {
		type: String as PropType<BoBadgeSize>,
		default: BoBadgeSize.default,
	},
	type: {
		type: String as PropType<BoBadgeType>,
		default: BoBadgeType.default,
	},
	icon: {
		type: Object as PropType<BoBadgeIcon>,
		default: null,
	},
});

const { label, variant, size, type, icon } = toRefs(props);

const iconProps = computed<Required<BoBadgeIcon>>(() => {
	return {
		iconOnly: icon.value?.iconOnly ?? false,
		icon: icon.value?.icon ?? Icon.none,
		prefix: icon.value?.prefix ?? Icon.none,
		suffix: icon.value?.suffix ?? Icon.none,
		circle: icon.value?.circle ?? false,
	};
});

const iconOnly = computed<boolean>(() => {
	return iconProps.value.iconOnly;
});

const isCircle = computed<boolean>(() => {
	return iconProps.value.circle;
});

const hasLabel = computed<boolean>(() => {
	return label.value !== null && !StringUtils.isEmpty(label.value);
});

const showLabel = computed<boolean>(() => {
	return hasLabel.value && !iconOnly.value;
});

const hasPrefixIcon = computed<boolean>(() => {
	return iconProps.value.prefix !== Icon.none;
});

const hasSuffixIcon = computed<boolean>(() => {
	return iconProps.value.suffix !== Icon.none;
});

const styleClasses = computed<string>(() => {
	let classes =
		type.value === BoBadgeType.pill || (iconOnly.value && isCircle.value)
			? 'rounded-full'
			: 'rounded-md';

	if (isCircle.value) {
		switch (size.value) {
			case BoBadgeSize.large:
				classes = TailwindUtils.merge(classes, 'me-2 p-2 text-sm font-medium');
				break;
			case BoBadgeSize.default:
			default:
				classes = TailwindUtils.merge(classes, 'me-2 p-1 text-xs font-medium');
				break;
		}
	} else {
		switch (size.value) {
			case BoBadgeSize.large:
				classes = TailwindUtils.merge(
					classes,
					'me-2 px-2.5 py-0.5 text-sm font-medium',
				);
				break;
			case BoBadgeSize.default:
			default:
				classes = TailwindUtils.merge(
					classes,
					'me-2 px-2.5 py-0.5 text-xs font-medium',
				);
				break;
		}
	}

	if (type.value === BoBadgeType.outline) {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-600 text-gray-600 dark:border-gray-500 dark:text-gray-500',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'border border-green-600 text-green-600 dark:border-green-500 dark:text-green-500',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'border border-red-600 text-red-600 dark:border-red-500 dark:text-red-500',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'border border-yellow-600 text-yellow-600 dark:border-yellow-500 dark:text-yellow-500',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-800 text-gray-800 dark:border-gray-700 dark:text-gray-700',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'border border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-500',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'border border-teal-600 text-teal-600 dark:border-teal-500 dark:text-teal-500',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(
					classes,
					'border border-gray-100 text-gray-600',
				);
				break;
		}
	} else if (type.value === BoBadgeType.pill) {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'bg-blue-600 text-white dark:bg-blue-500 dark:text-white ',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-600 text-white dark:bg-gray-500 dark:text-white ',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'bg-green-600 text-white dark:bg-green-500 dark:text-white ',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'bg-red-600 text-white dark:bg-red-500 dark:text-white ',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'bg-yellow-600 text-white dark:bg-yellow-500 dark:text-white ',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-800 text-white dark:bg-gray-700 dark:text-white ',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'bg-purple-600 text-white dark:bg-purple-500 dark:text-white ',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'bg-teal-600 text-white dark:bg-teal-500 dark:text-white ',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(classes, 'bg-gray-100 text-gray-600 ');
				break;
		}
	} else {
		switch (variant.value) {
			case BoVariant.primary:
				classes = TailwindUtils.merge(
					classes,
					'bg-blue-600 text-white dark:bg-blue-500 dark:text-white',
				);
				break;
			case BoVariant.secondary:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-600 text-white dark:bg-gray-500 dark:text-white',
				);
				break;
			case BoVariant.success:
				classes = TailwindUtils.merge(
					classes,
					'bg-green-600 text-white dark:bg-green-500 dark:text-white',
				);
				break;
			case BoVariant.danger:
				classes = TailwindUtils.merge(
					classes,
					'bg-red-600 text-white dark:bg-red-500 dark:text-white',
				);
				break;
			case BoVariant.warning:
				classes = TailwindUtils.merge(
					classes,
					'bg-yellow-600 text-white dark:bg-yellow-500 dark:text-white',
				);
				break;
			case BoVariant.dark:
				classes = TailwindUtils.merge(
					classes,
					'bg-gray-800 text-white dark:bg-gray-700 dark:text-white',
				);
				break;
			case BoVariant.purple:
				classes = TailwindUtils.merge(
					classes,
					'bg-purple-600 text-white dark:bg-purple-500 dark:text-white',
				);
				break;
			case BoVariant.teal:
				classes = TailwindUtils.merge(
					classes,
					'bg-teal-600 text-white dark:bg-teal-500 dark:text-white',
				);
				break;
			case BoVariant.default:
			default:
				classes = TailwindUtils.merge(classes, 'bg-gray-100 text-gray-600');
				break;
		}
	}

	return classes;
});

const iconSize = computed<BoSize>(() => {
	return BoSize.default;
});
</script>
