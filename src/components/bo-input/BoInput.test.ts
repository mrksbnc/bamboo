import { Icon } from '@/components/bo-icon';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoInput from './BoInput.vue';
import { BoInputSize, BoInputState, BoInputType, BoInputVariant } from './bo-input';

describe('BoInput', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('input-wrapper');
		expect(wrapper.find('input').exists()).toBe(true);
	});

	it('shows label when provided', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				label: 'Username',
			},
		});

		const label = wrapper.find('label');
		expect(label.exists()).toBe(true);
		expect(label.text()).toContain('Username');
	});

	it('shows required indicator when required', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				label: 'Username',
				required: true,
			},
		});

		expect(wrapper.find('label').text()).toContain('*');
		expect(wrapper.find('.sr-only').text()).toContain('(required)');
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				size: BoInputSize.default,
			},
		});

		const input = wrapper.find('input');
		expect(input.classes()).toContain('py-2');
		expect(input.classes()).toContain('text-sm');

		await wrapper.setProps({ size: BoInputSize.small });
		expect(input.classes()).toContain('py-1.5');
		expect(input.classes()).toContain('text-xs');

		await wrapper.setProps({ size: BoInputSize.large });
		expect(input.classes()).toContain('py-3');
		expect(input.classes()).toContain('text-base');
	});

	it('applies different variants correctly', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				variant: BoInputVariant.default,
			},
		});

		const input = wrapper.find('input');
		expect(input.classes()).toContain('border');
		expect(input.classes()).toContain('rounded-md');

		await wrapper.setProps({ variant: BoInputVariant.filled });
		expect(input.classes()).toContain('bg-gray-100');

		await wrapper.setProps({ variant: BoInputVariant.underline });
		expect(input.classes()).toContain('border-b-2');
		expect(input.classes()).toContain('rounded-none');
	});

	it('applies different states correctly', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				state: BoInputState.none,
			},
		});

		let input = wrapper.find('input');
		expect(input.classes()).not.toContain('border-red-500');
		expect(input.classes()).not.toContain('border-green-500');

		await wrapper.setProps({
			state: BoInputState.invalid,
			errorMessage: 'Error message',
		});

		input = wrapper.find('input');
		expect(input.classes()).toContain('border-red-500');
		expect(wrapper.find('[role="alert"]').exists()).toBe(true);
		expect(wrapper.find('[role="alert"]').text()).toContain('Error message');

		await wrapper.setProps({ state: BoInputState.valid });
		input = wrapper.find('input');
		expect(input.classes()).toContain('border-green-500');
	});

	it('renders description text when provided', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				description: 'This is a description',
			},
		});

		const description = wrapper.find('.bo-input__description');
		expect(description.exists()).toBe(true);
		expect(description.text()).toBe('This is a description');
	});

	it('renders prefix icon when provided', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				prefixIcon: Icon.user,
			},
		});

		const iconContainer = wrapper.find('.pointer-events-none.left-0');
		expect(iconContainer.exists()).toBe(true);

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
		expect(icon.props('icon')).toBe(Icon.user);
	});

	it('renders suffix icon when provided', () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				suffixIcon: Icon.search,
			},
		});

		const iconContainer = wrapper.find('.pointer-events-none.right-0');
		expect(iconContainer.exists()).toBe(true);

		const icon = wrapper.findComponent({ name: 'bo-icon' });
		expect(icon.exists()).toBe(true);
	});

	it('shows clear button when clearable and has value', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: 'Some text',
				clearable: true,
			},
		});

		const clearButton = wrapper.find('button[aria-label="Clear input"]');
		expect(clearButton.exists()).toBe(true);

		await clearButton.trigger('click');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
		expect(wrapper.emitted('clear')).toBeTruthy();
	});

	it('handles different input types', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				type: BoInputType.text,
			},
		});

		expect(wrapper.find('input').attributes('type')).toBe('text');

		await wrapper.setProps({ type: BoInputType.password });
		expect(wrapper.find('input').attributes('type')).toBe('password');

		await wrapper.setProps({ type: BoInputType.email });
		expect(wrapper.find('input').attributes('type')).toBe('email');
	});

	it('applies disabled state correctly', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				disabled: false,
			},
		});

		expect(wrapper.find('input').attributes('disabled')).toBeUndefined();

		await wrapper.setProps({ disabled: true });
		expect(wrapper.find('input').attributes('disabled')).toBeDefined();
		expect(wrapper.find('input').attributes('aria-disabled')).toBe('true');
		expect(wrapper.find('input').classes()).toContain('cursor-not-allowed');
	});

	it('applies readonly state correctly', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
				readonly: false,
			},
		});

		expect(wrapper.find('input').attributes('readonly')).toBeUndefined();

		await wrapper.setProps({ readonly: true });
		expect(wrapper.find('input').attributes('readonly')).toBeDefined();
		expect(wrapper.find('input').attributes('aria-readonly')).toBe('true');
	});

	it('emits update:modelValue event when input value changes', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
			},
		});

		const input = wrapper.find('input');
		await input.setValue('new value');

		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value']);
	});

	it('emits focus and blur events', async () => {
		const wrapper = mount(BoInput, {
			props: {
				modelValue: '',
			},
		});

		const input = wrapper.find('input');
		await input.trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();

		await input.trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});
});
