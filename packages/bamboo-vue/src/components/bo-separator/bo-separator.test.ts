import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoSeparator from './bo-separator.vue';

describe('BoSeparator', () => {
	it('exposes orientation and supports decorative mode', () => {
		const w = mount(BoSeparator, { props: { orientation: 'vertical', decorative: false } });
		expect(w.attributes('role')).toBe('separator');
		expect(w.attributes('aria-orientation')).toBe('vertical');
		const d = mount(BoSeparator, { props: { decorative: true } });
		expect(d.attributes('role')).toBe('none');
		expect(d.attributes('aria-orientation')).toBeUndefined();
	});
});
