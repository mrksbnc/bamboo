<template>
	<div
		id="modal"
		tabindex="0"
		role="dialog"
		aria-modal="true"
		class="fixed top-0 right-0 left-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50 transition-opacity md:inset-0"
		@keydown="handleKeyDown"
	>
		<div :style="modalWidth.style" :class="[modalWidth.class, 'relative max-h-4/6 p-4 transition']">
			<!-- Modal content -->
			<div
				:class="[
					'relative flex flex-col gap-3 overflow-x-hidden overflow-y-auto rounded-lg border border-gray-200 bg-white p-8 shadow',
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
							class="absolute top-5 right-5"
						/>
					</span>
				</div>
				<!-- Modal body -->
				<div class="bo-slot-modal__body-slot w-full">
					<bo-divider v-if="borderedHeader" />
					<slot name="body" />
				</div>
				<!-- Modal footer -->
				<div :class="footerContainerClasses">
					<span class="bo-slot-modal__footer-slot w-full">
						<bo-divider v-if="borderedFooter" />
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
import { BoColor } from '@/shared';
import { BoSize } from '@/shared/bo_size';
import type { StyleConstruct } from '@/types';
import { KeyboardUtils, TailwindUtils } from '@/utils';
import { computed, ref, toRefs } from 'vue';
import type { BoSlotModalProps } from './types';

const emits = defineEmits<{
	(e: 'update:show', payload: boolean): void;
}>();

const props = withDefaults(defineProps<BoSlotModalProps>(), {
	showCloseButton: true,
});

const {
	showCloseButton,
	borderedHeader,
	borderedFooter,
	widthAsTailwindClass,
	widthInPercent,
	widthInPx,
} = toRefs(props);

const hover = ref(false);

const modalWidth = computed<StyleConstruct>(() => {
	const construct: StyleConstruct = {
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
		(!widthAsTailwindClass.value || widthAsTailwindClass.value === '') &&
		!widthInPx.value &&
		!widthInPercent.value
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
