<template>
	<Teleport to="body">
		<div
			v-if="isOpen"
			:class="MODAL_STYLE.layout.backdrop"
			role="dialog"
			aria-modal="true"
			:aria-labelledby="constructAttribute(id, 'modal-title')"
			:aria-describedby="constructAttribute(id, 'modal-content')"
			:data-testid="constructAttribute(id, 'modal')"
			@click="onClose"
		>
			<div
				ref="modalRef"
				:class="modalContainerClasses"
				:data-testid="constructAttribute(id, 'modal-container')"
				role="document"
				@click.stop
			>
				<div
					:class="MODAL_STYLE.layout.header"
					:data-testid="constructAttribute(id, 'modal-header')"
				>
					<div :class="MODAL_STYLE.layout.headerContent">
						<slot name="header">
							<bo-text
								v-if="title"
								:id="constructAttribute(id, 'modal-title')"
								:value="title"
								:size="BoFontSize.xl"
								:weight="BoFontWeight.semibold"
								:color="BoTextColor.default"
								:data-testid="constructAttribute(id, 'modal-title')"
							/>
							<bo-text
								v-if="description"
								:value="description"
								:size="BoFontSize.sm"
								:weight="BoFontWeight.medium"
								:color="BoTextColor.secondary"
								:data-testid="constructAttribute(id, 'modal-description')"
							/>
						</slot>
					</div>
					<div
						v-if="showCloseButton"
						:class="MODAL_STYLE.layout.closeButton"
						:data-testid="constructAttribute(id, 'modal-close-button')"
						tabindex="0"
						role="button"
						aria-label="Close modal"
						@keydown.enter="onClose"
						@keydown.space.prevent="onClose"
					>
						<bo-icon
							:icon="Icon.x"
							:size="BoSize.small"
							@click="onClose"
						/>
					</div>
				</div>
				<div
					v-if="$slots.default || content"
					:id="constructAttribute(id, 'modal-content')"
					:class="MODAL_STYLE.layout.content"
					:data-testid="constructAttribute(id, 'modal-content')"
				>
					<slot>
						<bo-text
							v-if="content"
							:value="content"
							:size="BoFontSize.sm"
							:weight="BoFontWeight.regular"
							:color="BoTextColor.secondary"
							:data-testid="constructAttribute(id, 'modal-content-text')"
						/>
					</slot>
				</div>
				<div
					v-if="!!$slots.footer || !!footerButtons.length"
					:class="MODAL_STYLE.layout.footer"
					:data-testid="constructAttribute(id, 'modal-footer')"
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
								:data-testid="constructAttribute(id, 'modal-footer-button')"
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
import { useAttributes } from '@/composables/use-attributes';
import { IdentityService } from '@/services/identity-service.js';
import { TailwindService } from '@/services/tailwind-service.js';
import { BoSize } from '@/shared/bo-size.js';
import { useEventListener } from '@vueuse/core';
import { computed, ref } from 'vue';
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

const { constructAttribute } = useAttributes();

const modalRef = ref<HTMLElement | null>(null);

const MODAL_STYLE = {
	layout: {
		backdrop:
			/*tw*/ 'bo-modal__backdrop fixed inset-0 z-30 flex h-full w-full items-center justify-center bg-neutral-800/80 dark:bg-neutral-900/80',
		container:
			/*tw*/ 'bo-modal__container relative flex flex-col rounded-lg bg-white dark:bg-neutral-800 shadow-lg',
		header: /*tw*/ 'bo-modal__header flex flex-shrink-0 justify-between pt-4',
		headerContent: /*tw*/ 'bo-modal__header-content flex flex-col gap-1',
		closeButton:
			/*tw*/ 'bo-modal__close-button flex max-h-fit cursor-pointer rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-700',
		content: /*tw*/ 'bo-modal__content relative py-4 text-neutral-600 dark:text-neutral-300',
		footer: /*tw*/ 'bo-modal__footer flex shrink-0 flex-wrap items-center justify-end p-4 pt-4',
	},
	size: {
		[BoModalSize.xs]: /*tw*/ 'w-1/4 p-4 m-4',
		[BoModalSize.sm]: /*tw*/ 'w-1/3 p-4 m-4',
		[BoModalSize.md]: /*tw*/ 'w-2/5 p-4 m-4',
		[BoModalSize.lg]: /*tw*/ 'w-3/5 p-4 m-4',
		[BoModalSize.xl]: /*tw*/ 'w-3/4 p-4 m-4',
		[BoModalSize.xxl]: /*tw*/ 'w-screen h-screen',
	},
	footer: {
		[FooterButtonOrientation.horizontal]: /*tw*/ 'flex-row gap-2',
		[FooterButtonOrientation.vertical]: /*tw*/ 'flex-col gap-2',
	},
} as const;

const modalContainerClasses = computed<string>(() => {
	return TailwindService.instance.merge(MODAL_STYLE.layout.container, MODAL_STYLE.size[props.size]);
});

const footerClasses = computed<string>(() => {
	return TailwindService.instance.merge('flex', MODAL_STYLE.footer[props.footerButtonOrientation]);
});

function onClose(): void {
	if (props.closeOnBackdropClick) {
		emit('close');
	}
}

if (typeof document !== 'undefined') {
	useEventListener(document, 'keydown', (e: KeyboardEvent) => {
		if (props.isOpen && e.key === 'Escape') {
			onClose();
		}
	});
}
</script>
