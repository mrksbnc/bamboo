import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoSkeleton from './bo-skeleton.vue';

describe('BoSkeleton', () => {
	it('announces loading state', () => {
		const w = mount(BoSkeleton, { props: { ariaLabel: 'Loading profile' } });
		expect(w.attributes('aria-label')).toBe('Loading profile');
		expect(w.attributes('aria-busy')).toBe('true');
		expect(w.attributes('role')).toBe('status');
	});
});
