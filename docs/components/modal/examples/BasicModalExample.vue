<script setup lang="ts">
import { BoModal } from '@/components/bo_modal'
import { BoText } from '@/components/bo_text'
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
			title="Static modal"
			@close="showModal = false"
		>
			<template #content>
				<BoText
					text="With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
					color="secondary"
				/>

				<BoText
					text="The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
					color="secondary"
					class="mt-4"
				/>
			</template>
			<template #footer>
				<div
					class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700"
				>
					<button
						class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
						@click="showModal = false"
					>
						I accept
					</button>
					<button
						class="rounded border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
						@click="showModal = false"
					>
						Decline
					</button>
				</div>
			</template>
		</BoModal>
	</div>
</template>
