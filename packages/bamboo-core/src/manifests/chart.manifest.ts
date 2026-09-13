import { ChartManifest } from '../definitions/index.js';

export const CHART_MANIFEST = {
	meta: { name: 'Chart', version: '1.0.0' },
	styles: {
		base: 'bo-chart',
		header: 'bo-chart__header',
		title: 'bo-chart__title',
		plot: 'bo-chart__plot',
		svg: 'bo-chart__svg',
		grid: 'bo-chart__grid',
		axis: 'bo-chart__axis',
		line: 'bo-chart__line',
		area: 'bo-chart__area',
		bar: 'bo-chart__bar',
		point: 'bo-chart__point',
		pie: 'bo-chart__pie',
		legend: 'bo-chart__legend',
		legendItem: 'bo-chart__legend-item',
		legendSwatch: 'bo-chart__legend-swatch',
		empty: 'bo-chart__empty',
	},
	defaults: {
		type: 'line',
		height: 320,
		showLegend: true,
		showGrid: true,
		stacked: false,
	},
} as const satisfies ChartManifest;
