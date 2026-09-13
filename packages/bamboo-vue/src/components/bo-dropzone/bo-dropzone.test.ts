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

	it('tracks drag state, accepts drops, and removes files', async () => {
		const wrapper = mount(BoDropzone, { props: { label: 'Upload' } });
		const root = wrapper.find('[data-testid]');
		await root.trigger('dragenter');
		expect(root.classes()).toContain('bo-dropzone--dragging');
		await root.trigger('dragleave');
		expect(root.classes()).not.toContain('bo-dropzone--dragging');

		const file = new File(['content'], 'dropped.txt', { type: 'text/plain' });
		await root.trigger('drop', { dataTransfer: { files: [file] } });
		expect(wrapper.emitted('change')?.at(-1)).toEqual([[file]]);
		expect(wrapper.text()).toContain('dropped.txt');
		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('change')?.at(-1)).toEqual([[]]);
	});

	it('keeps invalid drops and emits a useful error', async () => {
		const wrapper = mount(BoDropzone, { props: { accept: 'image/*' } });
		const file = new File(['content'], 'document.txt', { type: 'text/plain' });
		await wrapper.find('[data-testid]').trigger('drop', { dataTransfer: { files: [file] } });
		expect(wrapper.emitted('error')?.[0]).toEqual(['One or more files are not an accepted type.']);
		expect(wrapper.text()).toContain('not an accepted type');
	});
});
