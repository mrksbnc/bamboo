import { describe, test, suite, expect } from 'vitest';
import { BoCard } from '@/components/bo_card';
import { mount } from '@vue/test-utils';

describe('bo_card.vue', () => {
	suite('title and description', () => {
		test('the card should have the default classes', () => {
			const wrapper = mount(BoCard);

			expect(wrapper.find('.bo-card__container').classes()).toContain('bo-card__container');
			expect(wrapper.find('.bo-card__container').classes()).toContain('w-fit');
			expect(wrapper.find('.bo-card__container').classes()).toContain('max-w-md');
			expect(wrapper.find('.bo-card__container').classes()).toContain('cursor-default');
			expect(wrapper.find('.bo-card__container').classes()).toContain('rounded-lg');
			expect(wrapper.find('.bo-card__container').classes()).toContain('border');
			expect(wrapper.find('.bo-card__container').classes()).toContain('border-gray-300');
			expect(wrapper.find('.bo-card__container').classes()).toContain('bg-white');
			expect(wrapper.find('.bo-card__container').classes()).toContain('shadow-lg');

			expect(wrapper.find('.bo-card__content').classes()).toContain('overflow-y-auto');
			expect(wrapper.find('.bo-card__content').classes()).toContain('overflow-x-hidden');
			expect(wrapper.find('.bo-card__content').classes()).toContain('bo-card__content');
			expect(wrapper.find('.bo-card__content').classes()).toContain('flex');
			expect(wrapper.find('.bo-card__content').classes()).toContain('flex-col');
			expect(wrapper.find('.bo-card__content').classes()).toContain('gap-2');
		});
	});

	suite('Title and description', () => {
		test('the card should be able to display a title and description', () => {
			const wrapper = mount(BoCard, {
				props: {
					title: 'Title',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
				},
			});

			expect(wrapper.find('.bo-card__title').text()).toBe('Title');
			expect(wrapper.find('.bo-card__description').text()).toBe(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
			);
		});
	});

	suite('slot', () => {
		test('the card should be able to display a slot', () => {
			const wrapper = mount(BoCard, {
				slots: {
					content: `
						<div>
							<span class="title">Hello world!</span>
							<span class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</span>
						</div>`,
				},
			});

			expect(wrapper.find('.title').text()).toBe('Hello world!');
			expect(wrapper.find('.description').text()).toBe(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
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

			expect(wrapper.classes()).include('pt-4');
			expect(wrapper.classes()).include('pr-4');
			expect(wrapper.classes()).include('pb-4');
			expect(wrapper.classes()).include('pl-4');
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

			expect(wrapper.classes()).include('pt-4');
			expect(wrapper.classes()).not.include('pr-4');
			expect(wrapper.classes()).not.include('pb-4');
			expect(wrapper.classes()).not.include('pl-4');
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

			expect(wrapper.classes()).include('pr-4');
			expect(wrapper.classes()).not.include('pt-4');
			expect(wrapper.classes()).not.include('pb-4');
			expect(wrapper.classes()).not.include('pl-4');
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

			expect(wrapper.classes()).include('pb-4');
			expect(wrapper.classes()).not.include('pt-4');
			expect(wrapper.classes()).not.include('pr-4');
			expect(wrapper.classes()).not.include('pl-4');
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

			expect(wrapper.classes()).include('pl-4');
			expect(wrapper.classes()).not.include('pt-4');
			expect(wrapper.classes()).not.include('pr-4');
			expect(wrapper.classes()).not.include('pb-4');
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
			expect(wrapper.classes()).toContain('hover:bg-gray-100');
		});

		test('the card should not be clickable if the prop is set to false', () => {
			const wrapper = mount(BoCard, {
				props: {
					clickable: false,
				},
			});

			expect(wrapper.classes()).not.toContain('cursor-pointer');
			expect(wrapper.classes()).not.toContain('hover:bg-gray-100');
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
});
