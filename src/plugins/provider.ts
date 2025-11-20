import type { App, Plugin } from 'vue';
// Import CSS to ensure it's bundled with the plugin
import '@/lib.css';
import BoBadge from '@/components/bo-badge/bo-badge.vue';
import BoButton from '@/components/bo-button/bo-button.vue';
import Icon from '@/components/bo-icon/bo-icon.vue';
import BoLink from '@/components/bo-link/bo-link.vue';
import BoLoadingRing from '@/components/bo-loading-ring/bo-loading-ring.vue';
import BoLoadingSpinner from '@/components/bo-loading-spinner/bo-loading-spinner.vue';
import BoText from '@/components/bo-text/bo-text.vue';
import BoTooltip from '@/components/bo-tooltip/bo-tooltip.vue';
import BoTooltipContainer from '@/components/bo-tooltip/bo-tooltip-container.vue';

/**
 * Bamboo Vue Plugin Provider
 *
 * Registers all Bamboo components globally.
 *
 * @example
 * ```ts
 * import { createApp } from 'vue'
 * import App from './App.vue'
 * import BambooProvider from '@mrksbnc/bamboo/config'
 *
 * const app = createApp(App)
 * app.use(BambooProvider)
 * app.mount('#app')
 * ```
 */
const BambooProvider: Plugin = {
	install(app: App) {
		// Register all components globally
		app.component('bo-badge', BoBadge);
		app.component('bo-button', BoButton);
		app.component('bo-icon', Icon);
		app.component('bo-link', BoLink);
		app.component('bo-loading-ring', BoLoadingRing);
		app.component('bo-loading-spinner', BoLoadingSpinner);
		app.component('bo-text', BoText);
		app.component('bo-tooltip', BoTooltip);
		app.component('bo-tooltip-container', BoTooltipContainer);
	},
};

export default BambooProvider;
