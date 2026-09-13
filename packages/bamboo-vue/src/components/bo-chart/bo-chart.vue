<template>
	<section
		:id="id"
		:data-testid="dataTestId"
		:class="CHART_MANIFEST.styles.base"
		role="img"
		:aria-label="ariaLabel ?? `${type} chart`"
		:aria-describedby="`${id}-summary`"
	>
		<header v-if="title" :class="CHART_MANIFEST.styles.header">
			<h2 :class="CHART_MANIFEST.styles.title">{{ title }}</h2>
		</header>
		<div :class="CHART_MANIFEST.styles.plot">
			<svg
				v-if="hasData"
				:class="CHART_MANIFEST.styles.svg"
				:viewBox="`0 0 ${WIDTH} ${height}`"
				:style="{ height: `${height}px` }"
				aria-hidden="true"
			>
				<g v-if="isCartesian">
					<line
						v-for="tick in yTicks"
						:key="tick.key"
						:x1="PLOT_LEFT"
						:x2="PLOT_RIGHT"
						:y1="tick.y"
						:y2="tick.y"
						:class="CHART_MANIFEST.styles.grid"
						:style="{ display: showGrid ? undefined : 'none' }"
					/>
					<text
						v-for="tick in yTicks"
						:key="`label-${tick.key}`"
						:x="PLOT_LEFT - 10"
						:y="tick.y + 4"
						text-anchor="end"
						:class="CHART_MANIFEST.styles.axis"
					>
						{{ tick.label }}
					</text>
					<text
						v-for="(label, index) in labels"
						:key="`x-${index}`"
						:x="xLabel(index)"
						:y="PLOT_BOTTOM + 24"
						text-anchor="middle"
						:class="CHART_MANIFEST.styles.axis"
					>
						{{ label }}
					</text>
					<template v-if="type === 'bar'">
						<rect
							v-for="bar in bars"
							:key="bar.key"
							x="bar.x"
							y="bar.y"
							:width="bar.width"
							:height="bar.height"
							:fill="bar.color"
							:class="CHART_MANIFEST.styles.bar"
						/>
					</template>
					<template v-else>
						<template v-for="line in lines" :key="line.key">
							<path
								v-if="type === 'area'"
								:d="line.areaPath"
								:fill="line.color"
								:class="CHART_MANIFEST.styles.area"
							/>
							<path :d="line.path" :stroke="line.color" :class="CHART_MANIFEST.styles.line" />
							<circle
								v-for="point in line.points"
								:key="point.key"
								:cx="point.x"
								:cy="point.y"
								r="4"
								:fill="line.color"
								:class="CHART_MANIFEST.styles.point"
							/>
						</template>
					</template>
				</g>
				<template v-else>
					<path
						v-for="slice in slices"
						:key="slice.key"
						:d="slice.path"
						:fill="slice.color"
						:class="CHART_MANIFEST.styles.pie"
					/>
				</template>
			</svg>
			<div v-else :class="CHART_MANIFEST.styles.empty" :style="{ height: `${height}px` }">
				No chart data
			</div>
		</div>
		<ul v-if="showLegend && legend.length" :class="CHART_MANIFEST.styles.legend" aria-hidden="true">
			<li v-for="entry in legend" :key="entry.key" :class="CHART_MANIFEST.styles.legendItem">
				<span
					:class="CHART_MANIFEST.styles.legendSwatch"
					:style="{ backgroundColor: entry.color }"
				/>
				{{ entry.label }}
			</li>
		</ul>
		<p :id="`${id}-summary`" class="sr-only">{{ summary }}</p>
	</section>
</template>

<script setup lang="ts">
import { CHART_MANIFEST, generateComponentId, generateDataTestId } from '@workspace/bamboo-core';
import { computed } from 'vue';

const WIDTH = 640;
const PLOT_LEFT = 56;
const PLOT_RIGHT = 616;
const PLOT_TOP = 20;
const PLOT_BOTTOM = 276;
const PLOT_WIDTH = PLOT_RIGHT - PLOT_LEFT;
const PLOT_HEIGHT = PLOT_BOTTOM - PLOT_TOP;
const PALETTE = ['#2563eb', '#16a34a', '#d97706', '#dc2626', '#9333ea', '#0891b2'];

interface Point {
	key: string;
	x: number;
	y: number;
}

interface LineMark {
	key: string;
	color: string;
	path: string;
	areaPath: string;
	points: Point[];
}

interface BarMark {
	key: string;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
}

interface SliceMark {
	key: string;
	path: string;
	color: string;
}

interface LegendMark {
	key: string;
	label: string;
	color: string;
}

interface ChartProps {
	id?: string;
	dataTestId?: string;
	type?: 'line' | 'area' | 'bar' | 'pie' | 'donut';
	title?: string;
	labels?: string[];
	series?: Array<{ name: string; data: number[]; color?: string }>;
	height?: number;
	showLegend?: boolean;
	showGrid?: boolean;
	stacked?: boolean;
	ariaLabel?: string;
}

const props = withDefaults(defineProps<ChartProps>(), {
	id: () => generateComponentId('chart'),
	dataTestId: () => generateDataTestId('chart'),
	type: () => CHART_MANIFEST.defaults.type,
	labels: () => [],
	series: () => [],
	height: () => CHART_MANIFEST.defaults.height,
	showLegend: () => CHART_MANIFEST.defaults.showLegend,
	showGrid: () => CHART_MANIFEST.defaults.showGrid,
	stacked: () => CHART_MANIFEST.defaults.stacked,
});

const id = computed(() => props.id);
const type = computed(() => props.type ?? CHART_MANIFEST.defaults.type);
const height = computed(() => Math.max(180, props.height ?? CHART_MANIFEST.defaults.height));
const labels = computed(() => {
	const count = Math.max(
		props.labels.length,
		...props.series.map((series) => series.data.length),
		0,
	);
	return Array.from({ length: count }, (_, index) => props.labels[index] ?? String(index + 1));
});
const chartSeries = computed(() =>
	props.series.map((series, index) => ({
		...series,
		color: series.color ?? PALETTE[index % PALETTE.length],
	})),
);
const isCartesian = computed(
	() => type.value === 'line' || type.value === 'area' || type.value === 'bar',
);
const hasData = computed(() => props.series.some((series) => series.data.length > 0));
const values = computed(() => chartSeries.value.flatMap((series) => series.data));
const minValue = computed(() => Math.min(0, ...values.value));
const maxValue = computed(() => Math.max(0, ...values.value, 1));
const range = computed(() => Math.max(maxValue.value - minValue.value, 1));
const baseline = computed(() => scaleY(0));

const yTicks = computed(() =>
	Array.from({ length: 5 }, (_, index) => {
		const value = minValue.value + (range.value * index) / 4;
		return {
			key: String(index),
			y: scaleY(value),
			label: Number.isInteger(value) ? String(value) : value.toFixed(1),
		};
	}),
);

const lines = computed<LineMark[]>(() =>
	chartSeries.value.map((series, seriesIndex) => {
		const points = series.data.map((value, index) => ({
			key: `${seriesIndex}-${index}`,
			x: xPosition(index),
			y: scaleY(value),
		}));
		const path = pathFor(points);
		const areaPath = points.length
			? `${path} L ${points.at(-1)!.x} ${baseline.value} L ${points[0]!.x} ${baseline.value} Z`
			: '';
		return {
			key: `line-${seriesIndex}`,
			color: series.color ?? paletteColor(seriesIndex),
			path,
			areaPath,
			points,
		};
	}),
);

const bars = computed<BarMark[]>(() => {
	if (!labels.value.length) {
		return [];
	}
	const groupWidth = (PLOT_WIDTH / labels.value.length) * 0.76;
	const seriesCount = Math.max(chartSeries.value.length, 1);
	const marks: BarMark[] = [];
	labels.value.forEach((_label, index) => {
		const start = xPosition(index, labels.value.length, true) - groupWidth / 2;
		let positiveStack = 0;
		let negativeStack = 0;
		chartSeries.value.forEach((series, seriesIndex) => {
			const value = series.data[index] ?? 0;
			const width = props.stacked ? groupWidth : groupWidth / seriesCount;
			const x = props.stacked ? start : start + seriesIndex * width;
			const lower = props.stacked ? (value >= 0 ? positiveStack : negativeStack) : 0;
			const upper = lower + value;
			if (props.stacked) {
				if (value >= 0) {
					positiveStack = upper;
				} else negativeStack = upper;
			}
			const y = Math.min(scaleY(lower), scaleY(upper));
			marks.push({
				key: `bar-${index}-${seriesIndex}`,
				x,
				y,
				width: Math.max(width - 2, 1),
				height: Math.max(Math.abs(scaleY(lower) - scaleY(upper)), 1),
				color: series.color ?? paletteColor(seriesIndex),
			});
		});
	});
	return marks;
});

const slices = computed<SliceMark[]>(() => {
	const data = chartSeries.value[0]?.data ?? [];
	const total = data.reduce((sum, value) => sum + Math.max(value, 0), 0);
	if (!total) {
		return [];
	}
	const outerRadius = Math.min(PLOT_WIDTH, height.value - 40) / 2;
	const innerRadius = type.value === 'donut' ? outerRadius * 0.55 : 0;
	let angle = -Math.PI / 2;
	return data.map((value, index) => {
		const end = angle + (Math.max(value, 0) / total) * Math.PI * 2;
		const slice = {
			key: `slice-${index}`,
			path: arcPath(angle, end, outerRadius, innerRadius),
			color:
				chartSeries.value[0]?.color && data.length === 1
					? chartSeries.value[0].color
					: paletteColor(index),
		};
		angle = end;
		return slice;
	});
});

const legend = computed<LegendMark[]>(() => {
	if (type.value === 'pie' || type.value === 'donut') {
		return labels.value.map((label, index) => ({
			key: `legend-${index}`,
			label,
			color: paletteColor(index),
		}));
	}
	return chartSeries.value.map((series, index) => ({
		key: `legend-${index}`,
		label: series.name,
		color: series.color ?? paletteColor(index),
	}));
});

const summary = computed(() => {
	if (!hasData.value) {
		return 'No chart data available.';
	}
	if (type.value === 'pie' || type.value === 'donut') {
		return `${type.value} chart with ${labels.value.length} segments.`;
	}
	return `${type.value} chart with ${chartSeries.value.length} series and ${labels.value.length} categories.`;
});

function paletteColor(index: number): string {
	return PALETTE[index % PALETTE.length]!;
}

function scaleY(value: number): number {
	return PLOT_TOP + ((maxValue.value - value) / range.value) * PLOT_HEIGHT;
}

function xPosition(index: number, count = labels.value.length, centered = false): number {
	if (count <= 1) {
		return PLOT_LEFT + PLOT_WIDTH / 2;
	}
	return PLOT_LEFT + ((index + (centered ? 0.5 : 0)) / (centered ? count : count - 1)) * PLOT_WIDTH;
}

function xLabel(index: number): number {
	return xPosition(index, labels.value.length, type.value === 'bar');
}

function pathFor(points: Point[]): string {
	return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ');
}

function arcPath(start: number, end: number, outerRadius: number, innerRadius: number): string {
	const cx = WIDTH / 2;
	const cy = height.value / 2;
	const fullCircle = end - start >= Math.PI * 2 - 0.0001;
	if (fullCircle) {
		if (innerRadius === 0) {
			return `M ${cx} ${cy - outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${cx} ${cy + outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${cx} ${cy - outerRadius} Z`;
		}
		return `M ${cx} ${cy - outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${cx} ${cy + outerRadius} A ${outerRadius} ${outerRadius} 0 1 1 ${cx} ${cy - outerRadius} M ${cx} ${cy - innerRadius} A ${innerRadius} ${innerRadius} 0 1 0 ${cx} ${cy + innerRadius} A ${innerRadius} ${innerRadius} 0 1 0 ${cx} ${cy - innerRadius} Z`;
	}
	const outerStart = [cx + Math.cos(start) * outerRadius, cy + Math.sin(start) * outerRadius];
	const outerEnd = [cx + Math.cos(end) * outerRadius, cy + Math.sin(end) * outerRadius];
	const largeArc = end - start > Math.PI ? 1 : 0;
	if (innerRadius === 0) {
		return `M ${cx} ${cy} L ${outerStart[0]} ${outerStart[1]} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEnd[0]} ${outerEnd[1]} Z`;
	}
	const innerStart = [cx + Math.cos(end) * innerRadius, cy + Math.sin(end) * innerRadius];
	const innerEnd = [cx + Math.cos(start) * innerRadius, cy + Math.sin(start) * innerRadius];
	return `M ${outerStart[0]} ${outerStart[1]} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerEnd[0]} ${outerEnd[1]} L ${innerStart[0]} ${innerStart[1]} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerEnd[0]} ${innerEnd[1]} Z`;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/chart.manifest.css';
</style>
