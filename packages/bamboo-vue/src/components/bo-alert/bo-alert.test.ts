import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import BoAlert from './bo-alert.vue';
import { BoIcon } from '../bo-icon';

describe('BoAlert', () => {
	it('renders basic alert', () => {
		const wrapper = mount(BoAlert, {
			slots: {
				default: 'Test alert message',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test alert message');
		expect(wrapper.find('[data-testid]').exists()).toBe(true);
	});

	it('renders with title', () => {
		const wrapper = mount(BoAlert, {
			props: {
				title: 'Alert Title',
			},
			slots: {
				default: 'Test message',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Alert Title');
		expect(wrapper.text()).toContain('Test message');
	});

	it('renders with icon', () => {
		const wrapper = mount(BoAlert, {
			props: {
				icon: 'info',
			},
			slots: {
				default: 'Test message',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.findComponent(BoIcon).exists()).toBe(true);
		expect(wrapper.findComponent(BoIcon).props('icon')).toBe('info');
	});

	it('renders dismissible alert', () => {
		const wrapper = mount(BoAlert, {
			props: {
				dismissible: true,
			},
			slots: {
				default: 'Test message',
			},
			global: {
				components: { BoIcon },
			},
		});

		const closeButton = wrapper.find('button');
		expect(closeButton.exists()).toBe(true);
		expect(closeButton.attributes('aria-label')).toBe('Dismiss alert');
	});

	it('emits dismiss event when close button is clicked', async () => {
		const wrapper = mount(BoAlert, {
			props: {
				dismissible: true,
			},
			slots: {
				default: 'Test message',
			},
			global: {
				components: { BoIcon },
			},
		});

		const closeButton = wrapper.find('button');
		await closeButton.trigger('click');

		expect(wrapper.emitted('dismiss')).toBeTruthy();
		expect(wrapper.emitted('dismiss')).toHaveLength(1);
	});

	it('hides alert when dismissed', async () => {
		const wrapper = mount(BoAlert, {
			props: {
				dismissible: true,
			},
			slots: {
				default: 'Test message',
			},
			global: {
				components: { BoIcon },
			},
		});

		expect(wrapper.find('[data-testid]').exists()).toBe(true);

		const closeButton = wrapper.find('button');
		await closeButton.trigger('click');

		expect(wrapper.find('[data-testid]').exists()).toBe(false);
	});

	it('applies correct variant classes', () => {
		const wrapper = mount(BoAlert, {
			props: {
				variant: 'success',
			},
			slots: {
				default: 'Success message',
			},
			global: {
				components: { BoIcon },
			},
		});

		const alertElement = wrapper.find('[data-testid]');
		expect(alertElement.classes()).toContain('bg-green-50');
		expect(alertElement.classes()).toContain('border-green-200');
		expect(alertElement.classes()).toContain('text-green-900');
	});

	it('applies correct size classes', () => {
		const wrapper = mount(BoAlert, {
			props: {
				size: 'lg',
			},
			slots: {
				default: 'Large alert',
			},
			global: {
				components: { BoIcon },
			},
		});

		const alertElement = wrapper.find('[data-testid]');
		expect(alertElement.classes()).toContain('p-5');
		expect(alertElement.classes()).toContain('gap-4');
	});
});
