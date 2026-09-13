import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoPagination from './bo-pagination.vue';

describe('BoPagination', () => {
	it('renders current page accessibly and updates page navigation', async () => {
		const w = mount(BoPagination, { props: { total: 50, pageSize: 10, page: 2 } });
		expect(w.find('[aria-current="page"]').text()).toBe('2');
		await w.find('[aria-label="Next page"]').trigger('click');
		expect(w.emitted('update:page')).toEqual([[3]]);
		await w.find('[aria-label="Previous page"]').trigger('click');
		expect(w.emitted('update:page')).toEqual([[3], [2]]);
	});
});
