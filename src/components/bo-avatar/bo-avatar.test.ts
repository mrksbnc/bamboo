import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoAvatar from './bo-avatar.vue';
import { BoAvatarShape } from './bo-avatar';
import { BoSize, BoVariant } from '@/shared';
import { BoText } from '@/components/bo-text';

describe('BoAvatar', () => {
	const mountOptions = {
		global: {
			components: {
				BoText,
			},
		},
	};

	describe('Rendering', () => {
		it('renders avatar element', () => {
			const wrapper = mount(BoAvatar, { ...mountOptions, props: { text: 'AB' } });
			expect(wrapper.find('.bo-avatar').exists()).toBe(true);
		});

		it('has role="img"', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.attributes('role')).toBe('img');
		});

		it('renders image when src is provided', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { src: 'https://example.com/avatar.jpg', alt: 'User avatar', text: 'Ab' },
			});
			expect(wrapper.find('.bo-avatar__image').exists()).toBe(true);
			expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg');
			expect(wrapper.find('img').attributes('alt')).toBe('User avatar');
			expect(wrapper.find('img').attributes('aria-hidden')).toBe('true');
		});

		it('renders text when no src is provided', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__text').exists()).toBe(true);
			expect(wrapper.text()).toContain('AB');
		});

		it('prefers image over text', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { src: 'https://example.com/avatar.jpg', text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__image').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar__text').exists()).toBe(false);
		});
	});

	describe('Text Abbreviation', () => {
		it('converts text to uppercase abbreviation', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'john doe' },
			});
			expect(wrapper.text()).toBe('JO');
		});

		it('takes first 2 characters for abbreviation', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'abcdef' },
			});
			expect(wrapper.text()).toBe('AB');
		});

		it('handles single character text', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'a' },
			});
			expect(wrapper.text()).toBe('A');
		});

		it('handles empty text', async () => {
			const consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: '' },
			});

			await wrapper.vm.$nextTick();

			expect(consoleWarnSpy).toHaveBeenCalledWith(
				expect.stringContaining(
					'[BoAvatar]: Missing both "src" and "text" props. Please provide at least one to display the avatar content.',
				),
			);

			consoleWarnSpy.mockRestore();
		});
	});

	describe('Sizes', () => {
		it('applies all size classes', () => {
			for (const size of Object.values(BoSize)) {
				const wrapper = mount(BoAvatar, {
					...mountOptions,
					props: { size, text: 'AB' },
				});
				expect(wrapper.find(`.bo-avatar--size-${size}`).exists()).toBe(true);
			}
		});

		it('applies default size', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar--size-md').exists()).toBe(true);
		});
	});

	describe('Shapes', () => {
		it('applies all shape classes', () => {
			for (const shape of Object.values(BoAvatarShape)) {
				const wrapper = mount(BoAvatar, {
					...mountOptions,
					props: { shape, text: 'AB' },
				});
				expect(wrapper.find(`.bo-avatar--shape-${shape}`).exists()).toBe(true);
			}
		});

		it('applies default shape', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar--shape-circle').exists()).toBe(true);
		});
	});

	describe('Indicator', () => {
		it('shows indicator when showIndicator is true', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { showIndicator: true, text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__indicator').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar--with-indicator').exists()).toBe(true);
		});

		it('does not show indicator by default', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__indicator').exists()).toBe(false);
		});

		it('applies all indicator variant classes', () => {
			for (const variant of Object.values(BoVariant)) {
				const wrapper = mount(BoAvatar, {
					...mountOptions,
					props: { showIndicator: true, indicatorVariant: variant, text: 'AB' },
				});
				expect(wrapper.find(`.bo-avatar__indicator--${variant}`).exists()).toBe(true);
			}
		});

		it('applies default indicator variant', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { showIndicator: true, text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__indicator--secondary').exists()).toBe(true);
		});
	});

	describe('Custom Colors', () => {
		it('applies custom background color', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB', customBackgroundColor: '#ff0000' },
			});
			const element = wrapper.element as HTMLElement;
			expect(element.style.backgroundColor).toBe('rgb(255, 0, 0)');
		});

		it('applies custom border color', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB', customBorderColor: '#0000ff' },
			});
			const element = wrapper.element as HTMLElement;
			expect(element.style.borderColor).toBe('rgb(0, 0, 255)');
		});

		it('applies custom text color', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB', customTextColor: '#00ff00' },
			});
			const element = wrapper.element as HTMLElement;
			expect(element.style.color).toBe('rgb(0, 255, 0)');
		});

		it('applies all custom colors', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: {
					text: 'AB',
					customBackgroundColor: '#ff0000',
					customTextColor: '#00ff00',
					customBorderColor: '#0000ff',
				},
			});
			const element = wrapper.element as HTMLElement;
			expect(element.style.borderColor).toBe('rgb(0, 0, 255)');
			expect(element.style.color).toBe('rgb(0, 255, 0)');
			expect(element.style.backgroundColor).toBe('rgb(255, 0, 0)');
		});
	});

	describe('Accessibility', () => {
		it('uses ariaLabel when provided', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB', ariaLabel: 'User profile picture' },
			});
			expect(wrapper.attributes('aria-label')).toBe('User profile picture');
		});

		it('falls back to alt text for aria-label', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { src: 'https://example.com/avatar.jpg', alt: 'John Doe' },
			});
			expect(wrapper.attributes('aria-label')).toBe('John Doe');
		});

		it('falls back to text for aria-label', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'JD' },
			});
			expect(wrapper.attributes('aria-label')).toBe('JD');
		});

		it('uses default aria-label when no props provided', () => {
			const wrapper = mount(BoAvatar, mountOptions);
			expect(wrapper.attributes('aria-label')).toBe('Avatar');
		});
	});

	describe('Custom Attributes', () => {
		it('applies custom CSS class', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { customCssClass: 'custom-class', text: 'AB' },
			});
			expect(wrapper.classes()).toContain('custom-class');
		});

		it('has default id', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.attributes('id')).toBeDefined();
		});

		it('has default data-testid', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { text: 'AB' },
			});
			expect(wrapper.attributes('data-testid')).toBeDefined();
		});

		it('applies custom id', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { id: 'custom-id', text: 'AB' },
			});
			expect(wrapper.attributes('id')).toBe('custom-id');
		});

		it('applies custom data-testid', () => {
			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { dataTestId: 'custom-testid', text: 'AB' },
			});
			expect(wrapper.attributes('data-testid')).toBe('custom-testid');
		});
	});

	describe('Image Error Handling', () => {
		it('logs error when image fails to load', async () => {
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const wrapper = mount(BoAvatar, {
				...mountOptions,
				props: { src: 'https://example.com/invalid.jpg', alt: 'User avatar' },
			});

			const img = wrapper.find('img');
			await img.trigger('error');

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Avatar image failed to load:',
				expect.any(Event),
			);

			consoleErrorSpy.mockRestore();
		});
	});
});
