import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoText } from '../bo-text';
import BoLoadingRing from './bo-loading-ring.vue';

describe('BoLoadingRing', () => {
	it('renders intersecting SVG rings with loader text', () => {
		const wrapper = mount(BoLoadingRing, {
			props: { loaderText: 'Loading...' },
			global: { components: { BoText } },
		});

		expect(wrapper.find('svg').exists()).toBe(true);
		expect(wrapper.findAll('circle')).toHaveLength(2);
		expect(wrapper.text()).toContain('Loading...');
	});
});
