import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoResizableHandle from './bo-resizable-handle.vue';
import BoResizablePanel from './bo-resizable-panel.vue';
import BoResizable from './bo-resizable.vue';

describe('BoResizable', () => {
	it('renders panels and a keyboard-accessible handle', async () => {
		const wrapper = mount(BoResizable, {
			global: { components: { BoResizablePanel, BoResizableHandle } },
			slots: {
				default:
					'<bo-resizable-panel>A</bo-resizable-panel><bo-resizable-handle /><bo-resizable-panel>B</bo-resizable-panel>',
			},
		});
		expect(wrapper.findAll('[data-resizable-panel]')).toHaveLength(2);
		const handle = wrapper.find('[role="separator"]');
		expect(handle.attributes('tabindex')).toBe('0');
		await handle.trigger('keydown', { key: 'ArrowRight' });
		expect(wrapper.find('[data-resizable-panel]').attributes('style')).toContain('flex-basis');
	});
});
