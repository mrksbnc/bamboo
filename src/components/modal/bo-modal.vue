<template>
	<Teleport to="body">
		<div
			v-if="isOpen"
			class="fixed inset-0 z-30 flex h-full w-full items-center justify-center bg-gray-800/80"
			@click="onClose"
		>
			<div
				:class="modalContentClasses"
				:data-testid="`bo-modal-container-${id}`"
			>
				<div
					:id="`bo-modal-title-${id}`"
					class="flex flex-shrink-0 justify-between pt-4"
					:data-testid="`bo-modal-header-${id}`"
				>
					<div class="flex flex-col gap-1">
						<slot name="header">
							<bo-text
								v-if="title"
								:value="title"
								:size="BoFontSize.xl"
								:weight="BoFontWeight.semibold"
								:color="BoTextColor.default"
							/>
							<bo-text
								v-if="description"
								:value="description"
								:size="BoFontSize.sm"
								:weight="BoFontWeight.medium"
								:color="BoTextColor.secondary"
							/>
						</slot>
					</div>
					<div
						class="flex max-h-fit cursor-pointer rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800"
					>
						<bo-icon
							v-if="showCloseButton"
							:icon="Icon.x"
							:size="BoSize.small"
							@click="onClose"
						/>
					</div>
				</div>
				<div
					v-if="$slots.default || content"
					:id="`bo-modal-content-${id}`"
					class="relative py-4 leading-normal font-light text-slate-600"
					:data-testid="`bo-modal-content-${id}`"
				>
					<slot>
						<bo-text
							v-if="content"
							:value="content"
							:size="BoFontSize.sm"
							:weight="BoFontWeight.regular"
							:color="BoTextColor.secondary"
						/>
					</slot>
				</div>
				<div
					v-if="!!$slots.footer || !!footerButtons.length"
					class="flex shrink-0 flex-wrap items-center justify-end p-4 pt-4"
					:data-testid="`bo-modal-footer-${id}`"
				>
					<slot name="footer">
						<div :class="footerClasses">
							<bo-button
								v-for="button in footerButtons"
								:key="button.id"
								:id="button.id"
								:label="button.label"
								:variant="button.variant"
								:size="button.size"
								:icon="button.icon"
								:disabled="button.disabled"
								:is-loading="button.isLoading"
								:full-width="button.fullWidth"
								@click="button.onClick"
							/>
						</div>
					</slot>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import BoButton from '@/components/button/bo-button.vue';
import { Icon } from '@/components/icon/bo-icon.js';
import BoIcon from '@/components/icon/bo-icon.vue';
import { BoFontSize, BoFontWeight, BoTextColor } from '@/components/text/bo-text.js';
import BoText from '@/components/text/bo-text.vue';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { computed } from 'vue';
import { BoModalSize, FooterButtonOrientation, type BoModalProps } from './bo-modal.js';

const props = withDefaults(defineProps<BoModalProps>(), {
	id: () => IdentityService.instance.getComponentId(),
	isOpen: false,
	size: BoModalSize.md,
	showCloseButton: true,
	closeOnBackdropClick: true,
	footerButtons: () => [],
	footerButtonOrientation: FooterButtonOrientation.horizontal,
});

const emit = defineEmits<{
	(e: 'close'): void;
}>();

const modalBodyClasses =
	/*tw*/ 'bo-modal-body relative flex flex-col rounded-lg bg-white shadow-sm p-6';

const modalSizeClasses = computed<string>(() => {
	switch (props.size) {
		case BoModalSize.xs:
			return /*tw*/ 'w-1/4 p-4 m-4';
		case BoModalSize.sm:
			return /*tw*/ 'w-1/3 p-4 m-4';
		case BoModalSize.lg:
			return /*tw*/ 'w-3/5 p-4 m-4';
		case BoModalSize.xl:
			return /*tw*/ 'w-3/4 p-4 m-4';
		case BoModalSize.xxl:
			return /*tw*/ 'w-screen h-screen';
		case BoModalSize.md:
		default:
			return /*tw*/ 'w-2/5 p-4 m-4';
	}
});

const modalContentClasses = computed<string>(() => {
	return TailwindService.instance.merge(modalBodyClasses, modalSizeClasses.value);
});

const footerClasses = computed<string>(() => {
	return TailwindService.instance.merge(
		/*tw*/ 'flex gap-2',
		props.footerButtonOrientation === FooterButtonOrientation.horizontal
			? /*tw*/ 'flex-row'
			: /*tw*/ 'flex-col',
	);
});

function onClose(): void {
	if (props.closeOnBackdropClick) {
		emit('close');
	}
}
</script>
