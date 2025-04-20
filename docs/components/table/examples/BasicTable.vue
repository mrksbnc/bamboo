<template>
	<bo-table
		:items="users"
		:columns="columns"
	/>
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
])
</script>
