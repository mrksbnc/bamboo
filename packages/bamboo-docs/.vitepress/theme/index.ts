// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

import './style.css';

import {
	BoButton,
	BoIcon,
	BoText,
	BoInput,
	BoTextarea,
	BoAvatar,
	BoBadge,
	BoLoadingSpinner,
	BoLoadingPulse,
} from '@mrksbnc/bamboo-vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},

	enhanceApp({ app }) {
		// Register Bamboo Vue components globally
		app.component('BoButton', BoButton);
		app.component('BoIcon', BoIcon);
		app.component('BoText', BoText);
		app.component('BoInput', BoInput);
		app.component('BoTextarea', BoTextarea);
		app.component('BoAvatar', BoAvatar);
		app.component('BoBadge', BoBadge);
		app.component('BoLoadingSpinner', BoLoadingSpinner);
		app.component('BoLoadingPulse', BoLoadingPulse);

		if (typeof window !== 'undefined') {
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
