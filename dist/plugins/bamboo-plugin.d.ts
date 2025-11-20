import { Plugin } from 'vue';
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
declare const BambooPlugin: Plugin;
export default BambooPlugin;
export { BambooPlugin };
