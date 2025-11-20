<template>
	<nav
		:id="id"
		:class="componentBaseClasses"
		:aria-label="ariaLabel || 'Pagination'"
		:data-testid="dataTestId"
	>
		<button
			type="button"
			class="bo-pagination__prev"
			:disabled="currentPage === 1"
			:aria-label="'Go to previous page'"
			@click="handlePageChange(currentPage - 1)"
		>
			<bo-icon :icon="Icon.chevron_left" :size="iconSize" />
		</button>

		<template v-if="showSimple">
			<bo-text
				:value="`${currentPage} / ${totalPages}`"
				:font-size="textSize"
				:font-weight="BoFontWeight.medium"
				class="bo-pagination__info"
			/>
		</template>

		<template v-else>
			<button
				v-for="page in visiblePages"
				:key="page"
				type="button"
				:class="getPageClasses(page)"
				:disabled="page === '...'"
				:aria-label="page === '...' ? undefined : `Go to page ${page}`"
				:aria-current="page === currentPage ? 'page' : undefined"
				@click="page !== '...' && handlePageChange(page as number)"
			>
				{{ page }}
			</button>
		</template>

		<button
			type="button"
			class="bo-pagination__next"
			:disabled="currentPage === totalPages"
			:aria-label="'Go to next page'"
			@click="handlePageChange(currentPage + 1)"
		>
			<bo-icon :icon="Icon.chevron_right" :size="iconSize" />
		</button>
	</nav>
</template>

<script lang="ts" setup>
	import { Icon } from '@/components/bo-icon';
	import BoIcon from '@/components/bo-icon/bo-icon.vue';
	import { BoFontSize, BoFontWeight, BoText } from '@/components/bo-text';
	import { IdentityService } from '@/services/identity-service';
	import { BoSize } from '@/shared/size';
	import { computed } from 'vue';
	import type { BoPaginationProps } from './bo-pagination';

	const props = withDefaults(defineProps<BoPaginationProps>(), {
		id: IdentityService.instance.getComponentId(),
		dataTestId: IdentityService.instance.getDataTestId('bo-pagination'),
		size: BoSize.md,
		showSimple: false,
		maxVisiblePages: 7,
	});

	const emit = defineEmits<{
		pageChange: [page: number];
	}>();

	const iconSize = computed<number>(() => {
		switch (props.size) {
			case BoSize.xs:
				return 12;
			case BoSize.sm:
				return 14;
			case BoSize.lg:
				return 18;
			case BoSize.xl:
				return 20;
			case BoSize.md:
			default:
				return 16;
		}
	});

	const textSize = computed<BoFontSize>(() => {
		switch (props.size) {
			case BoSize.xs:
				return BoFontSize.xs;
			case BoSize.sm:
				return BoFontSize.sm;
			case BoSize.lg:
				return BoFontSize.lg;
			case BoSize.xl:
				return BoFontSize.xl;
			case BoSize.md:
			default:
				return BoFontSize.default;
		}
	});

	const visiblePages = computed<(number | string)[]>(() => {
		const pages: (number | string)[] = [];
		const { currentPage, totalPages, maxVisiblePages } = props;

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
			return pages;
		}

		const halfVisible = Math.floor(maxVisiblePages / 2);
		let startPage = Math.max(1, currentPage - halfVisible);
		let endPage = Math.min(totalPages, currentPage + halfVisible);

		if (currentPage <= halfVisible) {
			endPage = maxVisiblePages - 1;
		} else if (currentPage >= totalPages - halfVisible) {
			startPage = totalPages - maxVisiblePages + 2;
		}

		pages.push(1);

		if (startPage > 2) {
			pages.push('...');
		}

		for (let i = startPage; i <= endPage; i++) {
			if (i !== 1 && i !== totalPages) {
				pages.push(i);
			}
		}

		if (endPage < totalPages - 1) {
			pages.push('...');
		}

		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	});

	const componentBaseClasses = computed<string>(() => {
		return [
			'bo-pagination',
			props.showSimple && 'bo-pagination--simple',
			`bo-pagination--size-${props.size}`,
			props.customCssClass,
		]
			.filter(Boolean)
			.join(' ');
	});

	function getPageClasses(page: number | string): string {
		if (page === '...') {
			return 'bo-pagination__ellipsis';
		}
		return ['bo-pagination__page', page === props.currentPage && 'bo-pagination__page--active']
			.filter(Boolean)
			.join(' ');
	}

	function handlePageChange(page: number): void {
		if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
			emit('pageChange', page);
		}
	}
</script>

<style scoped lang="scss">
	.bo-pagination {
		display: flex;
		align-items: center;
		gap: 0.25rem;

		button {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			border: 1px solid var(--pagination-border);
			background-color: var(--pagination-bg);
			color: var(--pagination-text);
			cursor: pointer;
			transition:
				background-color 0.15s ease-in-out,
				border-color 0.15s ease-in-out,
				color 0.15s ease-in-out;
			border-radius: 0.375rem;

			&:hover:not(:disabled) {
				background-color: var(--pagination-bg-hover);
				color: var(--pagination-text-hover);
			}

			&:focus-visible {
				outline: 2px solid var(--blue-500);
				outline-offset: 2px;
			}

			&:disabled {
				opacity: 0.5;
				cursor: not-allowed;
			}
		}

		&__prev,
		&__next {
			padding: 0.5rem;
		}

		&__page {
			min-width: 2.5rem;
			padding: 0.5rem;

			&--active {
				background-color: var(--pagination-bg-active);
				border-color: var(--pagination-border-active);
				color: var(--pagination-text-active);

				&:hover {
					background-color: var(--pagination-bg-active);
					border-color: var(--pagination-border-active);
				}
			}
		}

		&__ellipsis {
			border: none;
			background: none;
			color: var(--pagination-icon);
			cursor: default;
			min-width: 2.5rem;
			padding: 0.5rem;

			&:hover {
				background: none;
				border: none;
			}
		}

		&__info {
			padding: 0.5rem 1rem;
		}

		&--size-xs {
			button {
				min-width: 2rem;
				padding: 0.25rem;
			}

			.bo-pagination__prev,
			.bo-pagination__next {
				padding: 0.25rem;
			}
		}

		&--size-sm {
			button {
				min-width: 2.25rem;
				padding: 0.375rem;
			}

			.bo-pagination__prev,
			.bo-pagination__next {
				padding: 0.375rem;
			}
		}

		&--size-lg {
			button {
				min-width: 3rem;
				padding: 0.625rem;
			}

			.bo-pagination__prev,
			.bo-pagination__next {
				padding: 0.625rem;
			}
		}

		&--size-xl {
			button {
				min-width: 3.5rem;
				padding: 0.75rem;
			}

			.bo-pagination__prev,
			.bo-pagination__next {
				padding: 0.75rem;
			}
		}
	}
</style>
