import { InjectKey } from '@/shared/injection-key.js';
import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { ref } from 'vue';
import BoRadio from './bo-radio.vue';

// Mock BoText component
const BoTextMock = {
	name: 'BoText',
	props: ['value', 'size', 'color', 'weight', 'cursor', 'class', 'data-testid', 'id'],
	template: '<span :id="id" :data-testid="$props[\'data-testid\']">{{ value }}</span>',
};

const defaultProps = {
	value: 'test-value',
	label: 'Test Label',
};

const mountComponent = (props = {}, options = {}) => {
	return mount(BoRadio, {
		props: { ...defaultProps, ...props },
		global: {
			components: {
				BoText: BoTextMock,
			},
		},
		...options,
	});
};

describe('BoRadio', () => {
	describe('rendering', () => {
		it('should render radio with default props', () => {
			const wrapper = mountComponent();

			expect(wrapper.find('[data-testid*="radio"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="radio-input"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="radio-label"]').exists()).toBe(true);
		});

		it('should render with custom id', () => {
			const wrapper = mountComponent({ id: 'custom-radio' });

			expect(wrapper.find('[data-testid="custom-radio-radio"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid="custom-radio-radio-input"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid="custom-radio-radio-label"]').exists()).toBe(true);
		});

		it('should render label text', () => {
			const wrapper = mountComponent({ label: 'Custom Label' });
			const label = wrapper.find('[data-testid*="radio-label"]');

			expect(label.text()).toBe('Custom Label');
		});

		it('should render description when provided', () => {
			const wrapper = mountComponent({
				label: 'Test Label',
				description: 'Test Description',
			});

			expect(wrapper.find('[data-testid*="radio-description"]').exists()).toBe(true);
			expect(wrapper.find('[data-testid*="radio-description"]').text()).toBe('Test Description');
		});

		it('should not render label when not provided', () => {
			const wrapper = mountComponent({ label: undefined });

			expect(wrapper.find('[data-testid*="radio-label"]').exists()).toBe(false);
		});

		it('should not render description when not provided', () => {
			const wrapper = mountComponent();

			expect(wrapper.find('[data-testid*="radio-description"]').exists()).toBe(false);
		});
	});

	describe('input attributes', () => {
		it('should set correct input attributes', () => {
			const wrapper = mountComponent({
				id: 'test-radio',
				name: 'test-name',
				value: 'test-value',
			});
			const input = wrapper.find('input[type="radio"]');

			expect(input.attributes('id')).toBe('test-radio');
			expect(input.attributes('name')).toBe('test-name');
			expect(input.attributes('value')).toBe('test-value');
		});

		it('should set aria-describedby when description is provided', () => {
			const wrapper = mountComponent({
				id: 'test-radio',
				description: 'Test description',
			});
			const input = wrapper.find('input[type="radio"]');

			expect(input.attributes('aria-describedby')).toBe('test-radio-radio-description');
		});

		it('should not set aria-describedby when description is not provided', () => {
			const wrapper = mountComponent({ id: 'test-radio' });
			const input = wrapper.find('input[type="radio"]');

			expect(input.attributes('aria-describedby')).toBeUndefined();
		});
	});

	describe('disabled state', () => {
		it('should apply disabled styles when disabled', () => {
			const wrapper = mountComponent({ disabled: true });

			expect(wrapper.find('[data-testid*="radio"]').classes()).toContain('cursor-not-allowed');
			expect(wrapper.find('[data-testid*="radio"]').classes()).toContain('opacity-50');
		});

		it('should disable input when disabled', () => {
			const wrapper = mountComponent({ disabled: true });
			const input = wrapper.find('input[type="radio"]');

			expect(input.attributes('disabled')).toBeDefined();
		});

		it('should set tabindex to -1 when disabled', () => {
			const wrapper = mountComponent({ disabled: true });

			expect(wrapper.find('[data-testid*="radio"]').attributes('tabindex')).toBe('-1');
		});

		it('should not trigger click when disabled', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test', disabled: true },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('click');
			expect(mockRadioGroup.select).not.toHaveBeenCalled();
		});
	});

	describe('radio group integration', () => {
		it('should register with radio group on mount', () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			expect(mockRadioGroup.registerItem).toHaveBeenCalledWith('test-value', false);
		});

		it('should be checked when value matches group selection', () => {
			const mockRadioGroup = {
				selectedValue: 'test-value', // Not a ref, just the value
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			const input = wrapper.find('input[type="radio"]');
			expect((input.element as HTMLInputElement).checked).toBe(true);
		});

		it('should not be checked when value does not match group selection', () => {
			const mockRadioGroup = {
				selectedValue: ref('other-value'),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			const input = wrapper.find('input[type="radio"]');
			expect((input.element as HTMLInputElement).checked).toBe(false);
		});

		it('should use group name when provided', () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'group-name',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			const input = wrapper.find('input[type="radio"]');
			expect(input.attributes('name')).toBe('group-name');
		});

		it('should inherit disabled state from group', () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: true,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			const input = wrapper.find('input[type="radio"]');
			expect(input.attributes('disabled')).toBeDefined();
		});
	});

	describe('interactions', () => {
		it('should call radio group select on click', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('click');
			expect(mockRadioGroup.select).toHaveBeenCalledWith('test-value');
		});

		it('should call radio group select on Space key', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('keydown', { key: 'Space' });
			expect(mockRadioGroup.select).toHaveBeenCalledWith('test-value');
		});

		it('should call radio group select on Enter key', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('keydown', { key: 'Enter' });
			expect(mockRadioGroup.select).toHaveBeenCalledWith('test-value');
		});

		it('should not respond to other keys', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('keydown', { key: 'Tab' });
			expect(mockRadioGroup.select).not.toHaveBeenCalled();
		});

		it('should not trigger actions when no value is provided', async () => {
			const mockRadioGroup = {
				selectedValue: ref(''),
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: undefined },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			await wrapper.find('[data-testid*="radio"]').trigger('click');
			expect(mockRadioGroup.select).not.toHaveBeenCalled();
		});
	});

	describe('standalone radio (without group)', () => {
		it('should work without radio group', () => {
			const wrapper = mountComponent({ name: 'standalone' });
			const input = wrapper.find('input[type="radio"]');

			expect(input.attributes('name')).toBe('standalone');
			expect((input.element as HTMLInputElement).checked).toBe(false);
		});

		it('should not call group methods when no group provided', async () => {
			const wrapper = mountComponent();

			// Should not throw error
			await wrapper.find('[data-testid*="radio"]').trigger('click');
			await wrapper.find('[data-testid*="radio"]').trigger('keydown', { key: 'Space' });
		});
	});

	describe('slots', () => {
		it('should render custom label content via slot', () => {
			const wrapper = mount(BoRadio, {
				props: { value: 'test' },
				slots: {
					label: '<div class="custom-label">Custom Content</div>',
				},
				global: {
					components: { BoText: BoTextMock },
				},
			});

			expect(wrapper.find('.custom-label').exists()).toBe(true);
			expect(wrapper.find('.custom-label').text()).toBe('Custom Content');
		});
	});

	describe('exposed properties', () => {
		it('should expose isChecked property', () => {
			const mockRadioGroup = {
				selectedValue: 'test-value', // Not a ref, just the value
				name: 'test-group',
				disabled: false,
				select: vi.fn(),
				registerItem: vi.fn(),
			};

			const wrapper = mount(BoRadio, {
				props: { value: 'test-value' },
				global: {
					components: { BoText: BoTextMock },
					provide: {
						[InjectKey.RadioGroup]: mockRadioGroup,
					},
				},
			});

			expect(wrapper.vm.isChecked).toBe(true);
		});
	});
});
