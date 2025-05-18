import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BoPopoverPlacement, BoPopoverTrigger } from './bo-popover';
import BoPopover from './bo-popover.vue';

describe('BoPopover.vue', () => {
	it('renders trigger element', () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('button').text()).toBe('Click me');
	});

	it('shows content when clicked', async () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Click me</button>',
				default: '<div class="popover-content">Content</div>',
			},
		});
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('.popover-content').exists()).toBe(true);
	});

	it('applies custom class', () => {
		const wrapper = mount(BoPopover, {
			props: { popoverClass: 'custom-class' },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover').classes()).toContain('custom-class');
	});

	it('renders with specified placement', () => {
		const wrapper = mount(BoPopover, {
			props: { placement: BoPopoverPlacement.top },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover').exists()).toBe(true);
	});

	it('renders with specified trigger', () => {
		const wrapper = mount(BoPopover, {
			props: { trigger: BoPopoverTrigger.hover },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover-trigger').exists()).toBe(true);
	});

	it('renders with specified theme', () => {
		const wrapper = mount(BoPopover, {
			props: { theme: 'dark' },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover__content').classes()).toContain('bo-popover--dark');
	});

	it('closes when clicking outside', async () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Click me</button>',
				default: '<div class="popover-content">Content</div>',
			},
		});
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('.popover-content').exists()).toBe(true);
		await wrapper.trigger('click');
		expect(wrapper.find('.popover-content').exists()).toBe(false);
	});

	it('stays open when clicking inside', async () => {
		const wrapper = mount(BoPopover, {
			slots: {
				trigger: '<button>Click me</button>',
				default: '<div class="popover-content">Content</div>',
			},
		});
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('.popover-content').exists()).toBe(true);
		await wrapper.find('.popover-content').trigger('click');
		expect(wrapper.find('.popover-content').exists()).toBe(true);
	});

	it('renders with custom offset', () => {
		const wrapper = mount(BoPopover, {
			props: { offset: 20 },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover').exists()).toBe(true);
	});

	it('renders with custom width', () => {
		const wrapper = mount(BoPopover, {
			props: { width: 300 },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover__content').attributes('style')).toContain('width: 300px');
	});

	it('renders with arrow', () => {
		const wrapper = mount(BoPopover, {
			props: { arrow: true },
			slots: {
				trigger: '<button>Click me</button>',
			},
		});
		expect(wrapper.find('.bo-popover-arrow').exists()).toBe(true);
	});
});
