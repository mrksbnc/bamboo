<script setup lang="ts">
import { BoButton, BoButtonVariant } from '@/components/bo_button'
import { BoModal } from '@/components/bo_modal'
import { BoText, BoTextColor } from '@/components/bo_text'
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
	<div class="p-4">
		<BoButton
			class="rounded"
			:variant="BoButtonVariant.primary"
			label="Open Basic Modal"
			@click="showModal = true"
		/>

		<BoModal
			v-if="showModal"
			title="Static modal"
			@close="showModal = false"
		>
			<template #content>
				<bo-text
					text="With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."
					:color="BoTextColor.secondary"
				/>

				<bo-text
					text="The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."
					:color="BoTextColor.secondary"
					class="mt-4"
				/>
			</template>
			<template #footer>
				<div
					class="flex items-center justify-end space-x-2 border-t border-gray-200 p-4 dark:border-gray-700"
				>
					<BoButton
						:variant="BoButtonVariant.primary"
						label="I accept"
						@click="showModal = false"
					/>
					<BoButton
						:variant="BoButtonVariant.secondary"
						label="Decline"
						@click="showModal = false"
					/>
				</div>
			</template>
		</BoModal>
	</div>
</template>
