import type { App, ObjectPlugin } from 'vue';
import {
	BoAccordion,
	BoAlert,
	BoAlertContainer,
	BoAvatar,
	BoBadge,
	BoButton,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
	BoModal,
	BoText,
	BoTextarea,
} from './components/index.js';

const BambooComponents = {
	BoAccordion,
	BoAlert,
	BoAlertContainer,
	BoAvatar,
	BoBadge,
	BoButton,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
	BoModal,
	BoText,
	BoTextarea,
};

export const BambooVue = {
	install(app: App): void {
		for (const [name, component] of Object.entries(BambooComponents)) {
			if (name.startsWith('Bo') && typeof component === 'object') {
				app.component(name, component);
			}
		}
	},
} as const satisfies ObjectPlugin;
