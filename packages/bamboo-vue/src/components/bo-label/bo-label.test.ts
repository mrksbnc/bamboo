import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoLabel from './bo-label.vue';

describe('BoLabel', () => {
	it('associates with a control and marks required fields accessibly', () => {
		const w = mount(BoLabel, {
			props: { for: 'email', required: true },
			slots: { default: 'Email' },
		});
		expect(w.element.tagName).toBe('LABEL');
		expect(w.attributes('for')).toBe('email');
		expect(w.text()).toContain('Email');
		expect(w.find('[aria-hidden="true"]').text()).toBe('*');
	});
});
