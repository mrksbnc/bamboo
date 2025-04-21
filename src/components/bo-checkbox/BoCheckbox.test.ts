import { fireEvent, render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import BoCheckbox from './BoCheckbox.vue';

describe('BoCheckbox.vue', () => {
	it('renders label when passed', () => {
		render(BoCheckbox, { props: { label: 'Test Checkbox' } });
		expect(screen.getByText('Test Checkbox')).toBeTruthy();
	});

	it('renders without label when label prop is not provided', () => {
		render(BoCheckbox);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeTruthy();
	});

	it('is checked when modelValue is true', () => {
		render(BoCheckbox, { props: { modelValue: true } });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeChecked();
	});

	it('is not checked when modelValue is false', () => {
		render(BoCheckbox, { props: { modelValue: false } });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).not.toBeChecked();
	});

	it('emits update:modelValue when clicked', async () => {
		const { emitted } = render(BoCheckbox);
		const checkbox = screen.getByRole('checkbox');
		await fireEvent.click(checkbox);
		expect(emitted()['update:modelValue'][0]).toEqual([true]);
	});

	it('is disabled when disabled prop is true', () => {
		render(BoCheckbox, { props: { disabled: true } });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeDisabled();
	});

	it('shows error message when error prop is provided', () => {
		render(BoCheckbox, { props: { error: 'Invalid selection' } });
		expect(screen.getByText('Invalid selection')).toBeTruthy();
	});

	it('shows description when provided', () => {
		render(BoCheckbox, { props: { description: 'Helper text' } });
		expect(screen.getByText('Helper text')).toBeTruthy();
	});

	it('shows required indicator when required prop is true', () => {
		render(BoCheckbox, { props: { required: true } });
		expect(screen.getByText('*')).toBeTruthy();
	});

	it('applies indeterminate state when indeterminate prop is true', () => {
		render(BoCheckbox, { props: { indeterminate: true } });
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
	});
});
