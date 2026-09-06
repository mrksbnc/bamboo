import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoMarker from './bo-marker.vue';

describe('BoMarker', () => {
	it('renders label and accessibility attributes', () => {
		const w = mount(BoMarker, {
			props: { ariaLabel: 'New', role: 'status' },
			slots: { default: 'New' },
		});
		expect(w.attributes('role')).toBe('status');
		expect(w.attributes('aria-label')).toBe('New');
	});
});
