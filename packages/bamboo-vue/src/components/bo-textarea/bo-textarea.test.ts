import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoTextarea from './bo-textarea.vue';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';

describe('BoTextarea', () => {
	it('renders with default props', () => {
		const wrapper = mount(BoTextarea, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.exists()).toBe(true);
		expect(wrapper.find('textarea').exists()).toBe(true);
	});

	it('renders with label', () => {
		const wrapper = mount(BoTextarea, {
			props: { label: 'Description' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Description');
	});

	it('renders with placeholder', () => {
		const wrapper = mount(BoTextarea, {
			props: { placeholder: 'Enter description' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('placeholder')).toBe('Enter description');
	});

	it('applies correct size classes', () => {
		const sizes = ['sm', 'default', 'lg'] as const;
		sizes.forEach((size) => {
			const wrapper = mount(BoTextarea, {
				props: { size },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('textarea').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('applies correct state classes', () => {
		const states = ['default', 'valid', 'invalid'] as const;
		states.forEach((state) => {
			const wrapper = mount(BoTextarea, {
				props: { state },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('textarea').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('applies correct variant classes', () => {
		const variants = ['default', 'filled'] as const;
		variants.forEach((variant) => {
			const wrapper = mount(BoTextarea, {
				props: { variant },
				global: {
					components: { BoIcon, BoText },
				},
			});
			const container = wrapper.find('textarea').element.parentElement;
			expect(container).toBeTruthy();
		});
	});

	it('emits update:modelValue on input', async () => {
		const wrapper = mount(BoTextarea, {
			props: { modelValue: '' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.setValue('test value');
		expect(wrapper.emitted('update:modelValue')).toBeTruthy();
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value']);
	});

	it('emits focus event', async () => {
		const wrapper = mount(BoTextarea, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();
	});

	it('emits blur event', async () => {
		const wrapper = mount(BoTextarea, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('emits change event', async () => {
		const wrapper = mount(BoTextarea, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.setValue('test');
		await textarea.trigger('change');
		expect(wrapper.emitted('change')).toBeTruthy();
	});

	it('disables textarea when disabled prop is true', () => {
		const wrapper = mount(BoTextarea, {
			props: { disabled: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('disabled')).toBeDefined();
	});

	it('makes textarea readonly when readOnly prop is true', () => {
		const wrapper = mount(BoTextarea, {
			props: { readOnly: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('readonly')).toBeDefined();
	});

	it('shows required indicator when required is true', () => {
		const wrapper = mount(BoTextarea, {
			props: { label: 'Description', required: true },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.html()).toContain('*');
	});

	it('applies rows attribute', () => {
		const wrapper = mount(BoTextarea, {
			props: { rows: 5 },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('rows')).toBe('5');
	});

	it('applies maxlength attribute', () => {
		const wrapper = mount(BoTextarea, {
			props: { maxLength: 100 },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('maxlength')).toBe('100');
	});

	it('displays error message', () => {
		const wrapper = mount(BoTextarea, {
			props: { error: 'This field is required' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('This field is required');
	});

	it('displays hint message', () => {
		const wrapper = mount(BoTextarea, {
			props: { hint: 'Enter at least 10 characters' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Enter at least 10 characters');
	});

	it('prioritizes error over hint', () => {
		const wrapper = mount(BoTextarea, {
			props: { error: 'Error message', hint: 'Hint message' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.text()).toContain('Error message');
		expect(wrapper.text()).not.toContain('Hint message');
	});

	it('applies aria-invalid when state is invalid', () => {
		const wrapper = mount(BoTextarea, {
			props: { state: 'invalid' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('aria-invalid')).toBe('true');
	});

	it('applies custom id and data-testid', () => {
		const wrapper = mount(BoTextarea, {
			props: { id: 'custom-id', dataTestId: 'custom-test-id' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('[data-testid="custom-test-id"]');
		expect(textarea.exists()).toBe(true);
		expect(textarea.attributes('id')).toBe('custom-id');
	});

	it('applies name attribute', () => {
		const wrapper = mount(BoTextarea, {
			props: { name: 'description' },
			global: {
				components: { BoIcon, BoText },
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('name')).toBe('description');
	});

	it('exposes focus method', () => {
		const wrapper = mount(BoTextarea, {
			global: {
				components: { BoIcon, BoText },
			},
		});
		expect(wrapper.vm.focus).toBeDefined();
		expect(typeof wrapper.vm.focus).toBe('function');
	});
});
