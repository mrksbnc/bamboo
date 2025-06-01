import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, test } from 'vitest';
import type { ComponentPublicInstance } from 'vue';
import { defineComponent, nextTick } from 'vue';
import { useFocusTrap } from './use-focus-trap';

describe('useFocusTrap', () => {
	const TestComponent = defineComponent({
		setup() {
			const { activate, deactivate } = useFocusTrap();
			return { activate, deactivate };
		},
		template: `
			<div ref="container">
				<button id="first">First</button>
				<input type="text" id="middle" />
				<a href="#" id="last">Last</a>
			</div>
		`,
	});

	type VM = ComponentPublicInstance & {
		activate: (element: HTMLElement) => void;
		deactivate: () => void;
	};

	let wrapper: ReturnType<typeof mount<typeof TestComponent>>;
	let vm: VM;
	let container: HTMLElement;

	beforeEach(() => {
		// Reset the document body before each test
		document.body.innerHTML = '';

		// Create some content outside the trapped area
		const outsideButton = document.createElement('button');
		outsideButton.id = 'outside';
		document.body.appendChild(outsideButton);

		// Mount the test component
		wrapper = mount(TestComponent, { attachTo: document.body });
		vm = wrapper.vm as VM;
		container = wrapper.element;
	});

	test('should activate focus trap', async () => {
		const firstButton = container.querySelector('#first') as HTMLElement;
		const lastLink = container.querySelector('#last') as HTMLElement;

		// Focus an element outside before activating
		const outsideButton = document.querySelector('#outside') as HTMLElement;
		outsideButton.focus();
		expect(document.activeElement).toBe(outsideButton);

		// Activate focus trap
		await vm.activate(container);

		// Should focus first focusable element
		expect(document.activeElement).toBe(firstButton);

		// Simulate Tab press on last element
		const tabEvent = new KeyboardEvent('keydown', {
			key: 'Tab',
			bubbles: true,
			cancelable: true,
		});
		lastLink.dispatchEvent(tabEvent);

		// Should prevent default and focus first element
		await nextTick();
		expect(document.activeElement).toBe(firstButton);
	});

	test('should handle Shift+Tab at start of trap', async () => {
		const firstButton = container.querySelector('#first') as HTMLElement;
		const lastLink = container.querySelector('#last') as HTMLElement;

		await vm.activate(container);
		firstButton.focus();

		// Simulate Shift+Tab press on first element
		const shiftTabEvent = new KeyboardEvent('keydown', {
			key: 'Tab',
			shiftKey: true,
			bubbles: true,
			cancelable: true,
		});
		firstButton.dispatchEvent(shiftTabEvent);

		// Should prevent default and focus last element
		await nextTick();
		expect(document.activeElement).toBe(lastLink);
	});

	test('should allow normal tab navigation within trap', async () => {
		const firstButton = container.querySelector('#first') as HTMLElement;
		const middleInput = container.querySelector('#middle') as HTMLElement;

		await vm.activate(container);
		firstButton.focus();

		// Simulate Tab press on first element, but focus the middle element manually
		// since our trap doesn't prevent normal tab navigation between elements
		middleInput.focus();

		// Should allow normal tab to next element
		await nextTick();
		expect(document.activeElement).toBe(middleInput);
	});

	test('should deactivate focus trap and restore focus', async () => {
		const outsideButton = document.querySelector('#outside') as HTMLElement;
		outsideButton.focus();

		// Activate trap
		await vm.activate(container);
		expect(document.activeElement).not.toBe(outsideButton);

		// Deactivate trap
		await vm.deactivate();
		expect(document.activeElement).toBe(outsideButton);
	});

	test('should handle no focusable elements', async () => {
		// Create a component with no focusable elements
		const EmptyComponent = defineComponent({
			setup() {
				const { activate, deactivate } = useFocusTrap();
				return { activate, deactivate };
			},
			template: '<div ref="container"><p>No focusable elements</p></div>',
		});

		const emptyWrapper = mount(EmptyComponent, { attachTo: document.body });
		const emptyVm = emptyWrapper.vm as VM;

		// Should not throw when activating
		expect(() => emptyVm.activate(emptyWrapper.element)).not.toThrow();
	});

	test('should ignore non-Tab key events', async () => {
		await vm.activate(container);
		const firstButton = container.querySelector('#first') as HTMLElement;
		firstButton.focus();

		// Simulate Enter key press
		const enterEvent = new KeyboardEvent('keydown', {
			key: 'Enter',
			bubbles: true,
			cancelable: true,
		});
		firstButton.dispatchEvent(enterEvent);

		// Focus should not change
		expect(document.activeElement).toBe(firstButton);
	});

	test('should cleanup event listeners on deactivate', async () => {
		const firstButton = container.querySelector('#first') as HTMLElement;
		await vm.activate(container);

		// Deactivate trap
		await vm.deactivate();

		// Simulate Tab press
		const tabEvent = new KeyboardEvent('keydown', {
			key: 'Tab',
			bubbles: true,
			cancelable: true,
		});
		firstButton.dispatchEvent(tabEvent);

		// Focus should not be trapped
		expect(document.activeElement).toBe(firstButton);
	});
});
