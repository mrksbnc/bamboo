import { BoSize } from '@/shared/bo-size.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoProgressBarShape, BoProgressBarVariant } from './bo-progress-bar.js';
import BoProgressBar from './bo-progress-bar.vue';

// Mock BoText component
const BoTextMock = {
	name: 'BoText',
	props: ['value', 'size', 'color', 'weight', 'class', 'data-testid'],
	template: '<span :data-testid="$props[\'data-testid\']">{{ value }}</span>',
};

const defaultProps = {
	value: 50,
	max: 100,
};

const mountComponent = (props = {}) => {
	return mount(BoProgressBar, {
		props: { ...defaultProps, ...props },
		global: {
			components: {
				BoText: BoTextMock,
			},
		},
	});
};

describe('BoProgressBar', () => {
	describe('rendering', () => {
		it('should render progress bar with default props', () => {
			const wrapper = mountComponent();

			expect(wrapper.find('[data-testid*="progress-bar"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="progress-bar-fill"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="progress-bar-label"]').exists()).toBe(true);
		});

		it('should render with custom id', () => {
			const wrapper = mountComponent({ id: 'custom-progress' });

			expect(wrapper.find('[data-testid="custom-progress-progress-bar"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid="custom-progress-progress-bar-fill"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid="custom-progress-progress-bar-label"]').exists()).toBe(
				true,
			);
		});

		it('should render without label when showLabel is false', () => {
			const wrapper = mountComponent({ showLabel: false });

			expect(wrapper.find('[data-testid*="progress-bar-label"]').exists()).toBe(false);
		});
	});

	describe('progress calculation', () => {
		it('should display correct percentage', () => {
			const wrapper = mountComponent({ value: 75, max: 100 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('75%');
		});

		it('should handle decimal values', () => {
			const wrapper = mountComponent({ value: 33.33, max: 100 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('33%');
		});

		it('should handle different max values', () => {
			const wrapper = mountComponent({ value: 25, max: 50 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('50%');
		});

		it('should handle zero value', () => {
			const wrapper = mountComponent({ value: 0 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('0%');
		});

		it('should handle maximum value', () => {
			const wrapper = mountComponent({ value: 100 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('100%');
		});

		it('should cap progress at 100% when value exceeds max', () => {
			const wrapper = mountComponent({ value: 150, max: 100 });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('w-[100%]');
		});

		it('should handle negative values', () => {
			const wrapper = mountComponent({ value: -10 });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('w-[0%]');
		});
	});

	describe('custom label', () => {
		it('should display custom label when provided', () => {
			const wrapper = mountComponent({ label: 'Loading files...' });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('Loading files...');
		});

		it('should prefer custom label over percentage', () => {
			const wrapper = mountComponent({ value: 75, label: 'Custom Label' });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('Custom Label');
		});
	});

	describe('sizes', () => {
		it.each([
			[BoSize.extra_small, 'h-2'],
			[BoSize.small, 'h-3'],
			[BoSize.default, 'h-5'],
			[BoSize.large, 'h-6'],
			[BoSize.extra_large, 'h-8'],
		])('should apply size %s with class %s', (size, expectedClass) => {
			const wrapper = mountComponent({ size });
			const container = wrapper.find('[data-testid*="progress-bar"]');

			expect(container.attributes('class')).toContain(expectedClass);
		});
	});

	describe('variants', () => {
		it.each([
			[BoProgressBarVariant.primary, 'bg-blue-600'],
			[BoProgressBarVariant.secondary, 'bg-neutral-500'],
			[BoProgressBarVariant.success, 'bg-green-600'],
			[BoProgressBarVariant.danger, 'bg-red-600'],
			[BoProgressBarVariant.warning, 'bg-yellow-500'],
			[BoProgressBarVariant.info, 'bg-sky-600'],
			[BoProgressBarVariant.light, 'bg-white'],
			[BoProgressBarVariant.dark, 'bg-neutral-900'],
		])('should apply variant %s with class %s', (variant, expectedClass) => {
			const wrapper = mountComponent({ variant });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain(expectedClass);
		});
	});

	describe('shapes', () => {
		it.each([
			[BoProgressBarShape.rounded, 'rounded-md'],
			[BoProgressBarShape.square, 'rounded-none'],
		])('should apply shape %s with class %s', (shape, expectedClass) => {
			const wrapper = mountComponent({ shape });
			const container = wrapper.find('[data-testid*="progress-bar"]');
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(container.attributes('class')).toContain(expectedClass);
			expect(fillElement.attributes('class')).toContain(expectedClass);
		});
	});

	describe('custom styling', () => {
		it('should apply custom color', () => {
			const wrapper = mountComponent({ color: '#ff0000' });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('bg-[#ff0000]');
		});

		it('should apply custom font color', () => {
			const wrapper = mountComponent({ fontColor: '#00ff00' });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('text-[#00ff00]');
		});

		it('should apply custom tailwind class', () => {
			const wrapper = mountComponent({ tailwindClass: 'custom-class shadow-lg' });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('custom-class shadow-lg');
		});

		it('should apply multiple custom styles together', () => {
			const wrapper = mountComponent({
				color: '#ff0000',
				fontColor: '#00ff00',
				tailwindClass: 'shadow-md',
			});
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(fillElement.attributes('class')).toContain('bg-[#ff0000]');
			expect(fillElement.attributes('class')).toContain('text-[#00ff00]');
			expect(fillElement.attributes('class')).toContain('shadow-md');
		});
	});

	describe('accessibility', () => {
		it('should have correct ARIA attributes', () => {
			const wrapper = mountComponent({ value: 75, max: 100 });
			const container = wrapper.find('[data-testid*="progress-bar"]');

			expect(container.attributes('role')).toBe('progressbar');
			expect(container.attributes('aria-valuenow')).toBe('75');
			expect(container.attributes('aria-valuemin')).toBe('0');
			expect(container.attributes('aria-valuemax')).toBe('100');
			expect(container.attributes('aria-label')).toBe('Progress: 75%');
		});

		it('should update ARIA label with custom label', () => {
			const wrapper = mountComponent({ label: 'Loading files...' });
			const container = wrapper.find('[data-testid*="progress-bar"]');

			expect(container.attributes('aria-label')).toBe('Progress: Loading files...');
		});

		it('should have pointer-events-none on label for accessibility', () => {
			const wrapper = mountComponent();
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.attributes('class')).toContain('pointer-events-none');
		});
	});

	describe('progress bar width', () => {
		it('should set correct width based on progress', () => {
			const testCases = [
				{ value: 0, expected: 'w-[0%]' },
				{ value: 25, expected: 'w-[25%]' },
				{ value: 50, expected: 'w-[50%]' },
				{ value: 75, expected: 'w-[75%]' },
				{ value: 100, expected: 'w-[100%]' },
			];

			testCases.forEach(({ value, expected }) => {
				const wrapper = mountComponent({ value });
				const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

				expect(fillElement.attributes('class')).toContain(expected);
			});
		});
	});

	describe('text positioning', () => {
		it('should position label in center of entire progress bar', () => {
			const wrapper = mountComponent();
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			// Check that label is absolutely positioned and centered using transform
			expect(label.attributes('class')).toContain('absolute');
			expect(label.attributes('class')).toContain('transform');
			expect(label.attributes('class')).toContain('-translate-x-1/2');
			expect(label.attributes('class')).toContain('-translate-y-1/2');
			expect(label.attributes('class')).toContain('left-1/2');
			expect(label.attributes('class')).toContain('top-1/2');
		});

		it('should ensure label is above progress fill', () => {
			const wrapper = mountComponent();
			const container = wrapper.find('[data-testid*="progress-bar"]');
			const children = container.element.children;

			// The label should come after the fill element in DOM order
			// but be positioned above it with absolute positioning
			expect(children.length).toBe(2);
			expect(children[0]).toHaveProperty(
				'dataset.testid',
				expect.stringContaining('progress-bar-fill'),
			);
			expect(children[1]).toHaveProperty(
				'dataset.testid',
				expect.stringContaining('progress-bar-label'),
			);
		});
	});

	describe('edge cases', () => {
		it('should handle very small values', () => {
			const wrapper = mountComponent({ value: 0.1, max: 100 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			expect(label.text()).toBe('0%');
			expect(fillElement.attributes('class')).toContain('w-[0.1%]');
		});

		it('should handle very large max values', () => {
			const wrapper = mountComponent({ value: 5000, max: 10000 });
			const label = wrapper.find('[data-testid*="progress-bar-label"]');

			expect(label.text()).toBe('50%');
		});

		it('should handle max value of zero', () => {
			const wrapper = mountComponent({ value: 10, max: 0 });
			const fillElement = wrapper.find('[data-testid*="progress-bar-fill"]');

			// Should handle division by zero gracefully
			expect(fillElement.attributes('class')).toContain('w-[100%]');
		});
	});
});
