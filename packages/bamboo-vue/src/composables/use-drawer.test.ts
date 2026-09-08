import { describe, expect, it } from 'vitest';
import { useDrawer } from './use-drawer.js';

describe('useDrawer', () => {
	it('opens and dismisses shared drawer messages', () => {
		const drawer = useDrawer();
		drawer.clear();
		const id = drawer.show({ title: 'Details', side: 'left' });

		expect(drawer.drawers.value[0]).toMatchObject({
			id,
			props: { title: 'Details', side: 'left' },
		});
		drawer.dismiss(id);
		expect(drawer.drawers.value).toHaveLength(0);
	});
});
