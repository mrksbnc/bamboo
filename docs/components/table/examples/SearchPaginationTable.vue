<template>
	<bo-table
		:items="users"
		:columns="columns"
		searchable
		search-placeholder="Search users..."
		paginated
		:per-page="5"
	/>
</template>

<script setup lang="ts">
import { BoTable } from '@/components'
import { ref } from 'vue'

const users = ref([
	{ id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
	{ id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
	{ id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
	{ id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin' },
	{ id: 5, name: 'Michael Brown', email: 'michael@example.com', role: 'User' },
	{ id: 6, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor' },
	{ id: 7, name: 'David Miller', email: 'david@example.com', role: 'User' },
])

const columns = ref([
	{ key: 'id', label: 'ID', sortable: true },
	{ key: 'name', label: 'Name', field: 'name', sortable: true },
	{ key: 'email', label: 'Email', field: 'email' },
	{ key: 'role', label: 'Role', field: 'role', sortable: true },
])
</script>
