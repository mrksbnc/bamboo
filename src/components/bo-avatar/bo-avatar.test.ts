import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BoAvatar from './bo-avatar.vue';
import { BoAvatarShape, BoAvatarIndicatorPosition } from './bo-avatar';
import { BoSize, BoVariant } from '@/shared';

describe('BoAvatar', () => {
	describe('Rendering', () => {
		it('renders avatar element', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.find('.bo-avatar').exists()).toBe(true);
		});

		it('renders image when src is provided', () => {
			const wrapper = mount(BoAvatar, {
				props: { src: 'https://example.com/avatar.jpg', alt: 'User avatar' },
			});
			expect(wrapper.find('.bo-avatar__image').exists()).toBe(true);
			expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg');
			expect(wrapper.find('img').attributes('alt')).toBe('User avatar');
		});

		it('renders text when no src is provided', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__text').exists()).toBe(true);
			expect(wrapper.text()).toContain('AB');
		});

		it('prefers image over text', () => {
			const wrapper = mount(BoAvatar, {
				props: { src: 'https://example.com/avatar.jpg', text: 'AB' },
			});
			expect(wrapper.find('.bo-avatar__image').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar__text').exists()).toBe(false);
		});
	});

	describe('Text Abbreviation', () => {
		it('converts text to uppercase abbreviation', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'john doe' },
			});
			expect(wrapper.text()).toBe('JO');
		});

		it('takes first 2 characters for abbreviation', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'abcdef' },
			});
			expect(wrapper.text()).toBe('AB');
		});

		it('handles single character text', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'a' },
			});
			expect(wrapper.text()).toBe('A');
		});

		it('handles empty text', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: '' },
			});
			expect(wrapper.text()).toBe('');
		});
	});

	describe('Sizes', () => {
		it('applies all size classes', () => {
			for (const size of Object.values(BoSize)) {
				const wrapper = mount(BoAvatar, {
					props: { size },
				});
				expect(wrapper.find(`.bo-avatar--size-${size}`).exists()).toBe(true);
			}
		});

		it('applies default size', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.find('.bo-avatar--size-md').exists()).toBe(true);
		});
	});

	describe('Shapes', () => {
		it('applies all shape classes', () => {
			for (const shape of Object.values(BoAvatarShape)) {
				const wrapper = mount(BoAvatar, {
					props: { shape },
				});
				expect(wrapper.find(`.bo-avatar--shape-${shape}`).exists()).toBe(true);
			}
		});

		it('applies default shape', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.find('.bo-avatar--shape-circle').exists()).toBe(true);
		});
	});

	describe('Indicator', () => {
		it('shows indicator when showIndicator is true', () => {
			const wrapper = mount(BoAvatar, {
				props: { showIndicator: true },
			});
			expect(wrapper.find('.bo-avatar__indicator').exists()).toBe(true);
			expect(wrapper.find('.bo-avatar--with-indicator').exists()).toBe(true);
		});

		it('does not show indicator by default', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.find('.bo-avatar__indicator').exists()).toBe(false);
		});

		it('applies all indicator variant classes', () => {
			for (const variant of Object.values(BoVariant)) {
				const wrapper = mount(BoAvatar, {
					props: { showIndicator: true, indicatorVariant: variant },
				});
				expect(wrapper.find(`.bo-avatar__indicator--${variant}`).exists()).toBe(true);
			}
		});

		it('applies default indicator variant', () => {
			const wrapper = mount(BoAvatar, {
				props: { showIndicator: true },
			});
			expect(wrapper.find('.bo-avatar__indicator--secondary').exists()).toBe(true);
		});

		it('applies all indicator position classes', () => {
			for (const position of Object.values(BoAvatarIndicatorPosition)) {
				const wrapper = mount(BoAvatar, {
					props: { showIndicator: true, indicatorPosition: position },
				});
				expect(wrapper.find(`.bo-avatar__indicator--${position}`).exists()).toBe(true);
			}
		});

		it('applies default indicator position', () => {
			const wrapper = mount(BoAvatar, {
				props: { showIndicator: true },
			});
			expect(wrapper.find('.bo-avatar__indicator--top-right').exists()).toBe(true);
		});
	});

	describe('Custom Colors', () => {
		it('applies custom background color', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'AB', customBackgroundColor: '#ff0000' },
			});
			const style = wrapper.attributes('style');
			expect(style).toContain('background-color');
		});

		it('applies custom text color', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'AB', customTextColor: '#00ff00' },
			});
			const style = wrapper.attributes('style');
			expect(style).toContain('color');
		});

		it('applies both custom colors', () => {
			const wrapper = mount(BoAvatar, {
				props: { text: 'AB', customBackgroundColor: '#ff0000', customTextColor: '#00ff00' },
			});
			const style = wrapper.attributes('style');
			expect(style).toContain('background-color');
			expect(style).toContain('color');
		});
	});

	describe('Custom Attributes', () => {
		it('applies custom CSS class', () => {
			const wrapper = mount(BoAvatar, {
				props: { customCssClass: 'custom-class' },
			});
			expect(wrapper.classes()).toContain('custom-class');
		});

		it('has default id', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.attributes('id')).toBeDefined();
		});

		it('has default data-testid', () => {
			const wrapper = mount(BoAvatar);
			expect(wrapper.attributes('data-testid')).toBeDefined();
		});

		it('applies custom id', () => {
			const wrapper = mount(BoAvatar, {
				props: { id: 'custom-id' },
			});
			expect(wrapper.attributes('id')).toBe('custom-id');
		});

		it('applies custom data-testid', () => {
			const wrapper = mount(BoAvatar, {
				props: { dataTestId: 'custom-testid' },
			});
			expect(wrapper.attributes('data-testid')).toBe('custom-testid');
		});
	});

	describe('Image Error Handling', () => {
		it('logs error when image fails to load', async () => {
			const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const wrapper = mount(BoAvatar, {
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
