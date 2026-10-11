import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import { useToast } from '../../composables/use-toast.js';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';
import BoToastViewport from './bo-toast-viewport.vue';
import BoToast from './bo-toast.vue';

describe('BoToast', () => {
	it('dismisses when its close button is clicked', async () => {
		const wrapper = mount(BoToast, {
			props: { title: 'Saved' },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		await wrapper.find('button').trigger('click');

		expect(wrapper.emitted('close')).toHaveLength(1);
		expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
	});

	it('dismisses after its duration', () => {
		vi.useFakeTimers();
		const wrapper = mount(BoToast, {
			props: { duration: 1000 },
			global: { components: { BoButton, BoIcon, BoText } },
		});

		vi.advanceTimersByTime(1000);
		expect(wrapper.emitted('close')).toHaveLength(1);
		vi.useRealTimers();
	});

	it('stacks default toasts and routes all supported positions', async () => {
		const toast = useToast();
		toast.clear();
		const positions = [
			'top-left',
			'top-center',
			'top-right',
			'bottom-left',
			'bottom-center',
			'bottom-right',
		] as const;
		const wrappers = positions.map((position) => mount(BoToastViewport, { props: { position } }));

		toast.show({ title: 'First', duration: 0 });
		toast.show({ title: 'Second', variant: 'destructive', duration: 0 });
		for (const position of positions) {
			toast.show({ title: position, position, variant: 'success', duration: 0 });
		}
		await nextTick();

		for (const position of positions) {
			const viewport = document.body.querySelector<HTMLElement>(
				`.bo-toast-viewport[data-position="${position}"]`,
			);
			expect(viewport).not.toBeNull();
		}

		const topRight = document.body.querySelector<HTMLElement>(
			'.bo-toast-viewport[data-position="top-right"]',
		);
		expect(topRight?.firstElementChild?.classList).toContain('bo-toast-viewport__list');
		expect(topRight?.querySelector('.bo-toast[data-stack-index="2"]')).not.toBeNull();
		expect(topRight?.querySelectorAll('.bo-toast')).toHaveLength(3);
		expect(topRight?.querySelector('.bo-toast--default')).not.toBeNull();
		expect(topRight?.querySelector('.bo-toast--destructive')).not.toBeNull();

		wrappers.forEach((wrapper) => wrapper.unmount());
		toast.clear();
	});
});
