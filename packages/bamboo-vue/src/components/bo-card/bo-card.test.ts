import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCard from './bo-card.vue';

describe('BoCard', () => {
	it('renders title, description and slots with semantics', () => {
		const w = mount(BoCard, {
			props: { title: 'Title', description: 'Description', role: 'article', ariaLabel: 'Card' },
			slots: { default: 'Body', footer: 'Footer' },
		});
		expect(w.attributes('role')).toBe('article');
		expect(w.attributes('aria-label')).toBe('Card');
		expect(w.text()).toContain('Title');
		expect(w.text()).toContain('Description');
		expect(w.text()).toContain('Body');
		expect(w.text()).toContain('Footer');
	});
});
