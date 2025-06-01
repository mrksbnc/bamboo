<template>
	<i
		v-html="svg"
		:id="id"
		:role="role"
		:style="iconStyles"
		:aria-label="ariaLabel"
		:aria-hidden="ariaHidden"
		:class="iconClasses"
		:data-testid="constructAttribute(id, `icon-${icon}`)"
	></i>
</template>

<script setup lang="ts">
import { useAttributes } from '@/composables/use-attributes';
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
const { constructAttribute } = useAttributes();

const ICON_STYLE = {
	layout: {
		base: /*tw*/ 'bo-icon block',
	},
	size: {
		[BoSize.extra_small]: /*tw*/ 'size-3',
		[BoSize.small]: /*tw*/ 'size-3.5',
		[BoSize.default]: /*tw*/ 'size-4',
		[BoSize.large]: /*tw*/ 'size-5',
		[BoSize.extra_large]: /*tw*/ 'size-6',
	},
	state: {
		disabled: /*tw*/ 'opacity-50 cursor-not-allowed',
	},
} as const;

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

const role = computed<string>(() => {
	return props.accessibility.decorative ? 'presentation' : 'img';
});

const iconStyles = computed<StyleValue>(() => {
	return {
		color: props.color,
	};
});

const iconClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		ICON_STYLE.layout.base,
		ICON_STYLE.size[props.size],
		props.disabled ? ICON_STYLE.state.disabled : '',
	);
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
