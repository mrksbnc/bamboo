// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, watchEffect } from 'vue';
import type { Theme } from 'vitepress';

import { useData, inBrowser } from 'vitepress';
import Layout from './Layout.vue';
import DefaultTheme from 'vitepress/theme';

import './style.css';

export default {
	extends: DefaultTheme,
	Layout,

	enhanceApp({ app }) {
		if (typeof window !== 'undefined') {
			app.mixin({
				setup() {
					const { isDark, lang } = useData();

					const updateTheme = (): void => {
						const html = document.documentElement;
						if (isDark.value) {
							html.setAttribute('data-theme', 'dark');
						} else {
							html.setAttribute('data-theme', 'light');
						}
					};

					// Persist language preference
					watchEffect(() => {
						if (inBrowser) {
							document.cookie = `bamboo_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
						}
					});

					onMounted(() => {
						updateTheme();
						watch(isDark, updateTheme);
					});
				},
			});
		}
	},
} satisfies Theme;
