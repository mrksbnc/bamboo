import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoTextarea } from '.';
import {
	BoTextareaResize,
	BoTextareaSize,
	BoTextareaState,
	BoTextareaVariant,
	BoTextareaWrap,
} from './constants';

describe('BoTextarea', () => {
	it('renders properly', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});
		expect(wrapper.find('textarea').exists()).toBe(true);
	});

	it('displays label when provided', () => {
		const label = 'Test Label';
		const wrapper = mount(BoTextarea, {
			props: {
				label,
				modelValue: '',
			},
		});
		expect(wrapper.find('label').text()).toContain(label);
	});

	it('shows required asterisk when required is true', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				label: 'Test Label',
				required: true,
				modelValue: '',
			},
		});
		const requiredAsterisk = wrapper.find('label span.text-red-500');
		expect(requiredAsterisk.exists()).toBe(true);
		expect(requiredAsterisk.attributes('aria-hidden')).toBe('true');
		expect(requiredAsterisk.text()).toContain('*');
	});

	it('updates modelValue on input', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.setValue('Test input');
		expect(wrapper.emitted()).toHaveProperty('update:modelValue');
		expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Test input']);
	});

	it('emits focus event', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.trigger('focus');
		expect(wrapper.emitted()).toHaveProperty('focus');
	});

	it('emits blur event', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		await textarea.trigger('blur');
		expect(wrapper.emitted()).toHaveProperty('blur');
	});

	it('applies different sizes correctly', () => {
		const sizes = [
			{ size: BoTextareaSize.small, expectedClasses: ['px-3', 'py-1.5', 'text-xs'] },
			{ size: BoTextareaSize.default, expectedClasses: ['px-3', 'py-2', 'text-sm'] },
			{ size: BoTextareaSize.large, expectedClasses: ['px-4', 'py-3', 'text-base'] },
		];

		sizes.forEach(({ size, expectedClasses }) => {
			const wrapper = mount(BoTextarea, {
				props: {
					size,
					modelValue: '',
				},
			});
			const textarea = wrapper.find('textarea');
			const classes = textarea.classes().join(' ');

			expectedClasses.forEach((expectedClass) => {
				expect(classes).toContain(expectedClass);
			});
		});
	});

	it('applies different variants correctly', () => {
		const variants = [
			{
				variant: BoTextareaVariant.default,
				expectedClass: 'border-gray-300',
			},
			{
				variant: BoTextareaVariant.filled,
				expectedClass: 'bg-gray-100',
			},
		];

		variants.forEach(({ variant, expectedClass }) => {
			const wrapper = mount(BoTextarea, {
				props: {
					variant,
					modelValue: '',
				},
			});
			const textarea = wrapper.find('textarea');
			expect(textarea.classes().join(' ')).toContain(expectedClass);
		});
	});

	it('applies state styling correctly', () => {
		const states = [
			{
				state: BoTextareaState.invalid,
				expectedClass: 'border-red-500',
			},
			{
				state: BoTextareaState.valid,
				expectedClass: 'border-green-500',
			},
		];

		states.forEach(({ state, expectedClass }) => {
			const wrapper = mount(BoTextarea, {
				props: {
					state,
					modelValue: '',
				},
			});
			const textarea = wrapper.find('textarea');
			expect(textarea.classes().join(' ')).toContain(expectedClass);
		});
	});

	it('displays description when provided', () => {
		const description = 'This is a test description';
		const wrapper = mount(BoTextarea, {
			props: {
				description,
				modelValue: '',
			},
		});
		expect(wrapper.text()).toContain(description);
	});

	it('displays error message when in invalid state', () => {
		const errorMessage = 'This is an error message';
		const wrapper = mount(BoTextarea, {
			props: {
				errorMessage,
				state: BoTextareaState.invalid,
				modelValue: '',
			},
		});
		expect(wrapper.text()).toContain(errorMessage);
	});

	it('does not display error message when not in invalid state', () => {
		const errorMessage = 'This is an error message';
		const wrapper = mount(BoTextarea, {
			props: {
				errorMessage,
				state: BoTextareaState.valid,
				modelValue: '',
			},
		});
		expect(wrapper.text()).not.toContain(errorMessage);
	});

	it('clears textarea when clear button is clicked', async () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: 'Test value',
				clearable: true,
			},
		});
		const clearButton = wrapper.find('.cursor-pointer');
		await clearButton.trigger('click');
		expect(wrapper.emitted()).toHaveProperty('clear');
		expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['']);
	});

	it('applies disabled styling and attributes', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				disabled: true,
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('disabled')).toBeDefined();
		expect(textarea.classes().join(' ')).toContain('cursor-not-allowed');
	});

	it('applies readonly styling and attributes', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				readonly: true,
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('readonly')).toBeDefined();
	});

	it('applies rows attribute correctly', () => {
		const rows = 8;
		const wrapper = mount(BoTextarea, {
			props: {
				rows,
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('rows')).toBe(rows.toString());
	});

	it('applies resize style correctly', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				modelValue: '',
				resize: BoTextareaResize.none,
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('style')).toContain('resize: none');
	});

	it('applies custom resize style when specified', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				resize: BoTextareaResize.vertical,
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('style')).toContain('resize: vertical');
	});

	it('applies wrap attribute correctly when specified', () => {
		const wrapper = mount(BoTextarea, {
			props: {
				wrap: BoTextareaWrap.hard,
				modelValue: '',
			},
		});
		const textarea = wrapper.find('textarea');
		expect(textarea.attributes('wrap')).toBe(BoTextareaWrap.hard);
	});
});
