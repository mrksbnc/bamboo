import type { App, ObjectPlugin } from 'vue';
import {
	BoAvatar,
	BoBadge,
	BoButton,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
	BoText,
	BoTextarea,
} from './components/index.js';

const BambooComponents = {
	BoAvatar,
	BoBadge,
	BoButton,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
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
