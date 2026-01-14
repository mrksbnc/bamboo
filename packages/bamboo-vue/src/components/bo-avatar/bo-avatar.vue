<template>
	<div
		:id="id"
		:data-testid="dataTestId"
		:class="classValues"
		:style="styleValues"
		:role="role"
		:aria-label="ariaLabel"
	>
		<!-- Default avatar image -->
		<span v-if="showDefaultAvatar" :class="defaultAvatarClassValues">
			<img alt="avatar" :src="defaultAvatarSrc" class="h-full w-full object-cover" />
		</span>

		<!-- Initials -->
		<span v-else-if="type === 'initials' && label" :class="initialsContainerClassValues">
			<bo-text
				:value="label"
				:font-size="labelFontSize"
				:clickable="clickable"
				:class="textColorClass"
				font-weight="medium"
				:custom-color="color?.colorHex"
			/>
		</span>

		<!-- Image -->
		<span v-else-if="type === 'image' && data.src" :class="imageContainerClassValues">
			<img
				:src="data.src"
				:alt="data.alt ?? 'avatar'"
				class="h-full w-full object-cover"
				@error="handleImageError"
			/>
		</span>

		<!-- Status indicator -->
		<span
			v-if="indicator && indicator.status !== 'none'"
			:class="indicatorClassValues"
			class="status-indicator"
		></span>
	</div>
</template>

<script lang="ts" setup>
	import { IdentityService, useBoAvatar, type BoAvatarProps } from '@bamboo/core';
	import { ref } from 'vue';
	import defaultAvatarImage from '../../assets/avatar.png';
	import { BoText } from '../bo-text';

	const props = withDefaults(defineProps<BoAvatarProps>(), {
		id: () => IdentityService.instance.getComponentId('bo-avatar'),
		dataTestId: () => IdentityService.instance.getDataTestId('bo-avatar'),
		withDefaultImage: false,
		size: 'default',
		type: 'initials',
		shape: 'rounded',
		variant: 'primary',
		data: () => ({
			src: undefined,
			label: undefined,
			alt: undefined,
		}),
	});

	const imgError = ref(false);
	const defaultAvatarSrc = defaultAvatarImage;

	const {
		indicatorClassValues,
		labelFontSize,
		label,
		showDefaultAvatar,
		textColorClass,
		defaultAvatarClassValues,
		initialsContainerClassValues,
		imageContainerClassValues,
		classValues,
		styleValues,
	} = useBoAvatar(props, { imgError: imgError.value });

	function handleImageError(e: Event) {
		imgError.value = true;
		if (props.withDefaultImage) {
			const imgElement = e.target as HTMLImageElement;
			imgElement.src = defaultAvatarSrc;
		}
	}
</script>
