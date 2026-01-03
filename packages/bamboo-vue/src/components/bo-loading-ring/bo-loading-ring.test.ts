import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import BoLoaderRing from './bo-loading-ring.vue';
import BoText from '@/components/bo-text/bo-text.vue';
import { BoSize } from '@/core/constants/size.js';
import { BoVariant } from '@/core/constants/variant.js';
import { BoLoaderTextPosition } from '@/core/constants/loader.js';
import { AriaLive } from '@/core/constants/accessibility.js';
import { BoFontSize, BoFontWeight } from '@/components/bo-text/bo-text.js';

vi.mock('@/core/services/identity-service.js', () => ({
	IdentityService: {
		instance: {
			getComponentId: vi.fn((prefix: string) => `${prefix}-test-id`),
			getDataTestId: vi.fn((prefix: string) => `${prefix}-test-data-id`),
		},
	},
}));

describe('BoLoaderRing', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe('default props', () => {
		it('should render with default props', () => {
			const wrapper = mount(BoLoaderRing);

			expect(wrapper.exists()).toBe(true);
			expect(wrapper.attributes('id')).toBe('bo-loader-ring-test-id');
			expect(wrapper.attributes('data-testid')).toBe('bo-loader-ring-test-data-id');
		});

		it('should apply default size class', () => {
			const wrapper = mount(BoLoaderRing);
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.classes()).toContain('bo-loader-ring__ring--default');
		});

		it('should apply default variant class', () => {
			const wrapper = mount(BoLoaderRing);
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.classes()).toContain('bo-loader-ring__ring--primary');
		});

		it('should apply default text position class', () => {
			const wrapper = mount(BoLoaderRing);

			expect(wrapper.classes()).toContain('bo-loader-ring--after');
		});
	});

	describe('id and data test id', () => {
		it('should accept custom id', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { id: 'custom-id' },
			});

			expect(wrapper.attributes('id')).toBe('custom-id');
		});

		it('should accept custom dataTestId', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { dataTestId: 'custom-test-id' },
			});

			expect(wrapper.attributes('data-testid')).toBe('custom-test-id');
		});
	});

	describe('size variants', () => {
		it.each([
			[BoSize.extra_small, 'bo-loader-ring__ring--extra-small'],
			[BoSize.small, 'bo-loader-ring__ring--small'],
			[BoSize.default, 'bo-loader-ring__ring--default'],
			[BoSize.large, 'bo-loader-ring__ring--large'],
			[BoSize.extra_large, 'bo-loader-ring__ring--extra-large'],
		])('should apply %s size class', (size, expectedClass) => {
			const wrapper = mount(BoLoaderRing, {
				props: { size },
			});
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.classes()).toContain(expectedClass);
		});
	});

	describe('color variants', () => {
		it.each([
			[BoVariant.primary, 'bo-loader-ring__ring--primary'],
			[BoVariant.secondary, 'bo-loader-ring__ring--secondary'],
			[BoVariant.success, 'bo-loader-ring__ring--success'],
			[BoVariant.warning, 'bo-loader-ring__ring--warning'],
			[BoVariant.danger, 'bo-loader-ring__ring--danger'],
		])('should apply %s variant class', (variant, expectedClass) => {
			const wrapper = mount(BoLoaderRing, {
				props: { variant },
			});
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.classes()).toContain(expectedClass);
		});
	});

	describe('loader text', () => {
		it('should not render text when loaderText is not provided', () => {
			const wrapper = mount(BoLoaderRing);

			expect(wrapper.findComponent(BoText).exists()).toBe(false);
		});

		it('should render text when loaderText is provided', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { loaderText: 'Loading...' },
			});
			const textComponent = wrapper.findComponent(BoText);

			expect(textComponent.exists()).toBe(true);
			expect(textComponent.props('value')).toBe('Loading...');
		});

		it('should pass correct font weight to text component', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { loaderText: 'Loading...' },
			});
			const textComponent = wrapper.findComponent(BoText);

			expect(textComponent.props('fontWeight')).toBe(BoFontWeight.medium);
		});

		it.each([
			[BoSize.extra_small, BoFontSize.xs],
			[BoSize.small, BoFontSize.sm],
			[BoSize.default, BoFontSize.default],
			[BoSize.large, BoFontSize.lg],
			[BoSize.extra_large, BoFontSize.lg],
		])('should use %s font size for %s loader size', (size, expectedFontSize) => {
			const wrapper = mount(BoLoaderRing, {
				props: {
					size,
					loaderText: 'Loading...',
				},
			});
			const textComponent = wrapper.findComponent(BoText);

			expect(textComponent.props('fontSize')).toBe(expectedFontSize);
		});
	});

	describe('text position', () => {
		it.each([
			[BoLoaderTextPosition.top, 'bo-loader-ring--top'],
			[BoLoaderTextPosition.bottom, 'bo-loader-ring--bottom'],
			[BoLoaderTextPosition.before, 'bo-loader-ring--before'],
			[BoLoaderTextPosition.after, 'bo-loader-ring--after'],
		])('should apply %s text position class', (position, expectedClass) => {
			const wrapper = mount(BoLoaderRing, {
				props: { textPosition: position },
			});

			expect(wrapper.classes()).toContain(expectedClass);
		});
	});

	describe('custom color', () => {
		it('should apply custom color style when provided', () => {
			const customColor = '#ff0000';
			const wrapper = mount(BoLoaderRing, {
				props: { customColor },
			});
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.attributes('style')).toContain(`color: rgb(255, 0, 0);`);
		});

		it('should not apply custom color style when not provided', () => {
			const wrapper = mount(BoLoaderRing);
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.attributes('style')).toBeUndefined();
		});
	});

	describe('accessibility props', () => {
		it('should apply ariaLive attribute', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { ariaLive: AriaLive.polite },
			});

			expect(wrapper.attributes('aria-live')).toBe(AriaLive.polite);
		});

		it('should apply ariaLabel attribute', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { ariaLabel: 'Loading content' },
			});

			expect(wrapper.attributes('aria-label')).toBe('Loading content');
		});

		it('should apply ariaBusy attribute when true', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { ariaBusy: true },
			});

			expect(wrapper.attributes('aria-busy')).toBe('true');
		});

		it('should apply ariaBusy attribute when false', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { ariaBusy: false },
			});

			expect(wrapper.attributes('aria-busy')).toBe('false');
		});
	});

	describe('custom css classes', () => {
		it('should apply custom container CSS class', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { customContainerCssClass: 'custom-container' },
			});

			expect(wrapper.classes()).toContain('custom-container');
			expect(wrapper.classes()).toContain('bo-loader-ring');
		});

		it('should apply custom ring class', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { customRingClass: 'custom-ring' },
			});
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.classes()).toContain('custom-ring');
			expect(ring.classes()).toContain('bo-loader-ring__ring');
		});

		it('should apply multiple custom classes', () => {
			const wrapper = mount(BoLoaderRing, {
				props: {
					customContainerCssClass: 'custom-container another-class',
					customRingClass: 'custom-ring ring-modifier',
				},
			});

			expect(wrapper.classes()).toContain('custom-container');
			expect(wrapper.classes()).toContain('another-class');

			const ring = wrapper.find('.bo-loader-ring__ring');
			expect(ring.classes()).toContain('custom-ring');
			expect(ring.classes()).toContain('ring-modifier');
		});
	});

	describe('slot content', () => {
		it('should render default slot content when provided', () => {
			const wrapper = mount(BoLoaderRing, {
				slots: {
					default: '<div class="custom-content">Custom Loading Text</div>',
				},
			});

			expect(wrapper.find('.custom-content').exists()).toBe(true);
			expect(wrapper.text()).toContain('Custom Loading Text');
		});

		it('should prioritize slot content over loaderText prop', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { loaderText: 'Prop Text' },
				slots: {
					default: '<div class="slot-content">Slot Text</div>',
				},
			});

			expect(wrapper.find('.slot-content').exists()).toBe(true);
			expect(wrapper.text()).toContain('Slot Text');
			expect(wrapper.text()).not.toContain('Prop Text');
		});
	});

	describe('combined props', () => {
		it('should handle multiple props simultaneously', () => {
			const wrapper = mount(BoLoaderRing, {
				props: {
					id: 'loader-1',
					size: BoSize.large,
					variant: BoVariant.success,
					loaderText: 'Processing...',
					textPosition: BoLoaderTextPosition.top,
					customColor: '#00ff00',
					ariaLabel: 'Processing data',
					ariaBusy: true,
					customContainerCssClass: 'my-container',
					customRingClass: 'my-ring',
				},
			});

			expect(wrapper.attributes('id')).toBe('loader-1');
			expect(wrapper.classes()).toContain('bo-loader-ring--top');
			expect(wrapper.classes()).toContain('my-container');
			expect(wrapper.attributes('aria-label')).toBe('Processing data');
			expect(wrapper.attributes('aria-busy')).toBe('true');

			const ring = wrapper.find('.bo-loader-ring__ring');
			expect(ring.classes()).toContain('bo-loader-ring__ring--large');
			expect(ring.classes()).toContain('bo-loader-ring__ring--success');
			expect(ring.classes()).toContain('my-ring');
			expect(ring.attributes('style')).toContain('color: rgb(0, 255, 0);');

			const textComponent = wrapper.findComponent(BoText);
			expect(textComponent.exists()).toBe(true);
			expect(textComponent.props('value')).toBe('Processing...');
			expect(textComponent.props('fontSize')).toBe(BoFontSize.lg);
		});
	});

	describe('component structure', () => {
		it('should have correct DOM structure', () => {
			const wrapper = mount(BoLoaderRing, {
				props: { loaderText: 'Loading...' },
			});

			expect(wrapper.find('.bo-loader-ring').exists()).toBe(true);
			expect(wrapper.find('.bo-loader-ring__ring').exists()).toBe(true);
			expect(wrapper.findComponent(BoText).exists()).toBe(true);
		});

		it('should render ring as a span element', () => {
			const wrapper = mount(BoLoaderRing);
			const ring = wrapper.find('.bo-loader-ring__ring');

			expect(ring.element.tagName).toBe('SPAN');
		});
	});
});
