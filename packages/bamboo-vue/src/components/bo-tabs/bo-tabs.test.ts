import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, h, ref } from 'vue';
import BoTabsContent from './bo-tabs-content.vue';
import BoTabsList from './bo-tabs-list.vue';
import BoTabsTrigger from './bo-tabs-trigger.vue';
import BoTabs from './bo-tabs.vue';

const TabsFixture = defineComponent({
	setup() {
		const value = ref('first');
		return () =>
			h(
				BoTabs,
				{ modelValue: value.value, 'onUpdate:modelValue': (next: string) => (value.value = next) },
				{
					default: () => [
						h(BoTabsList, null, {
							default: () => [
								h(BoTabsTrigger, { value: 'first' }, () => 'First'),
								h(BoTabsTrigger, { value: 'second' }, () => 'Second'),
							],
						}),
						h(BoTabsContent, { value: 'first' }, () => 'First content'),
						h(BoTabsContent, { value: 'second' }, () => 'Second content'),
					],
				},
			);
	},
});

describe('BoTabs', () => {
	it('activates the default tab and switches on trigger click', async () => {
		const wrapper = mount(TabsFixture);
		const triggers = wrapper.findAll('[role="tab"]');

		expect(triggers[0].attributes('aria-selected')).toBe('true');
		await triggers[1].trigger('click');
		expect(triggers[1].attributes('aria-selected')).toBe('true');
		expect(wrapper.find('[role="tabpanel"]')?.text()).toContain('Second content');
	});
});
