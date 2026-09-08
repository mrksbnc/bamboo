import type { App, ObjectPlugin } from 'vue';
import * as BambooComponents from './components/index.js';
import { createDrawerState, DRAWER_STATE_KEY } from './composables/use-drawer.js';
import { createModalState, MODAL_STATE_KEY } from './composables/use-modal.js';
import { createToastState, TOAST_STATE_KEY } from './composables/use-toast.js';

export const BambooVue = {
	install(app: App): void {
		app.provide(TOAST_STATE_KEY, createToastState());
		app.provide(DRAWER_STATE_KEY, createDrawerState());
		app.provide(MODAL_STATE_KEY, createModalState());
		for (const [name, component] of Object.entries(BambooComponents)) {
			if (name.startsWith('Bo') && typeof component === 'object') {
				app.component(name, component);
			}
		}
	},
} as const satisfies ObjectPlugin;
