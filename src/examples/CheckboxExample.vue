<template>
	<div class="mx-auto max-w-md rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
		<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Checkbox Examples</h2>

		<!-- Basic Checkbox -->
		<div class="mb-4">
			<h3 class="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">Basic Checkbox</h3>
			<bo-checkbox
				v-model="isChecked"
				label="I agree to the terms"
			/>
		</div>

		<!-- Linked Checkbox -->
		<div class="mb-4">
			<h3 class="mb-2 text-lg font-medium text-gray-800 dark:text-gray-200">Checkbox with Link</h3>
			<bo-linked-checkbox
				v-model="isAgreed"
				required
			>
				<template #label>
					I agree with the
					<a
						href="#"
						class="text-blue-600 hover:underline dark:text-blue-500"
						>terms and conditions</a
					>.
				</template>
			</bo-linked-checkbox>
		</div>

		<!-- State Output -->
		<div class="mt-6 rounded bg-gray-100 p-4 dark:bg-gray-700">
			<p class="text-gray-900 dark:text-gray-200">
				Basic checkbox is {{ isChecked ? 'checked' : 'unchecked' }}
			</p>
			<p class="text-gray-900 dark:text-gray-200">
				Terms agreement is {{ isAgreed ? 'accepted' : 'not accepted' }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoCheckbox, BoLinkedCheckbox } from '@/components/bo_checkbox';
import { ref } from 'vue';

const isChecked = ref(false);
const isAgreed = ref(false);
</script>
