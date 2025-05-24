<template>
	<table class="bo-table m-0 h-full w-full border-collapse rounded-md">
		<thead>
			<tr>
				<th
					v-for="(column, index) in columns"
					:key="column.id"
					:class="[
						'bo-table__header w-full',
						'border-b border-neutral-200 bg-neutral-50 px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200',
						column.class,
					]"
				>
					<bo-icon
						v-if="column.prefixIcon"
						:icon="column.prefixIcon"
						:size="BoSize.small"
						class="bo-table__prefix-icon"
					/>
					<bo-text
						:value="column.label"
						:size="BoFontSize.sm"
						:color="BoTextColor.default"
						:weight="BoFontWeight.medium"
						:data-testid="`bo-table-header-${id}-${column.id}`"
					/>
					<bo-icon
						v-if="column.suffixIcon"
						:icon="column.suffixIcon"
						:size="BoSize.small"
						class="bo-table__suffix-icon"
					/>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-for="(row, index) in data"
				:key="row?.id ?? index"
				:class="[
					'bo-table__row',
					'border-b border-neutral-200 dark:border-neutral-700',
					index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-neutral-50 dark:bg-neutral-800',
				]"
			>
				<td
					v-for="column in columns"
					:key="column.id"
					:class="[
						'bo-table__cell',
						'px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200',
						column.class,
					]"
				>
					<span>
						{{ row[column.id ?? ''] }}
					</span>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { type BoTableProps } from './bo-table.js';

const props = withDefaults(defineProps<BoTableProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	data: () => [],
	columns: () => [],
	customRowComponent: () => null,
	customRowComponentProps: () => [],
});
</script>
