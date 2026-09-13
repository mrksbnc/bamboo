import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoEmpty from './bo-empty.vue';

describe('BoEmpty', () => {
	it('renders empty state content and action slot', () => {
		const w = mount(BoEmpty, {
			props: { title: 'Nothing here', description: 'Try again', role: 'status' },
			slots: { action: '<button>Retry</button>' },
		});
		expect(w.attributes('role')).toBe('status');
		expect(w.text()).toContain('Nothing here');
		expect(w.text()).toContain('Try again');
		expect(w.find('button').exists()).toBe(true);
	});
});
