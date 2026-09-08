import { HTMLAttributes } from 'vue';
import { ComponentManifest, ManifestDefaults } from '../manifests/types.js';

export type BoChartType = 'line' | 'area' | 'bar' | 'pie' | 'donut';

export interface BoChartSeries {
	name: string;
	data: number[];
	color?: string;
}

export interface BoChartProps {
	id?: HTMLElement['id'];
	dataTestId?: string;
	type?: BoChartType;
	title?: string;
	labels?: string[];
	series?: BoChartSeries[];
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	stacked?: boolean;
	ariaLabel?: HTMLAttributes['aria-label'];
}

type BoChartManifestDefaults = ManifestDefaults<
	BoChartProps,
	'type' | 'height' | 'showLegend' | 'showGrid' | 'stacked'
>;

export interface BoChartStyleManifest {
	readonly base: 'bo-chart';
	readonly header: 'bo-chart__header';
	readonly title: 'bo-chart__title';
	readonly plot: 'bo-chart__plot';
	readonly svg: 'bo-chart__svg';
	readonly grid: 'bo-chart__grid';
	readonly axis: 'bo-chart__axis';
	readonly line: 'bo-chart__line';
	readonly area: 'bo-chart__area';
	readonly bar: 'bo-chart__bar';
	readonly point: 'bo-chart__point';
	readonly pie: 'bo-chart__pie';
	readonly legend: 'bo-chart__legend';
	readonly legendItem: 'bo-chart__legend-item';
	readonly legendSwatch: 'bo-chart__legend-swatch';
	readonly empty: 'bo-chart__empty';
}

export type ChartManifest = ComponentManifest<
	BoChartStyleManifest,
	BoChartManifestDefaults,
	'Chart'
>;
