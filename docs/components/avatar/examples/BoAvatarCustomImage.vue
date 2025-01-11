<template>
	<bo-avatar
		:type="BoAvatarType.image"
		:data="{
			src: AvatarImg,
			alt: 'avatar',
		}"
	/>
</template>

<script setup lang="ts">
import { BoAvatar, BoAvatarType } from '@/components/bo_avatar'

import AvatarImg from './avatar.png?url'
</script>
