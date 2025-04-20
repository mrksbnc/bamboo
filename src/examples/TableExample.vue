<template>
	<div class="space-y-8 p-6">
		<h1 class="mb-4 text-2xl font-bold">BoTable Examples</h1>

		<!-- Basic Table Example -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">Basic Table</h2>
			<bo-table
				:items="users"
				:columns="userColumns"
			/>
		</div>

		<!-- Table with Search and Pagination -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">With Search and Pagination</h2>
			<bo-table
				:items="users"
				:columns="userColumns"
				searchable
				search-placeholder="Search users..."
				paginated
				:per-page="3"
			/>
		</div>

		<!-- Sortable Table with Row Selection -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">With Row Selection</h2>
			<div
				v-if="selectedUsers.length > 0"
				class="mb-3 rounded bg-blue-50 p-2 dark:bg-blue-900"
			>
				<p class="text-sm">Selected users: {{ selectedUsers.map((u) => u.name).join(', ') }}</p>
			</div>
			<bo-table
				:items="users"
				:columns="userColumns"
				selectable
				multi-select
				row-key="id"
				@selection-change="onSelectionChange"
			/>
		</div>

		<!-- Custom Cell Rendering -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">Custom Cell Rendering</h2>
			<bo-table
				:items="users"
				:columns="userColumnsWithActions"
			>
				<template #cell(role)="{ item }">
					<span
						:class="{
							'text-green-600': item.role === 'Admin',
							'text-blue-600': item.role === 'Editor',
							'text-gray-600': item.role === 'User',
						}"
					>
						{{ item.role }}
					</span>
				</template>
				<template #cell(actions)="{ item }">
					<div class="flex space-x-2">
						<button
							class="text-blue-500 hover:text-blue-700"
							@click="editUser(item)"
						>
							<bo-icon
								:icon="Icon.pencil"
								size="small"
							/>
							Edit
						</button>
						<button
							class="text-red-500 hover:text-red-700"
							@click="deleteUser(item)"
						>
							<bo-icon
								:icon="Icon.trash"
								size="small"
							/>
							Delete
						</button>
					</div>
				</template>
			</bo-table>
		</div>

		<!-- Table with Header Icons -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">With Header Icons</h2>
			<bo-table
				:items="products"
				:columns="productColumns"
			/>
		</div>

		<!-- Table Styling Options -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">Styling Options</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div>
					<h3 class="mb-2 font-medium">Bordered & Striped</h3>
					<bo-table
						:items="products.slice(0, 3)"
						:columns="productColumns"
						bordered
						striped
					/>
				</div>
				<div>
					<h3 class="mb-2 font-medium">Compact Size</h3>
					<bo-table
						:items="products.slice(0, 3)"
						:columns="productColumns"
						size="small"
					/>
				</div>
			</div>
		</div>

		<!-- Status Badges Example -->
		<div class="example-section">
			<h2 class="mb-3 text-xl font-semibold">Status with Badges</h2>
			<bo-table
				:items="orders"
				:columns="orderColumns"
			>
				<template #cell(status)="{ item }">
					<bo-badge :variant="getStatusVariant(item.status)">
						{{ item.status }}
					</bo-badge>
				</template>
			</bo-table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoBadge, BoBadgeVariant, BoTable } from '@/components';
import { BoIcon, Icon } from '@/components/bo_icon';
import type { BoTableColumn } from '@/components/bo_table';
import { ref } from 'vue';

// Basic user data
const users = ref([
	{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
	{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
	{ id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' },
	{ id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor' },
]);

// User columns
const userColumns = ref<BoTableColumn[]>([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Name', field: 'name', sortable: true },
	{ key: 'email', label: 'Email', field: 'email' },
	{ key: 'role', label: 'Role', field: 'role', sortable: true },
]);

// User columns with actions
const userColumnsWithActions = ref<BoTableColumn[]>([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Name', field: 'name', sortable: true },
	{ key: 'email', label: 'Email', field: 'email' },
	{ key: 'role', label: 'Role', field: 'role', sortable: true },
	{ key: 'actions', label: 'Actions', sortable: false },
]);

// Product data
const products = ref([
	{ id: 1, name: 'Product A', price: 25.99, stock: 120 },
	{ id: 2, name: 'Product B', price: 35.99, stock: 80 },
	{ id: 3, name: 'Product C', price: 15.99, stock: 0 },
	{ id: 4, name: 'Product D', price: 45.99, stock: 35 },
	{ id: 5, name: 'Product E', price: 55.99, stock: 15 },
]);

// Product columns with icons
const productColumns = ref<BoTableColumn[]>([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Product Name', field: 'name', sortable: true, headerIcon: Icon.box },
	{
		key: 'price',
		label: 'Price',
		field: 'price',
		sortable: true,
		headerIcon: Icon.currencyDollar,
		align: 'right',
		renderFn: (item) => `$${(item as { price: number }).price.toFixed(2)}`,
	},
	{
		key: 'stock',
		label: 'Stock',
		field: 'stock',
		sortable: true,
		headerIcon: Icon.shoppingCart,
		align: 'center',
		renderFn: (item) => {
			const stock = (item as { stock: number }).stock;
			return stock === 0 ? 'Out of Stock' : stock;
		},
	},
]);

// Order data for status badges example
const orders = ref([
	{ id: 101, customer: 'John Doe', amount: 125.99, status: 'Completed' },
	{ id: 102, customer: 'Jane Smith', amount: 85.5, status: 'Processing' },
	{ id: 103, customer: 'Bob Johnson', amount: 250.0, status: 'Canceled' },
	{ id: 104, customer: 'Alice Williams', amount: 75.25, status: 'Pending' },
	{ id: 105, customer: 'Charlie Brown', amount: 199.99, status: 'Completed' },
]);

// Order columns
const orderColumns = ref<BoTableColumn[]>([
	{ key: 'id', label: 'Order ID', sortable: true },
	{ key: 'customer', label: 'Customer', field: 'customer', sortable: true },
	{
		key: 'amount',
		label: 'Amount',
		field: 'amount',
		sortable: true,
		align: 'right',
		renderFn: (item) => `$${(item as { amount: number }).amount.toFixed(2)}`,
	},
	{ key: 'status', label: 'Status', field: 'status', sortable: true, align: 'center' },
]);

// State for selected users
const selectedUsers = ref<unknown[]>([]);

// Selection change handler
const onSelectionChange = (_keys: (string | number)[], selectedItems: unknown[]) => {
	selectedUsers.value = selectedItems;
};

// Get badge variant based on status
const getStatusVariant = (status: string) => {
	switch (status) {
		case 'Completed':
			return BoBadgeVariant.success;
		case 'Processing':
			return BoBadgeVariant.primary;
		case 'Pending':
			return BoBadgeVariant.warning;
		case 'Canceled':
			return BoBadgeVariant.danger;
		default:
			return BoBadgeVariant.secondary;
	}
};

// Action handlers
const editUser = (user: unknown) => {
	console.log('Edit user:', user);
	// Implementation would go here
};

const deleteUser = (user: unknown) => {
	console.log('Delete user:', user);
	// Implementation would go here
};
</script>

<style scoped>
.example-section {
	@apply mb-10 rounded-lg border border-gray-200 p-4 dark:border-gray-700;
}
</style>
