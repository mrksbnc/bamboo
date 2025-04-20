import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoCard from './BoCard.vue';

describe('BoCard', () => {
	it('renders correctly with default props', () => {
		const wrapper = mount(BoCard);

		expect(wrapper.exists()).toBe(true);
		expect(wrapper.classes()).toContain('bo-card__container');
		expect(wrapper.classes()).toContain('w-fit');
	});

	it('renders title and description when provided', () => {
		const wrapper = mount(BoCard, {
			props: {
				title: 'Card Title',
				description: 'Card Description',
			},
		});

		const title = wrapper.find('.bo-card__title');
		expect(title.exists()).toBe(true);
		expect(title.text()).toBe('Card Title');

		const description = wrapper.find('.bo-card__description');
		expect(description.exists()).toBe(true);
		expect(description.text()).toBe('Card Description');
	});

	it('applies padding classes based on padding prop', async () => {
		const wrapper = mount(BoCard, {
			props: {
				padding: {
					top: true,
					right: true,
					bottom: true,
					left: true,
				},
			},
		});

		expect(wrapper.classes()).toContain('pt-5');
		expect(wrapper.classes()).toContain('pr-5');
		expect(wrapper.classes()).toContain('pb-5');
		expect(wrapper.classes()).toContain('pl-5');

		await wrapper.setProps({
			padding: {
				top: false,
				right: true,
				bottom: false,
				left: true,
			},
		});

		expect(wrapper.classes()).not.toContain('pt-5');
		expect(wrapper.classes()).toContain('pr-5');
		expect(wrapper.classes()).not.toContain('pb-5');
		expect(wrapper.classes()).toContain('pl-5');
	});

	it('applies width styling based on width props', async () => {
		const wrapper = mount(BoCard, {
			props: {
				widthInPx: 300,
			},
		});

		expect(wrapper.attributes('style')).toContain('width: 300px');

		await wrapper.setProps({
			widthInPx: undefined,
			widthInPercent: 50,
		});

		expect(wrapper.attributes('style')).toContain('width: 50%');

		await wrapper.setProps({
			widthInPx: undefined,
			widthInPercent: undefined,
			widthAsTailwindClass: 'w-1/2',
		});

		expect(wrapper.classes()).toContain('w-1/2');
		expect(wrapper.classes()).not.toContain('w-fit');
	});

	it('applies clickable styles when clickable prop is true', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: false,
			},
		});

		expect(wrapper.classes()).toContain('cursor-default');
		expect(wrapper.classes()).not.toContain('cursor-pointer');

		await wrapper.setProps({
			clickable: true,
		});

		expect(wrapper.classes()).toContain('cursor-pointer');
		expect(wrapper.classes()).toContain('hover:bg-gray-50');
		expect(wrapper.classes()).toContain('focus:ring-2');
	});

	it('applies disabled styles when disabled prop is true', async () => {
		const wrapper = mount(BoCard, {
			props: {
				disabled: false,
			},
		});

		expect(wrapper.classes()).not.toContain('opacity-60');
		expect(wrapper.classes()).not.toContain('cursor-not-allowed');

		await wrapper.setProps({
			disabled: true,
		});

		expect(wrapper.classes()).toContain('opacity-60');
		expect(wrapper.classes()).toContain('cursor-not-allowed');
		expect(wrapper.classes()).toContain('pointer-events-none');
	});

	it('emits click event when clickable and not disabled', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
				disabled: false,
			},
		});

		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')?.length).toBe(1);
	});

	it('does not emit click event when disabled', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
				disabled: true,
			},
		});

		await wrapper.trigger('click');
		expect(wrapper.emitted('click')).toBeFalsy();
	});

	it('applies correct accessibility attributes', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
				title: 'Card Title',
			},
		});

		expect(wrapper.attributes('role')).toBe('button');
		expect(wrapper.attributes('tabindex')).toBe('0');
		expect(wrapper.attributes('aria-labelledby')).toContain('card-title-');

		await wrapper.setProps({
			clickable: false,
		});

		expect(wrapper.attributes('role')).toBeUndefined();
		expect(wrapper.attributes('tabindex')).toBeUndefined();
	});

	it('renders content slot', () => {
		const wrapper = mount(BoCard, {
			slots: {
				content: '<div data-test="content-slot">Content</div>',
			},
		});

		expect(wrapper.find('[data-test="content-slot"]').exists()).toBe(true);
	});

	it('renders actions slot', () => {
		const wrapper = mount(BoCard, {
			slots: {
				actions: '<div data-test="actions-slot">Actions</div>',
			},
		});

		expect(wrapper.find('[data-test="actions-slot"]').exists()).toBe(true);
	});

	it('handles enter and space key presses when clickable', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: true,
			},
		});

		await wrapper.trigger('keydown.enter');
		expect(wrapper.emitted('click')).toBeTruthy();
		expect(wrapper.emitted('click')?.length).toBe(1);

		await wrapper.trigger('keydown.space');
		expect(wrapper.emitted('click')?.length).toBe(2);
	});

	it('does not handle key presses when not clickable', async () => {
		const wrapper = mount(BoCard, {
			props: {
				clickable: false,
			},
		});

		await wrapper.trigger('keydown.enter');
		await wrapper.trigger('keydown.space');
		expect(wrapper.emitted('click')).toBeFalsy();
	});
});
