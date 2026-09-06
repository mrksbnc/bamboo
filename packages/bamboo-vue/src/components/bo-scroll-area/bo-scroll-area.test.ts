import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoScrollArea from './bo-scroll-area.vue';

describe('BoScrollArea', () => {
	it('renders content and max height', () => {
		const wrapper = mount(BoScrollArea, {
			props: { maxHeight: 300 },
			slots: { default: 'Scroll content' },
		});
		expect(wrapper.text()).toContain('Scroll content');
		expect(wrapper.attributes('style')).toContain('max-height: 300px');
		expect(wrapper.find('[data-slot="scroll-area-viewport"]').attributes('tabindex')).toBe('0');
	});
});
