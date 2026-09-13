import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoVisuallyHidden from './bo-visually-hidden.vue';

describe('BoVisuallyHidden', () => {
	it('keeps accessible text in the DOM', () => {
		const w = mount(BoVisuallyHidden, {
			props: { as: 'span' },
			slots: { default: 'Screen reader text' },
		});
		expect(w.element.tagName).toBe('SPAN');
		expect(w.text()).toBe('Screen reader text');
	});
});
