import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import BoModal from './bo-modal.vue';

describe('BoModal.vue', () => {
	it('renders with default title', () => {
		render(BoModal, { props: { modelValue: true } });
		expect(screen.getByTestId('bo-modal')).toBeTruthy();
	});

	it('renders with custom title', () => {
		render(BoModal, { props: { modelValue: true, title: 'Custom Title' } });
		expect(screen.getByText('Custom Title')).toBeTruthy();
	});

	it('renders with custom content', () => {
		render(BoModal, {
			props: { modelValue: true },
			slots: { default: 'Modal Content' },
		});
		expect(screen.getByText('Modal Content')).toBeTruthy();
	});

	it('renders with footer content', () => {
		render(BoModal, {
			props: { modelValue: true },
			slots: { footer: 'Footer Content' },
		});
		expect(screen.getByText('Footer Content')).toBeTruthy();
	});

	it('closes when close button is clicked', async () => {
		const { emitted } = render(BoModal, { props: { modelValue: true } });
		const closeButton = screen.getByTestId('bo-modal__close');
		await fireEvent.click(closeButton);
		expect(emitted()['update:modelValue'][0]).toEqual([false]);
	});

	it('does not show close button when showClose is false', () => {
		render(BoModal, { props: { modelValue: true, showClose: false } });
		expect(screen.queryByTestId('bo-modal__close')).toBeNull();
	});

	it('applies custom class', () => {
		render(BoModal, { props: { modelValue: true, class: 'custom-class' } });
		const modal = screen.getByTestId('bo-modal');
		expect(modal).toHaveClass('custom-class');
	});

	it('applies custom width', () => {
		render(BoModal, { props: { modelValue: true, width: '500px' } });
		const modal = screen.getByTestId('bo-modal');
		expect(modal).toHaveStyle({ width: '500px' });
	});

	it('applies custom height', () => {
		render(BoModal, { props: { modelValue: true, height: '300px' } });
		const modal = screen.getByTestId('bo-modal');
		expect(modal).toHaveStyle({ height: '300px' });
	});

	it('prevents closing when preventClose is true', async () => {
		const { emitted } = render(BoModal, { props: { modelValue: true, preventClose: true } });
		const closeButton = screen.getByTestId('bo-modal__close');
		await fireEvent.click(closeButton);
		expect(emitted()['update:modelValue']).toBeUndefined();
	});
});
