import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoProgress from './bo-progress.vue';

describe('BoProgress', () => {
	it('renders bounded progress and value text', () => {
		const w = mount(BoProgress, {
			props: { value: 25, max: 50, label: 'Loading', showValue: true },
		});
		const bar = w.find('[role="progressbar"]');
		expect(bar.attributes('aria-valuenow')).toBe('25');
		expect(bar.attributes('aria-valuemax')).toBe('50');
		expect(w.text()).toContain('50%');
	});
});
