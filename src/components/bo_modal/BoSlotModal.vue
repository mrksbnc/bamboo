<template>
	<div
		id="modal"
		tabindex="-1"
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
				<div
					:class="[
						'flex w-full rounded-t',
						borderedHeader
							? 'border-b border-gray-200 dark:border-gray-200'
							: '',
						showCloseButton ? 'justify-between' : '',
					]"
				>
					<div class="bo-slot-modal__header-slot w-full">
						<slot name="header" />
					</div>
					<span
						v-if="showCloseButton"
						class="bo-slot-modal__close-button flex cursor-pointer"
						@mouseenter="hover = true"
						@mouseleave="hover = false"
						@click="onModalCloseEvent"
					>
						<bo-icon
							:icon="Icon.x"
							:size="BoSize.default"
							:color="hover ? BoColor.red_600 : BoColor.gray_500"
						/>
					</span>
				</div>
				<!-- Modal body -->
				<div class="bo-slot-modal__body-slot w-full">
					<slot name="body" />
				</div>
				<!-- Modal footer -->
				<span
					:class="[
						'inline-flex w-full flex-wrap',
						borderedFooter
							? 'border-t border-gray-200 dark:border-gray-200'
							: '',
					]"
				>
					<slot name="footer" />
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { BoIcon, Icon } from '@/components/bo_icon';
import { BoColor } from '@/data';
import { BoSize } from '@/data/bo_size.constant';
import { BrowserUtils } from '@/utils/browser_utils';
import { computed, ref, toRefs } from 'vue';

import type { BoSlotModalProps, BoSlotModalWithConstruct } from './types';

const emits = defineEmits<{
	(e: 'update:show', payload: boolean): void;
}>();
const props = withDefaults(defineProps<BoSlotModalProps>(), {
	showCloseButton: true,
	borderedHeader: false,
	borderedFooter: false,
});

const { showCloseButton, widthAsTailwindClass, widthInPercent, widthInPx } =
	toRefs(props);

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

function onModalCloseEvent(): void {
	emits('update:show', false);
}

function handleKeyDown(e: KeyboardEvent): void {
	const isEscape = e.key === 'Escape' || e.keyCode === 27;

	if (isEscape) {
		onModalCloseEvent();
	}

	BrowserUtils.instance.trapTabKey(e, 'modal');
}
</script>
