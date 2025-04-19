<script setup lang="ts">
import { BoModal } from '@/components/bo_modal'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
	<div class="p-4">
		<button
			class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
			@click="showModal = true"
		>
			Open Basic Modal
		</button>

		<BoModal
			v-if="showModal"
			title="Basic Modal"
			subtitle="This is a simple example of the modal component"
			@close="showModal = false"
		>
			<template #content>
				<p class="text-gray-700">
					This modal demonstrates the basic functionality of the BoModal component. It includes a
					title, subtitle, and content.
				</p>
			</template>
			<template #footer>
				<button
					class="mr-2 rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300"
					@click="showModal = false"
				>
					Cancel
				</button>
				<button
					class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
					@click="showModal = false"
				>
					Confirm
				</button>
			</template>
		</BoModal>
	</div>
</template>
