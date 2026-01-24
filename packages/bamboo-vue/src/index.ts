/** Force vite to bundle the base css with the component styles */
import './lib.css';

/** Component exports */

export { default as BoAlert } from './components/bo-alert/bo-alert.vue';
export { default as BoAvatar } from './components/bo-avatar/bo-avatar.vue';
export { default as BoBadge } from './components/bo-badge/bo-badge.vue';
export { default as BoButton } from './components/bo-button/bo-button.vue';
export { BoButtonGroup } from './components/bo-button-group/index.js';
export { default as BoCard } from './components/bo-card/bo-card.vue';
export { BoCarousel, BoCarouselItem } from './components/bo-carousel/index.js';
export { default as BoCheckbox } from './components/bo-checkbox/bo-checkbox.vue';
export { BoCheckboxGroup } from './components/bo-checkbox-group/index.js';
export { default as BoDivider } from './components/bo-divider/bo-divider.vue';
export { default as BoIcon } from './components/bo-icon/bo-icon.vue';
export { default as BoInput } from './components/bo-input/bo-input.vue';
export { default as BoLoadingPulse } from './components/bo-loading-pulse/bo-loading-pulse.vue';
export { default as BoLoadingSpinner } from './components/bo-loading-spinner/bo-loading-spinner.vue';
export { default as BoModal } from './components/bo-modal/bo-modal.vue';
export { BoNavbar } from './components/bo-navbar/index.js';
export { BoProgress } from './components/bo-progress/index.js';
export { default as BoRadio } from './components/bo-radio/bo-radio.vue';
export { BoRadioGroup } from './components/bo-radio-group/index.js';
export { default as BoTable } from './components/bo-table/bo-table.vue';
export { default as BoText } from './components/bo-text/bo-text.vue';
export { default as BoTextarea } from './components/bo-textarea/bo-textarea.vue';
export { BoTimeline, BoTimelineItem } from './components/bo-timeline/index.js';
export { BoToggle } from './components/bo-toggle/index.js';
export { BoTooltip } from './components/bo-tooltip/index.js';

/** Plugin exports */

export { BambooVue } from './plugin.js';
