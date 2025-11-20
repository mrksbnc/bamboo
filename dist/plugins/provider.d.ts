import { Plugin } from 'vue';
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
declare const BambooProvider: Plugin;
export default BambooProvider;
