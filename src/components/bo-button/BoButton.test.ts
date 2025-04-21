import { Icon } from '@/components/bo-icon';
import { BoLoaderType, BoSize } from '@/shared';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoButton from './BoButton.vue';
import { BoButtonShape, BoButtonVariant } from './bo-button';

describe('BoButton', () => {
	// Basic rendering test
	it('renders properly with label', () => {
		const label = 'Test Button';
		const wrapper = mount(BoButton, {
			props: { label },
		});

		expect(wrapper.text()).toContain(label);
		expect(wrapper.find('button').exists()).toBe(true);
	});

	// Props tests
	it('applies the correct variant class', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Variant Test',
				variant: BoButtonVariant.danger,
			},
		});

		expect(wrapper.find('button').classes()).toContain('bg-red-500');
	});

	it('applies the correct shape class', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Shape Test',
				shape: BoButtonShape.pill,
			},
		});

		expect(wrapper.find('button').classes()).toContain('rounded-full');
	});

	it('applies the correct size class', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Size Test',
				size: BoSize.large,
			},
		});

		expect(wrapper.find('button').classes()).toContain('p-3');
	});

	it('renders disabled state correctly', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Disabled Test',
				disabled: true,
			},
		});

		const button = wrapper.find('button');
		expect(button.attributes('disabled')).toBeDefined();
		expect(button.classes()).toContain('opacity-50');
	});

	it('renders loading state correctly', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Loading Test',
				isLoading: true,
			},
		});

		expect(wrapper.find('.loading-spinner').exists()).toBe(true);
		expect(wrapper.text()).not.toContain('Loading Test'); // Label should be hidden
	});

	it('renders loading state with pulse loader', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Loading Pulse Test',
				isLoading: true,
				loaderType: BoLoaderType.pulse,
			},
		});

		expect(wrapper.find('.loading-pulse').exists()).toBe(true);
	});

	it('renders with full width', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Full Width Test',
				fullWidth: true,
			},
		});

		expect(wrapper.find('button').classes()).toContain('w-full');
	});

	// Slot tests
	it('renders content from default slot', () => {
		const slotContent = 'Custom Slot Content';
		const wrapper = mount(BoButton, {
			props: {
				useSlot: true,
			},
			slots: {
				default: slotContent,
			},
		});

		expect(wrapper.text()).toContain(slotContent);
	});

	it('renders content from prefix slot', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Prefix Slot Test',
			},
			slots: {
				prefix: '<span class="prefix-content">Prefix</span>',
			},
		});

		expect(wrapper.find('.prefix-content').exists()).toBe(true);
	});

	it('renders content from suffix slot', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Suffix Slot Test',
			},
			slots: {
				suffix: '<span class="suffix-content">Suffix</span>',
			},
		});

		expect(wrapper.find('.suffix-content').exists()).toBe(true);
	});

	// Event tests
	it('emits click event when clicked', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Click Test',
			},
		});

		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')).toHaveLength(1);
	});

	it('does not emit click when disabled', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Disabled Click Test',
				disabled: true,
			},
		});

		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	it('does not emit click when loading', async () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Loading Click Test',
				isLoading: true,
			},
		});

		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	// Icon rendering
	it('renders prefix icon correctly', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Icon Test',
				prefixIcon: Icon.check,
			},
		});

		expect(wrapper.findComponent({ name: 'BoIcon' }).exists()).toBe(true);
	});

	it('renders suffix icon correctly', () => {
		const wrapper = mount(BoButton, {
			props: {
				label: 'Icon Test',
				suffixIcon: Icon.check,
			},
		});

		expect(wrapper.findComponent({ name: 'BoIcon' }).exists()).toBe(true);
	});
});
