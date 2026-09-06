import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoDropzone from './bo-dropzone.vue';

describe('BoDropzone', () => {
	it('renders and accepts files through its input', async () => {
		const wrapper = mount(BoDropzone);
		const file = new File(['content'], 'document.txt', { type: 'text/plain' });
		const input = wrapper.find('input[type="file"]');
		Object.defineProperty(input.element, 'files', { value: [file] });
		await input.trigger('change');
		expect(wrapper.emitted('change')?.[0]).toEqual([[file]]);
		expect(wrapper.text()).toContain('document.txt');
	});
});
