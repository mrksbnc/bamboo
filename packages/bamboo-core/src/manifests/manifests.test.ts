import { describe, expect, it } from 'vitest';
import * as manifests from './index.js';

const runtimeManifests = Object.entries(manifests).filter(([name, value]) => {
	return name.endsWith('_MANIFEST') && typeof value === 'object' && value !== null;
});

describe('component manifests', () => {
	it.each(runtimeManifests)(
		'%s exposes stable metadata, styles, and defaults',
		(_name, manifest) => {
			expect(manifest).toMatchObject({
				meta: {
					name: expect.any(String),
					version: expect.any(String),
				},
				styles: expect.any(Object),
				defaults: expect.any(Object),
			});
		},
	);

	it('exports the newly composed interaction manifests', () => {
		expect(manifests.BUTTON_GROUP_MANIFEST.meta.name).toBe('ButtonGroup');
		expect(manifests.DRAWER_MANIFEST.meta.name).toBe('Drawer');
		expect(manifests.MENUBAR_MANIFEST.meta.name).toBe('Menubar');
		expect(manifests.POPOVER_MANIFEST.meta.name).toBe('Popover');
		expect(manifests.SCROLL_AREA_MANIFEST.meta.name).toBe('ScrollArea');
	});
});
