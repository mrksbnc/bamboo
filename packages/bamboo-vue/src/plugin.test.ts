import { describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { useDrawer } from './composables/use-drawer.js';
import { useModal } from './composables/use-modal.js';
import { useToast } from './composables/use-toast.js';
import { BambooVue } from './plugin.js';

describe('BambooVue', () => {
	it('registers every public component with a Vue app', () => {
		const app = createApp({});
		BambooVue.install(app);

		expect(app.component('BoButton')).toBeDefined();
		expect(app.component('BoDropdownContent')).toBeDefined();
		expect(app.component('BoMenubarSubTrigger')).toBeDefined();
	});

	it('provides isolated imperative state for each Vue app', () => {
		let firstToast: ReturnType<typeof useToast> | undefined;
		let firstDrawer: ReturnType<typeof useDrawer> | undefined;
		let firstModal: ReturnType<typeof useModal> | undefined;
		const first = createApp({
			setup() {
				firstToast = useToast();
				firstDrawer = useDrawer();
				firstModal = useModal();
				return () => null;
			},
		});
		BambooVue.install(first);
		const firstRoot = document.createElement('div');
		first.mount(firstRoot);

		let secondToast: ReturnType<typeof useToast> | undefined;
		let secondDrawer: ReturnType<typeof useDrawer> | undefined;
		let secondModal: ReturnType<typeof useModal> | undefined;
		const second = createApp({
			setup() {
				secondToast = useToast();
				secondDrawer = useDrawer();
				secondModal = useModal();
				return () => null;
			},
		});
		BambooVue.install(second);
		const secondRoot = document.createElement('div');
		second.mount(secondRoot);

		expect(firstToast).not.toBe(secondToast);
		expect(firstDrawer).not.toBe(secondDrawer);
		expect(firstModal).not.toBe(secondModal);
		firstToast?.show({ title: 'First app', duration: 0 });
		firstDrawer?.show({ title: 'First app' });
		firstModal?.open({ component: {} as never });
		expect(firstToast?.toasts.value).toHaveLength(1);
		expect(secondToast?.toasts.value).toHaveLength(0);
		expect(firstDrawer?.drawers.value).toHaveLength(1);
		expect(secondDrawer?.drawers.value).toHaveLength(0);
		expect(firstModal?.instances.value).toHaveLength(1);
		expect(secondModal?.instances.value).toHaveLength(0);

		first.unmount();
		second.unmount();
	});
});
