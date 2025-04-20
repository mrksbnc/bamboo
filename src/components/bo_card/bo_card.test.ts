import { BoCard } from '@/components/bo_card';
import { mount } from '@vue/test-utils';
import { describe, expect, suite, test } from 'vitest';

describe('bo_card.vue', () => {
	suite('styling and structure', () => {
		test('the card should have the default classes', () => {
			const wrapper = mount(BoCard);

			expect(wrapper.find('.bo-card__container').classes()).toContain('bo-card__container');
			expect(wrapper.find('.bo-card__container').classes()).toContain('w-fit');
			expect(wrapper.find('.bo-card__container').classes()).toContain('cursor-default');
			expect(wrapper.find('.bo-card__container').classes()).toContain('rounded-lg');
			expect(wrapper.find('.bo-card__container').classes()).toContain('border');
			expect(wrapper.find('.bo-card__container').classes()).toContain('border-gray-200');
			expect(wrapper.find('.bo-card__container').classes()).toContain('bg-white');
			expect(wrapper.find('.bo-card__container').classes()).toContain('shadow-sm');
			expect(wrapper.find('.bo-card__container').classes()).toContain('my-4');

			expect(wrapper.find('.bo-card__content').classes()).toContain('overflow-y-auto');
			expect(wrapper.find('.bo-card__content').classes()).toContain('overflow-x-hidden');
			expect(wrapper.find('.bo-card__content').classes()).toContain('bo-card__content');
			expect(wrapper.find('.bo-card__content').classes()).toContain('flex');
			expect(wrapper.find('.bo-card__content').classes()).toContain('flex-col');
			expect(wrapper.find('.bo-card__content').classes()).toContain('gap-4');
		});
	});

	suite('Title and description', () => {
		test('the card should be able to display a title and description', () => {
			const wrapper = mount(BoCard, {
				props: {
					title: 'Title',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
				},
			});

			expect(wrapper.find('.bo-card__title').text()).toBe('Title');
			expect(wrapper.find('.bo-card__description').text()).toBe(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
			);
		});

		test('the card title should have correct typography styles', () => {
			const wrapper = mount(BoCard, {
				props: { title: 'Title' },
			});

			const title = wrapper.find('.bo-card__title');
			expect(title.classes()).toContain('text-lg');
			expect(title.classes()).toContain('font-semibold');
			expect(title.classes()).toContain('leading-tight');
		});

		test('the card description should have correct typography styles', () => {
			const wrapper = mount(BoCard, {
				props: { description: 'Description' },
			});

			const description = wrapper.find('.bo-card__description');
			expect(description.classes()).toContain('text-sm');
		});
	});

	suite('slot', () => {
		test('the card should be able to display a slot', () => {
			const wrapper = mount(BoCard, {
				slots: {
					content: `
						<div>
							<span class="title">Hello world!</span>
							<span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>`,
				},
			});

			expect(wrapper.find('.title').text()).toBe('Hello world!');
			expect(wrapper.find('.description').text()).toBe(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			);
		});
	});

	suite('padding', () => {
		test('the card should have the default padding', () => {
			const wrapper = mount(BoCard, {
				props: {
					padding: {
						top: true,
						right: true,
						bottom: true,
						left: true,
					},
				},
				slots: {
					content: '<div>Hello world!</div>',
				},
			});

			expect(wrapper.classes()).include('pt-5');
			expect(wrapper.classes()).include('pr-5');
			expect(wrapper.classes()).include('pb-5');
			expect(wrapper.classes()).include('pl-5');
		});

		test('should be able to have only top padding', () => {
			const wrapper = mount(BoCard, {
				props: {
					padding: {
						top: true,
						right: false,
						bottom: false,
						left: false,
					},
				},
			});

			expect(wrapper.classes()).include('pt-5');
			expect(wrapper.classes()).not.include('pr-5');
			expect(wrapper.classes()).not.include('pb-5');
			expect(wrapper.classes()).not.include('pl-5');
		});

		test('should be able to have only right padding', () => {
			const wrapper = mount(BoCard, {
				props: {
					padding: {
						top: false,
						right: true,
						bottom: false,
						left: false,
					},
				},
			});

			expect(wrapper.classes()).include('pr-5');
			expect(wrapper.classes()).not.include('pt-5');
			expect(wrapper.classes()).not.include('pb-5');
			expect(wrapper.classes()).not.include('pl-5');
		});

		test('should be able to have only bottom padding', () => {
			const wrapper = mount(BoCard, {
				props: {
					padding: {
						top: false,
						right: false,
						bottom: true,
						left: false,
					},
				},
			});

			expect(wrapper.classes()).include('pb-5');
			expect(wrapper.classes()).not.include('pt-5');
			expect(wrapper.classes()).not.include('pr-5');
			expect(wrapper.classes()).not.include('pl-5');
		});

		test('should be able to have only left padding', () => {
			const wrapper = mount(BoCard, {
				props: {
					padding: {
						top: false,
						right: false,
						bottom: false,
						left: true,
					},
				},
			});

			expect(wrapper.classes()).include('pl-5');
			expect(wrapper.classes()).not.include('pt-5');
			expect(wrapper.classes()).not.include('pr-5');
			expect(wrapper.classes()).not.include('pb-5');
		});
	});

	suite('clickable', () => {
		test('the card should be able to be clickable', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
				},
			});

			expect(wrapper.classes()).toContain('cursor-pointer');
			expect(wrapper.classes()).toContain('hover:bg-gray-50');
			expect(wrapper.classes()).toContain('dark:hover:bg-gray-700');
			expect(wrapper.classes()).toContain('transition-colors');
			expect(wrapper.classes()).toContain('focus:outline-none');
			expect(wrapper.classes()).toContain('focus:ring-2');
		});

		test('the card should not be clickable if the prop is set to false', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: false,
				},
			});

			expect(wrapper.classes()).not.toContain('cursor-pointer');
			expect(wrapper.classes()).not.toContain('hover:bg-gray-50');
			expect(wrapper.classes()).toContain('cursor-default');
		});
	});

	suite('accessibility features', () => {
		test('should have correct role when clickable', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
					title: 'Card Title',
				},
			});

			expect(wrapper.attributes('role')).toBe('button');
			expect(wrapper.attributes('tabindex')).toBe('0');
		});

		test('should not have button role when not clickable', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: false,
				},
			});

			expect(wrapper.attributes('role')).toBeUndefined();
			expect(wrapper.attributes('tabindex')).toBeUndefined();
		});

		test('should have aria-labelledby attribute when title is provided', () => {
			const wrapper = mount(BoCard, {
				props: {
					title: 'Card Title',
				},
			});

			// Get the card container
			const card = wrapper.find('.bo-card__container');

			// Check that aria-labelledby points to the title ID
			const titleId = wrapper.find('.bo-card__title').attributes('id');
			expect(card.attributes('aria-labelledby')).toBe(titleId);
		});

		test('should emit click event when activated via keyboard', async () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
				},
			});

			// Test Enter key
			await wrapper.trigger('keydown.enter');
			expect(wrapper.emitted()).toHaveProperty('click');

			// Test Space key
			await wrapper.trigger('keydown.space');
			expect(wrapper.emitted('click')).toHaveLength(2);
		});

		test('should have aria-disabled attribute when disabled', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
					disabled: true,
				},
			});

			expect(wrapper.attributes('aria-disabled')).toBe('true');
			expect(wrapper.classes()).toContain('opacity-60');
			expect(wrapper.classes()).toContain('cursor-not-allowed');
		});
	});

	suite('width in px', () => {
		test('the card should have the default width', () => {
			const wrapper = mount(BoCard);

			expect(wrapper.classes()).toContain('w-fit');
		});

		test('the card should be able to have a width in px', () => {
			const wrapper = mount(BoCard, {
				props: {
					widthInPx: 200,
				},
			});

			expect(wrapper.attributes('style')).toBe('width: 200px;');
		});
	});

	suite('width in percent', () => {
		test('the card should have the default width', () => {
			const wrapper = mount(BoCard);

			expect(wrapper.classes()).toContain('w-fit');
		});

		test('the card should be able to have a width in percent', () => {
			const wrapper = mount(BoCard, {
				props: {
					widthInPercent: 50,
				},
			});

			expect(wrapper.attributes('style')).toBe('width: 50%;');
		});
	});

	suite('width as tailwind class', () => {
		test('the card should have the default width', () => {
			const wrapper = mount(BoCard);

			expect(wrapper.classes()).toContain('w-fit');
		});

		test('the card should be able to have a width as a tailwind class', () => {
			const wrapper = mount(BoCard, {
				props: {
					widthAsTailwindClass: 'w-1/2',
				},
			});

			expect(wrapper.classes()).toContain('w-1/2');
		});
	});

	suite('Events', () => {
		test('emits click event when clicked', async () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
				},
			});

			await wrapper.trigger('click');
			expect(wrapper.emitted()).toHaveProperty('click');
		});

		test('does not emit click event when not clickable', async () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: false,
				},
			});

			await wrapper.trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});

		test('does not emit click event when disabled', async () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: true,
					disabled: true,
				},
			});

			await wrapper.trigger('click');
			expect(wrapper.emitted('click')).toBeFalsy();
		});
	});
});
