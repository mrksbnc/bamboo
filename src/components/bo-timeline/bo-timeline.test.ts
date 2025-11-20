import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import BoTimeline from './bo-timeline.vue';
import BoTimelineItem from './bo-timeline-item.vue';
import BoText from '@/components/bo-text/bo-text.vue';
import BoIcon from '@/components/bo-icon/bo-icon.vue';

describe('BoTimeline', () => {
	test('should render timeline items', () => {
		const wrapper = mount(BoTimeline, {
			slots: {
				default: `
					<bo-timeline-item title="Item 1" />
					<bo-timeline-item title="Item 2" />
				`,
			},
			global: {
				components: { BoTimelineItem, BoText, BoIcon },
			},
		});

		expect(wrapper.findAll('.bo-timeline-item')).toHaveLength(2);
	});
});

describe('BoTimelineItem', () => {
	test('should render with title', () => {
		const wrapper = mount(BoTimelineItem, {
			props: {
				title: 'Test Title',
			},
			global: {
				components: { BoText, BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Test Title');
	});

	test('should render with description', () => {
		const wrapper = mount(BoTimelineItem, {
			props: {
				title: 'Title',
				description: 'Description',
			},
			global: {
				components: { BoText, BoIcon },
			},
		});

		expect(wrapper.text()).toContain('Description');
	});

	test('should render with timestamp', () => {
		const wrapper = mount(BoTimelineItem, {
			props: {
				title: 'Title',
				timestamp: '2 hours ago',
			},
			global: {
				components: { BoText, BoIcon },
			},
		});

		expect(wrapper.text()).toContain('2 hours ago');
	});
});
