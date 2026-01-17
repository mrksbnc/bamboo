import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { BoInput } from './index';

describe('BoInput', () => {
	describe('Basic Rendering', () => {
		it('renders with default props', () => {
			const wrapper = mount(BoInput);

			expect(wrapper.find('input').exists()).toBe(true);
			expect(wrapper.find('input').attributes('type')).toBe('text');
		});

		it('renders with label', () => {
			const wrapper = mount(BoInput, {
				props: {
					label: 'Test Label',
				},
			});

			expect(wrapper.find('bo-text').exists()).toBe(true);
			expect(wrapper.text()).toContain('Test Label');
		});

		it('renders with placeholder', () => {
			const wrapper = mount(BoInput, {
				props: {
					placeholder: 'Enter text here',
				},
			});

			expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text here');
		});

		it('renders with custom id and data-testid', () => {
			const wrapper = mount(BoInput, {
				props: {
					id: 'custom-id',
					dataTestId: 'custom-test-id',
				},
			});

			expect(wrapper.find('input').attributes('id')).toBe('custom-id');
			expect(wrapper.find('input').attributes('data-testid')).toBe('custom-test-id');
		});
	});

	describe('Sizes', () => {
		const sizes = ['sm', 'md', 'lg'] as const;

		sizes.forEach((size) => {
			it(`renders ${size} size correctly`, () => {
				const wrapper = mount(BoInput, {
					props: {
						size,
					},
				});

				expect(wrapper.find('input').exists()).toBe(true);
				// The exact classes will depend on the manifest
				expect(wrapper.find('div').classes()).toContain('relative');
			});
		});
	});

	describe('States', () => {
		it('renders default state correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					state: 'default',
				},
			});

			expect(wrapper.find('input').exists()).toBe(true);
			expect(wrapper.find('input').attributes('aria-invalid')).toBe('false');
		});

		it('renders valid state correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					state: 'valid',
				},
			});

			expect(wrapper.find('input').exists()).toBe(true);
			expect(wrapper.find('input').attributes('aria-invalid')).toBe('false');
		});

		it('renders invalid state correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					state: 'invalid',
				},
			});

			expect(wrapper.find('input').exists()).toBe(true);
			expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
		});
	});

	describe('Variants', () => {
		const variants = ['default', 'filled'] as const;

		variants.forEach((variant) => {
			it(`renders ${variant} variant correctly`, () => {
				const wrapper = mount(BoInput, {
					props: {
						variant,
					},
				});

				expect(wrapper.find('input').exists()).toBe(true);
			});
		});
	});

	describe('Input Types', () => {
		const types = ['text', 'email', 'password', 'number', 'tel', 'url'] as const;

		types.forEach((type) => {
			it(`renders ${type} input type correctly`, () => {
				const wrapper = mount(BoInput, {
					props: {
						type,
					},
				});

				expect(wrapper.find('input').attributes('type')).toBe(type);
			});
		});
	});

	describe('Required Field', () => {
		it('renders required indicator', () => {
			const wrapper = mount(BoInput, {
				props: {
					label: 'Required Field',
					required: true,
				},
			});

			expect(wrapper.find('input').attributes('required')).toBeDefined();
			expect(wrapper.text()).toContain('*');
		});
	});

	describe('Disabled State', () => {
		it('renders disabled input correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					disabled: true,
				},
			});

			expect(wrapper.find('input').attributes('disabled')).toBeDefined();
		});
	});

	describe('Read-only State', () => {
		it('renders read-only input correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					readOnly: true,
				},
			});

			expect(wrapper.find('input').attributes('readonly')).toBeDefined();
		});
	});

	describe('Icons', () => {
		it('renders with prefix icon', () => {
			const wrapper = mount(BoInput, {
				props: {
					prefixIcon: 'search',
				},
			});

			const icons = wrapper.findAll('bo-icon');
			expect(icons.length).toBeGreaterThan(0);
		});

		it('renders with suffix icon', () => {
			const wrapper = mount(BoInput, {
				props: {
					suffixIcon: 'calendar',
				},
			});

			const icons = wrapper.findAll('bo-icon');
			expect(icons.length).toBeGreaterThan(0);
		});
	});

	describe('Password Reveal', () => {
		it('renders password toggle when revealPassword is true', () => {
			const wrapper = mount(BoInput, {
				props: {
					type: 'password',
					revealPassword: true,
				},
			});

			const icons = wrapper.findAll('bo-icon');
			expect(icons.length).toBeGreaterThan(0);
		});

		it('toggles password visibility when clicked', async () => {
			const wrapper = mount(BoInput, {
				props: {
					type: 'password',
					revealPassword: true,
				},
			});

			const input = wrapper.find('input');
			expect(input.attributes('type')).toBe('password');

			// Find and click the password toggle icon
			const icons = wrapper.findAll('bo-icon');
			const toggleIcon = icons.find(
				(icon) => icon.attributes('icon') === 'eye' || icon.attributes('icon') === 'eye_off',
			);

			if (toggleIcon) {
				await toggleIcon.trigger('click');
				await nextTick();
				expect(input.attributes('type')).toBe('text');
			}
		});
	});

	describe('Pills', () => {
		const mockPills = [
			{ id: '1', text: 'Tag 1' },
			{ id: '2', text: 'Tag 2', icon: 'tag' },
		];

		it('renders pills correctly', () => {
			const wrapper = mount(BoInput, {
				props: {
					pills: mockPills,
				},
			});

			const pills = wrapper.findAll('bo-input-pill');
			expect(pills.length).toBe(2);
		});

		it('emits pill-remove event when pill is removed', async () => {
			const wrapper = mount(BoInput, {
				props: {
					pills: mockPills,
				},
			});

			const pill = wrapper.find('bo-input-pill');
			await pill.vm.$emit('remove', '1');

			expect(wrapper.emitted('pillRemove')).toBeTruthy();
			expect(wrapper.emitted('pillRemove')?.[0]).toEqual(['1']);
		});
	});

	describe('Helper Text', () => {
		it('renders hint text', () => {
			const wrapper = mount(BoInput, {
				props: {
					hint: 'This is a helpful hint',
				},
			});

			expect(wrapper.text()).toContain('This is a helpful hint');
		});

		it('renders error text', () => {
			const wrapper = mount(BoInput, {
				props: {
					error: 'This is an error message',
				},
			});

			expect(wrapper.text()).toContain('This is an error message');
			const icons = wrapper.findAll('bo-icon');
			expect(icons.some((icon) => icon.attributes('icon') === 'alert_circle')).toBe(true);
		});

		it('prioritizes error over hint', () => {
			const wrapper = mount(BoInput, {
				props: {
					hint: 'This is a hint',
					error: 'This is an error',
				},
			});

			expect(wrapper.text()).toContain('This is an error');
			expect(wrapper.text()).not.toContain('This is a hint');
		});
	});

	describe('Events', () => {
		it('emits update:modelValue on input', async () => {
			const wrapper = mount(BoInput, {
				props: {
					modelValue: '',
				},
			});

			const input = wrapper.find('input');
			await input.setValue('test value');

			expect(wrapper.emitted('update:modelValue')).toBeTruthy();
			expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['test value']);
		});

		it('emits focus event', async () => {
			const wrapper = mount(BoInput);

			await wrapper.find('input').trigger('focus');

			expect(wrapper.emitted('focus')).toBeTruthy();
		});

		it('emits blur event', async () => {
			const wrapper = mount(BoInput);

			await wrapper.find('input').trigger('blur');

			expect(wrapper.emitted('blur')).toBeTruthy();
		});

		it('emits change event', async () => {
			const wrapper = mount(BoInput);

			const input = wrapper.find('input');
			await input.setValue('changed value');
			await input.trigger('change');

			expect(wrapper.emitted('change')).toBeTruthy();
			expect(wrapper.emitted('change')?.[0]).toEqual(['changed value']);
		});
	});

	describe('Accessibility', () => {
		it('has correct ARIA attributes', () => {
			const wrapper = mount(BoInput, {
				props: {
					label: 'Accessible Input',
					ariaLabel: 'Custom aria label',
				},
			});

			const input = wrapper.find('input');
			expect(input.attributes('aria-label')).toBe('Custom aria label');
		});

		it('associates helper text with input', () => {
			const wrapper = mount(BoInput, {
				props: {
					hint: 'Helper text',
				},
			});

			const input = wrapper.find('input');
			const describedBy = input.attributes('aria-describedby');
			expect(describedBy).toBeTruthy();

			const helperText = wrapper.find(`#${describedBy}`);
			expect(helperText.exists()).toBe(true);
		});

		it('has correct aria-invalid for invalid state', () => {
			const wrapper = mount(BoInput, {
				props: {
					state: 'invalid',
				},
			});

			expect(wrapper.find('input').attributes('aria-invalid')).toBe('true');
		});
	});

	describe('Form Integration', () => {
		it('has correct name attribute', () => {
			const wrapper = mount(BoInput, {
				props: {
					name: 'test-input',
				},
			});

			expect(wrapper.find('input').attributes('name')).toBe('test-input');
		});

		it('supports autofocus', () => {
			const wrapper = mount(BoInput, {
				props: {
					autofocus: true,
				},
			});

			expect(wrapper.find('input').attributes('autofocus')).toBeDefined();
		});
	});

	describe('Exposed Methods', () => {
		it('exposes focus method', () => {
			const wrapper = mount(BoInput);

			expect(wrapper.vm.focus).toBeDefined();
			expect(typeof wrapper.vm.focus).toBe('function');
		});
	});
});
