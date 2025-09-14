<template>
	<i
		v-html="svg"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:style="iconStyle"
		:class="customCssClass"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:title="title"
	/>
</template>

<script lang="ts" setup>
import { IdentityService } from '@/services';
import { computed, CSSProperties, onMounted, ref, StyleValue, watchEffect } from 'vue';
import { BoIconProps, BoIconVariant, Icon, icons } from './bo-icon';

const props = withDefaults(defineProps<BoIconProps>(), {
	id: IdentityService.instance.getComponentId('bo-icon'),
	dataTestId: IdentityService.instance.getDataTestId('bo-icon'),
	size: 24,
	variant: () => BoIconVariant.default,
	decorative: true,
});

const svg = ref<string>('');
/**
 * This is a map of all the icons that are available in the library.
 *
 * - The key is the name of the icon and the value is the actual SVG.
 * - A promise which resolves to the SVG string
 */
const iconMap = Object.keys(icons).reduce(
	(acc, key) => {
		const splitted = key.split('/');
		const icon = splitted[splitted.length - 1].split('.')[0];
		acc[icon] = icons[key];
		return acc;
	},
	{} as Record<string, () => Promise<string>>,
);

const role = computed<string>(() => {
	return props.role ?? 'img';
});

const ariaHidden = computed<boolean | undefined>(() => {
	return props.decorative ? true : undefined;
});

const ariaLabel = computed<string>(() => {
	return props.title ?? props.icon;
});

const cursor = computed<CSSProperties>(() => {
	if (props.cursor) {
		return {
			cursor: props.cursor,
		};
	}

	return {
		cursor: 'default',
	};
});

const iconColor = computed<CSSProperties>(() => {
	if (props.customColor) {
		if (
			props.customColor.startsWith('var') ||
			props.customColor.startsWith('#') ||
			props.customColor.startsWith('oklch') ||
			props.customColor.startsWith('oklcha') ||
			props.customColor.startsWith('rgb') ||
			props.customColor.startsWith('rgba')
		) {
			return {
				color: props.customColor,
			};
		} else if (props.customColor.startsWith('--')) {
			/** CSS variable */
			return {
				color: `var(${props.customColor})`,
			};
		} else if (props.customColor?.length === 6) {
			/** Hex color without the leading # */
			return {
				color: `#${props.customColor}`,
			};
		} else {
			console.warn(`
				The custom color "${props.customColor}" is not a valid color definition.
				Valid color definitions are:
				- a variable name (e.g. --my-color)
				- a hex color (e.g. #ff0000)
				- an rgb color (e.g. rgb(255, 0, 0))
				- an rgba color (e.g. rgba(255, 0, 0, 0.5))

				The custom color will be ignored and currentColor will be used instead.
			`);

			return {
				color: 'currentcolor',
			};
		}
	}

	switch (props.variant) {
		case BoIconVariant.primary:
			return {
				color: 'var(--blue-600)',
			};
		case BoIconVariant.secondary:
			return {
				color: 'var(--neutral-600)',
			};
		case BoIconVariant.success:
			return {
				color: 'var(--green-600)',
			};
		case BoIconVariant.warning:
			return {
				color: 'var(--yellow-500)',
			};
		case BoIconVariant.danger:
			return {
				color: 'var(--red-600)',
			};
		case BoIconVariant.light:
			return {
				color: 'var(--neutral-50)',
			};
		case BoIconVariant.dark:
			return {
				color: 'var(--neutral-900)',
			};
		case BoIconVariant.default:
		default:
			return {
				color: 'currentcolor',
			};
	}
});

const iconSize = computed<CSSProperties>(() => {
	return {
		width: `${props.size}px`,
		height: `${props.size}px`,
	};
});

const iconStyle = computed<StyleValue>(() => {
	const style: StyleValue = {
		display: 'inline-block',
		verticalAlign: 'middle',
		...iconSize.value,
		...iconColor.value,
		...cursor.value,
	};

	return style;
});

async function load(icon: Icon): Promise<void> {
	try {
		await iconMap[icon]().then((val) => {
			svg.value = val;
		});
	} catch (e) {
		console.error(`Could not find icon of name ${icon}`);
	}
}

watchEffect(() => {
	load(props.icon);
});

onMounted(() => {
	console.log(iconStyle.value);
});
</script>
