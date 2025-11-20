/** Import CSS to ensure it's bundled with the plugin */
import '@/lib.css';

import type { App, Plugin } from 'vue';
import BoBadge from '@/components/bo-badge/bo-badge.vue';
import BoButton from '@/components/bo-button/bo-button.vue';
import Icon from '@/components/bo-icon/bo-icon.vue';
import BoLink from '@/components/bo-link/bo-link.vue';
import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
import BoText from '@/components/bo-text/bo-text.vue';
import BoTooltip from '@/components/bo-tooltip/bo-tooltip.vue';
import BoTooltipContainer from '@/components/bo-tooltip/bo-tooltip-container.vue';
import { useTheme } from '@/composables';

/**
 * Bamboo Vue Plugin
 *
 * Registers all Bamboo components globally and initializes the default theme.
 *
 * @example
 * ```ts
 * import { createApp } from 'vue'
 * import App from './App.vue'
 * import Bamboo from '@mrksbnc/bamboo/config'
 *
 * const app = createApp(App)
 * app.use(Bamboo)
 * app.mount('#app')
 * ```
 *
 * @example
 * ```ts
 * // Named import
 * import { Bamboo } from '@mrksbnc/bamboo/config'
 * app.use(Bamboo)
 * ```
 */
const BambooPlugin: Plugin = {
	install(app: App) {
		app.component('BoBadge', BoBadge);
		app.component('BoButton', BoButton);
		app.component('BoIcon', Icon);
		app.component('BoLink', BoLink);
		app.component('BoLoadingRing', BoLoadingRing);
		app.component('BoLoadingSpinner', BoLoadingSpinner);
		app.component('BoText', BoText);
		app.component('BoTooltip', BoTooltip);
		app.component('BoTooltipContainer', BoTooltipContainer);

		// Initialize theme on plugin install
		const { initTheme } = useTheme();
		initTheme();
	},
};

export default BambooPlugin;
export { BambooPlugin };
