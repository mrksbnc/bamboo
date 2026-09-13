import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoSlider } from './index.js';

describe('BoSlider', () => {
	it('updates its model from the native range input', async () => {
		const wrapper = mount(BoSlider, { props: { modelValue: 10 } });
		await wrapper.find('input').setValue(40);
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([40]);
	});
});
