// https://vitepress.dev/guide/custom-theme
import { onMounted, watch } from 'vue';
import type { Theme } from 'vitepress';
import { useData } from 'vitepress';
import Layout from './Layout.vue';
import DefaultTheme from 'vitepress/theme';
import 'virtual:group-icons.css';
import '@mrksbnc/bamboo-vue/lib.css';

import './style.css';

export default {
	extends: DefaultTheme,
	Layout,

	enhanceApp({ app }) {
		if (typeof window !== 'undefined') {
			app.mixin({
				setup() {
					const { isDark } = useData();

					function updateTheme(): void {
						const html = document.documentElement;
						if (isDark.value) {
							html.setAttribute('data-theme', 'dark');
						} else {
							html.setAttribute('data-theme', 'light');
						}
					}

					onMounted(() => {
						updateTheme();
						watch(isDark, updateTheme);
					});
				},
			});
		}
	},
} satisfies Theme;
