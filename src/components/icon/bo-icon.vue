<template>
	<i
		v-html="svg"
		:id="id"
		:role="role"
		:style="style"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:class="tailwindCssClasses"
		:data-testid="`bo-icon-${icon}`"
	></i>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed, ref, useAttrs, watchEffect, type StyleValue } from 'vue';
import { Icon, icons, type BoIconProps } from './bo-icon.js';

const props = withDefaults(defineProps<BoIconProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	size: () => BoSize.default,
	color: () => 'currentColor',
	accessibility: () => ({
		title: 'icon',
		decorative: true,
	}),
});

const attrs = useAttrs();

const defaultClasses = /*tw*/ 'bo-icon block';

const svg = ref<string>('');

/**
 * @description This is a map of all the icons that are available in the library.
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

const sizeClasses = {
	[BoSize.extra_small]: /*tw*/ 'size-3',
	[BoSize.small]: /*tw*/ 'size-3.5',
	[BoSize.default]: /*tw*/ 'size-4',
	[BoSize.large]: /*tw*/ 'size-5',
	[BoSize.extra_large]: /*tw*/ 'size-6',
};

const role = computed<string>(() => {
	return props.accessibility.decorative ? 'presentation' : 'img';
});

const style = computed<StyleValue>(() => {
	return {
		color: props.color,
	};
});

const tailwindCssSizeClasses = computed<string>(() => {
	return sizeClasses[props.size];
});

const tailwindCssClasses = computed<string>(() => {
	return TailwindService.instance.merge(defaultClasses, tailwindCssSizeClasses.value);
});

const ariaLabel = computed<string | undefined>(() => {
	if (attrs['aria-hidden'] === 'true' || attrs['aria-hidden'] === true) {
		return undefined;
	}
	return props.accessibility.decorative ? undefined : props.accessibility.title;
});

const ariaHidden = computed<boolean | undefined>(() => {
	if (attrs['aria-hidden']) {
		return Boolean(attrs['aria-hidden']);
	}

	return props.accessibility.decorative ? true : undefined;
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
</script>
