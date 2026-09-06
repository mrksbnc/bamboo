<template>
	<nav
		:id="id"
		:data-testid="dataTestId"
		:role="role"
		:aria-label="ariaLabel ?? 'Pagination'"
		:class="PAGINATION_MANIFEST.styles.container"
	>
		<ul :class="PAGINATION_MANIFEST.styles.list">
			<li :class="PAGINATION_MANIFEST.styles.item">
				<button
					:class="PAGINATION_MANIFEST.styles.button"
					:disabled="disabled || page <= 1"
					:aria-label="'Previous page'"
					@click="onPrev"
				>
					<bo-icon icon="chevron_left" size="sm" variant="inherit" />
				</button>
			</li>

			<template v-for="p in visiblePages" :key="p">
				<li :class="PAGINATION_MANIFEST.styles.item">
					<span v-if="p === '...'" :class="PAGINATION_MANIFEST.styles.ellipsis">…</span>
					<button
						v-else
						:class="[
							PAGINATION_MANIFEST.styles.button,
							p === page ? PAGINATION_MANIFEST.styles.buttonActive : '',
						]"
						:aria-label="`Page ${p}`"
						:aria-current="p === page ? 'page' : undefined"
						:disabled="disabled"
						@click="() => onPage(p as number)"
					>
						{{ p }}
					</button>
				</li>
			</template>

			<li :class="PAGINATION_MANIFEST.styles.item">
				<button
					:class="PAGINATION_MANIFEST.styles.button"
					:disabled="disabled || page >= totalPages"
					:aria-label="'Next page'"
					@click="onNext"
				>
					<bo-icon icon="chevron_right" size="sm" variant="inherit" />
				</button>
			</li>
		</ul>
	</nav>
</template>

<script setup lang="ts">
import {
	generateComponentId,
	generateDataTestId,
	PAGINATION_MANIFEST,
	type BoPaginationProps,
} from '@workspace/bamboo-core';
import { computed } from 'vue';
import { BoIcon } from '../bo-icon';

const props = withDefaults(defineProps<BoPaginationProps>(), {
	id: () => generateComponentId('pagination'),
	dataTestId: () => generateDataTestId('pagination'),
	pageSize: () => PAGINATION_MANIFEST.defaults.pageSize,
	siblingCount: () => PAGINATION_MANIFEST.defaults.siblingCount,
	role: () => PAGINATION_MANIFEST.defaults.role,
});

const page = defineModel<number>('page', { default: 1 });

const totalPages = computed<number>(() =>
	Math.max(1, Math.ceil(props.total / (props.pageSize ?? 10))),
);

const visiblePages = computed<(number | string)[]>(() => {
	const total = totalPages.value;
	const current = page.value;
	const siblings = props.siblingCount ?? 1;

	if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

	const left = Math.max(2, current - siblings);
	const right = Math.min(total - 1, current + siblings);
	const pages: (number | string)[] = [1];

	if (left > 2) pages.push('...');
	for (let i = left; i <= right; i++) pages.push(i);
	if (right < total - 1) pages.push('...');
	pages.push(total);

	return pages;
});

function onPage(p: number): void {
	if (!props.disabled) page.value = p;
}

function onPrev(): void {
	if (!props.disabled && page.value > 1) page.value--;
}

function onNext(): void {
	if (!props.disabled && page.value < totalPages.value) page.value++;
}
</script>

<style>
@reference '../../lib.css';
@import '@workspace/bamboo-core/manifests/pagination.manifest.css';
</style>
