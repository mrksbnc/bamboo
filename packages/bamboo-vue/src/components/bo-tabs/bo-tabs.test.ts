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

	it('supports manual activation, disabled tabs, and keyboard navigation', async () => {
		const wrapper = mount(BoTabs, {
			attachTo: document.body,
			props: { defaultValue: 'first', activationMode: 'manual', orientation: 'vertical' },
			global: { components: { BoTabsList, BoTabsTrigger, BoTabsContent } },
			slots: {
				default:
					'<BoTabsList><BoTabsTrigger value="first">First</BoTabsTrigger><BoTabsTrigger value="disabled" disabled>Disabled</BoTabsTrigger><BoTabsTrigger value="second">Second</BoTabsTrigger></BoTabsList><BoTabsContent value="first" forceMount>First content</BoTabsContent><BoTabsContent value="second">Second content</BoTabsContent>',
			},
		});
		const triggers = wrapper.findAll('[role="tab"]');
		expect(wrapper.attributes('data-orientation')).toBe('vertical');
		expect(triggers[1]?.attributes('disabled')).toBeDefined();
		await triggers[0]!.trigger('keydown', { key: 'ArrowDown' });
		expect(document.activeElement).toBe(triggers[2]!.element);
		expect(triggers[2]?.attributes('aria-selected')).toBe('false');
		await triggers[2]!.trigger('keydown', { key: 'Enter' });
		expect(triggers[2]?.attributes('aria-selected')).toBe('true');
		expect(wrapper.findAll('[role="tabpanel"]')).toHaveLength(2);
	});
});
