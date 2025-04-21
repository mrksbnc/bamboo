import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoTimeline from './BoTimeline.vue';

describe('BoTimeline.vue', () => {
	it('renders timeline items', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [
					{ title: 'Event 1', content: 'Content 1', date: '2023-01-01' },
					{ title: 'Event 2', content: 'Content 2', date: '2023-01-02' },
				],
			},
		});
		expect(wrapper.findAll('.bo-timeline__item')).toHaveLength(2);
		expect(wrapper.text()).toContain('Event 1');
		expect(wrapper.text()).toContain('Content 1');
	});

	it('applies custom class', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
				class: 'custom-class',
			},
		});
		expect(wrapper.classes()).toContain('custom-class');
	});

	it('renders with alternate layout', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
				alternate: true,
			},
		});
		expect(wrapper.classes()).toContain('bo-timeline--alternate');
	});

	it('renders with custom color', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
				color: 'primary',
			},
		});
		expect(wrapper.find('.bo-timeline__line').classes()).toContain('bg-blue-600');
	});

	it('renders with custom line style', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
				lineStyle: 'dashed',
			},
		});
		expect(wrapper.find('.bo-timeline__line').classes()).toContain('border-dashed');
	});

	it('renders with custom content template', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
			},
			slots: {
				content: '<div class="custom-content">Custom Content</div>',
			},
		});
		expect(wrapper.find('.custom-content').exists()).toBe(true);
	});

	it('renders with custom title template', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
			},
			slots: {
				title: '<div class="custom-title">Custom Title</div>',
			},
		});
		expect(wrapper.find('.custom-title').exists()).toBe(true);
	});

	it('formats dates according to format', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [{ title: 'Event', content: 'Content', date: '2023-01-01' }],
				dateFormat: 'MM/DD/YYYY',
			},
		});
		expect(wrapper.text()).toContain('01/01/2023');
	});

	it('shows loading state', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [],
				loading: true,
			},
		});
		expect(wrapper.find('.bo-timeline__loading').exists()).toBe(true);
	});

	it('shows empty state', () => {
		const wrapper = mount(BoTimeline, {
			props: {
				items: [],
				emptyText: 'No events',
			},
		});
		expect(wrapper.text()).toContain('No events');
	});
});
