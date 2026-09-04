<script setup lang="ts">
import { inBrowser, useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { watchEffect } from 'vue';
import LandingHome from './LandingHome.vue';

const { lang, frontmatter } = useData();

watchEffect(() => {
	if (inBrowser) {
		document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2035 00:00:00 UTC; path=/`;
	}
});
</script>

<template>
	<LandingHome v-if="frontmatter.layout === 'home'" />
	<DefaultTheme.Layout v-else />
</template>
