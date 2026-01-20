<template>
	<p
		v-if="value || $slots['default']"
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:lang="lang"
		:class="classValues"
		:style="styleValues"
		:aria-live="ariaLive"
		:aria-label="ariaLabel"
		:aria-labelledby="ariaLabelledBy"
		:aria-describedby="ariaDescribedBy"
	>
		<slot>
			{{ value }}
		</slot>
	</p>
</template>

<script lang="ts" setup>
	import {
		generateComponentId,
		generateDataTestId,
		getValidOrFallbackColorFromStr,
		mergeTwClasses,
		TEXT_MANIFEST,
		type BoTextProps,
	} from '@workspace/bamboo-core';
	import { computed, useSlots, type StyleValue } from 'vue';

	const props = withDefaults(defineProps<BoTextProps>(), {
		id: () => generateComponentId('text'),
		dataTestId: () => generateDataTestId('text'),
		cursor: () => TEXT_MANIFEST.defaults.cursor,
		variant: () => TEXT_MANIFEST.defaults.variant,
		fontSize: () => TEXT_MANIFEST.defaults.fontSize,
		lineClamp: () => TEXT_MANIFEST.defaults.lineClamp,
		textAlign: () => TEXT_MANIFEST.defaults.textAlign,
		fontWeight: () => TEXT_MANIFEST.defaults.fontWeight,
		whiteSpace: () => TEXT_MANIFEST.defaults.whiteSpace,
		fontFamily: () => TEXT_MANIFEST.defaults.fontFamily,
		textTransform: () => TEXT_MANIFEST.defaults.textTransform,
		role: () => TEXT_MANIFEST.defaults.role,
	});

	const slots = useSlots();

	const cursor = computed<string>(() => {
		if (props.cursor) {
			return props.cursor as string;
		}

		if (props.clickable) {
			return TEXT_MANIFEST.styles.cursor.clickable;
		}

		return TEXT_MANIFEST.styles.cursor.default;
	});

	const lineClamp = computed<string>(() => {
		if (!props.lineClamp || props.lineClamp === 'none') {
			return TEXT_MANIFEST.styles.lineClamp.none;
		}

		if (typeof props.lineClamp === 'number') {
			return `${TEXT_MANIFEST.styles.lineClamp.template}${props.lineClamp}`;
		}

		if (typeof props.lineClamp === 'string') {
			if (props.lineClamp.startsWith('--')) {
				return `line-clamp-(${props.lineClamp})`;
			}

			return `line-clamp-[${props.lineClamp}]`;
		}

		return TEXT_MANIFEST.styles.lineClamp.none;
	});

	const classValues = computed<string>(() => {
		return mergeTwClasses(
			cursor.value,
			lineClamp.value,
			TEXT_MANIFEST.styles.base,
			TEXT_MANIFEST.styles.variant[props.variant || 'default'],
			TEXT_MANIFEST.styles.textAlign[props.textAlign || 'left'],
			TEXT_MANIFEST.styles.fontSize[props.fontSize || 'default'],
			TEXT_MANIFEST.styles.whiteSpace[props.whiteSpace || 'normal'],
			TEXT_MANIFEST.styles.fontFamily[props.fontFamily || 'inherit'],
			TEXT_MANIFEST.styles.fontWeight[props.fontWeight || 'regular'],
			TEXT_MANIFEST.styles.textTransform[props.textTransform || 'none'],
		);
	});

	const styleValues = computed<StyleValue>(() => {
		if (props.customColor && typeof props.customColor === 'string') {
			return {
				color: getValidOrFallbackColorFromStr(props.customColor),
			};
		}

		return {};
	});
</script>
