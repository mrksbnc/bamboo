import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAspectRatio from './bo-aspect-ratio.vue';

describe('BoAspectRatio', () => {
	it('applies ratio and renders slot', () => {
		const wrapper = mount(BoAspectRatio, {
			props: { ratio: 2, role: 'presentation' },
			slots: { default: 'Media' },
		});

		expect(wrapper.attributes('role')).toBe('presentation');
		expect(wrapper.attributes('style')).toContain('padding-bottom: 50%');
		expect(wrapper.text()).toContain('Media');
	});
});
