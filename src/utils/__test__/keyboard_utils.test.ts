import { mount } from '@vue/test-utils';
import { describe, expect, suite, test, vi } from 'vitest';
import { defineComponent } from 'vue';
import { KeyboardUtils } from '../keyboard_utils';

describe('KeyboardUtils', () => {
	suite('trapTabKey', () => {
		const DemoComponent = defineComponent({
			name: 'DemoComponent',
			template: `
                <div id="trap-focus" tabindex="-1" role="dialog">
                    <input type="text" id="input-1" tabindex="1" />
                    <input type="text" id="input-2" tabindex="2" />
                    <input type="text" id="input-3" tabindex="3" />
                </div>
            `,
		});

		test('should trap the tab key', async () => {
			const wrapper = mount(DemoComponent);
			const input1 = wrapper.find('#input-1');
			const input2 = wrapper.find('#input-2');
			const input3 = wrapper.find('#input-3');

			await input1.trigger('keydown.tab', { key: 'Tab', shiftKey: false });
			expect(input1.element.getAttribute('tabindex')).toBe('1');
			expect(input2.element.getAttribute('tabindex')).toBe('2');
			expect(input3.element.getAttribute('tabindex')).toBe('3');

			await input2.trigger('keydown.tab', { key: 'Tab', shiftKey: false });
			expect(input2.element.getAttribute('tabindex')).toBe('2');
			expect(input3.element.getAttribute('tabindex')).toBe('3');

			await input3.trigger('keydown.tab', { key: 'Tab', shiftKey: false });
			expect(input3.element.getAttribute('tabindex')).toBe('3');

			await input3.trigger('keydown.tab', { key: 'Tab', shiftKey: true });
			expect(input3.element.getAttribute('tabindex')).toBe('3');

			await input2.trigger('keydown.tab', { key: 'Tab', shiftKey: true });
			expect(input2.element.getAttribute('tabindex')).toBe('2');

			await input1.trigger('keydown.tab', { key: 'Tab', shiftKey: true });
			expect(input1.element.getAttribute('tabindex')).toBe('1');
		});
	});

	suite('registerEnterKeyHandler', () => {
		test('should register a handler for the enter key', () => {
			const handler = vi.fn();
			KeyboardUtils.registerEnterKeyHandler(
				new KeyboardEvent('keydown', { key: 'Enter' }),
				handler,
			);
			expect(handler).toHaveBeenCalled();
		});

		test('should not register a handler for a non-enter key', () => {
			const handler = vi.fn();
			KeyboardUtils.registerEnterKeyHandler(
				new KeyboardEvent('keydown', { key: 'Tab' }),
				handler,
			);
			expect(handler).not.toHaveBeenCalled();
		});
	});
});
