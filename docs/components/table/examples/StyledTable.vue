<template>
	<div class="space-y-6">
		<div>
			<h3 class="mb-2 text-sm font-medium">Bordered Table</h3>
			<bo-table
				:items="data"
				:columns="columns"
				bordered
			/>
		</div>

		<div>
			<h3 class="mb-2 text-sm font-medium">Striped Table</h3>
			<bo-table
				:items="data"
				:columns="columns"
				striped
			/>
		</div>

		<div>
			<h3 class="mb-2 text-sm font-medium">Hoverable Table</h3>
			<bo-table
				:items="data"
				:columns="columns"
				hoverable
			/>
		</div>

		<div>
			<h3 class="mb-2 text-sm font-medium">Combined Styles</h3>
			<bo-table
				:items="data"
				:columns="columns"
				bordered
				striped
				hoverable
				size="large"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoTable } from '@/components'
import { ref } from 'vue'

const data = ref([
	{ id: 1, name: 'Product A', price: 25.99, stock: 120 },
	{ id: 2, name: 'Product B', price: 35.99, stock: 80 },
	{ id: 3, name: 'Product C', price: 15.99, stock: 0 },
])

const columns = ref([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Product Name', field: 'name', sortable: true },
	{
		key: 'price',
		label: 'Price',
		field: 'price',
		sortable: true,
		align: 'right',
	},
	{ key: 'stock', label: 'Stock', field: 'stock', sortable: true },
])
</script>
