import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import BoHoverCardContent from './bo-hover-card-content.vue';
import BoHoverCardTrigger from './bo-hover-card-trigger.vue';
import BoHoverCard from './bo-hover-card.vue';

describe('BoHoverCard', () => {
	it('opens after its configured delay', async () => {
		vi.useFakeTimers();
		const wrapper = mount(BoHoverCard, {
			props: { openDelay: 10 },
			slots: {
				default: {
					components: { BoHoverCardTrigger, BoHoverCardContent },
					template:
						'<BoHoverCardTrigger>Profile</BoHoverCardTrigger><BoHoverCardContent>Bio</BoHoverCardContent>',
				},
			},
		});

		await wrapper.find('.bo-hover-card-trigger').trigger('mouseenter');
		vi.advanceTimersByTime(10);
		await nextTick();
		expect(document.body.textContent).toContain('Bio');
		wrapper.unmount();
		vi.useRealTimers();
	});
});
