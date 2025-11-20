import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import BoDropzone from './bo-dropzone.vue';
import { BoDropzoneSize } from './bo-dropzone';

describe('bo-dropzone', () => {
	it('should render dropzone', () => {
		const wrapper = mount(BoDropzone);
		expect(wrapper.find('.bo-dropzone').exists()).toBe(true);
	});

	it('should render label when provided', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				label: 'Upload files',
			},
		});
		expect(wrapper.text()).toContain('Upload files');
	});

	it('should render default dropzone text', () => {
		const wrapper = mount(BoDropzone);
		expect(wrapper.text()).toContain('Click to upload or drag and drop');
	});

	it('should render custom dropzone text', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				dropzoneText: 'Custom upload text',
			},
		});
		expect(wrapper.text()).toContain('Custom upload text');
	});

	it('should render hint text when provided', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				hintText: 'Max 10MB',
			},
		});
		expect(wrapper.text()).toContain('Max 10MB');
	});

	it('should trigger file input on click', async () => {
		const wrapper = mount(BoDropzone);
		const input = wrapper.find('input[type="file"]');
		const clickSpy = vi.spyOn(input.element as HTMLInputElement, 'click');

		await wrapper.find('.bo-dropzone').trigger('click');
		expect(clickSpy).toHaveBeenCalled();
	});

	it('should emit change event with files', async () => {
		const wrapper = mount(BoDropzone);
		const input = wrapper.find('input[type="file"]');

		const file = new File(['content'], 'test.txt', { type: 'text/plain' });
		Object.defineProperty(input.element, 'files', {
			value: [file],
			writable: false,
		});

		await input.trigger('change');

		expect(wrapper.emitted('change')).toBeTruthy();
		expect(wrapper.emitted('change')?.[0]).toEqual([[file]]);
	});

	it('should handle drag over', async () => {
		const wrapper = mount(BoDropzone);
		const dropzone = wrapper.find('.bo-dropzone');

		await dropzone.trigger('dragover');
		expect(wrapper.find('.bo-dropzone--dragging').exists()).toBe(true);
	});

	it('should handle drag leave', async () => {
		const wrapper = mount(BoDropzone);
		const dropzone = wrapper.find('.bo-dropzone');

		await dropzone.trigger('dragover');
		expect(wrapper.find('.bo-dropzone--dragging').exists()).toBe(true);

		await dropzone.trigger('dragleave');
		expect(wrapper.find('.bo-dropzone--dragging').exists()).toBe(false);
	});

	it('should handle file drop', async () => {
		const wrapper = mount(BoDropzone);
		const dropzone = wrapper.find('.bo-dropzone');

		const file = new File(['content'], 'test.txt', { type: 'text/plain' });
		const dataTransfer = {
			files: [file],
		};

		await dropzone.trigger('drop', { dataTransfer });

		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('should apply disabled state', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				disabled: true,
			},
		});
		expect(wrapper.find('.bo-dropzone--disabled').exists()).toBe(true);
		expect(wrapper.find('input').attributes('disabled')).toBeDefined();
	});

	it('should apply error state', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				hasError: true,
				errorText: 'Error message',
			},
		});
		expect(wrapper.find('.bo-dropzone--error').exists()).toBe(true);
		expect(wrapper.text()).toContain('Error message');
	});

	it('should display helper text', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				helperText: 'Helper message',
			},
		});
		expect(wrapper.text()).toContain('Helper message');
	});

	it('should apply size classes', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				size: BoDropzoneSize.lg,
			},
		});
		expect(wrapper.find('.bo-dropzone--size-lg').exists()).toBe(true);
	});

	it('should accept multiple files when multiple is true', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				multiple: true,
			},
		});
		expect(wrapper.find('input').attributes('multiple')).toBeDefined();
	});

	it('should apply accept attribute', () => {
		const wrapper = mount(BoDropzone, {
			props: {
				accept: 'image/*',
			},
		});
		expect(wrapper.find('input').attributes('accept')).toBe('image/*');
	});

	it('should emit error when max files exceeded', async () => {
		const wrapper = mount(BoDropzone, {
			props: {
				maxFiles: 2,
			},
		});
		const input = wrapper.find('input[type="file"]');

		const files = [
			new File(['1'], 'test1.txt'),
			new File(['2'], 'test2.txt'),
			new File(['3'], 'test3.txt'),
		];

		Object.defineProperty(input.element, 'files', {
			value: files,
			writable: false,
		});

		await input.trigger('change');

		expect(wrapper.emitted('error')).toBeTruthy();
		expect(wrapper.emitted('error')?.[0][0]).toContain('Maximum 2 files');
	});

	it('should emit error when file size exceeds max', async () => {
		const wrapper = mount(BoDropzone, {
			props: {
				maxSize: 1024, // 1KB
			},
		});
		const input = wrapper.find('input[type="file"]');

		const largeFile = new File(['x'.repeat(2000)], 'large.txt');
		Object.defineProperty(input.element, 'files', {
			value: [largeFile],
			writable: false,
		});

		await input.trigger('change');

		expect(wrapper.emitted('error')).toBeTruthy();
		expect(wrapper.emitted('error')?.[0][0]).toContain('exceeds maximum');
	});

	it('should emit error for invalid file type', async () => {
		const wrapper = mount(BoDropzone, {
			props: {
				accept: 'image/*',
			},
		});
		const input = wrapper.find('input[type="file"]');

		const file = new File(['content'], 'test.txt', { type: 'text/plain' });
		Object.defineProperty(input.element, 'files', {
			value: [file],
			writable: false,
		});

		await input.trigger('change');

		expect(wrapper.emitted('error')).toBeTruthy();
		expect(wrapper.emitted('error')?.[0][0]).toContain('Invalid file type');
	});

	it('should display selected files', async () => {
		const wrapper = mount(BoDropzone);
		const input = wrapper.find('input[type="file"]');

		const file = new File(['content'], 'test.txt');
		Object.defineProperty(input.element, 'files', {
			value: [file],
			writable: false,
		});

		await input.trigger('change');
		await wrapper.vm.$nextTick();

		expect(wrapper.text()).toContain('test.txt');
	});

	it('should remove file when remove button clicked', async () => {
		const wrapper = mount(BoDropzone);
		const input = wrapper.find('input[type="file"]');

		const file = new File(['content'], 'test.txt');
		Object.defineProperty(input.element, 'files', {
			value: [file],
			writable: false,
		});

		await input.trigger('change');
		await wrapper.vm.$nextTick();

		const removeButton = wrapper.find('.bo-dropzone__file-remove');
		await removeButton.trigger('click');

		expect(wrapper.emitted('change')?.[1]).toEqual([[]]);
	});

	it('should have default id', () => {
		const wrapper = mount(BoDropzone);
		expect(wrapper.find('input').attributes('id')).toBeDefined();
	});

	it('should have default data-testid', () => {
		const wrapper = mount(BoDropzone);
		expect(wrapper.attributes('data-testid')).toBeDefined();
	});

	it('should expose clear method', () => {
		const wrapper = mount(BoDropzone);
		expect(wrapper.vm.clear).toBeDefined();
	});
});
