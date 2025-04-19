<template>
	<div class="space-y-8">
		<div>
			<h3 class="mb-2 text-lg font-medium">Regular Variants</h3>
			<div class="flex flex-wrap gap-4">
				<div
					v-for="variant in variants"
					:key="variant"
					class="flex flex-col items-center"
				>
					<bo-avatar
						:data="{ label: variant.charAt(0).toUpperCase() }"
						:variant="variant"
					/>
					<span class="mt-2 text-sm">{{ variant }}</span>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-medium">Outline Variants</h3>
			<div class="flex flex-wrap gap-4">
				<div
					v-for="variant in variants"
					:key="variant"
					class="flex flex-col items-center"
				>
					<bo-avatar
						:data="{ label: variant.charAt(0).toUpperCase() }"
						:variant="variant"
						:shape="BoAvatarShape.outline_circle"
					/>
					<span class="mt-2 text-sm">{{ variant }}</span>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-medium">Custom Class Colors</h3>
			<div class="flex flex-wrap gap-4">
				<div class="flex flex-col items-center">
					<bo-avatar
						:data="{ label: 'C' }"
						class="bg-purple-500 dark:bg-purple-600"
					/>
					<span class="mt-2 text-sm">Purple</span>
				</div>
				<div class="flex flex-col items-center">
					<bo-avatar
						:data="{ label: 'C' }"
						class="bg-pink-400 dark:bg-pink-500"
						:shape="BoAvatarShape.outline_circle"
					/>
					<span class="mt-2 text-sm">Pink Outline</span>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-medium">Sizes & Shapes</h3>
			<div class="flex flex-wrap items-center gap-4">
				<div
					v-for="size in sizes"
					:key="size"
					class="flex flex-col items-center"
				>
					<bo-avatar
						:data="{ label: 'A' }"
						:size="size"
						:variant="BoAvatarVariant.primary"
					/>
					<span class="mt-2 text-sm">{{ size }}</span>
				</div>
			</div>
			<div class="mt-4 flex flex-wrap items-center gap-4">
				<div
					v-for="shape in shapes"
					:key="shape"
					class="flex flex-col items-center"
				>
					<bo-avatar
						:data="{ label: 'S' }"
						:shape="shape"
						:variant="BoAvatarVariant.danger"
					/>
					<span class="mt-2 text-sm">{{ shape }}</span>
				</div>
			</div>
		</div>

		<div>
			<h3 class="mb-2 text-lg font-medium">Image Avatars</h3>
			<div class="flex flex-wrap gap-4">
				<div class="flex flex-col items-center">
					<bo-avatar
						:data="{ src: '/avatar-sample.jpg', alt: 'User avatar' }"
						:type="BoAvatarType.image"
					/>
					<span class="mt-2 text-sm">Image</span>
				</div>
				<div class="flex flex-col items-center">
					<bo-avatar
						with-default-image
						:data="{}"
					/>
					<span class="mt-2 text-sm">Default Image</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoAvatar, BoAvatarShape, BoAvatarType, BoAvatarVariant } from '@/components/bo_avatar'
import { BoSize } from '@/shared'

const variants = [
	BoAvatarVariant.primary,
	BoAvatarVariant.secondary,
	BoAvatarVariant.danger,
	BoAvatarVariant.warning,
	BoAvatarVariant.success,
	BoAvatarVariant.dark,
]

const sizes = [BoSize.extra_small, BoSize.small, BoSize.default, BoSize.large, BoSize.extra_large]

const shapes = [
	BoAvatarShape.circle,
	BoAvatarShape.rounded,
	BoAvatarShape.flat,
	BoAvatarShape.outline_circle,
	BoAvatarShape.outline_rounded,
	BoAvatarShape.outline_flat,
]
</script>
