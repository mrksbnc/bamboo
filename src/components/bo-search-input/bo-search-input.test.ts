import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoSearchInput from './bo-search-input.vue';
import { BoInputSize } from '@/components/bo-input/bo-input';

describe('BoSearchInput', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoSearchInput);
		expect(wrapper.exists()).toBe(true);
	});

	it('renders with custom placeholder', () => {
		const wrapper = mount(BoSearchInput, {
			props: {
				placeholder: 'Search products...',
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('placeholder')).toBe('Search products...');
	});

	it('emits search event on input change', async () => {
		const wrapper = mount(BoSearchInput);
		const input = wrapper.find('input');

		await input.setValue('test query');

		expect(wrapper.emitted('search')).toBeTruthy();
		expect(wrapper.emitted('search')?.[0]).toEqual(['test query']);
	});

	it('emits submit event on form submission', async () => {
		const wrapper = mount(BoSearchInput);
		const form = wrapper.find('form');
		const input = wrapper.find('input');

		await input.setValue('test query');
		await form.trigger('submit');

		expect(wrapper.emitted('submit')).toBeTruthy();
		expect(wrapper.emitted('submit')?.[0]).toEqual(['test query']);
	});

	it('renders with different sizes', () => {
		const wrapper = mount(BoSearchInput, {
			props: {
				size: BoInputSize.lg,
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('can be disabled', () => {
		const wrapper = mount(BoSearchInput, {
			props: {
				disabled: true,
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('disabled')).toBeDefined();
	});

	it('renders with action button text', () => {
		const wrapper = mount(BoSearchInput, {
			props: {
				actionText: 'Find',
			},
		});
		expect(wrapper.text()).toContain('Find');
	});

	it('supports v-model', async () => {
		const wrapper = mount(BoSearchInput, {
			props: {
				modelValue: 'initial value',
				'onUpdate:modelValue': (value: string) => wrapper.setProps({ modelValue: value }),
			},
		});

		const input = wrapper.find('input');
		expect((input.element as HTMLInputElement).value).toBe('initial value');

		await input.setValue('new value');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value']);
	});
});
