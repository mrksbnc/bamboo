import type { App, ObjectPlugin } from 'vue';
import {
	BoAvatar,
	BoBadge,
	BoButton,
	BoCard,
	BoCheckbox,
	BoDivider,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
	BoModal,
	BoRadio,
	BoTable,
	BoText,
	BoTextarea,
} from './components/index.js';

const BambooComponents = {
	BoAvatar,
	BoBadge,
	BoButton,
	BoCard,
	BoCheckbox,
	BoDivider,
	BoIcon,
	BoInput,
	BoLoadingPulse,
	BoLoadingSpinner,
	BoModal,
	BoRadio,
	BoTable,
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
