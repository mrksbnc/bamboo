import { describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { BambooVue } from './plugin.js';

describe('BambooVue', () => {
	it('registers every public component with a Vue app', () => {
		const app = createApp({});
		BambooVue.install(app);

		expect(app.component('BoButton')).toBeDefined();
		expect(app.component('BoDropdownContent')).toBeDefined();
		expect(app.component('BoMenubarSubTrigger')).toBeDefined();
	});
});
