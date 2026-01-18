<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel"
		:class="containerClassValues"
		:style="styleValues"
	>
		<span v-if="renderWithAbbreviatedLabel">
			<bo-text
				:value="label"
				variant="inherit"
				font-weight="semibold"
				:clickable="clickable"
				:font-size="labelFontSize"
			/>
		</span>

		<span v-else-if="renderWithImage">
			<img :src="src" :alt="alt" class="h-full w-full object-cover" @error="onImageError" />
		</span>

		<span v-else>
			<img alt="avatar" src="./avatar.png" class="h-full w-full object-cover" />
		</span>

		<span v-if="indicatorKind !== 'none'" :class="indicatorClassValues"></span>
	</div>
</template>

<script lang="ts" setup>
	import {
		AVATAR_MANIFEST,
		generateComponentId,
		generateDataTestId,
		useBoAvatar,
		type BoAvatarProps,
	} from '@workspace/bamboo-core';
	import { ref } from 'vue';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoAvatarProps>(), {
		id: () => generateComponentId('avatar'),
		dataTestId: () => generateDataTestId('avatar'),
		alt: () => AVATAR_MANIFEST.defaults.alt,
		size: () => AVATAR_MANIFEST.defaults.size,
		kind: () => AVATAR_MANIFEST.defaults.kind,
		role: () => AVATAR_MANIFEST.defaults.role,
		variant: () => AVATAR_MANIFEST.defaults.variant,
		indicatorKind: () => AVATAR_MANIFEST.defaults.indicatorKind,
		indicatorPosition: () => AVATAR_MANIFEST.defaults.indicatorPosition,
	});

	const imgError = ref<boolean>(false);

	const {
		label,
		styleValues,
		labelFontSize,
		renderWithImage,
		indicatorClassValues,
		containerClassValues,
		renderWithAbbreviatedLabel,
	} = useBoAvatar({
		props,
		imgError,
	});

	function onImageError() {
		imgError.value = true;
	}
</script>
