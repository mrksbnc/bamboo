import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAspectRatio from './bo-aspect-ratio.vue';

describe('BoAspectRatio', () => {
	it('applies ratio and renders slot', () => {
		const w = mount(BoAspectRatio, {
			props: { ratio: 2, role: 'presentation' },
			slots: { default: 'Media' },
		});
		expect(w.attributes('role')).toBe('presentation');
		expect(w.attributes('style')).toContain('padding-bottom: 50%');
		expect(w.text()).toContain('Media');
	});
});
