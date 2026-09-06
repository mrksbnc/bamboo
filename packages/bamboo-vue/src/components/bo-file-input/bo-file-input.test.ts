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
});
