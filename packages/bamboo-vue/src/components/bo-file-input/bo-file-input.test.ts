import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoFileInput from './bo-file-input.vue';

describe('BoFileInput', () => {
	it('renders a file input and emits selected files', async () => {
		const wrapper = mount(BoFileInput);
		const file = new File(['content'], 'document.txt', { type: 'text/plain' });
		const input = wrapper.find('input[type="file"]');
		Object.defineProperty(input.element, 'files', { value: [file] });
		await input.trigger('change');
		expect(wrapper.emitted('change')?.[0]).toEqual([[file]]);
		expect(wrapper.text()).toContain('document.txt');
		expect(wrapper.find('ul').classes()).toContain('bo-file-input__file-list');
		expect(wrapper.find('li').classes()).toContain('bo-file-input__file');
	});

	it('rejects files that do not match accept', async () => {
		const wrapper = mount(BoFileInput, { props: { accept: '.pdf' } });
		const input = wrapper.find('input[type="file"]');
		Object.defineProperty(input.element, 'files', {
			value: [new File(['x'], 'image.png', { type: 'image/png' })],
		});
		await input.trigger('change');
		expect(wrapper.emitted('error')).toBeTruthy();
	});

	it('supports multiple files, accessible help text, removal, and reset', async () => {
		const wrapper = mount(BoFileInput, {
			props: {
				id: 'attachments',
				label: 'Attachments',
				description: 'Add supporting files.',
				hint: 'Up to two files',
				multiple: true,
				required: true,
			},
		});
		const input = wrapper.find('input[type="file"]');
		expect(input.attributes('aria-describedby')).toBe('attachments-description attachments-help');
		expect(input.attributes('aria-required')).toBeUndefined();
		expect(wrapper.find('label').text()).toContain('*');

		const first = new File(['one'], 'one.txt', { type: 'text/plain' });
		const second = new File(['two'], 'two.txt', { type: 'text/plain' });
		Object.defineProperty(input.element, 'files', { value: [first, second] });
		await input.trigger('change');
		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[first, second]]);
		expect(wrapper.findAll('li')).toHaveLength(2);

		await wrapper.find('li button').trigger('click');
		expect(wrapper.findAll('li')).toHaveLength(1);
		(wrapper.vm as unknown as { reset: () => void }).reset();
		await wrapper.vm.$nextTick();
		expect(wrapper.find('ul').exists()).toBe(false);
		expect((input.element as HTMLInputElement).value).toBe('');
	});

	it('reports size errors and marks the input invalid', async () => {
		const wrapper = mount(BoFileInput, { props: { maxSize: 1, hint: 'Small files only' } });
		const input = wrapper.find('input[type="file"]');
		Object.defineProperty(input.element, 'files', {
			value: [new File(['too large'], 'large.txt', { type: 'text/plain' })],
		});
		await input.trigger('change');
		expect(input.attributes('aria-invalid')).toBe('true');
		expect(wrapper.text()).toContain('maximum size');
	});
});
