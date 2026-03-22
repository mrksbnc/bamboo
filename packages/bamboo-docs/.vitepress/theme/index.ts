import type { Theme } from 'vitepress';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
// https://vitepress.dev/guide/custom-theme
import { onMounted, watch } from 'vue';
import Layout from './Layout.vue';
import './style.css';
import '@mrksbnc/bamboo-vue/lib.css';
import 'virtual:group-icons.css';

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
