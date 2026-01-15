// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

import { BoText, BoButton } from '@mrksbnc/bamboo-vue';

import '@mrksbnc/bamboo-vue/lib.css';
import './style.css';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},

	enhanceApp({ app }) {
		if (typeof window !== 'undefined') {
			app.component('BoText', BoText);
			app.component('BoButton', BoButton);
			app.mixin({
				setup() {
					const { isDark } = useData();

					const updateTheme = (): void => {
						const html = document.documentElement;
						if (isDark.value) {
							html.setAttribute('data-theme', 'dark');
						} else {
							html.setAttribute('data-theme', 'light');
						}
					};

					onMounted(() => {
						updateTheme();
						watch(isDark, updateTheme);
					});
				},
			});
		}
	},
} satisfies Theme;
