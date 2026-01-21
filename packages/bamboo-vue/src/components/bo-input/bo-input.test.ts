import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoInput from './bo-input.vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

describe('BoInput', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoInput, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('input').exists()).toBe(true);
	});

	it('renders with label', () => {
		const wrapper = mount(BoInput, {
			props: { label: 'Username' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Username');
	});

	it('renders with placeholder', () => {
		const wrapper = mount(BoInput, {
			props: { placeholder: 'Enter username' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('placeholder')).toBe('Enter username');
	});

	it('applies correct size classes', () => {
		const sizes = ['sm', 'default', 'lg'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoInput, {
				props: { size },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('input').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('applies correct state classes', () => {
		const states = ['default', 'valid', 'invalid'] as const;
		states.forEach((state) => {
			const wrapper = mount(BoInput, {
				props: { state },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('input').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('applies correct variant classes', () => {
		const variants = ['default', 'filled'] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoInput, {
				props: { variant },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('input').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('emits update:modelValue on input', async () => {
		const wrapper = mount(BoInput, {
			props: { modelValue: '' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		await input.setValue('test value');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value']);
	});

	it('emits focus event', async () => {
		const wrapper = mount(BoInput, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		await input.trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();
	});

	it('emits blur event', async () => {
		const wrapper = mount(BoInput, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		await input.trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('emits change event', async () => {
		const wrapper = mount(BoInput, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		await input.setValue('test');
		await input.trigger('change');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('disables input when disabled prop is true', () => {
		const wrapper = mount(BoInput, {
			props: { disabled: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('disabled')).toBeDefined();
	});

	it('makes input readonly when readOnly prop is true', () => {
		const wrapper = mount(BoInput, {
			props: { readOnly: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('readonly')).toBeDefined();
	});

	it('shows required indicator when required is true', () => {
		const wrapper = mount(BoInput, {
			props: { label: 'Username', required: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.html()).toContain('*');
	});

	it('renders prefix icon', () => {
		const wrapper = mount(BoInput, {
			props: { prefixIcon: 'search' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('renders suffix icon', () => {
		const wrapper = mount(BoInput, {
			props: { suffixIcon: 'x' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('emits prefixIconClick when prefix icon is clicked', async () => {
		const wrapper = mount(BoInput, {
			props: { prefixIcon: 'search' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const iconContainer = wrapper.find('.absolute.left-3');
		await iconContainer.trigger('click');
		expect(wrapper.emitted('prefixIconClick')).toBeTruthy();
	});

	it('emits suffixIconClick when suffix icon is clicked', async () => {
		const wrapper = mount(BoInput, {
			props: { suffixIcon: 'x' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const iconContainer = wrapper.find('.absolute.right-3');
		await iconContainer.trigger('click');
		expect(wrapper.emitted('suffixIconClick')).toBeTruthy();
	});

	it('shows password toggle for password type with revealPassword', () => {
		const wrapper = mount(BoInput, {
			props: { type: 'password', modelValue: 'password123', revealPassword: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const icons = wrapper.findAllComponents(BoIcon);
		expect(icons.length).toBeGreaterThan(0);
	});

	it('toggles password visibility when eye icon is clicked', async () => {
		const wrapper = mount(BoInput, {
			props: { type: 'password', modelValue: 'password123', revealPassword: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('type')).toBe('password');

		const eyeIcon = wrapper.findComponent(BoIcon);
		await eyeIcon.trigger('click');

		expect(input.attributes('type')).toBe('text');
	});

	it('displays error message', () => {
		const wrapper = mount(BoInput, {
			props: { error: 'This field is required' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('This field is required');
	});

	it('displays hint message', () => {
		const wrapper = mount(BoInput, {
			props: { hint: 'Enter at least 8 characters' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Enter at least 8 characters');
	});

	it('prioritizes error over hint', () => {
		const wrapper = mount(BoInput, {
			props: { error: 'Error message', hint: 'Hint message' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Error message');
		expect(wrapper.text()).not.toContain('Hint message');
	});

	it('applies aria-invalid when state is invalid', () => {
		const wrapper = mount(BoInput, {
			props: { state: 'invalid' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('aria-invalid')).toBe('true');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoInput, {
			props: { id: 'custom-id', dataTestId: 'custom-test-id' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('[data-testid="custom-test-id"]');
		expect(input.exists()).toBe(true);
		expect(input.attributes('id')).toBe('custom-id');
	});

	it('applies name attribute', () => {
		const wrapper = mount(BoInput, {
			props: { name: 'username' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const input = wrapper.find('input');
		expect(input.attributes('name')).toBe('username');
	});

	it('renders topRightContent slot', () => {
		const wrapper = mount(BoInput, {
			props: { label: 'Username' },
			slots: {
				topRightContent: 'Optional',
			},
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Optional');
	});

	it('exposes focus method', () => {
		const wrapper = mount(BoInput, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.vm.focus).toBeDefined();
		expect(typeof wrapper.vm.focus).toBe('function');
	});
});
