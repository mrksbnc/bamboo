<template>
	<div
		id="modal"
		role="dialog"
		tabindex="-1"
		aria-modal="true"
		class="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 transition-opacity md:inset-0"
		@keydown="handleKeyDown"
	>
		<div
			:style="modalWidth.style"
			:class="[modalWidth.class, 'max-h-4/6 relative p-4 transition']"
		>
			<!-- Modal content -->
			<div
				:class="[
					'relative flex flex-col gap-3 overflow-y-auto overflow-x-hidden rounded-lg border border-gray-200 bg-white p-8 shadow dark:border-gray-600 dark:bg-gray-700',
				]"
			>
				<!-- Modal header -->
				<div :class="headerContainerClasses">
					<span class="bo-slot-modal__header-slot flex w-full flex-col">
						<div class="bo-slot-modal__header-slot w-full">
							<slot name="header" />
						</div>
					</span>
					<span
						v-if="showCloseButton"
						role="button"
						:aria-hidden="!showCloseButton"
						aria-describedby="close-button"
						class="bo-slot-modal__close-button flex cursor-pointer"
						@mouseenter="hover = true"
						@mouseleave="hover = false"
						@click="onModalCloseEvent"
					>
						<bo-icon
							:icon="Icon.x"
							:size="BoSize.default"
							:color="hover ? BoColor.red_600 : BoColor.gray_500"
							class="absolute right-5 top-5"
						/>
					</span>
				</div>
				<!-- Modal body -->
				<div class="bo-slot-modal__body-slot w-full">
					<bo-divider
						v-if="borderedHeader"
						:variant="BoDividerVariant.secondary"
					/>
					<slot name="body" />
				</div>
				<!-- Modal footer -->
				<div :class="footerContainerClasses">
					<span class="bo-slot-modal__footer-slot w-full">
						<bo-divider
							v-if="borderedFooter"
							:variant="BoDividerVariant.secondary"
						/>
						<slot name="footer" />
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoDivider, BoDividerVariant } from '@/components/bo_divider';
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoColor } from '@/data';
import { BoSize } from '@/data/bo_size.constant';
import { KeyboardUtils, TailwindUtils } from '@/utils';
import { computed, ref, toRefs } from 'vue';

import type { BoSlotModalProps, BoSlotModalWithConstruct } from './types';

const emits = defineEmits<{
	(e: 'update:show', payload: boolean): void;
}>();

const props = withDefaults(defineProps<BoSlotModalProps>(), {
	showCloseButton: true,
});

const {
	showCloseButton,

	borderedFooter,
	widthAsTailwindClass,
	widthInPercent,
	widthInPx,
} = toRefs(props);

const hover = ref(false);

const modalWidth = computed<BoSlotModalWithConstruct>(() => {
	const construct: BoSlotModalWithConstruct = {
		style: {},
		class: /*tw*/ '',
	};

	if (widthInPercent.value != null) {
		construct.style = {
			width: `${widthInPercent.value}%`,
		};
	}

	if (widthInPx.value != null) {
		construct.style = {
			width: `${widthInPx.value}px`,
		};
	}

	if (widthAsTailwindClass.value != null) {
		construct.class = widthAsTailwindClass.value;
	}

	if (
		(widthAsTailwindClass.value == null || widthAsTailwindClass.value === '') &&
		widthInPx.value == null &&
		widthInPercent.value == null
	) {
		construct.class = /*tw*/ 'w-full max-w-3xl ';
	}

	return construct;
});

const headerContainerClasses = computed<string>(() => {
	let classes = /*tw*/ 'flex w-full rounded-t';

	if (showCloseButton.value) {
		classes = TailwindUtils.merge(classes, /*tw*/ 'justify-between');
	} else {
		classes = TailwindUtils.merge(classes, /*tw*/ 'justify-start');
	}

	return classes;
});

const footerContainerClasses = computed<string>(() => {
	const classes = /*tw*/ 'inline-flex w-full flex-wrap';

	return classes;
});

function onModalCloseEvent(): void {
	emits('update:show', false);
}

function handleKeyDown(e: KeyboardEvent): void {
	const isEscape = e.key === 'Escape' || e.keyCode === 27;

	if (isEscape) {
		onModalCloseEvent();
	}

	KeyboardUtils.trapTabKey(e, 'modal');
}
</script>
