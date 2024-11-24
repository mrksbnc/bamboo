<template>
	<div
		class="relative z-10"
		aria-labelledby="modal-title"
		role="dialog"
		aria-modal="true"
	>
		<div
			class="fixed inset-0 bg-gray-500/75 transition-opacity"
			aria-hidden="true"
		></div>

		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div
				class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
			>
				<div
					class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
				>
					<div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
								<bo-text
									text="Deactivate account"
									:weight="BoFontWeight.medium"
									:size="BoFontSize.modal_title"
								/>
								<div class="mt-2">
									<bo-text
										text="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
										:size="BoFontSize.small"
										:color="BoTextColor.disabled"
										:white-space="BoTextWhiteSpace.break_spaces"
									/>
								</div>
							</div>
						</div>
					</div>
					<div
						class="gap-1 bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
					>
						<bo-button
							type="submit"
							label="Deactivate"
							:variant="BoButtonVariant.danger"
						/>
						<bo-button
							type="reset"
							label="Cancel"
							:variant="BoButtonVariant.secondary"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoButton, BoButtonVariant } from '../bo_button';
import {
	BoFontSize,
	BoFontWeight,
	BoText,
	BoTextColor,
	BoTextWhiteSpace,
} from '../bo_text';
</script>
