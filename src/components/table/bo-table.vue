<template>
	<div
		:class="[
			'bo-table__container',
			'w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700',
		]"
		:data-testid="`bo-table-${id}`"
	>
		<table class="bo-table w-full border-collapse">
			<thead>
				<tr>
					<th
						v-for="column in columns"
						:key="column.key"
						:class="[
							'bo-table__header',
							'border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
							column.class,
						]"
					>
						{{ column.label }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(row, index) in data"
					:key="row.id || index"
					:class="[
						'bo-table__row',
						'border-b border-neutral-200 dark:border-neutral-700',
						index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-neutral-50 dark:bg-neutral-800',
					]"
				>
					<td
						v-for="column in columns"
						:key="column.key"
						:class="[
							'bo-table__cell',
							'px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200',
							column.class,
						]"
					>
						<slot
							:name="column.key"
							:row="row"
							:value="row[column.key]"
						>
							{{ row[column.key] }}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { IdentityService } from '@/services/identity-service.js';
import { type BoTableProps } from './bo-table.js';

const props = withDefaults(defineProps<BoTableProps>(), {
	id: () => IdentityService.instance.getComponentId(),
});
</script>
