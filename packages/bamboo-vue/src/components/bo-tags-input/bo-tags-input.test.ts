import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoTagsInput from './bo-tags-input.vue';

describe('BoTagsInput', () => {
	it('adds and removes tags through the keyboard and controls', async () => {
		const wrapper = mount(BoTagsInput, { props: { modelValue: [] } });
		const input = wrapper.find('input');
		await input.setValue('vue');
		await input.trigger('keydown', { key: 'Enter' });
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([['vue']]);
		expect(wrapper.find('.bo-tags-input__tag').text()).toContain('vue');
		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[]]);
	});

	it('does not add duplicates by default and respects maxTags', async () => {
		const wrapper = mount(BoTagsInput, { props: { modelValue: ['vue'], maxTags: 1 } });
		const input = wrapper.find('input');
		await input.setValue('vue');
		await input.trigger('keydown', { key: 'Enter' });
		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
		await input.setValue('react');
		await input.trigger('keydown', { key: 'Enter' });
		expect(wrapper.emitted('update:modelValue')).toBeUndefined();
	});
});
