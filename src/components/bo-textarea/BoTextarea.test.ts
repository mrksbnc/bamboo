import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoTextarea from './BoTextarea.vue';
import {
	BoTextareaResize,
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	BoTextareaWrap,
} from './bo-textarea';

describe('BoTextarea', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('textarea-wrapper');
		expect(wrapper.find('textarea').exists()).toBe(true);
	});

	it('shows label when provided', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				label: 'Message',
			},
		});

		const label = wrapper.find('label');
		expect(label.exists()).toBe(true);
		expect(label.text()).toContain('Message');
	});

	it('shows required indicator when required', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				label: 'Message',
				required: true,
			},
		});

		expect(wrapper.find('label').text()).toContain('*');
		expect(wrapper.find('.sr-only').text()).toContain('(required)');
	});

	it('applies different sizes correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				size: BoTextareaSize.default,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.classes()).toContain('py-2');
		expect(textarea.classes()).toContain('text-sm');

		await wrapper.setProps({ size: BoTextareaSize.small });
		expect(textarea.classes()).toContain('py-1.5');
		expect(textarea.classes()).toContain('text-xs');

		await wrapper.setProps({ size: BoTextareaSize.large });
		expect(textarea.classes()).toContain('py-3');
		expect(textarea.classes()).toContain('text-base');
	});

	it('applies different variants correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				variant: BoTextareaVariant.default,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.classes()).toContain('border');
		expect(textarea.classes()).toContain('rounded-md');

		await wrapper.setProps({ variant: BoTextareaVariant.filled });
		expect(textarea.classes()).toContain('bg-gray-100');
		expect(textarea.classes()).toContain('border-transparent');
	});

	it('applies different states correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				state: BoTextareaState.none,
			},
		});

		let textarea = wrapper.find('textarea');
		expect(textarea.classes()).not.toContain('border-red-500');
		expect(textarea.classes()).not.toContain('border-green-500');

		await wrapper.setProps({
			state: BoTextareaState.invalid,
			errorMessage: 'Error message',
		});

		textarea = wrapper.find('textarea');
		expect(textarea.classes()).toContain('border-red-500');
		expect(wrapper.find('[role="alert"]').exists()).toBe(true);
		expect(wrapper.find('[role="alert"]').text()).toContain('Error message');

		await wrapper.setProps({ state: BoTextareaState.valid });
		textarea = wrapper.find('textarea');
		expect(textarea.classes()).toContain('border-green-500');
	});

	it('renders description text when provided', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				description: 'This is a description',
			},
		});

		const description = wrapper.find('.text-gray-500');
		expect(description.exists()).toBe(true);
		expect(description.text()).toBe('This is a description');
	});

	it('applies different resize options correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				resize: BoTextareaResize.none,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('style')).toContain('resize: none');

		await wrapper.setProps({ resize: BoTextareaResize.both });
		expect(textarea.attributes('style')).toContain('resize: both');

		await wrapper.setProps({ resize: BoTextareaResize.horizontal });
		expect(textarea.attributes('style')).toContain('resize: horizontal');

		await wrapper.setProps({ resize: BoTextareaResize.vertical });
		expect(textarea.attributes('style')).toContain('resize: vertical');
	});

	it('applies disabled state correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				disabled: false,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('disabled')).toBeUndefined();

		await wrapper.setProps({ disabled: true });
		expect(textarea.attributes('disabled')).toBeDefined();
		expect(textarea.attributes('aria-disabled')).toBe('true');
		expect(textarea.classes()).toContain('cursor-not-allowed');
	});

	it('applies readonly state correctly', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				readonly: false,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('readonly')).toBeUndefined();

		await wrapper.setProps({ readonly: true });
		expect(textarea.attributes('readonly')).toBeDefined();
		expect(textarea.attributes('aria-readonly')).toBe('true');
	});

	it('shows clear button when clearable and has value', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: 'Some text',
				clearable: true,
			},
		});

		const clearButton = wrapper.find('.cursor-pointer');
		expect(clearButton.exists()).toBe(true);

		await clearButton.trigger('click');
		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['']);
		expect(wrapper.emitted('clear')).toBeTruthy();
	});

	it('emits update:modelValue event when textarea value changes', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});

		const textarea = wrapper.find('textarea');
		await textarea.setValue('new value');

		expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value']);
	});

	it('emits focus and blur events', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});

		const textarea = wrapper.find('textarea');
		await textarea.trigger('focus');
		expect(wrapper.emitted('focus')).toBeTruthy();

		await textarea.trigger('blur');
		expect(wrapper.emitted('blur')).toBeTruthy();
	});

	it('applies placeholder text when provided', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				placeholder: 'Enter your message here',
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('placeholder')).toBe('Enter your message here');
	});

	it('applies correct rows attribute', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				rows: 3,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('rows')).toBe('3');

		await wrapper.setProps({ rows: 5 });
		expect(textarea.attributes('rows')).toBe('5');
	});

	it('applies wrap attribute correctly', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				wrap: BoTextareaWrap.soft,
			},
		});

		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('wrap')).toBe('soft');
	});
});
