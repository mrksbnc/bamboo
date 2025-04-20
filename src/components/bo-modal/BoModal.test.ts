import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import BoModal from './BoModal.vue';

describe('BoModal', () => {
	beforeEach(() => {
		// Setup DOM environment for modal testing
		document.body.innerHTML = '';
		vi.spyOn(document.body.style, 'overflow', 'set');
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('renders correctly with default props', () => {
		const wrapper = mount(BoModal);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.attributes('role')).toBe('dialog');
		expect(wrapper.attributes('aria-modal')).toBe('true');

		// Should have the modal content
		const modalContainer = wrapper.find('.bg-white');
		expect(modalContainer.exists()).toBe(true);
	});

	it('displays title and description when provided', () => {
		const wrapper = mount(BoModal, {
			props: {
				title: 'Test Modal',
				description: 'This is a test modal description',
			},
		});

		expect(wrapper.text()).toContain('Test Modal');
		expect(wrapper.text()).toContain('This is a test modal description');
		expect(wrapper.attributes('aria-labelledby')).toBeDefined();
		expect(wrapper.attributes('aria-describedby')).toBeDefined();
	});

	it('renders close button when showClose is true', () => {
		const wrapper = mount(BoModal, {
			props: {
				showClose: true,
			},
		});

		const closeButton = wrapper.find('button[aria-label="Close modal"]');
		expect(closeButton.exists()).toBe(true);
	});

	it('hides close button when showClose is false', () => {
		const wrapper = mount(BoModal, {
			props: {
				showClose: false,
			},
		});

		const closeButton = wrapper.find('button[aria-label="Close modal"]');
		expect(closeButton.exists()).toBe(false);
	});

	it('emits close event when close button is clicked', async () => {
		const wrapper = mount(BoModal);

		const closeButton = wrapper.find('button[aria-label="Close modal"]');
		await closeButton.trigger('click');

		expect(wrapper.emitted('close')).toBeTruthy();
		expect(wrapper.emitted('close')?.length).toBe(1);
	});

	it('applies custom width when provided as px', () => {
		const wrapper = mount(BoModal, {
			props: {
				width: {
					px: 500,
				},
			},
		});

		const modalContent = wrapper.find('[role="document"]');
		expect(modalContent.attributes('style')).toContain('width: 500px');
	});

	it('applies custom width when provided as percent', () => {
		const wrapper = mount(BoModal, {
			props: {
				width: {
					percent: 80,
				},
			},
		});

		const modalContent = wrapper.find('[role="document"]');
		expect(modalContent.attributes('style')).toContain('width: 80%');
	});

	it('applies custom width when provided as tailwind class', () => {
		const wrapper = mount(BoModal, {
			props: {
				width: {
					tailwind: 'w-96',
				},
			},
		});

		const modalContent = wrapper.find('[role="document"]');
		expect(modalContent.classes()).toContain('w-96');
	});

	it('renders custom header slot content', () => {
		const wrapper = mount(BoModal, {
			slots: {
				header: '<div data-test="custom-header">Custom Header</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-header"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-header"]').text()).toBe('Custom Header');
	});

	it('renders custom description slot content', () => {
		const wrapper = mount(BoModal, {
			slots: {
				description: '<div data-test="custom-desc">Custom Description</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-desc"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-desc"]').text()).toBe('Custom Description');
	});

	it('renders custom default slot content', () => {
		const wrapper = mount(BoModal, {
			slots: {
				default: '<div data-test="custom-content">Custom Content</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-content"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-content"]').text()).toBe('Custom Content');
	});

	it('renders custom footer slot content', () => {
		const wrapper = mount(BoModal, {
			slots: {
				footer: '<div data-test="custom-footer">Custom Footer</div>',
			},
		});

		expect(wrapper.find('[data-test="custom-footer"]').exists()).toBe(true);
		expect(wrapper.find('[data-test="custom-footer"]').text()).toBe('Custom Footer');
	});

	it('sets document body overflow to hidden when mounted', () => {
		mount(BoModal);
		expect(document.body.style.overflow).toBe('hidden');
	});

	it('restores document body overflow when unmounted', () => {
		const wrapper = mount(BoModal);
		wrapper.unmount();
		expect(document.body.style.overflow).toBe('');
	});

	it('handles escape key press to close modal', async () => {
		const wrapper = mount(BoModal);

		// Simulate Escape key press
		const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' });
		document.dispatchEvent(escapeEvent);

		expect(wrapper.emitted('close')).toBeTruthy();
	});
});
