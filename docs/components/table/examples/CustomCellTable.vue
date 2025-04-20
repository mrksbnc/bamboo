<template>
	<bo-table
		:items="users"
		:columns="columns"
	>
		<template #cell(actions)="{ item }">
			<div class="flex space-x-2">
				<button
					class="text-blue-500 hover:text-blue-700"
					@click="editUser(item)"
				>
					Edit
				</button>
				<button
					class="text-red-500 hover:text-red-700"
					@click="deleteUser(item)"
				>
					Delete
				</button>
			</div>
		</template>
	</bo-table>
</template>

<script setup lang="ts">
import { BoTable } from '@/components'
import { ref } from 'vue'

const users = ref([
	{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
	{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
])

const columns = ref([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Name', field: 'name', sortable: true },
	{ key: 'email', label: 'Email', field: 'email' },
	{ key: 'role', label: 'Role', field: 'role', sortable: true },
	{ key: 'actions', label: 'Actions', sortable: false },
])

const editUser = (user) => {
	alert(`Edit user: ${user.name}`)
}

const deleteUser = (user) => {
	alert(`Delete user: ${user.name}`)
}
</script>
