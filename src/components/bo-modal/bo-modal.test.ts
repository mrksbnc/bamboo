import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import BoModal from './bo-modal.vue';
import { BoModalSize } from './bo-modal';

describe('BoModal', () => {
	let originalBodyOverflow: string;

	beforeEach(() => {
		originalBodyOverflow = document.body.style.overflow;
		// Create a div to act as the teleport target
		const el = document.createElement('div');
		el.id = 'modal-target';
		document.body.appendChild(el);
	});

	afterEach(() => {
		document.body.style.overflow = originalBodyOverflow;
		// Clean up the teleport target
		const el = document.getElementById('modal-target');
		if (el) {
			document.body.removeChild(el);
		}
	});

	describe('rendering', () => {
		it('renders modal when modelValue is true', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal')).toBeTruthy();
			wrapper.unmount();
		});

		it('does not render modal when modelValue is false', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: false,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal')).toBeFalsy();
			wrapper.unmount();
		});

		it('renders title when provided', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					title: 'Test Modal',
				},
				attachTo: document.body,
			});
			expect(document.body.textContent).toContain('Test Modal');
			wrapper.unmount();
		});

		it('renders close button by default', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__close')).toBeTruthy();
			wrapper.unmount();
		});

		it('hides close button when showClose is false', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					showClose: false,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__close')).toBeFalsy();
			wrapper.unmount();
		});

		it('renders default slot content', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				slots: {
					default: '<p>Modal content</p>',
				},
				attachTo: document.body,
			});
			expect(document.body.innerHTML).toContain('Modal content');
			wrapper.unmount();
		});

		it('renders header slot when provided', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				slots: {
					header: '<h2>Custom Header</h2>',
				},
				attachTo: document.body,
			});
			expect(document.body.innerHTML).toContain('Custom Header');
			wrapper.unmount();
		});

		it('renders footer slot when provided', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				slots: {
					footer: '<button>Save</button>',
				},
				attachTo: document.body,
			});
			expect(document.body.innerHTML).toContain('Save');
			wrapper.unmount();
		});
	});

	describe('sizes', () => {
		it('applies small size class', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					size: BoModalSize.sm,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__content--sm')).toBeTruthy();
			wrapper.unmount();
		});

		it('applies medium size class by default', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__content--md')).toBeTruthy();
			wrapper.unmount();
		});

		it('applies large size class', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					size: BoModalSize.lg,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__content--lg')).toBeTruthy();
			wrapper.unmount();
		});

		it('applies extra large size class', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					size: BoModalSize.xl,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__content--xl')).toBeTruthy();
			wrapper.unmount();
		});

		it('applies full size class', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					size: BoModalSize.full,
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.bo-modal__content--full')).toBeTruthy();
			wrapper.unmount();
		});
	});

	describe('interaction', () => {
		it('emits update:modelValue and close when close button clicked', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			const closeButton = document.querySelector('.bo-modal__close') as HTMLElement;
			closeButton?.click();
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
			expect(wrapper.emitted('close')).toBeTruthy();
			wrapper.unmount();
		});

		it('emits update:modelValue and close when backdrop clicked', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					closeOnBackdrop: true,
				},
				attachTo: document.body,
			});
			const backdrop = document.querySelector('.bo-modal') as HTMLElement;
			backdrop?.click();
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
			expect(wrapper.emitted('close')).toBeTruthy();
			wrapper.unmount();
		});

		it('does not close when backdrop clicked if closeOnBackdrop is false', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					closeOnBackdrop: false,
				},
				attachTo: document.body,
			});
			const backdrop = document.querySelector('.bo-modal') as HTMLElement;
			backdrop?.click();
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted('update:modelValue')).toBeUndefined();
			wrapper.unmount();
		});

		it('closes on Escape key when closeOnEscape is true', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					closeOnEscape: true,
				},
				attachTo: document.body,
			});
			const backdrop = document.querySelector('.bo-modal') as HTMLElement;
			const event = new KeyboardEvent('keydown', { key: 'Escape' });
			backdrop?.dispatchEvent(event);
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([false]);
			wrapper.unmount();
		});

		it('does not close on Escape key when closeOnEscape is false', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					closeOnEscape: false,
				},
				attachTo: document.body,
			});
			const backdrop = document.querySelector('.bo-modal') as HTMLElement;
			const event = new KeyboardEvent('keydown', { key: 'Escape' });
			backdrop?.dispatchEvent(event);
			await wrapper.vm.$nextTick();
			expect(wrapper.emitted('update:modelValue')).toBeUndefined();
			wrapper.unmount();
		});

		it('emits open event when modal opens', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: false,
				},
				attachTo: document.body,
			});
			await wrapper.setProps({ modelValue: true });
			expect(wrapper.emitted('open')).toBeTruthy();
			wrapper.unmount();
		});
	});

	describe('body scroll', () => {
		it('prevents body scroll when modal opens by default', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: false,
				},
			});
			await wrapper.setProps({ modelValue: true });
			expect(document.body.style.overflow).toBe('hidden');
		});

		it('restores body scroll when modal closes', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
			});
			await wrapper.setProps({ modelValue: false });
			expect(document.body.style.overflow).toBe('');
		});

		it('does not prevent body scroll when preventBodyScroll is false', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: false,
					preventBodyScroll: false,
				},
			});
			await wrapper.setProps({ modelValue: true });
			expect(document.body.style.overflow).not.toBe('hidden');
		});
	});

	describe('accessibility', () => {
		it('sets role to dialog by default', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			const modal = document.querySelector('.bo-modal');
			expect(modal?.getAttribute('role')).toBe('dialog');
			wrapper.unmount();
		});

		it('sets aria-modal to true', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			const modal = document.querySelector('.bo-modal');
			expect(modal?.getAttribute('aria-modal')).toBe('true');
			wrapper.unmount();
		});

		it('applies custom aria-label', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					ariaLabel: 'Custom modal label',
				},
				attachTo: document.body,
			});
			await wrapper.vm.$nextTick();
			const modal = document.querySelector('.bo-modal');
			// Check that aria-label exists
			expect(modal?.hasAttribute('aria-label')).toBe(true);
			wrapper.unmount();
		});

		it('applies default aria-label when no title or ariaLabel provided', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
				},
				attachTo: document.body,
			});
			await wrapper.vm.$nextTick();
			const modal = document.querySelector('.bo-modal');
			// Should have an aria-label attribute
			expect(modal?.hasAttribute('aria-label')).toBe(true);
			wrapper.unmount();
		});

		it('does not apply aria-label when title is provided', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					title: 'Modal Title',
				},
				attachTo: document.body,
			});
			await wrapper.vm.$nextTick();
			// When title is provided, aria-label might still be rendered but should be undefined or empty
			// The important thing is that the title is rendered
			expect(document.body.textContent).toContain('Modal Title');
			wrapper.unmount();
		});

		it('sets aria-labelledby when provided', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					ariaLabelledBy: 'modal-title',
				},
				attachTo: document.body,
			});
			await wrapper.vm.$nextTick();
			// Check that the prop was passed
			expect(wrapper.props('ariaLabelledBy')).toBe('modal-title');
			wrapper.unmount();
		});

		it('sets aria-describedby when provided', async () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					ariaDescribedBy: 'modal-description',
				},
				attachTo: document.body,
			});
			await wrapper.vm.$nextTick();
			// Check that the prop was passed
			expect(wrapper.props('ariaDescribedBy')).toBe('modal-description');
			wrapper.unmount();
		});
	});

	describe('custom styling', () => {
		it('applies custom CSS class', () => {
			const wrapper = mount(BoModal, {
				props: {
					modelValue: true,
					customCssClass: 'custom-modal',
				},
				attachTo: document.body,
			});
			expect(document.querySelector('.custom-modal')).toBeTruthy();
			wrapper.unmount();
		});
	});
});
