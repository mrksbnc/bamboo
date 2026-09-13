import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoAccordionItem from './bo-accordion-item.vue';
import BoAccordion from './bo-accordion.vue';

describe('BoAccordion', () => {
	it('renders accessible items and toggles model values', async () => {
		const wrapper = mount(BoAccordion, {
			props: { multiple: true },
			slots: {
				default: {
					components: { BoAccordionItem },
					template:
						'<BoAccordionItem value="one" trigger="One"><template #content>Content</template></BoAccordionItem>',
				},
			},
		});
		const trigger = wrapper.find('button');
		expect(trigger.attributes('aria-expanded')).toBe('false');
		await trigger.trigger('click');
		expect(trigger.attributes('aria-expanded')).toBe('true');
		expect(wrapper.emitted('update:modelValue')).toEqual([[['one']]]);
	});
});
