import { render, screen } from '@testing-library/vue';
import { describe, expect, it } from 'vitest';
import BoLoadingPulse from './BoLoadingPulse.vue';

describe('BoLoadingPulse.vue', () => {
	it('renders with default size', () => {
		render(BoLoadingPulse);
		const pulse = screen.getByTestId('bo-loading-pulse');
		expect(pulse).toHaveClass('bo-loading-pulse--medium');
	});

	it('renders with specified size', () => {
		render(BoLoadingPulse, { props: { size: 'large' } });
		const pulse = screen.getByTestId('bo-loading-pulse');
		expect(pulse).toHaveClass('bo-loading-pulse--large');
	});

	it('renders with specified color', () => {
		render(BoLoadingPulse, { props: { color: 'primary' } });
		const pulse = screen.getByTestId('bo-loading-pulse');
		expect(pulse).toHaveClass('bo-loading-pulse--primary');
	});

	it('renders with custom class', () => {
		render(BoLoadingPulse, { props: { class: 'custom-class' } });
		const pulse = screen.getByTestId('bo-loading-pulse');
		expect(pulse).toHaveClass('custom-class');
	});

	it('renders with custom speed', () => {
		render(BoLoadingPulse, { props: { speed: 2 } });
		const pulse = screen.getByTestId('bo-loading-pulse');
		expect(pulse).toHaveStyle({ 'animation-duration': '2s' });
	});

	it('renders with custom label', () => {
		render(BoLoadingPulse, { props: { label: 'Loading...' } });
		expect(screen.getByText('Loading...')).toBeTruthy();
	});

	it('renders without label when label prop is not provided', () => {
		render(BoLoadingPulse);
		expect(screen.queryByTestId('bo-loading-pulse__label')).toBeNull();
	});

	it('renders with custom count of pulses', () => {
		render(BoLoadingPulse, { props: { count: 5 } });
		const pulses = screen.getAllByTestId('bo-loading-pulse__dot');
		expect(pulses).toHaveLength(5);
	});
});
