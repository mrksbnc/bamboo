import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { BoButton } from '../bo-button';
import { BoIcon } from '../bo-icon';
import { BoText } from '../bo-text';
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
});
