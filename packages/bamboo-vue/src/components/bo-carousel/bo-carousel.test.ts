import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoCarousel } from './index.js';

describe('BoCarousel', () => {
	it('moves between named slides', async () => {
		const wrapper = mount(BoCarousel, {
			slots: {
				'item-0': '<div>One</div>',
				'item-1': '<div>Two</div>',
			},
		});
		expect(wrapper.findAll('.bo-carousel__indicator')).toHaveLength(2);
		await wrapper.find('button[aria-label="Next slide"]').trigger('click');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([1]);
	});
});
