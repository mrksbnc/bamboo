import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BoChart from './bo-chart.vue';

describe('BoChart', () => {
	it('renders line, area, and bar series from shared labels', () => {
		const line = mount(BoChart, {
			props: {
				type: 'line',
				labels: ['Jan', 'Feb', 'Mar'],
				series: [{ name: 'Revenue', data: [10, 20, 15] }],
			},
		});
		expect(line.findAll('path')).toHaveLength(1);
		expect(line.findAll('circle')).toHaveLength(3);
		expect(line.text()).toContain('Revenue');

		const area = mount(BoChart, {
			props: { type: 'area', labels: ['A', 'B'], series: [{ name: 'Users', data: [2, 4] }] },
		});
		expect(area.findAll('path')).toHaveLength(2);

		const bar = mount(BoChart, {
			props: {
				type: 'bar',
				labels: ['A', 'B'],
				series: [
					{ name: 'Current', data: [2, 4] },
					{ name: 'Previous', data: [1, 3] },
				],
			},
		});
		expect(bar.findAll('rect')).toHaveLength(4);
	});

	it('renders pie and donut segments with accessible summaries', () => {
		const pie = mount(BoChart, {
			props: {
				type: 'pie',
				labels: ['Chrome', 'Firefox', 'Safari'],
				series: [{ name: 'Browsers', data: [60, 25, 15] }],
			},
		});
		expect(pie.findAll('path')).toHaveLength(3);
		expect(pie.attributes('role')).toBe('img');
		expect(pie.text()).toContain('Chrome');

		const donut = mount(BoChart, {
			props: { type: 'donut', labels: ['Complete'], series: [{ name: 'Progress', data: [100] }] },
		});
		expect(donut.find('path').attributes('d')).toContain('A');
		expect(donut.find('p.sr-only').text()).toContain('donut chart');
	});

	it('renders an empty state without a chart surface', () => {
		const wrapper = mount(BoChart, { props: { title: 'Empty' } });

		expect(wrapper.find('svg').exists()).toBe(false);
		expect(wrapper.text()).toContain('No chart data');
		expect(wrapper.attributes('aria-label')).toBe('line chart');
	});
});
