/** Force vite to bundle the base css with the component styles */
import './lib.css';

/** Component exports */

export { default as BoAvatar } from './components/bo-avatar/bo-avatar.vue';
export { default as BoBadge } from './components/bo-badge/bo-badge.vue';
export { default as BoButton } from './components/bo-button/bo-button.vue';
export { default as BoIcon } from './components/bo-icon/bo-icon.vue';
export { default as BoInput } from './components/bo-input/bo-input.vue';
export { default as BoLoadingPulse } from './components/bo-loading-pulse/bo-loading-pulse.vue';
export { default as BoLoadingSpinner } from './components/bo-loading-spinner/bo-loading-spinner.vue';
export { default as BoText } from './components/bo-text/bo-text.vue';

/** Plugin exports */

export { BambooVue } from './plugin.js';
